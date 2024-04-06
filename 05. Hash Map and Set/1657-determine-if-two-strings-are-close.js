// 1657. Determine if Two Strings Are Close
// Two strings are considered close if you can attain one from the other using the following operations:

// Operation 1: Swap any two existing characters.
// For example, abcde -> aecdb
// Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
// For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
// You can use the operations on either string as many times as necessary.

// Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

// Example 1:

// Input: word1 = "abc", word2 = "bca"
// Output: true
// Explanation: You can attain word2 from word1 in 2 operations.
// Apply Operation 1: "abc" -> "acb"
// Apply Operation 1: "acb" -> "bca"
// Example 2:

// Input: word1 = "a", word2 = "aa"
// Output: false
// Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
// Example 3:

// Input: word1 = "cabbba", word2 = "abbccc"
// Output: true
// Explanation: You can attain word2 from word1 in 3 operations.
// Apply Operation 1: "cabbba" -> "caabbb"
// Apply Operation 2: "caabbb" -> "baaccc"
// Apply Operation 2: "baaccc" -> "abbccc"

// Constraints:

// 1 <= word1.length, word2.length <= 105
// word1 and word2 contain only lowercase English letters.

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  //Case 1: If both words are not same
  if (word1.length !== word2.length) {
    return false;
  }

  // Create Maps for both strings
  let map1 = new Map();
  let map2 = new Map();
  for (let i = 0; i < word1.length; i++) {
    let elem = word1[i];
    map1.set(elem, (map1.get(elem) || 0) + 1);
  }
  for (let i = 0; i < word2.length; i++) {
    let elem = word2[i];
    map2.set(elem, (map2.get(elem) || 0) + 1);
  }

  // 02. Check to see if both string has same values
  let word1Keys = [...map1.keys()].sort().join("");
  let word2Keys = [...map2.keys()].sort().join("");

  // console.log('map1>', map1)
  // console.log('map2>', map2)
  // console.log('word1Keys>', word1Keys)
  // console.log('word2Keys>', word2Keys)
  if (word1Keys !== word2Keys) {
    return false;
  }

  // 03. Check the value of it
  let word1Values = [...map1.values()].sort((a, b) => a - b).join("");
  let word2Values = [...map2.values()].sort((a, b) => a - b).join("");

  if (word1Values !== word2Values) {
    return false;
  }
  // console.log('word1Values>', word1Values)
  // console.log('word2Values>', word2Values)

  return true;
};


 */
var closeStrings = function (word1, word2) {
    if (word1.length !== word2.length) {
        return false;
    }
    
    const count1 = {};
    const count2 = {};
    
    for (const char of word1) {
        count1[char] = (count1[char] || 0) + 1;
    }
    
    for (const char of word2) {
        count2[char] = (count2[char] || 0) + 1;
    }
    
    const values1 = Object.values(count1).sort().join(",");
    const values2 = Object.values(count2).sort().join(",");
    
    const keys1 = Object.keys(count1).sort().join(",");
    const keys2 = Object.keys(count2).sort().join(",");
    
    return values1 === values2 && keys1 === keys2;
};

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    //1. Strings have the same length
    if (word1.length !== word2.length) {
        return false;
    }

    let map1 = new Map();
    let map2 = new Map();
    word1.split("").map(c => map1.set(c, map1.get(c)+1 || 1));
    word2.split("").map(c => map2.set(c, map2.get(c)+1 || 1));
    
    //2. All the same letters
    // if (map1.keys().length !== map2.keys().length) {
    //     return false;
    // }

    let arr2 = Array.from(map2.keys());
    for (let [key,val] of map1) {
        if (!map2.has(key)) {
            return false;
        }
        //3. Same number of occurences per letter
        let occurenceKey = arr2.find(k => map2.get(k) === val);
        if (occurenceKey) {
            map2.set(occurenceKey, -1);
        } else {
            return false;
        }
    }

    return true;
};

/**
1. same total number of characters
2. same letters in any order
3. correct amount of each character, but not necessarily the 
right character

map of characters and occurences
1. map.keys.length == word2.length
2. map keys in word1 === map keys in word2
3. set of map occurences same between word1 and word2
**/