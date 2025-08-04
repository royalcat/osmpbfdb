package winindex

import (
	"encoding/binary"
	"errors"
	"fmt"
	"iter"
	"os"
	"sort"
	"sync"

	"github.com/edsrzf/mmap-go"
)

const (
	maxInt48 = 140737488355327
	minInt48 = -140737488355327
)

type Window struct {
	MinKey, MaxKey int64 // compacted osm ref, stored as int48
	Value          uint32
}

const windowSize = 6 + 6 + 4

var endian = binary.LittleEndian

func (r *Window) MarshalBinary() ([]byte, error) {
	buf := make([]byte, windowSize)

	// Range check: must fit in signed 48 bits
	if r.MinKey < -(1<<47) || r.MinKey > (1<<47)-1 {
		return nil, errors.New("Min out of int48 range")
	}
	if r.MaxKey < -(1<<47) || r.MaxKey > (1<<47)-1 {
		return nil, errors.New("Max out of int48 range")
	}

	// Marshal Min
	binary.BigEndian.PutUint64(buf[0:8], uint64(int64ToInt48(r.MinKey)))
	copy(buf[0:6], buf[2:8]) // keep only 6 bytes

	// Marshal Max
	binary.BigEndian.PutUint64(buf[6:14], uint64(int64ToInt48(r.MaxKey)))
	copy(buf[6:12], buf[8:14]) // keep only 6 bytes

	// Marshal Value
	binary.BigEndian.PutUint32(buf[12:16], r.Value)

	return buf, nil
}

func (r *Window) UnmarshalBinary(data []byte) error {
	if len(data) != windowSize {
		return errors.New("invalid length for Window binary representation")
	}

	// Unmarshal Min
	r.MinKey = int48ToInt64(binary.BigEndian.Uint64(append([]byte{0x00, 0x00}, data[0:6]...)))

	// Unmarshal Max
	r.MaxKey = int48ToInt64(binary.BigEndian.Uint64(append([]byte{0x00, 0x00}, data[6:12]...)))

	// Unmarshal Value
	r.Value = binary.BigEndian.Uint32(data[12:16])

	return nil
}

// Convert int64 to int48-safe value, preserving sign
func int64ToInt48(n int64) int64 {
	return n & 0xFFFFFFFFFFFF // Mask to 48 bits (2's complement is preserved)
}

// Restore int64 from 48-bit signed int (stored in lower 6 bytes of a uint64)
func int48ToInt64(n uint64) int64 {
	if n&(1<<47) != 0 {
		// Negative number — extend sign
		return int64(n | 0xFFFF000000000000)
	}
	return int64(n)
}

type IndexBuilder struct {
	mu sync.Mutex

	file *os.File

	currentWindow *Window
}

func OpenIndexBuilder(file *os.File) (*IndexBuilder, error) {
	err := file.Truncate(0)
	if err != nil {
		return nil, err
	}

	return &IndexBuilder{
		file: file,
	}, nil
}

func (b *IndexBuilder) Add(k int64, v uint32) error {
	if k > maxInt48 || k < minInt48 {
		return fmt.Errorf("key %d out of int48 range (%d to %d)", k, minInt48, maxInt48)
	}

	b.mu.Lock()
	defer b.mu.Unlock()

	if b.currentWindow == nil {
		b.currentWindow = &Window{MinKey: k, MaxKey: k, Value: v}
		return nil
	}

	if b.currentWindow.MaxKey+1 == k && b.currentWindow.Value == v {
		b.currentWindow.MaxKey = k
		return nil
	} else {
		err := b.appendWindow()
		if err != nil {
			return err
		}

		b.currentWindow = &Window{MinKey: k, MaxKey: k, Value: v}
		return nil
	}
}

func (b *IndexBuilder) appendWindow() error {
	if b.currentWindow == nil {
		return nil
	}

	data, _ := b.currentWindow.MarshalBinary()

	_, err := b.file.Write(data)
	if err != nil {
		return fmt.Errorf("failed to write window: %w", err)
	}

	b.currentWindow = nil
	return nil
}

type mmapEntrySorter struct {
	mmap  mmap.MMap
	count int
}

func (s *mmapEntrySorter) Len() int { return s.count }
func (s *mmapEntrySorter) Less(i, j int) bool {
	offi, offj := i*windowSize, j*windowSize

	ki := int48ToInt64(binary.BigEndian.Uint64(append([]byte{0x00, 0x00}, s.mmap[offi:offi+6]...)))
	kj := int48ToInt64(binary.BigEndian.Uint64(append([]byte{0x00, 0x00}, s.mmap[offj:offj+6]...)))
	// ki := int32(binary.LittleEndian.Uint32(s.mmap[offi:]))
	// kj := int32(binary.LittleEndian.Uint32(s.mmap[offj:]))
	return ki < kj
}
func (s *mmapEntrySorter) Swap(i, j int) {
	offi, offj := i*windowSize, j*windowSize
	tmp := make([]byte, windowSize)
	copy(tmp, s.mmap[offi:offi+windowSize])
	copy(s.mmap[offi:offi+windowSize], s.mmap[offj:offj+windowSize])
	copy(s.mmap[offj:offj+windowSize], tmp)
}

func (b *IndexBuilder) Build() (*Index, error) {
	b.appendWindow()
	err := b.file.Sync()
	if err != nil {
		return nil, fmt.Errorf("failed to sync file: %w", err)
	}

	m, err := mmap.Map(b.file, mmap.RDWR, 0)
	if err != nil {
		return nil, fmt.Errorf("failed to mmap file: %w", err)
	}

	stat, err := b.file.Stat()
	if err != nil {
		return nil, fmt.Errorf("failed to get file stats: %w", err)
	}

	count := int(stat.Size() / windowSize)

	sort.Sort(&mmapEntrySorter{m, count})

	return &Index{
		file:  b.file,
		mmap:  m,
		count: int64(count),
	}, nil
}

type Index struct {
	file  *os.File
	mmap  mmap.MMap
	count int64
}

func OpenIndex(file *os.File) (*Index, error) {
	info, err := file.Stat()
	if err != nil {
		return nil, fmt.Errorf("failed to get file stats: %w", err)
	}

	mm, err := mmap.Map(file, mmap.RDONLY, 0)
	if err != nil {
		return nil, err
	}
	return &Index{
		mmap:  mm,
		count: info.Size() / windowSize,
	}, nil
}

func (idx *Index) Get(key int64) (uint32, bool) {
	left, right := int32(0), int32(idx.count-1)

	for left <= right {
		mid := left + (right-left)/2
		o := mid * windowSize
		var window Window
		err := window.UnmarshalBinary(idx.mmap[o : o+windowSize])
		if err != nil {
			panic(err)
		}

		if key >= window.MinKey && key <= window.MaxKey {
			return window.Value, true
		} else if key < window.MinKey {
			right = mid - 1
		} else {
			left = mid + 1
		}
	}

	return 0, false
}

func (idx *Index) RangeWindows() iter.Seq[Window] {
	return func(yield func(Window) bool) {
		for i := int64(0); i < idx.count; i++ {
			o := i * windowSize
			var window Window
			err := window.UnmarshalBinary(idx.mmap[o : o+windowSize])
			if err != nil {
				panic(fmt.Errorf("failed to unmarshal window at offset %d: %w", o, err))
			}
			if !yield(window) {
				break
			}
		}
	}
}

func (idx *Index) WindowCount() int64 {
	return idx.count
}

func (idx *Index) Close() error {
	return idx.mmap.Unmap()
}
