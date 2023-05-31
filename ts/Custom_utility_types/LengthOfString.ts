type StringToTouple<T extends string> = T extends `${infer P}${infer R}` ? [P, ...StringToTouple<R>]: []

type LengthOfString<T extends string> = StringToTouple<T>['length']