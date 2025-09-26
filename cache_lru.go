package osmpbfdb

import (
	"time"

	"github.com/hashicorp/golang-lru/v2/expirable"
	"github.com/paulmach/osm"
)

type lruCache[K comparable, V any] struct {
	lru *expirable.LRU[K, V]
}

func newLRUObjCache[K comparable, V any](maxSize int) *lruCache[K, V] {
	return &lruCache[K, V]{
		lru: expirable.NewLRU[K, V](maxSize, nil, time.Hour),
	}
}

var _ objCache[int] = (*lruCache[int, []osm.Object])(nil)

func (c *lruCache[K, V]) Get(key K) (V, bool) {
	return c.lru.Get(key)
}

func (c *lruCache[K, V]) Set(key K, value V) {
	c.lru.Add(key, value)
}
