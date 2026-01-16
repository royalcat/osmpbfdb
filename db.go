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

	skipInfo bool

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
	SkipInfo  bool      // Skip info decoding osm objects inf (version, changeset, user name and id)
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
		skipInfo:   config.SkipInfo,
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

type objSelector struct {
	Nodes     bool
	Ways      bool
	Relations bool
}

func (db *DB) readObjects(offset uint32, selector objSelector) ([]osm.Object, error) {
	// objects, ok := db.readCache.Get(offset)
	// if ok {
	// 	return objects, nil
	// }
	//
	objDecoderParams := osmblob.ObjectDecoderParams{
		SkipInfo: db.skipInfo,
	}

	objects, err, _ := db.readGroup.Do(offset, func() ([]osm.Object, error) {
		// additional check if cache was filled between previous check and group start
		objects, ok := db.readCache.Get(offset)
		if ok {
			return objects, nil
		}

		_, _, blob, err := db.blobReader.ReadFileBlock(int64(offset))
		if err != nil {
			return nil, fmt.Errorf("read file block: %w", err)
		}

		dec, err := osmblob.NewDecoderFromBlob(blob, objDecoderParams)
		if err != nil {
			return nil, fmt.Errorf("create decoder: %w", err)
		}

		if selector.Nodes {
			nodes, err := dec.DecodeNodes()
			if err != nil {
				return nil, fmt.Errorf("decode nodes: %w", err)
			}
			for _, node := range nodes {
				objects = append(objects, node)
			}
		}

		if selector.Ways {
			ways, err := dec.DecodeWays()
			if err != nil {
				return nil, fmt.Errorf("decode ways: %w", err)
			}
			for _, way := range ways {
				objects = append(objects, way)
			}
		}

		if selector.Relations {
			relations, err := dec.DecodeRelations()
			if err != nil {
				return nil, fmt.Errorf("decode relations: %w", err)
			}
			for _, relation := range relations {
				objects = append(objects, relation)
			}
		}

		db.readCache.Set(offset, objects)

		return objects, nil
	})

	return objects, err
}

func (db *DB) Close() error {
	return nil
}
