import Result from '../result/result';
import execResult from './exec-result';

describe('Implementation of analog of async/await mechanism for Result container', () => {
  it('execResult function must unwrap the Result values within the passed executor generator function', (done) => {
    function* executor(): Generator<Result<number>, void, number> {
      const number = new Result(() => 42);
      const x = yield number.map((n) => n * 2);
      const y = yield number.map((n) => n / 2);

      try {
        expect(x - y).toBe(63);
        done();
      } catch (testError) {
        done(testError);
      }
    }

    execResult(executor);
  });

  it('execResult function must handle exceptions within Result containers', (done) => {
    function* executor(): Generator<Result<number>, void, number> {
      const number = new Result(() => 42);

      let x: number;
      try {
        // @ts-expect-error
        x = yield number.map((n) => n.trim());
      } catch (error) {
        x = yield number.map((n) => n - 12);
      }
      const y = yield number.map((n) => n / 2);

      try {
        expect(x - y).toBe(9);
        done();
      } catch (testError) {
        done(testError);
      }
    }

    execResult(executor);
  });
});
