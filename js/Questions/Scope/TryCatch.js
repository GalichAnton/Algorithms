var a = 'a'
try {
  throw new Error('BFE.dev')
} catch { // no local variable being used
  var a = 'a1' // overwrites outer varibale a, redeclaring global a
}
console.log(a) // a1

var b = 'b'
try {
  throw new Error('BFE.dev')
} catch (b) { // local variable b references the passed error
  var b = 'b1' // No longer pointing to the global variable, its a locally scoped variable only
}
console.log(b) // b

var c = 'c'
try {
  throw new Error('BFE.dev')
} catch (error) { // local variable error references the passed error
  var c = 'c1' // overwrites outer variable c, redeclaring global c
}
console.log(c) // c1