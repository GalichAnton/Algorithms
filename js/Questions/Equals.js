console.log(0 == '0') // true (after type conversion '0' = 0)
console.log(0 === '0') // false
console.log(Object.is(0, '0')) // false

console.log(0 == 0) // true
console.log(0 === 0) // true
console.log(Object.is(0, 0)) // true

console.log(0 == -0) // true
console.log(0 === -0) // true
console.log(Object.is(0, -0)) // false

console.log(NaN == NaN) // false
console.log(NaN === NaN) // false
console.log(Object.is(NaN, NaN)) // true

console.log(0 == false) // true (after type conversion false = 0)
console.log(0 === false) // false
console.log(Object.is(0, false)) // false