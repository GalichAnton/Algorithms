/*
Path https://leetcode.com/problems/single-number/description/

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.
*/

var singleNumber = function(nums) {
  let uniq = new Set();
  let uniqSum = 0;
  let numSum = 0;

  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];

    if (!uniq.has(cur)) {
      uniq.add(cur);
      uniqSum += cur;
    }
    numSum += cur;
  }

  return uniqSum * 2 - numSum;
};

console.log(singleNumber([2, 2, 1]));