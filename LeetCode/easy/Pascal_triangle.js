//Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

var generate = function(numRows) {
  let res = [[1]]

  for(let i = 0; i < numRows - 1; i++) {
    let tmp = [0, ...res[res.length - 1], 0]
    let row = []
    for(let j = 0; j < (res[res.length - 1].length + 1); j++) {
      row.push(tmp[j] + tmp[j + 1])
    }
    res.push(row)
  }
  return res
};

console.log(generate(5))