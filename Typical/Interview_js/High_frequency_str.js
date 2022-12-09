function highestFrequency(array) {
  const map = {};
  let maxValue = 0;
  let maxFreqStr = array[0];
  for (let i = 0; i < array.length; i++) {
    if (map[array[i]]) {
      map[array[i]] += 1;
    } else {
      map[array[i]] = 1;
    }
    if (map[array[i]] > maxValue) {
      maxValue = map[array[i]];
      maxFreqStr = array[i];
    }
  }
  return maxFreqStr;
}

console.log(highestFrequency(["a", "b", "c", "c", "d", "e"])); // -> c
console.log(highestFrequency(["abc", "def", "abc", "def", "abc"])); // -> abc
console.log(highestFrequency(["abc", "def"])); // -> abc
console.log(
  highestFrequency([
    "abc",
    "abc",
    "def",
    "def",
    "def",
    "ghi",
    "ghi",
    "ghi",
    "ghi"
  ])
); // -> ghi
