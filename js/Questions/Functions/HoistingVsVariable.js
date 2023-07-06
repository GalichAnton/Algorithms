function foo(){ console.log(1) }
var foo = 2
function foo(){ console.log(3) }
console.log(foo)
foo()
// Error