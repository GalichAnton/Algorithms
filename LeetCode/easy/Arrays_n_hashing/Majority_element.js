//Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

var majorityElement = function(nums) {
  const map = new Map()

  for(const num of nums) {
    if(map.has(num)) {
      map.set(num, map.get(num) + 1)
    } else {
      map.set(num, 1)
    }
  }

  for(const [key, value] of map) {
    if(value > nums.length / 2) {
      return key
    }
  }

  return -1
};

console.log(majorityElement([3,2,3]))