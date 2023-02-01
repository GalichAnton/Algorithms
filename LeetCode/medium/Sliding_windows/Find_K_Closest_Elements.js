//Companies

// Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array.
// The result should also be sorted in ascending order.
// An integer a is closer to x than an integer b if:

// |a - x| < |b - x|, or
// |a - x| == |b - x| and a < b

// Example 1:
// Input: arr = [1,2,3,4,5], k = 4, x = 3
// Output: [1,2,3,4]

// Example 2:
// Input: arr = [1,2,3,4,5], k = 4, x = -1
// Output: [1,2,3,4]

const findClosestElements = function(arr, k, x) {
  let l = 0
  let r = arr.length - k

  while (l < r) {
    let m = Math.floor((l + r) / 2)
    if(x - arr[m] > arr[m + k] - x) {
      l = m + 1
    } else {
      r = m
    }
  }

  let res = []

  for(let i = l; i < l + k; i++) {
    res.push(arr[i])
  }

  return res
};