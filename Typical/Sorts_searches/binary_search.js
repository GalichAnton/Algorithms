const arr = [1,2,3,4,5,6,7,8,9,10];
let count = 0;

function binarySearch(arr, item) {
    let start = 0;
    let end = arr.length - 1;
    let mid;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        count++;
        if (arr[mid] === item) {
            return mid;
        } else if (arr[mid] < item) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}

function recursiveBinarySearch(arr, item, start, end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === item) {
        return mid;
    } else if (arr[mid] < item) {
        return recursiveBinarySearch(arr, item, mid + 1, end);
    } else {
        return recursiveBinarySearch(arr, item, start, mid - 1);
    }
}

// console.log(binarySearch(arr, 6));
// console.log(recursiveBinarySearch(arr, 6, 0, arr.length));
// console.log(count);




















function binarySearch2(arr, target) {
    let l = 0
    let r = arr.length - 1
    while(l < r) {
        let mid = Math.floor((l + r) / 2)
        if(target === arr[mid]) return mid
        if(target > arr[mid]) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    return -1
}

console.log(binarySearch2(arr, 6));











