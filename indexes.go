package osmpbfdb

import (
	"fmt"
	"log/slog"
	"os"
	"path"

	"github.com/paulmach/osm"
	"github.com/royalcat/osmpbfdb/internal/osmblob"
	"github.com/royalcat/osmpbfdb/internal/winindex"
)

type Indexes struct {
	NodeIndex     *winindex.Index[osm.NodeID]
	WayIndex      *winindex.Index[osm.WayID]
	RelationIndex *winindex.Index[osm.RelationID]
}

func openIndexes(parentLog *slog.Logger, indexDir string, blobReader *osmblob.BlobReader) (*Indexes, error) {
	indexes := &Indexes{}
	completionFile := path.Join(indexDir, ".complete")

	stat, err := os.Stat(completionFile)
	if err != nil && !os.IsNotExist(err) {
		return nil, fmt.Errorf("failed to stat index directory: %w", err)
	}
	if stat == nil {
		err := os.MkdirAll(indexDir, os.ModePerm)
		if err != nil {
			return nil, err
		}

		indexes, err = buildIndex(parentLog, indexDir, blobReader)
		if err != nil {
			return nil, fmt.Errorf("failed to build index: %w", err)
		}

		err = os.WriteFile(completionFile, []byte{}, os.ModePerm)
		if err != nil {
			return nil, fmt.Errorf("failed to write completion file: %w", err)
		}
		return indexes, nil
	} else {
		nodeIndexFile, err := os.OpenFile(path.Join(indexDir, "nodes"), os.O_RDONLY, 0644)
		if err != nil {
			return nil, fmt.Errorf("failed to open node index file: %w", err)
		}
		indexes.NodeIndex, err = winindex.OpenIndex[osm.NodeID](nodeIndexFile)
		if err != nil {
			return nil, fmt.Errorf("failed to open node index file: %w", err)
		}

		waysIndexFile, err := os.OpenFile(path.Join(indexDir, "ways"), os.O_RDONLY, 0644)
		if err != nil {
			return nil, fmt.Errorf("failed to open node index file: %w", err)
		}
		indexes.WayIndex, err = winindex.OpenIndex[osm.WayID](waysIndexFile)
		if err != nil {
			return nil, fmt.Errorf("failed to open node index file: %w", err)
		}

		relationsIndexFile, err := os.OpenFile(path.Join(indexDir, "relations"), os.O_RDONLY, 0644)
		if err != nil {
			return nil, fmt.Errorf("failed to open node index file: %w", err)
		}
		indexes.RelationIndex, err = winindex.OpenIndex[osm.RelationID](relationsIndexFile)
		if err != nil {
			return nil, fmt.Errorf("failed to open node index file: %w", err)
		}

		return indexes, nil
	}
}
