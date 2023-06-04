function a(){
}
const b = function() {
  
}

const c = function d() {
  console.log(typeof d) // "function"
  d = 'e'
  console.log(typeof d) // "function"
}

console.log(typeof a) // "function"
console.log(typeof b) // "function"
console.log(typeof c) // "function"
console.log(typeof d) // "undefined"
c()