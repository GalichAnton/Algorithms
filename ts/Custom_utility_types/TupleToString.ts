type TupleToString<T extends string[], F extends string = ''> = T extends [infer L extends string, ...infer R extends string[]] 
  ? TupleToString<R, `${F}${L}`> 
  : F