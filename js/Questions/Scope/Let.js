let a = 1;
(function() {
  let foo = () => a
  let a = 2;
  console.log(foo())
}())

// 2