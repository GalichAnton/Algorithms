import DoublyLinkedList from '../doubly-linked-list/doubly-linked-list'
import type { Nullable } from '../../utils/common-types'

export default class Deque<T = unknown> {
  #list: DoublyLinkedList<T> = new DoublyLinkedList<T>()

  insertLeft(value: T): this {
    this.#list.unshift(value)

    return this
  }

  removeLeft(): Nullable<T> {
    const firstNode = this.#list.shift()

    return firstNode && firstNode.value
  }

  insertRight(value: T): this {
    this.#list.push(value)

    return this
  }

  removeRight(): Nullable<T> {
    const lastNode = this.#list.pop()

    return lastNode && lastNode.value
  }

  peekLeft(): Nullable<T> {
    return this.#list.head && this.#list.head.value
  }

  peekRight(): Nullable<T> {
    return this.#list.tail && this.#list.tail.value
  }
}
