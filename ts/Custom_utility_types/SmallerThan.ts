type SmallerThan<
  A extends number,
  B extends number,
  S extends number[] = []
> = S['length'] extends B
  ? false
  : S['length'] extends A
  ? true
  : SmallerThan<A, B, [A, ...S]>