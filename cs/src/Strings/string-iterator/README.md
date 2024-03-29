# Строки. Кодовые таблицы и кодировки. Графемы. Нормальные формы

### 2. Реализация итератора по символам Unicode

Итератор символов реализован классом StringIterator и осуществляет перебор строк, не опираясь на встроенные средства для работы с коллекциями (собственный итератор строк JS, метод from класса Array и т.п.).

Итератор работает со строками, содержащими, в том числе, суррогатные пары. При этом осуществляется проверка полноты суррогатных пар, одиночные суррогаты без пары игнорируются.

Проверка суррогатных пар опирается на проверку вхождения значения кода символа в соответствующий диапазон (определены стандартом):

- 0xd800, 0xdbff - Первый элемент суррогатной пары
- 0xdc00, 0xdfff - Второй элемент суррогатной пары

Помимо этого учитывается наличие комбинируемых диакритических знаков (осуществляется предварительная нормализация строки).

Перебор строки выполняется статическим методом iterate:

```ts
StringIterator.iterate(str: string): IterableIterator<string>
```

Примеры использования:

```js
[...StringIterator.iterate('hello')] // ['h', 'e', 'l', 'l', 'o']
[...StringIterator.iterate('😁🧡🚀')] // ['😁', '🧡', '🚀']
[...StringIterator.iterate('Rocket: 🚀')] // ['R', 'o', 'c', 'k', 'e', 't', ':', ' ', '🚀']
```
