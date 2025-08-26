package osmpbfdb

import (
	"iter"

	"github.com/paulmach/osm"
	"github.com/royalcat/osmpbfdb/internal/winindex"
)

func iterForType[T osm.Object, ID ~int64](db *DB, index *winindex.Index[ID]) iter.Seq2[T, error] {
	type chunk struct {
		Objs []osm.Object
		Err  error
	}

	return func(yield func(T, error) bool) {
		// this really just to prepare next chunk before it's needed, so buffer is big enough to hold a few chunks
		chunkChan := make(chan chunk, 5)

		go func() {
			defer close(chunkChan)
			for window := range index.RangeWindows() {
				objects, err := db.readObjects(window.Value)
				chunkChan <- chunk{Objs: objects, Err: err}
			}
		}()

		for buffer := range chunkChan {
			if buffer.Err != nil {
				var zero T
				if !yield(zero, buffer.Err) {
					return
				}
				continue
			}

			for _, obj := range buffer.Objs {
				if objT, ok := obj.(T); ok {
					if !yield(objT, nil) {
						return
					}
				}
			}
		}

	}
}

func (db *DB) IterRelations() iter.Seq2[*osm.Relation, error] {
	return iterForType[*osm.Relation](db, db.indexes.RelationIndex)
}

func (db *DB) IterNodes() iter.Seq2[*osm.Node, error] {
	return iterForType[*osm.Node](db, db.indexes.NodeIndex)
}

func (db *DB) IterWays() iter.Seq2[*osm.Way, error] {
	return iterForType[*osm.Way](db, db.indexes.WayIndex)
}
