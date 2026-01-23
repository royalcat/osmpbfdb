package osmblob

import (
	"errors"
	"fmt"

	"github.com/royalcat/osmpbfdb/osmproto"
)

func extractData(blob *osmproto.Blob, data []byte) ([]byte, error) {
	switch {
	case blob.HasRaw():
		return blob.GetRaw(), nil

	case blob.HasZlibData():
		var err error
		data, err = zlibDecompress(blob.GetZlibData(), int64(blob.GetRawSize()), data)
		if err != nil {
			return nil, err
		}

		if len(data) != int(blob.GetRawSize()) {
			return nil, fmt.Errorf("raw blob data size %d but expected %d", len(data), blob.GetRawSize())
		}

		return data, nil
	default:
		return nil, errors.New("unknown blob data")
	}
}
