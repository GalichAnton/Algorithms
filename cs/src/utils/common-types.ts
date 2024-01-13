export type Nullable<T> = T | null;

export type Optional<T> = T | undefined;

export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;