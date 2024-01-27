import UnifiedResult from './unified-result';
import unifiedExecResult from './unified-exec-result';
import type { ThenCatchable } from './unified-exec-result.types';

describe('Implementation of analog of async/await mechanism for containers implementing then and catch methods', () => {
  it('unifiedExecResult function must unwrap Result value and Promise value within the passed executor generator function', (done) => {
    function* executor(): Generator<ThenCatchable<number>, void, number> {
      const number = new UnifiedResult(() => 42);
      const x = yield number.map((n) => n * 2);
      const y = yield Promise.resolve(10);

      try {
        expect(x - y).toBe(74);
        done();
      } catch (testError) {
        done(testError);
      }
    }

    unifiedExecResult(executor);
  });

  it('unifiedExecResult function must handle exceptions within containers', (done) => {
    function* executor(): Generator<ThenCatchable<number>, void, number> {
      const number = new UnifiedResult(() => 42);

      let x: number;
      try {
        // @ts-expect-error
        x = yield number.map((n) => n.trim());
      } catch (error) {
        x = yield number.map((n) => n - 12);
      }

      const y = yield number.map((n) => n / 2);

      let z: number;
      try {
        z = yield Promise.reject(new Error('10'));
      } catch (error) {
        z = yield new Promise<number>((resolve) => {
          resolve(20);
        });
      }

      try {
        expect(x - y + z).toBe(29);
        done();
      } catch (testError) {
        done(testError);
      }
    }

    unifiedExecResult(executor);
  });
});
