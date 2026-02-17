window.BENCHMARK_DATA = {
  "lastUpdate": 1771296419409,
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
        "date": 1769579945017,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGet/file_descriptor/cache_none",
            "value": 2013415,
            "unit": "ns/op\t 5007627 B/op\t    8631 allocs/op",
            "extra": "6067 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - ns/op",
            "value": 2013415,
            "unit": "ns/op",
            "extra": "6067 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - B/op",
            "value": 5007627,
            "unit": "B/op",
            "extra": "6067 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - allocs/op",
            "value": 8631,
            "unit": "allocs/op",
            "extra": "6067 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none",
            "value": 2030853,
            "unit": "ns/op\t 5053795 B/op\t    8640 allocs/op",
            "extra": "5751 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - ns/op",
            "value": 2030853,
            "unit": "ns/op",
            "extra": "5751 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - B/op",
            "value": 5053795,
            "unit": "B/op",
            "extra": "5751 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - allocs/op",
            "value": 8640,
            "unit": "allocs/op",
            "extra": "5751 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru",
            "value": 2331,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5291648 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - ns/op",
            "value": 2331,
            "unit": "ns/op",
            "extra": "5291648 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "5291648 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "5291648 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru",
            "value": 2541,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4804953 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - ns/op",
            "value": 2541,
            "unit": "ns/op",
            "extra": "4804953 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4804953 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4804953 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC",
            "value": 2703,
            "unit": "ns/op\t     141 B/op\t       1 allocs/op",
            "extra": "4472738 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - ns/op",
            "value": 2703,
            "unit": "ns/op",
            "extra": "4472738 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - B/op",
            "value": 141,
            "unit": "B/op",
            "extra": "4472738 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4472738 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC",
            "value": 2819,
            "unit": "ns/op\t     303 B/op\t       1 allocs/op",
            "extra": "4051486 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - ns/op",
            "value": 2819,
            "unit": "ns/op",
            "extra": "4051486 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - B/op",
            "value": 303,
            "unit": "B/op",
            "extra": "4051486 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4051486 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none",
            "value": 1903820,
            "unit": "ns/op\t 2747383 B/op\t    8651 allocs/op",
            "extra": "6292 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - ns/op",
            "value": 1903820,
            "unit": "ns/op",
            "extra": "6292 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - B/op",
            "value": 2747383,
            "unit": "B/op",
            "extra": "6292 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - allocs/op",
            "value": 8651,
            "unit": "allocs/op",
            "extra": "6292 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none",
            "value": 1913131,
            "unit": "ns/op\t 2778909 B/op\t    8637 allocs/op",
            "extra": "5466 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - ns/op",
            "value": 1913131,
            "unit": "ns/op",
            "extra": "5466 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - B/op",
            "value": 2778909,
            "unit": "B/op",
            "extra": "5466 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - allocs/op",
            "value": 8637,
            "unit": "allocs/op",
            "extra": "5466 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru",
            "value": 2613,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4656534 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - ns/op",
            "value": 2613,
            "unit": "ns/op",
            "extra": "4656534 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4656534 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4656534 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru",
            "value": 2558,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4729142 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - ns/op",
            "value": 2558,
            "unit": "ns/op",
            "extra": "4729142 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4729142 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4729142 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC",
            "value": 2566,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4689398 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - ns/op",
            "value": 2566,
            "unit": "ns/op",
            "extra": "4689398 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4689398 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4689398 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC",
            "value": 2626,
            "unit": "ns/op\t     156 B/op\t       1 allocs/op",
            "extra": "4270729 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - ns/op",
            "value": 2626,
            "unit": "ns/op",
            "extra": "4270729 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - B/op",
            "value": 156,
            "unit": "B/op",
            "extra": "4270729 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4270729 times\n4 procs"
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
        "date": 1769781542724,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGet/file_descriptor/cache_none",
            "value": 2051201,
            "unit": "ns/op\t 4982334 B/op\t    8658 allocs/op",
            "extra": "5926 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - ns/op",
            "value": 2051201,
            "unit": "ns/op",
            "extra": "5926 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - B/op",
            "value": 4982334,
            "unit": "B/op",
            "extra": "5926 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - allocs/op",
            "value": 8658,
            "unit": "allocs/op",
            "extra": "5926 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none",
            "value": 2050446,
            "unit": "ns/op\t 5020232 B/op\t    8627 allocs/op",
            "extra": "5823 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - ns/op",
            "value": 2050446,
            "unit": "ns/op",
            "extra": "5823 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - B/op",
            "value": 5020232,
            "unit": "B/op",
            "extra": "5823 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - allocs/op",
            "value": 8627,
            "unit": "allocs/op",
            "extra": "5823 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru",
            "value": 2776,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4125423 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - ns/op",
            "value": 2776,
            "unit": "ns/op",
            "extra": "4125423 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4125423 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4125423 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru",
            "value": 2754,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4301104 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - ns/op",
            "value": 2754,
            "unit": "ns/op",
            "extra": "4301104 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4301104 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4301104 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC",
            "value": 2796,
            "unit": "ns/op\t     196 B/op\t       1 allocs/op",
            "extra": "3582559 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - ns/op",
            "value": 2796,
            "unit": "ns/op",
            "extra": "3582559 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - B/op",
            "value": 196,
            "unit": "B/op",
            "extra": "3582559 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "3582559 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC",
            "value": 2883,
            "unit": "ns/op\t     285 B/op\t       1 allocs/op",
            "extra": "4040280 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - ns/op",
            "value": 2883,
            "unit": "ns/op",
            "extra": "4040280 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - B/op",
            "value": 285,
            "unit": "B/op",
            "extra": "4040280 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4040280 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none",
            "value": 1904829,
            "unit": "ns/op\t 2733954 B/op\t    8631 allocs/op",
            "extra": "6633 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - ns/op",
            "value": 1904829,
            "unit": "ns/op",
            "extra": "6633 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - B/op",
            "value": 2733954,
            "unit": "B/op",
            "extra": "6633 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - allocs/op",
            "value": 8631,
            "unit": "allocs/op",
            "extra": "6633 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none",
            "value": 1905974,
            "unit": "ns/op\t 2736051 B/op\t    8629 allocs/op",
            "extra": "6531 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - ns/op",
            "value": 1905974,
            "unit": "ns/op",
            "extra": "6531 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - B/op",
            "value": 2736051,
            "unit": "B/op",
            "extra": "6531 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - allocs/op",
            "value": 8629,
            "unit": "allocs/op",
            "extra": "6531 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru",
            "value": 2815,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4289925 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - ns/op",
            "value": 2815,
            "unit": "ns/op",
            "extra": "4289925 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4289925 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4289925 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru",
            "value": 2847,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4241970 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - ns/op",
            "value": 2847,
            "unit": "ns/op",
            "extra": "4241970 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4241970 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4241970 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC",
            "value": 2805,
            "unit": "ns/op\t     136 B/op\t       1 allocs/op",
            "extra": "4116003 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - ns/op",
            "value": 2805,
            "unit": "ns/op",
            "extra": "4116003 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - B/op",
            "value": 136,
            "unit": "B/op",
            "extra": "4116003 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4116003 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC",
            "value": 2781,
            "unit": "ns/op\t     159 B/op\t       1 allocs/op",
            "extra": "4207953 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - ns/op",
            "value": 2781,
            "unit": "ns/op",
            "extra": "4207953 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - B/op",
            "value": 159,
            "unit": "B/op",
            "extra": "4207953 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4207953 times\n4 procs"
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
          "id": "47a109c7b2aa50c9cb0c70b336df3a5806bf0c3c",
          "message": "chore: index rename",
          "timestamp": "2026-02-17T06:42:56+04:00",
          "tree_id": "5f0f4ba1eddb52619c010c60f58bafe19a6232e0",
          "url": "https://github.com/royalcat/osmpbfdb/commit/47a109c7b2aa50c9cb0c70b336df3a5806bf0c3c"
        },
        "date": 1771296419120,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGet/file_descriptor/cache_none",
            "value": 2016630,
            "unit": "ns/op\t 4836709 B/op\t    8640 allocs/op",
            "extra": "6322 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - ns/op",
            "value": 2016630,
            "unit": "ns/op",
            "extra": "6322 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - B/op",
            "value": 4836709,
            "unit": "B/op",
            "extra": "6322 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - allocs/op",
            "value": 8640,
            "unit": "allocs/op",
            "extra": "6322 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none",
            "value": 2044809,
            "unit": "ns/op\t 4860668 B/op\t    8668 allocs/op",
            "extra": "6498 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - ns/op",
            "value": 2044809,
            "unit": "ns/op",
            "extra": "6498 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - B/op",
            "value": 4860668,
            "unit": "B/op",
            "extra": "6498 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - allocs/op",
            "value": 8668,
            "unit": "allocs/op",
            "extra": "6498 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru",
            "value": 2799,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4149697 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - ns/op",
            "value": 2799,
            "unit": "ns/op",
            "extra": "4149697 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4149697 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4149697 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru",
            "value": 2753,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4392036 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - ns/op",
            "value": 2753,
            "unit": "ns/op",
            "extra": "4392036 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4392036 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4392036 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC",
            "value": 2603,
            "unit": "ns/op\t     175 B/op\t       1 allocs/op",
            "extra": "4659823 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - ns/op",
            "value": 2603,
            "unit": "ns/op",
            "extra": "4659823 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - B/op",
            "value": 175,
            "unit": "B/op",
            "extra": "4659823 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4659823 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC",
            "value": 2668,
            "unit": "ns/op\t     129 B/op\t       1 allocs/op",
            "extra": "4673386 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - ns/op",
            "value": 2668,
            "unit": "ns/op",
            "extra": "4673386 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - B/op",
            "value": 129,
            "unit": "B/op",
            "extra": "4673386 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4673386 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none",
            "value": 1908451,
            "unit": "ns/op\t 2732116 B/op\t    8655 allocs/op",
            "extra": "5673 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - ns/op",
            "value": 1908451,
            "unit": "ns/op",
            "extra": "5673 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - B/op",
            "value": 2732116,
            "unit": "B/op",
            "extra": "5673 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - allocs/op",
            "value": 8655,
            "unit": "allocs/op",
            "extra": "5673 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none",
            "value": 1906735,
            "unit": "ns/op\t 2692889 B/op\t    8632 allocs/op",
            "extra": "6450 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - ns/op",
            "value": 1906735,
            "unit": "ns/op",
            "extra": "6450 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - B/op",
            "value": 2692889,
            "unit": "B/op",
            "extra": "6450 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - allocs/op",
            "value": 8632,
            "unit": "allocs/op",
            "extra": "6450 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru",
            "value": 2720,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4562028 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - ns/op",
            "value": 2720,
            "unit": "ns/op",
            "extra": "4562028 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4562028 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4562028 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru",
            "value": 2575,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4744186 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - ns/op",
            "value": 2575,
            "unit": "ns/op",
            "extra": "4744186 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4744186 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4744186 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC",
            "value": 2693,
            "unit": "ns/op\t     140 B/op\t       1 allocs/op",
            "extra": "4344272 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - ns/op",
            "value": 2693,
            "unit": "ns/op",
            "extra": "4344272 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - B/op",
            "value": 140,
            "unit": "B/op",
            "extra": "4344272 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4344272 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC",
            "value": 2724,
            "unit": "ns/op\t     156 B/op\t       1 allocs/op",
            "extra": "4203252 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - ns/op",
            "value": 2724,
            "unit": "ns/op",
            "extra": "4203252 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - B/op",
            "value": 156,
            "unit": "B/op",
            "extra": "4203252 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "4203252 times\n4 procs"
          }
        ]
      }
    ]
  }
}