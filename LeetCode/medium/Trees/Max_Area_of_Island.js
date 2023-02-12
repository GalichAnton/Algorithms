//You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.)
// You may assume all four edges of the grid are surrounded by water.
// The area of an island is the number of cells with a value 1 in the island.
// Return the maximum area of an island in grid. If there is no island, return 0.

// Example 1:
// Input: grid = [
// [0,0,1,0,0,0,0,1,0,0,0,0,0],
// [0,0,0,0,0,0,0,1,1,1,0,0,0],
// [0,1,1,0,1,0,0,0,0,0,0,0,0],
// [0,1,0,0,1,1,0,0,1,0,1,0,0],
// [0,1,0,0,1,1,0,0,1,1,1,0,0],
// [0,0,0,0,0,0,0,0,0,0,1,0,0],
// [0,0,0,0,0,0,0,1,1,1,0,0,0],
// [0,0,0,0,0,0,0,1,1,0,0,0,0]
// ]
// Output: 6
// Explanation: The answer is not 11, because the island must be connected 4-directionally.

// Example 2:
// Input: grid = [[0,0,0,0,0,0,0,0]]
// Output: 0

const maxAreaOfIsland = function(grid) {
  const rows = grid.length, columns = grid[0].length
  const seen = new Array(rows).fill().map(() => new Array(columns));

  function dfs(r,c) {
    if(r < 0 || c < 0 || r === rows || c === columns
      || grid[r][c] === 0 || seen[r][c]
    )  {
      return 0
    }

    seen[r][c] = true;
    return (1 + dfs(r + 1, c) +
      dfs(r - 1, c) +
      dfs(r, c + 1) +
      dfs(r, c - 1)
    )
  }

  let area = 0
  for (let r = 0;  r < rows; r++) {
    for(let c = 0; c < columns; c++) {
      area = Math.max(area, dfs(r,c))
    }
  }

  return area
};

console.log(maxAreaOfIsland([
  [0,0,1,0,0,0,0,1,0,0,0,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,1,1,0,1,0,0,0,0,0,0,0,0],
  [0,1,0,0,1,1,0,0,1,0,1,0,0],
  [0,1,0,0,1,1,0,0,1,1,1,0,0],
  [0,0,0,0,0,0,0,0,0,0,1,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,0,0,0,0,0,0,1,1,0,0,0,0]
]))