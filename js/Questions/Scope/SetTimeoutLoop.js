let num

for (let i = 0; i < 5; i++) {
  num = i
  setTimeout(() => {
    console.log(num)
  }, 100)
}

// 4
// 4
// 4
// 4
// 4