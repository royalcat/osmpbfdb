window.BENCHMARK_DATA = {
  "lastUpdate": 1769579847404,
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
        "date": 1769166069503,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGet/file_descriptor/cache_none",
            "value": 2828437,
            "unit": "ns/op\t 4042142 B/op\t    8762 allocs/op",
            "extra": "4092 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - ns/op",
            "value": 2828437,
            "unit": "ns/op",
            "extra": "4092 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - B/op",
            "value": 4042142,
            "unit": "B/op",
            "extra": "4092 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - allocs/op",
            "value": 8762,
            "unit": "allocs/op",
            "extra": "4092 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none",
            "value": 2867387,
            "unit": "ns/op\t 4325145 B/op\t    8757 allocs/op",
            "extra": "3687 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - ns/op",
            "value": 2867387,
            "unit": "ns/op",
            "extra": "3687 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - B/op",
            "value": 4325145,
            "unit": "B/op",
            "extra": "3687 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - allocs/op",
            "value": 8757,
            "unit": "allocs/op",
            "extra": "3687 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru",
            "value": 1635,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "7368584 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - ns/op",
            "value": 1635,
            "unit": "ns/op",
            "extra": "7368584 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "7368584 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "7368584 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru",
            "value": 1651,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "7216927 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - ns/op",
            "value": 1651,
            "unit": "ns/op",
            "extra": "7216927 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "7216927 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "7216927 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC",
            "value": 1660,
            "unit": "ns/op\t     184 B/op\t       1 allocs/op",
            "extra": "6787702 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - ns/op",
            "value": 1660,
            "unit": "ns/op",
            "extra": "6787702 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - B/op",
            "value": 184,
            "unit": "B/op",
            "extra": "6787702 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6787702 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC",
            "value": 1635,
            "unit": "ns/op\t     154 B/op\t       1 allocs/op",
            "extra": "7193686 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - ns/op",
            "value": 1635,
            "unit": "ns/op",
            "extra": "7193686 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - B/op",
            "value": 154,
            "unit": "B/op",
            "extra": "7193686 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "7193686 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none",
            "value": 2809921,
            "unit": "ns/op\t 2756665 B/op\t    8736 allocs/op",
            "extra": "4237 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - ns/op",
            "value": 2809921,
            "unit": "ns/op",
            "extra": "4237 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - B/op",
            "value": 2756665,
            "unit": "B/op",
            "extra": "4237 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - allocs/op",
            "value": 8736,
            "unit": "allocs/op",
            "extra": "4237 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none",
            "value": 2819397,
            "unit": "ns/op\t 2652763 B/op\t    8742 allocs/op",
            "extra": "4242 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - ns/op",
            "value": 2819397,
            "unit": "ns/op",
            "extra": "4242 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - B/op",
            "value": 2652763,
            "unit": "B/op",
            "extra": "4242 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - allocs/op",
            "value": 8742,
            "unit": "allocs/op",
            "extra": "4242 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru",
            "value": 1642,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "6912430 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - ns/op",
            "value": 1642,
            "unit": "ns/op",
            "extra": "6912430 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "6912430 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6912430 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru",
            "value": 1622,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "7410477 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - ns/op",
            "value": 1622,
            "unit": "ns/op",
            "extra": "7410477 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "7410477 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "7410477 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC",
            "value": 1632,
            "unit": "ns/op\t     127 B/op\t       1 allocs/op",
            "extra": "6948380 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - ns/op",
            "value": 1632,
            "unit": "ns/op",
            "extra": "6948380 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - B/op",
            "value": 127,
            "unit": "B/op",
            "extra": "6948380 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6948380 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC",
            "value": 1723,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "7165251 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - ns/op",
            "value": 1723,
            "unit": "ns/op",
            "extra": "7165251 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "7165251 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "7165251 times\n4 procs"
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
        "date": 1769579846998,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGet/file_descriptor/cache_none",
            "value": 2870924,
            "unit": "ns/op\t 4197930 B/op\t    8753 allocs/op",
            "extra": "4348 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - ns/op",
            "value": 2870924,
            "unit": "ns/op",
            "extra": "4348 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - B/op",
            "value": 4197930,
            "unit": "B/op",
            "extra": "4348 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - allocs/op",
            "value": 8753,
            "unit": "allocs/op",
            "extra": "4348 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none",
            "value": 2939134,
            "unit": "ns/op\t 4484286 B/op\t    8743 allocs/op",
            "extra": "3732 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - ns/op",
            "value": 2939134,
            "unit": "ns/op",
            "extra": "3732 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - B/op",
            "value": 4484286,
            "unit": "B/op",
            "extra": "3732 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - allocs/op",
            "value": 8743,
            "unit": "allocs/op",
            "extra": "3732 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru",
            "value": 2059,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5822264 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - ns/op",
            "value": 2059,
            "unit": "ns/op",
            "extra": "5822264 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "5822264 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "5822264 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru",
            "value": 2050,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5993776 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - ns/op",
            "value": 2050,
            "unit": "ns/op",
            "extra": "5993776 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "5993776 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "5993776 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC",
            "value": 2000,
            "unit": "ns/op\t     113 B/op\t       1 allocs/op",
            "extra": "5835111 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - ns/op",
            "value": 2000,
            "unit": "ns/op",
            "extra": "5835111 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - B/op",
            "value": 113,
            "unit": "B/op",
            "extra": "5835111 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "5835111 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC",
            "value": 2070,
            "unit": "ns/op\t     141 B/op\t       1 allocs/op",
            "extra": "5705900 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - ns/op",
            "value": 2070,
            "unit": "ns/op",
            "extra": "5705900 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - B/op",
            "value": 141,
            "unit": "B/op",
            "extra": "5705900 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "5705900 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none",
            "value": 2831705,
            "unit": "ns/op\t 2734251 B/op\t    8761 allocs/op",
            "extra": "4543 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - ns/op",
            "value": 2831705,
            "unit": "ns/op",
            "extra": "4543 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - B/op",
            "value": 2734251,
            "unit": "B/op",
            "extra": "4543 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - allocs/op",
            "value": 8761,
            "unit": "allocs/op",
            "extra": "4543 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none",
            "value": 2835919,
            "unit": "ns/op\t 2818846 B/op\t    8693 allocs/op",
            "extra": "4924 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - ns/op",
            "value": 2835919,
            "unit": "ns/op",
            "extra": "4924 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - B/op",
            "value": 2818846,
            "unit": "B/op",
            "extra": "4924 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - allocs/op",
            "value": 8693,
            "unit": "allocs/op",
            "extra": "4924 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru",
            "value": 2097,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5317118 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - ns/op",
            "value": 2097,
            "unit": "ns/op",
            "extra": "5317118 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "5317118 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "5317118 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru",
            "value": 2106,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5796936 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - ns/op",
            "value": 2106,
            "unit": "ns/op",
            "extra": "5796936 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "5796936 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "5796936 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC",
            "value": 2059,
            "unit": "ns/op\t     120 B/op\t       1 allocs/op",
            "extra": "5601879 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - ns/op",
            "value": 2059,
            "unit": "ns/op",
            "extra": "5601879 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "5601879 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "5601879 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC",
            "value": 2117,
            "unit": "ns/op\t     132 B/op\t       1 allocs/op",
            "extra": "5243743 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - ns/op",
            "value": 2117,
            "unit": "ns/op",
            "extra": "5243743 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - B/op",
            "value": 132,
            "unit": "B/op",
            "extra": "5243743 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "5243743 times\n4 procs"
          }
        ]
      }
    ]
  }
}