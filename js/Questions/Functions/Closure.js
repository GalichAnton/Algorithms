
let dev = 'bfe'

function a() {
  let dev = 'BFE'
  return function() {
    console.log(dev)
  }
}

dev = 'bigfrontend'

a()()