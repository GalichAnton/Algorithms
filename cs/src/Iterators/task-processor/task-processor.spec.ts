/* eslint-disable no-console */
import TaskProcessor from './task-processor';

describe('Task processor implementation', () => {
  it('Attemtp to work with non-iterable object', () => {
    const taskProcessor = new TaskProcessor();
    const nums = 1234567;

    expect(() =>
      taskProcessor
        // @ts-expect-error
        .forEach(nums, (num) => {
          console.log(num);
        }),
    ).toThrowError('Object is not iterable');
  });

  it('Attemtp to work with no callback provided', () => {
    const taskProcessor = new TaskProcessor();
    const nums = [...Array(5e5).keys()];

    // @ts-expect-error
    expect(() => taskProcessor.forEach(nums)).toThrowError('Callback is not a type of function');
  });

  it('Task processor must iterate huge iterables with no I/O blocking', () => {
    const taskProcessor = new TaskProcessor();
    const nums = [...Array(5e5).keys()];
    let sumOfNums = 0;

    expect(
      taskProcessor
        .forEach(nums, (num) => {
          sumOfNums += num;
        })
        .then(() => {
          expect(sumOfNums === 5e5);
        }),
    );
  });

  it('Task processor must handle callback application errors', () => {
    const taskProcessor = new TaskProcessor();
    const nums = [1, 2, 3, '4', 5, 6, 7];

    expect(
      taskProcessor
        .forEach(nums, (num) => {
          // @ts-expect-error
          num.toFixed();
        })
        .catch((err) => {
          expect(err).toBeInstanceOf(TypeError);
        }),
    );
  });

  it('Task processor must iterate serial of huge iterables with no I/O blocking', () => {
    const taskProcessor = new TaskProcessor();
    const nums = [...Array(4e4).keys()];

    let firstTaskResult = 0;
    let secondTaskResult = 0;

    const taskResultsArray: number[] = [];

    const firstTask = taskProcessor
      .forEach(nums, () => {
        firstTaskResult += 1;
      })
      .then(() => {
        taskResultsArray.push(firstTaskResult);
      });

    setTimeout(() => {
      const secondTask = taskProcessor
        .forEach(nums, () => {
          secondTaskResult += 2;
        })
        .then(() => {
          taskResultsArray.push(secondTaskResult);
        });

      Promise.all([firstTask, secondTask]).then(() => {
        expect(taskResultsArray).toEqual([4e4, 8e4]);
      });
    }, 150);
  });
});
