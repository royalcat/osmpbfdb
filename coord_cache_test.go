package osmpbfdb

import (
	"testing"

	"github.com/royalcat/osmpbfdb/internal/osmblob"
)

// blockOf returns a block of about the given number of bytes (compact form is
// 16 bytes per node; the struct header is a constant).
func blockOf(t *testing.T, nodes int) *osmblob.NodeCoords {
	t.Helper()
	return osmblob.SyntheticNodeCoords(nodes)
}

// A block touched once must not displace blocks that are reused.
func TestCoordCache2QResistsScans(t *testing.T) {
	const blockNodes = 1000
	size := blockOf(t, blockNodes).Bytes()

	// One shard's worth of budget for ~20 blocks, all keys mapped to a single
	// shard by choosing keys that hash alike is brittle, so use the whole cache
	// and a budget large enough that every shard holds several blocks.
	c := newCoordCache(coordShardCount*20*size, CoordCachePolicy2Q)

	hot := []uint64{1, 2, 3, 4, 5, 6, 7, 8}
	for _, k := range hot {
		c.put(k, blockOf(t, blockNodes))
		if c.get(k) == nil { // second touch promotes to main
			t.Fatalf("hot block %d not cached", k)
		}
	}

	// A long scan of blocks that are never requested twice.
	for k := uint64(1000); k < 1000+coordShardCount*200; k++ {
		c.put(k, blockOf(t, blockNodes))
	}

	for _, k := range hot {
		if c.peek(k) == nil {
			t.Fatalf("hot block %d evicted by a scan", k)
		}
	}
}

// With plain LRU the same scan does evict them, so the test above is
// meaningful.
func TestCoordCacheLRUIsNotScanResistant(t *testing.T) {
	const blockNodes = 1000
	size := blockOf(t, blockNodes).Bytes()
	c := newCoordCache(coordShardCount*20*size, CoordCachePolicyLRU)

	for k := uint64(1); k <= 8; k++ {
		c.put(k, blockOf(t, blockNodes))
	}
	for k := uint64(1000); k < 1000+coordShardCount*200; k++ {
		c.put(k, blockOf(t, blockNodes))
	}
	evicted := 0
	for k := uint64(1); k <= 8; k++ {
		if c.peek(k) == nil {
			evicted++
		}
	}
	if evicted == 0 {
		t.Fatal("expected the scan to evict hot blocks under plain LRU")
	}
}

// A block pushed out of probation is remembered by the ghost filter and goes
// straight to the main queue the next time it is decoded.
func TestCoordCacheGhostAdmitsReturningBlocks(t *testing.T) {
	const blockNodes = 1000
	size := blockOf(t, blockNodes).Bytes()
	c := newCoordCache(coordShardCount*20*size, CoordCachePolicy2Q)

	c.put(1, blockOf(t, blockNodes))
	for k := uint64(1000); k < 1000+coordShardCount*200; k++ { // pushes 1 out of probation
		c.put(k, blockOf(t, blockNodes))
	}
	if c.peek(1) != nil {
		t.Fatal("block 1 should have left probation")
	}

	c.put(1, blockOf(t, blockNodes))
	if c.Stats().GhostAdmits == 0 {
		t.Fatal("expected a ghost admission")
	}
	for k := uint64(5000); k < 5000+coordShardCount*200; k++ { // scan again
		c.put(k, blockOf(t, blockNodes))
	}
	if c.peek(1) == nil {
		t.Fatal("ghost-admitted block was evicted by a scan")
	}
}

func TestCoordCacheRespectsByteBudget(t *testing.T) {
	size := blockOf(t, 1000).Bytes()
	for _, policy := range []CoordCachePolicy{CoordCachePolicy2Q, CoordCachePolicyLRU} {
		budget := coordShardCount * 5 * size
		c := newCoordCache(budget, policy)
		for k := uint64(0); k < 5000; k++ {
			c.put(k, blockOf(t, 1000))
			c.get(k)
		}
		// Probation may exceed a shard's budget by one block.
		if got := c.Stats().Bytes; got > budget+coordShardCount*size {
			t.Fatalf("%s: holds %d bytes, budget %d", policy, got, budget)
		}
	}
}

func TestCoordCacheDisabled(t *testing.T) {
	if newCoordCache(0, CoordCachePolicy2Q) != nil || newCoordCache(-1, CoordCachePolicyLRU) != nil {
		t.Fatal("non-positive budget must disable the cache")
	}
}
