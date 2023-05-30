function LogExecutionTime(target, key, descriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function(...args) {
    console.log(`Executing ${key} with arguments: ${JSON.stringify(args)}`);
    const startTime = Date.now();
    const result = originalMethod.apply(this, args);
    const endTime = Date.now();
    console.log(`Finished ${key} in ${endTime - startTime}ms. Returned: ${JSON.stringify(result)}`);
    return result;
  };
  return descriptor;
}

class MyClass {
  @LogExecutionTime
  myMethod(arg1, arg2) {
    return Math.pow(arg1,arg2)
  }
}



const test = new MyClass()

test.myMethod(100,100)