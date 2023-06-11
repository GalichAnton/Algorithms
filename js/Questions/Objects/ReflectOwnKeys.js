console.log(Reflect.ownKeys([])) // ["length"]
console.log(Reflect.ownKeys([,])) // ["length"]
console.log(Reflect.ownKeys([1,,2])) // ["0","2","length"]
console.log(Reflect.ownKeys([...[1,,2]])) // ["0","1","2","length"]