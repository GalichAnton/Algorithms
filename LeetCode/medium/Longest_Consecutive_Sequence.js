//Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.
// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

const longestConsecutive = function(nums) {
  const set = new Set(nums);
  let longest = 0

  for(const n of nums) {
    if(!set.has(n - 1)) {
      let length = 0
      while(set.has(n + length)) {
        length += 1
      }
      longest = Math.max(length, longest)
    }
  }
  return longest
};

console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))