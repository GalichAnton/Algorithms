//Example 1: You are given a string s and an integer k.
// Find the length of the longest substring that contains at most k distinct characters.
// For example, given s = "eceba" and k = 2, return 3.
// The longest substring with at most 2 distinct characters is "ece".

const findLongestSubstring = (s, k) => {
  let left = 0
  let ans = 0
  let counts = new Map()
  for(let right = 0; right < s.length; right++) {
    counts.set(s[right], (counts.get(s[right]) || 0) + 1)
   // console.log(counts)
    while (counts.size > k) {
      counts.set(s[left], (counts.get(s[left])) - 1)
     // console.log(counts)
      if (counts.get(s[left]) === 0) {
        counts.delete(s[left]);
      }
      left++;
    }
    ans = Math.max(ans, right - left + 1);
  }

  return ans
}

console.log(findLongestSubstring('eceba', 2))

//Example 2: 2248. Intersection of Multiple Arrays
// Given a 2D array nums that contains n arrays of distinct integers,
// return a sorted array containing all the numbers that appear in all n arrays.
// For example, given nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]],
// return [3, 4]. 3 and 4 are the only numbers that are in all arrays.

var intersection = function(nums) {
  let counts = new Map();
  for (const arr of nums) {
    for (const x of arr) {
      counts.set(x, (counts.get(x) || 0) + 1);
    }
  }

  let n = nums.length;
  let ans = [];
  for (const [key, val] of counts) {
    if (val === n) {
      ans.push(key);
    }
  }

  ans.sort((a, b) => a - b);
  return ans;
};

console.log(intersection([[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]))

//Example 3: 1941. Check if All Characters Have Equal Number of Occurrences
// Given a string s, determine if all characters have the same frequency.
// For example, given s = "abacbc", return true. All characters appear twice.
// Given s = "aaabb", return false. "a" appears 3 times, "b" appears 2 times. 3 != 2.

var areOccurrencesEqual = function(s) {
  let counts = new Map();
  for (const c of s) {
    counts.set(c, (counts.get(c) || 0) + 1);
  }

  let frequencies = new Set();
  for (const val of counts.values()) {
    frequencies.add(val);
  }

  return frequencies.size === 1;
};

console.log(areOccurrencesEqual('abacbc'))

//Example 4: 560. Subarray Sum Equals K
// Given an integer array nums and an integer k,
// find the number of subarrays whose sum is equal to k.
//nums = [1, 2, 1, 2, 1], k = 3

var subarraySum = function(nums, k) {
  let counts = new Map();
  counts.set(0, 1);
  let ans = 0, curr = 0;

  for (const num of nums) {
    curr += num;
    ans += counts.get(curr - k) || 0;
    counts.set(curr, (counts.get(curr) || 0) + 1);
  }

  return ans;
};

console.log(subarraySum([1, 2, 1, 2, 1],3))

//Example 5: 1248. Count Number of Nice Subarrays
// Given an array of positive integers nums and an integer k.
// Find the number of subarrays with exactly k odd numbers in them.
// For example, given nums = [1, 1, 2, 1, 1], k = 3, the answer is 2.
// The subarrays with 3 odd numbers in them are [1, 1, 2, 1] and [1, 2, 1, 1].

var numberOfSubarrays = function(nums, k) {
  let counts = new Map();
  counts.set(0, 1);
  let ans = 0, curr = 0;

  for (const num of nums) {
    curr += num % 2;
    ans += counts.get(curr - k) || 0;
    counts.set(curr, (counts.get(curr) || 0) + 1);
  }

  return ans;
};

console.log(numberOfSubarrays([1, 1, 2, 1, 1],3))

//You are given an integer array matches where matches[i] = [winneri, loseri] indicates
// that the player winneri defeated player loseri in a match.
// Return a list answer of size 2 where:
// answer[0] is a list of all players that have not lost any matches.
// answer[1] is a list of all players that have lost exactly one match.
// The values in the two lists should be returned in increasing order.
// Note
// You should only consider the players that have played at least one match.
// The testcases will be generated such that no two matches will have the same outcome.

// Example 1:
// Input: matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]
// Output: [[1,2,10],[4,5,7,8]]
// Explanation:
// Players 1, 2, and 10 have not lost any matches.
// Players 4, 5, 7, and 8 each have lost one match.
// Players 3, 6, and 9 each have lost two matches.
// Thus, answer[0] = [1,2,10] and answer[1] = [4,5,7,8].

// Example 2:
// Input: matches = [[2,3],[1,3],[5,4],[6,4]]
// Output: [[1,2,5,6],[]]
// Explanation:
// Players 1, 2, 5, and 6 have not lost any matches.
// Players 3 and 4 each have lost two matches.
// Thus, answer[0] = [1,2,5,6] and answer[1] = [].

var findWinners = function(matches) {
  const loses_count = new Map()

  for (const [winner,loser] of matches) {
    loses_count.set(loser, (loses_count.get(loser) || 0) + 1)
    if(!loses_count.has(winner)) {
      loses_count.set(winner,0)
    }
  }

  let zeroLoses = []
  let oneLose = []

  for(const [player, loses] of loses_count) {
    if(loses === 0) {
      zeroLoses.push(player)
    } else if (loses === 1) {
      oneLose.push(player)
    }
  }

  return [zeroLoses.sort((a,b)=> a-b), oneLose.sort((a,b)=> a-b)]
};

console.log(findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]))

//Given an integer array nums, return the largest integer that only occurs once. If no integer occurs once, return -1.
// Example 1:
// Input: nums = [5,7,3,9,4,9,8,3,1]
// Output: 8
// Explanation: The maximum integer in the array is 9 but it is repeated. The number 8 occurs only once, so it is the answer.

// Example 2:
// Input: nums = [9,9,8,8]
// Output: -1
// Explanation: There is no number that occurs only once.

var largestUniqueNumber = function(nums) {
  const map = new Map()
  const res = []
  for(let num of nums) {
    map.set(num, (map.get(num) ||0) + 1)
  }
  for (const [key, value] of map) {
    if(value === 1) res.push(key)
  }

  return res.length ? Math.max(...res) : -1
};

console.log(largestUniqueNumber([5,7,3,9,4,9,8,3,1]))

//Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.
//
// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "leetcode"
// Output: 0

var maxNumberOfBalloons = function(text) {
  const textMap = new Map()
  const targetMap = new Map()
  const res = []
  for(let char of text) {
    textMap.set(char, (textMap.get(char) ||0) + 1)
  }

  for(let char of 'balloon') {
    targetMap.set(char, (targetMap.get(char) ||0) + 1)
  }

  for(const [key,amount] of targetMap) {
    if(textMap.has(key)) {
      res.push(Math.floor(textMap.get(key)/amount))
    } else {
      return 0
    }
  }
 return Math.min(...res)
};

console.log(maxNumberOfBalloons('loonbalxballpoon'))