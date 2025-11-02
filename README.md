# Time Range Merger

A Node.js module that merges overlapping time ranges and handles gaps within a specified threshold.

## Installation

No external dependencies required. Just ensure you have Node.js installed.

## Usage

```javascript
const { mergeTimeRanges } = require('./mergeTimeRanges.js');

const ranges = [[1000, 2000], [2500, 4000], [3900, 4100]];
const threshold = 200;
const result = mergeTimeRanges(ranges, threshold);
console.log(result); // [[1000, 2000], [2500, 4100]]
```

## Running the Code

1. **Run example**: `npm start` or `node example.js`
2. **Run tests**: `npm test` or `node test.js`

## Function Signature

```javascript
mergeTimeRanges(ranges, threshold)
```

- `ranges`: Array of [start, end) time ranges
- `threshold`: Maximum gap (ms) to merge ranges
- Returns: Sorted, non-overlapping merged ranges