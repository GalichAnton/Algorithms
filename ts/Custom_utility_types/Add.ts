type Tuple<T extends number, U extends any[] = []> =
  U['length'] extends T ? U : Tuple<T, [...U, any]>

type Add<A extends number, B extends number> = [...Tuple<A>, ...Tuple<B>]['length']