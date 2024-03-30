// 2413. Smallest Even Multiple
// Easy
// Topics
// Companies
// Hint
// Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.

// Example 1:

// Input: n = 5
// Output: 10
// Explanation: The smallest multiple of both 5 and 2 is 10.
// Example 2:

// Input: n = 6
// Output: 6
// Explanation: The smallest multiple of both 6 and 2 is 6. Note that a number is a multiple of itself.

// Certainly! To find the smallest positive integer that is a multiple of both 2 and n, we can use the concept of the least common multiple (LCM). The LCM of two numbers is the smallest positive integer that is divisible by both numbers.

// Here's how we can solve this problem:

// Calculate the LCM of 2 and n.
// The LCM of 2 and n will be equal to 2 * n if n is odd, because in that case, 2 and n are coprime (i.e., they have no common factors other than 1), and the LCM is simply the product of the two numbers.
// If n is even, then the LCM of 2 and n will be equal to n, because 2 is a divisor of n and the LCM is the larger of the two numbers.

/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function (n) {
  const lcm = n % 2 === 0 ? n : 2 * n;
  return lcm;
};
