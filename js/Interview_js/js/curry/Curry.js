function curry(foo, length = foo.length) {
  return (...args) => {
    if (args.length < length) {
      return curry(
        (...otherArgs) => foo(...args, ...otherArgs),
        length - args.length
      );
    }
    return foo(...args);
  };
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2, 3));
console.log(curriedAdd(1, 2, 3));
console.log(curriedAdd(1)(2)(3));
