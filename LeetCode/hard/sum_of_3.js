/*
https://leetcode.com/problems/3sum/description/
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation:
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
*/
const nums = [-1,0,1,2,-1,-4]
var threeSum = function(nums) {
  const result = []

  if(nums.length < 3) {
    return result
  }

  nums = nums.sort((a,b) => a - b)

  for(let i = 0; i < nums.length - 2; i++) {
    if(nums[i] > 0) {
      break;
    }

    if(i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    let j = i + 1
    let k = nums.length - 1

    while(j < k) {
      let sum = nums[i] + nums[j] + nums[k]
      if(sum === 0) {
        while (nums[j] === nums[j + 1]) j++
        while (nums[k] === nums[k - 1]) k--
        result.push([nums[i],nums[j],nums[k]])
        j++
        k--
        continue
      }

      if(sum < 0) {
        j++
        continue
      }

      if(sum > 0) {
        k--
        continue
      }
    }
  }
  return result
};

console.log(threeSum(nums))