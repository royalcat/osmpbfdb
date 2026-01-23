package osmpbfdb_test

import (
	"testing"

	"github.com/paulmach/osm"
)

func TestCanGetIterables(t *testing.T) {
	d := openDB(t)

	t.Run("nodes", func(t *testing.T) {
		t.Parallel()
		nodes := map[osm.NodeID]struct{}{}
		for node, err := range d.IterNodes() {
			if err != nil {
				t.Fatal(err)
			}
			nodes[node.ID] = struct{}{}
		}
		for id := range nodes {
			node, err := d.GetNode(id)
			if err != nil {
				t.Fatal(err)
			}
			if _, ok := nodes[node.ID]; !ok {
				t.Errorf("node %d not found", id)
			}
		}
	})

	t.Run("ways", func(t *testing.T) {
		t.Parallel()
		ways := map[osm.WayID]struct{}{}
		for way, err := range d.IterWays() {
			if err != nil {
				t.Fatal(err)
			}
			ways[way.ID] = struct{}{}
		}
		for id := range ways {
			way, err := d.GetWay(id)
			if err != nil {
				t.Fatal(err)
			}
			if _, ok := ways[way.ID]; !ok {
				t.Errorf("way %d not found", id)
			}
		}
	})

	t.Run("relations", func(t *testing.T) {
		t.Parallel()
		relations := map[osm.RelationID]struct{}{}
		for relation, err := range d.IterRelations() {
			if err != nil {
				t.Fatal(err)
			}
			relations[relation.ID] = struct{}{}
		}
		for id := range relations {
			relation, err := d.GetRelation(id)
			if err != nil {
				t.Fatal(err)
			}
			if _, ok := relations[relation.ID]; !ok {
				t.Errorf("relation %d not found", id)
			}
		}
	})
}
