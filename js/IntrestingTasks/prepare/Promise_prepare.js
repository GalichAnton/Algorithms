const promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("one"), 2000);
});
const promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("two"), 1000);
});

function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    let resolvedCount = 0
    const results = []
    promises.forEach((promise, i) => {
      promise
        .then((result) => {
          results[i] = result
          resolvedCount++
          if(resolvedCount === promises.length) {
            resolve(results)
          }
        })
        .catch((err) => reject(err))
    }) 
  }) 
}

function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise
        .then((result) => resolve(result))
        .catch((err) => reject(err))
    })
  })
}

function promiseAllSettled(promises) {
  return new Promise((resolve, reject) => {
    let resolvedCount = 0
    let results = []
    promises.forEach((promise, i) => {
      promise
        .then((result) => {
          results[i] = {value: result, status:'fullfield'}
          resolvedCount++
          if(resolvedCount === promises.length) {
            resolve(results)
          }
        },
        (err) => {
          results[i] = {reason: err, status:'rejected'}
          resolvedCount++
          if(resolvedCount === promises.length) {
            resolve(results)
          }
        })
    })
  })
}

function promiseWithRetry(promiseCb, maxReties, delay) {
  return new Promise((resolve,reject) => {
    let retries = 0
    function executor() {
      promiseCb()
        .then((result) => resolve(result))
        .catch((err) => {
          console.log('wait')
          retries++
          if(retries === maxReties) {
            reject(err)
          } else {
            setTimeout(() => {
              executor()
            }, delay)
          }
        })
    }
    executor()
  })
}

function promiseAny(promises) {
  return new Promise((resolve, reject) => {
    const errors = []
    let errCount = 0
    promises.forEach((promise, i) => {
      promise
        .then((result) => resolve(result))
        .catch((err) => {
          errors[i] = err
          errCount++
          if(errCount === promises.length) {
            reject(new AggregateError(errors))
          }
        })
    })
  })
}

// promiseAll([promise1, promise2]).then(res => console.log(res)).catch(console.log);
// promiseAllSettled([promise1, promise2]).then(res => console.log(res)).catch(console.log);
// promiseRace([promise1, promise2]).then(res => console.log(res)).catch(console.log);
// promiseAny([promise1, promise2]).then(res => console.log(res)).catch(console.log);
// promiseWithRetry(() => fetch('https://api.example.com/data'), 3, 2000)
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.error(error);
//   });




function fetchWithRetry(url, options, maxReties = 3, delay = 2000) {
  return new Promise((resolve, reject) => {
    let retries = 0
    function makeRequest() {
      fetch(url,options)
        .then((res) => {
          if(res.ok) {
            console.log('wait')
            resolve(res)
          } else {
            console.log('wait')
            retries++
            if(retries === maxReties) {
              reject(new Error(`Failed request to${url}`))
            } else {
              setTimeout(makeRequest, delay)
            }
          }
        }).catch((err) => {
          retries++
          console.log('wait')
          if(retries === maxReties) {
            reject(err)
          } else {
            setTimeout(makeRequest, delay)
          }
        })
    }

    makeRequest()
  })
}

fetchWithRetry('https://api.example.com/data', { method: 'GET' })
.then(response => {
  console.log('Success:', response);
})
.catch(error => {
  console.error('Error:', error);
});