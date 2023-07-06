function flat(arr, depth = 1) {
  let result = [];
  arr.forEach(item => {
    if(Array.isArray(item) && depth > 0) {
      result.push(...flat(item, depth - 1));
    } 
    else result.push(item);
  });
  return result;
}

const arr = [1, [2], [3, [4]]];

console.log(flat(arr))
// [1, 2, 3, [4]]

console.log(flat(arr, 1))
// [1, 2, 3, [4]]

console.log(flat(arr, 2))
// [1, 2, 3, 4]