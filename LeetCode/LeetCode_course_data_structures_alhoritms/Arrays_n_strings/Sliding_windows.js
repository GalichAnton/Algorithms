//Example 1: Given an array of positive integers nums and an integer k,
//find the length of the longest subarray whose sum is less than or equal to k.
//nums = [3, 1, 2, 7, 4, 2, 1, 1, 5] and k = 8.
var findLength = function(nums, k) {
  let left = 0, curr = 0, ans = 0;
  for (let right = 0; right < nums.length; right++) {
    curr += nums[right];
    while (curr > k) {
      curr -= nums[left];
      left++;
    }

    ans = Math.max(ans, right - left + 1);
  }

  return ans;
}

console.log(findLength([3, 1, 2, 7, 4, 2, 1, 1, 5],8))


//Example 2: You are given a binary substring s (a string containing only "0" and "1").
//An operation involves flipping a "0" into a "1".
//What is the length of the longest substring containing only "1" after performing at most one operation?
//For example, given s = "1101100111", the answer is 5. If you perform the operation at index 2, the string becomes 1111100111.

var findLengthZero = function(s) {
  let left = 0, curr = 0, ans = 0;
  for (let right = 0; right < s.length; right++) {
    if (s[right] === "0") {
      curr++;
    }

    while (curr > 1) {
      if (s[left] === "0") {
        curr -= 1;
      }
      left++;
    }

    ans = Math.max(ans, right - left + 1);
  }

  return ans;
}
console.log(findLengthZero('1101100111'))

//Example 3: 713. Subarray Product Less Than K.
// Given an array of positive integers nums and an integer k,
// return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.
// For example, given the input nums = [10, 5, 2, 6], k = 100, the answer is 8.
// The subarrays with products less than k are:
// [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]

var numSubarrayProductLessThanK = function(nums, k) {
  if (k <= 1) {
    return 0;
  }

  let ans = 0, left = 0, curr = 1;

  for (let right = 0; right < nums.length; right++) {
    curr *= nums[right];
    while (left <= right && curr >= k) {
      curr /= nums[left];
      left++;
    }

    ans += right - left + 1;
  }

  return ans;
};

console.log(numSubarrayProductLessThanK([10, 5, 2, 6],100))

//Example 4: Given an integer array nums and an integer k,
//find the sum of the subarray with the largest sum whose length is k.

var findBestSubarray = function(nums, k) {
  let curr = 0;
  for (let i = 0; i < k; i++) {
    curr += nums[i];
  }

  let ans = curr;
  for (let i = k; i < nums.length; i++) {
    curr += nums[i] - nums[i - k];
    ans = Math.max(ans, curr);
  }

  return ans;
}

console.log(findBestSubarray([3,-1,4,12,-8,5,6], 4))