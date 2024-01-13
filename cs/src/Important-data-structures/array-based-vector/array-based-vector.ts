/* eslint-disable no-param-reassign */
import type { Optional } from '../../utils/common-types'
import type { Direction } from './array-based-vector.types'

export default class Vector<T = unknown> implements Iterable<T> {
  #length: number = 0

  #capacityGrowCoeff: number = 2

  #capacity: number

  #buffer: Optional<T>[]

  constructor(size: number = 10) {
    if (size <= 0 || !Number.isInteger(size)) {
      throw new Error('Invalid capacity value provided')
    }

    this.#capacity = size
    this.#buffer = Array<Optional<T>>(size)
  }

  get length(): number {
    return this.#length
  }

  #extendBuffer(multiplier: number = 1): void {
    this.#capacity *= this.#capacityGrowCoeff * multiplier
    const extendedBuffer = Array<Optional<T>>(this.#capacity)

    let index = this.#length - 1
    while (index >= 0) {
      extendedBuffer[index] = this.#buffer[index]
      index -= 1
    }

    this.#buffer = extendedBuffer
  }

  #checkoutBufferExtension(requiredLength: number): void {
    if (this.#capacity < this.#length + requiredLength) {
      const multiplier = Math.floor((this.#length + requiredLength - 1) / this.#capacity)
      this.#extendBuffer(multiplier)
    }
  }

  #moveBy(direction: Direction, step: number, start: number = 0): void {
    if (step === 0) return

    const isForward = direction === 1
    if (isForward) {
      this.#checkoutBufferExtension(step)
    }

    let index = isForward ? this.#length - 1 : start
    for (index; isForward ? index >= start : index < this.#length; index -= direction) {
      if (this.#buffer[index] !== undefined) {
        const minIndexValue = Math.max(start, index + step * direction)
        this.#buffer[minIndexValue] = this.#buffer[index]
        this.#buffer[index] = undefined
      }
    }
  }

  get(index: number): Optional<T> {
    return this.#buffer[index]
  }

  push(...values: T[]): this {
    this.#checkoutBufferExtension(values.length)

    for (let index = 0; index < values.length; index += 1) {
      this.#buffer[this.#length + index] = values[index]
    }
    this.#length += values.length

    return this
  }

  pop(): Optional<T> {
    const lastValue = this.#buffer[this.#length - 1]
    if (lastValue === undefined) return lastValue

    this.#buffer[this.#length - 1] = undefined
    this.#length -= 1

    return lastValue
  }

  shift(): Optional<T> {
    const [firstValue] = this.#buffer
    this.#moveBy(-1, 1)
    this.#length -= 1

    return firstValue
  }

  unshift(...values: T[]): this {
    this.#checkoutBufferExtension(values.length)

    this.#moveBy(1, values.length)

    for (let index = 0; index < values.length; index += 1) {
      this.#buffer[index] = values[index]
    }
    this.#length += values.length

    return this
  }

  splice(start?: number, removeCount?: number, ...values: T[]): Vector<T> {
    const removedValues = new Vector<T>(this.#capacity)

    if (start === undefined || start > this.#length) return removedValues

    if (start < 0) start = this.#length + start

    if (removeCount === undefined) removeCount = start < 0 ? Math.abs(start) : this.#length - start

    if (removeCount <= 0) {
      this.#moveBy(1, values.length, start)

      for (let index = 0; index < values.length; index += 1) {
        this.#buffer[start + index] = values[index]
      }

      this.#length += values.length
    } else {
      const moveDirection: Direction = values.length - removeCount > 0 ? 1 : -1
      const offset = Math.abs(values.length - removeCount)

      for (let index = start; index < start + removeCount; index += 1) {
        removedValues.push(<T>this.#buffer[index])
      }

      this.#moveBy(moveDirection, offset, start)

      for (let index = 0; index < values.length; index += 1) {
        this.#buffer[index + start] = values[index]
      }

      this.#length += values.length - removeCount
      if (values.length === 0) {
        this.#buffer[this.#length] = undefined
      }
    }

    return removedValues
  }

  join(glue: string = ','): string {
    let stringifiedVector = ''

    for (let index = 0; index < this.#length; index += 1) {
      if (index > 0 && this.#buffer[index] !== undefined) {
        stringifiedVector += glue
      }

      if (this.#buffer[index] !== undefined) {
        stringifiedVector += String(this.#buffer[index])
      }
    }

    return stringifiedVector
  }

  map<U>(cb: (element: T, index: number, vector: this) => U): Vector<U> {
    const mappedVector = new Vector<U>(this.#capacity)

    let index = 0
    for (const element of this.values()) {
      mappedVector.push(cb(element, index, this))
      index += 1
    }

    return mappedVector
  }

  filter(cb: (element: T, index: number, vector: this) => boolean): Vector<T> {
    const filteredArray = new Vector<T>(this.#capacity)

    let index = 0
    for (const element of this.values()) {
      if (cb(element, index, this)) {
        filteredArray.push(element)
      }
      index += 1
    }

    return filteredArray
  }

  toString(): string {
    return this.join()
  }

  *values(): Generator<T> {
    for (let index = 0; index < this.#length; index += 1) {
      const value = this.#buffer[index]

      if (value !== undefined) {
        yield value
      }
    }
  }

  [Symbol.iterator]() {
    return this.values()
  }
}
