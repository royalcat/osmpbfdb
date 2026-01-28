window.BENCHMARK_DATA = {
  "lastUpdate": 1769579846001,
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
      }
    ]
  }
}