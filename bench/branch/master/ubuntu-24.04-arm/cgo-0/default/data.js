window.BENCHMARK_DATA = {
  "lastUpdate": 1769165470667,
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
          "id": "67bf3948b991fad35bf68a20f4bcc320ae0a972a",
          "message": "bench single cpu",
          "timestamp": "2026-01-23T14:47:38+04:00",
          "tree_id": "b44c165f2c4684bf3d441d68bb325feae78ee6e6",
          "url": "https://github.com/royalcat/osmpbfdb/commit/67bf3948b991fad35bf68a20f4bcc320ae0a972a"
        },
        "date": 1769165470066,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGet/file_descriptor/cache_none",
            "value": 2580081,
            "unit": "ns/op\t 5314527 B/op\t    8736 allocs/op",
            "extra": "4922 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - ns/op",
            "value": 2580081,
            "unit": "ns/op",
            "extra": "4922 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - B/op",
            "value": 5314527,
            "unit": "B/op",
            "extra": "4922 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - allocs/op",
            "value": 8736,
            "unit": "allocs/op",
            "extra": "4922 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none",
            "value": 2573169,
            "unit": "ns/op\t 5034119 B/op\t    8795 allocs/op",
            "extra": "4575 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - ns/op",
            "value": 2573169,
            "unit": "ns/op",
            "extra": "4575 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - B/op",
            "value": 5034119,
            "unit": "B/op",
            "extra": "4575 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - allocs/op",
            "value": 8795,
            "unit": "allocs/op",
            "extra": "4575 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru",
            "value": 2589,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4678520 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - ns/op",
            "value": 2589,
            "unit": "ns/op",
            "extra": "4678520 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4678520 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4678520 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru",
            "value": 2536,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4781512 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - ns/op",
            "value": 2536,
            "unit": "ns/op",
            "extra": "4781512 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4781512 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4781512 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC",
            "value": 2649,
            "unit": "ns/op\t     266 B/op\t       1 allocs/op",
            "extra": "4201741 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - ns/op",
            "value": 2649,
            "unit": "ns/op",
            "extra": "4201741 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - B/op",
            "value": 266,
            "unit": "B/op",
            "extra": "4201741 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4201741 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC",
            "value": 2466,
            "unit": "ns/op\t     117 B/op\t       1 allocs/op",
            "extra": "4829072 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - ns/op",
            "value": 2466,
            "unit": "ns/op",
            "extra": "4829072 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - B/op",
            "value": 117,
            "unit": "B/op",
            "extra": "4829072 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4829072 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none",
            "value": 2390127,
            "unit": "ns/op\t 2751415 B/op\t    8740 allocs/op",
            "extra": "4416 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - ns/op",
            "value": 2390127,
            "unit": "ns/op",
            "extra": "4416 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - B/op",
            "value": 2751415,
            "unit": "B/op",
            "extra": "4416 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - allocs/op",
            "value": 8740,
            "unit": "allocs/op",
            "extra": "4416 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none",
            "value": 2388691,
            "unit": "ns/op\t 2720523 B/op\t    8733 allocs/op",
            "extra": "4788 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - ns/op",
            "value": 2388691,
            "unit": "ns/op",
            "extra": "4788 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - B/op",
            "value": 2720523,
            "unit": "B/op",
            "extra": "4788 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - allocs/op",
            "value": 8733,
            "unit": "allocs/op",
            "extra": "4788 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru",
            "value": 2532,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4753826 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - ns/op",
            "value": 2532,
            "unit": "ns/op",
            "extra": "4753826 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4753826 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4753826 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru",
            "value": 2507,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4790791 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - ns/op",
            "value": 2507,
            "unit": "ns/op",
            "extra": "4790791 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4790791 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4790791 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC",
            "value": 2509,
            "unit": "ns/op\t     121 B/op\t       1 allocs/op",
            "extra": "4681911 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - ns/op",
            "value": 2509,
            "unit": "ns/op",
            "extra": "4681911 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - B/op",
            "value": 121,
            "unit": "B/op",
            "extra": "4681911 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4681911 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC",
            "value": 2543,
            "unit": "ns/op\t     136 B/op\t       1 allocs/op",
            "extra": "4562961 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - ns/op",
            "value": 2543,
            "unit": "ns/op",
            "extra": "4562961 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - B/op",
            "value": 136,
            "unit": "B/op",
            "extra": "4562961 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4562961 times\n4 procs"
          }
        ]
      }
    ]
  }
}