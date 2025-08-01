package winindex

import (
	"encoding/binary"
	"fmt"
	"iter"
	"os"
	"sort"
	"sync"

	"github.com/edsrzf/mmap-go"
)

type Window[K ~int64] struct {
	MaxKey K
	MinKey K
	Value  uint32
}

const windowSize = 8 + 8 + 4

var endian = binary.LittleEndian

type IndexBuilder[K ~int64] struct {
	mu sync.Mutex

	file *os.File

	currentWindow *Window[K]
}

func OpenIndexBuilder[K ~int64](file *os.File) (*IndexBuilder[K], error) {
	err := file.Truncate(0)
	if err != nil {
		return nil, err
	}

	return &IndexBuilder[K]{
		file: file,
	}, nil
}

func (b *IndexBuilder[K]) Add(k K, v uint32) error {
	b.mu.Lock()
	defer b.mu.Unlock()

	if b.currentWindow == nil {
		b.currentWindow = &Window[K]{MinKey: k, MaxKey: k, Value: v}
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

		b.currentWindow = &Window[K]{MinKey: k, MaxKey: k, Value: v}
		return nil
	}
}

func (b *IndexBuilder[K]) appendWindow() error {
	if b.currentWindow == nil {
		return nil
	}

	data := make([]byte, windowSize)
	binary.LittleEndian.PutUint64(data, uint64(b.currentWindow.MinKey))
	binary.LittleEndian.PutUint64(data[8:], uint64(b.currentWindow.MaxKey))
	binary.LittleEndian.PutUint32(data[16:], b.currentWindow.Value)

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
	ki := int64(binary.LittleEndian.Uint64(s.mmap[offi:]))
	kj := int64(binary.LittleEndian.Uint64(s.mmap[offj:]))
	return ki < kj
}
func (s *mmapEntrySorter) Swap(i, j int) {
	offi, offj := i*windowSize, j*windowSize
	tmp := make([]byte, windowSize)
	copy(tmp, s.mmap[offi:offi+windowSize])
	copy(s.mmap[offi:offi+windowSize], s.mmap[offj:offj+windowSize])
	copy(s.mmap[offj:offj+windowSize], tmp)
}

func (b *IndexBuilder[K]) Build() (*Index[K], error) {
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

	return &Index[K]{
		file:  b.file,
		mmap:  m,
		count: int64(count),
	}, nil
}

type Index[K ~int64] struct {
	file  *os.File
	mmap  mmap.MMap
	count int64
}

func OpenIndex[K ~int64](file *os.File) (*Index[K], error) {
	info, err := file.Stat()
	if err != nil {
		return nil, fmt.Errorf("failed to get file stats: %w", err)
	}

	mm, err := mmap.Map(file, mmap.RDONLY, 0)
	if err != nil {
		return nil, err
	}
	return &Index[K]{
		mmap:  mm,
		count: info.Size() / windowSize,
	}, nil
}

func (idx *Index[K]) Get(key K) (uint32, bool) {
	left, right := int64(0), idx.count-1

	for left <= right {
		mid := left + (right-left)/2
		o := mid * windowSize
		minKey := int64(binary.LittleEndian.Uint64(idx.mmap[o:]))
		maxKey := int64(binary.LittleEndian.Uint64(idx.mmap[o+8:]))

		if int64(key) >= minKey && int64(key) <= maxKey {
			val := binary.LittleEndian.Uint32(idx.mmap[o+16:])
			return val, true
		} else if int64(key) < minKey {
			right = mid - 1
		} else {
			left = mid + 1
		}
	}

	return 0, false
}

func (idx *Index[K]) RangeWindows() iter.Seq[Window[K]] {
	return func(yield func(Window[K]) bool) {
		for i := int64(0); i < idx.count; i++ {
			o := i * windowSize
			minKey := K(binary.LittleEndian.Uint64(idx.mmap[o:]))
			maxKey := K(binary.LittleEndian.Uint64(idx.mmap[o+8:]))
			value := binary.LittleEndian.Uint32(idx.mmap[o+16:])
			if !yield(Window[K]{MinKey: minKey, MaxKey: maxKey, Value: value}) {
				break
			}
		}
	}
}

func (idx *Index[K]) WindowCount() int64 {
	return idx.count
}

func (idx *Index[K]) Close() error {
	return idx.mmap.Unmap()
}
