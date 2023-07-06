const obj = {
  name: 'user',
  age: '22',
  admin: true,
  [Symbol.iterator]: function() {
    return {
      values: Object.values(this),
      count: 0,
      next: function() {
        if(this.count < this.values.length) {
          let i = this.count
          this.count++
          return {
            value: this.values[i],
            done: false
          }
        } else {
          return { done: true }
        }
      } 
    }
  }
}

console.log(obj[Symbol.iterator])

for(const val of obj) {
  console.log(val)
}