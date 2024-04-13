// 20. Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  const paranth = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (chr of s) {
    if (chr in paranth) {
      stack.push(chr);
    } else {
      if (stack.length === 0 || paranth[stack.pop()] !== chr) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

function isValid(s) {
  const stack = [];
  const pairs = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let char of s) {
    if (char in pairs) {
      stack.push(char); // Push opening parentheses onto the stack and ...
    } else {
      // If it's a closing parenthesis, check if it matches the top of the stack
      if (stack.length === 0 || pairs[stack.pop()] !== char) {
        return false; // Not a valid match
      }
    }
  }

  // If the stack is empty, all parentheses were matched
  return stack.length === 0;
}

// Example usage:
console.log(isValid("(){}[]")); // Output: true
console.log(isValid("([)]")); // Output: false
