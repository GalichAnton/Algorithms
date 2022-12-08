/*
Path https://leetcode.com/problems/peak-index-in-a-mountain-array/description/
An array arr a mountain if the following properties hold:
arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
Given a mountain array arr, return the index i such that arr[0] < arr[1] < ... < arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

You must solve it in O(log(arr.length)) time complexity.



Example 1:
Input: arr = [0,1,0]
Output: 1

Example 2:
Input: arr = [0,2,1,0]
Output: 1

Example 3:
Input: arr = [0,10,5,2]
Output: 1
*/

var peakIndexInMountainArray = function(arr) {
  let start = 0
  let end = arr.length - 1

  while(start < end){
    let middle = Math.floor((start + end) / 2)
    if(arr[middle] < arr[middle + 1]) {
      start = middle + 1
    } else {
      end = middle
    }
  }

  return start
};

console.log(peakIndexInMountainArray([0,1,7,0,45]))