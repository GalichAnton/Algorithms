export default function binarySearch<T = unknown>(array: T[], target: number): number {
  let startPosition = 0
  let endPosition = array.length - 1

  while (startPosition <= endPosition) {
    const middlePosition = Math.floor((startPosition + endPosition) / 2)
    const currentValue = array[middlePosition]

    if (currentValue === target) {
      return middlePosition
    }

    if (currentValue < target) {
      startPosition = middlePosition + 1
    }

    if (currentValue > target) {
      endPosition = middlePosition - 1
    }
  }

  return -1
}
