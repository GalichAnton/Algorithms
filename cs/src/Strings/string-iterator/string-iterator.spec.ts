import StringIterator from './string-iterator';

describe('String iterator implementation', () => {
  it('Iterator must iterate strings of regular chars', () => {
    const string = 'Foobar';

    expect([...StringIterator.iterate(string)]).toEqual(['F', 'o', 'o', 'b', 'a', 'r']);
  });

  it('Iterator must iterate strings of surrogate pairs', () => {
    const string = '😁🧡🚀';

    expect([...StringIterator.iterate(string)]).toEqual(['😁', '🧡', '🚀']);
  });

  it('Iterator must iterate mixed strings', () => {
    const string = 'F: 😁 R: 🚀';

    expect([...StringIterator.iterate(string)]).toEqual(['F', ':', ' ', '😁', ' ', 'R', ':', ' ', '🚀']);
  });

  it('Iterator must ignore surrogates without the pair', () => {
    const stringOne = `F: ${'😁'[1]} R: 🚀`;
    const stringTwo = `F: 😁 R: ${'🚀'[0]}`;

    expect([...StringIterator.iterate(stringOne)]).toEqual(['F', ':', ' ', ' ', 'R', ':', ' ', '🚀']);
    expect([...StringIterator.iterate(stringTwo)]).toEqual(['F', ':', ' ', '😁', ' ', 'R', ':', ' ']);
  });

  it('Iterator must iterate strings with combining characters', () => {
    // Character 'й' is a character 'и' with breve added
    const string = 'йог';

    expect(string.length).toBe(4);
    expect([...StringIterator.iterate(string)]).toEqual(['й', 'о', 'г']);
  });
});
