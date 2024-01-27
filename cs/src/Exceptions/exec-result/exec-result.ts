import Result from '../result/result';

export default function execResult(executorFn: () => Generator<Result<unknown>>): void {
  function iter(gen: Generator<Result<unknown>>, prevValue?: unknown) {
    const { done, value } = gen.next(prevValue);
    if (done) return;

    value
      .map((v) => iter(gen, v))
      .catch((err) => {
        const errState = gen.throw(err);
        if (errState.done) return;

        errState.value.map((v) => iter(gen, v));
      });
  }

  iter(executorFn());
}
