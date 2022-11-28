class BinaryTree {
  constructor() {
    this.root = null
  }

  add(value) {
    const newNode = new TreeNode(value)
    if (!this.root) {
      this.root = new TreeNode(value)
      return
    }
    let currentNode = this.root
    while(currentNode) {
      if(value < currentNode.value) {
        if(!currentNode.left) {
          currentNode.left = newNode
          return
        }
        currentNode = currentNode.left
      } else {
        if(!currentNode.right) {
          currentNode.right = newNode
          return
        }
        currentNode = currentNode.right
      }
    }
  }

  preorder(node,cb) {
    if(!node) return
    if(cb) cb(node.value)
    this.preorder(node.left, cb)
    this.preorder(node.right, cb)
  }

  inOrder(node,cb) {
    if(!node) return
    this.inOrder(node.left, cb)
    if(cb) cb(node.value)
    this.inOrder(node.right, cb)
  }

  postOrder(node,cb) {
    if(!node) return
    this.postOrder(node.left, cb)
    this.postOrder(node.right, cb)
    if(cb) cb(node.value)
  }


  traverseDFS(cb, method) {
    if(method === "preorder") {
      return this.preorder(this.root, cb)
    }
    if(method === "inOrder") {
      return this.inOrder(this.root, cb)
    }
    if(method === "postOrder") {
      return this.postOrder(this.root, cb)
    }
  }

  traverseBFS(cb) {
    const queue = [this.root]
    while(queue.length) {
      const node = queue.shift()
      if(cb) cb(node.value)
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }
  }

}

class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

const tree = new BinaryTree()
tree.add(5)
tree.add(4)
tree.add(6)
tree.add(2)
console.log(tree.add(7));
console.log(tree);
// console.log(tree.traverseDFS((value) => console.log(value), "postOrder"))
console.log(tree.traverseBFS((value) => console.log(value)))