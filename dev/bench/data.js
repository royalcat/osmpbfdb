window.BENCHMARK_DATA = {
  "lastUpdate": 1769143033287,
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
          "id": "a0b3706ba23b5c37780a33535dad774c03fe2f53",
          "message": "change benchmark tool",
          "timestamp": "2026-01-23T08:25:57+04:00",
          "tree_id": "59db16fa31118695295b5e73a6f974c7cc3a6ed4",
          "url": "https://github.com/royalcat/osmpbfdb/commit/a0b3706ba23b5c37780a33535dad774c03fe2f53"
        },
        "date": 1769142441462,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGet",
            "value": 1695,
            "unit": "ns/op",
            "extra": "679814 times\n4 procs"
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
          "id": "42837faecf3e633944a7b763af03fedda16674bb",
          "message": "bench mem",
          "timestamp": "2026-01-23T08:36:29+04:00",
          "tree_id": "241cdbddb2325f23ee31303c4e38d3e63f470957",
          "url": "https://github.com/royalcat/osmpbfdb/commit/42837faecf3e633944a7b763af03fedda16674bb"
        },
        "date": 1769143032575,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGet",
            "value": 1774,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "610581 times\n4 procs"
          },
          {
            "name": "BenchmarkGet - ns/op",
            "value": 1774,
            "unit": "ns/op",
            "extra": "610581 times\n4 procs"
          },
          {
            "name": "BenchmarkGet - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "610581 times\n4 procs"
          },
          {
            "name": "BenchmarkGet - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "610581 times\n4 procs"
          }
        ]
      }
    ]
  }
}