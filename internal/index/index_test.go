package index_test

import (
	"fmt"
	"os"
	"testing"

	"github.com/royalcat/osmpbfdb/internal/index"
)

func TestIndex(t *testing.T) {
	file, err := os.CreateTemp("", "index_test")
	if err != nil {
		t.Fatalf("failed to create temp file: %v", err)
	}
	defer func() {
		os.Remove(file.Name())
	}()

	b, err := index.OpenIndexBuilder(file)
	if err != nil {
		t.Fatalf("failed to open index builder: %v", err)
	}

	b.Add(1, 13)
	b.Add(2, 13)
	b.Add(3, 13)
	b.Add(5, 55)
	b.Add(10, 1011)
	b.Add(11, 1011)

	err = b.Build()
	if err != nil {
		t.Fatalf("failed to build index: %v", err)
	}

	idx, err := index.OpenIndex(file)
	if err != nil {
		t.Fatalf("failed to open index: %v", err)
	}

	idx.RangeWindows(func(w index.Window) bool {
		fmt.Printf("Window: MinKey=%d, MaxKey=%d, Value=%d\n", w.MinKey, w.MaxKey, w.Value)
		return true
	})

	if err := expectInIndex(idx, 1, 13); err != nil {
		t.Error(err)
	}
	if err := expectInIndex(idx, 2, 13); err != nil {
		t.Error(err)
	}
	if err := expectInIndex(idx, 3, 13); err != nil {
		t.Error(err)
	}
	if err := expectInIndex(idx, 5, 55); err != nil {
		t.Error(err)
	}
	if err := expectInIndex(idx, 10, 1011); err != nil {
		t.Error(err)
	}
	if err := expectInIndex(idx, 11, 1011); err != nil {
		t.Error(err)
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

func expectInIndex(index *index.Index, k int64, v uint32) error {
	res, ok := index.Get(k)
	if !ok {
		return fmt.Errorf("expected to find %v", k)
	}
	if res != v {
		return fmt.Errorf("expected %v, got %v", v, res)
	}
	return nil
}
