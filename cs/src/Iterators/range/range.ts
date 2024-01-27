import type { StrOrNum, RangeType } from './range.types'

export default class Range<T extends string | number> implements Iterable<StrOrNum<T>> {
  #start: number = 0

  #end: number = 0

  #rangeType: RangeType = 'number'

  #isReversed: boolean = false

  constructor(start: T, end: T) {
    if (typeof start === 'number' && typeof end === 'number') {
      this.#start = start
      this.#end = end
      this.#rangeType = 'number'
    }

    if (typeof start === 'string' && typeof end === 'string') {
      this.#start = start.codePointAt(0) ?? 0
      this.#end = end.codePointAt(0) ?? 0
      this.#rangeType = 'string'
    }

    if (this.#start > this.#end) {
      this.#isReversed = true
    }
  }

  reverse(): IterableIterator<StrOrNum<T>> {
    const start = this.#rangeType === 'number' ? this.#start : String.fromCodePoint(this.#start)
    const end = this.#rangeType === 'number' ? this.#end : String.fromCodePoint(this.#end)

    const reversedRange = new Range(end, start)
    return <any>reversedRange[Symbol.iterator]()
  }

  [Symbol.iterator](): IterableIterator<StrOrNum<T>> {
    let count = this.#start
    const step = this.#isReversed ? -1 : 1

    return {
      next: (): IteratorResult<StrOrNum<T>> => {
        if ((this.#isReversed && count < this.#end) || (!this.#isReversed && count > this.#end)) {
          return { done: true, value: undefined }
        }

        const value = <any>(this.#rangeType === 'number' ? count : String.fromCodePoint(count))
        count += step
        return { done: false, value }
      },
      [Symbol.iterator](): IterableIterator<StrOrNum<T>> {
        return this
      },
    }
  }
}
