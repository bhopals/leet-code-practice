// Given two binary strings a and b, return their sum as a binary string.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.

/**
 *
 * String conversion (To Binary, Hexa, Octal)
 * Prefix 0x for hexadecimal (base 16) numbers. For example:
 *    - 0x1F represents the hexadecimal number 31.
 *    - 0xFF represents the hexadecimal number 255.
 * Prefix 0o for octal (base 8) numbers. For example:
 *    - 0o10 represents the octal number 8.
 *    - 0o77 represents the octal number 63.
 * Prefix 0b for binary (base 2) numbers. For example:
 *    - 0b1010 represents the binary number 10.
 *    - 0b1011 represents the binary number 11.
 *
 */

/**
 *
 * Number conversion (To Binary, Hexa, Octal)
 * parseInt('1010', 2); // This will parse '1010' as a binary number and return 10
 * parseInt('FF', 16); // This will parse 'FF' as a hexadecimal number and return 255
 * parseInt('10', 8); // This will parse '10' as an octal number and return 8
 *
 * .toString(16): Converts a number to a hexadecimal (base 16) string.
 * .toString(8): Converts a number to an octal (base 8) string.
 * .toString(2): Converts a number to an binary (base 2) string.
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinaryBest = function (a, b) {
  let a_ = BigInt("0b" + a);
  let b_ = BigInt("0b" + b);
  let sum = a_ + b_;
  let result = sum.toString(2);
  console.log(`a:${a_}, b:${b_}, sum:${sum}, result:${result} `);
  return result;
};

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  return (BigInt(`0b${a}`, 2) + BigInt(`0b${b}`, 2)).toString(2);
};

var addBinary = function (a, b) {
  let a_ = parseInt(a, 2);
  let b_ = parseInt(b, 2);
  let sum = a_ + b_;
  let result = sum.toString(2);
  console.log(`a:${a_}, b:${b_}, sum:${sum}, result:${result} `);
  return result;
};
