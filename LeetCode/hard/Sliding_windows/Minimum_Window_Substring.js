//Given two strings s and t of lengths m and n respectively, return the minimum window
//substring of s such that every character in t (including duplicates) is included in the window.
// If there is no such substring, return the empty string "".
//The testcases will be generated such that the answer is unique.

// Example 1:
// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

// Example 2:
// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.

// Example 3:
// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

const minWindow = function(s, t) {
  if(t === '') {
    return ''
  }

  let countT = {}, window = {}

  for(let c of t) {
    countT[c] = countT[c] ? countT[c] + 1 : 1
  }

  let have = 0, need = t.length
  let l = 0
  let resLen = Infinity
  let res = [-1,-1]

  for(let r = 0; r < s.length; r++) {
    let c = s[r]
    window[c] = window[c] ? window[c] + 1 : 1

    if(c in countT && window[c] <= countT[c]) {
      have += 1
    }

    while(have === need) {
      if((r - l + 1) < resLen) {
        res = [l,r]
        resLen = r - l + 1
      }
      window[s[l]] -= 1
      if(s[l] in countT && window[s[l]] < countT[s[l]]) {
        have -= 1
      }
      l += 1
    }
  }
  return resLen !== Infinity ? s.substring(res[0], res[1]+1) : ''
};

console.log(minWindow('aa', 'aa'))