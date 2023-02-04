//Given an array nums of distinct integers, return all the possible permutations.

// You can return the answer in any order.
// Example 1:
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Example 2:
// Input: nums = [0,1]
// Output: [[0,1],[1,0]]

// Example 3:
// Input: nums = [1]
// Output: [[1]]

const permute = function(nums) {

  const dfs = (nums, permutation = [], permutations = []) => {
    const isBaseCase = nums.length === permutation.length
    if (isBaseCase) return permutations.push(permutation.slice())

    for (let i = 0; i < nums.length; i++) {
      if (permutation.includes(nums[i])) continue;

      backTrack(nums, i, permutation, permutations);
    }

    return permutations;
  }

  const backTrack = (nums, i, permutation, permutations) => {
    permutation.push(nums[i])
    dfs(nums, permutation, permutations)
    permutation.pop()
  }

  return dfs(nums)
}




console.log(permute([1,2,3]))
