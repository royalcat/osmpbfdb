package osmblob

import (
	"cmp"
	"slices"

	"github.com/paulmach/osm"
)

func (db *BlobReader) ReadObjects(offset int64) ([]osm.Object, error) {

	dd := dataDecoderPool.Get()
	defer dataDecoderPool.Put(dd)

	_, _, blob, err := db.ReadFileBlock(offset)
	if err != nil {
		return nil, err
	}

	objects, err := dd.Decode(blob)
	if err != nil {
		return nil, err
	}

	slices.SortFunc(objects, func(a, b osm.Object) int {
		return cmp.Compare(featureID(a.ObjectID()), featureID(b.ObjectID()))
	})
	objects = slices.Clip(objects)

	return objects, nil
}

const featureMask = 0x7FFFFFFFFFFF0000

func featureID(id osm.ObjectID) osm.FeatureID {
	return osm.FeatureID(id & featureMask)
}
