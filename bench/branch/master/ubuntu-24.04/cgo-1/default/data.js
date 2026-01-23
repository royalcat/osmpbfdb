window.BENCHMARK_DATA = {
  "lastUpdate": 1769164936378,
  "repoUrl": "https://github.com/royalcat/osmpbfdb",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "k.adamovich20@gmail.com",
            "name": "royalcat",
            "username": "royalcat"
          },
          "committer": {
            "email": "k.adamovich20@gmail.com",
            "name": "royalcat",
            "username": "royalcat"
          },
          "distinct": true,
          "id": "c081976f4a52958aefb2580bb0568e897124f5da",
          "message": "bench fix branch",
          "timestamp": "2026-01-23T14:23:04+04:00",
          "tree_id": "fabe5fa70033cc80cf9fff590f51d589faed9376",
          "url": "https://github.com/royalcat/osmpbfdb/commit/c081976f4a52958aefb2580bb0568e897124f5da"
        },
        "date": 1769163868739,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGet",
            "value": 2373116,
            "unit": "ns/op\t 4352179 B/op\t    8615 allocs/op",
            "extra": "5793 times\n4 procs"
          },
          {
            "name": "BenchmarkGet - ns/op",
            "value": 2373116,
            "unit": "ns/op",
            "extra": "5793 times\n4 procs"
          },
          {
            "name": "BenchmarkGet - B/op",
            "value": 4352179,
            "unit": "B/op",
            "extra": "5793 times\n4 procs"
          },
          {
            "name": "BenchmarkGet - allocs/op",
            "value": 8615,
            "unit": "allocs/op",
            "extra": "5793 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "k.adamovich20@gmail.com",
            "name": "royalcat",
            "username": "royalcat"
          },
          "committer": {
            "email": "k.adamovich20@gmail.com",
            "name": "royalcat",
            "username": "royalcat"
          },
          "distinct": true,
          "id": "3e6c6017e4c1a69c9a9e6b516e3b73546900e972",
          "message": "more benches",
          "timestamp": "2026-01-23T14:39:45+04:00",
          "tree_id": "51dd8823d25d98928c9f6c090e3a96e86a63df9c",
          "url": "https://github.com/royalcat/osmpbfdb/commit/3e6c6017e4c1a69c9a9e6b516e3b73546900e972"
        },
        "date": 1769164935508,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGet/file_descriptor/cache_none",
            "value": 2279135,
            "unit": "ns/op\t 4378071 B/op\t    8614 allocs/op",
            "extra": "5311 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - ns/op",
            "value": 2279135,
            "unit": "ns/op",
            "extra": "5311 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - B/op",
            "value": 4378071,
            "unit": "B/op",
            "extra": "5311 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - allocs/op",
            "value": 8614,
            "unit": "allocs/op",
            "extra": "5311 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru",
            "value": 2000,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "6000675 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - ns/op",
            "value": 2000,
            "unit": "ns/op",
            "extra": "6000675 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "6000675 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6000675 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC",
            "value": 2202,
            "unit": "ns/op\t     737 B/op\t       2 allocs/op",
            "extra": "5186186 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - ns/op",
            "value": 2202,
            "unit": "ns/op",
            "extra": "5186186 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - B/op",
            "value": 737,
            "unit": "B/op",
            "extra": "5186186 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "5186186 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none",
            "value": 2249330,
            "unit": "ns/op\t 2924173 B/op\t    8627 allocs/op",
            "extra": "6108 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - ns/op",
            "value": 2249330,
            "unit": "ns/op",
            "extra": "6108 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - B/op",
            "value": 2924173,
            "unit": "B/op",
            "extra": "6108 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - allocs/op",
            "value": 8627,
            "unit": "allocs/op",
            "extra": "6108 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru",
            "value": 1882,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "6249152 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - ns/op",
            "value": 1882,
            "unit": "ns/op",
            "extra": "6249152 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "6249152 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6249152 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC",
            "value": 1910,
            "unit": "ns/op\t     117 B/op\t       1 allocs/op",
            "extra": "5953170 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - ns/op",
            "value": 1910,
            "unit": "ns/op",
            "extra": "5953170 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - B/op",
            "value": 117,
            "unit": "B/op",
            "extra": "5953170 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "5953170 times\n4 procs"
          }
        ]
      }
    ]
  }
}