//xample 1:
// Given an integer array nums, an array queries where queries[i] = [x, y] and an integer limit,
// return a boolean array that represents the answer to each query.
// A query is true if the sum of the subarray from x to y is less than limit, or false otherwise.
// For example, given nums = [1, 6, 3, 2, 7, 2] and queries = [[0, 3], [2, 5], [2, 4]] and limit = 13,
// the answer is [true, false, true]. For each query, the subarray sums are [12, 14, 12].

var answerQueries = function(nums, queries, limit) {
  let prefix = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    prefix.push(nums[i] + prefix[prefix.length - 1]);
  }

  let ans = [];
  for (const [x, y] of queries) {
    let curr = prefix[y] - prefix[x] + nums[x];
    ans.push(curr < limit);
  }

  return ans;
};

console.log(answerQueries([1, 6, 3, 2, 7, 2],[[0, 3], [2, 5], [2, 4]], 13))

//Example 2: 2270. Number of Ways to Split Array
// Given an integer array nums,
// find the number of ways to split the array into two parts so that the first section has a sum greater than or equal to the sum of the second section.
// The second section should have at least one number.

var waysToSplitArray = function(nums) {
  let prefix = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    prefix.push(nums[i] + prefix[prefix.length - 1]);
  }

  let ans = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    let leftSection = prefix[i];
    let rightSection = prefix[prefix.length - 1] - prefix[i];
    if (leftSection >= rightSection) {
      ans++;
    }
  }

  return ans;
};

// var waysToSplitArray = function(nums) {
//   let ans = 0, leftSection = 0, total = 0;
//   for (const num of nums) {
//     total += num;
//   }
//
//   for (let i = 0; i < nums.length - 1; i++) {
//     leftSection += nums[i];
//     let rightSection = total - leftSection;
//     if (leftSection >= rightSection) {
//       ans++;
//     }
//   }
//
//   return ans;
// };

console.log(waysToSplitArray([10,4,-8,7]))

//Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.
//Example 1:
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// Example 2:
// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

// Example 3:
// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

var runningSum = function(nums) {
  let runSum = [nums[0]]

  for(let i = 1; i < nums.length; i++) {
    runSum.push(nums[i] + runSum[runSum.length - 1])
  }

  return runSum
};

console.log(runningSum([1,2,3,4]))

// Given an array of integers nums, you start with an initial positive value startValue.
// In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).
// Return the minimum positive value of startValue such that the step by step sum is never less than 1.

// Example 1:
// Input: nums = [-3,2,-3,4,2]
// Output: 5
// Explanation: If you choose startValue = 4, in the third iteration your step by step sum is less than 1.
// step by step sum
// startValue = 4 | startValue = 5 | nums
//   (4 -3 ) = 1  | (5 -3 ) = 2    |  -3
//   (1 +2 ) = 3  | (2 +2 ) = 4    |   2
//   (3 -3 ) = 0  | (4 -3 ) = 1    |  -3
//   (0 +4 ) = 4  | (1 +4 ) = 5    |   4
//   (4 +2 ) = 6  | (5 +2 ) = 7    |   2

// Example 2:
// Input: nums = [1,2]
// Output: 1
// Explanation: Minimum start value should be positive.

// Example 3:
// Input: nums = [1,-2,-3]
// Output: 5

var minStartValue = function(nums) {
  // We use "total" for current step-by-step total, "minVal" for minimum
  // step-by-step total among all sums. Since we always start with
  // startValue = 0, therefore the initial current step-by-step total is 0,
  // thus we set "total" and "minVal" be 0.
  var minVal = 0;
  var total = 0;

  // Iterate over the array and get the minimum step-by-step total.
  for (let i = 0; i < nums.length; ++i) {
    total += nums[i];
    minVal = Math.min(minVal, total);
    console.log(`total: ${total}; minVal: ${minVal}`)
  }

  // We have to let the minimum step-by-step total equals to 1,
  // by increasing the startValue from 0 to -minVal + 1,
  // which is just the minimum startValue we want.
  return -minVal + 1;
};

console.log(minStartValue([-3,2,-3,4,2]))

function maxDups(arr) {
  let left = 0
  let right = 0
  let cur = 0
  let ans = []
  while(left < arr.length) {
    if(arr[left] === arr[right]) {
      cur++
      right++
    } else {
      ans.push(cur)
      cur = 0
      left = right
    }
  }
  return Math.max(...ans)
}

console.log(maxDups([1,1,2,2,2,2,2]))


function maxWihoutDups(arr) {
  let prev = 0
  let len = 0
  const map = {}
  for(let i = 0; i <= arr.length - 1; i++) {
    prev = Math.max(prev, map[arr[i]] ? map[arr[i]] : 0)
    len = Math.max(len, i - prev + 1)
    map[arr[i]] = i + 1
  }
  return len
}

console.log(maxWihoutDups([1,1,1,3,1,2,3]))
