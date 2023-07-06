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

function fib(n, res = [0, 1, 1]) {
  if (res[n]) {
    console.log("map")
      return res[n];
  }
  console.log('calculate')
  res[n] = fib(n - 1, res) + fib(n - 2, res);
  return res[n];
}

console.log(fib(10))
//
// const cashFactorial = cashFunction(factorial)
//
  // cashFactorial(5)
  // cashFactorial(4)
  // cashFactorial(3)
  // cashFactorial(4)
  // cashFactorial(5)

const memo = (cb) => {
  const map = new Map()

  return function (...args) {
    let key = args.join()
    if (map.has(key)) {
      console.log("from hash")
      return map.get(key)
    }
    console.log('calculate')
    let res = cb.apply(this, args)
    map.set(key, res)
    console.log(map)
    return res
  }
} 

const memoFactorial = memo(factorial)

// console.log(memoFactorial(5))
// console.log(memoFactorial(4))
// console.log(memoFactorial(4))
// console.log(memoFactorial(4))
// console.log(memoFactorial(5))

function fib(n) {
  let res = 0
  let a = 0 
  let b = 1

  for(let i = 2; i <= n; i++) {
    res = a + b
    a = b
    b = res
  }
  return res
}

console.log(fib(3))