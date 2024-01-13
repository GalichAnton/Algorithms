import binarySearch from './binary-search';

describe('Binary search implementation', () => {
  it('Searching value within the array of numbers', () => {
    const sortedNumbersArray = [1, 3, 5, 6, 7, 9, 11, 23, 56, 77, 88, 99];

    expect(binarySearch(sortedNumbersArray, (value) => value - 11)).toBe(6);
    expect(binarySearch(sortedNumbersArray, (value) => value - 1)).toBe(0);
    expect(binarySearch(sortedNumbersArray, (value) => value - 23)).toBe(7);
    expect(binarySearch(sortedNumbersArray, (value) => value - 88)).toBe(10);
    expect(binarySearch(sortedNumbersArray, (value) => value - 0)).toBe(-1);
  });

  it('Searching value within the array of complex structures', () => {
    type User = {
      username: string;
      age: number;
    };

    const sortedUsersArray: User[] = [
      {
        username: 'Ann',
        age: 22,
      },
      {
        username: 'John',
        age: 24,
      },
      {
        username: 'Mary',
        age: 26,
      },
      {
        username: 'Mike',
        age: 31,
      },
      {
        username: 'Paul',
        age: 33,
      },
    ];

    expect(binarySearch(sortedUsersArray, ({ username }) => username.localeCompare('Ann'))).toBe(0);
    expect(binarySearch(sortedUsersArray, ({ username }) => username.localeCompare('Mary'))).toBe(2);
    expect(binarySearch(sortedUsersArray, ({ username }) => username.localeCompare('Mike'))).toBe(3);
    expect(binarySearch(sortedUsersArray, ({ username }) => username.localeCompare('Steve'))).toBe(-1);
  });
});
