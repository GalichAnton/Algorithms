class A {
  val = 1
  get foo() {
    return this.val
  }
}

class B {
  val = 2
  set foo(val) {
    this.val = val
  }
}
const a = new A()
const b = new B()
console.log(a.foo)
console.log(b.foo)
b.foo = 3
console.log(b.val)
console.log(b.foo)