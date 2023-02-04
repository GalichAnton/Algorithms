// function cashFunction(fn) {
//   const cash = {}
//   return function (n) {
//     if (cash[n]) {
//       console.log('Взято из кеша', cash[n])
//       return cash[n]
//     }
//     let result = fn(n)
//     console.log('Посчитала функция = ', result)
//     cash[n] = result
//     return result;
//   };
// }
//
function factorial(n) {
  let result = 1
  while (n !== 1) {
    result *= n
    n -= 1
  }
  return result
}
//
// const cashFactorial = cashFunction(factorial)
//
// cashFactorial(5)
// cashFactorial(4)
// cashFactorial(3)
// cashFactorial(4)
// cashFactorial(5)
// cashFactorial(1)

const memo = (cb) => {
  const map = new Map()

  return function (...args) {
    let key = args.join()
    if (map.has(key)) {
      console.log("from hash")
      return map.get(key)
    }
    console.log('calculate')
    let res = cb.call(this, args)
    map.set(key, res)
    console.log(map)
    return res
  }
}

const memoFactorial = memo(factorial)

console.log(memoFactorial(5))
console.log(memoFactorial(4))
console.log(memoFactorial(4))
console.log(memoFactorial(4))
console.log(memoFactorial(5))