function anagram(str1, str2) {
  const map = new Map()

  for(let c of str1) {
    map.set(c, (map.get(c) || 0) + 1)
  }

  for(let c of str2) {
    if(map.has(c)) {
      map.set(c, map.get(c) - 1)
      if(map.get(c) === 0) map.delete(c)
    } else return false
  }

  return true
}

console.log(anagram("anna", "nana"));


