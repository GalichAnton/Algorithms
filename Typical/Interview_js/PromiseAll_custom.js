const promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("one"), 1000);
});
const promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => reject("error"), 2000);
});

function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let resolvedCount = 0;
    promises.forEach((promise, index) => {
      promise
        .then((result) => {
          results[index] = result;
          resolvedCount++;
          if (resolvedCount === promises.length) {
            resolve(results);
            console.log(results);
          }
        })
        .catch((err) => reject(err));
    });
  });
}
//promiseAll([promise1, promise2]);










function promiseAll2(promises) {
  return new Promise((res, rej) => {
    let results = []
    let count = 0
    promises.forEach((promise, index) => {
      promise.then((val) => {
        results[index] = val
        count++
        if(count === promises.length) {
          res(results)
        }
      })
        .catch((err) => rej(err))
    })
  })
}






promiseAll2([promise1, promise2]).then(console.log).catch(console.log);


















