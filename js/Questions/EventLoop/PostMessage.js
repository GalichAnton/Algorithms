console.log(1)

window.onmessage = () => {
  console.log(2)
}

Promise.resolve().then(() => {
  console.log(3)
})

setTimeout(() => {
  console.log(4)
}, 0)

console.log(5)

window.postMessage('')

console.log(6)

// Chrome: 1 -> 5 -> 6 -> 3 -> 4 -> 2

// Safari: 1 -> 5 -> 6 -> 3 -> 2 -> 4