/*
Path https://leetcode.com/problems/longest-common-prefix/description/
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

var longestCommonPrefix = function(strs) {
  let longestCommonPrefix = "";
  if (strs == null || strs.length == 0) {
    return longestCommonPrefix;
  }
  let minimumLength = strs[0].length;
  for (let i = 1; i < strs.length; i++) {
    minimumLength = Math.min(minimumLength, strs[i].length);
  }
  for (let i = 0; i < minimumLength; i++) {
    // Get the current character from first string
    let current = strs[0][i];
    // Check if this character is found in all other strings or not
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] != current) {
        return longestCommonPrefix;
      }
    }
    longestCommonPrefix += current;
  }
  return longestCommonPrefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));