//Example 1: 739. Daily Temperatures
// Given an array of integers temperatures that represents the daily temperatures,
// return an array answer such that answer[i] is the number of days you have to wait after the i^{th}ith
// day to get a warmer temperature. If there is no future day that is warmer, have answer[i] = 0 instead.

var dailyTemperatures = function(temperatures) {
  let stack = [];
  let answer = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {
      let j = stack.pop();
      answer[j] = i - j;
    }

    stack.push(i);
  }

  return answer;
};

console.log(dailyTemperatures([40, 35, 32, 37, 50]))

//Example 2: 239. Sliding Window Maximum
// Given an integer array nums and an integer k, there is a sliding window of size k that moves from the very left to the very right.
// For each window, find the maximum element in the window.
// For example, given nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3, return [3, 3, 5, 5, 6, 7].
// The first window is [1, 3, -1, -3, 5, 3, 6, 7] and the last window is [1, 3, -1, -3, 5, 3, 6, 7]


var maxSlidingWindow = function(nums, k) {
  let ans = [];
  let queue = [];
  for (let i = 0; i < nums.length; i++) {
    // maintain monotonic decreasing.
    // all elements in the deque smaller than the current one
    // have no chance of being the maximum, so get rid of them
    while (queue.length && nums[i] > nums[queue[queue.length - 1]]) {
      queue.pop();
    }

    queue.push(i);

    // queue[0] is the index of the maximum element.
    // if queue[0] + k == i, then it is outside the window
    if (queue[0] + k === i) {
      queue.shift();
    }

    // only add to the answer once our window has reached size k
    if (i >= k - 1) {
      ans.push(nums[queue[0]]);
    }
  }

  return ans;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))


//Example 3: 1438. Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit
// Given an array of integers nums and an integer limit,
// return the size of the longest subarray such that the absolute difference between
// any two elements of this subarray is less than or equal to limit.

var longestSubarray = function(nums, limit) {
  let increasing = [];
  let decreasing = [];
  let left = 0, ans = 0;

  for (let right = 0; right < nums.length; right++) {
    // maintain the monotonic deques
    while (increasing.length && increasing[increasing.length - 1] > nums[right]) {
      increasing.pop();
    }

    while (decreasing.length && decreasing[decreasing.length - 1] < nums[right]) {
      decreasing.pop();
    }

    increasing.push(nums[right]);
    decreasing.push(nums[right]);

    // maintain window property
    while (decreasing[0] - increasing[0] > limit) {
      if (nums[left] === decreasing[0]) {
        decreasing.shift();
      }
      if (nums[left] === increasing[0]) {
        increasing.shift();
      }
      left++;
    }

    ans = Math.max(ans, right - left + 1);
  }

  return ans;
};

console.log(longestSubarray([10,1,2,4,7,2], 5))

// The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.
// You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.
// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2.
// If there is no next greater element, then the answer for this query is -1.
// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

var nextGreaterElement = function(nums1, nums2) {
  const stack = []
  const map = {}

  for(let i = 0; i < nums2.length; i++) {
    while(stack.length && nums2[i] > stack[stack.length - 1]) {
      map[stack.pop()] = nums2[i]
    }
    stack.push(nums2[i])
  }

  while(stack.length) {
    map[stack.pop()] = -1
  }

  let res = []

  for(let i = 0; i < nums1.length; i++) {
    res[i] = map[nums1[i]]
  }

  return res

};

console.log(nextGreaterElement([4,1,2],[1,3,4,2]))

//Design an algorithm that collects daily price quotes for some stock and returns the span of that stock's price for the current day.
// The span of the stock's price in one day is the maximum number of consecutive days
// (starting from that day and going backward) for which the stock price was less than or equal to the price of that day.
// For example, if the prices of the stock in the last four days is [7,2,1,2] and the price of the stock today is 2,
// then the span of today is 4 because starting from today,
// the price of the stock was less than or equal 2 for 4 consecutive days.
// Also, if the prices of the stock in the last four days is [7,34,1,2] and the price of the stock today is 8,
// then the span of today is 3 because starting from today, the price of the stock was less than or equal 8 for 3 consecutive days.
// Implement the StockSpanner class:
//
// StockSpanner() Initializes the object of the class.
// int next(int price) Returns the span of the stock's price given that today's price is price.
// Example 1:
// Input
// ["StockSpanner", "next", "next", "next", "next", "next", "next", "next"]
// [[], [100], [80], [60], [70], [60], [75], [85]]
// Output
// [null, 1, 1, 1, 2, 1, 4, 6]
// Explanation
// StockSpanner stockSpanner = new StockSpanner();
// stockSpanner.next(100); // return 1
// stockSpanner.next(80);  // return 1
// stockSpanner.next(60);  // return 1
// stockSpanner.next(70);  // return 2
// stockSpanner.next(60);  // return 1
// stockSpanner.next(75);  // return 4, because the last 4 prices (including today's price of 75) were less than or equal to today's price.
// stockSpanner.next(85);  // return 6

class StockSpanner {
  constructor() {
    this.stack = []
  }
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
  let ans = 1
  while(this.stack.length && this.stack[this.stack.length - 1][0] <= price) {
    ans += this.stack.pop()[1]
  }
  this.stack.push([price,ans])
  return ans
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */