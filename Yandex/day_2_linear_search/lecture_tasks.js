function findFirst(arr, value) {
  let res = -1
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === value && res === -1) {
      res = i
    }
  }
  return res
}

console.log(findFirst([1,2,3,4,5,6,7,8,5,5,9,10], 5))

function findLast(arr, value) {
  let res = -1
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === value) {
      res = i
    }
  }
  return res
}

console.log(findLast([1,2,3,4,5,6,7,8,5,5,9,10], 5))

function findMax(arr) {
  let max = 0
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] > arr[max]) {
      max = i
    }
  }
  return arr[max]
}
console.log(findMax([1,2,3,4,5,6,7,8,5,5,9,10]))

function findMaxPrevMax(arr) {
  let max = Math.max(arr[0], arr[1])
  let prevMax = Math.min(arr[0], arr[1])
  for(let i = 2; i < arr.length; i++) {
    if(arr[i] > arr[max]) {
      prevMax = max
      max = arr[i]
    } else if (arr[i] > arr[prevMax]) {
      prevMax = arr[i]
    }
  }
  return [max, prevMax]
}

console.log(findMaxPrevMax([1,2,3,4,5,6,7,8,5,5,9,10]))

function findMinEven(arr) {
  let res = -1
  let flag = false
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0 && (!flag || arr[i] < res)) {
      res =  arr[i]
      flag = true
    }
  }
  return res
}

console.log(findMinEven([1,2,3,4,5,6,7,8,5,5,9,10]))

function findMinWords(words) {
  let min = words[0]
  let ans = []
  for(let word of words) {
    if(word.length < min.length) {
      min = word
    }
  }

  for(let word of words) {
    if(word.length === min.length) {
      ans.push(word)
    }
  }
  return ans.join(' ')
}

console.log(findMinWords(['hello', 'world', 'in', 'aa', 'frame']))

function anountOfWater(arr) {
  let maxpos = 0
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[maxpos]) {
      maxpos = i
    }
  }
  let res = 0
  let maxNow = 0
  for (let i = 0; i < maxpos; i++) {
    if (arr[i] > maxNow) {
      maxNow = arr[i]
    } else {
      res += maxNow - arr[i]
    }
  }
  maxNow = 0
  for (let i = arr.length - 1; i > maxpos; i--) {
    if (arr[i] > maxNow) {
      maxNow = arr[i]
    } else {
      res += maxNow - arr[i]
    }
  }
  return res
}

console.log(anountOfWater([3,1,3, 4,1,4]))

function RLE(str) {
  let normalizeStr = str.toUpperCase()
  let res = []
  let count = 0
  for(let i = 0; i < normalizeStr.length ; i++) {
    if(normalizeStr[i] === normalizeStr[i + 1]) {
      count++
    } else {
      res.push(normalizeStr[i],(count ? count : ''))
      count = 0
    }
  }

  return res.join('')
}

console.log(RLE('aaaabbbbccccdgf'))