window.BENCHMARK_DATA = {
  "lastUpdate": 1771296423018,
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
        "date": 1769579845603,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGet/file_descriptor/cache_none",
            "value": 2619130,
            "unit": "ns/op\t 4851274 B/op\t    8620 allocs/op",
            "extra": "4615 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - ns/op",
            "value": 2619130,
            "unit": "ns/op",
            "extra": "4615 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - B/op",
            "value": 4851274,
            "unit": "B/op",
            "extra": "4615 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - allocs/op",
            "value": 8620,
            "unit": "allocs/op",
            "extra": "4615 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none",
            "value": 2645797,
            "unit": "ns/op\t 4852119 B/op\t    8644 allocs/op",
            "extra": "4593 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - ns/op",
            "value": 2645797,
            "unit": "ns/op",
            "extra": "4593 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - B/op",
            "value": 4852119,
            "unit": "B/op",
            "extra": "4593 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - allocs/op",
            "value": 8644,
            "unit": "allocs/op",
            "extra": "4593 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru",
            "value": 1871,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "6491835 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - ns/op",
            "value": 1871,
            "unit": "ns/op",
            "extra": "6491835 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "6491835 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6491835 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru",
            "value": 1733,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "6791437 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - ns/op",
            "value": 1733,
            "unit": "ns/op",
            "extra": "6791437 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "6791437 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6791437 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC",
            "value": 1765,
            "unit": "ns/op\t     137 B/op\t       1 allocs/op",
            "extra": "6722073 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - ns/op",
            "value": 1765,
            "unit": "ns/op",
            "extra": "6722073 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - B/op",
            "value": 137,
            "unit": "B/op",
            "extra": "6722073 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6722073 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC",
            "value": 1709,
            "unit": "ns/op\t     132 B/op\t       1 allocs/op",
            "extra": "6067218 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - ns/op",
            "value": 1709,
            "unit": "ns/op",
            "extra": "6067218 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - B/op",
            "value": 132,
            "unit": "B/op",
            "extra": "6067218 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6067218 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none",
            "value": 2431654,
            "unit": "ns/op\t 2709074 B/op\t    8635 allocs/op",
            "extra": "4597 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - ns/op",
            "value": 2431654,
            "unit": "ns/op",
            "extra": "4597 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - B/op",
            "value": 2709074,
            "unit": "B/op",
            "extra": "4597 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - allocs/op",
            "value": 8635,
            "unit": "allocs/op",
            "extra": "4597 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none",
            "value": 2460692,
            "unit": "ns/op\t 2717565 B/op\t    8634 allocs/op",
            "extra": "4832 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - ns/op",
            "value": 2460692,
            "unit": "ns/op",
            "extra": "4832 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - B/op",
            "value": 2717565,
            "unit": "B/op",
            "extra": "4832 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - allocs/op",
            "value": 8634,
            "unit": "allocs/op",
            "extra": "4832 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru",
            "value": 1819,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "6609291 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - ns/op",
            "value": 1819,
            "unit": "ns/op",
            "extra": "6609291 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "6609291 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6609291 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru",
            "value": 1755,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "6804750 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - ns/op",
            "value": 1755,
            "unit": "ns/op",
            "extra": "6804750 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "6804750 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6804750 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC",
            "value": 1818,
            "unit": "ns/op\t     132 B/op\t       1 allocs/op",
            "extra": "6091347 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - ns/op",
            "value": 1818,
            "unit": "ns/op",
            "extra": "6091347 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - B/op",
            "value": 132,
            "unit": "B/op",
            "extra": "6091347 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6091347 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC",
            "value": 1775,
            "unit": "ns/op\t     132 B/op\t       1 allocs/op",
            "extra": "6247230 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - ns/op",
            "value": 1775,
            "unit": "ns/op",
            "extra": "6247230 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - B/op",
            "value": 132,
            "unit": "B/op",
            "extra": "6247230 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6247230 times\n4 procs"
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
        "date": 1769781540441,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGet/file_descriptor/cache_none",
            "value": 2353208,
            "unit": "ns/op\t 4437665 B/op\t    8632 allocs/op",
            "extra": "4671 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - ns/op",
            "value": 2353208,
            "unit": "ns/op",
            "extra": "4671 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - B/op",
            "value": 4437665,
            "unit": "B/op",
            "extra": "4671 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - allocs/op",
            "value": 8632,
            "unit": "allocs/op",
            "extra": "4671 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none",
            "value": 2384622,
            "unit": "ns/op\t 4443845 B/op\t    8633 allocs/op",
            "extra": "5563 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - ns/op",
            "value": 2384622,
            "unit": "ns/op",
            "extra": "5563 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - B/op",
            "value": 4443845,
            "unit": "B/op",
            "extra": "5563 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - allocs/op",
            "value": 8633,
            "unit": "allocs/op",
            "extra": "5563 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru",
            "value": 1810,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "6261403 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - ns/op",
            "value": 1810,
            "unit": "ns/op",
            "extra": "6261403 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "6261403 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6261403 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru",
            "value": 1997,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "6039670 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - ns/op",
            "value": 1997,
            "unit": "ns/op",
            "extra": "6039670 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "6039670 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6039670 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC",
            "value": 1695,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "6758120 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - ns/op",
            "value": 1695,
            "unit": "ns/op",
            "extra": "6758120 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "6758120 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6758120 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC",
            "value": 1712,
            "unit": "ns/op\t     142 B/op\t       1 allocs/op",
            "extra": "6862863 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - ns/op",
            "value": 1712,
            "unit": "ns/op",
            "extra": "6862863 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - B/op",
            "value": 142,
            "unit": "B/op",
            "extra": "6862863 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6862863 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none",
            "value": 2269914,
            "unit": "ns/op\t 2656816 B/op\t    8632 allocs/op",
            "extra": "5301 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - ns/op",
            "value": 2269914,
            "unit": "ns/op",
            "extra": "5301 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - B/op",
            "value": 2656816,
            "unit": "B/op",
            "extra": "5301 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - allocs/op",
            "value": 8632,
            "unit": "allocs/op",
            "extra": "5301 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none",
            "value": 2273156,
            "unit": "ns/op\t 2772769 B/op\t    8627 allocs/op",
            "extra": "6127 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - ns/op",
            "value": 2273156,
            "unit": "ns/op",
            "extra": "6127 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - B/op",
            "value": 2772769,
            "unit": "B/op",
            "extra": "6127 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - allocs/op",
            "value": 8627,
            "unit": "allocs/op",
            "extra": "6127 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru",
            "value": 1998,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "7113854 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - ns/op",
            "value": 1998,
            "unit": "ns/op",
            "extra": "7113854 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "7113854 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "7113854 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru",
            "value": 1835,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "6186930 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - ns/op",
            "value": 1835,
            "unit": "ns/op",
            "extra": "6186930 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "6186930 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6186930 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC",
            "value": 1868,
            "unit": "ns/op\t     118 B/op\t       1 allocs/op",
            "extra": "6350707 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - ns/op",
            "value": 1868,
            "unit": "ns/op",
            "extra": "6350707 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - B/op",
            "value": 118,
            "unit": "B/op",
            "extra": "6350707 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6350707 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC",
            "value": 1811,
            "unit": "ns/op\t     144 B/op\t       1 allocs/op",
            "extra": "5730410 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - ns/op",
            "value": 1811,
            "unit": "ns/op",
            "extra": "5730410 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - B/op",
            "value": 144,
            "unit": "B/op",
            "extra": "5730410 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "5730410 times\n4 procs"
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
        "date": 1771296422152,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGet/file_descriptor/cache_none",
            "value": 2177432,
            "unit": "ns/op\t 3892369 B/op\t    8645 allocs/op",
            "extra": "5329 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - ns/op",
            "value": 2177432,
            "unit": "ns/op",
            "extra": "5329 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - B/op",
            "value": 3892369,
            "unit": "B/op",
            "extra": "5329 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - allocs/op",
            "value": 8645,
            "unit": "allocs/op",
            "extra": "5329 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none",
            "value": 2187531,
            "unit": "ns/op\t 4155939 B/op\t    8621 allocs/op",
            "extra": "5476 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - ns/op",
            "value": 2187531,
            "unit": "ns/op",
            "extra": "5476 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - B/op",
            "value": 4155939,
            "unit": "B/op",
            "extra": "5476 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_none - allocs/op",
            "value": 8621,
            "unit": "allocs/op",
            "extra": "5476 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru",
            "value": 1760,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "6822378 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - ns/op",
            "value": 1760,
            "unit": "ns/op",
            "extra": "6822378 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "6822378 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6822378 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru",
            "value": 1660,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "6913610 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - ns/op",
            "value": 1660,
            "unit": "ns/op",
            "extra": "6913610 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "6913610 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6913610 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC",
            "value": 1668,
            "unit": "ns/op\t     140 B/op\t       1 allocs/op",
            "extra": "6048634 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - ns/op",
            "value": 1668,
            "unit": "ns/op",
            "extra": "6048634 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - B/op",
            "value": 140,
            "unit": "B/op",
            "extra": "6048634 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6048634 times"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC",
            "value": 1764,
            "unit": "ns/op\t     132 B/op\t       1 allocs/op",
            "extra": "6826359 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - ns/op",
            "value": 1764,
            "unit": "ns/op",
            "extra": "6826359 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - B/op",
            "value": 132,
            "unit": "B/op",
            "extra": "6826359 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_descriptor/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6826359 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none",
            "value": 2261137,
            "unit": "ns/op\t 2670838 B/op\t    8642 allocs/op",
            "extra": "4857 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - ns/op",
            "value": 2261137,
            "unit": "ns/op",
            "extra": "4857 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - B/op",
            "value": 2670838,
            "unit": "B/op",
            "extra": "4857 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - allocs/op",
            "value": 8642,
            "unit": "allocs/op",
            "extra": "4857 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none",
            "value": 2273259,
            "unit": "ns/op\t 2700239 B/op\t    8635 allocs/op",
            "extra": "6140 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - ns/op",
            "value": 2273259,
            "unit": "ns/op",
            "extra": "6140 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - B/op",
            "value": 2700239,
            "unit": "B/op",
            "extra": "6140 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_none - allocs/op",
            "value": 8635,
            "unit": "allocs/op",
            "extra": "6140 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru",
            "value": 1792,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "6940770 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - ns/op",
            "value": 1792,
            "unit": "ns/op",
            "extra": "6940770 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "6940770 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6940770 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru",
            "value": 1721,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "6892730 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - ns/op",
            "value": 1721,
            "unit": "ns/op",
            "extra": "6892730 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "6892730 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_lru - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6892730 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC",
            "value": 1676,
            "unit": "ns/op\t     114 B/op\t       1 allocs/op",
            "extra": "6855063 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - ns/op",
            "value": 1676,
            "unit": "ns/op",
            "extra": "6855063 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - B/op",
            "value": 114,
            "unit": "B/op",
            "extra": "6855063 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6855063 times"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC",
            "value": 1686,
            "unit": "ns/op\t     141 B/op\t       1 allocs/op",
            "extra": "6332436 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - ns/op",
            "value": 1686,
            "unit": "ns/op",
            "extra": "6332436 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - B/op",
            "value": 141,
            "unit": "B/op",
            "extra": "6332436 times\n4 procs"
          },
          {
            "name": "BenchmarkGet/file_mmap/cache_weak_defaultGC - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6332436 times\n4 procs"
          }
        ]
      }
    ]
  }
}