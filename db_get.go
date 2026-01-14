package osmpbfdb

import (
	"errors"
	"fmt"

	"github.com/paulmach/osm"
)

var ErrNotFound = errors.New("object not found")

func (db *DB) GetNode(id osm.NodeID) (*osm.Node, error) {
	offset, ok := db.indexes.NodeIndex.Get(id)
	if !ok {
		return nil, ErrNotFound
	}

	object, err := db.readObject(offset, id.FeatureID())
	if err != nil {
		return nil, err
	}

	return object.(*osm.Node), nil
}

func (db *DB) GetWay(id osm.WayID) (*osm.Way, error) {
	offset, ok := db.indexes.WayIndex.Get(id)
	if !ok {
		return nil, ErrNotFound
	}

	object, err := db.readObject(offset, id.FeatureID())
	if err != nil {
		return nil, err
	}

	return object.(*osm.Way), nil
}

func (db *DB) GetRelation(id osm.RelationID) (*osm.Relation, error) {
	offset, ok := db.indexes.RelationIndex.Get(id)
	if !ok {
		return nil, ErrNotFound
	}

	object, err := db.readObject(offset, id.FeatureID())
	if err != nil {
		return nil, err
	}

	return object.(*osm.Relation), nil
}

func (db *DB) GetObject(id osm.FeatureID) (osm.Object, error) {
	switch id.Type() {
	case osm.TypeNode:
		return db.GetNode(id.NodeID())
	case osm.TypeWay:
		return db.GetWay(id.WayID())
	case osm.TypeRelation:
		return db.GetRelation(id.RelationID())
	default:
		return nil, fmt.Errorf("unknown object type: %s", id.Type())
	}
}
