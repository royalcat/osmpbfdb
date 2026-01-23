window.BENCHMARK_DATA = {
  "lastUpdate": 1769165472341,
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
        "date": 1769163822991,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGet",
            "value": 2795940,
            "unit": "ns/op\t 4259890 B/op\t    8731 allocs/op",
            "extra": "4586 times\n4 procs"
          },
          {
            "name": "BenchmarkGet - ns/op",
            "value": 2795940,
            "unit": "ns/op",
            "extra": "4586 times\n4 procs"
          },
          {
            "name": "BenchmarkGet - B/op",
            "value": 4259890,
            "unit": "B/op",
            "extra": "4586 times\n4 procs"
          },
          {
            "name": "BenchmarkGet - allocs/op",
            "value": 8731,
            "unit": "allocs/op",
            "extra": "4586 times\n4 procs"
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
        "date": 1769164921156,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGet/file_descriptor/cache_none",
            "value": 2845977,
            "unit": "ns/op\t 4484815 B/op\t    8709 allocs/op",
            "extra": "3996 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - ns/op",
            "value": 2845977,
            "unit": "ns/op",
            "extra": "3996 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - B/op",
            "value": 4484815,
            "unit": "B/op",
            "extra": "3996 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - allocs/op",
            "value": 8709,
            "unit": "allocs/op",
            "extra": "3996 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru",
            "value": 1763,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "6708747 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - ns/op",
            "value": 1763,
            "unit": "ns/op",
            "extra": "6708747 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "6708747 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6708747 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC",
            "value": 4541,
            "unit": "ns/op\t    3003 B/op\t       9 allocs/op",
            "extra": "2303361 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - ns/op",
            "value": 4541,
            "unit": "ns/op",
            "extra": "2303361 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - B/op",
            "value": 3003,
            "unit": "B/op",
            "extra": "2303361 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "2303361 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none",
            "value": 2817663,
            "unit": "ns/op\t 2845977 B/op\t    8729 allocs/op",
            "extra": "3972 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - ns/op",
            "value": 2817663,
            "unit": "ns/op",
            "extra": "3972 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - B/op",
            "value": 2845977,
            "unit": "B/op",
            "extra": "3972 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - allocs/op",
            "value": 8729,
            "unit": "allocs/op",
            "extra": "3972 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru",
            "value": 1788,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "6539254 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - ns/op",
            "value": 1788,
            "unit": "ns/op",
            "extra": "6539254 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "6539254 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6539254 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC",
            "value": 1794,
            "unit": "ns/op\t     114 B/op\t       1 allocs/op",
            "extra": "6396016 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - ns/op",
            "value": 1794,
            "unit": "ns/op",
            "extra": "6396016 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - B/op",
            "value": 114,
            "unit": "B/op",
            "extra": "6396016 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6396016 times\n4 procs"
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
        "date": 1769165472000,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGet/file_descriptor/cache_none",
            "value": 2825888,
            "unit": "ns/op\t 3782945 B/op\t    8733 allocs/op",
            "extra": "4580 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - ns/op",
            "value": 2825888,
            "unit": "ns/op",
            "extra": "4580 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - B/op",
            "value": 3782945,
            "unit": "B/op",
            "extra": "4580 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - allocs/op",
            "value": 8733,
            "unit": "allocs/op",
            "extra": "4580 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none",
            "value": 2889467,
            "unit": "ns/op\t 4498132 B/op\t    8750 allocs/op",
            "extra": "3868 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - ns/op",
            "value": 2889467,
            "unit": "ns/op",
            "extra": "3868 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - B/op",
            "value": 4498132,
            "unit": "B/op",
            "extra": "3868 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - allocs/op",
            "value": 8750,
            "unit": "allocs/op",
            "extra": "3868 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru",
            "value": 1741,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "7049934 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - ns/op",
            "value": 1741,
            "unit": "ns/op",
            "extra": "7049934 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "7049934 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "7049934 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru",
            "value": 1694,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "7329714 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - ns/op",
            "value": 1694,
            "unit": "ns/op",
            "extra": "7329714 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "7329714 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "7329714 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC",
            "value": 1635,
            "unit": "ns/op\t     137 B/op\t       1 allocs/op",
            "extra": "7278562 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - ns/op",
            "value": 1635,
            "unit": "ns/op",
            "extra": "7278562 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - B/op",
            "value": 137,
            "unit": "B/op",
            "extra": "7278562 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "7278562 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC",
            "value": 1748,
            "unit": "ns/op\t     212 B/op\t       1 allocs/op",
            "extra": "6038538 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - ns/op",
            "value": 1748,
            "unit": "ns/op",
            "extra": "6038538 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - B/op",
            "value": 212,
            "unit": "B/op",
            "extra": "6038538 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6038538 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none",
            "value": 2821003,
            "unit": "ns/op\t 2776982 B/op\t    8758 allocs/op",
            "extra": "4268 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - ns/op",
            "value": 2821003,
            "unit": "ns/op",
            "extra": "4268 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - B/op",
            "value": 2776982,
            "unit": "B/op",
            "extra": "4268 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - allocs/op",
            "value": 8758,
            "unit": "allocs/op",
            "extra": "4268 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none",
            "value": 2798529,
            "unit": "ns/op\t 2702293 B/op\t    8725 allocs/op",
            "extra": "4248 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - ns/op",
            "value": 2798529,
            "unit": "ns/op",
            "extra": "4248 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - B/op",
            "value": 2702293,
            "unit": "B/op",
            "extra": "4248 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - allocs/op",
            "value": 8725,
            "unit": "allocs/op",
            "extra": "4248 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru",
            "value": 1707,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "7080884 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - ns/op",
            "value": 1707,
            "unit": "ns/op",
            "extra": "7080884 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "7080884 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "7080884 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru",
            "value": 1634,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "7302032 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - ns/op",
            "value": 1634,
            "unit": "ns/op",
            "extra": "7302032 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "7302032 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "7302032 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC",
            "value": 1626,
            "unit": "ns/op\t     135 B/op\t       1 allocs/op",
            "extra": "7360064 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - ns/op",
            "value": 1626,
            "unit": "ns/op",
            "extra": "7360064 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - B/op",
            "value": 135,
            "unit": "B/op",
            "extra": "7360064 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "7360064 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC",
            "value": 1675,
            "unit": "ns/op\t     136 B/op\t       1 allocs/op",
            "extra": "7138543 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - ns/op",
            "value": 1675,
            "unit": "ns/op",
            "extra": "7138543 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - B/op",
            "value": 136,
            "unit": "B/op",
            "extra": "7138543 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "7138543 times\n4 procs"
          }
        ]
      }
    ]
  }
}