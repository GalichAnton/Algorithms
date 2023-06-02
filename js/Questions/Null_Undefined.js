console.log(JSON.stringify([1,2,null,3])) // [1,2,null,3]
console.log(JSON.stringify([1,2,undefined,3])) // [1,2,null,3]
console.log(null === undefined) // false
console.log(null == undefined) // true
console.log(null == 0)  // false
console.log(null < 0) // false
console.log(null > 0) // false
console.log(null <= 0) // true
console.log(null >= 0) // true
console.log(undefined == 0) // false
console.log(undefined < 0) // false
console.log(undefined > 0) // false
console.log(undefined <= 0) // false
console.log(undefined >= 0) // false