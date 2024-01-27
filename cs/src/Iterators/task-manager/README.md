# Автоматы и генераторы

### 3. Доработка функции forEach - добавление обработки задач по заданному приоритету

Реализация представлена классом TaskManager. При создании экземпляра класса можно передать в конструктор необязательный аргумент options, задающий значения времени, выделяемого на обработку пула задач и простой (по умолчанию заданы равными 100мс):

```ts
interface TaskManagerOptions {
  poolExecTime?: number;
  idleTime?: number;
}
```

Для обхода iterable-объектов класс предоставляет метод forEach, принимающий iterable-объект, callback-функцию и опциональный объект настроек, задающий приоритет задачи (по умолчанию задача имеет приоритет average). Метод возвращает промис:

```ts
  forEach<T>(
    iterable: Iterable<T>,
    callback: Callback<T>,
    options: ForEachOptions = { priority: 'average' },
  ): Promise<void>
```

Сигнатура callback совместима с функцией, передаваемой в качестве аргумента в метод Array.prototype.forEach:

```ts
type Callback<T> = (el: T, index: number, iterable: Iterable<T>) => void;
```

При передаче в функцию forEach неперебираемого объекта или при отсутствии callback-функции возбуждаются исключения типа TypeError.

Обработка задач осуществляется согласно их значениям приоритета, доступные варианты:

- low
- average (по умолчанию)
- high
- critical

Исходя из приоритета определяется и порядок выполнения задач, и время, выделяемое на каждую задачу в рамках одного цикла. Для определения очередности выполнения используется упрощённая реализация очереди с приоритетом на базе массива (класс PriorityQueue). Кратность выделяемого времени для каждого типа задачи выбрана следующая:

- low = 0.5
- average = 1
- high = 2
- critical = 4

Примеры использования:

```js
const taskManager = new TaskManager();

const nums = [...Array(5e5).keys()];
let sumOfNums = 0;

taskManager
  .forEach(nums, (num) => {
    sumOfNums += num;
  })
  .then(() => {
    console.log(sumOfNums); // 5e5
  });

const array = [1, 2, 3, '4', 5, 6, 7];

taskManager
  .forEach(array, (el) => {
    console.log(el.toFixed(2));
  })
  .then(() => {
    console.log('Finished!');
  })
  .catch(console.error); // TypeError: el.toFixed is not a function

taskManager
  .forEach(
    array,
    (el) => {
      console.log(el);
    },
    { priority: 'low' },
  )
  .then(() => {
    console.log('Finished!');
  });

taskManager
  .forEach(
    array,
    (el) => {
      console.log(el);
    },
    { priority: 'high' },
  )
  .then(() => {
    console.log('Finished!');
  });

taskManager
  .forEach(
    array,
    (el) => {
      console.log(el);
    },
    { priority: 'critical' },
  )
  .then(() => {
    console.log('Finished!');
  });
```
