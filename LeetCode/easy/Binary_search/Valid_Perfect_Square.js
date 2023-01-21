//Given a positive integer num, return true if num is a perfect square or false otherwise.
// A perfect square is an integer that is the square of an integer.
// In other words, it is the product of some integer with itself.
// You must not use any built-in library function, such as sqrt.

// Example 1:
// Input: num = 16
// Output: true
// Explanation: We return true because 4 * 4 = 16 and 4 is an integer.

// Example 2:
// Input: num = 14
// Output: false
// Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.

const isPerfectSquare = function(num) {
  //O(sqrt(n))
  // for(let i = 0; i < num; i++) {
  //     if(i * i === num) {
  //         return true
  //     } else if (i * i > num) {
  //         return false
  //     }
  // }

  //O(log(n))
  let l = 1
  let r = num
  while(l <= r) {
    let mid = Math.floor((l + r) / 2)
    if(mid * mid < num) {
      l = mid + 1
    } else if(mid * mid > num) {
      r = mid - 1
    } else {
      return true
    }
  }
  return false
};

console.log(isPerfectSquare(16))