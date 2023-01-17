//Given an array nums with n objects colored red, white, or blue,
// sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// You must solve this problem without using the library's sort function.

// Example 1:
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// Example 2:
// Input: nums = [2,0,1]
// Output: [0,1,2]

// brute force approche O(n^2);
// var sortColors = function(nums) {
//
//   for(let i = 0; i < nums.length; i++) {
//     for(let j = i +1; j < nums.length;  j++) {
//       if(nums[j] < nums[i]) {
//         swap(nums, j, i);
//       }
//     }
//   }
//
//   return nums;
// };
//
// function swap(nums, j, i) {
//
//   const temp = nums[j];
//   nums[j] = nums[i];
//   nums[i] = temp;
// }

var sortColors = function(nums) {
  let l = 0
  let r = nums.length - 1
  let i = 0

  const swap = (i,j) => {
    let tmp = nums[i]
    nums[i] = nums[j]
    nums[j] = tmp
  }

  while(i <= r) {
    if(nums[i] === 0) {
      swap(l,i)
      l += 1
    } else if(nums[i] === 2) {
      swap(r,i)
      r -= 1
      i -= 1
    }
    i += 1
  }

  return nums
};

console.log(sortColors([2,0,2,1,1,0]));