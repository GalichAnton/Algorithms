export interface ThenCatchable<T> {
  then: <V = T>(callback: (value: T) => V) => ThenCatchable<V>;
  catch: <R>(callback: (reason: any) => R) => ThenCatchable<T | R>;
}
