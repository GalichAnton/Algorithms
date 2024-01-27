export interface Task {
  worker: Generator<'timeout' | Error>;
  resolve: (v?: any) => void;
  reject: (r?: any) => void;
}

export interface TaskProcessorOptions {
  poolExecTime?: number;
  idleTime?: number;
}

export type Callback<T> = (el: T, index: number, iterable: Iterable<T>) => void;
