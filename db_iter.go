package osmpbfdb

import (
	"iter"

	"github.com/paulmach/osm"
)

func (db *DB) IterRelations() iter.Seq2[*osm.Relation, error] {
	return func(yield func(*osm.Relation, error) bool) {
		for window := range db.relationIndex.RangeWindows() {
			objects, err := db.readObjects(int64(window.Value))
			if err != nil {
				if !yield(nil, err) {
					return
				}
				continue
			}

			for _, obj := range objects {
				if rel, ok := obj.(*osm.Relation); ok {
					if !yield(rel, nil) {
						return
					}
				}
			}

		}
	}
}

func (db *DB) IterNodes() iter.Seq2[*osm.Node, error] {
	return func(yield func(*osm.Node, error) bool) {
		for window := range db.nodeIndex.RangeWindows() {
			objects, err := db.readObjects(int64(window.Value))
			if err != nil {
				if !yield(nil, err) {
					return
				}
				continue
			}

			for _, obj := range objects {
				if node, ok := obj.(*osm.Node); ok {
					if !yield(node, nil) {
						return
					}
				}
			}

		}
	}
}

func (db *DB) IterWays() iter.Seq2[*osm.Way, error] {
	return func(yield func(*osm.Way, error) bool) {
		for window := range db.wayIndex.RangeWindows() {
			objects, err := db.readObjects(int64(window.Value))
			if err != nil {
				if !yield(nil, err) {
					return
				}
				continue
			}

			for _, obj := range objects {
				if way, ok := obj.(*osm.Way); ok {
					if !yield(way, nil) {
						return
					}
				}
			}

		}
	}
}
