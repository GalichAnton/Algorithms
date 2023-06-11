class Dev {
  #name
  constructor(name) {
    this.#name = name
  }
  get name() {
    return this.#name;
  }
}

const dev = new Dev('BFE')
console.log(dev.name) // "BFE"

const proxyDev = new Proxy(dev, {})
console.log(proxyDev.name) // Error