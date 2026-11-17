package osmpbfdb

import (
	"fmt"

	"github.com/paulmach/osm"
	"github.com/royalcat/osmpbfdb/internal/osmblob"
)

// NodeCoord is the location of a node resolved by GetNodeCoords.
type NodeCoord struct {
	Lon, Lat float64
	// Found is false when the node is not in the database.
	Found bool
}

// NodeCoordResolver is implemented by databases that can resolve many node
// locations without decoding whole nodes.
//
// GetNodeCoords fills dst[i] for ids[i]; dst must be at least as long as ids.
// A node that is missing has Found == false and is not an error. The returned
// error is the first failure to read or decode a block (those nodes are left
// not Found); the remaining nodes are still resolved.
//
// Resolution is equivalent to GetNode: the same node and the same coordinates.
// It is faster because blocks are decoded into a compact coordinate-only form,
// kept in a byte-bounded cache, and consecutive ids that fall in the same
// block cost one binary search each.
type NodeCoordResolver interface {
	GetNodeCoords(ids []osm.NodeID, dst []NodeCoord) error
}

// CoordCacheStatser is implemented by databases that expose the statistics of
// their node coordinate cache.
type CoordCacheStatser interface {
	CoordCacheStats() CoordCacheStats
}

var (
	_ NodeCoordResolver = (*DB)(nil)
	_ NodeCoordResolver = (*MultiDB)(nil)
	_ CoordCacheStatser = (*DB)(nil)
	_ CoordCacheStatser = (*MultiDB)(nil)
)

// defaultCoordCacheBytes is used when Config.CoordCacheBytes is zero.
const defaultCoordCacheBytes = 64 << 20

// coordBlock returns the coordinate block stored at a blob offset, from the
// cache when possible.
func (db *DB) coordBlock(offset uint64) (*osmblob.NodeCoords, error) {
	if db.coords != nil {
		if block := db.coords.get(offset); block != nil {
			return block, nil
		}
	}

	block, err, _ := db.coordGroup.Do(offset, func() (*osmblob.NodeCoords, error) {
		// Another caller may have decoded the block while this one waited.
		if db.coords != nil {
			if block := db.coords.peek(offset); block != nil {
				return block, nil
			}
		}

		_, _, blob, err := db.blobReader.ReadFileBlock(int64(offset))
		if err != nil {
			return nil, fmt.Errorf("read file block: %w", err)
		}
		dec, err := osmblob.NewDecoderFromBlob(blob, osmblob.ObjectDecoderParams{SkipInfo: true})
		if err != nil {
			return nil, fmt.Errorf("create decoder: %w", err)
		}
		block := dec.DecodeNodeCoords()

		if db.coords != nil {
			db.coords.put(offset, block)
		}
		return block, nil
	})
	return block, err
}

// GetNodeCoords implements NodeCoordResolver.
func (db *DB) GetNodeCoords(ids []osm.NodeID, dst []NodeCoord) error {
	var (
		firstErr error
		cur      *osmblob.NodeCoords
	)
	for i, id := range ids {
		// Ids of one way tend to share a block: try the previous block first.
		if cur != nil {
			if lon, lat, ok := cur.Lookup(int64(id)); ok {
				dst[i] = NodeCoord{Lon: lon, Lat: lat, Found: true}
				continue
			}
		}
		dst[i] = NodeCoord{}

		offset, ok := db.indexes.NodeIndex.Get(id)
		if !ok {
			continue
		}
		block, err := db.coordBlock(offset)
		if err != nil {
			if firstErr == nil {
				firstErr = err
			}
			continue
		}
		cur = block
		if lon, lat, ok := cur.Lookup(int64(id)); ok {
			dst[i] = NodeCoord{Lon: lon, Lat: lat, Found: true}
		}
	}
	return firstErr
}

// CoordCacheStats returns the counters of the node coordinate cache.
func (db *DB) CoordCacheStats() CoordCacheStats {
	if db.coords == nil {
		return CoordCacheStats{}
	}
	return db.coords.Stats()
}

// GetNodeCoords implements NodeCoordResolver. As in GetNode, the first
// database that has a node wins.
func (db *MultiDB) GetNodeCoords(ids []osm.NodeID, dst []NodeCoord) error {
	if len(db.dbs) == 1 {
		return db.dbs[0].GetNodeCoords(ids, dst)
	}

	var firstErr error
	pending := ids
	pendingIdx := []int(nil) // positions in ids of the pending entries; nil = all
	scratch := make([]NodeCoord, len(ids))

	for _, d := range db.dbs {
		if len(pending) == 0 {
			break
		}
		if err := d.GetNodeCoords(pending, scratch[:len(pending)]); err != nil && firstErr == nil {
			firstErr = err
		}

		var nextIDs []osm.NodeID
		var nextIdx []int
		for j, c := range scratch[:len(pending)] {
			pos := j
			if pendingIdx != nil {
				pos = pendingIdx[j]
			}
			if c.Found {
				dst[pos] = c
				continue
			}
			dst[pos] = NodeCoord{}
			nextIDs = append(nextIDs, pending[j])
			nextIdx = append(nextIdx, pos)
		}
		pending, pendingIdx = nextIDs, nextIdx
	}
	return firstErr
}

// CoordCacheStats returns the summed counters of every input's cache.
func (db *MultiDB) CoordCacheStats() CoordCacheStats {
	var total CoordCacheStats
	for _, d := range db.dbs {
		total.Add(d.CoordCacheStats())
	}
	return total
}
