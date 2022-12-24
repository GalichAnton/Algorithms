//Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters.
// No two characters may map to the same character, but a character may map to itself.
// Example 1
// Input: s = "egg", t = "add"
// Output: true
// Example 2:
// Input: s = "foo", t = "bar"
// Output: false

// Example 3:
// Input: s = "paper", t = "title"
// Output: true

var isIsomorphic = function(s, t) {
  const mapST = new Map()
  const mapTS = new Map()

  for(let i = 0; i < s.length; i++) {

    if ((mapST.has(s[i]) && mapST.get(s[i]) !== t[i])
      || mapTS.has(t[i]) && mapTS.get(t[i]) !== s[i]) {
      return false
    }

    mapST.set(s[i],t[i])
    mapTS.set(t[i], s[i])
  }

  return true
};

console.log(isIsomorphic('egg', 'add'))