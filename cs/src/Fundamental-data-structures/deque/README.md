# Фундаментальные структуры данных

### 3. Реализация двусторонней очереди на базе двустороннего двусвязного списка

Двусторонняя очередь реализуется классом Deque. Реализация подразумевает использование класса DoublyLinkedList.
Класс Deque предоставляет следующие методы для работы с очередью:

#### 1. Добавление элемента в очередь слева

```ts
insertLeft(value: T): this
```

#### 2. Удаление элемента из очереди слева

```ts
removeLeft(): Nullable<T>
```

#### 3. Добавление элемента в очередь справа

```ts
insertRight(value: T): this
```

#### 4. Удаление элемента из очереди справа

```ts
removeRight(): Nullable<T>
```

#### 5. Получение первого элемента очереди слева (без изъятия)

```ts
peekLeft(): Nullable<T>
```

#### 6. Получение первого элемента очереди справа (без изъятия)

```ts
peekRight(): Nullable<T>
```

Тип Nullable определяется как

```ts
type Nullable<T> = T | null;
```

Примеры использования:

```js
const deque = new Deque();

deque.insertLeft(1);
deque.insertRight(2);
deque.removeRight(); // 2
deque.peekLeft(); // 1
deque.removeLeft(); // 1
deque.peekLeft(); // null
```