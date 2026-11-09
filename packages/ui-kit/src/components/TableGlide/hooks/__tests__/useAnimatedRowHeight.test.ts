import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import type { RowHeightGlide } from '../../types';
import { useAnimatedRowHeight } from '../useAnimatedRowHeight';

const FRAME_MS = 16;

const advance = (ms: number) =>
  act(() => {
    vi.advanceTimersByTime(ms);
  });

const render = (initial: RowHeightGlide) =>
  renderHook(({ height }) => useAnimatedRowHeight(height), {
    initialProps: { height: initial },
  });

describe('useAnimatedRowHeight', () => {
  beforeEach(() => {
    vi.useFakeTimers({
      toFake: ['requestAnimationFrame', 'cancelAnimationFrame', 'performance'],
    });
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it('стартует с переданной высоты без анимации', () => {
    const { result } = render(20);

    expect(result.current).toBe(20);
  });

  it('плавно приходит к новой высоте за 300 мс', () => {
    const { result, rerender } = render(20);

    rerender({ height: 48 });
    advance(150);
    expect(result.current).toBeGreaterThan(20);
    expect(result.current).toBeLessThan(48);

    advance(200);
    expect(result.current).toBe(48);
  });

  it('новая смена высоты прерывает прежнюю анимацию и идёт от текущего значения', () => {
    const { result, rerender } = render(20);
    rerender({ height: 48 });
    advance(150);
    const midway = result.current;

    rerender({ height: 20 });
    advance(FRAME_MS);
    expect(result.current).toBeLessThanOrEqual(midway as number);
    expect(result.current).toBeGreaterThanOrEqual(20);

    advance(400);
    expect(result.current).toBe(20);
  });

  it('прерванная анимация больше не пишет в высоту', () => {
    const { result, rerender } = render(20);
    rerender({ height: 48 });
    advance(100);
    rerender({ height: 32 });
    advance(400);

    expect(result.current).toBe(32);
    advance(1000);
    expect(result.current).toBe(32);
  });

  it('функция высоты возвращается как есть', () => {
    const heightOf = () => 30;
    const { result } = render(heightOf);

    expect(result.current).toBe(heightOf);
  });

  it('после функции высоты число применяется сразу, без разгона от произвольного значения', () => {
    const { result, rerender } = render(() => 30);

    rerender({ height: 32 });

    expect(result.current).toBe(32);
    advance(FRAME_MS);
    expect(result.current).toBe(32);
  });

  it('при размонтировании отменяет запланированный кадр', () => {
    const cancel = vi.spyOn(globalThis, 'cancelAnimationFrame');
    const { rerender, unmount } = render(20);
    rerender({ height: 48 });
    advance(FRAME_MS);

    unmount();

    expect(cancel).toHaveBeenCalled();
  });

  it('при prefers-reduced-motion меняет высоту сразу', () => {
    vi.stubGlobal('matchMedia', () => ({ matches: true }));
    const { result, rerender } = render(20);

    rerender({ height: 48 });

    expect(result.current).toBe(48);
  });
});
