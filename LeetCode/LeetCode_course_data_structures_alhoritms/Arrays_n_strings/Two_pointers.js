//Example 1: Return true if a given string is a palindrome, false otherwise.
// A string is a palindrome if it reads the same forwards as backwards.
// That means, after reversing it, it is still the same string.
// For example: "abcdcba", or "racecar".

const checkIfPalindrome = function(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

console.log(checkIfPalindrome("racecar"));

//Example 2: Given a sorted array of unique integers and a target integer, return true if there exists a pair of numbers that sum to target, false otherwise.
// This problem is similar to Two Sum.
// For example, given nums = [1, 2, 4, 6, 8, 9, 14, 15] and target = 13, return true because 4 + 9 = 13.

function checkForTarget(nums, target) {
  let left = 0
  let right = nums.length - 1
  let res = []

  while(left < right) {
    let current = nums[left] + nums[right]
    if(current === target) {
      res.push(nums[left])
      res.push(nums[right])
    }
    if(current > target) right--
    else left++
  }

  return res.length ? res : false
}

console.log(checkForTarget([1,9,18,19,22], 31))

//Example 3: Given two sorted integer arrays, return an array that combines both of them and is also sorted.
function combine(arr1, arr2) {
  let i = 0
  let j = 0
  const ans = []

  while(i < arr1.length && j < arr2.length) {
    if(arr1[i] < arr2[j]) {
      ans.push(arr1[i])
      i++
    } else {
      ans.push(arr2[j])
      j++
    }
  }

  while (i < arr1.length) {
    ans.push(arr1[i])
    i++
  }

  while (j < arr2.length) {
    ans.push(arr2[j])
    j++
  }

  return ans
}

console.log(combine([1,2,5,6,7,8,9],[1,2,3,4]))

//Example 4:
// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none)
// of the characters without disturbing the relative positions of the remaining characters.
// (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

function isSubsequence(sub, source) {
  let i = j = 0

  while (i < sub.length && j < source.length) {
    if(sub[i] === source[j]) {
      i++
      j++
    }
    else j++
  }

  return i === sub.length
}

console.log(isSubsequence('ace','abcde'))

//Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:
// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

const reverseString = function(s) {
  let left = 0
  let right = s.length - 1

  while(left < right) {
    [s[left], s[right]] = [s[right], s[left]]
    left++
    right--
  }

  return s
};

console.log(reverseString(["h","e","l","l","o"]))

//Given an integer array nums sorted in non-decreasing order,
//return an array of the squares of each number sorted in non-decreasing order.
// Example 1:
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

const sortedSquares = function(nums) {
  let left = 0
  let right = nums.length - 1
  let ans = []


  for(let i = nums.length - 1; i >= 0; i--) {
    let square
    if(Math.abs(nums[left]) < Math.abs(nums[right])) {
      square = nums[right]
      right--
    } else {
      square = nums[left]
      left++
    }

    ans[i] = square*square
  }

  return ans
};

console.log(sortedSquares([-4,-1,0,3,10]))