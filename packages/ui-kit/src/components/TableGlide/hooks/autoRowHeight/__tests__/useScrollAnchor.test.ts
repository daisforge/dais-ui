import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { useScrollAnchor } from '../useScrollAnchor';

const createGrid = (scrollTop: number) => {
  const wrapper = document.createElement('div');
  const table = document.createElement('div');
  table.className = 'gdg-table';
  const scroller = document.createElement('div');
  scroller.className = 'dvn-scroller';
  scroller.scrollTop = scrollTop;
  table.append(scroller);
  wrapper.append(table);
  return { wrapper, scroller };
};

const setup = (scrollTop: number, enabled = true) => {
  const { wrapper, scroller } = createGrid(scrollTop);
  const takeShift = vi.fn(() => 0);
  const hook = renderHook(
    ({ rowHeights }: { rowHeights: number }) =>
      useScrollAnchor({
        enabled,
        containerRef: { current: wrapper },
        rowHeights,
        takeShift,
      }),
    { initialProps: { rowHeights: 0 } },
  );
  return { scroller, takeShift, hook };
};

describe('useScrollAnchor', () => {
  it('после коммита высот сдвигает прокрутку на рост строк выше якоря', () => {
    const { scroller, takeShift, hook } = setup(1000);

    takeShift.mockReturnValueOnce(36);
    hook.rerender({ rowHeights: 1 });

    expect(scroller.scrollTop).toBe(1036);
  });

  it('без роста строк выше якоря прокрутку не трогает', () => {
    const { scroller, hook } = setup(1000);

    hook.rerender({ rowHeights: 1 });

    expect(scroller.scrollTop).toBe(1000);
  });

  it('у самого верха таблицы прокрутку не трогает', () => {
    const { scroller, takeShift, hook } = setup(0);

    takeShift.mockReturnValueOnce(36);
    hook.rerender({ rowHeights: 1 });

    expect(scroller.scrollTop).toBe(0);
  });

  it('выключен (высота строк не по содержимому) — не прокручивает, но сдвиг забирает', () => {
    const { scroller, takeShift, hook } = setup(1000, false);

    takeShift.mockReturnValueOnce(36);
    hook.rerender({ rowHeights: 1 });

    expect(scroller.scrollTop).toBe(1000);
    expect(takeShift).toHaveBeenCalledTimes(2);
  });
});
