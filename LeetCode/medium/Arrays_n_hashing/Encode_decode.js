//

class Solution {

 static encode(strs) {
   return strs
      .map((str) => `${str.length}#${str}`)/* Time O(N) | Ignore Auxillary Space O(N) */
      .join('');
  }

  static decode(str) {
    const strs = [];
    let i = 0;
    while (i < str.length) {
      const poundIndex = str.indexOf('#', i);
      const len = Number(str.slice(i, poundIndex));
      strs.push(str.slice(poundIndex + 1, poundIndex + len + 1));
      i = poundIndex + len + 1;
    }
    return strs;
  }
}

console.log(Solution.encode(['abcde', 'deff', 'ghi']));
console.log(Solution.decode('5#abcde4#deff3#ghi'));

