//Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.
// The distance between two adjacent cells is 1.

// Example 1
// Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
// Output: [[0,0,0],[0,1,0],[0,0,0]]

// Example 2:
// Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
// Output: [[0,0,0],[0,1,0],[1,2,1]]

const updateMatrix = function(mat) {
  const rows = mat.length;
  const cols = mat[0].length;
  const dist = new Array(rows).fill().map(() => new Array(cols).fill(Infinity));
  const queue = [];

  // Initialize distance of 0s to 0 and add them to the queue
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (mat[i][j] === 0) {
        dist[i][j] = 0;
        queue.push([i, j]);
      }
    }
  }

  // Perform breadth-first search starting from 0s
  while (queue.length > 0) {
    const [i, j] = queue.shift();
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    for (const [di, dj] of directions) {
      const ni = i + di;
      const nj = j + dj;
      if (ni >= 0 && ni < rows && nj >= 0 && nj < cols) {
        const newDist = dist[i][j] + 1;
        if (newDist < dist[ni][nj]) {
          dist[ni][nj] = newDist;
          queue.push([ni, nj]);
        }
      }
    }
  }

  return dist;
};