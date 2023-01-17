const arr = [1,45, 3, 33, 5, 6, 78, 8, 9, 10,-56, 99, -100, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10];
let count = 0;

function bubleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            count++;
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }           
        }
    }
    return arr;
}

console.log(bubleSort(arr));
console.log(count);


























function bubbleSort2(arr) {
    for(let i = 0 ; i < arr.length; i++) {
        for(let j = 1; j < arr.length; j++) {
            if(arr[j - 1] > arr[j]) {
                let tmp = arr[j - 1]
                arr[j - 1] = arr[j]
                arr[j] = tmp
            }
        }
    }
    return arr
}

console.log(bubbleSort2(arr))