  function limitCalls(fn, limit, callback) {
    count = 0

    return function (...args) {
      count++
      if (count <= limit) {
        fn(...args)
      } else {
        callback()
      }
    }
  }



function log(title, message) {
  console.log(title + ": " + message);
}

const logLimited = limitCalls(log, 3, () => console.log("finish"));

logLimited.reset = function() {
  this.count = 0
}

logLimited("title", "desc"); // 'title: desc'

logLimited("title2", "desc"); // 'title2: desc'

logLimited("title3", "desc"); // 'title3: desc'

logLimited("title4", "desc"); // 'не сработает'

logLimited.reset.call(limitCalls()); // Сбросили счетчик

logLimited("title5", "desc"); // 'title5: desc'

logLimited("title6", "desc"); // 'title6: desc'

logLimited("title7", "desc"); // 'title7: desc'

// const logLimited2 = limitCalls(log, 2, () => console.log("finish"));
// logLimited2("foo", "bar"); // 'foo: bar'

// logLimited2("foo2", "bar"); // 'foo2: bar'

// logLimited2("foo3", "bar"); // 'foo2: bar'
