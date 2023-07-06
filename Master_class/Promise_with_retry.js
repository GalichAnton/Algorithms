// Необходимо написать обертку над Promise, с возможностью повтора запроса в случае неудачи.
// Функция должна принимать параметр функцию, которая получает какой по счету перезапрос и
// возвращаеть количество миллисекунд до следующего запроса. Или false, если больше не нужно повторять запрос.
// В случае если функция вернула false, то промис должен быть отклонен с ошибкой.



function fetchWithRetry(exec, options = {}) {
  let i = 0

  return innerExec()

  function innerExec() {
    return exec().catch((err) => {
      i++;

      if (options.retry == null) {
        throw err
      }

      const delay = options.retry(i)

      switch (delay) {
        case true: return innerExec()
        case false: throw err
        default: return new Promise((resolve) => {
            setTimeout(() => resolve(innerExec()), delay)
          })
      }
    })
  }
}

// fetchWithRetry(() => Promise.reject('OOPS!!!'), {
//   retry: (i) => {
//     console.log(i)
//     if (i < 5) {
//       return i * 1000;
//     }
//     return false
//   }
// }).catch(console.error)

function executeWithRetry(promiseFn, maxRetries = 3, retryDelay = 1000) {
  let retries = 0;
  return new Promise((resolve, reject) => {
    const tryRequest = () => {
      promiseFn().then(result => {
        resolve(result);
      }).catch(error => {
        console.log('wait')
        retries++;
        if (retries >= maxRetries) {
          reject(error);
        } else {
          setTimeout(tryRequest, retryDelay);
        }
      });
    }
    tryRequest();
  });
}

function promiseWithRetry(promiseCb, maxRetry, delay) {
  return new Promise((resolve, reject) => {
    let retries = 0
    const executor = () => {
      promiseCb()
        .then((result) => {
          resolve(result)
        })
        .catch((err) => {
          retries++
          if(retries > maxRetry) {
            reject(err)
          } else {
            setTimeout(executor, delay)
          }
        })
    } 
    executor()
  })
}


//Пример использования:
promiseWithRetry(() => fetch('https://api.example.com/data'), 3, 2000)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });



const promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("one"), 2000);
});
const promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("two"), 1000);
});

function promiseAll(promises) {
  return new Promise((resolve,reject) => {
    let resolveCount = 0
    let results = []
    promises.forEach((promise, i) => {
      promise
        .then((result) => {
          results[i] = result
          resolveCount++
          if(resolveCount === promises.length) {
            resolve(results)
          }
        })
        .catch((err) => {
          reject(err)
        })
    })
  })
}
// promiseAll([promise1, promise2]).then((res) => console.log(res)).catch(console.log);


function promiseAllSettled(promises) {
  return new Promise((resolve, reject) => {
    let count = 0
    let results = []
    promises.forEach((promise, i) => {
      promise
        .then((res) => {
          results[i] = {value: res, status:'fullfield'}
          count++
          if(count === promises.length) {
            resolve(results)
          }
        })
        .catch((err) => {
          results[i] = {reason: err, status:'rejected'}
          count++
          if(count === promises.length) {
            reject(results)
          }
        })
    })
  })
}

//promiseAllSettled([promise1, promise2]).then((res) => console.log(res)).catch(console.log);

function promiseRace(promises) {
  return new Promise ((resolve, reject) => {
    promises.forEach((promise) => {
      promise
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  })
}