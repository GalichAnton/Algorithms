export interface IterableBinaryTree<T> {
  inorder(): IterableIterator<T>;
  preorder(): IterableIterator<T>;
  postorder(): IterableIterator<T>;
}

export type Comparator<T> = (value: T, valueToCompare: T) => number;
