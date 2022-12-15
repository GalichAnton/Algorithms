//Example 1: 20. Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// The string is valid if all open brackets are closed by the same type of closing bracket in the correct order,
// and each closing bracket closes exactly one open bracket.
// For example, s = "({})" and s = "(){}[]" are valid, but s = "(]" and s = "({)}" are not valid.

var isValid = function(s) {
  let stack = [];
  const matching = {
    "(": ")",
    "[": "]",
    "{": "}"
  }

  for (const c of s) {
    if (c in matching) { // if c is an opening bracket
      stack.push(c);
    } else {
      if (!stack.length) {
        return false;
      }

      let previousOpening = stack.pop();
      if (matching[previousOpening] !== c) {
        return false;
      }
    }
  }

  return !stack.length;
};

console.log(isValid('()[]{}'))

//Example 2: 1047. Remove All Adjacent Duplicates In String
// You are given a string s. Continuously remove duplicates (two of the same character beside each other) until you can't anymore.
// Return the final string after this.
// For example, given s = "abbaca", you can first remove the "bb" to get "aaca".
// Next, you can remove the "aa" to get "ca". This is the final answer.

var removeDuplicates = function(s) {
  let stack = [];
  for (const c of s) {
    if (stack.length && stack[stack.length - 1] === c) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  return stack.join("");
};

console.log(removeDuplicates('abbace'))

//Example 3: 844. Backspace String Compare
// Given two strings s and t, return true if they are equal when both are typed into empty text editors.
// '#' means a backspace character.
// For example, given s = "ab#c" and t = "ad#c", return true. Because of the backspace, the strings are both equal to "ac".

var backspaceCompare = function(s, t) {
  let build = s => {
    let stack = [];
    for (const c of s) {
      if (c !== "#") {
        stack.push(c);
      } else if (stack.length) {
        stack.pop();
      }
    }

    return stack.join("");
  }

  return build(s) === build(t);
};

console.log(backspaceCompare('ab#c', 'ad#c'))

//Given a string path, which is an absolute path (starting with a slash '/') to a file or directory in a Unix-style file system,
// convert it to the simplified canonical path.
// In a Unix-style file system, a period '.' refers to the current directory,
// a double period '..' refers to the directory up a level, and any multiple consecutive slashes (i.e. '//') are treated as a single slash '/'.
// For this problem, any other format of periods such as '...' are treated as file/directory names.
//
// The canonical path should have the following format:
//
// The path starts with a single slash '/'.
// Any two directories are separated by a single slash '/'.
// The path does not end with a trailing '/'.
// The path only contains the directories on the path from the root directory to the target file or directory (i.e., no period '.' or double period '..')
// Return the simplified canonical path.
//

// Example 1:
// Input: path = "/home/"
// Output: "/home"
// Explanation: Note that there is no trailing slash after the last directory name.

// Example 2:
// Input: path = "/../"
// Output: "/"
// Explanation: Going one level up from the root directory is a no-op, as the root level is the highest level you can go.

// Example 3:
// Input: path = "/home//foo/"
// Output: "/home/foo"
// Explanation: In the canonical path, multiple consecutive slashes are replaced by a single one.

var simplifyPath = function(path) {
  let stack = [];

  for (let portion of path.split('/')) {
    if(portion === '..') {
      stack.pop()
    } else if (portion === '.' || !portion) {
      continue
    } else stack.push(portion)
  }

  return "/" + stack.join('/')
};

console.log(simplifyPath('/../'))

//Given a string s of lower and upper case English letters.
// A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where:
// 0 <= i <= s.length - 2
// s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa.
// To make the string good, you can choose two adjacent characters that make the string bad and remove them.
// You can keep doing this until the string becomes good.
// Return the string after making it good. The answer is guaranteed to be unique under the given constraints.
// Notice that an empty string is also good.

// Example 1:
// Input: s = "leEeetcode"
// Output: "leetcode"
// Explanation: In the first step, either you choose i = 1 or i = 2, both will result "leEeetcode" to be reduced to "leetcode".

// Example 2:
// Input: s = "abBAcC"
// Output: ""
// Explanation: We have many possible scenarios, and all lead to the same answer. For example:
// "abBAcC" --> "aAcC" --> "cC" --> ""
// "abBAcC" --> "abBA" --> "aA" --> ""

// Example 3:
// Input: s = "s"
// Output: "s"

var makeGood = function(s) {
  const stack = []

  for(let c of s) {
    if(stack.length && Math.abs(c.charCodeAt() - stack[stack.length - 1].charCodeAt()) === 32) {
      stack.pop()
    } else {
      stack.push(c)
    }
  }

  return stack.join('')
};

console.log(makeGood('abBAcC'))