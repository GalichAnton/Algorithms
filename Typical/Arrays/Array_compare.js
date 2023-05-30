/*
Сравнение массивов
У нас есть 2 массива arr1 и arr2 с одинаковым содержимым 1, 2, то что выведет arr1 == arr2?
Как сравнить массивы, чтобы в примере вывелось true?
*/


const arr1 = [1, 2, 3];
const arr2 = [2, 1, 3];

console.log(arr1 === arr2);

const compareArr = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let key in arr1) {
    if (!arr2.includes(arr1[key])) {
      return false;
    }
  }
  return true;
};

console.log(compareArr(arr1, arr2));


const arr11 = [1, 2];
const arr22 = [1, 2];

console.log(arr11 === arr22);

const compareArr1 = (arr1, arr2) => {
  return arr1.filter((item, i) => item === arr2[i]).length === arr2.length;
};

console.log(compareArr(arr11, arr22 ));

