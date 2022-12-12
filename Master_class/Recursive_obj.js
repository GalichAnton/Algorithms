log({
  a: {
    l: {u: 8},
    b: 1,
  },
  c: {
    d: 2,
    e: {
      f: 7,
    }
  },
  j: 4
})
// DFS
// function log(obj) {
//   for (const key in obj) {
//     if(!obj.hasOwnProperty(key)) continue
//     if (typeof obj[key] === 'object') {
//       log(obj[key])
//     } else {
//       console.log(key, obj[key])
//     }
//   }
// }

//BFS
// function log(obj) {
//   const queue = [obj]
//
//   while(queue.length) {
//     const current = queue.shift()
//     for (const key in current) {
//       if(!current.hasOwnProperty(key)) continue
//       if (typeof current[key] === 'number') {
//         console.log(key, current[key])
//       } else {
//         queue.push(current[key])
//       }
//     }
//   }
// }

// Stack
function log(obj) {
  const stack = [obj]

  while (stack.length) {
    const current = stack.pop()
    for (const key in current) {
      if (typeof current[key] === 'number') {
        console.log(current[key])
      } else {
        stack.push(current[key])
      }
    }
  }
}