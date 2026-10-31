import type { DataEditorRef } from '@glideappsfinal/glide-data-grid';
import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { useHoverState } from '../useHoverState';

const setup = (isRowHoverEnabled = true) => {
  const updateCells = vi.fn();
  const dataEditorRef = {
    current: { updateCells } as unknown as DataEditorRef,
  };
  const hook = renderHook(() =>
    useHoverState({
      isRowHoverEnabled,
      dataEditorRef,
      columnsCount: 3,
      rowsCount: 10,
    }),
  );
  return { hook, updateCells };
};

/** Дорисовка строк уходит в glide микрозадачей, в конце текущей задачи */
const nextTask = () =>
  new Promise<void>((resolve) => {
    setTimeout(resolve, 0);
  });

const rowsOf = (call: unknown[]) =>
  (call[0] as Array<{ cell: [number, number] }>).map(({ cell }) => cell[1]);

describe('useHoverState: строка под курсором без рендера React', () => {
  it('ref меняется сразу, прежняя и новая строки дорисовываются одним вызовом', async () => {
    const { hook, updateCells } = setup();

    hook.result.current.onHoverRowChange!(2);
    expect(hook.result.current.hoverRowRef.current).toBe(2);
    expect(updateCells).not.toHaveBeenCalled();

    await nextTask();
    expect(updateCells).toHaveBeenCalledTimes(1);
    expect(updateCells.mock.calls[0]![0]).toEqual([
      { cell: [0, 2] },
      { cell: [1, 2] },
      { cell: [2, 2] },
    ]);

    hook.result.current.onHoverRowChange!(5);
    await nextTask();
    expect(updateCells).toHaveBeenCalledTimes(2);
    expect(rowsOf(updateCells.mock.calls[1]!)).toEqual([2, 2, 2, 5, 5, 5]);
  });

  it('ячейка и строка за одно событие мыши: одна дорисовка', async () => {
    const { hook, updateCells } = setup();

    hook.result.current.setHoveredCell({ colInd: 1, rowInd: 3 });
    hook.result.current.onHoverRowChange!(3);
    await nextTask();

    expect(updateCells).toHaveBeenCalledTimes(1);
    expect(new Set(rowsOf(updateCells.mock.calls[0]!))).toEqual(new Set([3]));
  });

  it('та же строка и строка за пределами данных: без дорисовки', async () => {
    const { hook, updateCells } = setup();

    hook.result.current.onHoverRowChange!(4);
    await nextTask();
    hook.result.current.onHoverRowChange!(4);
    hook.result.current.onHoverRowChange!(undefined);
    hook.result.current.onHoverRowChange!(42);
    await nextTask();

    expect(updateCells).toHaveBeenCalledTimes(2);
    expect(rowsOf(updateCells.mock.calls[1]!)).toEqual([4, 4, 4]);
    expect(hook.result.current.hoverRowRef.current).toBe(42);
  });

  it('наведение на строку выключено: слежения за строкой нет', () => {
    const { hook } = setup(false);
    expect(hook.result.current.onHoverRowChange).toBeUndefined();
  });
});
