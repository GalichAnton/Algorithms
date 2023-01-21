const array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function insertionSort(array) {
  for(let i = 0; i < array.length; i++) {
    let temp = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
}

console.log(insertionSort(array))



const insertSort = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    let tmp = arr[i]
    let j = i - 1
    while(j >= 0 && arr[j] > tmp) {
      arr[j - 1] = tmp
      j--
    }
    arr[j + 1] = tmp
  }

  return arr
}

console.log(insertSort(array))