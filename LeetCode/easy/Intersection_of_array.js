/*
Path https://leetcode.com/problems/intersection-of-two-arrays-ii/description/
Given two integer arrays nums1 and nums2, return an array of their intersection.
Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
*/

var intersect = function(nums1, nums2) {
  const result = [];
  let map = nums1.reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});

  for (let i = 0; i < nums2.length; i++) {
    let current = nums2[i];
    let count = map[current];
    if (count && count > 0) {
      result.push(current);
      map[current] -= 1;
    }
  }

  return result;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));