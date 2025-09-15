package osmpbfdb_test

import (
	"testing"

	"github.com/paulmach/osm"
)

func TestCount(t *testing.T) {
	d := openDB(t)

	t.Run("nodes", func(t *testing.T) {
		t.Logf("counting by iterating over db")
		var iterCount int64
		for range d.IterNodes() {
			iterCount++
		}

		t.Logf("calling count method")
		fastCount := d.CountNodes()

		if iterCount != fastCount {
			t.Fatalf("Count mismatch: iterated %d nodes, fast got %d", iterCount, fastCount)
		}
	})

	t.Run("ways", func(t *testing.T) {
		t.Logf("counting by iterating over db")
		var iterCount int64
		for range d.IterWays() {
			iterCount++
		}

		t.Logf("calling count method")
		fastCount := d.CountWays()

		if iterCount != fastCount {
			t.Fatalf("Count mismatch: iterated %d ways, fast got %d", iterCount, fastCount)
		}
	})

	t.Run("relations", func(t *testing.T) {
		t.Logf("counting by iterating over db")
		var iterCount int64
		for range d.IterRelations() {
			iterCount++
		}

		t.Logf("calling count method")
		fastCount := d.CountRelations()

		if iterCount != fastCount {
			t.Fatalf("Count mismatch: iterated %d relations, fast got %d", iterCount, fastCount)
		}
	})
}

func TestIterUnique(t *testing.T) {
	d := openDB(t)

	t.Parallel()
	t.Run("nodes", func(t *testing.T) {
		values := map[osm.NodeID]struct{}{}
		for node := range d.IterNodes() {
			if _, ok := values[node.ID]; ok {
				t.Fatalf("Node ID %d is not unique", node.ID)
			}
			values[node.ID] = struct{}{}
		}
	})

	t.Run("ways", func(t *testing.T) {
		values := map[osm.WayID]struct{}{}
		for way := range d.IterWays() {
			if _, ok := values[way.ID]; ok {
				t.Fatalf("Way ID %d is not unique", way.ID)
			}
			values[way.ID] = struct{}{}
		}
	})

	t.Run("relations", func(t *testing.T) {
		values := map[osm.RelationID]struct{}{}
		for relation := range d.IterRelations() {
			if _, ok := values[relation.ID]; ok {
				t.Fatalf("Relation ID %d is not unique", relation.ID)
			}
			values[relation.ID] = struct{}{}
		}
	})

}
