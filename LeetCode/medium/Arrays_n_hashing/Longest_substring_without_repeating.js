//Given a string s, find the length of the longest
//substring without repeating characters.
// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


var lengthOfLongestSubstring = function(s) {
  const set = new Set();
  let l = 0;
  let max = 0;

  for (let r = 0, sl = s.length; r < sl; r++) {
    while (set.has(s[r])) {
      set.delete(s[l]);
      l++;
    }

    set.add(s[r]);
    max = Math.max(max, set.size);
  }
  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"));