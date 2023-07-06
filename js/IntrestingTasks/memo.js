function memo(func, resolver) {
  const cashe = {}

  return function (...args) {
    let key = resolver ? resolver(...args) : args.join('_')
    if(cashe[key]) {
      return cashe[key]
    } else {
      let result = func.apply(this, args)
      cashe[key] = result
      return result
    }
  }
}