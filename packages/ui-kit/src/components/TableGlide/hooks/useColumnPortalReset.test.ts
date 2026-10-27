import { renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import {
  isPortalHoverLocked,
  subscribeToCanvasPortalReset
} from '../lib/canvas';
import {
  RESIZE_LOCK_RELEASE_MS,
  useColumnPortalReset
} from './useColumnPortalReset';

const renderTable = () => {
  const container = document.createElement('div');
  const onReset = vi.fn();
  const unsubscribe = subscribeToCanvasPortalReset(onReset, container);
  const hook = renderHook(() => useColumnPortalReset({ current: container }));
  return { container, onReset, unsubscribe, hook };
};

describe('useColumnPortalReset', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('ресайз в одной таблице блокирует и сбрасывает только её', () => {
    const first = renderTable();
    const second = renderTable();
    first.hook.result.current.onColumnResizeStep();
    expect(isPortalHoverLocked(first.container)).toBe(true);
    expect(isPortalHoverLocked(second.container)).toBe(false);
    expect(first.onReset).toHaveBeenCalledTimes(1);
    expect(second.onReset).not.toHaveBeenCalled();
    first.hook.unmount();
    second.hook.unmount();
  });

  it('сброс один на весь ресайз, блокировка снимается после паузы', () => {
    const table = renderTable();
    const { onColumnResizeStep } = table.hook.result.current;
    onColumnResizeStep();
    vi.advanceTimersByTime(RESIZE_LOCK_RELEASE_MS - 1);
    onColumnResizeStep();
    vi.advanceTimersByTime(RESIZE_LOCK_RELEASE_MS - 1);
    expect(isPortalHoverLocked(table.container)).toBe(true);
    expect(table.onReset).toHaveBeenCalledTimes(1);
    vi.advanceTimersByTime(1);
    expect(isPortalHoverLocked(table.container)).toBe(false);
    table.hook.unmount();
  });

  it('размонтирование снимает блокировку', () => {
    const table = renderTable();
    table.hook.result.current.onColumnResizeStep();
    table.hook.unmount();
    expect(isPortalHoverLocked(table.container)).toBe(false);
  });

  it('перестановка колонок сбрасывает без блокировки', () => {
    const table = renderTable();
    table.hook.result.current.onColumnMoved();
    expect(table.onReset).toHaveBeenCalledTimes(1);
    expect(isPortalHoverLocked(table.container)).toBe(false);
    table.hook.unmount();
  });
});
