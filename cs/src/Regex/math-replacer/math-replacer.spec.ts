import MathReplacer from './math-replacer';

describe('Implementation of math expression calculator/replacer (Calc)', () => {
  it('Calc must find and replace arithmetic expressions with their calculation result', () => {
    const text = `
    Very simple math: 3 + 5
    And 5 * 3 is simple too
    `;

    expect(MathReplacer.calculate(text)).toBe(`
    Very simple math: 8
    And 15 is simple too
    `);
  });

  it('Calc must work with arithmetics containing expressions within brackets (and no spaces around the operator)', () => {
    const text = `
    Some more math: (3 + 3)*2 - 1
    Here is a power of 3 ** (2+2)
    `;

    expect(MathReplacer.calculate(text)).toBe(`
    Some more math: 11
    Here is a power of 81
    `);
  });

  it('Calc must work with arithmetics containing expressions within nested brackets', () => {
    const text = `
    For the lisp fans: (2 + (3 + (4 + (5 + 6))))
    Many smiles (((2 + 3) * 2) - 1) up here
    More brackets for the god of the brackets: 2 + (3 + (2 + 2) * 2) * (4 - 1) + (1 + 1) * 2
    `;

    expect(MathReplacer.calculate(text)).toBe(`
    For the lisp fans: 20
    Many smiles 9 up here
    More brackets for the god of the brackets: 39
    `);
  });

  it('Calc must work with negative number literals', () => {
    const text = `
    Sub-zero: -5 * 4
    Plus or minus?: 6 + -2
    `;

    expect(MathReplacer.calculate(text)).toBe(`
    Sub-zero: -20
    Plus or minus?: 4
    `);
  });

  it('Calc must not to replace in case of invalid math expression', () => {
    const text = 'Is it correct?: 3 ++ 4';

    expect(MathReplacer.calculate(text)).toBe('Is it correct?: 3 ++ 4');
  });
});
