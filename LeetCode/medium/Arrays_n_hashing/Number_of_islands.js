/*
Path https://leetcode.com/problems/number-of-islands/description/
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
*/

var numIslands = function(grid) {
  if(grid.length === 0) return 0

  let counter = 0
  let rowsL = grid.length
  let colsL = grid[0].length

  function markNeighbor(grid,R,C) {
    grid[R][C] = "7"
    if(grid[R][C - 1] === "1") { markNeighbor(grid, R, C - 1) }
    if(grid[R][C + 1] === "1") { markNeighbor(grid, R, C + 1) }
    if(grid?.[R - 1]?.[C] === "1") { markNeighbor(grid, R - 1, C ) }
    if(grid?.[R + 1]?.[C] === "1") { markNeighbor(grid, R + 1, C ) }
  }

  for(let R = 0; R < rowsL; R++){
    for(let C = 0; C < colsL; C++){
      if(grid[R][C] === "1") {
        counter++
        markNeighbor(grid, R, C)
      }
    }
  }

  return counter
};

console.log(numIslands([  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]]))
