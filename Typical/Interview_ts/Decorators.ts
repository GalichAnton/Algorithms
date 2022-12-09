class TestServiceDeco {
  @LogTime()
  testLogging(n) {
    let res = 0;
    for (let i = 0; i < n; i++) {
      res = res + i * i * i;
    }
    return res;
  }
}

function LogTime() {
  return (
    target: Object,
    propertyName: string,
    descriptor: TypedPropertyDescriptor<Function>
  ) => {
    const method = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.time(propertyName || "LogTime");
      const result = method?.apply(this, args);
      console.timeEnd(propertyName || "LogTime");
      return result;
    };
  };
}

const testInst = new TestServiceDeco();

console.log(testInst.testLogging(1656));
