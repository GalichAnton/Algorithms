# Поиск в строке. Регулярные выражения

### 1. Проверка строки на содержание только латинских букв, цифр, символов \_ и $

Решение представлено функцией isAlphanumericAndDollar:

```ts
isAlphanumericAndDollar(string: string): boolean
```

Пример использования:

```js
isAlphanumericAndDollar('sum41_$'); // true
isAlphanumericAndDollar('Кириллица'); // false
```

### 2. Разделение строки по символам ",", ".", ";" и пробелам (пробелы - в любом количестве)

Решение представлено функцией splitBy:

```ts
splitBy(string: string): string[]
```

Пример использования:

```js
splitBy('foo    bla.bar,gd;4$'); // ['foo', 'bla', 'bar', 'gd', '4']
splitBy('foo-bar js.for!ever'); // ['foo-bar', 'js', 'for!ever']
```

### 3. Применение данных к строковому шаблону

Решение представлено функцией format:

```ts
format<T extends {}>(template: string, data: T): string
```

Функция производит поиск в строке шаблона заглушек вида ${identificator} и заменяет их значениями под соответствующими ключами из объекта с данными.

Пример использования:

```js
format('Hello, ${user}! Your age is ${age}.', { user: 'Bob', age: 10 }); // 'Hello, Bob! Your age is 10.'
format('User ${name} is logged in at ${time} as ${role}', { name: 'John', time: '23:01:56', role: 'admin' }); // 'User John is logged in at 23:01:56 as admin'
```

### 4. Удаление дублирующихся подстрок длиной от 1 до 3 символов

Решение представлено функцией cleanupRepeatingGroups:

```ts
cleanupRepeatingGroups(string: string): string
```

Пример использования:

```js
cleanupRepeatingGroups('aaaabbbbczzzz'); // abcz
cleanupRepeatingGroups('abababbbabcabc'); // abbabc
cleanupRepeatingGroups('foofoobabaaaazze'); // foobaaze
```
