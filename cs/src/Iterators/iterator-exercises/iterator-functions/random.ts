export default function random(min: number, max: number): IterableIterator<number> {
  return {
    next(): IteratorResult<number> {
      const value = Math.floor(Math.random() * (max - min + 1) + min);
      return { done: false, value };
    },
    [Symbol.iterator](): IterableIterator<number> {
      return this;
    },
  };
}
