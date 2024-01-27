import type { ThenCatchable } from './unified-exec-result.types';

export default function unifiedExecResult(executorFn: () => Generator<ThenCatchable<unknown>>): void {
  function iter(gen: Generator<ThenCatchable<unknown>>, prevValue?: unknown) {
    const { done, value } = gen.next(prevValue);
    if (done) return;

    value
      .then((v) => iter(gen, v))
      .catch((err) => {
        const errState = gen.throw(err);
        if (errState.done) return;

        errState.value.then((v) => iter(gen, v));
      });
  }

  iter(executorFn());
}
