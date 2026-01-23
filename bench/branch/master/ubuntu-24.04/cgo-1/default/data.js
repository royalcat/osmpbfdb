window.BENCHMARK_DATA = {
  "lastUpdate": 1769166091062,
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
          "id": "b507e14b34c242eade9a3e712192843efeef45d8",
          "message": "run-bench",
          "timestamp": "2026-01-23T14:57:35+04:00",
          "tree_id": "b44c165f2c4684bf3d441d68bb325feae78ee6e6",
          "url": "https://github.com/royalcat/osmpbfdb/commit/b507e14b34c242eade9a3e712192843efeef45d8"
        },
        "date": 1769166090179,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGet/file_descriptor/cache_none",
            "value": 2281777,
            "unit": "ns/op\t 4379376 B/op\t    8621 allocs/op",
            "extra": "5588 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - ns/op",
            "value": 2281777,
            "unit": "ns/op",
            "extra": "5588 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - B/op",
            "value": 4379376,
            "unit": "B/op",
            "extra": "5588 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - allocs/op",
            "value": 8621,
            "unit": "allocs/op",
            "extra": "5588 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none",
            "value": 2285181,
            "unit": "ns/op\t 4376011 B/op\t    8646 allocs/op",
            "extra": "5736 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - ns/op",
            "value": 2285181,
            "unit": "ns/op",
            "extra": "5736 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - B/op",
            "value": 4376011,
            "unit": "B/op",
            "extra": "5736 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - allocs/op",
            "value": 8646,
            "unit": "allocs/op",
            "extra": "5736 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru",
            "value": 1722,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "6965214 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - ns/op",
            "value": 1722,
            "unit": "ns/op",
            "extra": "6965214 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "6965214 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6965214 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru",
            "value": 1666,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "6947905 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - ns/op",
            "value": 1666,
            "unit": "ns/op",
            "extra": "6947905 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "6947905 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6947905 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC",
            "value": 1645,
            "unit": "ns/op\t     140 B/op\t       1 allocs/op",
            "extra": "7225700 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - ns/op",
            "value": 1645,
            "unit": "ns/op",
            "extra": "7225700 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - B/op",
            "value": 140,
            "unit": "B/op",
            "extra": "7225700 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "7225700 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC",
            "value": 1622,
            "unit": "ns/op\t     126 B/op\t       1 allocs/op",
            "extra": "6581640 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - ns/op",
            "value": 1622,
            "unit": "ns/op",
            "extra": "6581640 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - B/op",
            "value": 126,
            "unit": "B/op",
            "extra": "6581640 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6581640 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none",
            "value": 2257191,
            "unit": "ns/op\t 2709275 B/op\t    8616 allocs/op",
            "extra": "5341 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - ns/op",
            "value": 2257191,
            "unit": "ns/op",
            "extra": "5341 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - B/op",
            "value": 2709275,
            "unit": "B/op",
            "extra": "5341 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - allocs/op",
            "value": 8616,
            "unit": "allocs/op",
            "extra": "5341 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none",
            "value": 2267380,
            "unit": "ns/op\t 2747172 B/op\t    8645 allocs/op",
            "extra": "5257 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - ns/op",
            "value": 2267380,
            "unit": "ns/op",
            "extra": "5257 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - B/op",
            "value": 2747172,
            "unit": "B/op",
            "extra": "5257 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - allocs/op",
            "value": 8645,
            "unit": "allocs/op",
            "extra": "5257 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru",
            "value": 1796,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "6641931 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - ns/op",
            "value": 1796,
            "unit": "ns/op",
            "extra": "6641931 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "6641931 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6641931 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru",
            "value": 1744,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "6889993 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - ns/op",
            "value": 1744,
            "unit": "ns/op",
            "extra": "6889993 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "6889993 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6889993 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC",
            "value": 1741,
            "unit": "ns/op\t     117 B/op\t       1 allocs/op",
            "extra": "6620584 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - ns/op",
            "value": 1741,
            "unit": "ns/op",
            "extra": "6620584 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - B/op",
            "value": 117,
            "unit": "B/op",
            "extra": "6620584 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6620584 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC",
            "value": 1749,
            "unit": "ns/op\t     131 B/op\t       1 allocs/op",
            "extra": "6361993 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - ns/op",
            "value": 1749,
            "unit": "ns/op",
            "extra": "6361993 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - B/op",
            "value": 131,
            "unit": "B/op",
            "extra": "6361993 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6361993 times\n4 procs"
          }
        ]
      }
    ]
  }
}