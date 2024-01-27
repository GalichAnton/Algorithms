/* eslint-disable @typescript-eslint/no-throw-literal */
export default class Result<T = undefined> {
  #value: T

  #error?: Error

  static #wrapError(value: unknown): Error {
    if (value instanceof Error) return value
    return new Error(String(value))
  }

  static ok<T>(value: T): Result<T> {
    return new Result(() => value)
  }

  static error(value: unknown): Result {
    return new Result(() => {
      throw value
    })
  }

  constructor(getValue: () => T) {
    try {
      const providedValue = getValue()
      this.#value = providedValue
    } catch (error: unknown) {
      this.#error = Result.#wrapError(error)
    }
  }

  map<V>(mapper: (value: T) => V): Result<V> {
    if (this.#error != null) {
      return new Result(() => {
        throw this.#error
      })
    }

    return new Result<V>(() => mapper(this.#value))
  }

  flatMap<V>(mapper: (value: T) => Result<V>): Result<V> {
    if (this.#error != null) {
      return new Result(() => {
        throw this.#error
      })
    }

    return mapper(this.#value)
  }

  catch<V>(errorHandler: (error: Error) => V): Result<V | T> {
    if (this.#error != null) {
      return new Result(() => errorHandler(this.#error!))
    }

    return new Result(() => this.#value)
  }
}
