class Samurai {
  constructor(name) {
    this.name = name;
  }
  hello() {
    alert(this.name);
  }
}

let shogun = new Samurai("Hanzo");
console.log(shogun.__proto__ === Samurai.prototype);
console.log(shogun.__proto__.constructor.__proto__ === Function.prototype);
console.log(shogun.__proto__.__proto__.__proto__ === null);
