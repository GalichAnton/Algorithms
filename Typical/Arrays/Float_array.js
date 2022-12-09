const arr = [1, 2, [[[[[3, 4]]]]], [5, [6, 7]], 8];

const floatingArr = (arr) => {
  let res = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      res = [...res, ...floatingArr(item)];
    } else res = [...res, item];
  }
  return res;
};

console.log(floatingArr(arr));
