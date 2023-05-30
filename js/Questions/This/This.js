const a = {
  dev: 'Anton',
  update: name => {
    this.dev = name
  }
}
a.update('Jonh')
console.log(a.dev)

// Anton
