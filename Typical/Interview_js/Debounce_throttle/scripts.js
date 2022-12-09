const input = document.querySelector("#input");
const result = document.querySelector("#result");
const onChange = () => {
  result.innerText = input.value;
};

function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

 const debounsedOnChange = debounce(onChange, 500);
 input.addEventListener("keypress", debounsedOnChange);

function throtle(func, delay) {
  let isWaiting = false;
  return function (...args) {
    if (isWaiting) return;
    else func.apply(this, args);
    isWaiting = true;
    setTimeout(() => {
      isWaiting = false;
    }, delay);
  };
}

// const throtledOnChange = throtle(onChange, 500);
// input.addEventListener("keypress", throtledOnChange);