import Structure from './structure';

describe('Structure implementation through code generation', () => {
  it('Attempt to construct structure without keys provided', () => {
    // @ts-expect-error
    expect(() => new Structure()).toThrowError('Array of keys must be provided');
    // @ts-expect-error
    expect(() => new Structure('name')).toThrowError('Array of keys must be provided');
    expect(() => new Structure([])).toThrowError('Array of keys must be provided');
  });

  it('Set value by key', () => {
    const structure = new Structure<string | number>(['name', 'age']);

    structure.set('name', 'John');
    expect(structure.get('name')).toBe('John');
    expect(structure.get('age')).toBeNull();
  });

  it('Attempt to get value by unexisting key', () => {
    const structure = new Structure<string | number>(['name']);

    expect(() => structure.get('age')).toThrowError('Key not found');
  });

  it('Attempt to set value by unexisting key', () => {
    const structure = new Structure<string | number>(['name']);

    expect(() => structure.set('age', 25)).toThrowError('Key not found');
  });
});
