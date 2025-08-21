package osmpbfdb

import (
	"cmp"
	"context"
	"crypto/sha1"
	"errors"
	"fmt"
	"io"
	"log/slog"
	"os"
	"path"
	"slices"
	"time"

	"github.com/dgraph-io/ristretto/v2"
	"github.com/goware/singleflight"
	"github.com/paulmach/osm"
	"github.com/pbnjay/memory"
	"github.com/royalcat/osmpbfdb/internal/winindex"
	"github.com/royalcat/osmpbfdb/osmproto"
)

const (
	sizeBufSize       = 4
	maxBlobHeaderSize = 64 * 1024        // 64KB
	maxBlobSize       = 32 * 1024 * 1024 // 32MB
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

	readCache *ristretto.Cache[int64, []osm.Object]
	readGroup singleflight.Group[int64, []osm.Object]

	nodeIndex     *winindex.Index[osm.NodeID]
	wayIndex      *winindex.Index[osm.WayID]
	relationIndex *winindex.Index[osm.RelationID]

	log *slog.Logger
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

const minReadCacheSize = maxBlobSize * 5 // around 160MB

// Config of different database knobs
// Zero value can be used for default configuration.
type Config struct {
	IndexDir            string // default is "./osm-index"
	MaxReadCacheSize    int64  // in bytes, default is 2GB
	CacheSizeAutoAdjust bool   // if true, will adjust the cache size based on available memory
}

func (c *Config) SetDefaults() {
	if c.IndexDir == "" {
		c.IndexDir = "./osm-index"
	}
	if c.MaxReadCacheSize <= 0 {
		c.MaxReadCacheSize = 1 << 30 // 2GB
	}
}

// newDecoder returns a new decoder that reads from r.
func OpenDB(ctx context.Context, r io.ReaderAt, config Config) (*DB, error) {
	config.SetDefaults()
	cache, err := ristretto.NewCache(&ristretto.Config[int64, []osm.Object]{
		NumCounters: 1e7,
		BufferItems: 64,
		MaxCost:     config.MaxReadCacheSize,
		Cost: func(_ []osm.Object) int64 {
			return maxBlobSize * blobSizeAmplifier
		},
		// Metrics: true,
	})
	if err != nil {
		return nil, fmt.Errorf("failed to create read cache: %w", err)
	}

	if config.CacheSizeAutoAdjust {
		go func(maxReadCacheSize int64) {
			for range time.Tick(15 * time.Second) {
				freeMem := memory.FreeMemory()
				if freeMem == 0 {
					continue
				}
				currentMaxCost := cache.MaxCost()

				// TODO make sense to make size changes configurable
				if freeMem*2 < uint64(currentMaxCost) {
					suggestedNewCost := currentMaxCost - currentMaxCost/4
					cache.UpdateMaxCost(max(suggestedNewCost, minReadCacheSize))
					continue
				} else if freeMem > uint64(maxReadCacheSize)*2 && currentMaxCost < maxReadCacheSize {
					suggestedNewCost := currentMaxCost + (maxReadCacheSize-currentMaxCost)/2
					cache.UpdateMaxCost(min(maxReadCacheSize, suggestedNewCost))
					continue
				}
			}
		}(config.MaxReadCacheSize)
	}

	db := &DB{
		r:         r,
		readCache: cache,
		log:       slog.Default(), // TODO
	}

	dbHash, err := hashInput(r)
	if err != nil {
		return nil, fmt.Errorf("failed to hash input: %w", err)
	}

	indexDir := path.Join(config.IndexDir, dbHash)
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
	} else {
		nodeIndexFile, err := os.OpenFile(path.Join(indexDir, "nodes"), os.O_RDONLY, 0644)
		if err != nil {
			return nil, fmt.Errorf("failed to open node index file: %w", err)
		}
		db.nodeIndex, err = winindex.OpenIndex[osm.NodeID](nodeIndexFile)
		if err != nil {
			return nil, fmt.Errorf("failed to open node index file: %w", err)
		}

		waysIndexFile, err := os.OpenFile(path.Join(indexDir, "ways"), os.O_RDONLY, 0644)
		if err != nil {
			return nil, fmt.Errorf("failed to open node index file: %w", err)
		}
		db.wayIndex, err = winindex.OpenIndex[osm.WayID](waysIndexFile)
		if err != nil {
			return nil, fmt.Errorf("failed to open node index file: %w", err)
		}

		relationsIndexFile, err := os.OpenFile(path.Join(indexDir, "relations"), os.O_RDONLY, 0644)
		if err != nil {
			return nil, fmt.Errorf("failed to open node index file: %w", err)
		}
		db.relationIndex, err = winindex.OpenIndex[osm.RelationID](relationsIndexFile)
		if err != nil {
			return nil, fmt.Errorf("failed to open node index file: %w", err)
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
	offset, ok := db.nodeIndex.Get(id)
	if !ok {
		return nil, ErrNotFound
	}

	objects, err := db.readObjects(int64(offset), true)
	if err != nil {
		return nil, err
	}

	return findInObjects[*osm.Node](objects, id.FeatureID())
}

func (db *DB) GetWay(id osm.WayID) (*osm.Way, error) {
	offset, ok := db.wayIndex.Get(id)
	if !ok {
		return nil, ErrNotFound
	}

	objects, err := db.readObjects(int64(offset), true)
	if err != nil {
		return nil, err
	}

	return findInObjects[*osm.Way](objects, id.FeatureID())
}

func (db *DB) GetRelation(id osm.RelationID) (*osm.Relation, error) {
	offset, ok := db.relationIndex.Get(id)
	if !ok {
		return nil, ErrNotFound
	}

	objects, err := db.readObjects(int64(offset), true)
	if err != nil {
		return nil, err
	}

	return findInObjects[*osm.Relation](objects, id.FeatureID())
}

func (db *DB) GetObject(id osm.FeatureID) (osm.Object, error) {
	switch id.Type() {
	case osm.TypeNode:
		return db.GetNode(id.NodeID())
	case osm.TypeWay:
		return db.GetWay(id.WayID())
	case osm.TypeRelation:
		return db.GetRelation(id.RelationID())
	default:
		return nil, fmt.Errorf("unknown object type: %s", id.Type())
	}
}

var dataDecoderPool = newSyncPool[*dataDecoder](func() *dataDecoder { return &dataDecoder{} })

func (db *DB) readObjects(offset int64, addToCache bool) ([]osm.Object, error) {

	if out, ok := db.readCache.Get(offset); ok {
		return out, nil
	}

	out, err, _ := db.readGroup.Do(offset, func() ([]osm.Object, error) {
		if objects, ok := db.readCache.Get(offset); ok {
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
		objects = slices.Clip(objects)

		if addToCache {
			db.readCache.Set(offset, slices.Clone(objects), costFromBlob(blob))
		}

		return objects, nil
	})
	return out, err
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
	return maxBlobSize * blobSizeAmplifier
}
