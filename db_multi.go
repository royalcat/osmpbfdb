package osmpbfdb

import (
	"errors"
	"io"
	"iter"
	"sync"

	"github.com/paulmach/osm"
)

type MultiDB struct {
	dbs []*DB
}

func OpenMultiDB(readers []io.ReaderAt, config Config) (*MultiDB, error) {
	dbs := make([]*DB, len(readers))

	var wg sync.WaitGroup
	for i, reader := range readers {
		wg.Add(1)
		go func(i int, reader io.ReaderAt) {
			defer wg.Done()
			db, err := OpenDB(reader, config)
			if err != nil {
				return
			}
			dbs[i] = db
		}(i, reader)
	}
	wg.Wait()
	return NewMultiDB(dbs), nil
}

func NewMultiDB(dbs []*DB) *MultiDB {
	return &MultiDB{
		dbs: dbs,
	}
}

var _ OsmDB = (*MultiDB)(nil)

func (db *MultiDB) GetNode(id osm.NodeID) (*osm.Node, error) {
	for _, db := range db.dbs {
		result, err := db.GetNode(id)
		if errors.Is(err, ErrNotFound) {
			continue
		}
		return result, err
	}
	return nil, ErrNotFound
}

// GetWay implements OsmDB.
func (db *MultiDB) GetWay(id osm.WayID) (*osm.Way, error) {
	for _, db := range db.dbs {
		result, err := db.GetWay(id)
		if errors.Is(err, ErrNotFound) {
			continue
		}
		return result, err
	}
	return nil, ErrNotFound
}

// GetRelation implements OsmDB.
func (db *MultiDB) GetRelation(id osm.RelationID) (*osm.Relation, error) {
	for _, db := range db.dbs {
		result, err := db.GetRelation(id)
		if errors.Is(err, ErrNotFound) {
			continue
		}
		return result, err
	}
	return nil, ErrNotFound
}

func (db *MultiDB) GetObject(id osm.FeatureID) (osm.Object, error) {
	for _, db := range db.dbs {
		result, err := db.GetObject(id)
		if errors.Is(err, ErrNotFound) {
			continue
		}
		return result, err
	}
	return nil, ErrNotFound
}

// IterNodes implements OsmDB.
func (db *MultiDB) IterNodes() iter.Seq2[*osm.Node, error] {
	return func(yield func(*osm.Node, error) bool) {
		for _, db := range db.dbs {
			for node, err := range db.IterNodes() {
				if !yield(node, err) {
					return
				}
			}
		}
	}
}

// IterRelations implements OsmDB.
func (db *MultiDB) IterRelations() iter.Seq2[*osm.Relation, error] {
	return func(yield func(*osm.Relation, error) bool) {
		for _, db := range db.dbs {
			for relation, err := range db.IterRelations() {
				if !yield(relation, err) {
					return
				}
			}
		}
	}
}

// IterWays implements OsmDB.
func (db *MultiDB) IterWays() iter.Seq2[*osm.Way, error] {
	return func(yield func(*osm.Way, error) bool) {
		for _, db := range db.dbs {
			for way, err := range db.IterWays() {
				if !yield(way, err) {
					return
				}
			}
		}
	}
}

func (db *MultiDB) CountNodes() int64 {
	var total int64
	for _, db := range db.dbs {
		total += db.CountNodes()
	}
	return total
}

func (db *MultiDB) CountWays() int64 {
	var total int64
	for _, db := range db.dbs {
		total += db.CountWays()
	}
	return total
}

func (db *MultiDB) CountRelations() int64 {
	var total int64
	for _, db := range db.dbs {
		total += db.CountRelations()
	}
	return total
}

func (db *MultiDB) Close() error {
	errs := make([]error, 0, len(db.dbs))
	for _, db := range db.dbs {
		if err := db.Close(); err != nil {
			errs = append(errs, err)
		}
	}
	if len(errs) == 0 {
		return nil
	}
	return errors.Join(errs...)
}
