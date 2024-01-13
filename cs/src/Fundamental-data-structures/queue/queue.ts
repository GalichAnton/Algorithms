import DoublyLinkedList from '../doubly-linked-list/doubly-linked-list'
import type { Nullable } from '../../utils/common-types'

export default class QueueImpl<T = unknown> {
  #list: DoublyLinkedList<T> = new DoublyLinkedList<T>()

  enqueue(value: T): this {
    this.#list.unshift(value)

    return this
  }

  dequeue(): Nullable<T> {
    const firstNode = this.#list.pop()

    return firstNode && firstNode.value
  }

  peek(): Nullable<T> {
    return this.#list.tail && this.#list.tail.value
  }
}
