type StringToTuple<T extends string> = T extends `${infer A}${infer B}` ? [A, ...StringToTuple<B>] : [];

type LengthOfString<T extends string> = StringToTuple<T>['length']

type RepeatString<T extends string, C extends number, S extends string = ''> =
  LengthOfString<S> extends C ? S : RepeatString<T, C, `${S}${T}`>