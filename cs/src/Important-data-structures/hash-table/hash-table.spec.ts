import HashTable from './hash-table';

describe('Dynamic array implementation with doubly linked list', () => {
  it('Attempt to construct hash table with invalid hash array size value', () => {
    expect(() => new HashTable(0)).toThrowError('Invalid hash array size value provided');
    expect(() => new HashTable(2.3)).toThrowError('Invalid hash array size value provided');
  });

  it('Adding values into a hash table by keys', () => {
    const hash = new HashTable<string | number | string[]>(10);

    hash.set('name', 'John');
    hash.set('age', 22);
    hash.set('skills', ['html', 'css']);
    expect(hash.get('name')).toBe('John');
    expect(hash.get('age')).toBe(22);
    expect(hash.get('skills')).toEqual(['html', 'css']);
  });

  it('Replacing values in a hash table', () => {
    const hash = new HashTable<string | number | string[]>(10);

    hash.set('name', 'John');
    hash.set('age', 22);

    hash.set('name', 'Paul');
    hash.set('age', 31);
    expect(hash.get('name')).toBe('Paul');
    expect(hash.get('age')).toBe(31);
  });

  it('Removing values from a hash table', () => {
    const hash = new HashTable<string | number | string[]>(10);

    hash.set('name', 'John');
    hash.set('age', 22);
    expect(hash.remove('name')).toBe(true);
    expect(hash.remove('age')).toBe(true);
    expect(hash.get('name')).toBeUndefined();
    expect(hash.get('age')).toBeUndefined();
  });

  it('Getting a hash table entries list', () => {
    const hash = new HashTable<string | number | string[]>(10);

    hash.set('name', 'John');
    hash.set('age', 22);
    hash.set('skills', ['html', 'css']);

    const entries = [...hash.entries()];
    expect(entries).toContainEqual(['name', 'John']);
    expect(entries).toContainEqual(['age', 22]);
    expect(entries).toContainEqual(['skills', ['html', 'css']]);
  });

  it('Getting a hash table keys list', () => {
    const hash = new HashTable<string | number | string[]>(10);

    hash.set('name', 'John');
    hash.set('age', 22);
    hash.set('skills', ['html', 'css']);

    const keys = [...hash.keys()];
    expect(keys).toContain('name');
    expect(keys).toContain('age');
    expect(keys).toContain('skills');
  });

  it('Getting a hash table values list', () => {
    const hash = new HashTable<string | number | string[]>(10);

    hash.set('name', 'John');
    hash.set('age', 22);
    hash.set('skills', ['html', 'css']);

    const values = [...hash.values()];
    expect(values).toContain('John');
    expect(values).toContain(22);
    expect(values).toContainEqual(['html', 'css']);
  });
});
