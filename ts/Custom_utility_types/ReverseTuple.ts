type ReverseTuple<T extends any[]> = T extends [infer F, ...infer R] ? [...ReverseTuple<R>, F] : []