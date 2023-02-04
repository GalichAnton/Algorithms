//Given an integer array nums where the elements are sorted in ascending order, convert it to a
// height-balanced binary search tree.

// Example 1:
// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:

// Example 2:
// Input: nums = [1,3]
// Output: [3,1]
// Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.

const sortedArrayToBST = function(nums) {

  function helper(l, r) {
    if(l > r) return null
    let m = Math.floor((l + r) / 2)
    let root = new TreeNode(nums[m])
    root.left = helper(l, m - 1)
    root.right = helper(m + 1, r)
    return root
  }

  return helper(0, nums.length - 1)
};