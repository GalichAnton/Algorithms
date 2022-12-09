/*
Напишите функцию, которая проверяет, является ли второй массив подмножеством первого.
То есть есть ли элементы второго массива в первом.
*/


function arraySubset(source, subset) {
  if (subset.length > source.length) return false;
  for (let i = 0; i < subset.length; i++) {
    let index = source.indexOf(subset[i]);
    if (index === -1) {
      return false;
    } else source.splice(index, 1);
  }
  return true;
}

console.log(arraySubset([2, 1, 3], [1, 2, 3])); // -> true
console.log(arraySubset([2, 1, 1, 3], [1, 2, 3])); // -> true
console.log(arraySubset([1, 1, 1, 3], [1, 3, 3])); // -> false
console.log(arraySubset([1, 2], [1, 2, 3])); // -> false
