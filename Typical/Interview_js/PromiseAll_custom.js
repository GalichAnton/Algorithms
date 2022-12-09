const promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("one"), 1000);
});
const promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("two"), 2000);
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
promiseAll([promise1, promise2]);