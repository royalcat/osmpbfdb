package osmpbfdb

import (
	"container/list"
	"sync"

	"github.com/royalcat/osmpbfdb/internal/osmblob"
)

// CoordCachePolicy selects how the node coordinate cache admits blocks.
type CoordCachePolicy string

const (
	// CoordCachePolicy2Q sends every new block to a small probation queue. A
	// block is promoted to the main queue only when it is requested again
	// while on probation, or when a ghost filter remembers that it was
	// recently evicted from probation. Blocks touched once (the bulk of a
	// planet-sized input, where most shape nodes are used by one way) flow
	// through probation without evicting the blocks that are really reused.
	CoordCachePolicy2Q CoordCachePolicy = "2q"
	// CoordCachePolicyLRU is a plain byte-bounded LRU.
	CoordCachePolicyLRU CoordCachePolicy = "lru"
)

const (
	coordShardCount = 16
	// probationShare is the fraction of a shard's budget given to the
	// probation queue under the 2Q policy.
	probationShare = 0.1
	// ghostCapacity is how many evicted keys one generation of a shard's ghost
	// filter remembers before the generations rotate.
	ghostCapacity = 1 << 14
)

// CoordCacheStats are the counters of the node coordinate cache.
type CoordCacheStats struct {
	Hits          uint64 // served from the main queue
	ProbationHits uint64 // served from probation (and promoted)
	Misses        uint64 // block had to be decoded
	GhostAdmits   uint64 // new blocks admitted straight to main by the ghost filter
	Evictions     uint64 // blocks dropped from main
	Entries       int
	Bytes         int64
}

// Add accumulates o into s.
func (s *CoordCacheStats) Add(o CoordCacheStats) {
	s.Hits += o.Hits
	s.ProbationHits += o.ProbationHits
	s.Misses += o.Misses
	s.GhostAdmits += o.GhostAdmits
	s.Evictions += o.Evictions
	s.Entries += o.Entries
	s.Bytes += o.Bytes
}

// coordCache is a sharded, byte-bounded cache of decoded coordinate blocks,
// keyed by blob offset.
type coordCache struct {
	shards [coordShardCount]coordShard
}

type coordEntry struct {
	key    uint64
	block  *osmblob.NodeCoords
	bytes  int64
	inMain bool
}

type coordShard struct {
	mu sync.Mutex

	twoQ bool

	entries   map[uint64]*list.Element
	main      list.List
	probation list.List

	mainBytes, probBytes   int64
	mainBudget, probBudget int64

	ghost ghostFilter

	stats CoordCacheStats
}

// newCoordCache returns a cache holding about budget bytes, or nil when budget
// is not positive.
func newCoordCache(budget int64, policy CoordCachePolicy) *coordCache {
	if budget <= 0 {
		return nil
	}
	twoQ := policy != CoordCachePolicyLRU

	c := &coordCache{}
	per := budget / coordShardCount
	for i := range c.shards {
		s := &c.shards[i]
		s.twoQ = twoQ
		s.entries = make(map[uint64]*list.Element)
		s.mainBudget = per
		if twoQ {
			s.probBudget = int64(float64(per) * probationShare)
			s.mainBudget = per - s.probBudget
			s.ghost = newGhostFilter(ghostCapacity)
		}
	}
	return c
}

func (c *coordCache) shard(key uint64) *coordShard {
	return &c.shards[(key*0x9E3779B97F4A7C15)>>60] // top 4 bits: 16 shards
}

// get returns the cached block, or nil. A probation hit promotes the block.
func (c *coordCache) get(key uint64) *osmblob.NodeCoords {
	return c.shard(key).get(key, true)
}

// peek is get without the miss accounting, for the re-check inside a decode.
func (c *coordCache) peek(key uint64) *osmblob.NodeCoords {
	return c.shard(key).get(key, false)
}

func (c *coordCache) put(key uint64, block *osmblob.NodeCoords) {
	c.shard(key).put(key, block)
}

func (c *coordCache) Stats() CoordCacheStats {
	var total CoordCacheStats
	for i := range c.shards {
		s := &c.shards[i]
		s.mu.Lock()
		st := s.stats
		st.Entries = len(s.entries)
		st.Bytes = s.mainBytes + s.probBytes
		s.mu.Unlock()
		total.Add(st)
	}
	return total
}

func (s *coordShard) get(key uint64, count bool) *osmblob.NodeCoords {
	s.mu.Lock()
	defer s.mu.Unlock()

	el, ok := s.entries[key]
	if !ok {
		if count {
			s.stats.Misses++
		}
		return nil
	}
	e := el.Value.(*coordEntry)
	if e.inMain {
		s.main.MoveToFront(el)
		if count {
			s.stats.Hits++
		}
		return e.block
	}

	// Second touch while on probation: promote.
	s.probation.Remove(el)
	s.probBytes -= e.bytes
	if count {
		s.stats.ProbationHits++
	}
	s.insertMain(e)
	return e.block
}

func (s *coordShard) put(key uint64, block *osmblob.NodeCoords) {
	s.mu.Lock()
	defer s.mu.Unlock()

	if _, ok := s.entries[key]; ok {
		return // decoded concurrently by another caller
	}
	e := &coordEntry{key: key, block: block, bytes: block.Bytes()}

	if !s.twoQ {
		s.insertMain(e)
		return
	}
	if s.ghost.contains(key) {
		s.stats.GhostAdmits++
		s.insertMain(e)
		return
	}
	s.insertProbation(e)
}

// insertMain adds e at the front of the main queue and evicts from its back
// until the budget holds. A block larger than the whole budget is not cached.
func (s *coordShard) insertMain(e *coordEntry) {
	if e.bytes > s.mainBudget {
		delete(s.entries, e.key)
		return
	}
	e.inMain = true
	s.entries[e.key] = s.main.PushFront(e)
	s.mainBytes += e.bytes

	for s.mainBytes > s.mainBudget {
		back := s.main.Back()
		victim := back.Value.(*coordEntry)
		s.main.Remove(back)
		delete(s.entries, victim.key)
		s.mainBytes -= victim.bytes
		s.stats.Evictions++
	}
}

// insertProbation adds e to probation; blocks pushed out are remembered by the
// ghost filter so a later request can admit them directly.
//
// Probation always keeps the newest block, even when one block is larger than
// its budget (small caches, huge blocks): otherwise nothing could ever be
// admitted. That can exceed the shard budget by one block.
func (s *coordShard) insertProbation(e *coordEntry) {
	s.entries[e.key] = s.probation.PushFront(e)
	s.probBytes += e.bytes

	for s.probBytes > s.probBudget && s.probation.Len() > 1 {
		back := s.probation.Back()
		victim := back.Value.(*coordEntry)
		s.probation.Remove(back)
		delete(s.entries, victim.key)
		s.probBytes -= victim.bytes
		s.ghost.add(victim.key)
	}
}

// ghostFilter is a two-generation bloom filter of recently evicted keys. When
// the current generation fills, it becomes the previous one and the old
// previous one is discarded, which bounds both memory and how long a key is
// remembered. False positives only admit a block to main early.
type ghostFilter struct {
	cur, prev []uint64
	mask      uint64 // bit count - 1
	n, cap    int
}

const ghostBitsPerKey = 16

func newGhostFilter(capacity int) ghostFilter {
	bits := uint64(capacity) * ghostBitsPerKey // capacity is a power of two
	return ghostFilter{
		cur:  make([]uint64, bits/64),
		prev: make([]uint64, bits/64),
		mask: bits - 1,
		cap:  capacity,
	}
}

func ghostHashes(key uint64) (h1, h2 uint64) {
	h1 = key * 0x9E3779B97F4A7C15
	h1 ^= h1 >> 29
	h2 = (key ^ key>>31) * 0xBF58476D1CE4E5B9
	h2 |= 1
	return h1, h2
}

func (g *ghostFilter) contains(key uint64) bool {
	return g.has(g.cur, key) || g.has(g.prev, key)
}

func (g *ghostFilter) has(bits []uint64, key uint64) bool {
	h1, h2 := ghostHashes(key)
	for i := uint64(0); i < 3; i++ {
		b := (h1 + i*h2) & g.mask
		if bits[b>>6]&(1<<(b&63)) == 0 {
			return false
		}
	}
	return true
}

func (g *ghostFilter) add(key uint64) {
	if g.n >= g.cap {
		g.prev, g.cur = g.cur, g.prev
		clear(g.cur)
		g.n = 0
	}
	h1, h2 := ghostHashes(key)
	for i := uint64(0); i < 3; i++ {
		b := (h1 + i*h2) & g.mask
		g.cur[b>>6] |= 1 << (b & 63)
	}
	g.n++
}
