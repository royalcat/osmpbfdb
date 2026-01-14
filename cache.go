package osmpbfdb

import "github.com/paulmach/osm"

type objCache[K comparable] interface {
	Get(key K) ([]osm.Object, bool)
	Set(key K, value []osm.Object)
	// Add(key K, value osm.Object)
}

type CacheType string

const (
	CacheTypeWeak CacheType = "weak"
	CacheTypeLRU  CacheType = "LRU"
)
