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
		Value uint32
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

func expectInIndex[K ~int64](index *rangeindex.Index[K], k K, v uint32) error {
	res, ok := index.Get(k)
	if !ok {
		return fmt.Errorf("expected to find %v", k)
	}
	if res != v {
		return fmt.Errorf("expected %v, got %v", v, res)
	}
	return nil
}
