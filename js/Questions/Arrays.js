const a = [0]
console.log(a.length)
a[3] = 3
console.log(a.length)
for (let item of a) {
  console.log(item)
}
a.map(item => {console.log(item)})
a.forEach(item => {console.log(item)})
console.log(Object.keys(a))
delete a[3]
console.log(a.length)
a[2] = 2
a.length = 1
console.log(a[0],a[1],a[2])



const a = [0]
console.log(a.length) // 1 Since array contains one element
a[3] = 3 // a = [0, empty, empty, 3]
console.log(a.length) // 4 Since array contains four elements now(even though only 2 elements are defined)

for (let item of a) {
  console.log(item) // prints all the array items
}
// 0
// undefined
// undefined
// 3

a.map(item => {console.log(item)}) // only called for assigned values
// 0
// 3

a.forEach(item => {console.log(item)}) // only called for assigned values
// 0
// 3

console.log(Object.keys(a)) // ["0","3"] only defined indexes are retuned

delete a[3] // deletes/unassigns that index
// a = [0, empty, empty, empty]
console.log(a.length) // 4 since length remains unaffected

a[2] = 2 // a = [0, empty, 2, empty]

a.length = 1 // this actually truncates the array so that length is only 1 now
// a = [0]

console.log(a[0],a[1],a[2]) // 0,undefined,undefined