//A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
// it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

const isPalindrome = function(s) {
  let str = s.toLowerCase().replace(/[^0-9a-z]/g, '')
  let left = 0
  let right = str.length - 1

  while(left < right) {
    if(str[left] !== str[right]) {
      return false
    }
    left++
    right--
  }

  return true
};

console.log(isPalindrome("ab_a"))


//Given a string s, return true if the s can be palindrome after deleting at most one character from it.
// Example 1:
// Input: s = "aba"
// Output: true
// Example 2:
// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:
// Input: s = "abc"
// Output: false

const validPalindrome = function(s) {
  let start = 0, end = s.length - 1

  const checkValid = (start, end) => {
    while (start < end) {
      if ( s[start] !== s[end]) {
        return false
      }
      start++
      end--
    }
    return true
  }

  while (start < end) {
    if (s[start] !== s[end]) {
      return checkValid(start + 1, end) || checkValid(start, end - 1)
    }
    start++
    end--
  }
  return true
};

console.log(validPalindrome('abca'))
