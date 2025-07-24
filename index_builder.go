package osmpbfdb

import (
	"errors"
	"fmt"
	"io"
	"log/slog"

	"github.com/paulmach/osm"
	"github.com/royalcat/osmpbfdb/osmproto"
	"golang.org/x/sync/errgroup"
)

// buildIndex decoding process using n goroutines.
func (dec *DB) buildIndex() error {
	bytesRead := int64(0)

	// read OSMHeader
	// NOTE: if the first block is not a header, i.e. after a restart we need
	// to decode that block. It gets pushed on the first "input" below.
	n, osmHeaderBlobHeader, osmHeaderBlob, err := dec.readFileBlock(0)
	if err != nil {
		return err
	}
	bytesRead += n

	if osmHeaderBlobHeader.GetType() == osmHeaderType {
		_, err := decodeOSMHeader(osmHeaderBlob)
		if err != nil {
			return err
		}
	}

	dd := &dataDecoder{}

	// objectIndexBuilder := indexBuilder[osm.ObjectID, int64]{}
	nodeIndexBuilder := indexBuilder[osm.NodeID, uint32]{}
	wayIndexBuilder := indexBuilder[osm.WayID, uint32]{}
	relationIndexBuilder := indexBuilder[osm.RelationID, uint32]{}

	var group errgroup.Group
	type blobAt struct {
		offset     uint32
		blobHeader *osmproto.BlobHeader
		blob       *osmproto.Blob
	}
	blobChan := make(chan blobAt, 20)

	group.Go(func() error {
		defer close(blobChan)

		for {
			n, blobHeader, blob, err := dec.readFileBlock(bytesRead)
			if errors.Is(err, io.EOF) {
				break
			}

			if err != nil {
				return err
			}

			if blobHeader.GetType() != osmDataType {
				return fmt.Errorf("unexpected fileblock of type %s", blobHeader.GetType())
			}

			blobChan <- blobAt{
				offset:     uint32(bytesRead),
				blobHeader: blobHeader,
				blob:       blob,
			}

			bytesRead += n
		}

		return nil
	})

	group.Go(func() error {
		for blobAt := range blobChan {
			objects, err := dd.Decode(blobAt.blob)
			if err != nil {
				slog.Error("failed to decode blob", slog.Int64("offset", n), slog.String("type", blobAt.blobHeader.GetType()), slog.Any("error", err))
				return err
			}

			for _, obj := range objects {
				// objectIndexBuilder.Add(obj.ObjectID(), bytesRead)
				switch obj := obj.(type) {
				case *osm.Node:
					nodeIndexBuilder.Add(obj.ID, uint32(blobAt.offset))
				case *osm.Way:
					wayIndexBuilder.Add(obj.ID, uint32(blobAt.offset))
				case *osm.Relation:
					relationIndexBuilder.Add(obj.ID, uint32(blobAt.offset))
				}
			}
		}

		return nil
	})

	err = group.Wait()
	if err != nil {
		return fmt.Errorf("error during index building: %w", err)
	}

	// dec.objectIndex = objectIndexBuilder.Build()
	dec.nodeIndex = nodeIndexBuilder.Build()
	dec.wayIndex = wayIndexBuilder.Build()
	dec.relationIndex = relationIndexBuilder.Build()

	return nil
}
