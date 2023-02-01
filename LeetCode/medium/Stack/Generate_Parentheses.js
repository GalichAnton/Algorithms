//Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Example 2:
// Input: n = 1
// Output: ["()"]


const generateParenthesis = function(n) {
  let stack = []
  let result = []

  function backtrack(open, closed) {
    if(open === closed && open === n && closed === n) {
      const res = stack.join('')
      return result.push(res)
    }
    console.log(open === closed === n)
    if(open < n) {
      stack.push('(')
      backtrack(open + 1, closed)
      stack.pop()
    }
    if(closed < open) {
      stack.push(')')
      backtrack(open, closed + 1)
      stack.pop()
    }
  }

  backtrack(0,0)
  return result
};

console.log(generateParenthesis(3))