const arr = [1,45, 3, 33, 5, 6, 78, 8, 9, 10];

function linearSearch(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch(arr, 78));