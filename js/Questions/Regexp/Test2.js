const arr = ['a', 'b', 'c', '1']
const regExp = /^[a-z]$/gi
const chars = arr.filter(elem => regExp.test(elem))
console.log(chars) // ["a","c"]

// regExp.test('a') // true and it sets lastIndex = 1
// regExp.test('b') // false as the lastIndex i.e. staring point is not 0, lastIndex resets
// regExp.test('c') // true as lastIndex is 0 and regex satisfies
// regExp.test('1') // false 