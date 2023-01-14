let binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      // do something
      return arr[mid];
    }
    if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }


  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

//Example 2: 74. Search a 2D Matrix
// Write an efficient algorithm that searches for a value target in an m x n integer matrix.
// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.

var searchMatrix = function (matrix, target) {
  let m = matrix.length, n = matrix[0].length;
  let left = 0, right = m * n - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let row = Math.floor(mid / n);
    let col = mid % n;
    let num = matrix[row][col];

    if (num === target) {
      return [num, row, col];
    }

    if (num < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
};


console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3));

//Example 3: 2300. Successful Pairs of Spells and Potions
// You are given two positive integer arrays spells and potions, where spells[i] represents the strength of the i^{th}ith
// spell and potions[j] represents the strength of the j^{th}jth potion.
// You are also given an integer success. A spell and potion pair is considered successful if the product of their strengths is at least success.
// For each spell, find how many potions it can pair with to be successful.
// Return an integer array where the i^{th}ith element is the answer for the i^{th}ith spell.

var successfulPairs = function (spells, potions, success) {
  let binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return left;
  }

  potions.sort((a, b) => a - b);
  let ans = [];
  let m = potions.length;

  for (const spell of spells) {
    let i = binarySearch(potions, success / spell);
    ans.push(m - i);
  }

  return ans;
};

console.log(successfulPairs([1, 2, 3, 4, 5], [1, 2, 3, 4, 5], 5));

//Given a sorted array of distinct integers and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.
// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4


var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }


  return left;
};

console.log(searchInsert([1, 3, 5, 6], 4));


//You are given an integer array nums of length n, and an integer array queries of length m.
// Return an array answer of length m where answer[i]
// is the maximum size of a subsequence that you can take from nums such that the sum of its elements is less than or equal to queries[i].
// A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.
// Example 1:
// Input: nums = [4,5,2,1], queries = [3,10,21]
// Output: [2,3,4]
// Explanation: We answer the queries as follows:
// - The subsequence [2,1] has a sum less than or equal to 3. It can be proven that 2 is the maximum size of such a subsequence, so answer[0] = 2.
// - The subsequence [4,5,1] has a sum less than or equal to 10. It can be proven that 3 is the maximum size of such a subsequence, so answer[1] = 3.
// - The subsequence [4,5,2,1] has a sum less than or equal to 21. It can be proven that 4 is the maximum size of such a subsequence, so answer[2] = 4.

// Example 2:
// Input: nums = [2,3,4,5], queries = [1]
// Output: [0]
// Explanation: The empty subsequence is the only subsequence that has a sum less than or equal to 1, so answer[0] = 0.

var answerQueries = function (nums, queries) {
  const sortedNums = [...nums].sort((a, b) => a - b);

  const ans = [];

  const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if(arr[mid] === target ) return mid + 1
      if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return arr[left] > target ? left : left + 1;
  }

  const prefixArr = [sortedNums[0]]

  for (let i = 1; i < sortedNums.length; i++) {
    prefixArr.push(sortedNums[i] + prefixArr[prefixArr.length - 1])
  }

  for(const query of queries) {
    let index = binarySearch(prefixArr,query)
    ans.push(index)
  }

  return ans
};

console.log(answerQueries([4, 5, 2, 1], [3, 10, 21]))