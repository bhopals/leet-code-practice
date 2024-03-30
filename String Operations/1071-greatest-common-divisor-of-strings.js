// 1071. Greatest Common Divisor of Strings

// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""

// Constraints:

// 1 <= str1.length, str2.length <= 1000
// str1 and str2 consist of English uppercase letters.

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  let greatestCommonString = "";
  let minLen = Math.min(str1.length, str2.length);

  for (let i = 1; i <= minLen; i++) {
    let substr = str1.substring(0, i);
    if (isDivisible(str1, substr) && isDivisible(str2, substr)) {
      greatestCommonString = substr;
    }
  }
  console.log("greatestCommonString>", greatestCommonString);
  return greatestCommonString;
};

function isDivisible(str, substr) {
  console.log("isDivisible>str>", str);
  console.log("isDivisible>substr>", substr);

  if (substr.length === 0 || str.length % substr.length !== 0) {
    return false;
  }
  return str === substr.repeat(str.length / substr.length);
}
