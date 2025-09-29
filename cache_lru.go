package osmpbfdb

import (
	"time"

	"github.com/hashicorp/golang-lru/v2/expirable"
	"github.com/paulmach/osm"
)

type lruCache[K comparable] struct {
	lru *expirable.LRU[K, []osm.Object]
}

func newLRUObjCache[K comparable](maxSize int) *lruCache[K] {
	return &lruCache[K]{
		lru: expirable.NewLRU[K, []osm.Object](maxSize, nil, time.Hour),
	}
}

var _ objCache[int] = (*lruCache[int])(nil)

func (c *lruCache[K]) Get(key K) ([]osm.Object, bool) {
	return c.lru.Get(key)
}

func (c *lruCache[K]) Set(key K, value []osm.Object) {
	c.lru.Add(key, value)
}
