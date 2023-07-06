class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
} 

const treeOne = new TreeNode(4);
treeOne.left = new TreeNode(2);
treeOne.right = new TreeNode(6);
treeOne.left.left = new TreeNode(1);
treeOne.left.right = new TreeNode(3);

const treeTwo = new TreeNode(1);
treeTwo.left = new TreeNode(0);
treeTwo.right = new TreeNode(48);
treeTwo.right.left = new TreeNode(12);
treeTwo.right.right = new TreeNode(49);

const treeThree = new TreeNode(1);
treeThree.right = new TreeNode(3);
treeThree.right.left = new TreeNode(2);





const getMinDiff = (root) => {
  const stack = [root]
  let minDiff = Infinity
  
  while(stack.length) {
    const node = stack.pop()
    if(node.left) {
      minDiff = Math.min(minDiff,Math.abs(node.value - node.left.value))
      stack.push(node.left)
    }
    if(node.right) {
      minDiff = Math.min(minDiff,Math.abs(node.value - node.right.value))
      stack.push(node.right)
    }
  }
  
  return minDiff
  
}





console.log(getMinDiff(treeOne)); // 1
console.log(getMinDiff(treeTwo)); // 1
console.log(getMinDiff(treeThree)); // 1
