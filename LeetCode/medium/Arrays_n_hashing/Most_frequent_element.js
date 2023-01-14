//Given an integer array nums and an integer k, return k themost frequent elements. You may return the answer in any order.

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

const topKFrequent = (nums, k) => {
  const map = new Map();
  for (const num of nums) {
    const count = (map.get(num) || 0) + 1;

    map.set(num, count);
  }
  const bucket = new Array(nums.length + 1).fill()
    .map(() => []);

  for (const [ num, count ] of map.entries()) {
    bucket[count].push(num);
  }

  bucket.reverse();

  const topK = []

  for (const count of bucket) {
    for (const num of count) {
      const isAtCapacity = topK.length === k;
      if (isAtCapacity) break;

      topK.push(num);
    }
  }

  return topK;
};

console.log(topKFrequent([1,1,1,2,2,3], 2))