/*
Path https://leetcode.com/problems/maximize-distance-to-closest-person/description/
You are given an array representing a row of seats where seats[i] = 1 represents a person sitting in the ith seat, and seats[i] = 0 represents that the ith seat is empty (0-indexed).

There is at least one empty seat, and at least one person sitting.

Alex wants to sit in the seat such that the distance between him and the closest person to him is maximized.

Return that maximum distance to the closest person.

Input: seats = [1,0,0,0,1,0,1]
Output: 2
Explanation:
If Alex sits in the second open seat (i.e. seats[2]), then the closest person has distance 2.
If Alex sits in any other open seat, the closest person has distance 1.
Thus, the maximum distance to the closest person is 2.
*/




var maxDistToClosest = function(seats) {
  let max = 0;
  let count = 0;
  let i = 0;

  if (seats[i] === 0) {
    while (seats[i] === 0) {
      i++;
      count += 1;
    }
    max = count;
    count = 0;
  }

  for (; i < seats.length; i++) {
    let cur = seats[i];

    if (i === seats.length - 1 && cur === 0) {
      count += 1;
      max = Math.max(max, count);
      break;
    }

    if (cur === 1) {
      count = 0;
    } else {
      count += 1;
      max = Math.max(max, Math.ceil(count / 2));
    }
  }

  return max;
};

console.log(maxDistToClosest([1, 0, 0, 0, 1, 0, 1]));