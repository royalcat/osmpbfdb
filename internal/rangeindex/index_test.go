package rangeindex_test

import (
	"fmt"
	"os"
	"testing"

	"github.com/royalcat/osmpbfdb/internal/rangeindex"
)

const (
	maxInt48 = 140737488355327
	minInt48 = -140737488355327
)

func TestIndex(t *testing.T) {
	file, err := os.CreateTemp("", "index_test")
	if err != nil {
		t.Fatalf("failed to create temp file: %v", err)
	}
	defer func() {
		os.Remove(file.Name())
	}()

	testValues := []struct {
		Key   int64
		Value uint64
	}{
		{1, 13},
		{2, 13},
		{3, 13},
		{5, 55},
		{10, 1011},
		{11, 1011},
		{500, 5000},
		{1000, 10000},
		{30, 300},
		{maxInt48 - 1, 123},
		{maxInt48, 123},
	}

	b, err := rangeindex.OpenIndexBuilder[int64](file)
	if err != nil {
		t.Fatalf("failed to open index builder: %v", err)
	}

	for _, v := range testValues {
		err = b.Add(v.Key, v.Value)
	}

	idx, err := b.Build()
	if err != nil {
		t.Fatalf("failed to build index: %v", err)
	}

	for w := range idx.RangeWindows() {
		fmt.Printf("Window: MinKey=%d, MaxKey=%d, Value=%d\n", w.MinKey, w.MaxKey, w.Value)
	}

	for _, v := range testValues {
		if err := expectInIndex(idx, v.Key, v.Value); err != nil {
			t.Errorf("expected to find %d with value %d, but got error: %v", v.Key, v.Value, err)
		}
	}

	if _, ok := idx.Get(4); ok {
		t.Error("expected not to find 4")
	}
	if _, ok := idx.Get(6); ok {
		t.Error("expected not to find 6")
	}
	if _, ok := idx.Get(0); ok {
		t.Error("expected not to find 0")
	}

	// if len(index.data) != 3 {
	// 	t.Errorf("expected 3 windows, got %d", len(index.data))
	// }
}

func expectInIndex[K ~int64](index *rangeindex.Index[K], k K, v uint64) error {
	res, ok := index.Get(k)
	if !ok {
		return fmt.Errorf("expected to find %v", k)
	}
	if res != v {
		return fmt.Errorf("expected %v, got %v", v, res)
	}
	return nil
}

func TestIndexValuesAbove4GiB(t *testing.T) {
	f, err := os.CreateTemp(t.TempDir(), "idx")
	if err != nil {
		t.Fatal(err)
	}
	defer f.Close()

	b, err := rangeindex.OpenIndexBuilder[int64](f)
	if err != nil {
		t.Fatal(err)
	}
	const big = uint64(5) << 32 // 20 GiB, does not fit in uint32
	for i, v := range []uint64{1, big, big + 1<<20} {
		if err := b.Add(int64(i*10), v); err != nil {
			t.Fatal(err)
		}
	}
	idx, err := b.Build()
	if err != nil {
		t.Fatal(err)
	}
	for i, want := range []uint64{1, big, big + 1<<20} {
		got, ok := idx.Get(int64(i * 10))
		if !ok || got != want {
			t.Fatalf("key %d: got %d ok=%v, want %d", i*10, got, ok, want)
		}
	}
}

func TestOpenIndexRejectsWrongSize(t *testing.T) {
	f, err := os.CreateTemp(t.TempDir(), "idx")
	if err != nil {
		t.Fatal(err)
	}
	defer f.Close()
	// 20 bytes is one window of the old uint32 layout.
	if _, err := f.Write(make([]byte, 20)); err != nil {
		t.Fatal(err)
	}
	if _, err := rangeindex.OpenIndex[int64](f); err == nil {
		t.Fatal("expected an error for a stale index file")
	}
}
