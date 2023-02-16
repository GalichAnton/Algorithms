//You are given two binary trees root1 and root2.
// Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.
// You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.
// Return the merged tree.
// Note: The merging process must start from the root nodes of both trees.

// Example 1:
// Input: root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
// Output: [3,4,5,5,4,null,7]

// Example 2:
// Input: root1 = [1], root2 = [1,2]
// Output: [2,2]

const mergeTrees = function(root1, root2) {
  if(!root1 && !root2) return null

  let v1 = root1 ? root1.val : 0
  let v2 = root2 ? root2.val : 0

  const root = new TreeNode(v1 + v2)

  root.left = mergeTrees(root1 ? root1.left : null,root2 ? root2.left : null)
  root.right = mergeTrees(root1 ? root1.right : null,root2 ? root2.right : null)
  return root
};