/* eslint-disable @typescript-eslint/no-throw-literal */
import type { ThenCatchable } from './unified-exec-result.types';

export default class UnifiedResult<T = undefined> implements ThenCatchable<T> {
  #value: T;

  #error?: Error;

  static #wrapError(value: unknown): Error {
    if (value instanceof Error) return value;
    return new Error(String(value));
  }

  static error(value: unknown): UnifiedResult {
    return new UnifiedResult(() => {
      throw value;
    });
  }

  static ok<T>(value: T): UnifiedResult<T> {
    return new UnifiedResult(() => value);
  }

  constructor(getValue: () => T) {
    try {
      const providedValue = getValue();
      this.#value = providedValue;
    } catch (error: unknown) {
      this.#error = UnifiedResult.#wrapError(error);
    }
  }

  map<V>(mapper: (value: T) => V): UnifiedResult<V> {
    if (this.#error != null) {
      return new UnifiedResult(() => {
        throw this.#error;
      });
    }

    return new UnifiedResult<V>(() => mapper(this.#value));
  }

  flatMap<V>(mapper: (value: T) => UnifiedResult<V>): UnifiedResult<V> {
    if (this.#error != null) {
      return new UnifiedResult(() => {
        throw this.#error;
      });
    }

    return mapper(this.#value);
  }

  then<V = T>(callback: (value: T) => V): UnifiedResult<V> {
    if (this.#error != null) {
      return new UnifiedResult(() => {
        throw this.#error;
      });
    }

    return new UnifiedResult(() => callback(this.#value));
  }

  catch<R>(errorHandler: (error: any) => R): UnifiedResult<R | T> {
    if (this.#error != null) {
      return new UnifiedResult(() => errorHandler(this.#error!));
    }

    return new UnifiedResult(() => this.#value);
  }
}
