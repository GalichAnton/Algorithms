console.log(NaN == NaN) // false
console.log(NaN === NaN) // false
console.log(Object.is(NaN, NaN)) // true
console.log([NaN].indexOf(NaN)) // -1
console.log([NaN].includes(NaN)) // true
console.log(Math.max(NaN, 1)) // NaN
console.log(Math.min(NaN, 1)) // NaN
console.log(Math.min(NaN, Infinity)) // NaN