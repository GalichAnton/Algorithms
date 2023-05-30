/*
Перевернуть число
Написать функцию которая переворачивает число без перевода в строку
*/

function getReversedNum(num) {
  let result = 0;
  let isMinus = false;
  if (num < 0) {
    isMinus = true;
    num = Math.abs(num);
  }
  while (num) {
    result = result * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return isMinus ? -1 * result : result;
}

console.log(getReversedNum(-23425));
