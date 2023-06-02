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