import type { GridSelection } from '@glideappsfinal/glide-data-grid';
import { act, renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import type { ColumnGlideLast, ObjectForExtending } from '../../types';
import { useTableSelectionSystem } from './useTableSelectionSystem';

// Колонки: [нумерация(service), a, b, c] → firstDataCol = 1, numberingColumnIndex = 0.
const COLUMNS = [
  { id: 'row-markers', isServiceColumn: true },
  { id: 'a', isServiceColumn: false },
  { id: 'b', isServiceColumn: false },
  { id: 'c', isServiceColumn: false },
] as unknown as readonly ColumnGlideLast<ObjectForExtending, unknown>[];

const EMPTY_SELECTION = { current: undefined } as unknown as GridSelection;

/** Мок glide-выделения с current.range. */
const gridSel = (
  cell: [number, number],
  range: { x: number; y: number; width: number; height: number }
): GridSelection =>
  ({ current: { cell, range, rangeStack: [] } } as unknown as GridSelection);

/** Событие клика по шапке (нужны только модификаторы). */
const headerEvent = (mods: Partial<{ shiftKey: boolean; ctrlKey: boolean }>) =>
  ({ shiftKey: false, ctrlKey: false, metaKey: false, ...mods } as never);

function setup(overrides: Record<string, unknown> = {}) {
  const handleGridSelectionChange = vi.fn();
  const handleSelectionCleared = vi.fn();
  const onSelectionEmit = vi.fn();

  const props = {
    columns: COLUMNS,
    selection: EMPTY_SELECTION,
    cellsSelectionMode: 'range-cell' as const,
    highlightActiveType: 'disabled' as const,
    enableColumnSelection: true,
    enableRowSelection: true,
    enableSelectAll: true,
    leadingServiceColumnsCount: 1,
    dataRowCount: 5,
    handleGridSelectionChange,
    handleSelectionCleared,
    onSelectionEmit,
    ...overrides,
  };

  const view = renderHook((p: typeof props) => useTableSelectionSystem(p), {
    initialProps: props,
  });

  return { view, handleGridSelectionChange, onSelectionEmit };
}

describe('useTableSelectionSystem — выделение колонок', () => {
  it('numberingColumnIndex вычисляется по служебной колонке row-markers', () => {
    const { view } = setup();
    expect(view.result.current.numberingColumnIndex).toBe(0);
  });

  it('Ctrl+клик по колонке → своё состояние (selectedColumnIndexes), glide очищается', () => {
    const { view, handleGridSelectionChange, onSelectionEmit } = setup();

    act(() => {
      view.result.current.selectColumnFromHeader(
        2,
        headerEvent({ ctrlKey: true })
      );
    });

    expect(view.result.current.selectedColumnIndexes).toEqual([2]);
    // Ctrl-выбор несмежных колонок → нативное glide-выделение чистим.
    expect(handleGridSelectionChange).toHaveBeenCalledWith(
      expect.objectContaining({ current: undefined })
    );
    // Наружу для copy/paste отдаём колонки.
    expect(onSelectionEmit).toHaveBeenCalled();
  });

  it('одиночный клик по колонке → нативный вертикальный range (рисует glide, не своё состояние)', () => {
    const { view, handleGridSelectionChange } = setup();

    act(() => {
      view.result.current.selectColumnFromHeader(1, headerEvent({}));
    });

    // Реальный current.range на всю высоту данных.
    expect(handleGridSelectionChange).toHaveBeenCalledWith(
      expect.objectContaining({
        current: expect.objectContaining({
          range: { x: 1, y: 0, width: 1, height: 5 },
        }),
      })
    );
    // Смежный выбор идёт нативным путём — в собственном наборе колонок пусто.
    expect(view.result.current.selectedColumnIndexes).toEqual([]);
  });
});

describe('useTableSelectionSystem — инвариант взаимоисключения', () => {
  it('обычное выделение ячеек сбрасывает ранее выбранные Ctrl-колонки', () => {
    const { view } = setup();

    act(() => {
      view.result.current.selectColumnFromHeader(
        2,
        headerEvent({ ctrlKey: true })
      );
    });
    expect(view.result.current.selectedColumnIndexes).toEqual([2]);

    act(() => {
      view.result.current.handleGridSelectionWithColumnReset(
        gridSel([1, 1], { x: 1, y: 1, width: 1, height: 1 })
      );
    });

    expect(view.result.current.selectedColumnIndexes).toEqual([]);
  });
});

describe('useTableSelectionSystem — выделение строк по нумерации', () => {
  it('клик по нумерации (без Ctrl) → нативный range на ширину данных', () => {
    const { view, handleGridSelectionChange } = setup();

    act(() => {
      // клик по колонке нумерации (x=0), строки 2..3
      view.result.current.handleGridSelectionWithColumnReset(
        gridSel([0, 2], { x: 0, y: 2, width: 1, height: 2 })
      );
    });

    // Реальный горизонтальный range: x = firstDataCol(1), width = 4-1 = 3.
    expect(handleGridSelectionChange).toHaveBeenCalledWith(
      expect.objectContaining({
        current: expect.objectContaining({
          range: { x: 1, y: 2, width: 3, height: 2 },
        }),
      })
    );
    // Смежные строки идут нативным путём — своё состояние строк пустое.
    expect(view.result.current.headerSelectedRowIndexes).toEqual([]);
  });
});
