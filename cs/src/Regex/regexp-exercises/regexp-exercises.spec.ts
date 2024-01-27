import { isAlphanumericAndDollar, splitBy, format, cleanupRepeatingGroups } from './regexp-exercises';

describe('Check if string contains only alphanumeric chars or/and a dollar sign', () => {
  it('Alphanumeric characters and dollar sign must be valid', () => {
    expect(isAlphanumericAndDollar('sum41_$')).toBe(true);
    expect(isAlphanumericAndDollar('Wow!')).toBe(false);
    expect(isAlphanumericAndDollar('Кириллица')).toBe(false);
  });
});

describe('Split the string by symbols ".", ",", ";" or space (one or many)', () => {
  it('String must be splitted by given delimiters', () => {
    expect(splitBy('foo    bla.bar,gd;4')).toEqual(['foo', 'bla', 'bar', 'gd', '4']);
    expect(splitBy('foo-bar js.for!ever')).toEqual(['foo-bar', 'js', 'for!ever']);
  });
});

describe('Fill the string template with provided data', () => {
  it('String template must be filled by corresponding object values', () => {
    // eslint-disable-next-line no-template-curly-in-string
    const userTemplate = 'Hello, ${user}! Your age is ${age}.';
    const userData = { user: 'Bob', age: 10 };

    expect(format(userTemplate, userData)).toBe('Hello, Bob! Your age is 10.');

    // eslint-disable-next-line no-template-curly-in-string
    const authTemplate = 'User ${name} is logged in at ${time} as ${role}';
    const authData = { name: 'John', time: '23:01:56', role: 'admin' };
    expect(format(authTemplate, authData)).toBe('User John is logged in at 23:01:56 as admin');
  });

  describe('Clean up groups of repeating symbols of 1-3 characters', () => {
    it('Repeating patterns must be reduced', () => {
      expect(cleanupRepeatingGroups('aaaabbbbczzzz')).toBe('abcz');
      expect(cleanupRepeatingGroups('abababbbabcabc')).toBe('abbabc');
      expect(cleanupRepeatingGroups('foofoobabaaaazze')).toBe('foobaaze');
    });
  });
});
