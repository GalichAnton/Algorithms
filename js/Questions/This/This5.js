var bar = 1

function foo() {
  return this.bar++
}

const a = {
  bar: 10,
  foo1: foo,
  foo2: function() {
    return foo()
  },
} 


console.log(a.foo1.call())
console.log(a.foo1())
console.log(a.foo2.call())
console.log(a.foo2())

// 1
// 10
// 2
// 3
// a.foot.call() makes this point to the window.bar and hence 1 is returned (it also increments bar because of post-increment)
// a.foo1() this time its a normal function call so this will refer to a and returns 10 (again increments it too)
// a.foo2.call is similar to the first case, no argument is passed hence this is the window and it prints 2 (again incremented after returning)
// In a.foo2(), inside the function body foo is executed independently losing context of a. Hence, it again prints global bar i.e. 3

