package osmpbfdb

import (
	"sync"
	"weak"

	"github.com/paulmach/osm"
)

type weakObjCache[K comparable] struct {
	mu sync.RWMutex
	m  map[K]weak.Pointer[[]osm.Object]
}

func newWeakObjCache[K comparable]() *weakObjCache[K] {
	return &weakObjCache[K]{
		m: make(map[K]weak.Pointer[[]osm.Object]),
	}
}

func (wm *weakObjCache[K]) Get(key K) ([]osm.Object, bool) {
	wm.mu.RLock()
	defer wm.mu.RUnlock()

	ptr, ok := wm.m[key]
	if !ok {
		return nil, false
	}
	val := ptr.Value()
	if val == nil {
		return nil, false
	}
	return *val, true
}

func (wm *weakObjCache[K]) Set(key K, value []osm.Object) {
	wm.mu.Lock()
	defer wm.mu.Unlock()

	wm.m[key] = weak.Make(&value)
}
