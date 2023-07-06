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

// const user2 = deepClone(user);
// console.log(user2);
// user.name = "sdfdsfsdf"
// console.log(user);

const obj = {
  a: 5,
  b() {
    return this
  },
  c: { d: [1,2,3],  e: 1 },
  set: new Set([1,2,3]),
  map : new Map([[1,2],['test','dfgd']]),
  date: new Date('2023,04,28')
};

const deepClonePlus = (value) => {
  if(Array.isArray(value)) {
    return value.map(deepClonePlus)
  }

  if(typeof value === 'function') {
    return value
  }

  if(value instanceof Map) {
    return new Map(Array.from(value.entries(),deepClonePlus))
  }

  if(value instanceof Set) {
    return new Set([...value].map(deepClonePlus))
  }
  
  if(value instanceof Date) {
    return new Date(value.getTime())
  }

  if(typeof value === 'object' && value !== null) {
    const newObj = Object.create(Object.getPrototypeOf(value))
    for(let key in value) {
      newObj[key] = deepClonePlus(value[key])
    }
    return newObj
  }

  return value

};
//console.log(deepClonePlus(obj))

function cloneObj(obj) {
  if(typeof obj !== 'object' || obj === null) {
    return obj
  }

  if(Array.isArray(obj)) {
    console.log('here')
    return obj.map(cloneObj)
  }

  const clonedObj = Odject.assign({}, obj)

  for(let key of Object.keys(clonedObj)) {
    if(typeof clonedObj[key] === 'object') {
      clonedObj[key] = cloneObj(clonedObj[key])
    }
  }

  return clonedObj
}

const arr1 = [7,85,5,6,'fgh']

const arr2 = cloneObj(arr1);
console.log(arr1);
arr2[0] = "mama"
console.log(arr2);
console.log(arr1);