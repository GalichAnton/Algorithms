/*
Path https://leetcode.com/problems/merge-intervals/description/
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

Example 2:
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 */

var merge = function(intervals) {
  if(intervals.length < 2) {
    return intervals
  }
  intervals.sort((a,b) => a[0] - b[0])
  let result = [intervals[0]]

  for(let interval of intervals) {
    let recent = result[result.length - 1]

    if(recent[1] >= interval[0]){
      recent[1] = Math.max(recent[1], interval[1])
    } else {
      result.push(interval)
    }
  }


  return result
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]))