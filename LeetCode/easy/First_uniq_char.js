/*
Path https://leetcode.com/problems/first-unique-character-in-a-string/description/
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
Example 1:
Input: s = "leetcode"
Output: 0

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1
*/

var firstUniqChar = function(s) {
  const map = {}

  for(let i = 0; i < s.length; i++){
    let current = s[i]
    if(map[current]) {
      map[current] += 1
    } else {
      map[current] = 1
    }
  }

  for(let i = 0; i < s.length; i++){
    let current = s[i]
    if(map[current] === 1) {
      return i
    }
  }
  return -1

};

console.log(firstUniqChar("loveleetcode"))