//Given an integer array nums and an integer k, return k themost frequent elements. You may return the answer in any order.

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

const topKFrequent = (nums, k) => {
  const map = new Map()

  for(let n of nums) {
      map.set(n, (map.get(n) || 0) + 1)
  }

  const sortedEntries = [...map.entries()].sort((a,b) =>  b[1] - a[1])
  return sortedEntries.slice(0, k).map(entry => entry[0]);
};

console.log(topKFrequent([4,4,4,2,2,3,3,3,3], 2))