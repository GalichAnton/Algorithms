class Loader {
  static element = null

  static build() {
    let wrapper = document.createElement('div')
    let div = document.createElement('div')
    wrapper.classList.add('wrapper')
    div.setAttribute('id', "loader")
    div.textContent = 'Loading...'
    div.classList.add('loader')
    wrapper.append(div)

    this.element = wrapper
  }

  static show() {
    this.build()
    document.body.append(this.element)
  }

  static hide() {
    this.element.remove()
  }

}


Loader.show()
setTimeout(() => Loader.hide(), 5000)