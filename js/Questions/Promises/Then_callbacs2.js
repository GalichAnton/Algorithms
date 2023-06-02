Promise.resolve(1)
.then((val) => {
  console.log(val) // resolve with value 1
  return val + 1  //  return 2  
}).then((val) => {
  console.log(val) // 2
  // return undefined
}).then((val) => {
  console.log(val)  // undefined   
  return Promise.resolve(3)
    .then((val) => {
      console.log(val) // 3
      // return undefined
    })
}).then((val) => {
  console.log(val)  // undefined 
  return Promise.reject(4)  // return 4    
}).catch((val) => {
  console.log(val)  // 4
  // return undefined
}).finally((val) => {
  console.log(val)  // undefined: finally has no arguments
  return 10   // no effect on promise object
}).then((val) => {
  console.log(val)  // undefined: because last 'catch()' handled the promise object with 'undefined'
})