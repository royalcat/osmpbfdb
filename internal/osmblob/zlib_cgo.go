//go:build cgo
// +build cgo

package osmblob

import (
	"github.com/4kills/go-libdeflate/v2"
)

func zlibDecompress(data []byte, rawSize int64) ([]byte, error) {
	dc, err := libdeflate.NewDecompressor()
	if err != nil {
		return nil, err
	}

	out := make([]byte, rawSize)
	_, out, err = dc.Decompress(data, out, libdeflate.ModeZlib)
	if err != nil {
		return out, err
	}

	return out, nil
}
