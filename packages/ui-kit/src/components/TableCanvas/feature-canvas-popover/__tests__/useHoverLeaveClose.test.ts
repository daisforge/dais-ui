import { cleanup, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { useHoverLeaveClose } from '../hooks/useHoverLeaveClose';
import { trackPointer } from '../utils/pointerPosition';

const withRect = (rect: {
  x: number;
  y: number;
  width: number;
  height: number;
}) => {
  const element = document.createElement('div');
  element.getBoundingClientRect = () =>
    ({
      ...rect,
      top: rect.y,
      left: rect.x,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height,
      toJSON: () => rect,
    } as DOMRect);
  return element;
};

const pointer = (type: string, x: number, y: number) =>
  document.dispatchEvent(
    new MouseEvent(type, { clientX: x, clientY: y, bubbles: true }),
  );

describe('useHoverLeaveClose: закрытие поповера по уходу курсора', () => {
  // Иконка под поповером (placement: top), между ними зазор.
  const anchor = withRect({ x: 344, y: 162, width: 16, height: 16 });
  const popover = withRect({ x: 235, y: 61, width: 236, height: 90 });
  let onLeave: ReturnType<typeof vi.fn>;
  // В таблице за курсором следит слушатель поповеров, здесь — тест.
  let releasePointer: () => void;

  const renderLeaveHook = () =>
    renderHook(() =>
      useHoverLeaveClose({
        enabled: true,
        anchorRef: { current: anchor },
        popoverRef: { current: popover },
        expand: 4,
        delay: 200,
        onLeave,
      }),
    );

  beforeEach(() => {
    vi.useFakeTimers();
    onLeave = vi.fn();
    releasePointer = trackPointer();
    // Поповер открывается, когда курсор над якорем.
    pointer('pointermove', 352, 170);
  });

  afterEach(() => {
    cleanup();
    releasePointer();
    vi.useRealTimers();
  });

  it('держится, пока курсор идёт от якоря к поповеру по диагонали', () => {
    renderLeaveHook();
    pointer('pointermove', 352, 170);
    pointer('pointermove', 330, 156);
    pointer('pointermove', 300, 130);
    vi.advanceTimersByTime(500);
    expect(onLeave).not.toHaveBeenCalled();
  });

  it('закрывается через delay после ухода из зоны', () => {
    renderLeaveHook();
    pointer('pointermove', 352, 170);
    pointer('pointermove', 700, 500);
    vi.advanceTimersByTime(199);
    expect(onLeave).not.toHaveBeenCalled();
    vi.advanceTimersByTime(1);
    expect(onLeave).toHaveBeenCalledTimes(1);
  });

  it('возврат в зону отменяет закрытие', () => {
    renderLeaveHook();
    pointer('pointermove', 700, 500);
    vi.advanceTimersByTime(100);
    pointer('pointermove', 300, 100);
    vi.advanceTimersByTime(500);
    expect(onLeave).not.toHaveBeenCalled();
  });

  it('курсор ушёл за пределы окна', () => {
    renderLeaveHook();
    document.dispatchEvent(new MouseEvent('mouseout', { relatedTarget: null }));
    vi.advanceTimersByTime(200);
    expect(onLeave).toHaveBeenCalledTimes(1);
  });

  it('нажатие вне зоны закрывает сразу (касание на сенсорном экране)', () => {
    renderLeaveHook();
    pointer('pointerdown', 900, 900);
    expect(onLeave).toHaveBeenCalledTimes(1);
  });

  it('нажатие внутри поповера не закрывает', () => {
    renderLeaveHook();
    pointer('pointerdown', 300, 100);
    vi.advanceTimersByTime(500);
    expect(onLeave).not.toHaveBeenCalled();
  });

  it('открылся, когда курсор уже снаружи: закрывается без движения мыши', () => {
    pointer('pointermove', 900, 900);
    renderLeaveHook();
    vi.advanceTimersByTime(200);
    expect(onLeave).toHaveBeenCalledTimes(1);
  });
});
