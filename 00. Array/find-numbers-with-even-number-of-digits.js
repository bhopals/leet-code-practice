// Find Numbers with Even Number of Digits

// Given an array nums of integers, return how many of them contain an even number of digits.

// Example 1:

// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation:
// 12 contains 2 digits (even number of digits).
// 345 contains 3 digits (odd number of digits).
// 2 contains 1 digit (odd number of digits).
// 6 contains 1 digit (odd number of digits).
// 7896 contains 4 digits (even number of digits).
// Therefore only 12 and 7896 contain an even number of digits.
// Example 2:

// Input: nums = [555,901,482,1771]
// Output: 1
// Explanation:
// Only 1771 contains an even number of digits.

// Constraints:

// 1 <= nums.length <= 500
// 1 <= nums[i] <= 105

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let eventCount = 0;
  for (let i = 0; i < nums.length; i++) {
    let item = nums[i] + "";
    if (item.length % 2 === 0) {
      eventCount++;
    }
  }
  return eventCount;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let count = nums.reduce((acc, num) => {
    if (String(num).length % 2 === 0) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
  return count;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let count = nums.reduce((acc, num) => {
    return String(num).length % 2 === 0 ? acc + 1 : acc;
  }, 0);
  return count;
};
