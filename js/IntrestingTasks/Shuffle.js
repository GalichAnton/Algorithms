function shuffle(arr) {
  
  for (let i = arr.length - 1; i > 0; i--) {

    const randIdx = Math.floor(Math.random() * (i+1));
    const storedItem = arr[i];
    arr[i] = arr[randIdx];
    arr[randIdx] = storedItem;
    
  }

  return arr;
}
