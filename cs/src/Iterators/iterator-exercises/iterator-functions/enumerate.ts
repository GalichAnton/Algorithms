type Indexed<T> = [number, T]

export default function enumerate<T>(iterable: Iterable<T>): IterableIterator<Indexed<T>> {
  const iterator = iterable[Symbol.iterator]()
  let index = 0

  return {
    next(): IteratorResult<Indexed<T>> {
      const { done, value } = iterator.next()
      if (done) return { done: true, value: undefined }

      const pair: Indexed<T> = [index, value]
      index += 1

      return { done: false, value: pair }
    },
    [Symbol.iterator](): IterableIterator<Indexed<T>> {
      return this
    },
  }
}
