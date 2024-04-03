// 1679. Max Number of K-Sum Pairs

// You are given an integer array nums and an integer k.

// In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

// Return the maximum number of operations you can perform on the array.

// Example 1:

// Input: nums = [1,2,3,4], k = 5
// Output: 2
// Explanation: Starting with nums = [1,2,3,4]:
// - Remove numbers 1 and 4, then nums = [2,3]
// - Remove numbers 2 and 3, then nums = []
// There are no more pairs that sum up to 5, hence a total of 2 operations.
// Example 2:

// Input: nums = [3,1,3,4,3], k = 6
// Output: 1
// Explanation: Starting with nums = [3,1,3,4,3]:
// - Remove the first two 3's, then nums = [1,4,3]
// There are no more pairs that sum up to 6, hence a total of 1 operation.
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations_ = function (nums, k) {
  let map = new Map();
  let count = 0;

  //Generate Map
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  console.log("Before>map", map);

  //Check Count/Pair
  for (let num of nums) {
    let complement = k - num;
    let val = map.get(complement);
    if (val && val > 0) {
      count++;
      map.set(num, val - 1);
    }
  }
  console.log("After>map", map);
  console.log("count>", count);
  return count;
};

var maxOperations = function (nums, k) {
  let map = new Map();
  let count = 0;

  // Generate Map
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  // Check Count/Pair
  for (let [num, freq] of map) {
    let complement = k - num;
    if (num === complement) {
      // Handling the case where num and complement are the same
      count += Math.floor(freq / 2); // Add half of the frequency to count
    } else {
      let val = map.get(complement);
      if (val && val > 0) {
        count += Math.min(freq, val); // Add the minimum of freq and val to count
        map.set(num, 0); // Set the frequency of num to 0 to avoid double-counting
        map.set(complement, 0); // Set the frequency of complement to 0 to avoid double-counting
      }
    }
  }

  return count;
};
