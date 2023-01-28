//Given an array of positive integers nums and a positive integer target, return the minimal length of a  subarray
//whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// Example 1:
// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.

// Example 2:
// Input: target = 4, nums = [1,4,4]
// Output: 1

// Example 3:
// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0


const minSubArrayLen = function(target, nums) {
  let l = 0
  let sum = 0
  let res = nums.length + 1
  for(let r = 0; r < nums.length; r++) {
    sum += nums[r]
    while(sum >= target) {
      res = Math.min(res, (r - l + 1))
      sum -= nums[l]
      l += 1
    }
  }

  return res === nums.length + 1 ? 0 : res
};

console.log(minSubArrayLen(7, [2,3,1,2,4,3]))