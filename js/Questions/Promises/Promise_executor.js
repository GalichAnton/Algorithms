new Promise((resolve, reject) => {
  resolve(1)
  resolve(2)
  reject('error')
}).then((value) => {
  console.log(value)
}, (error) => {
  console.log('error')
})

// 1

const p1 = Promise.resolve(1)
const p2 = new Promise((resolve) => resolve(p1))
const p3 = Promise.resolve(p1)
const p4 = p2.then(() => new Promise((resolve) => resolve(p3)))
const p5 = p4.then(() => p4)

console.log(p1 == p2) // false
console.log(p1 == p3) // true
console.log(p3 == p4) // false
console.log(p4 == p5) // false