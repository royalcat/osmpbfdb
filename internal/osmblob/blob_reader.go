package osmblob

import (
	"context"
	"errors"
	"fmt"
	"io"
	"time"

	"github.com/paulmach/osm"
	"github.com/royalcat/osmpbfdb/osmproto"
	"golang.org/x/sync/semaphore"
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

type BlobReader struct {
	r io.ReaderAt
}

func NewBlobReader(r io.ReaderAt) *BlobReader {
	return &BlobReader{r: r}
}

func (dec *BlobReader) ReadFileBlock(off int64) (int64, *osmproto.BlobHeader, *osmproto.Blob, error) {
	blobHeaderSize, err := dec.readBlobHeaderSize(off)
	if err != nil {
		return 0, nil, nil, err
	}

	blobHeader, err := dec.readBlobHeader(off+sizeBufSize, blobHeaderSize)
	if err != nil {
		return 0, nil, nil, err
	}

	blob, err := dec.readBlob(off+sizeBufSize+int64(blobHeaderSize), blobHeader.GetDatasize())
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

var (
	headerBufPool = newSyncPool(func() []byte { return make([]byte, MaxBlobHeaderSize) })
)

func (dec *BlobReader) readBlobHeader(off int64, blobHeaderSize uint32) (*osmproto.BlobHeader, error) {
	buf := headerBufPool.Get()
	defer headerBufPool.Put(buf)

	buf = buf[:blobHeaderSize]

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

var (
	blobBufPool        = newSyncPool(func() []byte { return make([]byte, MaxBlobSize) })
	readBlobMemLimiter = semaphore.NewWeighted((128 * 1024 * 1024) / MaxBlobSize)
)

func (dec *BlobReader) readBlob(off int64, blobSize int32) (*osmproto.Blob, error) {
	if err := readBlobMemLimiter.Acquire(context.Background(), 1); err != nil {
		return nil, err
	}
	defer readBlobMemLimiter.Release(1)

	buf := blobBufPool.Get()
	defer blobBufPool.Put(buf)

	buf = buf[:blobSize]

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
	data, err := extractData(blob, nil)
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
