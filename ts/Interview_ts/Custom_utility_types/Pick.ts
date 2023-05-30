type MyPick<T, P extends keyof T>= {
  [K in P]: T[K]
}