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

fetchWithRetry(() => Promise.reject('OOPS!!!'), {
  retry: (i) => {
    console.log(i)
    if (i < 5) {
      return i * 1000;
    }
    return false
  }
}).catch(console.error)

function requestWithRetry(request, delay, maxAttempts) {
  return new Promise((resolve, reject) => {
    let attempts = 0;

    function doRequest() {
      attempts++;

      request()
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          if (attempts < maxAttempts) {
            setTimeout(doRequest, delay);
          } else {
            reject(error);
          }
        });
    }

    doRequest();
  });
}


// Пример использования:
requestWithRetry(() => fetch('https://api.example.com/data'), 3, 1000)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });

