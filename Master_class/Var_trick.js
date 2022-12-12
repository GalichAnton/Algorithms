var fns = []

// for (var i = 0; i++ < 3;) {
//   fns.push(function () {
//     return i + i
//   })
// }

// for (var i = 0; i++ < 3;) {
//   (function (i) {
//     fns.push(function () {
//       return i + i
//     })
//   })(i)
// }
//
// console.log(fns[0]())
// console.log(fns[1]())

for (var i = 0; i++ < 3;) {
  (function(i) {
    setTimeout(function () {
      console.log(i)
    }, 1000 * i)
  })(i)
}