// Find All Numbers Disappeared in an Array

// Solution
// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]

// Constraints:

// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n

// Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let ans = [];
  let temp = new Array(nums.length);
  temp.fill(0);
  for (let n of nums) {
    temp[n - 1] = 1;
  }
  console.log("temp>1:", temp);

  for (let i = 0; i < temp.length; i++) {
    if (temp[i] == 0) ans.push(i + 1);
  }
  console.log("ans>:", ans);
  return ans;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let len = nums.length;
  let uniqueSet = new Set(nums);
  let arr = Array.from(uniqueSet).sort((a, b) => a - b);
  let mismatch = [];
  let maxNum = Math.max(arr[arr.length - 1], len);
  for (let i = 1; i <= maxNum; i++) {
    if (!uniqueSet.has(i)) {
      mismatch.push(i);
    }
  }
  console.log("mismatch:", mismatch);
  return mismatch;
};

var findDisappearedNumbers = function (nums) {
  let ans = [];
  let temp = new Array(nums.length);
  temp.fill(0);
  console.log("temp:", temp);
  for (let n of nums) {
    console.log(`n:${n}, temp[n - 1]:${temp[n - 1]}, temp[n]: ${temp[n]}`);
    temp[n - 1]++;
  }
  console.log("temp>1:", temp);

  for (let i = 0; i < temp.length; i++) {
    if (temp[i] == 0) ans.push(i + 1);
  }
  console.log("ans>:", ans);
  return ans;
};
