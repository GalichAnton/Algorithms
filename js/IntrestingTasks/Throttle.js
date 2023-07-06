function throttle(func, wait) {
  // your code here
  let waiting = false, lastArgs = null;
  return function(...args){
    if(!waiting){
      func.apply(this, args)
      waiting = true;
      let timeout = () => setTimeout(() => {
        waiting = false;
        if(lastArgs){
          func.apply(this, lastArgs);
          waiting = true;
          lastArgs = null;
          timeout();
        }
      }, wait);
      timeout();
    }
    else 
      lastArgs = args
  }
}