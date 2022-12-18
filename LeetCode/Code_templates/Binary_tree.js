//Recursive DFS
let dfs = root => {
  if (!root) {
    return;
  }

  let ans = 0;

  // do logic
  dfs(root.left);
  dfs(root.right);
  return ans;
}

// Iterative DFS
let dfs = root => {
  let stack = [root];
  let ans = 0;

  while (stack.length) {
    let node = stack.pop();
    // do logic
    if (node.left) {
      stack.push(node.left);
    }
    if (node.right) {
      stack.push(node.right);
    }
  }

  return ans;
}

// BFS
let fn = root => {
  let queue = [root];
  let ans = 0;

  while (queue.length) {
    let currentLength = queue.length;
    // do logic for current level

    let nextQueue = [];

    for (let i = 0; i < currentLength; i++) {
      let node = queue[i];
      // do logic
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
}