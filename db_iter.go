package osmpbfdb

import (
	"iter"

	"github.com/paulmach/osm"
)

func (db *DB) IterRelations() iter.Seq2[*osm.Relation, error] {
	return func(yield func(*osm.Relation, error) bool) {
		for _, window := range db.relationIndex.data {
			objects, err := db.readObjects(int64(window.v))
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
