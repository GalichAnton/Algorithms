console.log(1)

setTimeout(() => {
  console.log(2)
}, 10)

setTimeout(() => {
  console.log(3)
}, 0);

new Promise((_, reject) => {
  console.log(4)
  reject(5)
  console.log(6)
}).then(() => console.log(7))
.catch(() => console.log(8))
.then(() => console.log(9))
.catch(() => console.log(10))
.then(() => console.log(11))
.then(console.log)
.finally(() => console.log(12))

console.log(13) 

// 1
// 4
// 6
// 13
// 8
// 9
// 11
// undefined
// 12
// 3
// 2