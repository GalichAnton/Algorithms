const promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("one"), 2000);
});
const promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => reject("error"), 1000);
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

promiseRace([promise1, promise2]).then(res => console.log(res));


function allSettled(promises) {
  return Promise.all(promises.map(p => {
    return p.then(
      value => { 
        return { status: 'fulfilled', value: value }; 
      }, 
      reason => { 
        return { status: 'rejected', reason: reason }; 
      }
    )
  }));
}

allSettled([promise1,promise2]).then(res => console.log(res))




























