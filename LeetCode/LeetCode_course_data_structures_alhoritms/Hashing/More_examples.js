//Example 1: 49. Group Anagrams
// Given an array of strings strs, group the anagrams together.
// For example, given strs = ["eat","tea","tan","ate","nat","bat"], return [["bat"],["nat","tan"],["ate","eat","tea"]].

var groupAnagrams = function(strs) {
  const res = {}
  
  for (let s of strs) {
      let charSum = 0
      for(let i = 0; i < s.length; i++) {
          charSum += s.charCodeAt(i)
      }
      if(res[charSum]) {
          res[charSum].push(s)
      } else {
          res[charSum] = [s]
      }
  }

  return Object.values(res)
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))

//Example 2: 2260. Minimum Consecutive Cards to Pick Up
// Given an integer array cards, find the length of the shortest subarray that contains at least one duplicate.
// If the array has no duplicates, return -1.

var minimumCardPickup = function(cards) {
  let dic = new Map();
  let ans = Infinity;
  for (let i = 0; i < cards.length; i++) {
    if (dic.has(cards[i])) {
      ans = Math.min(ans, i - dic.get(cards[i]) + 1);
    }

    dic.set(cards[i], i);
  }

  return ans === Infinity ? -1 : ans;
};

console.log(minimumCardPickup([1, 2, 6, 2, 1]))


// Example 3: 2342. Max Sum of a Pair With Equal Sum of Digits
// Given an array of integers nums, find the maximum value of nums[i] + nums[j],
// where nums[i] and nums[j] have the same digit sum (the sum of their individual digits).
// Return -1 if there is no pair of numbers with the same digit sum.

var maximumSum = function(nums) {
  let getDigitSum = num => {
    let digitSum = 0;
    while (num > 0) {
      digitSum += num % 10;
      num = Math.floor(num / 10);
    }

    return digitSum;
  }

  let dic = new Map();
  let ans = -1;
  for (const num of nums) {
    let digitSum = getDigitSum(num);
    if (dic.has(digitSum)) {
      ans = Math.max(ans, num + dic.get(digitSum));
    }

    dic.set(digitSum, Math.max(dic.get(digitSum) || 0, num));
  }


  return ans;
};

console.log(maximumSum([18,43,36,13,7]))

//Example 4: 2352. Equal Row and Column Pairs
//Given an n x n matrix grid, return the number of pairs (R, C) where R is a row and C is a column,
//and R and C are equal if we consider them as 1D arrays.


var equalPairs = function(grid) {
  let convertToKey = arr => {
    return arr.join('');
  }

  let dic = new Map();
  for (const arr of grid) {
    let key = convertToKey(arr);
    dic.set(key, (dic.get(key) || 0) + 1);
  }

  let dic2 = new Map();
  for (let col = 0; col < grid[0].length; col++) {
    let currentCol = [];
    for (let row = 0; row < grid.length; row++) {
      currentCol.push(grid[row][col]);
    }

    let key = convertToKey(currentCol);
    dic2.set(key, (dic2.get(key) || 0) + 1);
  }

  let ans = 0;
  for (const [key, val] of dic) {
    ans += val * dic2.get(key) || 0;
  }

  return ans;
};

console.log(equalPairs([[3,2,1],[1,7,6],[2,7,7]]))

//Given two strings ransomNote and magazine,
// return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.
// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false

// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true

var canConstruct = function(ransomNote, magazine) {
  const map = new Map()

  for(let char of ransomNote) {
    map.set(char, (map.get(char) ||0) + 1)
  }

  for(let char of magazine) {
    console.log(char ,map)
    if(map.has(char)) {
      map.set(char, map.get(char) - 1)
      if(map.get(char)  === 0) {
        map.delete(char)
      }
    }
  }

  return map.size === 0
};

console.log(canConstruct('aa', 'aab'))

// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have.
// Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
// Letters are case sensitive, so "a" is considered a different type of stone from "A".
// Example 1:
// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

// Example 2:
// Input: jewels = "z", stones = "ZZ"
// Output: 0

var numJewelsInStones = function(jewels, stones) {
  const jewelsSet = new Set(jewels.split(''))
  let ans = 0
  console.log(jewelsSet)
  for(let stone of stones) {
    if(jewelsSet.has(stone)){
      ans++
    }
  }
  return ans
};

console.log(numJewelsInStones('aA', 'aAAbbbb'))

//Given a string s, find the length of the longest substring without repeating characters.
// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function(s) {
  const map = {}
  let left = right = 0
  let ans = 0

  while (right < s.length) {
    let r = s[right]
    map[r] = map[r] ? map[r] + 1 : 1

    while (map[r] > 1) {
      let l = s[left]
      map[l] = map[l] - 1
      left++
    }

    ans = Math.max(ans, right - left + 1)
    right++
  }
  return ans
};

console.log(lengthOfLongestSubstring('bbbbbb'))