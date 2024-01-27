export default function mapSeq<T>(iterable: Iterable<T>, mappers: ((value: T) => T)[]): IterableIterator<T> {
  const collectionIterator = iterable[Symbol.iterator]();

  return {
    next(): IteratorResult<T> {
      const { done, value } = collectionIterator.next();
      if (done) return { done: true, value: undefined };

      const mappersIterator = mappers[Symbol.iterator]();
      let mappersIteratorResult = mappersIterator.next();
      let result: T = value;
      while (!mappersIteratorResult.done) {
        result = mappersIteratorResult.value(result);
        mappersIteratorResult = mappersIterator.next();
      }

      return { done: false, value: result };
    },
    [Symbol.iterator](): IterableIterator<T> {
      return this;
    },
  };
}
