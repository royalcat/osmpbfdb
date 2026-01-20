//go:build !cgo
// +build !cgo

package osmblob

import (
	"bytes"
	"compress/zlib"
	"io"
	"slices"
)

func zlibDecompress(data []byte, rawSize int64) ([]byte, error) {
	zlibReader, err := zlib.NewReader(bytes.NewReader(data))
	if err != nil {
		return nil, err
	}
	defer zlibReader.Close()

	data := slices.Grow(data, int(rawSize))
	_, err = io.ReadFull(zlibReader, data)
	if err != nil {
		return nil, err
	}

	return out, nil
}
