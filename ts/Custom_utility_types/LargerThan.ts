type LargerThan<
  A extends number,
  B extends number,
  S extends number[] = []
> = S['length'] extends A
  ? false
  : S['length'] extends B
  ? true
  : LargerThan<A, B, [A, ...S]>