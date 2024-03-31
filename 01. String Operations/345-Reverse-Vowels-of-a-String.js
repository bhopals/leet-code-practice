// 345. Reverse Vowels of a String

// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"

// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let left = 0;
  let right = s.length - 1;
  let charArr = s.split("");

  while (left < right) {
    if (vowels.has(charArr[left]) && vowels.has(charArr[right])) {
      [charArr[left], charArr[right]] = [charArr[right], charArr[left]];
      left++;
      right--;
    } else if (vowels.has(charArr[left])) {
      right--;
    } else {
      left++;
    }
  }
  return charArr.join("");
};
