# OsmPbfDB

Making OpenStreetMaps .osm.pbf files directly usable.

## Cache types

`Config.CacheType` selects how decoded blobs are cached in memory:

### `"lru"` (default)

Bounded LRU cache (hashicorp/golang-lru) holding up to 1000 decoded blobs; entries expire after one hour.

**Pros**
- Bounded memory with a predictable, least-recently-used eviction order
- Cache is populated synchronously — no window where a just-read blob is missing
- Simple and battle-tested

**Cons**
- Throughput flattens under high concurrency
- No admission policy: a scan over rarely-reused blobs can evict the working set

### `"weak"`

Entries are held via Go weak pointers and reclaimed by the GC.

**Pros**
- No size cap to tune: holds every blob visited, for as long as memory allows
- Memory is reclaimed automatically under GC pressure

**Cons**
- Retention depends on GC timing, not a policy: cache size can swing with heap pressure
- Requires Go 1.24+

### `"ristretto"`

TinyLFU-based concurrent cache (dgraph-io/ristretto v2), bounded to 1000 blobs; entries expire after one hour.

**Pros**
- Admission policy (TinyLFU) keeps frequently-used entries and resists scan pollution — pays off with larger caches
- Scales well under high concurrent access

**Cons**
- Slightly more overhead than a plain LRU for small caches
- Heavier dependency

### `"none"`

No caching.

**Pros**
- Zero memory overhead; deterministic behavior; always decodes fresh data from the file

**Cons**
- Every read decodes the full blob — roughly 900× slower than a cache hit in benchmarks

Intended as a testing and benchmarking baseline.

---

For most workloads `"lru"` is a good default. Pick `"ristretto"` for large caches or concurrent write-heavy access, `"weak"` when you don't want to bound memory at all, and `"none"` for benchmarks.
