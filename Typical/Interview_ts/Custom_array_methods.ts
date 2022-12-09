const arr = [1, 2, 3];

function myForEach<T, R>(
  arr: T[],
  func: (value: T, i?: number, arr?: T[]) => R
): void {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i], i, arr);
  }
}
function plus2(item: number) {
  console.log(item + 2);
}
myForEach(arr, plus2);
//=======================================================
function myMap<T, R>(
  arr: T[],
  mapFn: (value: T, i?: number, arr?: T[]) => R
): R[] {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const mappedValue = mapFn(arr[i], i, arr);
    result.push(mappedValue);
  }
  return result;
}
const square = (x: number) => x * x;
const squaredNumbers = myMap(arr, square);

console.log(squaredNumbers);
//=======================================================
function filter<T, R>(
  arr: T[],
  predicateFn: (value: T, i?: number, arr?: T[]) => R
): T[] {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (predicateFn(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

const isEven = (x: number) => x % 2 === 0;
const evenNumbers = filter(arr, isEven);

console.log(evenNumbers);
//=======================================================
function reduce<T, R>(
  arr: T[],
  reducerFn: (acc: any, value: T, i?: number, arr?: T[]) => R,
  initialValue: any
): R[] {
  let accumulator = initialValue;
  for (let i = 0; i < arr.length; i++) {
    accumulator = reducerFn(accumulator, arr[i], i, arr);
  }
  return accumulator;
}

const sum = (a: number, b: number) => a + b;
const total = reduce(arr, sum, 0);

console.log(total); // -> 10
//=======================================================
