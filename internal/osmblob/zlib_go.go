//go:build !cgo
// +build !cgo

package osmblob

import (
	"bytes"
	"compress/zlib"
	"io"
)

func zlibReader(data []byte) (io.ReadCloser, error) {
	return zlib.NewReader(bytes.NewReader(data))
}
