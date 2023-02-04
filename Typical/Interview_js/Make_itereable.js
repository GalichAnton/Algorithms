const obj = {
  name: "Toha",
  age: 25,
  [Symbol.iterator]: function* () {
    for (let key in this) {
      yield this[key];
    }
  }
};


Object.prototype.handle = "f";
for (let key in obj) {
  console.log(key);
}

const obj1 = {
  name: "Toha",
  age: 25,
  [Symbol.iterator]:function next() {
    for (let key in this) {
      if(this[key]) { 
        return {value: this[key], done: false}
      } else {
        return {value:undefined, done: true}
      }
    }
  }
};

for (let key in obj1) {
  console.log(key);
}
