const input = document.querySelector("#input");
const result = document.querySelector("#result");
const onChange = () => {
  result.innerText = input.value;
};

function debounce(cb, delay) {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      cb.apply(this,args)
    }, delay)
  }
}

function throttle(cb,delay) {
  let isWaiting = false
  return (...args) => {
    if(isWaiting) return 
    cb.apply(this, args)
    isWaiting = true
    setTimeout(() => {
      isWaiting = false
    }, delay)
  }
}

// const debounsedOnChange = debounce(onChange, 500);
// input.addEventListener("keypress", debounsedOnChange);

const throtledOnChange = throttle(onChange, 500);
input.addEventListener("keypress", throtledOnChange);