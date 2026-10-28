import {
  CompactSelection,
  type GridSelection,
} from '@glideappsfinal/glide-data-grid';
import { act, renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import {
  shiftSelectionColumns,
  useNativeGridSelection,
} from './useNativeGridSelection';

const service = { isServiceColumn: true };
const data = { isServiceColumn: false };

// Нумерация и три колонки данных; после появления столбца ошибок перед
// данными две служебные колонки.
const ONE_SERVICE = [service, data, data, data];
const TWO_SERVICE = [service, service, data, data, data];

const cellSelection = (col: number, row: number): GridSelection => ({
  columns: CompactSelection.empty(),
  rows: CompactSelection.empty(),
  current: {
    cell: [col, row],
    range: { x: col, y: row, width: 1, height: 1 },
    rangeStack: [],
  },
});

describe('shiftSelectionColumns', () => {
  it('сдвигает ячейку, диапазон, стек диапазонов и выбранные колонки', () => {
    const selection: GridSelection = {
      columns: CompactSelection.fromSingleSelection([2, 4]),
      rows: CompactSelection.fromSingleSelection(1),
      current: {
        cell: [3, 7],
        range: { x: 2, y: 7, width: 2, height: 1 },
        rangeStack: [{ x: 1, y: 0, width: 1, height: 1 }],
      },
    };
    const shifted = shiftSelectionColumns(selection, 1);
    expect(shifted.current?.cell).toEqual([4, 7]);
    expect(shifted.current?.range).toEqual({ x: 3, y: 7, width: 2, height: 1 });
    expect(shifted.current?.rangeStack).toEqual([
      { x: 2, y: 0, width: 1, height: 1 },
    ]);
    expect(shifted.columns.toArray()).toEqual([3, 4]);
    expect(shifted.rows.toArray()).toEqual([1]);
  });

  it('возвращает исходный объект, если сдвиг нулевой или выделения нет', () => {
    const empty: GridSelection = {
      columns: CompactSelection.empty(),
      rows: CompactSelection.empty(),
      current: undefined,
    };
    expect(shiftSelectionColumns(empty, 1)).toBe(empty);
    const sel = cellSelection(2, 0);
    expect(shiftSelectionColumns(sel, 0)).toBe(sel);
  });

  it('не сдвигает в отрицательные индексы', () => {
    const sel = cellSelection(0, 0);
    expect(shiftSelectionColumns(sel, -1)).toBe(sel);
  });
});

describe('useNativeGridSelection: смена числа ведущих служебных колонок', () => {
  it('uncontrolled: активная ячейка остаётся на той же колонке данных', () => {
    const onSelectionEmit = vi.fn();
    const { result, rerender } = renderHook(
      (columns: readonly { isServiceColumn?: boolean }[]) =>
        useNativeGridSelection({
          cellsSelectionMode: 'cell',
          columns,
          onSelectionEmit,
        }),
      { initialProps: ONE_SERVICE },
    );

    act(() => {
      result.current.handleGridSelectionChange(cellSelection(3, 8));
    });
    expect(result.current.selection.current?.cell).toEqual([3, 8]);

    rerender(TWO_SERVICE);
    expect(result.current.selection.current?.cell).toEqual([4, 8]);
    expect(result.current.selection.current?.range.x).toBe(4);
    expect(onSelectionEmit).toHaveBeenLastCalledWith(result.current.selection);

    rerender(ONE_SERVICE);
    expect(result.current.selection.current?.cell).toEqual([3, 8]);
  });

  it('controlled: сдвинутое выделение уходит во внешний сеттер', () => {
    const onGridSelectionChange = vi.fn();
    const { rerender } = renderHook(
      (columns: readonly { isServiceColumn?: boolean }[]) =>
        useNativeGridSelection({
          cellsSelectionMode: 'cell',
          columns,
          gridSelection: cellSelection(1, 2),
          onGridSelectionChange,
        }),
      { initialProps: ONE_SERVICE },
    );

    rerender(TWO_SERVICE);
    expect(onGridSelectionChange).toHaveBeenCalledTimes(1);
    expect(onGridSelectionChange.mock.calls[0][0].current.cell).toEqual([2, 2]);
  });

  it('без выделения смена колонок ничего не вызывает', () => {
    const onSelectionEmit = vi.fn();
    const { rerender } = renderHook(
      (columns: readonly { isServiceColumn?: boolean }[]) =>
        useNativeGridSelection({
          cellsSelectionMode: 'cell',
          columns,
          onSelectionEmit,
        }),
      { initialProps: ONE_SERVICE },
    );
    rerender(TWO_SERVICE);
    expect(onSelectionEmit).not.toHaveBeenCalled();
  });
});
