package osmpbfdb

import (
	"bytes"
	"io"
	"testing"
)

func TestOpenMultiDBFailsOnBadInput(t *testing.T) {
	t.Chdir(t.TempDir())
	bad := bytes.NewReader([]byte("this is not a pbf file"))
	if _, err := OpenMultiDB([]io.ReaderAt{bad}, Config{IndexDir: t.TempDir()}); err == nil {
		t.Fatal("expected an error for an unreadable input, got nil")
	}
}
