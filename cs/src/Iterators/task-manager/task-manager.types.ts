export enum TaskPriorityExecTimeRatio {
  low = 0.5,
  average = 1,
  high = 2,
  critical = 4,
}

export type Priority = keyof typeof TaskPriorityExecTimeRatio;

export interface ForEachOptions {
  priority: Priority;
}

export interface Task {
  worker: Generator<'timeout' | Error>;
  priority: Priority;
  resolve: (v?: any) => void;
  reject: (r?: any) => void;
}

export interface TaskManagerOptions {
  poolExecTime?: number;
  idleTime?: number;
}

export type Callback<T> = (el: T, index: number, iterable: Iterable<T>) => void;
