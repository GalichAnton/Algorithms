//Note: This is a companion problem to the System Design problem: Design TinyURL.
// TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl
// and it returns a short URL such as http://tinyurl.com/4e9iAk.
// Design a class to encode a URL and decode a tiny URL.
// There is no restriction on how your encode/decode algorithm should work.
// You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.
// Implement the Solution class:
// Solution() Initializes the object of the system.
// String encode(String longUrl) Returns a tiny URL for the given longUrl.
// String decode(String shortUrl) Returns the original long URL for the given shortUrl. It is guaranteed that the given shortUrl was encoded by the same object.

// Example 1:
// Input: url = "https://leetcode.com/problems/design-tinyurl"
// Output: "https://leetcode.com/problems/design-tinyurl"
// Explanation:
// Solution obj = new Solution();
// string tiny = obj.encode(url); // returns the encoded tiny url.
// string ans = obj.decode(tiny); // returns the original url after deconding it.

class Coder {
  constructor() {
    this.encodeMap = new Map()
    this.decodeMap = new Map()
    this.baseUrl = 'http://tinyurl.com/'
  }

   decode = function(shortUrl) {
    return this.decodeMap.get(shortUrl)
  };

   encode = function(longUrl) {
    if(!(this.encodeMap.has(longUrl))) {
      let shortUrl = this.baseUrl + this.encodeMap.size
      this.encodeMap.set(longUrl, shortUrl)
      this.decodeMap.set(shortUrl, longUrl)
    }

    return this.encodeMap.get(longUrl)
  };
}

const coder = new Coder()

console.log(coder.encode("https://leetcode.com/problems/design-tinyurl"))
console.log(coder.decode("http://tinyurl.com/0"))

