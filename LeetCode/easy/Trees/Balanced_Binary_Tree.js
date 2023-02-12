//Given a binary tree, determine if it is height-balanced

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: true

// Example 2:
// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false

// Example 3:
// Input: root = []
// Output: true

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = function(root) {
  const dfs = (root) => {
    if(!root) {
      return [true,0]
    }
    let left = dfs(root.left)
    let right = dfs(root.right)

    let balanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1

    return [balanced, 1 + Math.max(left[1], right[1])]
  }

  return dfs(root)[0]
};

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const tree = new TreeNode(2, new TreeNode(3), new TreeNode(4))

const leafSum = function(root) {
  const dfs = (root) => {
    let sum = 0

    if(!root) {
      return 0
    }

    if(!root.left && !root.right) {
       sum += root.val
    }

    sum += dfs(root.left) + dfs(root.right)

    return sum
  }

  return dfs(root)
};

console.log(tree)
console.log(leafSum(tree))