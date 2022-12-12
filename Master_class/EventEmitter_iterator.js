// Написать функцию которая принимает некоторый элемент и название события для прослушивания и возвращает асинхронный итератор,
// который будет возвращать новые элементы (объекьы события) при срабатывании события.

(async () => {
  for await (const event of on(document, "click")) {
    console.log(event);
  }
})();

function on(element, event) {
  return {
    [Symbol.asyncIterator]() {
      return {
        next() {
          return new Promise((resolve) => {
            element.addEventListener(event, () => {
              resolve({ value: event, done: false });
            });
          });
        },
      };
    },
  };
}