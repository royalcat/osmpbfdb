window.BENCHMARK_DATA = {
  "lastUpdate": 1769166126554,
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
        "date": 1769166126110,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGet/file_descriptor/cache_none",
            "value": 1989428,
            "unit": "ns/op\t 5137177 B/op\t    8619 allocs/op",
            "extra": "6019 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - ns/op",
            "value": 1989428,
            "unit": "ns/op",
            "extra": "6019 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - B/op",
            "value": 5137177,
            "unit": "B/op",
            "extra": "6019 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - allocs/op",
            "value": 8619,
            "unit": "allocs/op",
            "extra": "6019 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none",
            "value": 2014382,
            "unit": "ns/op\t 5427582 B/op\t    8622 allocs/op",
            "extra": "5707 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - ns/op",
            "value": 2014382,
            "unit": "ns/op",
            "extra": "5707 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - B/op",
            "value": 5427582,
            "unit": "B/op",
            "extra": "5707 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - allocs/op",
            "value": 8622,
            "unit": "allocs/op",
            "extra": "5707 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru",
            "value": 2372,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5073094 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - ns/op",
            "value": 2372,
            "unit": "ns/op",
            "extra": "5073094 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "5073094 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "5073094 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru",
            "value": 2419,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4768562 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - ns/op",
            "value": 2419,
            "unit": "ns/op",
            "extra": "4768562 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4768562 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4768562 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC",
            "value": 2341,
            "unit": "ns/op\t     124 B/op\t       1 allocs/op",
            "extra": "5017100 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - ns/op",
            "value": 2341,
            "unit": "ns/op",
            "extra": "5017100 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - B/op",
            "value": 124,
            "unit": "B/op",
            "extra": "5017100 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "5017100 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC",
            "value": 2339,
            "unit": "ns/op\t     129 B/op\t       1 allocs/op",
            "extra": "4899508 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - ns/op",
            "value": 2339,
            "unit": "ns/op",
            "extra": "4899508 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - B/op",
            "value": 129,
            "unit": "B/op",
            "extra": "4899508 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4899508 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none",
            "value": 1860477,
            "unit": "ns/op\t 2734749 B/op\t    8606 allocs/op",
            "extra": "7149 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - ns/op",
            "value": 1860477,
            "unit": "ns/op",
            "extra": "7149 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - B/op",
            "value": 2734749,
            "unit": "B/op",
            "extra": "7149 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - allocs/op",
            "value": 8606,
            "unit": "allocs/op",
            "extra": "7149 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none",
            "value": 1864578,
            "unit": "ns/op\t 2652538 B/op\t    8614 allocs/op",
            "extra": "5385 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - ns/op",
            "value": 1864578,
            "unit": "ns/op",
            "extra": "5385 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - B/op",
            "value": 2652538,
            "unit": "B/op",
            "extra": "5385 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - allocs/op",
            "value": 8614,
            "unit": "allocs/op",
            "extra": "5385 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru",
            "value": 2421,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5045373 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - ns/op",
            "value": 2421,
            "unit": "ns/op",
            "extra": "5045373 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "5045373 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "5045373 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru",
            "value": 2378,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5042709 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - ns/op",
            "value": 2378,
            "unit": "ns/op",
            "extra": "5042709 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "5042709 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "5042709 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC",
            "value": 2368,
            "unit": "ns/op\t     119 B/op\t       1 allocs/op",
            "extra": "5065178 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - ns/op",
            "value": 2368,
            "unit": "ns/op",
            "extra": "5065178 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - B/op",
            "value": 119,
            "unit": "B/op",
            "extra": "5065178 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "5065178 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC",
            "value": 2400,
            "unit": "ns/op\t     152 B/op\t       1 allocs/op",
            "extra": "4651851 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - ns/op",
            "value": 2400,
            "unit": "ns/op",
            "extra": "4651851 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "4651851 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4651851 times\n4 procs"
          }
        ]
      }
    ]
  }
}