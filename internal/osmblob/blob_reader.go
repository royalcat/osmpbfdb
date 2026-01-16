package osmblob

import (
	"errors"
	"fmt"
	"io"
	"time"

	"github.com/paulmach/osm"
	"github.com/royalcat/osmpbfdb/osmproto"
	"google.golang.org/protobuf/proto"
)

const (
	sizeBufSize       = 4
	MaxBlobHeaderSize = 64 * 1024        // 64KB
	MaxBlobSize       = 32 * 1024 * 1024 // 32MB
)

var (
	parseCapabilities = map[string]bool{
		"OsmSchema-V0.6":        true,
		"DenseNodes":            true,
		"HistoricalInformation": true,
	}
)

// osm block data types
const (
	OsmHeaderType = "OSMHeader"
	OsmDataType   = "OSMData"
)

var (
	headerBufPool = newSyncPool[[]byte](func() []byte { return make([]byte, MaxBlobHeaderSize) })
	blobBufPool   = newSyncPool[[]byte](func() []byte { return make([]byte, MaxBlobSize) })
)

type BlobReader struct {
	r io.ReaderAt
}

func NewBlobReader(r io.ReaderAt) *BlobReader {
	return &BlobReader{r: r}
}

func (dec *BlobReader) ReadFileBlock(off int64) (int64, *osmproto.BlobHeader, *osmproto.Blob, error) {
	headerBuf := headerBufPool.Get()
	defer headerBufPool.Put(headerBuf)
	blobBuf := blobBufPool.Get()
	defer blobBufPool.Put(blobBuf)

	blobHeaderSize, err := dec.readBlobHeaderSize(off)
	if err != nil {
		return 0, nil, nil, err
	}

	headerBuf = headerBuf[:blobHeaderSize]
	blobHeader, err := dec.readBlobHeader(headerBuf, off+sizeBufSize)
	if err != nil {
		return 0, nil, nil, err
	}

	blobBuf = blobBuf[:blobHeader.GetDatasize()]
	blob, err := dec.readBlob(blobBuf, off+sizeBufSize+int64(blobHeaderSize))
	if err != nil {
		return 0, nil, nil, err
	}

	bytesRead := sizeBufSize + int64(blobHeaderSize) + int64(blobHeader.GetDatasize())

	return bytesRead, blobHeader, blob, nil
}

func (dec *BlobReader) readBlobHeaderSize(off int64) (uint32, error) {
	var buf [sizeBufSize]byte

	n, err := dec.r.ReadAt(buf[:], off)
	if err != nil {
		return 0, err
	}
	if n != len(buf) {
		return 0, io.ErrUnexpectedEOF
	}

	// size := binary.BigEndian.Uint32(buf[:])
	size := uint32(buf[3]) | uint32(buf[2])<<8 | uint32(buf[1])<<16 | uint32(buf[0])<<24
	if size >= MaxBlobHeaderSize {
		return 0, errors.New("blobHeader size >= 64Kb")
	}
	return size, nil
}

func (dec *BlobReader) readBlobHeader(buf []byte, off int64) (*osmproto.BlobHeader, error) {
	n, err := dec.r.ReadAt(buf, off)
	if err != nil {
		return nil, err
	}
	if n != len(buf) {
		return nil, io.ErrUnexpectedEOF
	}

	blobHeader := &osmproto.BlobHeader{}
	if err := proto.Unmarshal(buf, blobHeader); err != nil {
		return nil, err
	}

	if blobHeader.GetDatasize() >= MaxBlobSize {
		return nil, errors.New("blob size >= 32Mb")
	}
	return blobHeader, nil
}

func (dec *BlobReader) readBlob(buf []byte, off int64) (*osmproto.Blob, error) {
	n, err := dec.r.ReadAt(buf, off)
	if err != nil {
		return nil, err
	}
	if n != len(buf) {
		return nil, io.ErrUnexpectedEOF
	}

	blob := &osmproto.Blob{}
	if err := proto.Unmarshal(buf, blob); err != nil {
		return nil, err
	}
	return blob, nil
}

func getData(blob *osmproto.Blob, data []byte) ([]byte, error) {
	switch {
	case blob.HasRaw():
		return blob.GetRaw(), nil

	case blob.HasZlibData():
		var err error
		data, err = zlibDecompress(blob.GetZlibData(), int64(blob.GetRawSize()))
		if err != nil {
			return nil, err
		}

		if len(data) != int(blob.GetRawSize()) {
			return nil, fmt.Errorf("raw blob data size %d but expected %d", len(data), blob.GetRawSize())
		}

		return data, nil
	default:
		return nil, errors.New("unknown blob data")
	}
}

// Header contains the contents of the header in the pbf file.
type Header struct {
	Bounds               *osm.Bounds
	RequiredFeatures     []string
	OptionalFeatures     []string
	WritingProgram       string
	Source               string
	ReplicationTimestamp time.Time
	ReplicationSeqNum    uint64
	ReplicationBaseURL   string
}

func DecodeOSMHeader(blob *osmproto.Blob) (*Header, error) {
	data, err := getData(blob, nil)
	if err != nil {
		return nil, err
	}

	headerBlock := &osmproto.HeaderBlock{}
	if err := proto.Unmarshal(data, headerBlock); err != nil {
		return nil, err
	}

	// Check we have the parse capabilities
	requiredFeatures := headerBlock.GetRequiredFeatures()
	for _, feature := range requiredFeatures {
		if !parseCapabilities[feature] {
			return nil, fmt.Errorf("parser does not have %s capability", feature)
		}
	}

	// read the header
	header := &Header{
		RequiredFeatures:   headerBlock.GetRequiredFeatures(),
		OptionalFeatures:   headerBlock.GetOptionalFeatures(),
		WritingProgram:     headerBlock.GetWritingprogram(),
		Source:             headerBlock.GetSource(),
		ReplicationBaseURL: headerBlock.GetOsmosisReplicationBaseUrl(),
		ReplicationSeqNum:  uint64(headerBlock.GetOsmosisReplicationSequenceNumber()),
	}

	// convert timestamp epoch seconds to golang time structure if it exists
	if headerBlock.HasOsmosisReplicationTimestamp() {
		header.ReplicationTimestamp = time.Unix(headerBlock.GetOsmosisReplicationTimestamp(), 0).UTC()
	}
	// read bounding box if it exists
	if bbox := headerBlock.GetBbox(); bbox != nil {
		// Units are always in nanodegree and do not obey granularity rules. See osmformat.proto
		header.Bounds = &osm.Bounds{
			MinLon: 1e-9 * float64(bbox.GetLeft()),
			MaxLon: 1e-9 * float64(bbox.GetRight()),
			MinLat: 1e-9 * float64(bbox.GetBottom()),
			MaxLat: 1e-9 * float64(bbox.GetTop()),
		}
	}

	return header, nil
}

// data actually weighs more in memory than it does on disk, so we need to allocate more memory for it
const blobSizeAmplifier = 16

func costFromBlob(blob *osmproto.Blob) int64 {
	if blob == nil {
		return 0
	}
	if blob.GetRawSize() != 0 {
		return int64(blob.GetRawSize()) * blobSizeAmplifier
	}
	if blob.GetRaw() != nil {
		return int64(len(blob.GetRaw())) * blobSizeAmplifier
	}
	return MaxBlobSize * blobSizeAmplifier
}
