console.log([] + [])
console.log([] + 1)
console.log([[]] + 1)
console.log([[1]] + 1)
console.log([[[[2]]]] + 1)
console.log([] - 1)
console.log([[]] - 1)
console.log([[1]] - 1)
console.log([[[[2]]]] - 1)
console.log([] + {})
console.log({} + {})
console.log({} - {})

// console.log([] + []) // "" + "" = ""
// console.log([] + 1) // "" + "1" = "1"
// console.log([[]] + 1) // "" + "1" = "1"
// console.log([[1]] + 1) // "1" + "1" = "11"
// console.log([[[[2]]]] + 1) // "2" + "1" = "21"
// console.log([] - 1) // 0 - 1 = -1
// console.log([[]] - 1) // 0 - 1 = -1
// console.log([[1]] - 1) // 1 - 1 = 0
// console.log([[[[2]]]] - 1) // 2 - 1 = 1
// console.log([] + {}) // "" +  "[object Object]" = "[object Object]"
// console.log({} + {}) // "[object Object]" + "[object Object]" = "[object Object][object Object]"
// console.log({} - {}) // NaN + NaN = NaN


console.log( [] + {} ) // "" + "[object Object]" = "[object Object]"

console.log( + {} ) // NaN

console.log( + [] ) // 0

console.log( {} + []) // "[object Object]" + "" = "[object Object]"

console.log( ({}) + []) // "[object Object]" + "" = "[object Object]"

console.log( ({}) + []) // "[object Object]" + "" = "[object Object]"

console.log( ({}) + []) // "[object Object]" + "" = "[object Object]"

console.log( {} +  + []) // "[object Object]" + "0" = "[object Object]0"
// think of it as console.log({} + (+[]))
// unary operator performs first which means it is now console.log({} + 0)

console.log( {} +  + [] + {} ) //  "[object Object]" + "0" + "[object Object]" = "[object Object]0[object Object]"
// think of it as console.log({} + (+[]) + {})
// unary operator performs first which means it is now console.log({} + 0 + {})

console.log( {} +  + [] + {}  + []) //  "[object Object]" + "0" + "[object Object]" + "" = "[object Object]0[object Object]"
// think of it as console.log({} + (+[]) + {} + [])
// unary operator performs first which means it is now console.log({} + 0 + {} + [])