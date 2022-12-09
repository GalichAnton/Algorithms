/*
Дан массив чисел, нужно вернуть строку интервалов из подряд идущих чисел.
Если подряд идут три и более числа с инкрементом 1, то они связываются "-" в интервал.
 */

function intervals(arr) {
  let length = 1;
  let list = [];
  return [...arr]
    .sort((a, b) => a - b)
    .reduce((acc, curr, i, arr) => {
      i++;
      if (arr[i] - arr[i - 1] !== 1) {
        if (length === 1) {
          acc.push(arr[i - length].toString());
          console.log(list);
        } else {
          acc.push(arr[i - length] + " - " + arr[i - 1]);
        }
        length = 1;
      } else {
        length++;
      }
      return acc;
    }, [])
    .join(", ");
}

const arr = [9, 2, 6, 5, 3, 8, 1, 10, 12, 15];
console.log(intervals(arr));