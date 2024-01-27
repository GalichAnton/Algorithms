import type { NumberSystem } from './number-checker.types'
import type { Nullable } from '../../utils/common-types'

export default class NumberChecker {
  static #numberSystemsDictionary: NumberSystem[] = [
    { systemName: 'arabic', charsRange: [0x0030, 0x0039] },
    { systemName: 'roman', charsRange: [0x2160, 0x217f] },
  ]

  static #defineNumberSystem(char: string): Nullable<NumberSystem> {
    for (const system of this.#numberSystemsDictionary) {
      const {
        charsRange: [start, end],
      } = system

      const charCode = char.codePointAt(0)
      if (charCode != null && charCode >= start && charCode <= end) return system
    }

    return null
  }

  static checkout(numberString: string): boolean {
    if (numberString.length === 0) return false

    const normalizedNumberString = numberString.normalize()
    const usedNumberSystem = this.#defineNumberSystem(normalizedNumberString[0])
    if (usedNumberSystem === null) return false

    const {
      charsRange: [start, end],
    } = usedNumberSystem

    for (let index = 0; index < normalizedNumberString.length; index += 1) {
      const charCode = normalizedNumberString.codePointAt(index)

      if (charCode == null || charCode < start || charCode > end) return false
    }

    return true
  }
}
