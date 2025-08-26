package osmpbfdb

import (
	"iter"

	"github.com/paulmach/osm"
)

type OsmDB interface {
	GetNode(id osm.NodeID) (*osm.Node, error)
	GetWay(id osm.WayID) (*osm.Way, error)
	GetRelation(id osm.RelationID) (*osm.Relation, error)

	IterNodes() iter.Seq2[*osm.Node, error]
	IterWays() iter.Seq2[*osm.Way, error]
	IterRelations() iter.Seq2[*osm.Relation, error]
}
