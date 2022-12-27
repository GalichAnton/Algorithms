//Given an array nums of n integers where nums[i] is in the range [1, n],
// return an array of all the integers in the range [1, n] that do not appear in nums.

// Example 1:
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

// Example 2:
// Input: nums = [1,1]
// Output: [2]

var findDisappearedNumbers = function(nums) {
  let set = new Set()

  for(let i = 0; i < nums.length; i++) {
    set.add(i+1)
  }

  for(let i = 0; i < nums.length; i++) {
    if(set.has(nums[i])) {
      set.delete(nums[i])
    }
  }

  return [...set]
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))