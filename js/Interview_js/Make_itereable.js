const obj = {
  name: "Toha",
  age: 25,
  [Symbol.iterator]: function* () {
    for (let key in this) {
      yield this[key];
    }
  }
};

console.dir(obj[Symbol.iterator])


Object.prototype.handle = "f";
// for (let key of obj) {
//   console.log(key);
// }

const user = {
  a:1,
  b:2,
  c:3,
  [Symbol.iterator](){
    return {
      keys : Object.keys(this),
      current : 0,
      next:function(){
        if(this.current < this.keys.length){
          let i = this.current;
          this.current++;
          return {
            done : false,
            value : this.keys[i],
          };
        } else {
          return {done : true};
        }
      }
    }
  }
}

for (let key of user) {
  console.log(key);
}
