Array.prototype.myReduce = function(cb, init = this[0]) {
  let acc = init
  for(let i = 0; i < this.length; i++) {
    acc = cb.call(this, acc, this[i], i, this)
  }
  return acc
}

Array.prototype.myMap = function(cb) {
  let results = []

  for(let i = 0; i < this.length; i++) {
    results.push(cb.call(this, this[i], i, this))
  }

  return results
}

Array.prototype.myFilter = function(predicate) {
  let results = []

  for(let i = 0; i < this.length; i++) {
    let result = predicate.call(this, this[i], i, this)
    if(result) results.push(this[i])
  }
  
  return results
}

const arr = [1,2,3,5,7]

console.log(arr.myReduce((acc,cur,i,arr) => {
  console.log(i,arr)
  acc += cur
  return acc
}, 0))

console.log(arr.myMap((el,i,arr) => {
  console.log(i)
  console.log(arr)
  return el*2
}))

console.log(arr.myFilter((el,i,arr) => {
  console.log(i)
  console.log(arr)
  return el > 3
}))