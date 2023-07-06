const obj = {
  name: 'John',
  lastName: 'Smith',
  age: 30
};

const proxyObj = new Proxy(obj, {
  get(target, prop) {
    if (prop === 'fullName') {
      return `${target.name} ${target.lastName}`;
    }
    return target[prop];
  },
  set(target, prop, value) {
    if (prop === 'fullName') {
      const [firstName, lastName] = value.split(' ');
      target.name = firstName;
      target.lastName = lastName;
    } else {
      target[prop] = value;
    }
  }
});

console.log(proxyObj.name); // John
console.log(proxyObj.fullName); // John Smith

proxyObj.fullName = 'Jane Doe';
console.log(proxyObj.name); // Jane
console.log(proxyObj.lastName); // Doe