const promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("one"), 2000);
});
const promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("two"), 1000);
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
          }
        })
        .catch((err) => reject(err));
    });
  });
}
promiseAll([promise1, promise2]).then(res => console.log(res));;

function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise
        .then((result) => {
          resolve(result)
        }).catch((err) => reject(err));
    });
  });
}

//promiseRace([promise1, promise2]).then(res => console.log(res));


function promiseAllSettled(promises) {
  return new Promise((resolve,reject) => {
    let results = []
    let resolvedCount = 0
    promises.forEach((promise, i) => {
      promise
        .then(
          (result) => {
            results[i] = {value:result, status: 'fullfilled'}
            resolvedCount++
            if(resolvedCount === promises.length) resolve(results)
          },
          (err) => {
            results[i] = {reason: err, status:'rejected'}
            resolvedCount++
            if(resolvedCount === promises.length) resolve(results)
          }
        )
    })
  })
}

//allSettled([promise1,promise2]).then(res => console.log(res))

function promiseAny(promises) {
  return new Promise((resolve, reject) => {
    let errors = [];
    promises.forEach((promise) => {
      promise.then(resolve).catch((error) => {
        errors.push(error);
        if (errors.length === promises.length) {
          reject(errors);
        }
      });
    });
  });
}


























