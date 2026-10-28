import { renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { SCROLL_THROTTLE_MS } from '../canvas/core/constants';
import type { TablePopoverContextValue, TablePopoverState } from '../context';
import { useClosePopoverOnRegionChange } from '../hooks/useClosePopoverOnRegionchange';

type Region = { x: number; y: number; width: number; height: number };

const region = (x: number, y: number): Region => ({
  x,
  y,
  width: 5,
  height: 10,
});

const createValue = (
  state: Partial<TablePopoverState>,
): TablePopoverContextValue => ({
  state: {
    isOpen: true,
    position: { x: 0, y: 0 },
    anchorSize: null,
    contentType: 'custom',
    behavior: null,
    sourceKey: 'a',
    ...state,
  },
  open: vi.fn(),
  close: vi.fn(),
  updatePosition: vi.fn(),
});

type RegionHandler = (range: Region, tx: number, ty: number) => void;

/** Обработчик с троттлингом: между вызовами ждём, чтобы каждый был обработан. */
const renderRegionHook = (value: TablePopoverContextValue): RegionHandler => {
  const handler = renderHook(() => useClosePopoverOnRegionChange(value)).result
    .current as RegionHandler;
  return (range, tx, ty) => {
    handler(range, tx, ty);
    vi.advanceTimersByTime(SCROLL_THROTTLE_MS);
  };
};

describe('useClosePopoverOnRegionChange: закрытие при прокрутке', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('canvas-поповер закрывается при прокрутке ровно на целое число строк', () => {
    const value = createValue({});
    const onRegion = renderRegionHook(value);
    onRegion(region(0, 0), 0, 0);
    // Прокрутили на две строки: смещение внутри ячейки то же, сменилась первая строка.
    onRegion(region(0, 2), 0, 0);
    expect(value.close).toHaveBeenCalledTimes(1);
  });

  it('canvas-поповер закрывается и при плавной прокрутке внутри строки', () => {
    const value = createValue({});
    const onRegion = renderRegionHook(value);
    onRegion(region(0, 0), 0, 0);
    onRegion(region(0, 0), 0, 10);
    expect(value.close).toHaveBeenCalledTimes(1);
  });

  it('сдвиг в пределах порога не закрывает', () => {
    const value = createValue({});
    const onRegion = renderRegionHook(value);
    onRegion(region(0, 0), 0, 0);
    onRegion(region(0, 0), 2, 2);
    expect(value.close).not.toHaveBeenCalled();
  });

  it('фильтр шапки закрывается только по горизонтали', () => {
    const value = createValue({ contentType: 'filter' });
    const onRegion = renderRegionHook(value);
    onRegion(region(0, 0), 0, 0);
    onRegion(region(0, 3), 0, 0);
    expect(value.close).not.toHaveBeenCalled();
    onRegion(region(1, 3), 0, 0);
    expect(value.close).toHaveBeenCalledTimes(1);
  });

  it('closeOnScroll: false не закрывает', () => {
    const value = createValue({
      behavior: { closeOnScroll: false, closeOnTableResize: true },
    });
    const onRegion = renderRegionHook(value);
    onRegion(region(0, 0), 0, 0);
    onRegion(region(4, 4), 0, 0);
    expect(value.close).not.toHaveBeenCalled();
  });

  it('первое событие только запоминает положение', () => {
    const value = createValue({});
    const onRegion = renderRegionHook(value);
    onRegion(region(3, 7), 0, 0);
    expect(value.close).not.toHaveBeenCalled();
  });

  it('частые события: обрабатывается первое и последнее, положение не теряется', () => {
    const value = createValue({});
    const handler = renderHook(() => useClosePopoverOnRegionChange(value))
      .result.current as RegionHandler;
    handler(region(0, 0), 0, 0);
    handler(region(0, 0), 0, 1);
    handler(region(0, 0), 0, 10);
    expect(value.close).not.toHaveBeenCalled();
    vi.advanceTimersByTime(SCROLL_THROTTLE_MS);
    expect(value.close).toHaveBeenCalledTimes(1);
  });
});
