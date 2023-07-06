function curry(fn) {
  return function inner(...args) {
    if(args.length >= fn.length) {
      return fn(...args)
    } else {
      return (...otherArs) => inner(...otherArs,...args)
    }
  }
}

function add(a,b,c) {
  return a + b + c
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2, 3));
console.log(curriedAdd(1, 2, 3));
console.log(curriedAdd(1)(2)(3));