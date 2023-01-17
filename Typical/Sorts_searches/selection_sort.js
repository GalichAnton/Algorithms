const arr = [1,45, 3, 33, 5, 6, 78, 8, 9, 10,-56, 99, -100, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10, 1,45, 3, 33, 5, 6, 78, 8, 9, 10,-56, 99, -100, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10];
let count = 0;

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            count++;
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

console.log(selectionSort(arr));
console.log(count);



const selectionSort2 = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        let min = i
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[i]) {
                min = j
            }
        }
        if(min !== i) {
            let tmp = arr[i]
            arr[i] = arr[min]
            arr[min] = tmp
        }
    }
    return arr
}

console.log(selectionSort2(arr))