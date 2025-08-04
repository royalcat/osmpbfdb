package winindex_test

import (
	"testing"

	"github.com/royalcat/osmpbfdb/internal/winindex"
)

const (
	maxInt48 = 140737488355327
	minInt48 = -140737488355327
)

func TestWindowMarshalUnmarshal(t *testing.T) {
	testWindows := []winindex.Window{
		{MinKey: 0, MaxKey: 0, Value: 1},
		{MinKey: 1, MaxKey: 10, Value: 2},
		{MinKey: 100, MaxKey: 200, Value: 3},
		// int48 max values
		{MinKey: maxInt48, MaxKey: maxInt48, Value: 4},
		{MinKey: -minInt48, MaxKey: -minInt48, Value: 5},
		{MinKey: maxInt48, MaxKey: -minInt48, Value: 5},
		{MinKey: -maxInt48, MaxKey: maxInt48, Value: 5},
		{MinKey: 0, MaxKey: -maxInt48, Value: 5},
		{MinKey: -maxInt48, MaxKey: 0, Value: 5},
		{MinKey: 0, MaxKey: maxInt48, Value: 5},
		{MinKey: maxInt48, MaxKey: 0, Value: 5},
		{MinKey: -maxInt48, MaxKey: 0, Value: 5},
		{MinKey: maxInt48, MaxKey: maxInt48, Value: 0xFFFFFFFF},
	}

	for _, window := range testWindows {
		data, err := window.MarshalBinary()
		if err != nil {
			t.Fatalf("failed to marshal window: %v", err)
		}

		var unmarshalled winindex.Window
		err = unmarshalled.UnmarshalBinary(data)
		if err != nil {
			t.Fatalf("failed to unmarshal window: %v", err)
		}

		if unmarshalled.MinKey != window.MinKey || unmarshalled.MaxKey != window.MaxKey || unmarshalled.Value != window.Value {
			t.Errorf("unmarshalled window does not match original: got %+v, want %+v", unmarshalled, window)
		}
	}

}
