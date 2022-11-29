// Max frequency symbol in string

str = 'd'

function maxFrequency(str) {
  let max = 0
  let frequentlySymbol = ''
  if(!str.length) return 'Empty string'
  const map = {}

  for( let i = 0; i < str.length; i++) {

    if(map[str[i]]) {
      map[str[i]] += 1
    } else map[str[i]] = 1

    if(map[str[i]] > max) {
      max = map[str[i]]
      frequentlySymbol = str[i]
    }
  }

  return `${frequentlySymbol} : ${max}`
}

console.log(maxFrequency(str))


// Maximum of sequence

function maxSeq(numbers) {
  if(!numbers.length) return "Empty sequence"

  let max = numbers[0]

  for( let i = 1; i < numbers.length; i++) {
    if(numbers[i] > max) max = numbers[i]
  }

  return max

}

console.log(maxSeq([2,6,8,99,56,909]))