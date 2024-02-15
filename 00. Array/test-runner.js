/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    let item = nums[i];
    if (item === val) {
      for (let j = i; j < nums.length; j++) {
        nums[j] = nums[j + 1];
      }
      i--;
    }
    console.log(`i:${i}, item: ${item}`);
    console.log("nums[j]>", nums);

    // console.log('nums>', nums.length)
  }
  console.log("nums>00>", nums);

  let notUndefined = false;
  let counter = nums.length - 1;
  while (!notUndefined) {
    // console.log('nums[counter]>', nums[counter])
    if (!nums[counter]) {
      nums.pop();
      counter--;
    } else {
      notUndefined = true;
    }
  }
  console.log("nums>11>", nums);
  console.log("expected>[0, 1, 4, 0, 3]");
};

removeElement([], 0);
// removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);

Output: [0, 1, 2, 3, 0, 4];
Expected: [0, 1, 4, 0, 3];
