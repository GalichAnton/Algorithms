import type { Nullable } from '../../utils/common-types';

export default class DoublyLinkedListNode<T = unknown> {
  prev: Nullable<DoublyLinkedListNode<T>> = null;

  next: Nullable<DoublyLinkedListNode<T>> = null;

  constructor(public value: T) {}
}