package osmpbfdb

import (
	"testing"
)

const (
	maxInt48 = 140737488355327
	minInt48 = -140737488355327
)

func TestCompact(t *testing.T) {
	values := []int64{
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
		// int48 limits
		maxInt48 / 2, -maxInt48 / 2,
		maxInt48, -maxInt48,
	}

	for _, v := range values {
		uncompacted := unCompactRef(v)
		// fmt.Printf("uncompacted = %s\n", printHex(uncompacted))
		compacted := compactRef(uncompacted)
		// fmt.Printf("compacted   = %s\n", printHex(compacted))
		if compacted != v {
			t.Errorf("compactRef(%d) = %d, want %d", v, compacted, v)
		}
	}
}

// func printHex(val int64) string {
// 	hex := fmt.Sprintf("%x", val)
// 	if len(hex) < 16 {
// 		hex = fmt.Sprintf("%016s", hex)
// 	}
// 	return fmt.Sprintf("0x%s", hex)
// }
