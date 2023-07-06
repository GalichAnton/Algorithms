const times = (y) =>  (x) => x * y
const plus = (y) => (x) => x + y
const subtract = (y) =>  (x) => x - y
const divide = (y) => (x) => x / y

pipe([
  times(2),
  plus(3),
  times(4)
]) 
// (x * 2 + 3) * 4

function pipe(funcs) {
	return function(x) {
		return funcs.reduce((acc, cur) => {
			return cur.call(this, acc)
		},x)
	}
}