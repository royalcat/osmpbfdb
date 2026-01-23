package osmpbfdb

import "github.com/paulmach/osm"

type objCache[K comparable] interface {
	Get(key K) ([]osm.Object, bool)
	Set(key K, value []osm.Object)
}

type CacheType string

const (
	CacheTypeWeak CacheType = "weak"
	CacheTypeLRU  CacheType = "LRU"
	CacheTypeNone CacheType = "none" // for testing and benchmarking
)

type cacheNone[K any] struct{}

func (c *cacheNone[K]) Get(key K) ([]osm.Object, bool) {
	return nil, false
}

func (c *cacheNone[K]) Set(key K, value []osm.Object) {
}
