type MyRequired<T> = {
  [k in keyof T]-?: T[k]
}