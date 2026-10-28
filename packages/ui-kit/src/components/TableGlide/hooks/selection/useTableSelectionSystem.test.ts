import type { GridSelection } from '@glideappsfinal/glide-data-grid';
import { act, renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import type { ColumnGlideLast, ObjectForExtending } from '../../types';
import { useNativeGridSelection } from './useNativeGridSelection';
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
  range: { x: number; y: number; width: number; height: number },
): GridSelection =>
  ({ current: { cell, range, rangeStack: [] } } as unknown as GridSelection);

/** Событие клика по шапке (нужны только модификаторы). */
const headerEvent = (mods: Partial<{ shiftKey: boolean; ctrlKey: boolean }>) =>
  ({ shiftKey: false, ctrlKey: false, metaKey: false, ...mods } as never);

const BASE_PROPS = {
  columns: COLUMNS,
  cellsSelectionMode: 'range-cell' as const,
  highlightActiveType: 'disabled' as const,
  enableColumnSelection: true,
  enableRowSelection: true,
  enableSelectAll: true,
  leadingServiceColumnsCount: 1,
  dataRowCount: 5,
};

function setup(overrides: Record<string, unknown> = {}) {
  const handleGridSelectionChange = vi.fn();
  const handleSelectionCleared = vi.fn();

  const props = {
    ...BASE_PROPS,
    selection: EMPTY_SELECTION,
    handleGridSelectionChange,
    handleSelectionCleared,
    ...overrides,
  };

  const view = renderHook((p: typeof props) => useTableSelectionSystem(p), {
    initialProps: props,
  });

  return { view, handleGridSelectionChange };
}

/** Система выделения поверх настоящего useNativeGridSelection: `onSelectionEmit` — то, что получит потребитель */
function setupWithNative() {
  const onSelectionEmit = vi.fn();
  const view = renderHook(() => {
    const native = useNativeGridSelection({
      cellsSelectionMode: 'range-cell',
      onSelectionEmit,
    });
    return useTableSelectionSystem({
      ...BASE_PROPS,
      selection: native.selection,
      handleGridSelectionChange: native.handleGridSelectionChange,
      handleSelectionCleared: native.handleSelectionCleared,
    });
  });
  return { view, onSelectionEmit };
}

describe('useTableSelectionSystem — выделение колонок', () => {
  it('numberingColumnIndex вычисляется по служебной колонке row-markers', () => {
    const { view } = setup();
    expect(view.result.current.numberingColumnIndex).toBe(0);
  });

  it('Ctrl+клик по колонке → своё состояние (selectedColumnIndexes), glide очищается', () => {
    const { view, handleGridSelectionChange } = setup();

    act(() => {
      view.result.current.selectColumnFromHeader(
        2,
        headerEvent({ ctrlKey: true }),
      );
    });

    expect(view.result.current.selectedColumnIndexes).toEqual([2]);
    // Ctrl-выбор несмежных колонок → нативное glide-выделение чистим.
    expect(
      handleGridSelectionChange.mock.lastCall?.[0].current,
    ).toBeUndefined();
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
      }),
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
        headerEvent({ ctrlKey: true }),
      );
    });
    expect(view.result.current.selectedColumnIndexes).toEqual([2]);

    act(() => {
      view.result.current.handleGridSelectionWithColumnReset(
        gridSel([1, 1], { x: 1, y: 1, width: 1, height: 1 }),
      );
    });

    expect(view.result.current.selectedColumnIndexes).toEqual([]);
  });
});

describe('useTableSelectionSystem — выделение строк по нумерации', () => {
  it('клик по нумерации (без Ctrl) → нативный range на ширину данных', () => {
    const { view, handleGridSelectionChange } = setup();

    act(() => {
      window.dispatchEvent(new Event('pointerdown'));
      // клик по колонке нумерации (x=0), строки 2..3
      view.result.current.handleGridSelectionWithColumnReset(
        gridSel([0, 2], { x: 0, y: 2, width: 1, height: 2 }),
      );
    });

    // Реальный горизонтальный range: x = firstDataCol(1), width = 4-1 = 3.
    expect(handleGridSelectionChange).toHaveBeenCalledWith(
      expect.objectContaining({
        current: expect.objectContaining({
          range: { x: 1, y: 2, width: 3, height: 2 },
        }),
      }),
    );
    // Смежные строки идут нативным путём — своё состояние строк пустое.
    expect(view.result.current.headerSelectedRowIndexes).toEqual([]);
  });

  it('Ctrl+клик по нумерации → несмежные строки, наружу по одному onChange на клик', () => {
    const { view, onSelectionEmit } = setupWithNative();

    act(() => {
      window.dispatchEvent(new MouseEvent('pointerdown', { ctrlKey: true }));
      view.result.current.handleGridSelectionWithColumnReset(
        gridSel([0, 1], { x: 0, y: 1, width: 1, height: 1 }),
      );
    });
    act(() => {
      window.dispatchEvent(new MouseEvent('pointerdown', { ctrlKey: true }));
      view.result.current.handleGridSelectionWithColumnReset(
        gridSel([0, 3], { x: 0, y: 3, width: 1, height: 1 }),
      );
    });

    expect(view.result.current.headerSelectedRowIndexes).toEqual([1, 3]);
    expect(onSelectionEmit).toHaveBeenCalledTimes(2);
    const emitted = onSelectionEmit.mock.lastCall?.[0];
    expect(emitted.current).toBeUndefined();
    expect(emitted.rows.toArray()).toEqual([1, 3]);
  });

  it('правый клик по строке из Ctrl-набора не сбрасывает выделенные строки', () => {
    const { view, handleGridSelectionChange } = setup();

    for (const row of [1, 3]) {
      act(() => {
        window.dispatchEvent(new MouseEvent('pointerdown', { ctrlKey: true }));
        view.result.current.handleGridSelectionWithColumnReset(
          gridSel([0, row], { x: 0, y: row, width: 1, height: 1 }),
        );
      });
    }
    handleGridSelectionChange.mockClear();

    act(() => {
      window.dispatchEvent(new MouseEvent('pointerdown', { button: 2 }));
      view.result.current.handleGridSelectionWithColumnReset(
        gridSel([0, 3], { x: 0, y: 3, width: 1, height: 1 }),
      );
    });

    expect(view.result.current.headerSelectedRowIndexes).toEqual([1, 3]);
    expect(handleGridSelectionChange).not.toHaveBeenCalled();
  });

  it('правый клик внутри нативного диапазона строк не сужает его до одной строки', () => {
    const { view, handleGridSelectionChange } = setup({
      selection: gridSel([0, 0], { x: 1, y: 0, width: 3, height: 3 }),
    });

    act(() => {
      window.dispatchEvent(new MouseEvent('pointerdown', { button: 2 }));
      view.result.current.handleGridSelectionWithColumnReset(
        gridSel([0, 1], { x: 0, y: 1, width: 1, height: 1 }),
      );
    });

    expect(handleGridSelectionChange).not.toHaveBeenCalled();
  });

  it('правый клик по строке вне выделения выбирает эту строку', () => {
    const { view, handleGridSelectionChange } = setup({
      selection: gridSel([0, 0], { x: 1, y: 0, width: 3, height: 3 }),
    });

    act(() => {
      window.dispatchEvent(new MouseEvent('pointerdown', { button: 2 }));
      view.result.current.handleGridSelectionWithColumnReset(
        gridSel([0, 4], { x: 0, y: 4, width: 1, height: 1 }),
      );
    });

    expect(handleGridSelectionChange).toHaveBeenCalledWith(
      expect.objectContaining({
        current: expect.objectContaining({
          range: { x: 1, y: 4, width: 3, height: 1 },
        }),
      }),
    );
  });

  it('фокус грида без выделения (активная ячейка в нумерации, без мыши) → первая ячейка данных, а не строка', () => {
    const { view, handleGridSelectionChange } = setup();

    act(() => {
      window.dispatchEvent(new Event('pointerup'));
      view.result.current.handleGridSelectionWithColumnReset(
        gridSel([0, 0], { x: 0, y: 0, width: 1, height: 1 }),
      );
    });

    expect(handleGridSelectionChange).toHaveBeenCalledWith(
      expect.objectContaining({
        current: expect.objectContaining({
          cell: [1, 0],
          range: { x: 1, y: 0, width: 1, height: 1 },
        }),
      }),
    );
  });
});

describe('useTableSelectionSystem — наружу одно итоговое выделение на действие', () => {
  it('Ctrl+клик по шапке → один onChange с выбранной колонкой, без промежуточного пустого', () => {
    const { view, onSelectionEmit } = setupWithNative();

    act(() => {
      view.result.current.selectColumnFromHeader(
        2,
        headerEvent({ ctrlKey: true }),
      );
    });

    expect(onSelectionEmit).toHaveBeenCalledTimes(1);
    expect(onSelectionEmit.mock.lastCall?.[0].columns.toArray()).toEqual([2]);
  });

  it('программный выбор несмежных колонок по ключам отдаёт их наружу', () => {
    const { view, onSelectionEmit } = setupWithNative();

    act(() => {
      view.result.current.selectColumnsByKeys(['a', 'c']);
    });

    expect(onSelectionEmit).toHaveBeenCalledTimes(1);
    expect(onSelectionEmit.mock.lastCall?.[0].columns.toArray()).toEqual([
      1, 3,
    ]);
  });

  it('обычный клик по шапке → один onChange с нативным диапазоном', () => {
    const { view, onSelectionEmit } = setupWithNative();

    act(() => {
      view.result.current.selectColumnFromHeader(1, headerEvent({}));
    });

    expect(onSelectionEmit).toHaveBeenCalledTimes(1);
    expect(onSelectionEmit.mock.lastCall?.[0].current.range).toEqual({
      x: 1,
      y: 0,
      width: 1,
      height: 5,
    });
  });
});
