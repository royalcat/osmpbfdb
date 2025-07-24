package osmpbfdb

import (
	"bytes"
	"errors"
	"fmt"
	"io"
	"time"

	"github.com/paulmach/osm"
	"github.com/royalcat/osmpbfdb/osmproto"
	"google.golang.org/protobuf/proto"
)

var (
	headerBufPool = newSyncPool[[]byte](func() []byte { return make([]byte, maxBlobHeaderSize) })
	blobBufPool   = newSyncPool[[]byte](func() []byte { return make([]byte, maxBlobSize) })
)

func (dec *DB) readFileBlock(off int64) (int64, *osmproto.BlobHeader, *osmproto.Blob, error) {
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

func (dec *DB) readBlobHeaderSize(off int64) (uint32, error) {
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
	if size >= maxBlobHeaderSize {
		return 0, errors.New("blobHeader size >= 64Kb")
	}
	return size, nil
}

func (dec *DB) readBlobHeader(buf []byte, off int64) (*osmproto.BlobHeader, error) {
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

	if blobHeader.GetDatasize() >= maxBlobSize {
		return nil, errors.New("blob size >= 32Mb")
	}
	return blobHeader, nil
}

func (dec *DB) readBlob(buf []byte, off int64) (*osmproto.Blob, error) {
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
	case blob.Raw != nil:
		return blob.GetRaw(), nil

	case blob.ZlibData != nil:
		r, err := zlibReader(blob.GetZlibData())
		if err != nil {
			return nil, err
		}

		// using the bytes.Buffer allows for the preallocation of the necessary space.
		l := blob.GetRawSize() + bytes.MinRead
		if cap(data) < int(l) {
			data = make([]byte, 0, l+l/10)
		} else {
			data = data[:0]
		}
		buf := bytes.NewBuffer(data)
		if _, err = buf.ReadFrom(r); err != nil {
			return nil, err
		}

		if buf.Len() != int(blob.GetRawSize()) {
			return nil, fmt.Errorf("raw blob data size %d but expected %d", buf.Len(), blob.GetRawSize())
		}

		return buf.Bytes(), nil
	default:
		return nil, errors.New("unknown blob data")
	}
}

func decodeOSMHeader(blob *osmproto.Blob) (*Header, error) {
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
	if headerBlock.OsmosisReplicationTimestamp != nil {
		header.ReplicationTimestamp = time.Unix(*headerBlock.OsmosisReplicationTimestamp, 0).UTC()
	}
	// read bounding box if it exists
	if headerBlock.Bbox != nil {
		// Units are always in nanodegree and do not obey granularity rules. See osmformat.proto
		header.Bounds = &osm.Bounds{
			MinLon: 1e-9 * float64(*headerBlock.Bbox.Left),
			MaxLon: 1e-9 * float64(*headerBlock.Bbox.Right),
			MinLat: 1e-9 * float64(*headerBlock.Bbox.Bottom),
			MaxLat: 1e-9 * float64(*headerBlock.Bbox.Top),
		}
	}

	return header, nil
}
