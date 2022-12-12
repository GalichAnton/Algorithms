//Необходимо напиать функцию, которая принимает на вход функцию, которая принимает на вход колбек и возвращает промис
const fs = require('fs')
function openFile(path, cb) {
  fs.readFile(path, cb)
}

const openFilePromise = promisify(openFile)

openFilePromise('foo.txt').then(console.log,console.error)

function promisify(fn) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
    })
  }
}
