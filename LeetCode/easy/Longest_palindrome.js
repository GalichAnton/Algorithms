/*
Path https://leetcode.com/problems/longest-palindromic-substring/description/
Given a string s, return the longest
palindromic substring in s.

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
*/

var longestPalindrome = function(s) {
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    let len1 = expandFromCenter(s, i, i);
    let len2 = expandFromCenter(s, i, i + 1);
    let len = Math.max(len1, len2);
    if (len > end - start) {
      start = Math.ceil(i - (len - 1) / 2);
      end = Math.floor(i + len / 2);
    }
  }

  function expandFromCenter(s, L, R) {
    while (L >= 0 && R < s.length && s[L] === s[R]) {
      L--;
      R++;
    }
    return R - L - 1;
  }

  return s.substring(start, end + 1);
};

console.log(longestPalindrome("babad"));