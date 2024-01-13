# Фундаментальные структуры данных

### 1. Реализация двусвязного двустороннего списка

Список реализуется классом DoublyLinkedList, который предоставляет следующие методы для работы со списком:

#### 1. Удаление всех элементов списка

```ts
clean(): this
```

#### 2. Добавление элемента в конец списка

```ts
push(value: T): this
```

#### 3. Удаление элемента из конца списка

```ts
pop(): Nullable<DoublyLinkedListNode<T>>
```

#### 4. Добавление элемента в начало списка

```ts
unshift(value: T): this
```

#### 5. Удаление элемента из начала списка

```ts
shift(): Nullable<DoublyLinkedListNode<T>>
```

#### 6. Добавление элемента перед указанным элементом

```ts
insertBefore(cb: (value: T) => boolean, newValue: T): boolean
```

#### 7. Добавление элемента после указанного элемента

```ts
insertAfter(cb: (value: T) => boolean, newValue: T): boolean
```

#### 8. Поиск указанного элемента в списке

```ts
find(cb: (value: T) => boolean): Nullable<DoublyLinkedListNode<T>>
```

#### 9. Удаление указанного элемента в списке

```ts
remove(cb: (value: T) => boolean): Nullable<DoublyLinkedListNode<T>>
```

#### 10. Замена указанного элемента в списке

```ts
replace(cb: (value: T) => boolean, newValue: T): boolean
```

#### 11. Разворот списка

```ts
reverse(): this
```

#### 12. Перебор элементов списка

```ts
values(): Generator<T>
```

#### 12. Перебор элементов списка в обратном порядке

```ts
reversedValues(): Generator<T>
```

Кроме этого у экземпляра списка доступны свойства-аксессоры (геттеры):

#### 1. Ссылка на первый элемент списка

```ts
get head(): Nullable<DoublyLinkedListNode<T>>
```

#### 2. Ссылка на последний элемент списка

```ts
get tail(): Nullable<DoublyLinkedListNode<T>>
```

Тип Nullable определяется как

```ts
type Nullable<T> = T | null;
```

Список реализует интерфейс Iterable (может быть перебран в цикле for...of, развернут оператором spread и т.д.).
Экземпляр списка может быть создан из любого перебираемого объекта (реализующего метод Symbol.iterator), переданного в конструктор класса.

Примеры использования:

```js
const list = new DoublyLinkedList([1, 2, 3]);

list.push(4);
list.unshift(5);
list.insertAfter(3, 10);
list.find(42); // null

for (const value of list) {
  console.log(value); // [5, 1, 2, 3, 10, 4]
}
```