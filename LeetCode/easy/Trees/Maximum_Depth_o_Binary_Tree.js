//Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Example 2:
// Input: root = [1,null,2]
// Output: 2


const maxDepth = function(root) {
  if (!root) {
    return 0;
  }

  let left = maxDepth(root.left);
  let right = maxDepth(root.right);
  return Math.max(left, right) + 1;
};

const iterMaxDepth = function (root) {
  if (!root) {
    return 0;
  }

  let stack = [[root, 1]];
  let ans = 0;

  while (stack.length) {
    let [node, depth] = stack.pop();
    ans = Math.max(ans, depth);

    if (node.left) {
      stack.push([node.left, depth + 1]);
    }
    if (node.right) {
      stack.push([node.right, depth + 1]);
    }
  }

  return ans;
};