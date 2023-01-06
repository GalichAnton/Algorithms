/*
Path https://leetcode.com/problems/valid-parentheses/description/
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

var isValid = function (s) {
  const bracket = {
    "]": '[',
    '}': '{',
    ')': '('
  }
  const stack = []

  for (const c of s) {
    if (c in bracket) {
      if (stack.length && stack[stack.length - 1] === bracket[c]) {
        stack.pop()
      } else {
        return false
      }
    } else {
      stack.push(c)
    }
  }
  return stack.length === 0
}

console.log(isValid("()[{]{}"))