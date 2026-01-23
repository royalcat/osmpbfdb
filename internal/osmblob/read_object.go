package osmblob

import (
	"github.com/paulmach/osm"
)

const featureMask = 0x7FFFFFFFFFFF0000

func featureID(id osm.ObjectID) osm.FeatureID {
	return osm.FeatureID(id & featureMask)
}
