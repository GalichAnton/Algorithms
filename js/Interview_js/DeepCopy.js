function deepCopy(src) {
  if (typeof src !== "object") {
    return src;
  } else {
    return Object.keys(src).reduce((acc, cur) => {
      acc = { ...acc, [cur]: deepCopy(src[cur]) };
      return acc;
    }, {});
  }
}

const obj = {
  name: "Vasya",
  age: "25",
  friend: {
    name: "Petya",
    age: "33",
    friendly: true
  }
};

const copy = deepCopy(obj);
copy.friend.friendly = false;
console.log(copy, obj);
