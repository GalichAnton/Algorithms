import type { Nullable } from '../../utils/common.types';
import type { IterableBinaryTree } from './binary-tree-set.interface';

export default class BinaryTreeSetNode<T> implements IterableBinaryTree<T> {
  leftChild: Nullable<BinaryTreeSetNode<T>> = null;

  rightChild: Nullable<BinaryTreeSetNode<T>> = null;

  constructor(public value: T) {}

  *inorder(): Generator<T> {
    if (this.leftChild) yield* this.leftChild.inorder();

    yield this.value;

    if (this.rightChild) yield* this.rightChild.inorder();
  }

  *preorder(): Generator<T> {
    yield this.value;

    if (this.leftChild) yield* this.leftChild.preorder();

    if (this.rightChild) yield* this.rightChild.preorder();
  }

  *postorder(): Generator<T> {
    if (this.leftChild) yield* this.leftChild.postorder();

    if (this.rightChild) yield* this.rightChild.postorder();

    yield this.value;
  }
}
