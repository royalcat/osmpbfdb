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

type objectDecoder struct {
	block *osmproto.PrimitiveBlock
}

func NewDecoderFromBlob(blob *osmproto.Blob) (*objectDecoder, error) {
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

	dec := &objectDecoder{
		block: &block,
	}

	return dec, nil
}

func (dec *objectDecoder) DecodeRelations() ([]*osm.Relation, error) {
	st := dec.block.GetStringtable()

	relations := make([]*osm.Relation, 0, 8000)

	for _, group := range dec.block.GetPrimitivegroup() {
		for _, relation := range group.GetRelations() {
			rel := &osm.Relation{
				ID:          osm.RelationID(relation.GetId()),
				Version:     int(relation.Info.GetVersion()),
				ChangesetID: osm.ChangesetID(relation.Info.GetChangeset()),
				UserID:      osm.UserID(relation.Info.GetUid()),
				User:        st.GetS()[relation.Info.GetUserSid()],
				Visible:     relation.GetInfo().GetVisible(),
				Tags:        extractTags(st, relation.Keys, relation.Vals),
			}

			members, err := extractMembers2(st.GetS(), relation.GetRolesSid(), relation.GetMemids(), relation.GetTypes())
			if err != nil {
				return nil, err
			}

			rel.Members = members

			relations = append(relations, rel)
		}
	}

	relations = slices.Clip(relations)

	return relations, nil
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

func extractMembers2(
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

func (dec *objectDecoder) DecodeWays() ([]*osm.Way, error) {
	dateGranularity := int64(dec.block.GetDateGranularity())

	ways := make([]*osm.Way, 0, 8000)

	for _, group := range dec.block.GetPrimitivegroup() {
		for _, w := range group.GetWays() {

			millisec := time.Duration(w.GetInfo().GetTimestamp()*dateGranularity) * time.Millisecond
			timestamp := time.Unix(0, millisec.Nanoseconds()).UTC()

			way := &osm.Way{
				ID:          osm.WayID(w.GetId()),
				User:        dec.block.GetStringtable().GetS()[w.GetInfo().GetUserSid()],
				UserID:      osm.UserID(w.GetInfo().GetUid()),
				Visible:     w.GetInfo().GetVisible(),
				Version:     int(w.GetInfo().GetVersion()),
				ChangesetID: osm.ChangesetID(w.GetInfo().GetVersion()),
				Timestamp:   timestamp,
				Nodes:       dec.extractWayNodes(w),
				Tags:        extractTags(dec.block.Stringtable, w.GetKeys(), w.GetVals()),
			}

			ways = append(ways, way)
		}

	}

	ways = slices.Clip(ways)

	return ways, nil
}

func (dec *objectDecoder) extractWayNodes(way *osmproto.Way) osm.WayNodes {
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

		nodes = append(nodes, osm.WayNode{
			ID:          osm.NodeID(ref),
			Lat:         lat,
			Lon:         lon,
			Version:     int(way.GetInfo().GetVersion()),
			ChangesetID: osm.ChangesetID(way.GetInfo().GetChangeset()),
		})
	}

	return nodes
}

func (dec *objectDecoder) DecodeNodes() ([]*osm.Node, error) {
	nodes := make([]*osm.Node, 0, 8000)

	for _, group := range dec.block.GetPrimitivegroup() {
		for node := range extractDenseNodes(dec.block, group.GetDense()) {
			nodes = append(nodes, node)
		}

		// TODO
		// if nodes := group.GetNodes(); nodes != nil {
		// 	nodes = append(nodes, group.GetNodes()...)
		// }
	}

	nodes = slices.Clip(nodes)

	return nodes, nil
}

func extractDenseNodes(primitiveBlock *osmproto.PrimitiveBlock, denseNodes *osmproto.DenseNodes) iter.Seq[*osm.Node] {

	return func(yield func(*osm.Node) bool) {

		st := primitiveBlock.GetStringtable().GetS()
		granularity := int64(primitiveBlock.GetGranularity())
		dateGranularity := int64(primitiveBlock.GetDateGranularity())

		latOffset := primitiveBlock.GetLatOffset()
		lonOffset := primitiveBlock.GetLonOffset()

		info := denseNodes.GetDenseinfo()

		keyvals := denseNodes.GetKeysVals()
		kvs := make([]map[int32]int32, 1, len(keyvals)/2)
		kvs[0] = map[int32]int32{}
		current := 0
		i := 0
		for i < len(keyvals) {
			k := keyvals[i]
			if k == 0 {
				kvs = append(kvs, map[int32]int32{})
				current++
				i++
				continue
			}
			if i+2 > len(keyvals) {
				break
			}
			v := keyvals[i+1]

			kvs[current][k] = v
			i += 2
		}

		// NOTE: do not try pre-allocating an array of nodes because saving
		// just one will stop the GC from cleaning up the whole pre-allocated array.
		n := &osm.Node{Visible: true}

		var id, lat, lon, timestamp, changeset int64
		var uid, usid int32
		for i, dID := range denseNodes.GetId() {
			id += dID
			n.ID = osm.NodeID(id)
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

			lat += denseNodes.Lat[i]
			n.Lat = 1e-9 * float64(latOffset+(granularity*lat))
			lon += denseNodes.Lon[i]
			n.Lon = 1e-9 * float64(lonOffset+(granularity*lon))

			if i < len(kvs) {
				n.Tags = make([]osm.Tag, 0, len(kvs[i]))
				for k, v := range kvs[i] {
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
