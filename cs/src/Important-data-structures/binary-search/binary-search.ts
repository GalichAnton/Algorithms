export default function binarySearch<T = unknown>(array: T[], comparator: (value: T) => number): number {
  let startPosition = 0
  let endPosition = array.length - 1

  while (startPosition <= endPosition) {
    const middlePosition = Math.floor((startPosition + endPosition) / 2)
    const currentValue = array[middlePosition]

    const comparisionResult = comparator(currentValue)
    if (comparisionResult === 0) {
      return middlePosition
    }

    if (comparisionResult < 0) {
      startPosition = middlePosition + 1
    }

    if (comparisionResult > 0) {
      endPosition = middlePosition - 1
    }
  }

  return -1
}
