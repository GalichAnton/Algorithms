console.log(["0"].map(parseInt));                 // [0] - 1st: parseItn("0", 0) === 0
console.log(["0", "1"].map(parseInt));            // [0,NaN] - 2nd: parseInt("1", 1) === NaN
console.log(["0", "1", "1"].map(parseInt));       // [0,NaN,1] - 3rd: parseInt("1", 2) === 1
console.log(["0", "1", "1", "1"].map(parseInt));  // [0,NaN,1,1] - 4th: parseInt("1", 3) === 1