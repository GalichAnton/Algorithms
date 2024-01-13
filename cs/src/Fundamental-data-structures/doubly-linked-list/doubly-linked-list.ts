import DoublyLinkedListNode from './doubly-linked-list-node'
import { Nullable } from '../../utils/common-types'
import { ListIterationDirection } from './doubly-linked-list.types'

export default class DoublyLinkedList<T> {
  #head: Nullable<DoublyLinkedListNode<T>> = null

  #tail: Nullable<DoublyLinkedListNode<T>> = null

  constructor(iterable?: Iterable<T>) {
    if (iterable == null) {
      return
    }

    if (typeof iterable[Symbol.iterator] !== 'function') {
      throw new Error('Object is not iterable')
    }

    for (const value of iterable) {
      this.push(value)
    }
  }

  *#iterateListNodes(direction: ListIterationDirection = 'forward'): Generator<DoublyLinkedListNode<T>> {
    let currentNode = direction === 'forward' ? this.#head : this.#tail

    while (currentNode !== null) {
      yield currentNode
      currentNode = direction === 'forward' ? currentNode.next : currentNode.prev
    }

    return null
  }

  get head(): Nullable<DoublyLinkedListNode<T>> {
    return this.#head
  }

  get tail(): Nullable<DoublyLinkedListNode<T>> {
    return this.#tail
  }

  push(value: T): DoublyLinkedList<T> {
    const newNode = new DoublyLinkedListNode(value)

    if (!this.#head) {
      this.#head = newNode
    }

    if (this.#tail) {
      this.#tail.next = newNode
      newNode.prev = this.#tail
    }

    this.#tail = newNode

    return this
  }

  pop(): Nullable<DoublyLinkedListNode<T>> {
    if (!this.#tail) {
      return null
    }

    const lastNode = this.#tail
    if (!lastNode.prev) {
      this.#head = null
    } else {
      lastNode.prev.next = null
    }

    this.#tail = lastNode.prev

    return lastNode
  }

  clean(): this {
    this.#head = null
    this.#tail = null

    return this
  }

  unshift(value: T): this {
    const newNode = new DoublyLinkedListNode(value)

    if (!this.#tail) {
      this.#tail = newNode
    }

    if (this.#head) {
      newNode.next = this.#head
      this.#head.prev = newNode
    }

    this.#head = newNode

    return this
  }

  shift(): Nullable<DoublyLinkedListNode<T>> {
    if (!this.#head) {
      return null
    }

    const firstNode = this.#head

    if (!firstNode.next) {
      this.#tail = null
    } else {
      firstNode.next.prev = null
    }

    this.#head = firstNode.next

    return firstNode
  }

  find(cb: (value: T) => boolean): Nullable<DoublyLinkedListNode<T>> {
    for (const currentNode of this.#iterateListNodes()) {
      if (cb(currentNode.value)) {
        return currentNode
      }
    }

    return null
  }

  insertBefore(cb: (value: T) => boolean, newValue: T): boolean {
    const nodeBefore = this.find(cb)

    if (!nodeBefore) {
      return false
    }

    if (nodeBefore.prev === null) {
      this.unshift(newValue)

      return true
    }

    const newNode = new DoublyLinkedListNode(newValue)
    newNode.next = nodeBefore
    newNode.prev = nodeBefore.prev
    newNode.prev.next = newNode
    nodeBefore.prev = newNode

    return true
  }

  insertAfter(cb: (value: T) => boolean, newValue: T): boolean {
    const nodeAfter = this.find(cb)

    if (!nodeAfter) {
      return false
    }

    if (nodeAfter.next === null) {
      this.push(newValue)
      return true
    }

    const newNode = new DoublyLinkedListNode(newValue)
    newNode.next = nodeAfter.next
    nodeAfter.next.prev = newNode
    newNode.prev = nodeAfter
    nodeAfter.next = newNode

    return true
  }

  remove(cb: (value: T) => boolean): Nullable<DoublyLinkedListNode<T>> {
    const nodeToRemove = this.find(cb)

    if (nodeToRemove) {
      if (nodeToRemove.prev === null) {
        return this.shift()
      }

      if (nodeToRemove.next === null) {
        return this.pop()
      }

      ;[nodeToRemove.next.prev, nodeToRemove.prev.next] = [nodeToRemove.prev, nodeToRemove.next]

      return nodeToRemove
    }

    return null
  }

  replace(cb: (value: T) => boolean, newValue: T): boolean {
    const nodeToReplace = this.find(cb)

    if (!nodeToReplace) {
      return false
    }

    nodeToReplace.value = newValue

    return true
  }

  reverse(): this {
    if (this.#head === this.#tail) {
      return this
    }

    const iterator = this.#iterateListNodes('backward')
    let currentNode = iterator.next().value

    this.#tail = this.#head
    this.#head = currentNode

    while (currentNode) {
      const prevNode = iterator.next().value

      if (currentNode) {
        currentNode.prev = currentNode.next
        currentNode.next = prevNode
      }

      currentNode = prevNode
    }

    return this
  }

  *values(): Generator<T> {
    for (const node of this.#iterateListNodes()) {
      yield node.value
    }
  }

  *reversedValues(): Generator<T> {
    for (const node of this.#iterateListNodes('backward')) {
      yield node.value
    }
  }

  [Symbol.iterator](): Generator<T> {
    return this.values()
  }
}
