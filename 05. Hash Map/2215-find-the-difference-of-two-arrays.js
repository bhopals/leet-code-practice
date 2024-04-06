// 2215. Find the Difference of Two Arrays
// Easy
// Topics
// Companies
// Hint
// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

// Example 1:

// Input: nums1 = [1,2,3], nums2 = [2,4,6]
// Output: [[1,3],[4,6]]
// Explanation:
// For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
// For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].
// Example 2:

// Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
// Output: [[3],[]]
// Explanation:
// For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].
// Every integer in nums2 is present in nums1. Therefore, answer[1] = [].

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  let arr1 = nums1.filter((num) => !nums2.includes(num));
  let arr2 = nums2.filter((num) => !nums1.includes(num));
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);
  return [Array.from(set1), Array.from(set2)];
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let arr1 = [];
  let arr2 = [];

  set1.forEach((val) => {
    if (!set2.has(val)) {
      arr1.push(val);
    }
  });

  set2.forEach((val) => {
    if (!set1.has(val)) {
      arr2.push(val);
    }
  });

  return [arr1, arr2];
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference_ = function (nums1, nums2) {
  let set1 = new Set();
  let set2 = new Set();
  let arr1 = [];
  let arr2 = [];

  for (let i = 0; i < nums1.length; i++) {
    set1.add(nums1[i]);
  }

  for (let i = 0; i < nums2.length; i++) {
    set2.add(nums2[i]);
  }

  set1.forEach((val) => {
    if (!set2.has(val)) {
      arr1.push(val);
    }
  });

  set2.forEach((val) => {
    if (!set1.has(val)) {
      arr2.push(val);
    }
  });

  return [arr1, arr2];
};
