type LastChar<T extends string> = T extends `${infer F}${infer R}`
  ? R extends ''
    ? F
    : LastChar<R>
  : never