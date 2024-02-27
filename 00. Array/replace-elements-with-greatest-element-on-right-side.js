// Replace Elements with Greatest Element on Right Side

// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.

// Example 1:

// Input: arr = [17,18,5,4,6,1]
// Output: [18,6,6,6,1,-1]
// Explanation:
// - index 0 --> the greatest element to the right of index 0 is index 1 (18).
// - index 1 --> the greatest element to the right of index 1 is index 4 (6).
// - index 2 --> the greatest element to the right of index 2 is index 4 (6).
// - index 3 --> the greatest element to the right of index 3 is index 4 (6).
// - index 4 --> the greatest element to the right of index 4 is index 5 (1).
// - index 5 --> there are no elements to the right of index 5, so we put -1.
// Example 2:

// Input: arr = [400]
// Output: [-1]
// Explanation: There are no elements to the right of index 0.

// Constraints:

// 1 <= arr.length <= 104
// 1 <= arr[i] <= 105

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements_ = function (arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let maxVal = getMaxValueFromRight(i, arr);
    arr[i] = maxVal;
  }
  return arr;
};

function getMaxValueFromRight(currentIndex, arr) {
  let maxVal = -1;
  for (let a = currentIndex + 1; a < arr.length; a++) {
    let val = arr[a];
    maxVal = Math.max(maxVal, val);
  }
  // console.log(`maxVal:${maxVal}, currentIndex:${currentIndex}`)

  return maxVal;
}

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let len = arr.length;
  let maximum;
  for (let i = 0; i < len; i++) {
    let val = arr[i];
    if (!maximum || val === maximum || val > maximum) {
      let maxVal = getMaxValueFromRight(i, arr);
      maximum = maxVal;
    }

    arr[i] = maximum;
  }
  return arr;
};
