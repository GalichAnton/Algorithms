class Jquery {
  constructor(selector) {
    this.elements = document.querySelectorAll(selector)
  }

  onEvent(event, listener) {
    this.elements.forEach((el) => {
      el.addEventListener(event, listener)
    })
    return this
  }

  removeEvent(event,listener) {
    this.elements.forEach((el) => {
      el.removeEventListener(event, listener)
    })
    return this
  }

  addClass(className) {
    this.elements.forEach((el) => {
      el.classList.addClass(className)
    })
    return this
  }

  removeClass(className) {
    this.elements.forEach((el) => {
      el.classList.removeClass(className)
    })
    return this
  }

  css(property,value) {
    this.elements.forEach((el) => {
      el.style[property] = value
    })
    return this
  }
}
// const result = document.querySelector("#result");
// const elem = new Jquery('#input')

// const onChange = (e) => {
//   result.innerText = e.target.value;
// };

// elem.onEvent('input', onChange).css('color','red')
// console.log(elem.elements,input)

function jquery1 (selector) {
  const elements = document.querySelectorAll(selector)

  function on(e, cb) {
    elements.forEach((el) => {
      el.addEventListener(e,cb)
    })
    return this
  }

  function addClass(className) {
    elements.forEach((el) => {
      el.classList.addClass(className)
    })
    return this
  }

  function css(prop,val) {
    elements.forEach((el) => {
      el.style[prop] = val
    })
    return this
  }

  return {
    on,
    addClass,
    css
  }
}

const result = document.querySelector("#result");
const elem = jquery1('#input')

const onChange = (e) => {
  result.innerText = e.target.value;
};

elem.on('input', onChange)
console.log(elem.elements,input)