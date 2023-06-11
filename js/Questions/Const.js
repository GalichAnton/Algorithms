function func() {
  const a = b = c = 1
}
func()
console.log(typeof a, typeof b, typeof c)

// "undefined"
// "number"
// "number"