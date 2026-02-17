window.BENCHMARK_DATA = {
  "lastUpdate": 1771296420170,
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
        "date": 1769781522216,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGet/file_descriptor/cache_none",
            "value": 2801621,
            "unit": "ns/op\t 4199892 B/op\t    8740 allocs/op",
            "extra": "4572 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - ns/op",
            "value": 2801621,
            "unit": "ns/op",
            "extra": "4572 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - B/op",
            "value": 4199892,
            "unit": "B/op",
            "extra": "4572 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - allocs/op",
            "value": 8740,
            "unit": "allocs/op",
            "extra": "4572 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none",
            "value": 2793010,
            "unit": "ns/op\t 4360372 B/op\t    8703 allocs/op",
            "extra": "4400 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - ns/op",
            "value": 2793010,
            "unit": "ns/op",
            "extra": "4400 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - B/op",
            "value": 4360372,
            "unit": "B/op",
            "extra": "4400 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - allocs/op",
            "value": 8703,
            "unit": "allocs/op",
            "extra": "4400 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru",
            "value": 1670,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "7195536 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - ns/op",
            "value": 1670,
            "unit": "ns/op",
            "extra": "7195536 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "7195536 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "7195536 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru",
            "value": 1596,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "7495161 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - ns/op",
            "value": 1596,
            "unit": "ns/op",
            "extra": "7495161 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "7495161 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "7495161 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC",
            "value": 1605,
            "unit": "ns/op\t     141 B/op\t       1 allocs/op",
            "extra": "7377579 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - ns/op",
            "value": 1605,
            "unit": "ns/op",
            "extra": "7377579 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - B/op",
            "value": 141,
            "unit": "B/op",
            "extra": "7377579 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "7377579 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC",
            "value": 1622,
            "unit": "ns/op\t     200 B/op\t       1 allocs/op",
            "extra": "6719119 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - ns/op",
            "value": 1622,
            "unit": "ns/op",
            "extra": "6719119 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - B/op",
            "value": 200,
            "unit": "B/op",
            "extra": "6719119 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6719119 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none",
            "value": 2786743,
            "unit": "ns/op\t 2754044 B/op\t    8725 allocs/op",
            "extra": "4274 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - ns/op",
            "value": 2786743,
            "unit": "ns/op",
            "extra": "4274 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - B/op",
            "value": 2754044,
            "unit": "B/op",
            "extra": "4274 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - allocs/op",
            "value": 8725,
            "unit": "allocs/op",
            "extra": "4274 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none",
            "value": 2789419,
            "unit": "ns/op\t 2786962 B/op\t    8707 allocs/op",
            "extra": "4273 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - ns/op",
            "value": 2789419,
            "unit": "ns/op",
            "extra": "4273 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - B/op",
            "value": 2786962,
            "unit": "B/op",
            "extra": "4273 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - allocs/op",
            "value": 8707,
            "unit": "allocs/op",
            "extra": "4273 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru",
            "value": 1619,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "7523125 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - ns/op",
            "value": 1619,
            "unit": "ns/op",
            "extra": "7523125 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "7523125 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "7523125 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru",
            "value": 1572,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "7252130 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - ns/op",
            "value": 1572,
            "unit": "ns/op",
            "extra": "7252130 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "7252130 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "7252130 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC",
            "value": 1615,
            "unit": "ns/op\t     134 B/op\t       1 allocs/op",
            "extra": "6408463 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - ns/op",
            "value": 1615,
            "unit": "ns/op",
            "extra": "6408463 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - B/op",
            "value": 134,
            "unit": "B/op",
            "extra": "6408463 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6408463 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC",
            "value": 1641,
            "unit": "ns/op\t     134 B/op\t       1 allocs/op",
            "extra": "6476688 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - ns/op",
            "value": 1641,
            "unit": "ns/op",
            "extra": "6476688 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - B/op",
            "value": 134,
            "unit": "B/op",
            "extra": "6476688 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6476688 times\n4 procs"
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
        "date": 1771296419239,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGet/file_descriptor/cache_none",
            "value": 2677021,
            "unit": "ns/op\t 3884882 B/op\t    8717 allocs/op",
            "extra": "4448 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - ns/op",
            "value": 2677021,
            "unit": "ns/op",
            "extra": "4448 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - B/op",
            "value": 3884882,
            "unit": "B/op",
            "extra": "4448 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - allocs/op",
            "value": 8717,
            "unit": "allocs/op",
            "extra": "4448 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none",
            "value": 2691900,
            "unit": "ns/op\t 4228772 B/op\t    8725 allocs/op",
            "extra": "4438 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - ns/op",
            "value": 2691900,
            "unit": "ns/op",
            "extra": "4438 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - B/op",
            "value": 4228772,
            "unit": "B/op",
            "extra": "4438 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - allocs/op",
            "value": 8725,
            "unit": "allocs/op",
            "extra": "4438 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru",
            "value": 1664,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "7270831 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - ns/op",
            "value": 1664,
            "unit": "ns/op",
            "extra": "7270831 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "7270831 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "7270831 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru",
            "value": 1682,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "7213466 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - ns/op",
            "value": 1682,
            "unit": "ns/op",
            "extra": "7213466 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "7213466 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "7213466 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC",
            "value": 1658,
            "unit": "ns/op\t     116 B/op\t       1 allocs/op",
            "extra": "6913082 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - ns/op",
            "value": 1658,
            "unit": "ns/op",
            "extra": "6913082 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - B/op",
            "value": 116,
            "unit": "B/op",
            "extra": "6913082 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6913082 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC",
            "value": 1774,
            "unit": "ns/op\t     139 B/op\t       1 allocs/op",
            "extra": "6680157 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - ns/op",
            "value": 1774,
            "unit": "ns/op",
            "extra": "6680157 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - B/op",
            "value": 139,
            "unit": "B/op",
            "extra": "6680157 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6680157 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none",
            "value": 2796503,
            "unit": "ns/op\t 2723634 B/op\t    8743 allocs/op",
            "extra": "4272 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - ns/op",
            "value": 2796503,
            "unit": "ns/op",
            "extra": "4272 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - B/op",
            "value": 2723634,
            "unit": "B/op",
            "extra": "4272 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - allocs/op",
            "value": 8743,
            "unit": "allocs/op",
            "extra": "4272 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none",
            "value": 2785849,
            "unit": "ns/op\t 2711563 B/op\t    8745 allocs/op",
            "extra": "4005 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - ns/op",
            "value": 2785849,
            "unit": "ns/op",
            "extra": "4005 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - B/op",
            "value": 2711563,
            "unit": "B/op",
            "extra": "4005 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - allocs/op",
            "value": 8745,
            "unit": "allocs/op",
            "extra": "4005 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru",
            "value": 1688,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "7307071 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - ns/op",
            "value": 1688,
            "unit": "ns/op",
            "extra": "7307071 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "7307071 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "7307071 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru",
            "value": 1667,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "7199080 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - ns/op",
            "value": 1667,
            "unit": "ns/op",
            "extra": "7199080 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "7199080 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "7199080 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC",
            "value": 1657,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "7284780 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - ns/op",
            "value": 1657,
            "unit": "ns/op",
            "extra": "7284780 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "7284780 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "7284780 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC",
            "value": 1811,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "6657937 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - ns/op",
            "value": 1811,
            "unit": "ns/op",
            "extra": "6657937 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "6657937 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6657937 times\n4 procs"
          }
        ]
      }
    ]
  }
}