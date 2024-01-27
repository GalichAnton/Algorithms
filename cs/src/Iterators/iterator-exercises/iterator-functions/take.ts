export default function take<T>(iterable: Iterable<T>, count: number): IterableIterator<T> {
  const iterator = iterable[Symbol.iterator]();
  let iterationsCount = count;

  return {
    next(): IteratorResult<T> {
      const { done, value } = iterator.next();
      if (done || iterationsCount === 0) return { done: true, value: undefined };

      iterationsCount -= 1;
      return { done: false, value };
    },
    [Symbol.iterator](): IterableIterator<T> {
      return this;
    },
  };
}
