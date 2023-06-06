/* Promise is resolved immeditely, then 
finally handler is queued to `microtask queue` */
Promise.resolve(1)
  /* This finally handler is dequeued and executed. Since finally receives
no arguments thus `data===undefined` */
  .finally((data) => {
    console.log(data);
    return Promise.reject("error");
  })
  /* after return from finally handler, catch error handler is queued to
  'microtask queue'. Thus, it is dequeued and executed. It receives `error` 
  as argument from previous reject and prints `error`. Finally it throw an error */
  .catch((error) => {
    console.log(error);
    throw "error2";
  })
  /* it is queued to microtask queue after execution completion of last catch 
  error handler. Then it is dequeued, and executed. Since finally doesn't receive
  any argument thus `data===undefined`. It prints `undefined`. */
  .finally((data) => {
    console.log(data);
    /* Promise is resolved instantnially. Then `console.log` queued and dequeued 
    from microtask queue. Print `2`. This function returns `undefined. */
    return Promise.resolve(2).then(console.log);
  })
  /* it is skipped because there was rejected promise before finally */
  .then(console.log)
  /* rejected promise is printed i.e. `error2` */
  .catch(console.log);