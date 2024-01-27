/* eslint-disable no-console */
import forEach from './for-each'

describe('Implementation of forEach function', () => {
  it('forEach must iterate huge iterables with no I/O blocking', () => {
    const nums = [...Array(5e5).keys()]
    let sumOfNums = 0

    expect(
      forEach(nums, (num) => {
        sumOfNums += num
      }).then(() => {
        expect(sumOfNums === 5e5)
      }),
    )
  })

  it('forEach must handle callback application errors', () => {
    const nums = [1, 2, 3, '4', 5, 6, 7]

    expect(
      forEach(nums, (num) => {
        // @ts-expect-error
        num.toFixed()
      }).catch((err) => {
        expect(err).toBeInstanceOf(TypeError)
      }),
    )
  })

  it('Attemtp to work with non-iterable object', () => {
    const nums = 1234567

    expect(() =>
      // @ts-expect-error
      forEach(nums, (num) => {
        console.log(num)
      }),
    ).toThrowError('Object is not iterable')
  })

  it('Attemtp to work with no callback provided', () => {
    const nums = [...Array(5e5).keys()]

    // @ts-expect-error
    expect(() => forEach(nums)).toThrowError('Callback is not a type of function')
  })
})
