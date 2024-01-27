# Итераторы и паттерны их применения

### 1. Реализация итератора для генерации случайных чисел

Реализация представлена функцией random, аргументы функции задают диапазон случайного числа (границы диапазон включены в сам диапазон):

```ts
random(min: number, max: number): IterableIterator<number>
```

### 2. Реализация функции take (принимает любой iterable и возвращает итератор по заданному количеству его элементов)

```ts
take<T>(iterable: Iterable<T>, count: number): IterableIterator<T>
```

Пример использования:

```js
const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log([...take(numbers, 3)]); // [1, 2, 3]
```

### 3. Реализация функции filter (принимает любой iterable и функцию-предикат, возвращает итератор по элементам, удовлетворяющим предикату)

```ts
filter<T>(iterable: Iterable<T>, predicate: (value: T) => boolean): IterableIterator<T>
```

Пример использования:

```js
const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log([...filter(numbers, (num) => num < 4)]); // [1, 2, 3]
```

### 4. Реализация функции enumerate (принимает любой iterable и возвращает итератор по парам "номер итерации - элемент")

```ts
enumerate<T>(iterable: Iterable<T>): IterableIterator<Indexed<T>>
```

Тип Indexed определяется как

```ts
type Indexed<T> = [number, T];
```

Пример использования:

```js
const string = 'Foo';
console.log([...enumerate(string)]); // [[0, 'F'], [1, 'o'], [2, 'o']]
```

### 6. Реализация функции seq (принимает множество iterable, возвращает итератор по их элементам)

```ts
seq<T extends Iterable<any>[]>(...iterables: T): IterableIterator<ExtractIterablesType<T>>
```

Тип ExtractIterablesType используется для вывода типов элементов исходных iterable и определяется как

```ts
type ExtractIterablesType<T extends Iterable<unknown>[]> = T[number] extends Iterable<infer U> ? U : unknown;
```

Пример использования:

```js
const numbers = [1, 2, 3];
const string = 'Foo';
console.log([...seq(numbers, string)]); // [1, 2, 3, 'F', 'o', 'o']
```

### 7. Реализация функции zip (принимает множество iterable, возвращает итератор по кортежам их элементов)

```ts
zip<T extends Iterable<unknown>[]>(...iterables: T): IterableIterator<ExtractIterablesType<T>[]>
```

Пример использования:

```js
const numbers = [1, 2, 3];
const string = 'Foo';
console.log([...zip(numbers, string)]); // [[1, 'F'], [2, 'o'], [3, 'o']]
```

### 8. Реализация функции mapSeq (принимает iterable с данными и iterable с функциями, возвращает итератор по результатам последовательного применения функций к элементам данных)

```ts
mapSeq<T>(iterable: Iterable<T>, mappers: ((value: T) => T)[]): IterableIterator<T>
```

Пример использования:

```js
const numbers = [1, 2, 3];
const numberMappers = [(num: number) => num * 2, (num: number) => num + 1];
console.log([...mapSeq(numbers, numberMappers)]); // [3, 5, 7]
```
