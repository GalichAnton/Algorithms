const arr = [1,,,2]

// forEach
arr.forEach(i => console.log(i))

// map
console.log(arr.map(i => i * 2))

// for ... of
for (const i of arr) {
  console.log(i)
}

// spread
console.log([...arr])


// 1
// 2
// [2,empty,empty,4]
// 1
// undefined
// undefined
// 2
// [1,undefined,undefined,2]


