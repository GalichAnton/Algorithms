import Stack from './stack';

describe('Stack implementation based on array', () => {
  it('Attempt to construct stack with invalid max size value', () => {
    expect(() => new Stack(0)).toThrowError('Invalid stack size value provided');
    expect(() => new Stack(2.5)).toThrowError('Invalid stack size value provided');
  });

  it('Pushing value into stack', () => {
    const stack = new Stack<number>(3);

    stack.push(0);
    expect(stack.peek()).toBe(0);
    expect(stack.isEmpty).toBe(false);
    stack.push(1);
    expect(stack.peek()).toBe(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    expect(stack.isFull).toBe(true);
  });

  it('Popping value from stack', () => {
    const stack = new Stack<number>(5);

    stack.push(0);
    stack.push(1);
    expect(stack.pop()).toBe(1);
    expect(stack.peek()).toBe(0);
    expect(stack.pop()).toBe(0);
    expect(stack.peek()).toBeNull();
    expect(stack.isEmpty).toBe(true);
  });

  it('Pushing value into a full stack', () => {
    const stack = new Stack<number>(3);

    stack.push(0);
    stack.push(1);
    stack.push(2);
    expect(() => stack.push(3)).toThrowError('Maximum stack size exceeded');
  });
});
