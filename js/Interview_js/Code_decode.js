const codeObj = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5
};

function coder(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    res += codeObj[str[i]] ? codeObj[str[i]] : str[i];
  }
  return res;
}

console.log(coder("aiubdfg"));
function decoder(str) {
  const decodeObj = {};
  Object.entries(codeObj).forEach(([key, value]) => {
    decodeObj[value] = key;
  });
  let res = "";
  for (let i = 0; i < str.length; i++) {
    res += decodeObj[str[i]] ? decodeObj[str[i]] : str[i];
  }
  return res;
}

console.log(decoder("aiubdfg"));