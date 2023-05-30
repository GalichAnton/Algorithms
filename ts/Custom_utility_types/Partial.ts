type MyPartial<T> = {
  [k in keyof T]? : T[k]
}