window.BENCHMARK_DATA = {
  "lastUpdate": 1769164912591,
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
        "date": 1769163831977,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGet",
            "value": 2562766,
            "unit": "ns/op\t 5017056 B/op\t    8756 allocs/op",
            "extra": "4316 times\n4 procs"
          },
          {
            "name": "BenchmarkGet - ns/op",
            "value": 2562766,
            "unit": "ns/op",
            "extra": "4316 times\n4 procs"
          },
          {
            "name": "BenchmarkGet - B/op",
            "value": 5017056,
            "unit": "B/op",
            "extra": "4316 times\n4 procs"
          },
          {
            "name": "BenchmarkGet - allocs/op",
            "value": 8756,
            "unit": "allocs/op",
            "extra": "4316 times\n4 procs"
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
        "date": 1769164912287,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGet/file_descriptor/cache_none",
            "value": 2541729,
            "unit": "ns/op\t 4908015 B/op\t    8743 allocs/op",
            "extra": "4644 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - ns/op",
            "value": 2541729,
            "unit": "ns/op",
            "extra": "4644 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - B/op",
            "value": 4908015,
            "unit": "B/op",
            "extra": "4644 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - allocs/op",
            "value": 8743,
            "unit": "allocs/op",
            "extra": "4644 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru",
            "value": 2142,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5516646 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - ns/op",
            "value": 2142,
            "unit": "ns/op",
            "extra": "5516646 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "5516646 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "5516646 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC",
            "value": 2514,
            "unit": "ns/op\t     604 B/op\t       2 allocs/op",
            "extra": "4420746 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - ns/op",
            "value": 2514,
            "unit": "ns/op",
            "extra": "4420746 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - B/op",
            "value": 604,
            "unit": "B/op",
            "extra": "4420746 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "4420746 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none",
            "value": 2412548,
            "unit": "ns/op\t 2970824 B/op\t    8761 allocs/op",
            "extra": "5480 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - ns/op",
            "value": 2412548,
            "unit": "ns/op",
            "extra": "5480 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - B/op",
            "value": 2970824,
            "unit": "B/op",
            "extra": "5480 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - allocs/op",
            "value": 8761,
            "unit": "allocs/op",
            "extra": "5480 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru",
            "value": 2504,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4531297 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - ns/op",
            "value": 2504,
            "unit": "ns/op",
            "extra": "4531297 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4531297 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4531297 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC",
            "value": 2528,
            "unit": "ns/op\t     293 B/op\t       1 allocs/op",
            "extra": "4214884 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - ns/op",
            "value": 2528,
            "unit": "ns/op",
            "extra": "4214884 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - B/op",
            "value": 293,
            "unit": "B/op",
            "extra": "4214884 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4214884 times\n4 procs"
          }
        ]
      }
    ]
  }
}