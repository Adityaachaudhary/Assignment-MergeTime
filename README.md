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

## Examples

```javascript
// Example 1: Overlapping and threshold merging
mergeTimeRanges([[1000, 2000], [2500, 4000], [3900, 4100]], 200)
// Result: [[1000, 2000], [2500, 4100]]

// Example 2: No merging (gaps too large)
mergeTimeRanges([[0, 10], [15, 20], [25, 30]], 4)
// Result: [[0, 10], [15, 20], [25, 30]]

// Example 3: All ranges merged
mergeTimeRanges([[0, 10], [12, 15], [17, 25], [27, 35]], 3)
// Result: [[0, 35]]
```