/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
*/

/*  Учитывая массив целых чисел nums и целочисленное целевое значение, 
верните индексы двух чисел таким образом, чтобы они в сумме составляли target.

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

const twoSum = function(nums, target) {

};*/

var twoSum = function(nums, target) {
  const numObj = {};

  for (let i = 0; i < nums.length; i++) {
    numObj[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (numObj[diff] && numObj[diff] !== i) {
      return [i, numObj[diff]];
    }
  }

  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));

