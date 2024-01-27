export default function filter<T>(iterable: Iterable<T>, predicate: (value: T) => boolean): IterableIterator<T> {
  const iterator = iterable[Symbol.iterator]();

  return {
    next(): IteratorResult<T> {
      const { done, value } = iterator.next();
      if (done) return { done: true, value: undefined };

      if (predicate(value)) return { done: false, value };
      return this.next();
    },
    [Symbol.iterator](): IterableIterator<T> {
      return this;
    },
  };
}
