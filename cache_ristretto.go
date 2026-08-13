package osmpbfdb

import (
	"time"

	"github.com/dgraph-io/ristretto/v2"
	"github.com/paulmach/osm"
)

type ristrettoCache[K ristretto.Key] struct {
	cache *ristretto.Cache[K, []osm.Object]
}

// newRistrettoObjCache returns an objCache backed by ristretto that holds up
// to maxSize entries. Entries expire an hour after insertion, matching
// newLRUObjCache.
//
// Note that ristretto applies Set calls asynchronously: a Get issued right
// after a Set may miss until the pending write is drained (see Cache.Wait).
// The singleflight in readObjects makes this safe here; the worst case is a
// redundant decode.
func newRistrettoObjCache[K ristretto.Key](maxSize int) (*ristrettoCache[K], error) {
	cache, err := ristretto.NewCache[K, []osm.Object](&ristretto.Config[K, []osm.Object]{
		NumCounters:        10 * int64(maxSize),
		MaxCost:            int64(maxSize),
		BufferItems:        64,
		IgnoreInternalCost: true,
	})
	if err != nil {
		return nil, err
	}
	return &ristrettoCache[K]{cache: cache}, nil
}

var _ objCache[int] = (*ristrettoCache[int])(nil)

func (c *ristrettoCache[K]) Get(key K) ([]osm.Object, bool) {
	return c.cache.Get(key)
}

func (c *ristrettoCache[K]) Set(key K, value []osm.Object) {
	c.cache.SetWithTTL(key, value, 1, time.Hour)
}
