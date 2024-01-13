import Deque from './deque'

describe('Deque implementation', () => {
  it('Inserting value to the left side of deque', () => {
    const deque = new Deque<number>()

    deque.insertLeft(0)
    expect(deque.peekLeft()).toBe(0)
    expect(deque.peekRight()).toBe(0)
    deque.insertLeft(1)
    expect(deque.peekLeft()).toBe(1)
    expect(deque.peekRight()).toBe(0)
  })

  it('Inserting value to the right side of deque', () => {
    const deque = new Deque<number>()

    deque.insertRight(0)
    expect(deque.peekRight()).toBe(0)
    expect(deque.peekLeft()).toBe(0)
    deque.insertRight(1)
    expect(deque.peekLeft()).toBe(0)
    expect(deque.peekRight()).toBe(1)
  })

  it('Removing value from the left side of deque', () => {
    const deque = new Deque<number>()

    deque.insertLeft(0)
    deque.insertLeft(1)
    expect(deque.removeLeft()).toBe(1)
    expect(deque.peekLeft()).toBe(0)
    expect(deque.removeLeft()).toBe(0)
    expect(deque.peekLeft()).toBeNull()
    expect(deque.removeLeft()).toBeNull()
  })

  it('Removing value from the right side of deque', () => {
    const deque = new Deque<number>()

    deque.insertLeft(0)
    deque.insertLeft(1)
    expect(deque.removeRight()).toBe(0)
    expect(deque.peekRight()).toBe(1)
    expect(deque.removeRight()).toBe(1)
    expect(deque.peekRight()).toBeNull()
    expect(deque.removeRight()).toBeNull()
  })
})
