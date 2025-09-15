package osmpbfdb

import (
	"crypto/sha1"
	"fmt"
	"io"
	"log/slog"
	"path"
	"time"

	"github.com/dgraph-io/ristretto/v2"
	"github.com/goware/singleflight"
	"github.com/paulmach/osm"
	"github.com/pbnjay/memory"
	"github.com/royalcat/osmpbfdb/internal/osmblob"
)

// A Decoder reads and decodes OpenStreetMap PBF data from an input stream.
type DB struct {
	blobReader *osmblob.BlobReader

	readCache *ristretto.Cache[uint32, []osm.Object]
	readGroup singleflight.Group[uint32, []osm.Object]

	indexes *Indexes

	log *slog.Logger
}

const chunkSize = 64 * 1024 // 64KB

func hashInput(r io.ReaderAt) (string, error) {
	chunk := make([]byte, chunkSize)
	n, err := r.ReadAt(chunk, 0)
	if err != nil && err != io.EOF {
		return "", err
	}

	return fmt.Sprintf("%x", sha1.Sum(chunk[:n])), nil
}

const minReadCacheSize = osmblob.MaxBlobSize * 5 // around 160MB

// Config of different database knobs
// Zero value can be used for default configuration.
type Config struct {
	IndexDir            string // default is "./osm-index"
	MaxReadCacheSize    int64  // in bytes, default is 2GB
	CacheSizeAutoAdjust bool   // if true, will adjust the cache size based on available memory
	Logger              *slog.Logger
}

func (c *Config) SetDefaults() {
	if c.IndexDir == "" {
		c.IndexDir = "./osm-index"
	}
	if c.MaxReadCacheSize <= 0 {
		c.MaxReadCacheSize = 1 << 30 // 2GB
	}
	if c.Logger == nil {
		c.Logger = slog.Default()
	}
}

// newDecoder returns a new decoder that reads from r.
func OpenDB(r io.ReaderAt, config Config) (*DB, error) {
	config.SetDefaults()
	cache, err := ristretto.NewCache(&ristretto.Config[uint32, []osm.Object]{
		NumCounters: 1e7,
		BufferItems: 64,
		MaxCost:     config.MaxReadCacheSize,
		Cost: func(_ []osm.Object) int64 {
			return osmblob.MaxBlobSize * cacheBlobSizeAmplifier
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
		blobReader: osmblob.NewBlobReader(r),
		readCache:  cache,
		log:        config.Logger,
	}

	dbHash, err := hashInput(r)
	if err != nil {
		return nil, fmt.Errorf("failed to hash input: %w", err)
	}

	indexDir := path.Join(config.IndexDir, dbHash)
	db.indexes, err = openIndexes(indexDir, db.blobReader)
	if err != nil {
		return nil, fmt.Errorf("failed to open indexes: %w", err)
	}

	return db, nil
}

func (db *DB) readObjects(offset uint32) ([]osm.Object, error) {
	objects, ok := db.readCache.Get(offset)
	if ok {
		return objects, nil
	}

	objects, err, _ := db.readGroup.Do(offset, func() ([]osm.Object, error) {
		// additional check if cache was filled between previous check and group start
		objects, ok := db.readCache.Get(offset)
		if ok {
			return objects, nil
		}

		objects, err := db.blobReader.ReadObjects(int64(offset))
		if err != nil {
			return nil, err
		}

		db.readCache.Set(offset, objects, 0)

		return objects, nil
	})

	return objects, err
}

func (db *DB) Close() error {
	return nil
}

// data actually weighs more in memory than it does on disk, so we need to allocate more memory for it
const cacheBlobSizeAmplifier = 16
