package osmpbfdb

import (
	"crypto/sha1"
	"fmt"
	"io"
	"log/slog"
	"path"

	"github.com/goware/singleflight"
	"github.com/paulmach/osm"
	"github.com/royalcat/osmpbfdb/internal/osmblob"
)

// A Decoder reads and decodes OpenStreetMap PBF data from an input stream.
type DB struct {
	blobReader *osmblob.BlobReader

	readCache objCache[uint32]
	readGroup singleflight.Group[uint32, []osm.Object]

	indexes *Indexes

	log *slog.Logger
}

var _ OsmDB = (*DB)(nil)

const chunkSize = 64 * 1024 // 64KB

func hashInput(r io.ReaderAt) (string, error) {
	chunk := make([]byte, chunkSize)
	n, err := r.ReadAt(chunk, 0)
	if err != nil && err != io.EOF {
		return "", err
	}

	return fmt.Sprintf("%x", sha1.Sum(chunk[:n])), nil
}

// Config of different database knobs
//
// Zero value can be used for default configuration.
type Config struct {
	IndexDir  string    // default is "./osm-index"
	CacheType CacheType // default "lru"
	Logger    *slog.Logger
}

func (c *Config) SetDefaults() {
	if c.IndexDir == "" {
		c.IndexDir = "./osm-index"
	}
	if c.Logger == nil {
		c.Logger = slog.Default()
	}
	if c.CacheType == "" {
		c.CacheType = CacheTypeLRU
	}
}

// newDecoder returns a new decoder that reads from r.
func OpenDB(r io.ReaderAt, config Config) (*DB, error) {
	config.SetDefaults()

	var readCache objCache[uint32]
	switch config.CacheType {
	case CacheTypeLRU:
		readCache = newLRUObjCache[uint32](1000)
	case CacheTypeWeak:
		readCache = newWeakObjCache[uint32]()
	default:
		return nil, fmt.Errorf("unknown cache type: %v", config.CacheType)
	}

	db := &DB{
		blobReader: osmblob.NewBlobReader(r),
		readCache:  readCache,
		log:        config.Logger,
	}

	dbHash, err := hashInput(r)
	if err != nil {
		return nil, fmt.Errorf("failed to hash input: %w", err)
	}

	indexDir := path.Join(config.IndexDir, dbHash)
	db.indexes, err = openIndexes(db.log, indexDir, db.blobReader)
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

		db.readCache.Set(offset, objects)

		return objects, nil
	})

	return objects, err
}

func (db *DB) Close() error {
	return nil
}
