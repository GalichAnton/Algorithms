import type { Task, TaskProcessorOptions, Callback } from './task-processor.types';

export default class TaskProcessor {
  #poolExecTime: number = 100;

  #taskExecTime: number = this.#poolExecTime;

  #idleTime: number = 100;

  #taskPool: Set<Task> = new Set();

  #isStarted: boolean = false;

  constructor({ poolExecTime, idleTime }: TaskProcessorOptions = {}) {
    if (poolExecTime != null) {
      this.#poolExecTime = poolExecTime;
      this.#taskExecTime = this.#poolExecTime;
    }
    if (idleTime != null) this.#idleTime = idleTime;
  }

  *#createWorker<T>(iterable: Iterable<T>, callback: Callback<T>): Generator<'timeout' | Error> {
    const iterator = iterable[Symbol.iterator]();
    let startTime = performance.now();
    let index = 0;

    while (true) {
      const { done, value } = iterator.next();

      if (done) return;

      if (performance.now() - startTime > this.#taskExecTime) {
        yield 'timeout';
        startTime = performance.now();
      }

      try {
        callback(value, index, iterable);
      } catch (error) {
        if (error instanceof Error) yield error;
      }

      index += 1;
    }
  }

  #iterate(): void {
    this.#taskExecTime = this.#poolExecTime / (this.#taskPool.size || 1);

    for (const task of this.#taskPool.values()) {
      const { done, value } = task.worker.next();

      if (done) {
        this.#taskPool.delete(task);
        task.resolve();
      }

      if (value instanceof Error) task.reject(value);
    }

    setTimeout(() => {
      if (this.#taskPool.size > 0) {
        this.#iterate();
      } else {
        this.#isStarted = false;
      }
    }, this.#idleTime);
  }

  #execute(): void {
    if (!this.#isStarted) {
      this.#isStarted = true;
      setTimeout(this.#iterate.bind(this));
    }
  }

  forEach<T>(iterable: Iterable<T>, callback: Callback<T>): Promise<void> {
    if (typeof iterable[Symbol.iterator] !== 'function') {
      throw new TypeError('Object is not iterable');
    }

    if (typeof callback !== 'function') {
      throw new TypeError('Callback is not a type of function');
    }

    const worker = this.#createWorker(iterable, callback);

    return new Promise((resolve, reject) => {
      this.#taskPool.add({ worker, resolve, reject });
      this.#execute();
    });
  }
}
