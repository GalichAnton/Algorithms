// Implement IsEmptyType<T> to check if T is empty type {}.
type IsEmptyType<T> = T extends Record<string,string> ? [keyof T] extends [never] ? true: false: false