# Автоматы и генераторы

### 1. Реализация функции forEach для обхода iterable-объекта любого размера (без блокирования потока ввода/вывода)

Реализованная функция принимает iterable-объект и callback-функцию, возвращает промис:

```ts
forEach<T>(iterable: Iterable<T>, callback: Callback<T>): Promise<void>
```

Сигнатура callback совместима с аналогичными функциями, передаваемыми в качестве аргумента в методы массивов:

```ts
type Callback<T> = (el: T, index: number, iterable: Iterable<T>) => void;
```

Логика работы функции основана на ограничении времени работы по перебору элементов. При достижении временного ограничения выдерживается пауза и перебор возобновляется. Значения времени работы и простоя заданы равными 100мс.

При передаче функции forEach неперебираемого объекта или при отсутствии callback-функции возбуждаются исключения типа TypeError.

Логика реализации инкапсулирована в класс TaskWorker, при вызове функции forEach создаётся экземпляр класса, в конструктор которого передаются исходные iterable и callback-функция. Обход элементов запускается вызовом публичного метода iterate.

Обход элементов с контролем времени перебора осуществляется генератором, создаваемым методом createWorker:

```ts
*createWorker(iterable: Iterable<T>, callback: Callback<T>): Generator<'timeout' | Error>
```

Перезапуск перебора после выдержки времени паузы, а также контроль окончания перебора и обработки возможного исключения ложатся на метод iterate:

```ts
iterate(resolve: (v?: any) => void, reject: (r?: any) => void): unknown
```

Пример использования:

```js
const numbers = [...Array(5e5).keys()];
let sumOfNums = 0;

forEach(array, (num) => {
  sumOfNums += num;
}).then(() => {
  console.log(sumOfNums); // 5e5
  console.log('Finished!');
});

const array = [...Array(100).keys()];
array[50] = String(array[50]);

forEach(array, (el) => {
  console.log(el.toFixed(2));
})
  .then(() => {
    console.log('Finished!');
  })
  .catch(console.error); // TypeError: el.toFixed is not a function
```
