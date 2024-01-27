import Range from './range';

describe('Numeric/string range implementation', () => {
  it('Range of numbers must be iterable in steps of 1', () => {
    const range = new Range(12, 20);

    expect([...range]).toEqual([12, 13, 14, 15, 16, 17, 18, 19, 20]);
  });

  it('Range of numbers must be reversable', () => {
    const range = new Range(12, 20);

    expect([...range.reverse()]).toEqual([20, 19, 18, 17, 16, 15, 14, 13, 12]);
  });

  it('Range of strings must be iterable in steps of 1', () => {
    const range = new Range('a', 'h');

    expect([...range]).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']);
  });

  it('Range of strings must be reversable', () => {
    const range = new Range('a', 'h');

    expect([...range.reverse()]).toEqual(['h', 'g', 'f', 'e', 'd', 'c', 'b', 'a']);
  });

  it('Range of strings must work with surrogates', () => {
    const range = new Range('😀', '😇');

    expect([...range]).toEqual(['😀', '😁', '😂', '😃', '😄', '😅', '😆', '😇']);
  });

  it('Range must handle a case, when start > end', () => {
    const range = new Range(20, 12);

    expect([...range]).toEqual([20, 19, 18, 17, 16, 15, 14, 13, 12]);
    expect([...range.reverse()]).toEqual([12, 13, 14, 15, 16, 17, 18, 19, 20]);
  });
});
