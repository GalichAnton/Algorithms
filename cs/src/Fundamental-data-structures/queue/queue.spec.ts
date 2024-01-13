import Queue from './queue';

describe('Queue implementation', () => {
  it('Insertion value into queue', () => {
    const queue = new Queue<number>();

    queue.enqueue(0);
    expect(queue.peek()).toBe(0);
    queue.enqueue(1);
    expect(queue.peek()).toBe(0);
  });

  it('Removing value from queue', () => {
    const queue = new Queue<number>();

    queue.enqueue(0);
    expect(queue.dequeue()).toBe(0);
    expect(queue.peek()).toBeNull();
    expect(queue.dequeue()).toBeNull();
  });
});
