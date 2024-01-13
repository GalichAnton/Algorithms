import { Optional } from '../../utils/common.types';
import { DoublyLinkedList } from '../../homework-01';

export default class DynamicArray<T = unknown> implements Iterable<T> {
  #list: DoublyLinkedList<Optional<T>[]> = new DoublyLinkedList<Optional<T>[]>();

  #length: number = 0;

  #chunkSize: number;

  constructor(size: number) {
    if (size <= 0 || !Number.isInteger(size)) {
      throw new Error('Invalid chunk size value provided');
    }

    this.#chunkSize = size;
  }

  get length(): number {
    return this.#length;
  }

  #addChunk(): Optional<T>[] {
    const newChunk = Array<Optional<T>>(this.#chunkSize);
    this.#list.push(newChunk);
    return newChunk;
  }

  #getElementPosition(index: number): [number, Optional<T>[]] | null {
    const iterator = this.#list.values();
    const chunkElementIndex = index % this.#chunkSize;
    let chunkCounter = Math.floor(index / this.#chunkSize);
    let currentChunk = iterator.next().value;

    while (chunkCounter > 0) {
      currentChunk = iterator.next().value;
      chunkCounter -= 1;
    }

    if (!currentChunk) {
      return null;
    }

    return [chunkElementIndex, currentChunk];
  }

  get(index: number): Optional<T> {
    const elementPosition = this.#getElementPosition(index);
    if (elementPosition === null) {
      return undefined;
    }

    const [lastElementIndex, lastChunk] = elementPosition;

    return lastChunk[lastElementIndex];
  }

  push(value: T): this {
    const lastElementPosition = this.#getElementPosition(this.#length - 1);
    if (lastElementPosition !== null) {
      const [lastElementIndex, lastChunk] = lastElementPosition;

      if (lastElementIndex < this.#chunkSize - 1) {
        lastChunk[lastElementIndex + 1] = value;
        this.#length += 1;

        return this;
      }
    }

    const lastChunk = this.#addChunk();
    lastChunk[0] = value;
    this.#length += 1;

    return this;
  }

  pop(): Optional<T> {
    const lastElementPosition = this.#getElementPosition(this.#length - 1);
    if (lastElementPosition === null) {
      return undefined;
    }

    const [lastElementIndex, lastChunk] = lastElementPosition;
    const lastElement = lastChunk[lastElementIndex];
    lastChunk[lastElementIndex] = undefined;
    this.#length -= 1;

    if (lastChunk[0] === undefined) {
      this.#list.pop();
    }

    return lastElement;
  }

  shift(): Optional<T> {
    const iterator = this.#list.values();
    let currentChunk = iterator.next().value;
    let firstElement: Optional<T>;

    // Array has no elements at all
    if (!currentChunk) {
      return firstElement;
    }

    [firstElement] = currentChunk;
    this.#length -= 1;
    // Array has the only element, removing empty chunk
    if (currentChunk[1] === undefined) {
      this.#list.pop();
      return firstElement;
    }

    let nextChunk = iterator.next().value;
    while (currentChunk) {
      for (let index = 0; index < this.#chunkSize - 1; index += 1) {
        currentChunk[index] = currentChunk[index + 1];
      }

      // There is no next chunk, nothing to move, so removing the last one in the chunk
      if (!nextChunk) {
        currentChunk[this.#chunkSize - 1] = undefined;
        return firstElement;
      }

      [currentChunk[this.#chunkSize - 1]] = nextChunk;
      // Next chunk has the only element, so removing chunk from the list
      if (nextChunk[1] === undefined) {
        this.#list.pop();
        return firstElement;
      }

      currentChunk = nextChunk;
      nextChunk = iterator.next().value;
    }

    return firstElement;
  }

  unshift(value: T): this {
    const iterator = this.#list.reversedValues();
    let currentChunk = iterator.next().value;
    let prevChunk: ReturnType<typeof iterator.next>['value'];

    // Array has no elements at all
    if (!currentChunk) {
      return this.push(value);
    }

    // Last chunk has no more space to move, creating the new one, moving last element from previous chunk
    if (currentChunk[this.#chunkSize - 1] !== undefined) {
      prevChunk = this.#addChunk();
      prevChunk[0] = currentChunk[this.#chunkSize - 1];
    }

    while (currentChunk) {
      for (let index = this.#chunkSize - 1; index > 0; index -= 1) {
        currentChunk[index] = currentChunk[index - 1];
      }

      prevChunk = currentChunk;
      currentChunk = iterator.next().value;

      // Current chunk is not a first chunk of an array, moving edge value and keep going
      if (currentChunk) {
        prevChunk[0] = currentChunk[this.#chunkSize - 1];

        // Otherwise putting new value on the first place of the first chunk
      } else {
        prevChunk[0] = value;
      }
    }

    this.#length += 1;

    return this;
  }

  map<U>(cb: (element: T, index: number, array: this) => U): DynamicArray<U> {
    const mappedArray = new DynamicArray<U>(this.#chunkSize);

    let index = 0;
    for (const element of this.values()) {
      mappedArray.push(cb(element, index, this));
      index += 1;
    }

    return mappedArray;
  }

  filter(cb: (element: T, index: number, array: this) => boolean): DynamicArray<T> {
    const filteredArray = new DynamicArray<T>(this.#chunkSize);

    let index = 0;
    for (const element of this.values()) {
      if (cb(element, index, this)) {
        filteredArray.push(element);
      }
      index += 1;
    }

    return filteredArray;
  }

  join(glue: string = ','): string {
    let stringifiedArray = '';

    for (const chunk of this.#list.values()) {
      let stringifiedChunk = '';

      for (let index = 0; index < this.#chunkSize; index += 1) {
        if (index > 0 && chunk[index] !== undefined) {
          stringifiedChunk += glue;
        }

        if (chunk[index] !== undefined) {
          stringifiedChunk += chunk[index];
        }
      }

      if (stringifiedArray.length > 0) {
        stringifiedArray += glue;
      }

      stringifiedArray += stringifiedChunk;
    }

    return stringifiedArray;
  }

  toString(): string {
    return this.join();
  }

  *values(): Generator<T> {
    for (const chunk of this.#list.values()) {
      for (let index = 0; index < this.#chunkSize; index += 1) {
        const value = chunk[index];

        if (value !== undefined) {
          yield value;
        }
      }
    }
  }

  [Symbol.iterator]() {
    return this.values();
  }
}
