const obj = {
  name: 'user',
  age: '22',
  admin: true,
  roles: ['admin','user','main','teacher'],
  isNan: NaN,
  set: new Set([1,2,4]),
  map: new Map([['name', 'Vasya'],['age', {years : 12, months: 11}]]),
  fn: ()=> console.log('test'),
  [Symbol.iterator]: function() {
   return {
    keys : Object.keys(this),
    count : 0,
    next: function() {
      if(this.count < this.keys.length) {
        let key = this.count
        this.count++
        return {
          value: this.keys[key],
          done : false,
        }
      } else {
        return { done : true }
      }
    }
   } 
  }
}


function deepClone(val) {
  if(typeof val !== 'object' || val === null) {
    return val
  }

  if(Array.isArray(val)) {
    return val.map(deepClone)
  }

  if(val instanceof Map) {
    const copyMap = new Map();
    val.forEach((value, key) => {
      copyMap.set(key, deepClone(value));
    });
    return copyMap;
  }

  if(val instanceof Set) {
    return new Set(Array.from(val).map(deepClone))
  }

  const copy = Object.assign({}, val)
  const keys = Object.keys(copy)

  for(let key of keys) {
    if(typeof copy[key] === 'object') {
      copy[key] = deepClone(copy[key])
    }
  }
  
  return copy
}

function deepEqual(a, b) {
  if(typeof a !== typeof b) {
    console.log('type')
    return false
  }

  if(Number.isNaN(a) && Number.isNaN(b)) {
    console.log('Nan')
    return true
  }

  if (typeof a === "function" && typeof b === "function") {
    return a.toString() === b.toString();
  }

  if(typeof a !== 'object' || a === null || b === null) {
    console.log('primitive')
    return a === b
  }


  if (a instanceof Map && b instanceof Map) {
    if(a.size !== b.size) {
      return false
    }
    for(const [key, value] of a) {
      if(!b.has(key)) return false
      if(!deepEqual(value, b.get(key))) return false
    }

    return true
  }

  if (a instanceof Set && b instanceof Set) {
    if(a.size !== b.size) {
      return false
    }
    for(const value of a) {
      if(!b.has(value)) return false
    }

    return true
  }

  if (typeof a === "symbol" && typeof b === "symbol") {
    return a.toString() === b.toString();
  }

  if(Array.isArray(a) && Array.isArray(b)) {
  
    if(a.length !== b.length) {
      console.log('arraylength')
      return false
    }

    for(let i = 0; i < a.length; i++) {
      if(!deepClone(a[i], b[i])) {
        console.log('array item false')
        return false
      }
    }
    console.log('array item true')
    return true
  }

  const keysA = Object.keys(a)
  const keysB = Object.keys(b)

  if (keysA.length !== keysB.length) {
    console.log('key length')
    return false;
  }

  for(let i = 0; i < keysA.length; i++) {
    if(keysA[i] !== keysB[i]) {
      console.log('key name')
      return false
    }
  }  

  for(const key of keysA) {
    if(!deepEqual(a[key],b[key])) {
      return false
    }
  }

  return true
}


const copy = deepClone(obj)
//obj.map.set('name', 'Oleg')
// copy.roles[0] = 'mech'
// copy.set.delete(2)
// copy.map.delete('age')
//console.log(obj1, obj)

console.log(deepEqual(obj,copy))