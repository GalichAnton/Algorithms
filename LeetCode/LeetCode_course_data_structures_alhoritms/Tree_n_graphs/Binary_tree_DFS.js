//Example 1: 104. Maximum Depth of Binary Tree
// Given the root of a binary tree, find the length of the longest path from the root to a leaf.

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
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }

  let left = maxDepth(root.left);
  let right = maxDepth(root.right);
  return Math.max(left, right) + 1;
};

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
 * @return {number}
 */
var iterMaxDepth = function (root) {
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

//Example 2: 112. Path Sum
// Given the root of a binary tree and an integer targetSum,
// return true if there is a path from the root to a leaf such that the sum of the nodes on the path is equal to targetSum,
// and return false otherwise.

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  let dfs = (node, curr) => {
    if (!node) {
      return false;
    }

    // if both children are null, then the node is a leaf
    if (!node.left && !node.right) {
      return (curr + node.val) === targetSum;
    }

    curr += node.val;
    let left = dfs(node.left, curr);
    let right = dfs(node.right, curr);
    return left || right;
  }

  return dfs(root, 0);
};

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var iterHasPathSum = function (root, targetSum) {
  if (!root) {
    return false;
  }

  let stack = [[root, 0]];
  while (stack.length) {
    let [node, curr] = stack.pop();
    // if both children are null, then the node is a leaf
    if (!node.left && !node.right) {
      if (curr + node.val === targetSum) {
        return true;
      }
    }

    curr += node.val;
    if (node.left) {
      stack.push([node.left, curr]);
    }
    if (node.right) {
      stack.push([node.right, curr]);
    }
  }

  return false;
};

//Example 3: 1448. Count Good Nodes in Binary Tree
// Given the root of a binary tree, find the number of nodes that are good.
// A node is good if the path between the root and the node has no nodes with a greater value.

var goodNodes = function (root) {
  let dfs = (node, maxSoFar) => {
    if (!node) {
      return 0;
    }

    let left = dfs(node.left, Math.max(maxSoFar, node.val));
    let right = dfs(node.right, Math.max(maxSoFar, node.val));
    let ans = left + right;
    if (node.val >= maxSoFar) {
      ans++;
    }

    return ans;
  }

  return dfs(root, -Infinity);
};


var iterGoodNodes = function (root) {
  if (!root) {
    return 0;
  }

  let stack = [[root, -Infinity]];
  let ans = 0;

  while (stack.length) {
    let [node, maxSoFar] = stack.pop();
    if (node.val >= maxSoFar) {
      ans++;
    }

    if (node.left) {
      stack.push([node.left, Math.max(maxSoFar, node.val)]);
    }
    if (node.right) {
      stack.push([node.right, Math.max(maxSoFar, node.val)]);
    }
  }

  return ans;
};

//Example 4: 236. Lowest Common Ancestor of a Binary Tree
// Given the root of a binary tree and two nodes p and q that are in the tree, return the lowest common ancestor (LCA) of the two nodes.
// The LCA is the lowest node in the tree that has both p and q as descendants (note: a node is a descendant of itself).

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root) {
    return null;
  }

  // first case
  if (root === p || root === q) {
    return root;
  }

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  // second case
  if (left && right) {
    return root;
  }

  // third case
  if (left) {
    return left;
  }

  return right;
};

//Given a binary tree, find its minimum depth.
// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
// Note: A leaf is a node with no children.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 2

var minDepth = function (root) {
  if (!root) return 0;
  if (!root.left) return minDepth(root.right) + 1;
  if (!root.right) return minDepth(root.left) + 1;
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};


// Maximum Difference Between Node and Ancestor
// Solution
// Given the root of a binary tree, find the maximum value v for which there exist different nodes a and b where v = |a.val - b.val| and a is an ancestor of b.
// A node a is an ancestor of b if either: any child of a is equal to b or any child of a is an ancestor of b.

// Example 1:
// Input: root = [8,3,10,1,6,null,14,null,null,4,7,13]
// Output: 7
// Explanation: We have various ancestor-node differences, some of which are given below :
// |8 - 3| = 5
// |3 - 7| = 4
// |8 - 1| = 7
// |10 - 13| = 3
// Among all possible differences, the maximum value of 7 is obtained by |8 - 1| = 7.

var maxAncestorDiff = function (root) {
  if (root == null) {
    return 0;
  }

  function helper(node, curMax, curMin) {
    if (node == null) {
      return curMax - curMin;
    }
    curMax = Math.max(curMax, node.val);
    curMin = Math.min(curMin, node.val);
    let left = helper(node.left, curMax, curMin);
    let right = helper(node.right, curMax, curMin);
    return Math.max(left, right);
  }

  return helper(root, root.val, root.val);
};

//Given the root of a binary tree, return the length of the diameter of the tree.
// The diameter of a binary tree is the length of the longest path between any two nodes in a tree.
// This path may or may not pass through the root.
// The length of a path between two nodes is represented by the number of edges between them.

var diameterOfBinaryTree = function (root) {
  if (!root) {
    return 0;
  }
  let max = 0;

  const helper = root => {
    if (!root) {
      return 0;
    }

    const left = helper(root.left);
    const right = helper(root.right);

    max = Math.max(max, left + right);

    return 1 + Math.max(left, right);
  };

  helper(root);
  return max;
};