function requestWithTimeout(request, maxWaitTime) {
  return new Promise((resolve, reject) => {
    let timeoutId = setTimeout(() => {
      reject(new Error('Request timed out'));
    }, maxWaitTime);

    request()
      .then((result) => {
        clearTimeout(timeoutId);
        resolve(result);
      })
      .catch((error) => {
        clearTimeout(timeoutId);
        reject(error);
      });
  });
}