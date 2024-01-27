# Обработка ошибок. Простые и контейнерные типы данных. Функторы и монады

### 3. Расширение поддержки контейнеров функцией execResult

Для обеспечения поддержки контейнеров разных типов принят интерфейс, требующий реализации методов then и catch (Promise-подобный API):

```ts
interface ThenCatchable<T> {
  then: <V = T>(callback: (value: T) => V) => ThenCatchable<V>;
  catch: <R>(callback: (reason: any) => R) => ThenCatchable<T | R>;
}
```

Реализация предоставляет класс UnifiedResult для контейнерного типа и функцию unifiedExecResult.

Класс UnifiedResult реализует контейнер Result с дополнительным методом then:

```ts
then<V = T>(callback: (value: T) => V): UnifiedResult<V>
```

Функция unifiedExecResult, опираясь на интерфейс ThenCatchable позволяет работать как с контейнерами UnifiedResult, так и с контейнерами типа Promise.

Пример использования:

```js
function* executor() {
  const number = new UnifiedResult(() => 5);
  const x = yield number.map((n) => n * 2);
  const y = yield Promise.resolve(7);

  console.log(x + y); // 17
}

unifiedExecResult(executor);
```
