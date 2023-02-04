const deepClone = (obj) => {
  if (obj === null) return null;
  // Создаем поверхностный клона оригинала.
  let clone = Object.assign({}, obj);

  // Определяем, какие пары ключ-значение
  // необходимо глубоко клонировать.
  Object.keys(clone).forEach((key) =>
    (clone[key] = typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key])
  );
 return clone
};

const user = {
  name: "Peter",
  age: 45,
  address: { city: "SPB",  street: "Lenina" }
};

const user2 = deepClone(user);
console.log(user2);
user.name = "sdfdsfsdf"
console.log(user);