import DoublyLinkedList from './doubly-linked-list'

describe('Doubly linked list implementation', () => {
  it('Attempt to construct list from iterable', () => {
    const list = new DoublyLinkedList<string>('foobar')

    expect(list.head?.value).toBe('f')
    expect(list.tail?.value).toBe('r')
  })

  it('Attempt to construct list from non iterable', () => {
    // @ts-ignore
    expect(() => new DoublyLinkedList(123)).toThrowError('Object is not iterable')
  })

  it('List clean up', () => {
    const list = new DoublyLinkedList<number>([0, 1, 2])

    list.clean()
    expect(list.tail).toBeNull()
    expect(list.head).toBeNull()
  })

  it('Pushing value into list', () => {
    const list = new DoublyLinkedList<number>()

    list.push(0)
    expect(list.head?.value).toBe(0)
    expect(list.tail?.value).toBe(0)

    list.push(1)
    expect(list.head?.next?.value).toBe(1)
    expect(list.tail?.value).toBe(1)
    expect(list.tail?.prev?.value).toBe(0)
  })

  it('Popping value from list', () => {
    const list = new DoublyLinkedList<number>([0, 1])

    expect(list.pop()?.value).toBe(1)
    expect(list.tail?.value).toBe(0)
    expect(list.tail?.next).toBeNull()

    expect(list.pop()?.value).toBe(0)
    expect(list.tail).toBeNull()
    expect(list.head).toBeNull()

    expect(list.pop()).toBeNull()
  })

  it('Unshifting value into list', () => {
    const list = new DoublyLinkedList<number>()

    list.unshift(0)
    expect(list.head?.value).toBe(0)
    expect(list.tail?.value).toBe(0)

    list.unshift(1)
    expect(list.head?.value).toBe(1)
    expect(list.head?.next?.value).toBe(0)
    expect(list.tail?.prev?.value).toBe(1)
  })

  it('Shifting value from list', () => {
    const list = new DoublyLinkedList<number>([0, 1])

    expect(list.shift()?.value).toBe(0)
    expect(list.head?.value).toBe(1)
    expect(list.tail?.value).toBe(1)

    expect(list.shift()?.value).toBe(1)
    expect(list.head).toBeNull()
    expect(list.tail).toBeNull()

    expect(list.shift()).toBeNull()
  })

  it('Inserting new value before the given value', () => {
    const list = new DoublyLinkedList<number>([0, 1, 2])

    expect(list.insertBefore((value) => value === 1, 0.5)).toBe(true)
    expect(list.head?.next?.value).toBe(0.5)
    expect(list.head?.next?.next?.value).toBe(1)

    expect(list.insertBefore((value) => value === 0, -1)).toBe(true)
    expect(list.head?.value).toBe(-1)
    expect(list.head?.next?.value).toBe(0)

    expect(list.insertBefore((value) => value === 10, 42)).toBe(false)
  })

  it('Inserting new value after the given value', () => {
    const list = new DoublyLinkedList<number>([0, 1, 2])

    expect(list.insertAfter((value) => value === 1, 1.5)).toBe(true)
    expect(list.tail?.prev?.value).toBe(1.5)
    expect(list.head?.next?.next?.value).toBe(1.5)

    expect(list.insertAfter((value) => value === 2, 3)).toBe(true)
    expect(list.tail?.value).toBe(3)
    expect(list.tail?.prev?.value).toBe(2)

    expect(list.insertAfter((value) => value === 10, 42)).toBe(false)
  })

  it('Searching value within list', () => {
    const list = new DoublyLinkedList<number>([0, 1, 2])

    expect(list.find((value) => value === 1)?.value).toBe(1)
    expect(list.find((value) => value === 2)?.value).toBe(2)
    expect(list.find((value) => value === 42)).toBeNull()
  })

  it('Removing value from list', () => {
    const list = new DoublyLinkedList<number>([0, 1, 2, 3, 4])

    expect(list.remove((value) => value === 1)?.value).toBe(1)
    expect(list.head?.next?.value).toBe(2)

    expect(list.remove((value) => value === 0)?.value).toBe(0)
    expect(list.head?.value).toBe(2)

    expect(list.remove((value) => value === 4)?.value).toBe(4)
    expect(list.tail?.value).toBe(3)

    expect(list.remove((value) => value === 42)).toBeNull()
  })

  it('Replacing value within list', () => {
    const list = new DoublyLinkedList<number>([0, 1, 2, 3, 4])

    expect(list.replace((value) => value === 3, 33)).toBe(true)
    expect(list.tail?.prev?.value).toBe(33)
    expect(list.replace((value) => value === 10, 100)).toBe(false)
  })

  it('List instance must be iterable', () => {
    const list = new DoublyLinkedList<number>([0, 1, 2])

    expect([...list]).toEqual([0, 1, 2])
  })

  it('Reversing list', () => {
    const list = new DoublyLinkedList<number>([0, 1, 2])
    list.reverse()

    expect([...list]).toEqual([2, 1, 0])
  })

  it('Getting list values in backwards', () => {
    const list = new DoublyLinkedList<number>([0, 1, 2])

    expect([...list.reversedValues()]).toEqual([2, 1, 0])
  })
})
