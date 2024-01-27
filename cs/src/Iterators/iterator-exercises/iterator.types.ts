export type ExtractIterablesType<T extends Iterable<unknown>[]> = T[number] extends Iterable<infer U> ? U : unknown
