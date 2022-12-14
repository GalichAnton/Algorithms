//Example 1: 1. Two Sum
// Given an array of integers nums and an integer target, return indices of two numbers such that they add up to target.
// You cannot use the same index twice.

var twoSum = function(nums, target) {
  let dic = new Map();
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let complement = target - num;
    if (dic.has(complement)) {
      return [i, dic.get(complement)];
    }

    dic.set(num, i);
  }

  return [-1, -1];
};

console.log(twoSum([5,2,7,10,3,9], 8))

//Example 2: 2351. First Letter to Appear Twice
//Given a string s, return the first character to appear twice.
//It is guaranteed that the input will have a duplicate character.

var repeatedCharacter = function(s) {
  let seen = new Set();
  for (const c of s) {
    if (seen.has(c)) {
      return c;
    }

    seen.add(c);
  }

  return " ";
};

console.log(repeatedCharacter('ghfjgh'))

//Example 3: Given an integer array nums,
//find all the numbers x that satisfy the following: x + 1 is not in nums, and x - 1 is not in nums.

const findNumbers = nums => {
  let ans = [];
  let numsSet = new Set(nums);

  for (const num of nums) {
    if (!numsSet.has(num + 1) && !numsSet.has(num - 1)) {
      ans.push(num);
    }
  }

  return ans;
}

console.log(findNumbers([1,3,5,7,8]))

//A pangram is a sentence where every letter of the English alphabet appears at least once.
// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

// Example 1:
// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.

// Example 2:
// Input: sentence = "leetcode"
// Output: false

var checkIfPangram = function(sentence) {
    const set = new Set(sentence)

  return set.size === 26
};

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"))

//Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Example 1:
// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

// Example 2:
// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

// Example 3:
// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

var missingNumber = function(nums) {
  const map = new Set(nums)

  for (let i = 0; i <= nums.length; i++) {
    if (!map.has(i)) {
      return i
    }
  }
  return -1
};

console.log(missingNumber([0,1]))

//Given an integer array arr, count how many elements x there are, such that x + 1 is also in arr.
//If there are duplicates in arr, count them separately.

// Example 1:
// Input: arr = [1,2,3]
// Output: 2
// Explanation: 1 and 2 are counted cause 2 and 3 are in arr.

// Example 2:
// Input: arr = [1,1,3,3,5,5,7,7]
// Output: 0
// Explanation: No numbers are counted, cause there is no 2, 4, 6, or 8 in arr.

var countElements = function(arr) {
  const set = new Set(arr)
  let res = 0

  for (let i = 0; i <= arr.length; i++) {
    if (set.has(arr[i] + 1)) {
      res += 1
    }
  }
  return res
};

console.log(countElements([1,2,3]))