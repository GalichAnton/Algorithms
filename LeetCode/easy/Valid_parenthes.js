/*
Path https://leetcode.com/problems/valid-parentheses/description/
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

var isValid = function(s) {
  const opened = "[{(";
  const closed = "}])"
  const bracket = {
    "]":'[',
    '}':'{',
    ')':'('
  }
  const stack = []

  for(let i = 0; i < s.length; i++){
    if(opened.includes(s[i])) {
      stack.push(s[i])
    } else if (closed.includes(s[i])) {
      let last = stack.pop()
      if (bracket[s[i]] !== last){
        return false
      }
    }
  }
  return stack.length === 0

};

console.log(isValid("()[]{}"))