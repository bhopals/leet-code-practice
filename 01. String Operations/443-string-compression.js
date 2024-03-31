// 443. String Compression
// Medium
// Topics
// Companies
// Hint
// Given an array of characters chars, compress it using the following algorithm:

// Begin with an empty string s. For each group of consecutive repeating characters in chars:

// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

// After you are done modifying the input array, return the new length of the array.

// You must write an algorithm that uses only constant extra space.

// Example 1:

// Input: chars = ["a","a","b","b","c","c","c"]
// Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
// Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
// Example 2:

// Input: chars = ["a"]
// Output: Return 1, and the first character of the input array should be: ["a"]
// Explanation: The only group is "a", which remains uncompressed since it's a single character.
// Example 3:

// Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
// Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
// Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".

// Constraints:

// 1 <= chars.length <= 2000

var compress = function (chars) {
  let anchor = 0; // Marks the start of each group of consecutive repeating characters
  let write = 0; // Marks the position to write compressed characters back into the array

  for (let read = 0; read < chars.length; read++) {
    // Check if we're at the end of a group or the array
    if (read + 1 === chars.length || chars[read] !== chars[read + 1]) {
      // Write the character at the anchor position
      chars[write] = chars[anchor];
      write++; // Move to the next position to write

      // If the group has more than one character, write its count
      if (read > anchor) {
        let count = (read - anchor + 1).toString(); // Convert count to string
        for (let digit of count) {
          chars[write] = digit;
          write++; // Move to the next position to write
        }
      }
      // Move the anchor to the next group
      anchor = read + 1;
    }
  }

  return write; // Return the new length of the compressed array
};

var compress = function (chars) {
  let len = 0;
  let i = (j = 0);
  let newArr = [];

  while (j < chars.length) {
    let currChar = chars[j];
    let count = 0;
    while (j < chars.length && currChar === chars[j]) {
      count++;
      j++;
    }
    chars[i++] = currChar;
    if (count > 1) {
      // newArr.push(currChar);
      let countStr = count + "";
      for (str of countStr) {
        chars[i++] = str;
      }
    }
  }
  console.log("newArr>>", newArr);

  return i; // Return the new length of the compressed array
};
