package osmblob

import (
	"errors"
	"fmt"
	"iter"
	"time"

	"github.com/paulmach/osm"
	"github.com/paulmach/protoscan"
	"github.com/royalcat/osmpbfdb/osmproto"
	"google.golang.org/protobuf/proto"
)

// DataDecoder is a decoder for Blob with OSMData (PrimitiveBlock).
type DataDecoder struct {
	data []byte

	// cache objects to save allocations
	primitiveBlock *osmproto.PrimitiveBlock

	keys, vals *protoscan.Iterator

	// ways
	nodes *protoscan.Iterator
	wlats *protoscan.Iterator
	wlons *protoscan.Iterator

	// relations
	roles  *protoscan.Iterator
	memids *protoscan.Iterator
	types  *protoscan.Iterator

	// dense nodes
	ids *protoscan.Iterator

	versions   *protoscan.Iterator
	timestamps *protoscan.Iterator
	changesets *protoscan.Iterator
	uids       *protoscan.Iterator
	usids      *protoscan.Iterator
	visibles   *protoscan.Iterator

	lats *protoscan.Iterator
	lons *protoscan.Iterator

	keyvals *protoscan.Iterator
}

func (dec *DataDecoder) Decode(blob *osmproto.Blob) iter.Seq2[osm.Object, error] {
	return func(yield func(osm.Object, error) bool) {
		var err error
		dec.data, err = getData(blob, dec.data)
		if err != nil {
			yield(nil, fmt.Errorf("get uncompressed data: %w", err))
			return
		}

		for obj, err := range dec.scanPrimitiveBlock(dec.data) {
			if err != nil {
				if !yield(obj, fmt.Errorf("scan primitive block: %w", err)) {
					return
				}
			}

			if !yield(obj, nil) {
				return
			}
		}
	}
}

func (dec *DataDecoder) scanPrimitiveBlock(data []byte) iter.Seq2[osm.Object, error] {
	return func(yield func(osm.Object, error) bool) {
		msg := protoscan.New(data)

		if dec.primitiveBlock == nil {
			dec.primitiveBlock = &osmproto.PrimitiveBlock{
				Stringtable: &osmproto.StringTable{},
			}
		} else {
			dec.primitiveBlock.Stringtable.S = dec.primitiveBlock.Stringtable.S[:0]
			dec.primitiveBlock.Primitivegroup = dec.primitiveBlock.Primitivegroup[:0]
			dec.primitiveBlock.Granularity = nil
			dec.primitiveBlock.LatOffset = nil
			dec.primitiveBlock.LonOffset = nil
			dec.primitiveBlock.DateGranularity = nil
		}

		for msg.Next() {
			switch msg.FieldNumber() {
			case 1:
				d, err := msg.MessageData()
				if err != nil {
					if !yield(nil, fmt.Errorf("get message data: %w", err)) {
						return
					}
					continue
				}
				err = proto.Unmarshal(d, dec.primitiveBlock.Stringtable)
				if err != nil {
					if !yield(nil, fmt.Errorf("unmarshal string table: %w", err)) {
						return
					}
					continue
				}
			case 17:
				v, err := msg.Int32()
				dec.primitiveBlock.Granularity = &v
				if err != nil {
					if !yield(nil, fmt.Errorf("get granularity: %w", err)) {
						return
					}
					continue
				}
			case 18:
				v, err := msg.Int32()
				dec.primitiveBlock.DateGranularity = &v
				if err != nil {
					if !yield(nil, fmt.Errorf("get date granularity: %w", err)) {
						return
					}
					continue
				}
			case 19:
				v, err := msg.Int64()
				dec.primitiveBlock.LatOffset = &v
				if err != nil {
					if !yield(nil, fmt.Errorf("get latitude offset: %w", err)) {
						return
					}
					continue
				}
			case 20:
				v, err := msg.Int64()
				dec.primitiveBlock.LonOffset = &v
				if err != nil {
					if !yield(nil, fmt.Errorf("get longitude offset: %w", err)) {
						return
					}
					continue
				}
			default:
				msg.Skip()
			}

			if err := msg.Err(); err != nil {
				if !yield(nil, fmt.Errorf("scan primitive block: %w", err)) {
					return
				}
			}
		}

		if err := msg.Err(); err != nil {
			if !yield(nil, fmt.Errorf("scan primitive block: %w", err)) {
				return
			}
		}

		msg.Reset(nil)
		for msg.Next() {
			switch msg.FieldNumber() {
			case 2:
				d, err := msg.MessageData()
				if err != nil {
					if !yield(nil, fmt.Errorf("get message data: %w", err)) {
						return
					}
					continue
				}
				for obj, err := range dec.scanPrimitiveGroup(d) {
					if err != nil {
						if !yield(obj, fmt.Errorf("scan primitive group: %w", err)) {
							return
						}
					}

					if !yield(obj, nil) {
						return
					}
				}
			default:
				msg.Skip()
			}
		}
	}
}

func (dec *DataDecoder) scanPrimitiveGroup(data []byte) iter.Seq2[osm.Object, error] {
	return func(yield func(osm.Object, error) bool) {
		msg := protoscan.New(data)
		way := &osm.Way{Visible: true}
		relation := &osm.Relation{Visible: true}

		for msg.Next() {
			switch msg.FieldNumber() {
			case 1:
				panic("nodes are not supported, currently untested")
			case 2:
				data, err := msg.MessageData()
				if err != nil {
					if !yield(nil, fmt.Errorf("get message data: %w", err)) {
						return
					}
				}

				for node, err := range dec.scanDenseNodes(data) {
					if err != nil {
						if !yield(nil, fmt.Errorf("scan dense nodes: %w", err)) {
							return
						}
					}

					if !yield(&node, nil) {
						return
					}
				}
			case 3:
				data, err := msg.MessageData()
				if err != nil {
					if !yield(nil, fmt.Errorf("get message data: %w", err)) {
						return
					}
				}

				way, err = dec.scanWays(data, way)
				if err != nil {
					if !yield(nil, fmt.Errorf("scan ways: %w", err)) {
						return
					}
				}

				if !yield(way, nil) {
					return
				}
				way = &osm.Way{Visible: true}
			case 4:
				data, err := msg.MessageData()
				if err != nil {
					if !yield(nil, fmt.Errorf("get message data: %w", err)) {
						return
					}
				}

				relation, err = dec.scanRelations(data, relation)
				if err != nil {
					if !yield(nil, fmt.Errorf("scan relations: %w", err)) {
						return
					}
				}
				if !yield(relation, nil) {
					return
				}
				relation = &osm.Relation{Visible: true}
			default:
				msg.Skip()
			}
		}
		if err := msg.Err(); err != nil {
			if !yield(nil, fmt.Errorf("scan message: %w", err)) {
				return
			}
		}
	}
}

func (dec *DataDecoder) scanDenseNodes(data []byte) iter.Seq2[osm.Node, error] {
	return func(yield func(osm.Node, error) bool) {
		var foundIds, foundInfo, foundLats, foundLons, foundKeyVals bool

		msg := protoscan.New(data)
		for msg.Next() {
			var err error
			switch msg.FieldNumber() {
			case 1: // ids
				dec.ids, err = msg.Iterator(dec.ids)
				foundIds = true
			case 5: // dense info
				d, err := msg.MessageData()
				if err != nil {
					if !yield(osm.Node{}, fmt.Errorf("get message data: %w", err)) {
						return
					}
				}

				// verify all the fields are "found" since we reuse object from last block
				// and can't just check for nil
				var foundVersions, foundTimestamps, foundChangesets,
					foundUids, foundUsids, foundVisibles bool

				info := protoscan.New(d)
				for info.Next() {
					var err error
					switch info.FieldNumber() {
					case 1: // version
						dec.versions, err = info.Iterator(dec.versions)
						foundVersions = true
					case 2: // timestamp
						dec.timestamps, err = info.Iterator(dec.timestamps)
						foundTimestamps = true
					case 3: // changeset
						dec.changesets, err = info.Iterator(dec.changesets)
						foundChangesets = true
					case 4: // uid
						dec.uids, err = info.Iterator(dec.uids)
						foundUids = true
					case 5: // user_sid
						dec.usids, err = info.Iterator(dec.usids)
						foundUsids = true
					case 6: // visible, optional, default true
						dec.visibles, err = info.Iterator(dec.visibles)
						foundVisibles = true
					default:
						info.Skip()
					}

					if err != nil {
						if !yield(osm.Node{}, fmt.Errorf("scan message: %w", err)) {
							return
						}
					}
				}

				if err := info.Err(); err != nil {
					if !yield(osm.Node{}, fmt.Errorf("scan message: %w", err)) {
						return
					}
				}

				if !foundVersions {
					dec.versions = nil
				}

				if !foundTimestamps {
					dec.timestamps = nil
				}

				if !foundChangesets {
					dec.changesets = nil
				}

				if !foundUids {
					dec.uids = nil
				}

				if !foundUsids {
					dec.usids = nil
				}

				// visibles are optional, default is true
				if !foundVisibles {
					dec.visibles = nil
				}

				foundInfo = true
			case 8: // lat
				dec.lats, err = msg.Iterator(dec.lats)
				foundLats = true
			case 9: // lon
				dec.lons, err = msg.Iterator(dec.lons)
				foundLons = true
			case 10: // keys_vals
				dec.keyvals, err = msg.Iterator(dec.keyvals)
				foundKeyVals = true
			default:
				msg.Skip()
			}

			if err != nil {
				if !yield(osm.Node{}, fmt.Errorf("scan message: %w", err)) {
					return
				}
			}
		}

		if err := msg.Err(); err != nil {
			if !yield(osm.Node{}, fmt.Errorf("scan message: %w", err)) {
				return
			}
		}

		if !foundIds {
			if !yield(osm.Node{}, errors.New("osmproto: dense node did not contain ids")) {
				return
			}
		}

		if !foundLats {
			if !yield(osm.Node{}, errors.New("osmproto: dense node did not contain latitudes")) {
				return
			}
		}

		if !foundLons {
			if !yield(osm.Node{}, errors.New("osmproto: dense node did not contain longitudes")) {
				return
			}
		}

		// keyvals could be empty if all nodes are tagless
		if !foundKeyVals {
			dec.keyvals = nil
		}

		if !foundInfo {
			dec.versions = nil
			dec.timestamps = nil
			dec.changesets = nil
			dec.uids = nil
			dec.usids = nil
			dec.visibles = nil
		}

		for node, err := range dec.extractDenseNodes() {
			if err != nil {
				if !yield(node, fmt.Errorf("extract dense nodes: %w", err)) {
					return
				}
			}

			if !yield(node, nil) {
				return
			}
		}
	}
}

func (dec *DataDecoder) extractDenseNodes() iter.Seq2[osm.Node, error] {
	return func(yield func(osm.Node, error) bool) {

		st := dec.primitiveBlock.GetStringtable().GetS()
		granularity := int64(dec.primitiveBlock.GetGranularity())
		dateGranularity := int64(dec.primitiveBlock.GetDateGranularity())

		latOffset := dec.primitiveBlock.GetLatOffset()
		lonOffset := dec.primitiveBlock.GetLonOffset()

		// NOTE: do not try pre-allocating an array of nodes because saving
		// just one will stop the GC from cleaning up the whole pre-allocated array.
		n := osm.Node{Visible: true}

		var id, lat, lon, timestamp, changeset int64
		var uid, usid int32
		for dec.ids.HasNext() {
			// ID
			v1, err := dec.ids.Sint64()
			if err != nil {
				if !yield(osm.Node{}, err) {
					return
				}
				continue
			}
			id += v1
			n.ID = osm.NodeID(id)

			// Version
			if dec.versions != nil {
				v2, err := dec.versions.Int32()
				if err != nil {
					if !yield(osm.Node{}, err) {
						return
					}
					continue
				}
				n.Version = int(v2)
			}

			// Timestamp
			if dec.timestamps != nil {
				v3, err := dec.timestamps.Sint64()
				if err != nil {
					if !yield(osm.Node{}, err) {
						return
					}
					continue
				}
				timestamp += v3
				millisec := time.Duration(timestamp*dateGranularity) * time.Millisecond
				n.Timestamp = time.Unix(0, millisec.Nanoseconds()).UTC()
			}

			// Changeset
			if dec.changesets != nil {
				v4, err := dec.changesets.Sint64()
				if err != nil {
					if !yield(osm.Node{}, err) {
						return
					}
					continue
				}
				changeset += v4
				n.ChangesetID = osm.ChangesetID(changeset)
			}

			// uid
			if dec.uids != nil {
				v5, err := dec.uids.Sint32()
				if err != nil {
					if !yield(osm.Node{}, err) {
						return
					}
					continue
				}
				uid += v5
				n.UserID = osm.UserID(uid)
			}

			// usid
			if dec.usids != nil {
				v6, err := dec.usids.Sint32()
				if err != nil {
					if !yield(osm.Node{}, err) {
						return
					}
					continue
				}
				usid += v6
				n.User = st[usid]
			}

			// Visible
			if dec.visibles != nil {
				v7, err := dec.visibles.Bool()
				if err != nil {
					if !yield(osm.Node{}, err) {
						return
					}
					continue
				}
				n.Visible = v7
			}

			// lat
			v8, err := dec.lats.Sint64()
			if err != nil {
				if !yield(osm.Node{}, err) {
					return
				}
				continue
			}
			lat += v8
			n.Lat = 1e-9 * float64(latOffset+(granularity*lat))

			// lon
			v9, err := dec.lons.Sint64()
			if err != nil {
				if !yield(osm.Node{}, err) {
					return
				}
				continue
			}
			lon += v9
			n.Lon = 1e-9 * float64(lonOffset+(granularity*lon))

			// tags, could be missing if all nodes are tagless
			if dec.keyvals != nil {
				count := 0
				for i := dec.keyvals.Index; i < len(dec.keyvals.Data); i++ {
					b := dec.keyvals.Data[i]
					if b == 0 {
						break
					}

					if b < 128 {
						count++
					}
				}

				if cap(n.Tags) < count/2 {
					n.Tags = make(osm.Tags, 0, count/2)
				}
				for {
					k, err := dec.keyvals.Int32()
					if err != nil {
						if !yield(osm.Node{}, err) {
							return
						}
						continue
					}

					if k == 0 {
						break
					}

					v, err := dec.keyvals.Int32()
					if err != nil {
						if !yield(osm.Node{}, err) {
							return
						}
						continue
					}

					n.Tags = append(n.Tags, osm.Tag{Key: st[k], Value: st[v]})
				}
			}

			if !yield(n, nil) {
				return
			}
			n = osm.Node{Visible: true}

		}
	}
}

func (dec *DataDecoder) scanWays(data []byte, way *osm.Way) (*osm.Way, error) {
	st := dec.primitiveBlock.GetStringtable().GetS()
	granularity := int64(dec.primitiveBlock.GetGranularity())
	dateGranularity := int64(dec.primitiveBlock.GetDateGranularity())

	latOffset := dec.primitiveBlock.GetLatOffset()
	lonOffset := dec.primitiveBlock.GetLonOffset()

	msg := protoscan.New(data)

	if way == nil {
		way = &osm.Way{Visible: true}
	}

	var foundKeys, foundVals bool
	for msg.Next() {
		var i64 int64
		var err error

		switch msg.FieldNumber() {
		case 1:
			i64, err = msg.Int64()
			way.ID = osm.WayID(i64)
		case 2:
			dec.keys, err = msg.Iterator(dec.keys)
			foundKeys = true
		case 3:
			dec.vals, err = msg.Iterator(dec.vals)
			foundVals = true
		case 4: // info
			d, err := msg.MessageData()
			if err != nil {
				return nil, err
			}

			info := protoscan.New(d)
			for info.Next() {
				switch info.FieldNumber() {
				case 1:
					v, err := info.Int32()
					if err != nil {
						return nil, err
					}
					way.Version = int(v)
				case 2:
					v, err := info.Int64()
					if err != nil {
						return nil, err
					}
					millisec := time.Duration(v*dateGranularity) * time.Millisecond
					way.Timestamp = time.Unix(0, millisec.Nanoseconds()).UTC()
				case 3:
					v, err := info.Int64()
					if err != nil {
						return nil, err
					}
					way.ChangesetID = osm.ChangesetID(v)
				case 4:
					v, err := info.Int32()
					if err != nil {
						return nil, err
					}
					way.UserID = osm.UserID(v)
				case 5:
					v, err := info.Uint32()
					if err != nil {
						return nil, err
					}
					way.User = st[v]
				case 6:
					v, err := info.Bool()
					if err != nil {
						return nil, err
					}
					way.Visible = v
				default:
					info.Skip()
				}
			}

			if info.Err() != nil {
				return nil, info.Err()
			}
		case 8: // refs or nodes
			dec.nodes, err = msg.Iterator(dec.nodes)
			if err != nil {
				return nil, err
			}

			var prev, index int64
			if len(way.Nodes) == 0 {
				way.Nodes = make(osm.WayNodes, dec.nodes.Count(protoscan.WireTypeVarint))
			}
			for dec.nodes.HasNext() {
				v, err := dec.nodes.Sint64()
				if err != nil {
					return nil, err
				}
				prev = v + prev // delta encoding
				way.Nodes[index].ID = osm.NodeID(prev)
				index++
			}
		case 9: // lat
			dec.wlats, err = msg.Iterator(dec.wlats)
			if err != nil {
				return nil, err
			}

			var prev, index int64
			if len(way.Nodes) == 0 {
				way.Nodes = make(osm.WayNodes, dec.wlats.Count(protoscan.WireTypeVarint))
			}
			for dec.wlats.HasNext() {
				v, err := dec.wlats.Sint64()
				if err != nil {
					return nil, err
				}
				prev = v + prev // delta encoding
				way.Nodes[index].Lat = 1e-9 * float64(latOffset+(granularity*prev))
				index++
			}
		case 10: // lon
			dec.wlons, err = msg.Iterator(dec.wlons)
			if err != nil {
				return nil, err
			}

			var prev, index int64
			if len(way.Nodes) == 0 {
				way.Nodes = make(osm.WayNodes, dec.wlons.Count(protoscan.WireTypeVarint))
			}
			for dec.wlons.HasNext() {
				v, err := dec.wlons.Sint64()
				if err != nil {
					return nil, err
				}
				prev = v + prev // delta encoding
				way.Nodes[index].Lon = 1e-9 * float64(lonOffset+(granularity*prev))
				index++
			}
		default:
			msg.Skip()
		}

		if err != nil {
			return nil, err
		}
	}

	if msg.Err() != nil {
		return nil, msg.Err()
	}

	if foundKeys && foundVals {
		var err error
		way.Tags, err = scanTags(st, dec.keys, dec.vals)
		if err != nil {
			return nil, err
		}
	}

	return way, nil
}

// Make relation members from stringtable and three parallel arrays of IDs.
func extractMembers(
	st []string,
	roles *protoscan.Iterator,
	memids *protoscan.Iterator,
	types *protoscan.Iterator,
) (osm.Members, error) {
	var index, memID int64

	members := make(osm.Members, types.Count(protoscan.WireTypeVarint))
	for roles.HasNext() {
		r, err := roles.Int32()
		if err != nil {
			return nil, err
		}
		members[index].Role = st[r]

		m, err := memids.Sint64()
		if err != nil {
			return nil, err
		}
		memID += m
		members[index].Ref = memID

		t, err := types.Int32()
		if err != nil {
			return nil, err
		}

		switch osmproto.Relation_MemberType(t) {
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

func (dec *DataDecoder) scanRelations(data []byte, relation *osm.Relation) (*osm.Relation, error) {
	st := dec.primitiveBlock.GetStringtable().GetS()
	dateGranularity := int64(dec.primitiveBlock.GetDateGranularity())

	msg := protoscan.New(data)

	if relation == nil {
		relation = &osm.Relation{Visible: true}
	}

	var foundKeys, foundVals, foundRoles, foundMemids, foundTypes bool
	for msg.Next() {
		var i64 int64
		var err error

		switch msg.FieldNumber() {
		case 1:
			i64, err = msg.Int64()
			relation.ID = osm.RelationID(i64)
		case 2:
			dec.keys, err = msg.Iterator(dec.keys)
			foundKeys = true
		case 3:
			dec.vals, err = msg.Iterator(dec.vals)
			foundVals = true
		case 4: // info
			d, err := msg.MessageData()
			if err != nil {
				return nil, err
			}

			info := protoscan.New(d)
			for info.Next() {
				switch info.FieldNumber() {
				case 1:
					v, err := info.Int32()
					if err != nil {
						return nil, err
					}
					relation.Version = int(v)
				case 2:
					v, err := info.Int64()
					if err != nil {
						return nil, err
					}
					millisec := time.Duration(v*dateGranularity) * time.Millisecond
					relation.Timestamp = time.Unix(0, millisec.Nanoseconds()).UTC()
				case 3:
					v, err := info.Int64()
					if err != nil {
						return nil, err
					}
					relation.ChangesetID = osm.ChangesetID(v)
				case 4:
					v, err := info.Int32()
					if err != nil {
						return nil, err
					}
					relation.UserID = osm.UserID(v)
				case 5:
					v, err := info.Uint32()
					if err != nil {
						return nil, err
					}
					relation.User = st[v]
				case 6:
					v, err := info.Bool()
					if err != nil {
						return nil, err
					}
					relation.Visible = v
				default:
					info.Skip()
				}
			}

			if info.Err() != nil {
				return nil, info.Err()
			}
		case 8: // refs or nodes
			dec.roles, err = msg.Iterator(dec.roles)
			foundRoles = true
		case 9:
			dec.memids, err = msg.Iterator(dec.memids)
			foundMemids = true
		case 10:
			dec.types, err = msg.Iterator(dec.types)
			foundTypes = true
		default:
			msg.Skip()
		}

		if err != nil {
			return nil, err
		}
	}

	if msg.Err() != nil {
		return nil, msg.Err()
	}

	// possible for relation to not have tags
	if foundKeys && foundVals {
		var err error
		relation.Tags, err = scanTags(st, dec.keys, dec.vals)
		if err != nil {
			return nil, err
		}
	}

	// possible for relation to not have any members
	if foundRoles && foundMemids && foundTypes {
		var err error
		relation.Members, err = extractMembers(st, dec.roles, dec.memids, dec.types)
		if err != nil {
			return nil, err
		}
	}

	return relation, nil
}

func scanTags(stringTable []string, keys, vals *protoscan.Iterator) (osm.Tags, error) {
	// note we assume keys and vals are the same length
	// we also assume index are within range of the stringTable

	index := 0
	tags := make(osm.Tags, keys.Count(protoscan.WireTypeVarint))
	for keys.HasNext() {
		k, err := keys.Uint32()
		if err != nil {
			return nil, err
		}
		v, err := vals.Uint32()
		if err != nil {
			return nil, err
		}
		tags[index] = osm.Tag{
			Key:   stringTable[k],
			Value: stringTable[v],
		}
		index++
	}

	return tags, nil
}
