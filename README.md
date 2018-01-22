# Benchmarking JavaScript

This repo goes with the blog post: [Benchmarking and Optimizing Slow JavaScript](http://www.olioapps.com/blog/benchmarking-and-optimizing-slow-javascript/).

To run the tests. Use a recent version of Node. Tested on v8.9.4.

```bash
npm install
npm test
```

## Output
```
Starting benchmark, please wait...
parseUsers1(apiUsers) x 5.93 ops/sec ±7.56% (20 runs sampled)
parseUsers2(apiUsers) x 5.15 ops/sec ±1.83% (17 runs sampled)
parseUsers3(apiUsers) x 29,350 ops/sec ±1.37% (83 runs sampled)
parseUsers4(apiUsers) x 19,607 ops/sec ±3.26% (80 runs sampled)
parseUsers5(apiUsers) x 11,763 ops/sec ±8.97% (68 runs sampled)
parseUsers6(apiUsers) x 20,284 ops/sec ±1.66% (81 runs sampled)

Fastest is parseUsers3(apiUsers)
```
