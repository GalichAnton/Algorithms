/*
Path https://leetcode.com/problems/minimum-absolute-difference-in-bst/description/
Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.
Input: root = [4,2,6,1,3]
Output: 1
*/

// Definition for a binary tree node.
function TreeNode(val, left, right) {
 this.val = (val===undefined ? 0 : val)
 this.left = (left===undefined ? null : left)
 this.right = (right===undefined ? null : right)
}

const root = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(6))

var getMinimumDifference = function(root) {
  let min = Infinity
  let previous = null
  const aux = (node) => {
    if (!node) {
      return
    }
    if (node.left) {
      aux(node.left)
    }
    const possibleMin = Math.abs(node.val - previous)
    if ((previous !== null) && (possibleMin < min)) {
      min = possibleMin
    }
    previous = node.val
    if (node.right) {
      aux(node.right)
    }
  }
  aux(root)
  return min
};

console.log(getMinimumDifference(root))