//Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

const groupAnagrams = function(strs) {
  let groups = new Map();
  for (const s of strs) {
    let key = s.split('').sort().join('');
    if (!groups.has(key)) {
      groups.set(key, []);
    }

    groups.get(key).push(s);
  }

  let ans = [];
  for (const group of groups.values()) {
    ans.push(group);
  }

  return ans;
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));