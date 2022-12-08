/*
Path https://leetcode.com/problems/trapping-rain-water/description/
Given n non-negative integers representing an elevation map where the width of each bar is 1,
compute how much water it can trap after raining.

Example 1:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
In this case, 6 units of rain water (blue section) are being trapped.

Example 2:
Input: height = [4,2,0,3,2,5]
Output: 9
*/

var trap = function(height) {
  let maxLeft = height[0];
  let maxRight = height[height.length - 1];

  let left = 1;
  let right = height.length - 2;
  let total = 0;

  while(left <= right) {
    if(maxLeft <= maxRight) {
      if (maxLeft - height[left] > 0) {
        total += maxLeft - height[left];
      }
      maxLeft = Math.max(maxLeft, height[left]);
      left += 1;
    } else {
      if (maxRight - height[right] > 0) {
        total += maxRight - height[right];
      }
      maxRight = Math.max(maxRight, height[right]);
      right -= 1;
    }
  }

  return total;
};