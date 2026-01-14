package osmpbfdb

import (
	"sync"
	"time"

	"github.com/hashicorp/golang-lru/v2/expirable"
	"github.com/paulmach/osm"
)

type lruCache[K comparable] struct {
	mu  sync.RWMutex
	lru *expirable.LRU[K, []osm.Object]
}

func newLRUObjCache[K comparable](maxSize int) *lruCache[K] {
	return &lruCache[K]{
		lru: expirable.NewLRU[K, []osm.Object](maxSize, nil, time.Hour),
	}
}

var _ objCache[int] = (*lruCache[int])(nil)

func (c *lruCache[K]) Get(key K) ([]osm.Object, bool) {
	c.mu.RLock()
	defer c.mu.RUnlock()

	return c.lru.Get(key)
}

func (c *lruCache[K]) Set(key K, value []osm.Object) {
	c.mu.Lock()
	defer c.mu.Unlock()

	c.lru.Add(key, value)
}

func (c *lruCache[K]) Add(key K, value osm.Object) {
	c.mu.Lock()
	defer c.mu.Unlock()

	oldValue, _ := c.lru.Get(key)
	c.lru.Add(key, append(oldValue, value))
}
