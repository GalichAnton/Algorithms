import BinaryTreeSet from './binary-tree-set';

describe('Binary tree set (BTS) implementation', () => {
  it('Attempt to construct BTS from iterable', () => {
    const bts = new BinaryTreeSet<string>('foobar');

    expect(bts.has('f')).toBe(true);
    expect(bts.has('g')).toBe(false);
  });

  it('Attempt to construct BTS from noniterable', () => {
    // @ts-expect-error
    expect(() => new BinaryTreeSet(123)).toThrowError('Object is not iterable');
  });

  it('Inserting values into BTS', () => {
    const bts = new BinaryTreeSet();

    bts.add(5);
    bts.add(2);
    expect(bts.has(5)).toBe(true);
    expect(bts.has(2)).toBe(true);
  });

  it('Getting min/max values from BTS', () => {
    const bts = new BinaryTreeSet([5, 2, 7, 4, 9]);

    expect(bts.getMin()).toBe(2);
    expect(bts.getMax()).toBe(9);
  });

  it('Traversing BTS by inorder method', () => {
    const bts = new BinaryTreeSet([5, 2, 7, 4, 9]);

    expect([...bts.inorder()]).toEqual([2, 4, 5, 7, 9]);
  });

  it('Traversing BTS by preorder method', () => {
    const bts = new BinaryTreeSet([5, 2, 7, 4, 9]);

    expect([...bts.preorder()]).toEqual([5, 2, 4, 7, 9]);
  });

  it('Traversing BTS by postorder method', () => {
    const bts = new BinaryTreeSet([5, 2, 7, 4, 9]);

    expect([...bts.postorder()]).toEqual([4, 2, 9, 7, 5]);
  });

  it('Traversing BTS by breadsfirst method', () => {
    const bts = new BinaryTreeSet([5, 2, 7, 4, 9]);

    expect([...bts.breadsFirst()]).toEqual([5, 2, 7, 4, 9]);
  });

  it('BTS must be iterable (by inorder)', () => {
    const bts = new BinaryTreeSet([5, 2, 7, 4, 9]);

    expect([...bts]).toEqual([2, 4, 5, 7, 9]);
  });

  it('Removing values from BTS', () => {
    const bts = new BinaryTreeSet([5, 2, 7, 4, 9]);

    expect(bts.remove(5)).toBe(true);
    expect([...bts]).toEqual([2, 4, 7, 9]);

    expect(bts.remove(9)).toBe(true);
    expect([...bts]).toEqual([2, 4, 7]);

    expect(bts.remove(3)).toBe(false);
  });

  it('Clearing BTS', () => {
    const bts = new BinaryTreeSet([5, 2, 7, 4, 9]);

    bts.clear();
    expect([...bts]).toEqual([]);
  });

  it('Working with custom comparator functions and complex data', () => {
    type User = { id: number; name: string };
    const usersList: User[] = [
      { id: 45, name: 'John' },
      { id: 54, name: 'Ann' },
      { id: 11, name: 'Mike' },
      { id: 32, name: 'Helen' },
    ];

    const btsById = new BinaryTreeSet(usersList, (user, userToFind) => Math.sign(userToFind.id - user.id));
    expect(btsById.has({ id: 54, name: 'Ann' })).toBe(true);
    expect([...btsById]).toEqual([
      { id: 11, name: 'Mike' },
      { id: 32, name: 'Helen' },
      { id: 45, name: 'John' },
      { id: 54, name: 'Ann' },
    ]);

    const btsByName = new BinaryTreeSet(usersList, (user, userToFind) => userToFind.name.localeCompare(user.name));
    expect(btsByName.has({ id: 11, name: 'Mike' })).toBe(true);
    expect([...btsByName]).toEqual([
      { id: 54, name: 'Ann' },
      { id: 32, name: 'Helen' },
      { id: 45, name: 'John' },
      { id: 11, name: 'Mike' },
    ]);
  });

  it('Attempt to construct BTS with invalid custom comparator type', () => {
    // @ts-expect-error
    expect(() => new BinaryTreeSet([5, 2, 7, 4, 9], true)).toThrowError('Comparator must be a function');
  });
});
