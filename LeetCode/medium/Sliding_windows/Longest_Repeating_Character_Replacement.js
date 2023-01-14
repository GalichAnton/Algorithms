//You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character.
// You can perform this operation at most k times.
// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// Example 1:
// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.

// Example 2:
// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.

var characterReplacement = function(s, k) {
  const count = {}
  let res = 0

  let l = 0

  for (let r = 0; r < s.length; r++) {
    count[s[r]] = count[s[r]] ? 1 + count[s[r]] : 1

    while(((r - l + 1) - Math.max(...Object.values(count))) > k) {
      count[s[l]] -=1
      l += 1
    }

    res = Math.max(res,r - l + 1)
  }
  return res
};

console.log(characterReplacement("ABAB", 2))