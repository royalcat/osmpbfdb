window.BENCHMARK_DATA = {
  "lastUpdate": 1769781526265,
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
        "date": 1769166073518,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGet/file_descriptor/cache_none",
            "value": 2527568,
            "unit": "ns/op\t 4985347 B/op\t    8727 allocs/op",
            "extra": "5055 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - ns/op",
            "value": 2527568,
            "unit": "ns/op",
            "extra": "5055 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - B/op",
            "value": 4985347,
            "unit": "B/op",
            "extra": "5055 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - allocs/op",
            "value": 8727,
            "unit": "allocs/op",
            "extra": "5055 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none",
            "value": 2557615,
            "unit": "ns/op\t 5068363 B/op\t    8752 allocs/op",
            "extra": "4532 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - ns/op",
            "value": 2557615,
            "unit": "ns/op",
            "extra": "4532 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - B/op",
            "value": 5068363,
            "unit": "B/op",
            "extra": "4532 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - allocs/op",
            "value": 8752,
            "unit": "allocs/op",
            "extra": "4532 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru",
            "value": 2359,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5070380 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - ns/op",
            "value": 2359,
            "unit": "ns/op",
            "extra": "5070380 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "5070380 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "5070380 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru",
            "value": 2405,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5304147 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - ns/op",
            "value": 2405,
            "unit": "ns/op",
            "extra": "5304147 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "5304147 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "5304147 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC",
            "value": 2363,
            "unit": "ns/op\t     113 B/op\t       1 allocs/op",
            "extra": "4881805 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - ns/op",
            "value": 2363,
            "unit": "ns/op",
            "extra": "4881805 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - B/op",
            "value": 113,
            "unit": "B/op",
            "extra": "4881805 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4881805 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC",
            "value": 2427,
            "unit": "ns/op\t     164 B/op\t       1 allocs/op",
            "extra": "4903566 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - ns/op",
            "value": 2427,
            "unit": "ns/op",
            "extra": "4903566 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - B/op",
            "value": 164,
            "unit": "B/op",
            "extra": "4903566 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4903566 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none",
            "value": 2374939,
            "unit": "ns/op\t 2744858 B/op\t    8716 allocs/op",
            "extra": "5347 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - ns/op",
            "value": 2374939,
            "unit": "ns/op",
            "extra": "5347 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - B/op",
            "value": 2744858,
            "unit": "B/op",
            "extra": "5347 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - allocs/op",
            "value": 8716,
            "unit": "allocs/op",
            "extra": "5347 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none",
            "value": 2391415,
            "unit": "ns/op\t 2774831 B/op\t    8739 allocs/op",
            "extra": "5011 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - ns/op",
            "value": 2391415,
            "unit": "ns/op",
            "extra": "5011 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - B/op",
            "value": 2774831,
            "unit": "B/op",
            "extra": "5011 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - allocs/op",
            "value": 8739,
            "unit": "allocs/op",
            "extra": "5011 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru",
            "value": 2308,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5093192 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - ns/op",
            "value": 2308,
            "unit": "ns/op",
            "extra": "5093192 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "5093192 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "5093192 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru",
            "value": 2343,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4994486 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - ns/op",
            "value": 2343,
            "unit": "ns/op",
            "extra": "4994486 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4994486 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4994486 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC",
            "value": 2378,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5334660 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - ns/op",
            "value": 2378,
            "unit": "ns/op",
            "extra": "5334660 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "5334660 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "5334660 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC",
            "value": 2372,
            "unit": "ns/op\t     156 B/op\t       1 allocs/op",
            "extra": "5030043 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - ns/op",
            "value": 2372,
            "unit": "ns/op",
            "extra": "5030043 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - B/op",
            "value": 156,
            "unit": "B/op",
            "extra": "5030043 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "5030043 times\n4 procs"
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
          "id": "95410f1eb75c6f48b535dd6c6d6b2bdd6b3a71a0",
          "message": "optimize timestamp parsing",
          "timestamp": "2026-01-28T09:53:45+04:00",
          "tree_id": "186dff89421bee0ab9e38bb9e7ef7eab92a2c51f",
          "url": "https://github.com/royalcat/osmpbfdb/commit/95410f1eb75c6f48b535dd6c6d6b2bdd6b3a71a0"
        },
        "date": 1769579839321,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGet/file_descriptor/cache_none",
            "value": 2541789,
            "unit": "ns/op\t 5304979 B/op\t    8695 allocs/op",
            "extra": "4567 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - ns/op",
            "value": 2541789,
            "unit": "ns/op",
            "extra": "4567 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - B/op",
            "value": 5304979,
            "unit": "B/op",
            "extra": "4567 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - allocs/op",
            "value": 8695,
            "unit": "allocs/op",
            "extra": "4567 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none",
            "value": 2541323,
            "unit": "ns/op\t 5278768 B/op\t    8764 allocs/op",
            "extra": "5217 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - ns/op",
            "value": 2541323,
            "unit": "ns/op",
            "extra": "5217 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - B/op",
            "value": 5278768,
            "unit": "B/op",
            "extra": "5217 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - allocs/op",
            "value": 8764,
            "unit": "allocs/op",
            "extra": "5217 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru",
            "value": 2728,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4708273 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - ns/op",
            "value": 2728,
            "unit": "ns/op",
            "extra": "4708273 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4708273 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4708273 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru",
            "value": 2767,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4362609 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - ns/op",
            "value": 2767,
            "unit": "ns/op",
            "extra": "4362609 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4362609 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4362609 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC",
            "value": 2728,
            "unit": "ns/op\t     176 B/op\t       1 allocs/op",
            "extra": "4365045 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - ns/op",
            "value": 2728,
            "unit": "ns/op",
            "extra": "4365045 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - B/op",
            "value": 176,
            "unit": "B/op",
            "extra": "4365045 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4365045 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC",
            "value": 2716,
            "unit": "ns/op\t     313 B/op\t       1 allocs/op",
            "extra": "4027948 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - ns/op",
            "value": 2716,
            "unit": "ns/op",
            "extra": "4027948 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - B/op",
            "value": 313,
            "unit": "B/op",
            "extra": "4027948 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4027948 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none",
            "value": 2356067,
            "unit": "ns/op\t 2722703 B/op\t    8734 allocs/op",
            "extra": "5192 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - ns/op",
            "value": 2356067,
            "unit": "ns/op",
            "extra": "5192 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - B/op",
            "value": 2722703,
            "unit": "B/op",
            "extra": "5192 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - allocs/op",
            "value": 8734,
            "unit": "allocs/op",
            "extra": "5192 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none",
            "value": 2365903,
            "unit": "ns/op\t 2716417 B/op\t    8736 allocs/op",
            "extra": "5475 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - ns/op",
            "value": 2365903,
            "unit": "ns/op",
            "extra": "5475 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - B/op",
            "value": 2716417,
            "unit": "B/op",
            "extra": "5475 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - allocs/op",
            "value": 8736,
            "unit": "allocs/op",
            "extra": "5475 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru",
            "value": 2517,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4812590 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - ns/op",
            "value": 2517,
            "unit": "ns/op",
            "extra": "4812590 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4812590 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4812590 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru",
            "value": 2500,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4675759 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - ns/op",
            "value": 2500,
            "unit": "ns/op",
            "extra": "4675759 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4675759 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4675759 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC",
            "value": 2606,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4937947 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - ns/op",
            "value": 2606,
            "unit": "ns/op",
            "extra": "4937947 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4937947 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4937947 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC",
            "value": 2584,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4617246 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - ns/op",
            "value": 2584,
            "unit": "ns/op",
            "extra": "4617246 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4617246 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4617246 times\n4 procs"
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
          "id": "647a866cca1b16a67901242c492454b05d609dab",
          "message": "Increase decoder limit",
          "timestamp": "2026-01-30T17:55:10+04:00",
          "tree_id": "b5c5f822a7e22fbd0939e4565b4a47535632c995",
          "url": "https://github.com/royalcat/osmpbfdb/commit/647a866cca1b16a67901242c492454b05d609dab"
        },
        "date": 1769781525734,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGet/file_descriptor/cache_none",
            "value": 2520490,
            "unit": "ns/op\t 5150685 B/op\t    8745 allocs/op",
            "extra": "4647 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - ns/op",
            "value": 2520490,
            "unit": "ns/op",
            "extra": "4647 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - B/op",
            "value": 5150685,
            "unit": "B/op",
            "extra": "4647 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - allocs/op",
            "value": 8745,
            "unit": "allocs/op",
            "extra": "4647 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none",
            "value": 2551910,
            "unit": "ns/op\t 5352531 B/op\t    8728 allocs/op",
            "extra": "4633 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - ns/op",
            "value": 2551910,
            "unit": "ns/op",
            "extra": "4633 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - B/op",
            "value": 5352531,
            "unit": "B/op",
            "extra": "4633 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - allocs/op",
            "value": 8728,
            "unit": "allocs/op",
            "extra": "4633 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru",
            "value": 2583,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4590246 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - ns/op",
            "value": 2583,
            "unit": "ns/op",
            "extra": "4590246 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4590246 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4590246 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru",
            "value": 2641,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4526688 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - ns/op",
            "value": 2641,
            "unit": "ns/op",
            "extra": "4526688 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4526688 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4526688 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC",
            "value": 2619,
            "unit": "ns/op\t     170 B/op\t       1 allocs/op",
            "extra": "4523198 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - ns/op",
            "value": 2619,
            "unit": "ns/op",
            "extra": "4523198 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - B/op",
            "value": 170,
            "unit": "B/op",
            "extra": "4523198 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4523198 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC",
            "value": 2682,
            "unit": "ns/op\t     297 B/op\t       1 allocs/op",
            "extra": "4026194 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - ns/op",
            "value": 2682,
            "unit": "ns/op",
            "extra": "4026194 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - B/op",
            "value": 297,
            "unit": "B/op",
            "extra": "4026194 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4026194 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none",
            "value": 2377542,
            "unit": "ns/op\t 2730925 B/op\t    8742 allocs/op",
            "extra": "5512 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - ns/op",
            "value": 2377542,
            "unit": "ns/op",
            "extra": "5512 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - B/op",
            "value": 2730925,
            "unit": "B/op",
            "extra": "5512 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - allocs/op",
            "value": 8742,
            "unit": "allocs/op",
            "extra": "5512 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none",
            "value": 2384124,
            "unit": "ns/op\t 2779703 B/op\t    8747 allocs/op",
            "extra": "5340 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - ns/op",
            "value": 2384124,
            "unit": "ns/op",
            "extra": "5340 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - B/op",
            "value": 2779703,
            "unit": "B/op",
            "extra": "5340 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - allocs/op",
            "value": 8747,
            "unit": "allocs/op",
            "extra": "5340 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru",
            "value": 2601,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4518457 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - ns/op",
            "value": 2601,
            "unit": "ns/op",
            "extra": "4518457 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4518457 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4518457 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru",
            "value": 2619,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4582960 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - ns/op",
            "value": 2619,
            "unit": "ns/op",
            "extra": "4582960 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4582960 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4582960 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC",
            "value": 2595,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4648870 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - ns/op",
            "value": 2595,
            "unit": "ns/op",
            "extra": "4648870 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4648870 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4648870 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC",
            "value": 2617,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4730809 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - ns/op",
            "value": 2617,
            "unit": "ns/op",
            "extra": "4730809 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4730809 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4730809 times\n4 procs"
          }
        ]
      }
    ]
  }
}