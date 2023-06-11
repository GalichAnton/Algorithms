function* gen() {
  yield 2 * (yield 100)
}

const generator = gen()
console.log(generator.next().value)
console.log(generator.next(1).value)
console.log(generator.next(1).value)

// 100
// 2
// undefined