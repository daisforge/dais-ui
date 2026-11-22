import { afterEach, describe, expect, it, vi } from 'vitest';

import { throttleWithLastCall } from './throttle';

afterEach(() => {
  vi.useRealTimers();
});

describe('throttleWithLastCall', () => {
  it('отменяет trailing-вызов, включая таймер после предыдущего trailing-вызова', () => {
    vi.useFakeTimers();
    const callback = vi.fn();
    const resize = throttleWithLastCall(callback, 100);
    resize(1);
    resize(2);
    vi.advanceTimersByTime(100);
    expect(callback.mock.calls).toEqual([[1], [2]]);
    resize(3);
    resize.cancel();
    vi.advanceTimersByTime(500);
    expect(callback.mock.calls).toEqual([[1], [2]]);
    expect(vi.getTimerCount()).toBe(0);
    resize(4);
    expect(callback).toHaveBeenLastCalledWith(4);
    resize.cancel();
  });
});
