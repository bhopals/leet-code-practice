// 643. Maximum Average Subarray I

// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = function (nums, k) {
  let sum = 0;
  let maxAvg = 0;
  //Find the sum of first k elements
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  maxAvg = sum / k;
  console.log(`INIT - sum:${sum}, maxAvg:${maxAvg}, k: ${k}`);

  for (let i = k; i < nums.length; i++) {
    // sliding window -1 element + 1 element
    sum = sum - nums[i - k] + nums[i];
    let avg = sum / k;
    if (avg > maxAvg) {
      maxAvg = avg;
    }
  }
  return maxAvg;
};
