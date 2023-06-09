const obj = {
  msg: 'BFE',
  foo() {
    console.log(this.msg)
  },
  bar() {
    console.log('dev')
  }
}

obj.foo();
(obj.foo)();
(obj.foo || obj.bar)();

// "BFE"
// "BFE"
// undefined