// 01. Comparing Two Strings: To compare two strings for equality, JavaScript provides the === operator.

const str1 = 'hello';
const str2 = 'world';
const isEqual = str1 === str2; // Output: false

// 02. Appending Alternative Text: To append alternate characters from two strings, you can use a loop or array methods like map.

const str1 = 'abc';
const str2 = '123';
let result = '';
for (let i = 0; i < Math.min(str1.length, str2.length); i++) {
result += str1[i] + str2[i];
}
result += str1.slice(str2.length) + str2.slice(str1.length);
// Output: "a1b2c3"

// 03. Checking Equality: To check if two strings are equal regardless of case, you can convert both strings to lowercase or uppercase before comparison.
const str1 = 'Hello';
const str2 = 'hello';
const isEqualIgnoreCase = str1.toLowerCase() === str2.toLowerCase(); // Output: true

// Palindrome Check: To check if a string is a palindrome, you can compare the string with its reverse.
function isPalindrome(str) {
const reversedStr = str.split('').reverse().join('');
return str === reversedStr;
}
const palindromeStr = 'racecar';
const isPalindromeResult = isPalindrome(palindromeStr); // Output: true

// Substring Search: To check if a substring exists within a string, you can use the includes method.
const str = 'JavaScript';
const substring = 'Script';
const containsSubstring = str.includes(substring); // Output: true

// Replacing Substrings: To replace occurrences of a substring within a string, you can use the replace method.
const str = 'Hello World';
const replacedStr = str.replace('World', 'Universe'); // Output: "Hello Universe"

// String Concatenation: To concatenate multiple strings, you can use the + operator or template literals.
const str1 = 'Hello';
const str2 = 'World';
const combinedStr = `${str1}, ${str2}`; // Output: "Hello, World"

// Concatenation: Combining two or more strings into a single string.
const str1 = 'Hello';
const str2 = 'World';
const combinedStr = str1 + ' ' + str2; // Output: "Hello World"

// Length: Getting the length of a string.
const str = 'JavaScript';
const length = str.length; // Output: 10

// Accessing Characters: Accessing individual characters in a string.
const str = 'JavaScript';
const firstChar = str[0]; // Output: "J"
const lastChar = str[str.length - 1]; // Output: "t"

// Substring: Extracting a portion of a string.
const str = 'JavaScript';
const substr = str.substring(0, 4); // Output: "Java"

// Splitting: Splitting a string into an array of substrings based on a delimiter.
const str = 'apple,banana,orange';
const arr = str.split(','); // Output: ["apple", "banana", "orange"]

// Trimming: Removing whitespace from the beginning and end of a string.
const str = ' Hello ';
const trimmedStr = str.trim(); // Output: "Hello"

// Conversion: Converting the case of characters in a string.
const str = 'Hello World';
const upperCase = str.toUpperCase(); // Output: "HELLO WORLD"
const lowerCase = str.toLowerCase(); // Output: "hello world"

// Searching: Finding the index of a substring within a string.
const str = 'JavaScript';
const index = str.indexOf('Script'); // Output: 4
