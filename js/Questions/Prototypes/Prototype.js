function Foo() { }
Foo.prototype.bar = 1
const a = new Foo()
console.log(a.bar) // 1

Foo.prototype.bar = 2 // both old and newly created objects will reflect these changes
const b = new Foo()
console.log(a.bar) // 2
console.log(b.bar) // 2

Foo.prototype = {bar: 3} // breaking the prototype chain, but a & b are unaffected
const c = new Foo() 
console.log(a.bar) // 2
console.log(b.bar) // 2
console.log(c.bar) // 3