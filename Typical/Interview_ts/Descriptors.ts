function log(target: Object, method: string, descriptor: PropertyDescriptor) {
  let originalMethod = descriptor.value;
  descriptor.value = function (...args: number[]) {
    console.log(JSON.stringify(args));
    let returnValue = originalMethod.apply(this, args);
    console.log(`${JSON.stringify(args)} => ${returnValue}`);
    return returnValue;
  };
}

class Calculator {
  @log
  add(x: number, y: number): number {
    return x + y;
  }
}

let calc = new Calculator();
let z = calc.add(4, 5);
z = calc.add(6, 7);
