let a = 1
const b = ++a
const c = a++
console.log(a); // 3
console.log(b); // 2
console.log(c); // 2

let d = 1
console.log(d +++ d) // 3
// (a++  + a) = 1 + 2 = 3 (Note that a after + gets incremented)

let e = 1
console.log(e + + + e) // 2
// (1 + +(+1)) = (1 + +1) = 1 + 1 = 2


let i = 1
console.log(i --- i) // 1
// (c--  - c) = 1 - 0 = 1 (Note that c after - gets decremented)

let j = 1
console.log(j - - - j) // 0
// (1 - -(-1)) = (1 - 1) = 0