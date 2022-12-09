Array.prototype.myReduce = function (cb, init) {
  let acc = init;
  for (let i = 0; i < this.length; i++) {
    acc = cb.call(this, acc, this[i], i, this);
  }
  return acc;
};
const arr = [1, 2, 3, 4, 5];

console.log(
  arr.myReduce((acc, elem, index, arr) => {
    if (index % 2) {
      return acc + elem;
    }
    return acc;
  }, 0)
);
