// Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.
// Return a list of all possible strings we could create. Return the output in any order.

// Example 1:
// Input: s = "a1b2"
// Output: ["a1b2","a1B2","A1b2","A1B2"]

// Example 2:
// Input: s = "3z4"
// Output: ["3z4","3Z4"]

function letterCasePermutation(s) {
  const result = [];
  backtrack("", s, 0, result);
  return result;
}

function backtrack(current, s, index, result) {
  if (index === s.length) {
    result.push(current);
    return;
  }

  const char = s[index];

  // If the character is a letter, we need to generate both uppercase and lowercase versions
  if (/[a-zA-Z]/.test(char)) {
    backtrack(current + char.toUpperCase(), s, index + 1, result);
    backtrack(current + char.toLowerCase(), s, index + 1, result);
  } else {
    // If the character is not a letter, we can just append it to the current string
    backtrack(current + char, s, index + 1, result);
  }
}

console.log(letterCasePermutation("a1b2"));
