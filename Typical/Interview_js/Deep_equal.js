function deepEqual(a, b) {
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return true;
  }

  if (typeof a !== typeof b) {
    return false;
  }

  if (typeof a !== "object" || a === null || b === null) {
    return a === b;
  }

  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }

  for (const key of Object.keys(a)) {
    if (!deepEqual(a[key], b[key])) {
      return false;
    }
  }

  return true;
}

const source = { a: 1, b: { c: 1 } };
const test1 = { a: 1, b: { c: 1 } };
const test2 = { a: 1, b: { c: 2 } };
console.log(deepEqual(source, test1)); // -> true
console.log(deepEqual(source, test2)); // -> false
console.log(deepEqual(NaN, NaN)); // -> true
console.log(deepEqual("test", "test!")); // -> false
console.log(deepEqual()); // -> true
