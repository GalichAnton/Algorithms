var a = 1
function a() {
}

console.log(typeof a) // "number"

var b
function b() {
}
b = 1 

console.log(typeof b) // "number"

function c() {
}
var c = 1;

console.log(typeof c) // "number"

var d = 1;

(function(){
  d = '2'
  console.log(typeof d) // "string"
  function d() {
  }
})()

console.log(typeof d) // "number"

var e = 1
const f = function e() {}

console.log(typeof e) // "number"