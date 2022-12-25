//You have a long flowerbed in which some of the plots are planted, and some are not. However,
// flowers cannot be planted in adjacent plots.
// Given an integer array flowerbed containing 0's and 1's,
// where 0 means empty and 1 means not empty, and an integer n, return if n new
// flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

// Example 2:
// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

var canPlaceFlowers = function(flowerbed, n) {
  const newFlowerbed = [0, ...flowerbed, 0]

  for(let i = 1; i < newFlowerbed.length - 1; i++) {
    if( newFlowerbed[i - 1] === 0
      && newFlowerbed[i] === 0
      && newFlowerbed[i + 1] === 0
    ) {
      newFlowerbed[i] = 1
      n -= 1
    }
  }

  return n <= 0
};

console.log(canPlaceFlowers([1,0,0,0,0,1], 2))