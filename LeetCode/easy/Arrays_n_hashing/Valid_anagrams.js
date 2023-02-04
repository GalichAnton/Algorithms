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

const isAnagram = (word_1, word_2) => {
  if (word_1.length !== word_2.length) {
    return false;
  }

  const counter = new Map();

  for (let i = 0; i < word_1.length; ++i) {
    counter.set(word_1[i], (counter.get(word_1[i]) || 0) + 1);
    counter.set(word_2[i], (counter.get(word_2[i]) || 0) - 1);

    if (counter.get(word_1[i]) === 0) {
      counter.delete(word_1[i]);
    }

    if (counter.get(word_2[i]) === 0) {
      counter.delete(word_2[i]);
    }
  }
  console.log(counter)

  return counter.size === 0;
};