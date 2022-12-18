//Example 1: 875. Koko Eating Bananas
// Koko loves to eat bananas. There are n piles of bananas, the i^{th} ith
// pile has piles[i] bananas. Koko can decide her bananas-per-hour eating speed of k.
// Each hour, she chooses a pile and eats k bananas from that pile.
// If the pile has less than k bananas, she eats all of them and will not eat any more bananas during the hour.
// Return the minimum integer k such that she can eat all the bananas within h hours.


var minEatingSpeed = function(piles, h) {
  let check = k => {
    let hours = 0;
    for (const bananas of piles) {
      hours += Math.ceil(bananas / k);
    }

    return hours <= h;
  }

  let left = 1;
  let right = Math.max(...piles);
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

console.log(minEatingSpeed([3,6,7,11], 8))