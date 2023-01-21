const arr = [1,45, 3, 33, 5, 6, 78, 8, 9, 10,-56, 99, -100, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10, 1,45, 3, 33, 5, 6, 78, 8, 9, 10,-56, 99, -100, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10];
let count = 0;

function quickSort(arr) {
    if(arr.length <= 1) {
        return arr;
    }
    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr[pivotIndex];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
        count++;
        if (i !== pivotIndex) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(arr));
console.log(count);







const quickSort2 = (arr) => {
    if (arr.length <= 1) {
       return arr[0]
    }
    let left = []
    let right = []
    let pivotIndex = Math.floor(arr.length / 2)
    let pivot = arr[pivotIndex]

    for(let i = 0; i < arr.length; i++) {
        if(i !== pivotIndex) {
            if(arr[i] > pivot) {
                right.push(arr[i])
            } else {
                left.push(arr[i])
            }
        }
    }

    return [quickSort2(left), pivot, quickSort2(right)]

}


console.log(quickSort(arr));









