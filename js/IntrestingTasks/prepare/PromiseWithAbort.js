const controller = new AbortController();
const signal = controller.signal;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success!');
  }, 5000);
  
  signal.addEventListener('abort', () => {
    reject('Aborted!');
  });
});

promise.then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});

// Через 3 секунды прервем выполнение промиса
setTimeout(() => {
  controller.abort();
}, 3000);

