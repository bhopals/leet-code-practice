// 2215. Find the Difference of Two Arrays

// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

// Example 1:

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
// Example 2:

// Input: arr = [1,2]
// Output: false
// Example 3:

// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true

// Constraints:

// 1 <= arr.length <= 1000
// -1000 <= arr[i] <= 1000

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let map = new Map();
  let set = new Set();
  let mapLength = 0;
  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i];
    map.set(elem, (map.get(elem) || 0) + 1);
  }

  for ([key, val] of map) {
    mapLength++;
    set.add(val);
  }
  return set.size === mapLength;
};
