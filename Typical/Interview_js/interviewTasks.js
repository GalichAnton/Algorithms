// const binary = (arr, target) => {
//   let l = 0
//   let r = arr.length - 1

//   while (l < r) {
//     let mid = Math.floor((l + r) / 2)

//     if(arr[mid] === target) return mid
//     if(arr[mid] < target) {
//       l = mid + 1
//     } else {
//      r = mid - 1
//     }
//   }
//   return l
// }

// console.log(binary([-6,1,3,6,77,88,99,345], 5))
const arr = [1,45, 3, 33, 5, 6, 78, 8, 9, 10,-56, 99, -100, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10];

const bubleSort = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      if(arr[j] > arr[j + 1]) {
        let tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
  }
  return arr
}

//console.log(bubleSort(arr))

const quickSort = (arr) => {
  if(arr.length < 2) {
    return arr
  }

  const l = []
  const r = []
  let pivotIndex = Math.floor(arr.length / 2)
  let pivot = arr[pivotIndex]

  for(let i = 0; i < arr.length; i++) {
    if(i !== pivotIndex) {
      if(arr[i] < pivot) {
        l.push(arr[i])
      } else {
        r.push(arr[i])
      }
    }
  }
  return [...quickSort(l), pivot, ...quickSort(r)]
}

//console.log(quickSort(arr))

const maxDepth = (root) => {
  if(!root) {
    return 0
  }

  let left = maxDepth(root.left)
  let right = maxDepth(root.right)

  return Math.max(left, right) + 1
}

const promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("one"), 1000);
});
const promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("two"), 2000);
});


const promiseAll = (promises) => {
  let results = []
  let resCount = 0
  return new Promise((resolve, reject) => {
    promises.forEach((promise,i) => {
      promise.then((res) =>{
        results[i] = res
        resCount++
        if(resCount === promises.length) {
          resolve(results)
        }
      })
      .catch((err) => reject(err))
    });
  }) 
}

promiseAll([promise1,promise2]).then((res) => console.log(res))

const deounce = (cb, delay) => {
  let timeout
  return function(...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      cb.apply(this, args)
    }, delay)
  }
} 

const throtle = (cb,delay) => {
  let isWaiting = false
  return function(...args) {
    if(isWaiting) return
    else {
      cb.apply(this,args)
      isWaiting = true
    }
    setTimeout(() => {
      isWaiting = false
    }, delay)
  } 
}

function factorial(n, m) {
  return n + m
}

const memo = (cb) => {
  const cash = new Map()
  return function(...args) {
    const key = args.join(",")
    if(cash.has(key)) {
      console.log('from cash')
      return cash.get(key)
    } else {
      const res = cb.apply(this, args)
      console.log('from cb')
      cash.set(key, res)
      return res
    }
  }
}

// const cashFactorial = memo(factorial)

// cashFactorial(5, 2)
// cashFactorial(4, 3)
// cashFactorial(3, 7)
// cashFactorial(4, 3)
// cashFactorial(5, 2)
// cashFactorial(1, 1)

const obgGlobal = {
  name: "obgGlobal",

  fooGlobal: function () {
    const innerObj = {
      a: "PHP",
      b: "JS",
      f: () => {
        console.log(this.name, this.a);
      },
      f3: function () {
        console.log(this, this.b);
      }
    };

    innerObj.f();
    innerObj.f3();

    const f2 = innerObj.f;
    f2();

    const f3 = innerObj.f3;
    f3();
  }
};
obgGlobal.fooGlobal();