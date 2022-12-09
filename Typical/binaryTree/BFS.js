const graph = {}
graph.a = ['b', 'c']
graph.b = ['f']
graph.c = ['d', 'e']
graph.d = ['f']
graph.e = ['f']
graph.f = ['g']

function breadthSearch(graph, start, end) {
  let queue = [start]
  let count = 0
  const visited = {}
  visited[start] = true
  while (queue.length) {
    count++
    const current = queue.shift()
    if(!graph[current]) {
      graph[current] = []
    }
    if (graph[current].includes(end)) {
      return {
        path: true,
        count: count - 1,
      }
    } else {
      queue = [...queue, ...graph[current]]
    }

  }
  return false
}

console.log(breadthSearch(graph, 'a', 'g'))