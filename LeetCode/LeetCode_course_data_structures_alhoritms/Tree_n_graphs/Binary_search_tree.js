//Example 1: 938. Range Sum of BST
// Given the root node of a binary search tree and two integers low and high,
// return the sum of values of all nodes with a value in the inclusive range [low, high].

var rangeSumBST = function (root, low, high) {
  if (!root) {
    return 0;
  }

  let ans = 0;
  if (low <= root.val && root.val <= high) {
    ans += root.val;
  }
  if (low < root.val) {
    ans += rangeSumBST(root.left, low, high);
  }
  if (root.val < high) {
    ans += rangeSumBST(root.right, low, high);
  }

  return ans;
};

var iterRangeSumBST = function (root, low, high) {
  let stack = [root];
  let ans = 0;
  while (stack.length) {
    let node = stack.pop();
    if (low <= node.val && node.val <= high) {
      ans += node.val;
    }
    if (node.left && low < node.val) {
      stack.push(node.left);
    }
    if (node.right && node.val < high) {
      stack.push(node.right);
    }
  }

  return ans;
};

//Example 2: 530. Minimum Absolute Difference in BST
//Given the root of a BST, return the minimum absolute difference between the values of any two different nodes in the tree.

var getMinimumDifference = function (root) {
  let dfs = node => {
    if (!node) {
      return [];
    }

    let left = dfs(node.left);
    let right = dfs(node.right);

    left.push(node.val);
    left.push(...right);
    return left
  }

  let values = dfs(root);
  let ans = Infinity;
  for (let i = 1; i < values.length; i++) {
    ans = Math.min(ans, values[i] - values[i - 1]);
  }

  return ans;
};

//Example 3: 98. Validate Binary Search Tree
// Given the root of a binary tree, determine if it is a valid BST.

var isValidBST = function (root) {
  let dfs = (node, small, large) => {
    if (!node) {
      return true;
    }

    if (small >= node.val || node.val >= large) {
      return false;
    }

    let left = dfs(node.left, small, node.val);
    let right = dfs(node.right, node.val, large);

    // tree is a bst if left and right subtrees are also BSTs
    return left && right;
  }

  return dfs(root, -Infinity, Infinity);
};

var iterIsValidBST = function (root) {
  let stack = [[root, -Infinity, Infinity]];
  while (stack.length) {
    let [node, small, large] = stack.pop();
    if (small >= node.val || node.val >= large) {
      return false;
    }

    if (node.left) {
      stack.push([node.left, small, node.val]);
    }
    if (node.right) {
      stack.push([node.right, node.val, large]);
    }
  }

  return true;
};

//You are given the root node of a binary search tree (BST) and a value to insert into the tree.
// Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.
// Notice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.

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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val);

  // insert into the right subtree
  if (val > root.val) root.right = insertIntoBST(root.right, val);
  // insert into the left subtree
  else root.left = insertIntoBST(root.left, val);
  return root;
};


//Given the root of a binary search tree and a target value, return the value in the BST that is closest to the target

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
 * @param {number} target
 * @return {number}
 */
var closestValue = function (root, target) {
  let closest = root.value;
  const traverse = (node) => {
    if (node === null) return;
    if (Math.abs(target - closest) > Math.abs(target - node.value)) {
      closest = node.value;
    }

    if (target < node.value) {
      console.log('left')
      traverse(node.left)
    } else {
      console.log('right')
      traverse(node.right)
    }

  }
  traverse(root)
  return closest;
};