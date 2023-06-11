var a = 1;
(function() {
// 'var a = 2' is hoisted here -> var a = undefined
// 'this.a' is number -> this.a = 1 (undefined + number -> NaN)
  console.log(a + this.a);  // NaN
  var a = '2'
  console.log(a + this.a); // "21"
})();

var name = 1;
(function() {
// 'var name = 2' is hoisted here -> var name = undefined
// 'this.name' is string -> this.name = "1" (undefined + string -> "undefinedString")
  console.log(name + this.name); // "undefined1"
  var name = '2'
  console.log(name + this.name); // "21"
})();