import Vector from './array-based-vector';

describe('Dynamic vector implementation based on an arrays', () => {
  it('Attempt to construct vector with invalid capacity value', () => {
    expect(() => new Vector(0)).toThrowError('Invalid capacity value provided');
    expect(() => new Vector(2.3)).toThrowError('Invalid capacity value provided');
  });

  it('Pushing values into vector', () => {
    const vector = new Vector<number>(5);

    vector.push(0);
    expect(vector.get(0)).toBe(0);

    vector.push(1, 2, 3, 4);
    expect(vector.get(4)).toBe(4);
    expect(vector.get(5)).toBeUndefined();
    expect(vector.length).toBe(5);
  });

  it('Popping value from vector', () => {
    const vector = new Vector<number>(5);

    vector.push(0, 1);
    expect(vector.pop()).toBe(1);
    expect(vector.pop()).toBe(0);
    expect(vector.pop()).toBeUndefined();
    expect(vector.length).toBe(0);
  });

  it('Unshifting values into vector', () => {
    const vector = new Vector<number>(5);

    vector.unshift(0);
    expect(vector.get(0)).toBe(0);

    vector.unshift(1, 2, 3, 4);
    expect(vector.get(0)).toBe(1);
    expect(vector.get(4)).toBe(0);
    expect(vector.get(5)).toBeUndefined();
    expect(vector.length).toBe(5);
  });

  it('Vector instance must be iterable', () => {
    const vector = new Vector<number>(5);

    for (let i = 0; i < 5; i += 1) {
      vector.push(i);
    }

    expect([...vector]).toEqual([0, 1, 2, 3, 4]);
  });

  it('Removing selected values from vector with selected position', () => {
    const vector = new Vector<number>(5);

    for (let i = 0; i < 5; i += 1) {
      vector.push(i);
    }

    expect([...vector.splice(1, 2)]).toEqual([1, 2]);
    expect([...vector]).toEqual([0, 3, 4]);
    expect(vector.length).toBe(3);
    expect([...vector.splice(-2, 1)]).toEqual([3]);
    expect([...vector]).toEqual([0, 4]);
    expect(vector.length).toBe(2);
  });

  it('Inserting values into vector with selected position', () => {
    const vector = new Vector<number>(5);

    for (let i = 0; i < 5; i += 1) {
      vector.push(i);
    }

    expect([...vector.splice(2, 0, 1.3, 1.7)]).toEqual([]);
    expect([...vector]).toEqual([0, 1, 1.3, 1.7, 2, 3, 4]);
    expect(vector.length).toBe(7);
    expect([...vector.splice(-2, 0, 2.5)]).toEqual([]);
    expect([...vector]).toEqual([0, 1, 1.3, 1.7, 2, 2.5, 3, 4]);
    expect(vector.length).toBe(8);
  });

  it('Replacing values in vector with selected position', () => {
    const vector = new Vector<number>(5);

    for (let i = 0; i < 5; i += 1) {
      vector.push(i);
    }

    expect([...vector.splice(2, 2, 22, 33)]).toEqual([2, 3]);
    expect([...vector]).toEqual([0, 1, 22, 33, 4]);
    expect(vector.length).toBe(5);
    expect([...vector.splice(-1, 1, 44, 55)]).toEqual([4]);
    expect([...vector]).toEqual([0, 1, 22, 33, 44, 55]);
    expect(vector.length).toBe(6);
  });

  it('Edge cases of a vector slicing', () => {
    const vector = new Vector<number>(5);

    for (let i = 0; i < 5; i += 1) {
      vector.push(i);
    }

    expect([...vector.splice()]).toEqual([]);
    expect([...vector]).toEqual([0, 1, 2, 3, 4]);

    expect([...vector.splice(10)]).toEqual([]);
    expect([...vector]).toEqual([0, 1, 2, 3, 4]);

    expect([...vector.splice(2)]).toEqual([2, 3, 4]);
    expect([...vector]).toEqual([0, 1]);
  });

  it('Joining vector elements with delimiter', () => {
    const vector = new Vector<number>(5);

    for (let i = 0; i < 5; i += 1) {
      vector.push(i);
    }

    expect(vector.join()).toBe('0,1,2,3,4');
    expect(vector.join('=>')).toBe('0=>1=>2=>3=>4');
  });

  it('Conversion vector to string', () => {
    const vector = new Vector<number>(5);

    for (let i = 0; i < 5; i += 1) {
      vector.push(i);
    }

    expect(vector.toString()).toBe('0,1,2,3,4');
  });

  it('Mapping vector to another one (without mutation of the original one)', () => {
    const vector = new Vector<string>(5);
    const string = 'javascript';

    for (const char of string) {
      vector.push(char);
    }

    const upperCased = vector.map((char) => char.toUpperCase());
    expect(upperCased.join('')).toBe('JAVASCRIPT');
    expect(vector.join('')).toBe(string);
  });

  it('Filtering vector (without mutation of the original one)', () => {
    const vector = new Vector<string>(5);
    const string = 'javascript';

    for (const char of string) {
      vector.push(char);
    }

    const onlyOdds = vector.filter((_, index) => index % 2 !== 0);
    expect(onlyOdds.join('')).toBe('aacit');
    expect(vector.join('')).toBe(string);
  });
});
