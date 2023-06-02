console.log(0 == false)
console.log('' == false)
console.log([] == false)
console.log(undefined == false)
console.log(null == false)
console.log('1' == true)
console.log(1n == true)
console.log(' 1     ' == true)

// ToNumber(false) = 0 -> 0 == 0 -> true
// "" == 0 -> ToNumber("") == 0 -> true
// [] == 0 -> ToNumber([]) == 0 -> 0 == 0 -> true
// false
// null is not converted to 0 here, false
// "1" == 1 -> ToNumber("1") == 1 -> 1 == 1 -> true
// 1n == 1 -> ToNumber(1n) == 1 -> 1== 1 -> true
// "1    " == 1 -> ToNumber("1      ")  == 1 -> true