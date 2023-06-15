const createPromise = () => Promise.resolve(1)

function func1() {
  createPromise().then(console.log)
  console.log(2)
}

async function func2() {
  await createPromise()
  console.log(3)
}

console.log(4)
func1()
func2()

// 4
// 2
// 1
// 3