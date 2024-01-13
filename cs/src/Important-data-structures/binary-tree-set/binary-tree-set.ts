import BinaryTreeSetNode from './binary-tree-set-node';
import { Queue } from '../../homework-01';
import type { Nullable, Optional } from '../../utils/common.types';
import type { IterableBinaryTree, Comparator } from './binary-tree-set.interface';

export default class BinaryTreeSet<T = unknown> implements Iterable<T>, IterableBinaryTree<T> {
  #root: Nullable<BinaryTreeSetNode<T>> = null;

  // eslint-disable-next-line class-methods-use-this
  #comparator: Comparator<T> = (value: T, valueToCompare: T): number => {
    if (value === valueToCompare) return 0;
    return value < valueToCompare ? 1 : -1;
  };

  static #getSuccessor<T>(node: BinaryTreeSetNode<T>): BinaryTreeSetNode<T> {
    let succersorParentNode = node;
    let successorNode = node;
    let currentNode = node.rightChild;

    while (currentNode !== null) {
      succersorParentNode = successorNode;
      successorNode = currentNode;
      currentNode = currentNode.leftChild;
    }

    if (successorNode !== node.rightChild) {
      succersorParentNode.leftChild = successorNode.rightChild;
      successorNode.rightChild = node.rightChild;
    }

    return successorNode;
  }

  static #getIterator<T>(iterable?: Iterator<T>): IterableIterator<T> {
    return {
      [Symbol.iterator](): IterableIterator<T> {
        return this;
      },
      next(): IteratorResult<T, Optional<T>> {
        if (iterable) {
          const { done, value } = iterable.next();
          if (done) return { done: true, value: undefined };

          return { done: false, value };
        }

        return { done: true, value: undefined };
      },
    };
  }

  constructor(iterable?: Iterable<T>, comparator?: Comparator<T>) {
    if (iterable == null) return;

    if (typeof iterable[Symbol.iterator] !== 'function') {
      throw new TypeError('Object is not iterable');
    }

    if (comparator != null) {
      if (typeof comparator !== 'function') {
        throw new TypeError('Comparator must be a function');
      }

      this.#comparator = comparator;
    }

    for (const element of iterable) {
      this.add(element);
    }
  }

  add(newValue: T): this {
    if (this.#root === null) {
      this.#root = new BinaryTreeSetNode(newValue);
      return this;
    }

    let currentNode: Nullable<BinaryTreeSetNode<T>> = this.#root;
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const comparisionResult = this.#comparator(currentNode.value, newValue);
      if (comparisionResult === 0) return this;

      const parentNode = currentNode;
      if (comparisionResult === -1) {
        currentNode = currentNode.leftChild;
        if (currentNode === null) {
          parentNode.leftChild = new BinaryTreeSetNode(newValue);
          return this;
        }
      } else {
        currentNode = currentNode.rightChild;
        if (currentNode === null) {
          parentNode.rightChild = new BinaryTreeSetNode(newValue);
          return this;
        }
      }
    }
  }

  has(value: T): boolean {
    let currentNode = this.#root;

    while (currentNode) {
      const comparisionResult = this.#comparator(currentNode.value, value);
      if (comparisionResult === 0) return true;

      currentNode = comparisionResult > 0 ? currentNode.rightChild : currentNode.leftChild;
    }

    return false;
  }

  remove(value: T): boolean {
    if (this.#root === null) return false;

    let currentNode: Nullable<BinaryTreeSetNode<T>> = this.#root;
    let parentNode: Nullable<BinaryTreeSetNode<T>> = this.#root;
    let isLeftBranch = false;

    // Searching node to delete, if found - saving it into currentNode, parent - into parentNode
    while (this.#comparator(currentNode.value, value) !== 0) {
      parentNode = currentNode;

      if (this.#comparator(currentNode.value, value) > 0) {
        isLeftBranch = false;
        currentNode = currentNode.rightChild;
      } else {
        isLeftBranch = true;
        currentNode = currentNode.leftChild;
      }

      if (currentNode === null) return false;
    }

    // Node to delete is a leaf
    if (currentNode.leftChild === null && currentNode.rightChild === null) {
      if (currentNode === this.#root) {
        currentNode = null;
      } else if (isLeftBranch) {
        parentNode.leftChild = null;
      } else {
        parentNode.rightChild = null;
      }
      // Node to delete has a left child
    } else if (currentNode.rightChild === null) {
      if (currentNode === this.#root) {
        this.#root = currentNode.leftChild;
      } else if (isLeftBranch) {
        parentNode.leftChild = currentNode.leftChild;
      } else {
        parentNode.rightChild = currentNode.leftChild;
      }
      // Node to delete has a right child
    } else if (currentNode.leftChild === null) {
      if (currentNode === this.#root) {
        this.#root = currentNode.rightChild;
      } else if (isLeftBranch) {
        parentNode.leftChild = currentNode.rightChild;
      } else {
        parentNode.rightChild = currentNode.rightChild;
      }
      // Node to delete has both children, searching for successor
    } else {
      const successor = BinaryTreeSet.#getSuccessor(currentNode);
      if (currentNode === this.#root) {
        this.#root = successor;
      } else if (isLeftBranch) {
        parentNode.leftChild = successor;
      } else {
        parentNode.rightChild = successor;
      }

      successor.leftChild = currentNode.leftChild;
    }

    return true;
  }

  getMin(): Nullable<T> {
    let currentNode = this.#root;

    while (currentNode?.leftChild) {
      currentNode = currentNode.leftChild;
    }

    return currentNode && currentNode.value;
  }

  getMax(): Nullable<T> {
    let currentNode = this.#root;

    while (currentNode?.rightChild) {
      currentNode = currentNode.rightChild;
    }

    return currentNode && currentNode.value;
  }

  clear(): this {
    this.#root = null;

    return this;
  }

  inorder(): IterableIterator<T> {
    return BinaryTreeSet.#getIterator<T>(this.#root?.inorder());
  }

  preorder(): IterableIterator<T> {
    return BinaryTreeSet.#getIterator<T>(this.#root?.preorder());
  }

  postorder(): IterableIterator<T> {
    return BinaryTreeSet.#getIterator<T>(this.#root?.postorder());
  }

  breadsFirst(): IterableIterator<T> {
    const queue = new Queue<Nullable<BinaryTreeSetNode<T>>>();
    queue.enqueue(this.#root);

    return {
      [Symbol.iterator](): IterableIterator<T> {
        return this;
      },
      next(): IteratorResult<T, Optional<T>> {
        const currentNode = queue.dequeue();
        if (!currentNode) return { done: true, value: undefined };

        if (currentNode.leftChild) queue.enqueue(currentNode.leftChild);
        if (currentNode.rightChild) queue.enqueue(currentNode.rightChild);
        return { done: false, value: currentNode.value };
      },
    };
  }

  [Symbol.iterator](): IterableIterator<T> {
    return this.inorder();
  }
}
