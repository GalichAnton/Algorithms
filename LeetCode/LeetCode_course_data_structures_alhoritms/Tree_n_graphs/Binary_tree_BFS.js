// BFS code implementations

let printAllNodes = root => {
  let queue = [root];
  while (queue.length) {
    let nodesInCurrentLevel = queue.length;
    let nextQueue = [];

    for (let i = 0; i < nodesInCurrentLevel; i++) {
      let node = queue[i];

      // do some logic here on the current node
      console.log(node.val);

      // put the next level onto the queue
      if (node.left) {
        nextQueue.push(node.left);
      }
      if (node.right) {
        nextQueue.push(node.right);
      }
    }

    queue = nextQueue;
  }
}

//Example 1: 199. Binary Tree Right Side View
// Given the root of a binary tree, imagine yourself standing on the right side of it.
// Return the values of the nodes you can see ordered from top to bottom.

var rightSideView = function(root) {
  if (!root) {
    return [];
  }

  let ans = [];
  let queue = [root];

  while (queue.length) {
    let nodesInCurrentLevel = queue.length;
    let nextQueue = [];

    ans.push(queue[queue.length - 1].val); // this is the rightmost node for the current level
    for (let i = 0; i < nodesInCurrentLevel; i++) {
      let node = queue[i];
      if (node.left) {
        nextQueue.push(node.left);
      }
      if (node.right) {
        nextQueue.push(node.right);
      }
    }

    queue = nextQueue;
  }

  return ans;
};
