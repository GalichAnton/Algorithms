//Given a pattern and a string s, find if s follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

// Example 1:
// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true

// Example 2:
// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false

// Example 3:
// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false

var wordPattern = function(pattern, s) {
  let map = new Map()
  let set = new Set()
  let arr = s.split(' ')
  if(pattern.length !== arr.length) return false
  for(let i = 0; i < pattern.length; i++) {
    if(map.has(pattern[i])) {
      if(map.get(pattern[i]) !== arr[i]) return false
    } else {
      if(set.has(arr[i])) return false
      map.set(pattern[i], arr[i])
      set.add(arr[i])
    }
  }
  return true
};
console.log(wordPattern("abca", "dog cat cat dog"))