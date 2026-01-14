package osmblob

import (
	"fmt"
	"iter"

	"github.com/paulmach/osm"
)

func (db *BlobReader) ReadObjects(offset int64) iter.Seq2[osm.Object, error] {
	return func(yield func(osm.Object, error) bool) {
		dd := dataDecoderPool.Get()
		defer dataDecoderPool.Put(dd)

		_, _, blob, err := db.ReadFileBlock(offset)
		if err != nil {
			if !yield(nil, fmt.Errorf("failed to read file block: %w", err)) {
				return
			}
		}

		for obj, err := range dd.Decode(blob) {
			if err != nil {
				if !yield(obj, fmt.Errorf("failed to decode object: %w", err)) {
					return
				}
			}

			if !yield(obj, nil) {
				return
			}
		}
	}
}

const featureMask = 0x7FFFFFFFFFFF0000

func FeatureID(id osm.ObjectID) osm.FeatureID {
	return osm.FeatureID(id & featureMask)
}
