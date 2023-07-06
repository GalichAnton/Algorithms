function stringify(data) {
  if(typeof data === 'bigint') {
    throw new Error('Do not know how to serialize a BigInt at JSON.stringify');
  } 
  if(typeof data === 'string') {
    return `"${data}"`;
  } 
  if(typeof data === 'function') {
    return undefined;
  }
  if(data !== data) {
    return 'null';
  }
  if(data === Infinity) {
    return 'null';
  }
  if(data === -Infinity) {
    return 'null';
  }
  if(typeof data === 'number') {
   return `${data}`;
  }
  if(typeof data === 'boolean') {
    return `${data}`;
  }
  if(data === null) {
    return 'null';
  }
  if(data === undefined) {
    return 'null';
  }
  if(typeof data === 'symbol') {
    return 'null';
  }
  if(data instanceof Date) {
    return `"${data.toISOString()}"`;
  }
  if(Array.isArray(data)) {
    const arr = data.map((el) => stringify(el));
    return `[${arr.join(',')}]`;
  }
  if(typeof data === 'object') {
    const arr = Object.entries(data).reduce((acc, [key, value]) => {
      if(value === undefined) {
        return acc;
      }
      acc.push(`"${key}":${stringify(value)}`);
      return acc;
    }, [])
    return `{${arr.join(',')}}`;
  }
}

const obj = {
  name: 'user',
  age: '22',
  admin: true,
  roles: ['admin','user','main','teacher'],
  nan: NaN,
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

console.log(stringify(obj))

function parse(str) {
  if (str === '') throw Error()
  if (str[0] === "'") throw Error()
  if (str === '[]') return [];
  if (str === '{}') return {};
  if (str === 'null') return null;
  if (str === 'true') return true;
  if (str === 'false') return false;
  if (str[0] === '"') return str.slice(1, -1);
  if (+str === +str) return Number(str);

  if(str[0] === '{') {
    return str.slice(1, -1).split(',').reduce((acc, item) => {
      const index = item.indexOf(':');
      const key = item.slice(0, index)
      const value = item.slice(index + 1);
      acc[parse(key)] = parse(value);
      
      return acc;
    }, {});
  }

  if (str[0] === '[') return str.slice(1, -1).split(',').map((value) => parse(value));;
}

console.log(parse(stringify(obj)))