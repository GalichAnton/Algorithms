let val = 0

class A {
  set foo(_val) {
    val = _val
  }
  get foo() {
    return val
  }
}

class B extends A { }

class C extends A {
  get foo() {
    return val
  }
}

const b = new B()
console.log(b.foo) // 0
b.foo = 1 // val also gets updated to 1
console.log(b.foo) // 1

const c = new C()
console.log(c.foo) // 1
c.foo = 2
console.log(c.foo) // 1
console.log(b.foo) // 1