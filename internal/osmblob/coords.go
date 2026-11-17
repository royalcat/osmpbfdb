package osmblob

import (
	"math"
	"slices"
	"unsafe"
)

// NodeCoords is the id and coordinate columns of one blob's dense nodes. It
// is what a way needs to place its nodes, without the tags, info and
// per-node allocations of a decoded osm.Node, so a blob is about 16 bytes per
// node instead of one to two kilobytes per block of 8000 decoded nodes.
//
// Coordinates are exactly the float64 values DecodeNodes produces: both use
// 1e-9 * float64(offset + granularity*delta-accumulated value).
//
// A NodeCoords is immutable after DecodeNodeCoords returns.
type NodeCoords struct {
	// ids is ascending, like the nodes of a sorted PBF (the same assumption
	// FindInObjects makes).
	ids []int64

	// Compact form: coordinates in 1e-7 degree units, which is what standard
	// granularity-100 files carry. Used whenever every value is exactly
	// representable.
	lat32, lon32 []int32

	// Wide form: the exact float64 coordinates, for blocks with a non-standard
	// granularity or offset.
	latF, lonF []float64
}

// compactUnit is the nanodegree size of one compact coordinate unit.
const compactUnit = 100

// DecodeNodeCoords extracts the dense nodes' ids and coordinates. Plain (non
// dense) nodes are ignored, exactly as in DecodeNodes.
func (dec *ObjectDecoder) DecodeNodeCoords() *NodeCoords {
	block := dec.block
	granularity := int64(block.GetGranularity())
	latOffset := block.GetLatOffset()
	lonOffset := block.GetLonOffset()

	total := 0
	for _, group := range block.GetPrimitivegroup() {
		total += len(group.GetDense().GetId())
	}

	// walk calls fn with every dense node's id and raw nanodegree coordinates.
	walk := func(fn func(id, lat, lon int64)) {
		for _, group := range block.GetPrimitivegroup() {
			dense := group.GetDense()
			ids, lats, lons := dense.GetId(), dense.GetLat(), dense.GetLon()
			n := min(len(ids), len(lats), len(lons))

			var id, lat, lon int64
			for i := range n {
				id += ids[i]
				lat += lats[i]
				lon += lons[i]
				fn(id, latOffset+granularity*lat, lonOffset+granularity*lon)
			}
		}
	}

	c := &NodeCoords{
		ids:   make([]int64, 0, total),
		lat32: make([]int32, 0, total),
		lon32: make([]int32, 0, total),
	}
	compact := true
	walk(func(id, lat, lon int64) {
		c.ids = append(c.ids, id)
		if !compact {
			return
		}
		la, lo := lat/compactUnit, lon/compactUnit
		if lat%compactUnit != 0 || lon%compactUnit != 0 ||
			la < math.MinInt32 || la > math.MaxInt32 ||
			lo < math.MinInt32 || lo > math.MaxInt32 {
			compact = false
			return
		}
		c.lat32 = append(c.lat32, int32(la))
		c.lon32 = append(c.lon32, int32(lo))
	})

	if compact {
		return c
	}

	// Rare: re-read the block into exact float columns.
	c.lat32, c.lon32 = nil, nil
	c.latF = make([]float64, 0, len(c.ids))
	c.lonF = make([]float64, 0, len(c.ids))
	walk(func(_, lat, lon int64) {
		c.latF = append(c.latF, 1e-9*float64(lat))
		c.lonF = append(c.lonF, 1e-9*float64(lon))
	})
	return c
}

// Len returns the number of nodes in the block.
func (c *NodeCoords) Len() int { return len(c.ids) }

// Bytes returns the approximate heap size of the block.
func (c *NodeCoords) Bytes() int64 {
	const header = int64(unsafe.Sizeof(NodeCoords{}))
	return header +
		int64(len(c.ids))*8 +
		int64(len(c.lat32)+len(c.lon32))*4 +
		int64(len(c.latF)+len(c.lonF))*8
}

// Lookup returns the coordinates of the node with the given id.
func (c *NodeCoords) Lookup(id int64) (lon, lat float64, ok bool) {
	n := len(c.ids)
	if n == 0 || id < c.ids[0] || id > c.ids[n-1] {
		return 0, 0, false
	}
	i, ok := slices.BinarySearch(c.ids, id)
	if !ok {
		return 0, 0, false
	}
	if c.lat32 != nil {
		return 1e-9 * float64(int64(c.lon32[i])*compactUnit),
			1e-9 * float64(int64(c.lat32[i])*compactUnit), true
	}
	return c.lonF[i], c.latF[i], true
}

// SyntheticNodeCoords returns a compact block of n nodes, for tests and
// benchmarks that need blocks of a known size.
func SyntheticNodeCoords(n int) *NodeCoords {
	c := &NodeCoords{
		ids:   make([]int64, n),
		lat32: make([]int32, n),
		lon32: make([]int32, n),
	}
	for i := range c.ids {
		c.ids[i] = int64(i)
	}
	return c
}
