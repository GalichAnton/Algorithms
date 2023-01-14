/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const map = new Map()
  if(s.length !== t.length) return false

  for(const char of s) {
    if(map.has(char)) {
      map.set(char, map.get(char) + 1)
    } else {
      map.set(char, 1)
    }
  }

  for(const char of t) {
    if(map.has(char)) {
      map.set(char, map.get(char) - 1)
      if(map.get(char) === 0) {
        map.delete(char)
      }
    } else {
      return false
    }
  }
  return true
};

console.log(isAnagram('aacc', 'ccac'))