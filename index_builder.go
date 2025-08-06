package osmpbfdb

import (
	"errors"
	"fmt"
	"io"
	"log/slog"
	"os"
	"path"

	"github.com/paulmach/osm"
	"github.com/royalcat/osmpbfdb/internal/winindex"
	"github.com/royalcat/osmpbfdb/osmproto"
	"golang.org/x/sync/errgroup"
)

// buildIndex decoding process using n goroutines.
func (db *DB) buildIndex(indexDir string) error {
	bytesRead := int64(0)

	// read OSMHeader
	// NOTE: if the first block is not a header, i.e. after a restart we need
	// to decode that block. It gets pushed on the first "input" below.
	n, osmHeaderBlobHeader, osmHeaderBlob, err := db.readFileBlock(0)
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
	nodeIndexFile, err := os.OpenFile(path.Join(indexDir, "nodes"), os.O_CREATE|os.O_RDWR, 0644)
	if err != nil {
		return fmt.Errorf("failed to open node index file: %w", err)
	}
	nodeIndexBuilder, err := winindex.OpenIndexBuilder[osm.NodeID](nodeIndexFile)
	if err != nil {
		return fmt.Errorf("failed to open node index builder: %w", err)
	}
	wayIndexFile, err := os.OpenFile(path.Join(indexDir, "ways"), os.O_CREATE|os.O_RDWR, 0644)
	if err != nil {
		return fmt.Errorf("failed to open way index file: %w", err)
	}
	wayIndexBuilder, err := winindex.OpenIndexBuilder[osm.WayID](wayIndexFile)
	if err != nil {
		return fmt.Errorf("failed to open way index builder: %w", err)
	}
	relationIndexFile, err := os.OpenFile(path.Join(indexDir, "relations"), os.O_CREATE|os.O_RDWR, 0644)
	if err != nil {
		return fmt.Errorf("failed to open relation index file: %w", err)
	}
	relationIndexBuilder, err := winindex.OpenIndexBuilder[osm.RelationID](relationIndexFile)
	if err != nil {
		return fmt.Errorf("failed to open relation index builder: %w", err)
	}

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
			n, blobHeader, blob, err := db.readFileBlock(bytesRead)
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
				db.log.Error("failed to decode blob", slog.Int64("offset", n), slog.String("type", blobAt.blobHeader.GetType()), slog.Any("error", err))
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

	db.log.Info("Finished reading file blocks", slog.Int64("bytes_read", bytesRead))

	// dec.objectIndex = objectIndexBuilder.Build()
	db.nodeIndex, err = nodeIndexBuilder.Build()
	if err != nil {
		return fmt.Errorf("failed to build node index: %w", err)
	}
	db.wayIndex, err = wayIndexBuilder.Build()
	if err != nil {
		return fmt.Errorf("failed to build way index: %w", err)
	}
	db.relationIndex, err = relationIndexBuilder.Build()
	if err != nil {
		return fmt.Errorf("failed to build relation index: %w", err)
	}

	return nil
}
