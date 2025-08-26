package osmblob

import (
	"cmp"
	"errors"
	"slices"

	"github.com/paulmach/osm"
)

var ErrNotFound = errors.New("object not found")

func FindInObjects[objType osm.Object](objects []osm.Object, id osm.FeatureID) (objType, error) {
	i, ok := slices.BinarySearchFunc(objects, id, func(o osm.Object, id osm.FeatureID) int {
		return cmp.Compare(featureID(o.ObjectID()), id)
	})

	var obj objType

	if !ok {
		return obj, ErrNotFound
	}

	// used for debugging
	// {
	// 	if reflect.TypeOf(objects[i]) != reflect.TypeOf(obj) {
	// 		panic("type mismatch")
	// 	}
	// 	switch obj := objects[i].(type) {
	// 	case *osm.Node:

	// 		if obj.ID != id.NodeID() {
	// 			panic("node id mismatch")
	// 		}
	// 	case *osm.Way:
	// 		if obj.ID != id.WayID() {
	// 			panic("way id mismatch")
	// 		}
	// 	case *osm.Relation:
	// 		if obj.ID != id.RelationID() {
	// 			panic("relation id mismatch")
	// 		}
	// 	}
	// }

	obj, ok = objects[i].(objType)
	if ok {
		return obj, nil
	}

	return obj, ErrNotFound
}
