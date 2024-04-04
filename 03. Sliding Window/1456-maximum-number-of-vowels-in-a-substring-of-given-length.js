// 1456. Maximum Number of Vowels in a Substring of Given Length

// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

// Example 1:

// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.
// Example 2:

// Input: s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.
// Example 3:

// Input: s = "leetcode", k = 3
// Output: 2
// Explanation: "lee", "eet" and "ode" contain 2 vowels.

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let vowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;
  let maxVowelCount = 0;
  for (let i = 0; i < k; i++) {
    if (vowels.includes(s[i])) {
      vowelCount++;
    }
  }
  console.log(`INIT -  vowelCount: ${vowelCount}`);
  maxVowelCount = vowelCount;

  //Iterate over the string +1 step
  for (let i = k; i < s.length; i++) {
    if (vowels.includes(s[i - k])) {
      vowelCount--;
    }

    if (vowels.includes(s[i])) {
      vowelCount++;
    }

    if (maxVowelCount < vowelCount) {
      maxVowelCount = vowelCount;
    }
    // console.log(`InLoop - currItem:${currItem}, lastItem: ${lastItem}, vowelCount: ${vowelCount}, maxVowelCount: ${maxVowelCount}`);
  }
  return maxVowelCount;
};
