window.BENCHMARK_DATA = {
  "lastUpdate": 1769165550959,
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
        "date": 1769163913980,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGet",
            "value": 2019785,
            "unit": "ns/op\t 4973346 B/op\t    8633 allocs/op",
            "extra": "6247 times\n4 procs"
          },
          {
            "name": "BenchmarkGet - ns/op",
            "value": 2019785,
            "unit": "ns/op",
            "extra": "6247 times\n4 procs"
          },
          {
            "name": "BenchmarkGet - B/op",
            "value": 4973346,
            "unit": "B/op",
            "extra": "6247 times\n4 procs"
          },
          {
            "name": "BenchmarkGet - allocs/op",
            "value": 8633,
            "unit": "allocs/op",
            "extra": "6247 times\n4 procs"
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
        "date": 1769165029748,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGet/file_descriptor/cache_none",
            "value": 2032679,
            "unit": "ns/op\t 4906813 B/op\t    8621 allocs/op",
            "extra": "6066 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - ns/op",
            "value": 2032679,
            "unit": "ns/op",
            "extra": "6066 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - B/op",
            "value": 4906813,
            "unit": "B/op",
            "extra": "6066 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - allocs/op",
            "value": 8621,
            "unit": "allocs/op",
            "extra": "6066 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru",
            "value": 2846,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4171999 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - ns/op",
            "value": 2846,
            "unit": "ns/op",
            "extra": "4171999 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4171999 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4171999 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC",
            "value": 3149,
            "unit": "ns/op\t     779 B/op\t       3 allocs/op",
            "extra": "3379939 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - ns/op",
            "value": 3149,
            "unit": "ns/op",
            "extra": "3379939 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - B/op",
            "value": 779,
            "unit": "B/op",
            "extra": "3379939 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "3379939 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none",
            "value": 1918738,
            "unit": "ns/op\t 2939252 B/op\t    8639 allocs/op",
            "extra": "6808 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - ns/op",
            "value": 1918738,
            "unit": "ns/op",
            "extra": "6808 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - B/op",
            "value": 2939252,
            "unit": "B/op",
            "extra": "6808 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - allocs/op",
            "value": 8639,
            "unit": "allocs/op",
            "extra": "6808 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru",
            "value": 2673,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4351754 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - ns/op",
            "value": 2673,
            "unit": "ns/op",
            "extra": "4351754 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4351754 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4351754 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC",
            "value": 2733,
            "unit": "ns/op\t     248 B/op\t       1 allocs/op",
            "extra": "4293393 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - ns/op",
            "value": 2733,
            "unit": "ns/op",
            "extra": "4293393 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - B/op",
            "value": 248,
            "unit": "B/op",
            "extra": "4293393 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4293393 times\n4 procs"
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
        "date": 1769165550655,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGet/file_descriptor/cache_none",
            "value": 2015874,
            "unit": "ns/op\t 4920006 B/op\t    8627 allocs/op",
            "extra": "5403 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - ns/op",
            "value": 2015874,
            "unit": "ns/op",
            "extra": "5403 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - B/op",
            "value": 4920006,
            "unit": "B/op",
            "extra": "5403 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - allocs/op",
            "value": 8627,
            "unit": "allocs/op",
            "extra": "5403 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none",
            "value": 2021862,
            "unit": "ns/op\t 4978448 B/op\t    8640 allocs/op",
            "extra": "6172 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - ns/op",
            "value": 2021862,
            "unit": "ns/op",
            "extra": "6172 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - B/op",
            "value": 4978448,
            "unit": "B/op",
            "extra": "6172 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - allocs/op",
            "value": 8640,
            "unit": "allocs/op",
            "extra": "6172 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru",
            "value": 2476,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4981118 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - ns/op",
            "value": 2476,
            "unit": "ns/op",
            "extra": "4981118 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4981118 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4981118 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru",
            "value": 2448,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4928494 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - ns/op",
            "value": 2448,
            "unit": "ns/op",
            "extra": "4928494 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4928494 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4928494 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC",
            "value": 2462,
            "unit": "ns/op\t     143 B/op\t       1 allocs/op",
            "extra": "4556308 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - ns/op",
            "value": 2462,
            "unit": "ns/op",
            "extra": "4556308 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - B/op",
            "value": 143,
            "unit": "B/op",
            "extra": "4556308 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4556308 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC",
            "value": 2419,
            "unit": "ns/op\t     123 B/op\t       1 allocs/op",
            "extra": "4824097 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - ns/op",
            "value": 2419,
            "unit": "ns/op",
            "extra": "4824097 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - B/op",
            "value": 123,
            "unit": "B/op",
            "extra": "4824097 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4824097 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none",
            "value": 1910130,
            "unit": "ns/op\t 2781026 B/op\t    8632 allocs/op",
            "extra": "6282 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - ns/op",
            "value": 1910130,
            "unit": "ns/op",
            "extra": "6282 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - B/op",
            "value": 2781026,
            "unit": "B/op",
            "extra": "6282 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - allocs/op",
            "value": 8632,
            "unit": "allocs/op",
            "extra": "6282 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none",
            "value": 1900789,
            "unit": "ns/op\t 2694876 B/op\t    8647 allocs/op",
            "extra": "6500 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - ns/op",
            "value": 1900789,
            "unit": "ns/op",
            "extra": "6500 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - B/op",
            "value": 2694876,
            "unit": "B/op",
            "extra": "6500 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - allocs/op",
            "value": 8647,
            "unit": "allocs/op",
            "extra": "6500 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru",
            "value": 2409,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4811005 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - ns/op",
            "value": 2409,
            "unit": "ns/op",
            "extra": "4811005 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4811005 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4811005 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru",
            "value": 2502,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4634887 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - ns/op",
            "value": 2502,
            "unit": "ns/op",
            "extra": "4634887 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4634887 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4634887 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC",
            "value": 2518,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4797004 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - ns/op",
            "value": 2518,
            "unit": "ns/op",
            "extra": "4797004 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4797004 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4797004 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC",
            "value": 2480,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5149198 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - ns/op",
            "value": 2480,
            "unit": "ns/op",
            "extra": "5149198 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "5149198 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "5149198 times\n4 procs"
          }
        ]
      }
    ]
  }
}