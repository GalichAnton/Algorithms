import Result from './result';

describe('Result container type implementation', () => {
  it('Result must take an value and map it into another Result container', (done) => {
    const result = new Result(() => 42);

    result
      .map((num) => String(num))
      .map((str) => str.split(''))
      .map((strArr) => {
        try {
          expect(strArr).toEqual(['4', '2']);
          done();
        } catch (error) {
          done(error);
        }

        return strArr;
      });
  });

  it('Result must handle exceptions within the map mathod', (done) => {
    const result = new Result(() => 42);

    result
      // @ts-expect-error
      .map((num) => num.trim())
      .catch((error) => {
        try {
          expect(error).toBeInstanceOf(Error);
          done();
        } catch (testError) {
          done(testError);
        }

        return true;
      })
      .map((x) => x);
  });

  it('Chain of map methods must be missed if error occures', (done) => {
    const result = new Result(() => 42);
    let controlCount = 0;

    result
      .map((num) =>
        // @ts-expect-error
        num.trim(),
      )
      .map((x) => {
        controlCount += 1;
        return x;
      })
      .map((x) => {
        controlCount += 1;
        return x;
      })
      .catch(() => {
        try {
          expect(controlCount).toBe(0);
          done();
        } catch (testError) {
          done(testError);
        }
      });
  });

  it('Result must implement flatMap method with contained value unwraping', (done) => {
    const result = new Result(() => 42);

    result
      .flatMap((num) => new Result(() => String(num)))
      .flatMap((str) => new Result(() => str.split('')))
      .flatMap((strArr) => Result.ok(strArr.join('-')))
      .map((strArr) => {
        try {
          expect(strArr).toBe('4-2');
          done();
        } catch (testError) {
          done(testError);
        }

        return strArr;
      });
  });

  it('Result must provide instantiation of error-contained', (done) => {
    const result = new Result(() => 42);

    result
      .map((num) => String(num))
      .flatMap((str) => Result.error(str))
      .catch((error) => {
        try {
          expect(error).toBeInstanceOf(Error);
          expect(error.message).toBe('42');
          done();
        } catch (testError) {
          done(testError);
        }
      });
  });
});
