package osmpbfdb_test

import (
	"math"
	"math/rand"
	"os"
	"testing"

	"github.com/paulmach/osm"
	"github.com/royalcat/osmpbfdb"
)

func openCoordDB(t *testing.T, cfg osmpbfdb.Config) *osmpbfdb.DB {
	t.Helper()
	// Make sure the extract exists (openDB downloads it).
	_ = openDB(t)

	f, err := os.Open(London)
	if err != nil {
		t.Fatal(err)
	}
	t.Cleanup(func() { f.Close() })

	cfg.IndexDir = t.TempDir()
	cfg.SkipInfo = true
	db, err := osmpbfdb.OpenDB(f, cfg)
	if err != nil {
		t.Fatal(err)
	}
	return db
}

// GetNodeCoords must return exactly the coordinates GetNode does, whatever the
// cache policy and budget, including when the budget is too small to keep
// anything and every lookup evicts.
func TestGetNodeCoordsMatchesGetNode(t *testing.T) {
	configs := map[string]osmpbfdb.Config{
		"2q":          {CoordCachePolicy: osmpbfdb.CoordCachePolicy2Q},
		"lru":         {CoordCachePolicy: osmpbfdb.CoordCachePolicyLRU},
		"2q tiny":     {CoordCachePolicy: osmpbfdb.CoordCachePolicy2Q, CoordCacheBytes: 5 << 20},
		"lru tiny":    {CoordCachePolicy: osmpbfdb.CoordCachePolicyLRU, CoordCacheBytes: 5 << 20},
		"cache off":   {CoordCacheBytes: -1},
		"weak legacy": {CacheType: osmpbfdb.CacheTypeWeak},
	}

	for name, cfg := range configs {
		t.Run(name, func(t *testing.T) {
			db := openCoordDB(t, cfg)

			var nodes []*osm.Node
			for node, err := range db.IterNodes() {
				if err != nil {
					t.Fatal(err)
				}
				nodes = append(nodes, node)
			}
			if len(nodes) == 0 {
				t.Fatal("no nodes")
			}

			// Way-like batches: random spans of ids, shuffled so blocks are
			// revisited out of order, plus ids that do not exist.
			rng := rand.New(rand.NewSource(1))
			rng.Shuffle(len(nodes), func(i, j int) { nodes[i], nodes[j] = nodes[j], nodes[i] })
			if len(nodes) > 30000 {
				nodes = nodes[:30000]
			}

			ids := make([]osm.NodeID, 0, 64)
			for start := 0; start < len(nodes); start += 50 {
				end := min(start+50, len(nodes))
				ids = ids[:0]
				for _, n := range nodes[start:end] {
					ids = append(ids, n.ID)
				}
				ids = append(ids, -1, math.MaxInt64>>8) // never present

				got := make([]osmpbfdb.NodeCoord, len(ids))
				if err := db.GetNodeCoords(ids, got); err != nil {
					t.Fatal(err)
				}
				for i, id := range ids[:len(ids)-2] {
					want, err := db.GetNode(id)
					if err != nil {
						t.Fatal(err)
					}
					if !got[i].Found ||
						math.Float64bits(got[i].Lat) != math.Float64bits(want.Lat) ||
						math.Float64bits(got[i].Lon) != math.Float64bits(want.Lon) {
						t.Fatalf("node %d: got %+v, want lon %v lat %v", id, got[i], want.Lon, want.Lat)
					}
				}
				for _, c := range got[len(got)-2:] {
					if c.Found {
						t.Fatalf("missing node reported as found: %+v", c)
					}
				}
			}

			st := db.CoordCacheStats()
			t.Logf("stats: %+v", st)
			if cfg.CoordCacheBytes >= 0 && cfg.CoordCacheBytes != 600<<10 && st.Hits+st.ProbationHits == 0 {
				t.Errorf("expected cache hits, got %+v", st)
			}
			if cfg.CoordCacheBytes == 600<<10 && st.Bytes > cfg.CoordCacheBytes {
				t.Errorf("cache holds %d bytes over its %d budget", st.Bytes, cfg.CoordCacheBytes)
			}
		})
	}
}

func TestMultiDBGetNodeCoords(t *testing.T) {
	a := openCoordDB(t, osmpbfdb.Config{})
	b := openCoordDB(t, osmpbfdb.Config{})
	multi := osmpbfdb.NewMultiDB([]*osmpbfdb.DB{a, b})

	var ids []osm.NodeID
	for node, err := range a.IterNodes() {
		if err != nil {
			t.Fatal(err)
		}
		ids = append(ids, node.ID)
		if len(ids) == 500 {
			break
		}
	}
	ids = append(ids[:100], append([]osm.NodeID{-5}, ids[100:]...)...) // a missing id in the middle

	got := make([]osmpbfdb.NodeCoord, len(ids))
	if err := multi.GetNodeCoords(ids, got); err != nil {
		t.Fatal(err)
	}
	for i, id := range ids {
		want, err := multi.GetNode(id)
		if id == -5 {
			if got[i].Found || err == nil {
				t.Fatalf("missing node: got %+v err %v", got[i], err)
			}
			continue
		}
		if err != nil || !got[i].Found || got[i].Lat != want.Lat || got[i].Lon != want.Lon {
			t.Fatalf("node %d: got %+v want %v,%v err %v", id, got[i], want.Lon, want.Lat, err)
		}
	}
}
