import type { Key, KeyMapFunction } from './structure.types'
import type { Nullable } from '../../utils/common-types'

export default class Structure<T = unknown> {
  #data: T[]

  #getIndexByKey: KeyMapFunction

  static #getKeyIndexMapperFunction(keys: Key[]): string {
    const mapCases = keys.map((key, index) => `case '${key}': return ${index};`).join('\n')

    const mappedFunctionBody = `
      {
        switch (key) {
          ${mapCases}
          default:
            throw new Error('Key not found');
          }
      }
    `

    return mappedFunctionBody
  }

  constructor(keys: Key[]) {
    if (!Array.isArray(keys) || keys.length === 0) {
      throw new Error('Array of keys must be provided')
    }

    this.#data = Array<T>(keys.length)

    const mappedFunctionBody = Structure.#getKeyIndexMapperFunction(keys)
    // eslint-disable-next-line @typescript-eslint/no-implied-eval
    this.#getIndexByKey = <KeyMapFunction>new Function('key', mappedFunctionBody)
  }

  set(key: Key, value: T): void {
    const index = this.#getIndexByKey(key)
    this.#data[index] = value
  }

  get(key: Key): Nullable<T> {
    const index = this.#getIndexByKey(key)
    return this.#data[index] ?? null
  }
}
