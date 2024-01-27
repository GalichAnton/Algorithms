import NumberChecker from './number-checker';

describe('Checking if string contains a valid number', () => {
  it('NumberChecker must recognize arabian numbers', () => {
    const number = '4522180';
    const invalidNumber = '0ff23a1';

    expect(NumberChecker.checkout(number)).toBe(true);
    expect(NumberChecker.checkout(invalidNumber)).toBe(false);
  });

  it('NumberChecker must recognize roman numbers (only chars, not an order, for now...)', () => {
    const number = 'ⅩⅩⅥ';
    const invalidNumber = 'XXVI';

    expect(NumberChecker.checkout(number)).toBe(true);
    expect(NumberChecker.checkout(invalidNumber)).toBe(false);
  });
});
