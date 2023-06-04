function addArrays(arr1, arr2) {
  const result = [];
  let carry = 0;
  
  for (let i = arr1.length - 1, j = arr2.length - 1; i >= 0 || j >= 0 || carry > 0; i--, j--) {
    const sum = (i >= 0 ? arr1[i] : 0) + (j >= 0 ? arr2[j] : 0) + carry;
    result.unshift(sum % 10);
    carry = Math.floor(sum / 10);
  }
  
  return result;
}

console.log(addArrays([5, 4, 4],[4, 5, 6]))