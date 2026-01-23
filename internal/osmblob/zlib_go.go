//go:build !cgo
// +build !cgo

package osmblob

import (
	"bytes"
	"compress/zlib"
	"io"
	"slices"
)

func zlibDecompress(data []byte, rawSize int64, out []byte) ([]byte, error) {
	zlibReader, err := zlib.NewReader(bytes.NewReader(data))
	if err != nil {
		return out, err
	}
	defer zlibReader.Close()

	out = slices.Grow(out, int(rawSize))[:rawSize]
	if out == nil {
		out = make([]byte, int(rawSize))
	}
	_, err = io.ReadFull(zlibReader, out)
	if err != nil {
		return out, err
	}

	return out, nil
}
