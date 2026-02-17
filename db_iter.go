package osmpbfdb

import (
	"iter"

	"github.com/paulmach/osm"
	"github.com/royalcat/osmpbfdb/internal/rangeindex"
)

func iterForType[T osm.Object, ID ~int64](db *DB, index *rangeindex.Index[ID]) iter.Seq2[T, error] {
	type chunk struct {
		Objs []osm.Object
		Err  error
	}

	s := objSelector{
		Nodes:     true,
		Ways:      true,
		Relations: true,
	}

	return func(yield func(T, error) bool) {
		// this really just to prepare next chunk before it's needed, so buffer is big enough to hold a few chunks
		chunkChan := make(chan chunk, 2)

		go func() {
			defer close(chunkChan)
			readenChunks := map[uint32]struct{}{}
			for window := range index.RangeWindows() {
				if _, ok := readenChunks[window.Value]; ok {
					continue
				}
				readenChunks[window.Value] = struct{}{}

				objects, err := db.readObjects(window.Value, s)
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

func countKeys[ID ~int64](index *rangeindex.Index[ID]) int64 {
	var count int64
	for window := range index.RangeWindows() {
		count += int64(window.MaxKey) - int64(window.MinKey) + 1
	}
	return count
}

func (db *DB) CountRelations() int64 {
	return countKeys(db.indexes.RelationIndex)
}

func (db *DB) IterRelations() iter.Seq2[*osm.Relation, error] {
	return iterForType[*osm.Relation](db, db.indexes.RelationIndex)
}

func (db *DB) CountWays() int64 {
	return countKeys(db.indexes.WayIndex)
}

func (db *DB) IterWays() iter.Seq2[*osm.Way, error] {
	return iterForType[*osm.Way](db, db.indexes.WayIndex)
}

func (db *DB) CountNodes() int64 {
	return countKeys(db.indexes.NodeIndex)
}

func (db *DB) IterNodes() iter.Seq2[*osm.Node, error] {
	return iterForType[*osm.Node](db, db.indexes.NodeIndex)
}
