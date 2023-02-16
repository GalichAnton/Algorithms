//You are given an m x n grid where each cell can have one of three values:
// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

// Example 1:
// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4

// Example 2:
// Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

// Example 3:
// Input: grid = [[0,2]]
// Output: 0
// Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.

const  orangesRotting = function(grid) {
  const queue = [];
  const ROWS = grid.length;
  const COLS = grid[0].length;
  let freshCount = 0;


  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (grid[row][col] === 2) {
        queue.push([row, col]);
      } else if (grid[row][col] === 1) {
        freshCount++;
      }
    }
  }

  let minutes = 0;

  while (queue.length > 0 && freshCount > 0) {
    const queueSize = queue.length;

    for (let i = 0; i < queueSize; i++) {
      const [row, col] = queue.shift();


      if (row > 0 && grid[row-1][col] === 1) {
        grid[row-1][col] = 2;
        freshCount--;
        queue.push([row-1, col]);
      }
      if (row < ROWS-1 && grid[row+1][col] === 1) {
        grid[row+1][col] = 2;
        freshCount--;
        queue.push([row+1, col]);
      }
      if (col > 0 && grid[row][col-1] === 1) {
        grid[row][col-1] = 2;
        freshCount--;
        queue.push([row, col-1]);
      }
      if (col < COLS-1 && grid[row][col+1] === 1) {
        grid[row][col+1] = 2;
        freshCount--;
        queue.push([row, col+1]);
      }
    }

    minutes++;
  }

  return freshCount === 0 ? minutes : -1;
};

console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]));