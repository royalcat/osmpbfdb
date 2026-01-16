package osmblob

import (
	"iter"
	"slices"
	"time"

	"github.com/paulmach/osm"
	"github.com/royalcat/osmpbfdb/osmproto"
	"google.golang.org/protobuf/proto"
)

var (
	blobDataPool = newSyncPool[[]byte](func() []byte { return make([]byte, MaxBlobSize) })
)

type ObjectDecoderParams struct {
	SkipInfo bool
}

type ObjectDecoder struct {
	ObjectDecoderParams

	block *osmproto.PrimitiveBlock
}

func NewDecoderFromBlob(blob *osmproto.Blob, params ObjectDecoderParams) (*ObjectDecoder, error) {
	data := blobDataPool.Get()
	defer blobDataPool.Put(data)

	data, err := getData(blob, data)
	if err != nil {
		return nil, err
	}

	var block osmproto.PrimitiveBlock
	err = proto.Unmarshal(data, &block)
	if err != nil {
		return nil, err
	}

	dec := &ObjectDecoder{
		ObjectDecoderParams: params,
		block:               &block,
	}

	return dec, nil
}

func (dec *ObjectDecoder) DecodeRelations() (out []*osm.Relation, err error) {
	st := dec.block.GetStringtable()
	out = make([]*osm.Relation, 0, 8000)

	for _, group := range dec.block.GetPrimitivegroup() {
		for _, relation := range group.GetRelations() {

			rel := &osm.Relation{
				ID:   osm.RelationID(relation.GetId()),
				Tags: extractTags(st, relation.GetKeys(), relation.GetVals()),
			}

			if !dec.SkipInfo {
				info := relation.GetInfo()
				rel.Version = int(info.GetVersion())
				rel.ChangesetID = osm.ChangesetID(info.GetChangeset())
				rel.UserID = osm.UserID(info.GetUid())
				rel.User = st.GetS()[info.GetUserSid()]
				rel.Visible = info.GetVisible()
			}

			rel.Members, err = extractMembers(st.GetS(), relation.GetRolesSid(), relation.GetMemids(), relation.GetTypes())
			if err != nil {
				return nil, err
			}

			out = append(out, rel)
		}
	}

	out = slices.Clip(out)
	return out, nil
}

func extractTags(st *osmproto.StringTable, keys, values []uint32) osm.Tags {
	tags := make([]osm.Tag, 0, len(keys))
	for i := range keys {
		key := st.GetS()[keys[i]]
		value := st.GetS()[values[i]]
		tags = append(tags, osm.Tag{Key: key, Value: value})
	}

	return tags
}

func extractMembers(
	st []string,
	roles []int32,
	memids []int64,
	types []osmproto.Relation_MemberType,
) (osm.Members, error) {
	var index, memID int64

	members := make(osm.Members, len(types))
	for i := range types {
		members[index].Role = st[roles[i]]

		memID += memids[i]
		members[index].Ref = memID

		switch types[i] {
		case osmproto.Relation_NODE:
			members[index].Type = osm.TypeNode
		case osmproto.Relation_WAY:
			members[index].Type = osm.TypeWay
		case osmproto.Relation_RELATION:
			members[index].Type = osm.TypeRelation
		}

		index++
	}

	return members, nil
}

func (dec *ObjectDecoder) DecodeWays() ([]*osm.Way, error) {
	dateGranularity := int64(dec.block.GetDateGranularity())
	st := dec.block.GetStringtable()

	ways := make([]*osm.Way, 0, 8000)

	for _, group := range dec.block.GetPrimitivegroup() {
		for _, w := range group.GetWays() {

			way := &osm.Way{
				ID:    osm.WayID(w.GetId()),
				Nodes: dec.extractWayNodes(w),
				Tags:  extractTags(st, w.GetKeys(), w.GetVals()),
			}

			if !dec.SkipInfo {
				info := w.GetInfo()
				way.User = st.GetS()[info.GetUserSid()]
				way.UserID = osm.UserID(info.GetUid())
				way.Visible = info.GetVisible()
				way.Version = int(info.GetVersion())
				way.ChangesetID = osm.ChangesetID(info.GetChangeset())

				millisec := time.Duration(w.GetInfo().GetTimestamp()*dateGranularity) * time.Millisecond
				timestamp := time.Unix(0, millisec.Nanoseconds()).UTC()
				way.Timestamp = timestamp
			}

			ways = append(ways, way)
		}

	}

	ways = slices.Clip(ways)

	return ways, nil
}

func (dec *ObjectDecoder) extractWayNodes(way *osmproto.Way) osm.WayNodes {
	granularity := int64(dec.block.GetGranularity())
	latOffset := dec.block.GetLatOffset()
	lonOffset := dec.block.GetLonOffset()

	nodes := make([]osm.WayNode, 0, len(way.GetRefs()))
	ref := int64(0)
	for i, r := range way.GetRefs() {
		ref += r

		lat := float64(0)
		if lats := way.GetLat(); i < len(lats) {
			lat = 1e-9 * float64(latOffset+(granularity*lats[i]))
		}
		lon := float64(0)
		if lons := way.GetLon(); i < len(lons) {
			lon = 1e-9 * float64(lonOffset+(granularity*lons[i]))
		}

		wayNode := osm.WayNode{
			ID:  osm.NodeID(ref),
			Lat: lat,
			Lon: lon,
		}

		if !dec.SkipInfo {
			info := way.GetInfo()
			wayNode.Version = int(info.GetVersion())
			wayNode.ChangesetID = osm.ChangesetID(info.GetChangeset())
		}

		nodes = append(nodes, wayNode)
	}

	return nodes
}

func (dec *ObjectDecoder) DecodeNodes() ([]*osm.Node, error) {
	nodes := make([]*osm.Node, 0, 8000)

	for _, group := range dec.block.GetPrimitivegroup() {
		for node := range dec.extractDenseNodes(dec.block, group.GetDense()) {
			nodes = append(nodes, node)
		}

		// TODO
		// if nodes := group.GetNodes(); nodes != nil {
		// 	nodes = append(nodes, group.GetNodes()...)
		// }
	}

	// MAYBE panic in ci for some reason
	// nodes = slices.Clip(nodes)

	return nodes, nil
}

func (dec *ObjectDecoder) extractDenseNodes(primitiveBlock *osmproto.PrimitiveBlock, denseNodes *osmproto.DenseNodes) iter.Seq[*osm.Node] {
	return func(yield func(*osm.Node) bool) {
		st := primitiveBlock.GetStringtable().GetS()
		granularity := int64(primitiveBlock.GetGranularity())
		dateGranularity := int64(primitiveBlock.GetDateGranularity())

		latOffset := primitiveBlock.GetLatOffset()
		lonOffset := primitiveBlock.GetLonOffset()

		var info *osmproto.DenseInfo
		if !dec.SkipInfo {
			info = denseNodes.GetDenseinfo()
		}

		keyvals := denseNodes.GetKeysVals()
		kvs := map[int32]int32{}
		kvsIdx := 0
		kvsMoveNext := func() {
			clear(kvs)

			for keyvals[kvsIdx] != 0 {
				k := keyvals[kvsIdx]
				v := keyvals[kvsIdx+1]
				kvs[k] = v
				kvsIdx += 2
			}
			kvsIdx++
		}

		// kvs := make([]map[int32]int32, 1, len(keyvals)/2)
		// kvs[0] = map[int32]int32{}
		// current := 0
		// i := 0
		// for i < len(keyvals) {
		// 	k := keyvals[i]
		// 	if k == 0 {
		// 		kvs = append(kvs, map[int32]int32{})
		// 		current++
		// 		i++
		// 		continue
		// 	}
		// 	if i+2 > len(keyvals) {
		// 		break
		// 	}
		// 	v := keyvals[i+1]

		// 	kvs[current][k] = v
		// 	i += 2
		// }

		// NOTE: do not try pre-allocating an array of nodes because saving
		// just one will stop the GC from cleaning up the whole pre-allocated array.
		n := &osm.Node{Visible: true}

		var id, lat, lon, timestamp, changeset int64
		var uid, usid int32
		for i, dID := range denseNodes.GetId() {
			id += dID
			n.ID = osm.NodeID(id)

			if !dec.SkipInfo {
				n.Version = int(info.GetVersion()[i])

				timestamp += info.GetTimestamp()[i]
				millisec := time.Duration(timestamp*dateGranularity) * time.Millisecond
				n.Timestamp = time.Unix(0, millisec.Nanoseconds()).UTC()

				changeset += info.GetChangeset()[i]
				n.ChangesetID = osm.ChangesetID(changeset)

				uid += info.GetUid()[i]
				n.UserID = osm.UserID(uid)

				usid += info.GetUserSid()[i]
				n.User = st[usid]

				if visible := info.GetVisible(); i < len(visible) {
					n.Visible = visible[i]
				}
			}

			lat += denseNodes.GetLat()[i]
			n.Lat = 1e-9 * float64(latOffset+(granularity*lat))
			lon += denseNodes.GetLon()[i]
			n.Lon = 1e-9 * float64(lonOffset+(granularity*lon))

			kvsMoveNext()
			if i < len(kvs) {
				n.Tags = make([]osm.Tag, 0, len(kvs))
				for k, v := range kvs {
					n.Tags = append(n.Tags, osm.Tag{Key: st[k], Value: st[v]})
				}
			}

			if !yield(n) {
				return
			}

			n = &osm.Node{Visible: true}
		}

	}
}
