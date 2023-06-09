// both primitives remain as it is
console.log(JSON.stringify(['false', false])) // "["false",false]"

// in an array these values are converted to null
console.log(JSON.stringify([NaN, null, Infinity, undefined])) // "[null,null,null,null]"

// in an object, undefined keys are omitted, while NaN gets converted to null
console.log(JSON.stringify({a: null, b: NaN, c: undefined})) // "{"a":null,"b":null}"