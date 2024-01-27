import type { ExtractIterablesType } from '../iterator.types';

export default function zip<T extends Iterable<any>[]>(...iterables: T): IterableIterator<ExtractIterablesType<T>[]> {
  const iterators = iterables.map((iter) => iter[Symbol.iterator]());

  return {
    next(): IteratorResult<ExtractIterablesType<T>[]> {
      const iteratorsValue: ExtractIterablesType<T>[] = [];
      for (const iteratorItem of iterators) {
        const { done, value } = iteratorItem.next();
        if (done) return { done: true, value: undefined };

        iteratorsValue.push(value);
      }

      return iteratorsValue.length > 0 ? { done: false, value: iteratorsValue } : { done: true, value: undefined };
    },
    [Symbol.iterator](): IterableIterator<ExtractIterablesType<T>[]> {
      return this;
    },
  };
}
