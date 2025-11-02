/**
 * Merges discontinuous time ranges within a given threshold.
 * 
 * @param {Array<[number, number]>} ranges - Array of [start, end) ranges (unsorted, may overlap)
 * @param {number} threshold - Max gap (in ms) allowed between ranges to still be merged
 * @returns {Array<[number, number]>} - Sorted, non-overlapping merged ranges
 */
const mergeTimeRanges = (ranges, threshold) => {
  if (!ranges || ranges.length === 0) return [];
  
  // Sort ranges by start time
  
  const sorted = ranges.slice().sort((a, b) => a[0] - b[0]);
  
  const merged = [sorted[0]];
  
  for (let i = 1; i < sorted.length; i++) {
    const current = sorted[i];
    const last = merged[merged.length - 1];
    
    // Check if ranges overlap or gap is within threshold
    if (current[0] <= last[1] || current[0] - last[1] <= threshold) {
      // Merge ranges by extending the end time
      last[1] = Math.max(last[1], current[1]);
    } else {
      // Add as new range
      merged.push(current);
    }
  }
  
  return merged;
};

module.exports = {
  mergeTimeRanges
};