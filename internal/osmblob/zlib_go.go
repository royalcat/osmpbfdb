//go:build !cgo
// +build !cgo

package osmblob

import (
	"bytes"
	"compress/zlib"
	"io"
)

func zlibDecompress(data []byte, rawSize int64) ([]byte, error) {
	zlibReader, err := zlib.NewReader(bytes.NewReader(data))
	if err != nil {
		return nil, err
	}
	defer zlibReader.Close()

	out := make([]byte, rawSize)
	_, err = io.ReadFull(zlibReader, out)
	if err != nil {
		return nil, err
	}

	return out, nil
}
