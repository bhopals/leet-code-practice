// Valid Mountain Array

// Given an array of integers arr, return true if and only if it is a valid mountain array.

// Recall that arr is a mountain array if and only if:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

// Example 1:

// Input: arr = [2,1]
// Output: false
// Example 2:

// Input: arr = [3,5,5]
// Output: false
// Example 3:

// Input: arr = [0,3,2,1]
// Output: true

// Constraints:

// 1 <= arr.length <= 104
// 0 <= arr[i] <= 104
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray_ = function (arr) {
  let len = arr.length;
  if (len < 3) {
    return false;
  }
  let upCounter = 0;
  let val = -1;
  let breakLoop = false;
  let upLoop = [];
  while (!breakLoop) {
    let item = arr[upCounter];
    console.log(`uploop: val:${val}, item:${item}`);
    if (val < item) {
      val = item;
      upLoop.push(item);
      upCounter++;
    } else {
      breakLoop = true;
    }
  }

  //console.log('upLoop>', upLoop)

  breakLoop = false;
  let downLoop = [];
  while (!breakLoop) {
    let item = arr[upCounter];
    if (val > item) {
      val = item;
      downLoop.push(item);
      upCounter++;
    } else {
      breakLoop = true;
    }
  }
  // console.log('downLoop>', downLoop)

  if (upLoop.length + downLoop.length !== len) {
    return false;
  }

  if (upLoop.length < 2 || downLoop.length < 1) {
    return false;
  }

  return true;
};

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  let len = arr.length;
  if (len < 3) {
    return false;
  }
  let upCounter = 0;
  let val = -1;
  let breakLoop = false;
  let upLoop = [];
  let downLoop = [];
  while (len > upCounter && !breakLoop) {
    let item = arr[upCounter];
    if (val < item && downLoop.length === 0) {
      val = item;
      upLoop.push(item);
      upCounter++;
    } else if (val > item) {
      val = item;
      downLoop.push(item);
      upCounter++;
    } else {
      breakLoop = true;
    }
  }

  if (upLoop.length + downLoop.length !== len) {
    return false;
  }

  if (upLoop.length < 2 || downLoop.length < 1) {
    return false;
  }

  return true;
};
