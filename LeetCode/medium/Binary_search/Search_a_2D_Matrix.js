//You are given an m x n integer matrix matrix with the following two properties:
// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.
// You must write a solution in O(log(m * n)) time complexity.

// Example 1:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

// Example 2:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

const searchMatrix = (matrix, target) => {
  let rows = matrix.length, cols = matrix[0].length;
  let top = 0 , bot = rows - 1

  while (top <= bot) {
    let midRow = Math.floor((top + bot) / 2)
    if(target > matrix[midRow][cols - 1]) {
      top = midRow + 1
    } else if (target < matrix[midRow][0]) {
      bot = midRow - 1
    } else break
  }

  if(!(top <= bot)) return false
  let row = Math.floor((top + bot) / 2)
  let l = 0, r = cols - 1

  while(l <= r) {
    let mid = Math.floor((l + r) / 2)
    if(matrix[row][mid] === target) return true
    if(matrix[row][mid] < target) {
      l = mid + 1
    } else if (matrix[row][mid] > target) {
      r = mid - 1
    }
  }
  return false
}

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3))

