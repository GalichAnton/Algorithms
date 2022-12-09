const deepClone = (obj) => {
  if (obj === null) return null;
  // Создаем поверхностный клона оригинала.
  let clone = Object.assign({}, obj);

  // Определяем, какие пары ключ-значение
  // необходимо глубоко клонировать.
  Object.keys(clone).forEach(
    (key) =>
      (clone[key] =
        typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key])
  );
  // Проверяем является ли obj массивом и не пустой ли он.
  return Array.isArray(obj) && obj.length
    ? // Если obj массив и он не пуст, тогда
      // указываем объекту clone длину исходного массива что бы
      // конвертировать clone в массив и вернуть его.
    (clone.length = obj.length) && Array.from(clone)
    : // Если obj пустой массив,
    Array.isArray(obj)
      ? // то возвращаем его
      Array.from(obj)
      : // в других случаях obj это объект и мы возвращаем копию clone.
      clone;
};

const user = {
  name: "Peter",
  age: 45,
  address: [{ city: "SPB" }, { street: "Lenina" }]
};

const user2 = deepClone(user);
console.log(user2);
