# Автоматы и генераторы

### 2. Доработка функции forEach - обеспечение обработки нескольких задач с распределением времени работы цикла между ними

Реализация представлена классом TaskProcessor. При создании экземпляра класса можно передать в конструктор необязательный аргумент options, задающий значения времени, выделяемого на обработку пула задач и простой (по умолчанию заданы равными 100мс):

```ts
interface TaskProcessorOptions {
  poolExecTime?: number;
  idleTime?: number;
}
```

Для обхода iterable-объектов класс предоставляет метод forEach, принимающий iterable-объект и callback-функцию. Метод возвращает промис:

```ts
forEach<T>(iterable: Iterable<T>, callback: Callback<T>): Promise<void>
```

Сигнатура callback совместима с функцией, передаваемой в качестве аргумента в метод Array.prototype.forEach:

```ts
type Callback<T> = (el: T, index: number, iterable: Iterable<T>) => void;
```

При передаче в функцию forEach неперебираемого объекта или при отсутствии callback-функции возбуждаются исключения типа TypeError.

Время, выделяемое накаждую из задач пересчитывается на каждом цикле, исходя из числа текущих задач (время, выделяемое на обработку пула задач делится поровну между всеми задачами).

Примеры использования:

```js
const taskProcessor = new TaskProcessor();

const nums = [...Array(5e5).keys()];
let sumOfNums = 0;

taskProcessor
  .forEach(nums, (num) => {
    sumOfNums += num;
  })
  .then(() => {
    console.log(sumOfNums); // 5e5
  });

const array = [1, 2, 3, '4', 5, 6, 7];

taskProcessor
  .forEach(array, (el) => {
    console.log(el.toFixed(2));
  })
  .then(() => {
    console.log('Finished!');
  })
  .catch(console.error); // TypeError: el.toFixed is not a function
```
