function anagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const arr1 = str1.toLowerCase().split("");
  const arr2 = str2.toLowerCase().split("");
  for (let i = 0; i < arr1.length; i++) {
    let index = arr2.indexOf(arr1[i]);
    if (index === -1) {
      return false;
    } else arr2.splice(index, 1);
  }
  return arr2.length === 0;
}

console.log(anagram("anna", "NANA"));