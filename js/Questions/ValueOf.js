// This is a JavaScript Quiz from BFE.dev

// case 1
const obj1 = {
  valueOf() {
    return 1
  },
  toString() {
    return '100'
  }
}

console.log(obj1 + 1)
console.log(parseInt(obj1))

// case 2
const obj2 = {
  [Symbol.toPrimitive]() {
    return 200
  },

  valueOf() {
    return 1
  },
  toString() {
    return '100'
  }
}

console.log(obj2 + 1)
console.log(parseInt(obj2))

// case 3
const obj3 = {
  toString() {
    return '100'
  }
}

console.log(+obj3)
console.log(obj3 + 1)
console.log(parseInt(obj3))

// case 4
const obj4 = {
  valueOf() {
    return 1
  }
}

console.log(obj4 + 1)
console.log(parseInt(obj4))

// case 5
const obj5 = {
  [Symbol.toPrimitive](hint) {
    return hint === 'string' ? '100' : 1
  },
}

console.log(obj5 + 1)
console.log(parseInt(obj5))

// Case 1
// For obj1, we have defined valueOf and toString. While adding we use valueOf to get the primitive value and add 1 to it thus logging 2.
// parseInt will convert the input using toString method that gives '100' converting it to number gives 100

// Case 2
// For obj2, we have defined Symbol.toPrimitive, valueOf and toString methods. In this example, both operations viz. 
// addition and parseInt make use of toPrimitive method i.e. using 200

// Case 3
// For obj3, we have only defined toString. All three operations here, Unary operator,
// Addition and parseInt will use toString method i.e. "100"

// Case 4
// For obj4, we have only defined valueOf. So addition uses this value 1.
// But in parseInt, since we have not defined toString method, the string value of obj4 will be [object Object]
// hence parseInt returns NaN

// Case 5
// For obj5, we have only defined Symbol.toPrimitive with custom handling for hints.
// For Addition(+), the hint is implicitly number, which means toPrimitive returns 1 and 1+1=2.
// parseInt implicitly uses toPrimitive method with the hint passed as string and thus it uses "100" returning 100