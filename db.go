package osmpbfdb

import (
	"cmp"
	"context"
	"crypto/sha1"
	"errors"
	"fmt"
	"io"
	"os"
	"path"
	"slices"
	"time"

	"github.com/goware/singleflight"
	lru "github.com/hashicorp/golang-lru/v2"
	"github.com/paulmach/osm"
	"github.com/royalcat/osmpbfdb/internal/winindex"
)

const (
	sizeBufSize       = 4
	maxBlobHeaderSize = 64 * 1024
	maxBlobSize       = 32 * 1024 * 1024
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
	osmHeaderType = "OSMHeader"
	osmDataType   = "OSMData"
)

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

// A Decoder reads and decodes OpenStreetMap PBF data from an input stream.
type DB struct {
	r io.ReaderAt

	cache     *lru.TwoQueueCache[int64, []osm.Object]
	readGroup singleflight.Group[int64, []osm.Object]

	nodeIndex     *winindex.Index
	wayIndex      *winindex.Index
	relationIndex *winindex.Index
}

const chunkSize = 64 * 1024

func hashInput(r io.ReaderAt) (string, error) {
	chunk := make([]byte, chunkSize)
	n, err := r.ReadAt(chunk, 0)
	if err != nil && err != io.EOF {
		return "", err
	}

	return fmt.Sprintf("%x", sha1.Sum(chunk[:n])), nil
}

// newDecoder returns a new decoder that reads from r.
func OpenDB(ctx context.Context, r io.ReaderAt, indexDir string) (*DB, error) {
	cache, err := lru.New2Q[int64, []osm.Object](1024)
	if err != nil {
		return nil, err
	}

	db := &DB{
		r:     r,
		cache: cache,
	}

	dbHash, err := hashInput(r)
	if err != nil {
		return nil, fmt.Errorf("failed to hash input: %w", err)
	}

	indexDir = path.Join(indexDir, dbHash)
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

		err = db.buildIndex(indexDir)
		if err != nil {
			return nil, err
		}

		err = os.WriteFile(completionFile, []byte{}, os.ModePerm)
		if err != nil {
			return nil, fmt.Errorf("failed to write completion file: %w", err)
		}
	}

	return db, nil
}

func (dec *DB) Close() error {
	return nil
}

var ErrNotFound = errors.New("object not found")

const featureMask = 0x7FFFFFFFFFFF0000

func featureID(id osm.ObjectID) osm.FeatureID {
	return osm.FeatureID(id & featureMask)
}

func findInObjects[objType osm.Object](objects []osm.Object, id osm.FeatureID) (objType, error) {
	i, ok := slices.BinarySearchFunc(objects, id, func(o osm.Object, id osm.FeatureID) int {
		return cmp.Compare(featureID(o.ObjectID()), id)
	})

	var obj objType

	if !ok {
		return obj, ErrNotFound
	}

	// used for debugging
	// {
	// 	if reflect.TypeOf(objects[i]) != reflect.TypeOf(obj) {
	// 		panic("type mismatch")
	// 	}
	// 	switch obj := objects[i].(type) {
	// 	case *osm.Node:

	// 		if obj.ID != id.NodeID() {
	// 			panic("node id mismatch")
	// 		}
	// 	case *osm.Way:
	// 		if obj.ID != id.WayID() {
	// 			panic("way id mismatch")
	// 		}
	// 	case *osm.Relation:
	// 		if obj.ID != id.RelationID() {
	// 			panic("relation id mismatch")
	// 		}
	// 	}
	// }

	obj, ok = objects[i].(objType)
	if ok {
		return obj, nil
	}

	return obj, ErrNotFound
}

func (db *DB) GetNode(id osm.NodeID) (*osm.Node, error) {
	offset, ok := db.nodeIndex.Get(compactRef(id.FeatureID().Ref()))
	if !ok {
		return nil, ErrNotFound
	}

	objects, err := db.readObjects(int64(offset))
	if err != nil {
		return nil, err
	}

	return findInObjects[*osm.Node](objects, id.FeatureID())
}

func (db *DB) GetWay(id osm.WayID) (*osm.Way, error) {
	offset, ok := db.wayIndex.Get(compactRef(id.FeatureID().Ref()))
	if !ok {
		return nil, ErrNotFound
	}

	objects, err := db.readObjects(int64(offset))
	if err != nil {
		return nil, err
	}

	return findInObjects[*osm.Way](objects, id.FeatureID())
}

func (db *DB) GetRelation(id osm.RelationID) (*osm.Relation, error) {
	offset, ok := db.relationIndex.Get(compactRef(id.FeatureID().Ref()))
	if !ok {
		return nil, ErrNotFound
	}

	objects, err := db.readObjects(int64(offset))
	if err != nil {
		return nil, err
	}

	return findInObjects[*osm.Relation](objects, id.FeatureID())
}

var dataDecoderPool = newSyncPool[*dataDecoder](func() *dataDecoder { return &dataDecoder{} })

func (db *DB) readObjects(offset int64) ([]osm.Object, error) {
	if out, ok := db.cache.Get(offset); ok {
		return out, nil
	}

	out, err, _ := db.readGroup.Do(offset, func() ([]osm.Object, error) {
		if objects, ok := db.cache.Get(offset); ok {
			return objects, nil
		}

		dd := dataDecoderPool.Get()
		defer dataDecoderPool.Put(dd)

		_, _, blob, err := db.readFileBlock(offset)
		if err != nil {
			return nil, err
		}

		objects, err := dd.Decode(blob)
		if err != nil {
			return nil, err
		}

		slices.SortFunc(objects, func(a, b osm.Object) int {
			return cmp.Compare(featureID(a.ObjectID()), featureID(b.ObjectID()))
		})

		db.cache.Add(offset, slices.Clone(objects))

		return objects, nil
	})
	return out, err
}
