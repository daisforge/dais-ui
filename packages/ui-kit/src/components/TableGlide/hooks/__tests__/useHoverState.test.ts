import type { DataEditorRef } from '@glideappsfinal/glide-data-grid';
import { act, renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { type ResolveHoverRows, useHoverState } from '../useHoverState';

const setup = ({
  isRowHoverEnabled = true,
  resolveHoverRows,
  visibleRegion,
}: {
  isRowHoverEnabled?: boolean;
  resolveHoverRows?: ResolveHoverRows;
  visibleRegion?: { y: number; height: number };
} = {}) => {
  const updateCells = vi.fn();
  const dataEditorRef = {
    current: { updateCells } as unknown as DataEditorRef,
  };
  const visibleRegionRef = { current: visibleRegion ?? null };
  const onHoverRowsChange = vi.fn();
  const hook = renderHook(
    (props: { resolveHoverRows?: ResolveHoverRows }) =>
      useHoverState({
        isRowHoverEnabled,
        dataEditorRef,
        columnsCount: 3,
        rowsCount: 10,
        resolveHoverRows: props.resolveHoverRows,
        visibleRegionRef,
        onHoverRowsChange,
      }),
    { initialProps: { resolveHoverRows } },
  );
  return { hook, updateCells, onHoverRowsChange };
};

/** Дорисовка строк уходит в glide микрозадачей, в конце текущей задачи */
const nextTask = () =>
  new Promise<void>((resolve) => {
    setTimeout(resolve, 0);
  });

const rowsOf = (call: unknown[]) =>
  (call[0] as Array<{ cell: [number, number] }>).map(({ cell }) => cell[1]);

describe('useHoverState: строки под курсором без рендера React', () => {
  it('ссылка меняется сразу, прежняя и новая строки дорисовываются одним вызовом', async () => {
    const { hook, updateCells, onHoverRowsChange } = setup();

    hook.result.current.onHoverRowChange!([0, 2]);
    expect(hook.result.current.hoverRowsRef.current).toEqual({ from: 2, to: 2 });
    expect(onHoverRowsChange).toHaveBeenCalledTimes(1);
    expect(updateCells).not.toHaveBeenCalled();

    await nextTask();
    expect(updateCells).toHaveBeenCalledTimes(1);
    expect(updateCells.mock.calls[0]![0]).toEqual([
      { cell: [0, 2] },
      { cell: [1, 2] },
      { cell: [2, 2] },
    ]);

    hook.result.current.onHoverRowChange!([1, 5]);
    await nextTask();
    expect(updateCells).toHaveBeenCalledTimes(2);
    expect(rowsOf(updateCells.mock.calls[1]!)).toEqual([2, 2, 2, 5, 5, 5]);
  });

  it('ячейка и строка за одно событие мыши: одна дорисовка', async () => {
    const { hook, updateCells } = setup();

    hook.result.current.setHoveredCell({ colInd: 1, rowInd: 3 });
    hook.result.current.onHoverRowChange!([1, 3]);
    await nextTask();

    expect(updateCells).toHaveBeenCalledTimes(1);
    expect(new Set(rowsOf(updateCells.mock.calls[0]!))).toEqual(new Set([3]));
  });

  it('та же строка и строка за пределами данных: без дорисовки', async () => {
    const { hook, updateCells } = setup();

    hook.result.current.onHoverRowChange!([0, 4]);
    await nextTask();
    hook.result.current.onHoverRowChange!([0, 4]);
    hook.result.current.onHoverRowChange!(undefined);
    hook.result.current.onHoverRowChange!([0, 42]);
    await nextTask();

    expect(updateCells).toHaveBeenCalledTimes(2);
    expect(rowsOf(updateCells.mock.calls[1]!)).toEqual([4, 4, 4]);
    expect(hook.result.current.hoverRowsRef.current).toEqual({
      from: 42,
      to: 42,
    });
  });

  it('наведение на строку выключено: слежения за строкой нет', () => {
    const { hook } = setup({ isRowHoverEnabled: false });
    expect(hook.result.current.onHoverRowChange).toBeUndefined();
  });
});

describe('useHoverState: объединённый блок под курсором', () => {
  it('курсор на блоке: все строки блока, при уходе они дорисовываются', async () => {
    const { hook, updateCells } = setup({
      resolveHoverRows: () => ({ from: 1, to: 3 }),
    });

    hook.result.current.onHoverRowChange!([0, 2]);
    expect(hook.result.current.hoverRowsRef.current).toEqual({ from: 1, to: 3 });
    await nextTask();
    expect(new Set(rowsOf(updateCells.mock.calls[0]!))).toEqual(
      new Set([1, 2, 3]),
    );

    hook.result.current.onHoverRowChange!(undefined);
    expect(hook.result.current.hoverRowsRef.current).toBeUndefined();
    await nextTask();
    expect(new Set(rowsOf(updateCells.mock.calls[1]!))).toEqual(
      new Set([1, 2, 3]),
    );
  });

  it('дорисовка блока обрезается по видимым строкам', async () => {
    const { hook, updateCells } = setup({
      resolveHoverRows: () => ({ from: 0, to: 9 }),
      visibleRegion: { y: 4, height: 2 },
    });

    hook.result.current.onHoverRowChange!([0, 5]);
    await nextTask();

    expect(new Set(rowsOf(updateCells.mock.calls[0]!))).toEqual(
      new Set([4, 5, 6]),
    );
  });

  it('данные обновились без движения мыши: блок ищется заново от ячейки под мышью', async () => {
    // Курсор в пятой строке блока 1-5, новые данные разделяют его на 1-2 и 3-5.
    const blockOf = (row: number) =>
      row < 2 ? { from: 0, to: 1 } : { from: 2, to: 4 };
    const calls: Array<[number, number]> = [];
    const { hook, updateCells } = setup({
      resolveHoverRows: () => ({ from: 0, to: 4 }),
    });

    hook.result.current.onHoverRowChange!([0, 4]);
    expect(hook.result.current.hoverRowsRef.current).toEqual({ from: 0, to: 4 });
    await nextTask();

    act(() =>
      hook.rerender({
        resolveHoverRows: (col, row) => {
          calls.push([col, row]);
          return blockOf(row);
        },
      }),
    );

    expect(calls.at(-1)).toEqual([0, 4]);
    expect(hook.result.current.hoverRowsRef.current).toEqual({ from: 2, to: 4 });
    await nextTask();
    // Прежний блок целиком и новый: строки 0-4.
    expect(new Set(rowsOf(updateCells.mock.calls[1]!))).toEqual(
      new Set([0, 1, 2, 3, 4]),
    );
  });
});
