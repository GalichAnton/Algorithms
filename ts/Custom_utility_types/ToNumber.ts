// Implement ToNumber<T> to get an integer number type from integer string.
type ToNumber<T extends string, U extends number[] = []> =
  `${U['length']}` extends T
    ? U['length']
    : ToNumber<T, [...U, 1]>

type A = ToNumber<'1'> // 1
type B = ToNumber<'40'> // 40
type C = ToNumber<'0'> // 0