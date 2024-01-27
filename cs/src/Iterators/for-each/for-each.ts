import type { Callback } from './for-each.types'

class TaskWorker<T> {
  #execTime: number = 100

  #idleTime: number = 100

  #task: Generator<'timeout' | Error>

  constructor(iterable: Iterable<T>, callback: Callback<T>) {
    this.#task = this.#createWorker(iterable, callback)
  }

  *#createWorker(iterable: Iterable<T>, callback: Callback<T>): Generator<'timeout' | Error> {
    const iterator = iterable[Symbol.iterator]()
    let startTime = performance.now()
    let index = 0

    while (true) {
      const { done, value } = iterator.next()

      if (done) return

      if (performance.now() - startTime > this.#execTime) {
        yield 'timeout'
        startTime = performance.now()
      }

      try {
        callback(value, index, iterable)
      } catch (error) {
        if (error instanceof Error) yield error
      }

      index += 1
    }
  }

  iterate(resolve: (v?: any) => void, reject: (r?: any) => void): unknown {
    const { done, value } = this.#task.next()

    if (done) return resolve()

    if (value instanceof Error) return reject(value)

    return setTimeout(() => {
      this.iterate(resolve, reject)
    }, this.#idleTime)
  }
}

export default function forEach<T>(iterable: Iterable<T>, callback: Callback<T>): Promise<void> {
  if (typeof iterable[Symbol.iterator] !== 'function') {
    throw new TypeError('Object is not iterable')
  }

  if (typeof callback !== 'function') {
    throw new TypeError('Callback is not a type of function')
  }

  const taskWorker = new TaskWorker(iterable, callback)
  return new Promise((resolve, reject) => {
    taskWorker.iterate(resolve, reject)
  })
}
