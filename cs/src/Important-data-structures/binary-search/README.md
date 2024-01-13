#   Важнейшие структуры данных: вектор, хеш-таблица, дерево поиска

### 4. Реализация функции двоичного поиска

Реализованная функция binarySearch осуществляет поиск требуемого значения в отсортированной коллекции данных. Для обеспечения возможности поиска элементов коллекций, содержащих сложные типы (объекты, массивы и т.д.) сравнение элементов массива с искомым значением делегировано функции обратного вызова, передаваемой в функцию binarySearch в качестве второго аргумента. Данная callback-функция принимает параметром текущий сравниваемый элемент коллекции и соответствующим образом производит сравнение его с искомым знвчением. Функция-компаратор должна вернуть числовое значение, его знак определяет отношение сравниваемых элементов.

Функция binarySearch возвращает индекс найденного элемента или значение -1, если элемент не был найден.

Примеры использования:

```js
const sortedNumbersArray = [1, 3, 5, 6, 7, 9, 11, 23, 56, 77, 88, 99];

console.log(binarySearch(sortedNumbersArray, (value) => value - 23)); // 7
console.log(binarySearch(sortedNumbersArray, (value) => value - 0)); // -1

const sortedUsersArray = [
      { username: 'Ann', age: 22 },
      { username: 'John', age: 24 },
      { username: 'Mary', age: 26 },
];

console.log(binarySearch(sortedUsersArray, ({ username }) => username.localeCompare('Ann')); // 0
console.log(binarySearch(sortedUsersArray, ({ username }) => username.localeCompare('Mike'))); // -1
```
