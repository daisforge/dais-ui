import { resolveSelectionForView } from './resolveSelectionForView';
import { act, renderHook } from '@testing-library/react';
import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import type { GridSelection } from '@daisforge/glide-data-grid';

import type { CellsSelectionMode } from '../../types';
import { EMPTY_SELECTION } from './gridSelection';
import { useGridSelectionState } from './useGridSelectionState';
import { useSelectionOnViewChange } from './useSelectionOnViewChange';

const col = (id: string) => ({ id, isServiceColumn: false });
const [a, b, c] = [col('a'), col('b'), col('c')] as const;
const columns = [a, b, c];
const rows = [10, 20, 30, 40].map((id) => ({ id, value: 'текст' }));
const view = {
  columns,
  rows,
  rowKey: (row: (typeof rows)[number]) => row.id,
  criteria: {},
  revision: 1,
  loading: false,
  page: 1,
  perPage: 10,
};
const initial: GridSelection = {
  ...EMPTY_SELECTION,
  current: {
    cell: [1, 1],
    range: { x: 0, y: 1, width: 2, height: 2 },
    rangeStack: [],
  },
};
const singleCell = (x: number, y: number) => ({ x, y, width: 1, height: 1 });
const project = (next: Partial<typeof view>, selection = initial) =>
  resolveSelectionForView(view, { ...view, ...next }, selection, false);

describe('выделение после изменения таблицы', () => {
  it.each([true, false])(
    'серверная сортировка двумя обновлениями, controlled=%s',
    (controlled) => {
      const sync = vi.fn();
      const emit = vi.fn();
      const { result, rerender } = renderHook(
        (v: typeof view) => {
          const [external, setExternal] = useState(EMPTY_SELECTION);
          const native = useGridSelectionState({
            cellsSelectionMode: 'range-cell',
            columns: v.columns,
            gridSelection: controlled ? external : undefined,
            onGridSelectionChange: setExternal,
            onExternalSelectionChange: sync,
            onSelectionEmit: emit,
          });
          useSelectionOnViewChange({
            view: v,
            columns: v.columns,
            selection: native.selection,
            controlled: controlled ? external : undefined,
            hasAxes: false,
            getBlock: singleCell,
            apply: native.applyViewSelection,
          });
          return native;
        },
        { initialProps: view },
      );
      act(() => result.current.handleGridSelectionChange(initial));
      emit.mockClear();
      const sorted = { ...view, criteria: { sort: 'desc' } };
      rerender({ ...sorted, loading: true, rows: [] });
      expect(result.current.selection).toEqual(EMPTY_SELECTION);
      rerender({ ...sorted, rows: [...rows].reverse() });
      expect(result.current.selection).toEqual(EMPTY_SELECTION);
      expect(sync).not.toHaveBeenCalledWith(EMPTY_SELECTION, false);
      expect(emit).toHaveBeenCalledTimes(1);
      expect(emit).toHaveBeenLastCalledWith(EMPTY_SELECTION);
    },
  );

  it('снимает и активную ячейку при смене страницы, размера или потере строки', () => {
    expect(project({ page: 2 })).toBe(EMPTY_SELECTION);
    expect(project({ perPage: 20 })).toBe(EMPTY_SELECTION);
    expect(project({ rows: rows.slice(2) })).toBe(EMPTY_SELECTION);
  });

  it('сохраняет диапазон при редактировании, вставке, заполнении и дозагрузке', () => {
    const edited = rows.map((row) => ({ ...row, value: 'изменено' }));
    expect(project({ rows: edited })).toBeUndefined();
    expect(
      project({ rows: [...rows, { id: 50, value: 'новая строка' }] }),
    ).toBeUndefined();
    expect(project({ revision: 2 })).toBe(EMPTY_SELECTION);
  });

  it('удерживает выделение при повторном получении данных с ключом и без ключа', () => {
    const before = { ...view, revision: undefined };
    const after = { ...before, rows: rows.map((row) => ({ ...row })) };
    expect(
      resolveSelectionForView(before, after, initial, false),
    ).toBeUndefined();
    expect(
      resolveSelectionForView(
        { ...before, rowKey: undefined },
        { ...after, rowKey: undefined },
        initial,
        false,
      ),
    ).toBeUndefined();
    const unkeyed = { ...before, rowKey: undefined };
    expect(
      resolveSelectionForView(
        unkeyed,
        { ...unkeyed, criteria: { filter: 1 } },
        initial,
        false,
      ),
    ).toBe(EMPTY_SELECTION);
  });

  it('сбрасывает диапазон при перестановке или скрытии колонок', () => {
    for (const next of [
      [c, a, b],
      [a, c, b],
      [a, c],
    ]) {
      expect(project({ columns: next })).toBe(EMPTY_SELECTION);
    }
  });

  it('при смене критерия полностью снимает диапазон 3×3 без поиска записи', () => {
    const rowKey = vi.fn(view.rowKey);
    const range = { x: 0, y: 0, width: 3, height: 3 };
    const selection = { ...initial, current: { ...initial.current!, range } };
    const next = {
      ...view,
      criteria: { sort: 'desc' },
      rows: [...rows].reverse(),
      rowKey,
    };
    expect(resolveSelectionForView(view, next, selection, false)).toBe(
      EMPTY_SELECTION,
    );
    expect(rowKey).not.toHaveBeenCalled();
  });

  it('сохраняет диапазон при равнозначной замене условий', () => {
    const criteria = () => ({
      sort: [],
      filters: [{ key: 'name', value: 'А' }],
    });
    expect(
      resolveSelectionForView(
        { ...view, criteria: criteria() },
        { ...view, criteria: criteria() },
        initial,
        false,
      ),
    ).toBeUndefined();
  });

  it('выделение всей колонки включает итоговые строки после обновления записей', () => {
    const before = { ...view, summaryCount: 1 };
    const full = {
      ...initial,
      current: {
        cell: [1, 0] as const,
        range: { x: 1, y: 0, width: 1, height: rows.length + 1 },
        rangeStack: [],
      },
    };
    const updated = rows.map((row) => ({ ...row }));
    expect(
      resolveSelectionForView(
        before,
        { ...before, rows: updated },
        full,
        false,
      ),
    ).toBeUndefined();
    expect(
      resolveSelectionForView(
        before,
        { ...before, summaryCount: 0 },
        full,
        false,
      ),
    ).toBe(EMPTY_SELECTION);
  });

  it('сохраняет Ctrl-выбор при дозагрузке и обнаруживает замену выбранной записи', () => {
    const before = { ...view, revision: undefined };
    const appended = [
      ...rows.map((row) => ({ ...row })),
      { id: 99, value: '' },
    ];
    for (const selectedRows of [[], [1, 3]]) {
      expect(
        resolveSelectionForView(
          before,
          { ...before, rows: appended },
          EMPTY_SELECTION,
          true,
          selectedRows,
        ),
      ).toBeUndefined();
    }
    appended[1] = { id: 123, value: '' };
    expect(
      resolveSelectionForView(
        before,
        { ...before, rows: appended },
        EMPTY_SELECTION,
        true,
        [1, 3],
      ),
    ).toBe(EMPTY_SELECTION);
  });

  it('при стабильной версии проверяет якорь без обхода 100 000 строк', () => {
    const many = Array.from({ length: 100000 }, (_, id) => ({ id, value: '' }));
    const rowKey = vi.fn(view.rowKey);
    const before = { ...view, rows: many, rowKey };
    const full = {
      ...initial,
      current: {
        cell: [1, 0] as const,
        range: { x: 1, y: 0, width: 1, height: many.length },
        rangeStack: [],
      },
    };
    expect(
      resolveSelectionForView(
        before,
        { ...before, rows: many.map((row) => ({ ...row })) },
        full,
        false,
      ),
    ).toBeUndefined();
    expect(rowKey).toHaveBeenCalledTimes(2);
  });

  it('снимает все диапазоны при скрытии колонки', () => {
    const primary = singleCell(1, 1);
    const keep = singleCell(0, 2);
    const multi: GridSelection = {
      ...initial,
      current: {
        cell: [1, 1],
        range: primary,
        rangeStack: [keep, singleCell(2, 0)],
      },
    };
    expect(project({ columns: [a, b] }, multi)).toBe(EMPTY_SELECTION);
  });

  it('сбрасывает строку, выбранную по номеру, при перестановке колонок данных', () => {
    const marker = { id: 'row-markers', isServiceColumn: true };
    const selection: GridSelection = {
      ...EMPTY_SELECTION,
      current: {
        cell: [0, 1],
        range: { x: 1, y: 1, width: 2, height: 1 },
        rangeStack: [],
      },
    };
    const moved = resolveSelectionForView(
      { ...view, columns: [marker, a, b] },
      { ...view, columns: [marker, b, a] },
      selection,
      false,
    );
    expect(moved).toBe(EMPTY_SELECTION);
  });

  it('выбор всей колонки сохраняется и растёт при дозагрузке со скелетонами', () => {
    const before = { ...view, placeholderCount: 5 };
    const selection: GridSelection = {
      ...EMPTY_SELECTION,
      current: {
        cell: [0, 0],
        range: { x: 0, y: 0, width: 1, height: rows.length + 5 },
        rangeStack: [],
      },
    };
    const refreshed = rows.map((row) => ({ ...row }));
    expect(
      resolveSelectionForView(
        before,
        { ...before, rows: refreshed },
        selection,
        false,
        [],
        true,
      ),
    ).toBeUndefined();
    const appended = {
      ...before,
      rows: [...refreshed, { id: 100, value: 'новая' }],
    };
    expect(
      resolveSelectionForView(before, appended, selection, false, [], true)
        ?.current?.range.height,
    ).toBe(rows.length + 6);
    expect(
      resolveSelectionForView(
        before,
        { ...appended, placeholderCount: 0 },
        selection,
        false,
        [],
        true,
      )?.current?.range.height,
    ).toBe(rows.length + 1);
  });

  it.each([
    [1, 1],
    [0, 3],
  ])(
    'сбрасывает выбор колонок x=%i шириной %i после сортировки и фильтра',
    (x, width) => {
      const full: GridSelection = {
        ...initial,
        current: {
          cell: [x, 0],
          range: { x, y: 0, width, height: rows.length },
          rangeStack: [],
        },
      };
      const sorted = {
        ...view,
        criteria: { sort: 'desc' },
        rows: [...rows].reverse(),
      };
      expect(resolveSelectionForView(view, sorted, full, false, [], true)).toBe(
        EMPTY_SELECTION,
      );
      expect(resolveSelectionForView(view, sorted, EMPTY_SELECTION, true)).toBe(
        EMPTY_SELECTION,
      );
    },
  );

  it('снимает выбор итоговой строки при дозагрузке и фильтрации', () => {
    const v = { ...view, summaryCount: 2, placeholderCount: 1 };
    const y = rows.length + 2;
    const selected: GridSelection = {
      ...initial,
      current: { cell: [1, y], range: singleCell(1, y), rangeStack: [] },
    };
    for (const records of [rows.slice(1), [...rows, ...rows]]) {
      const changed = {
        ...v,
        rows: records,
        placeholderCount: 0,
        criteria: { filter: true },
      };
      expect(resolveSelectionForView(v, changed, selected, false)).toBe(
        EMPTY_SELECTION,
      );
    }
    expect(
      resolveSelectionForView(v, { ...v, summaryCount: 1 }, selected, false),
    ).toBe(EMPTY_SELECTION);
  });

  it('при новом режиме сохраняет только допустимое выделение', () => {
    const multi = {
      ...initial,
      current: { ...initial.current!, rangeStack: [singleCell(0, 0)] },
    };
    const { result, rerender } = renderHook(
      ({ mode }: { mode: CellsSelectionMode }) => {
        const [selection, setSelection] = useState<GridSelection>(multi);
        useSelectionOnViewChange({
          view,
          columns,
          selection,
          hasAxes: false,
          getBlock: singleCell,
          mode,
          apply: (value) => setSelection(value),
        });
        return selection;
      },
      { initialProps: { mode: 'multi-range-cell' as CellsSelectionMode } },
    );
    rerender({ mode: 'range-cell' });
    expect(result.current.current?.rangeStack).toEqual([]);
    expect(result.current.current?.range.width).toBe(2);
    rerender({ mode: 'cell' });
    expect(result.current.current?.range).toEqual(singleCell(1, 1));
    rerender({ mode: 'disabled' });
    expect(result.current).toBe(EMPTY_SELECTION);
  });

  it('подсветка строки сбрасывается при замене записи', () => {
    const commit = vi.fn();
    const { rerender } = renderHook(
      ({ records, activeRow }) => {
        useSelectionOnViewChange({
          view: { ...view, rows: records },
          columns,
          selection: EMPTY_SELECTION,
          activeRow,
          commitActiveRow: commit,
          hasAxes: false,
          getBlock: singleCell,
          apply: vi.fn(),
        });
      },
      { initialProps: { records: rows, activeRow: 0 } },
    );
    const reversed = [...rows].reverse();
    rerender({ records: reversed, activeRow: 0 });
    expect(commit).toHaveBeenLastCalledWith(undefined);
    rerender({ records: reversed, activeRow: 3 });
    rerender({ records: reversed.slice(0, 3), activeRow: 3 });
    expect(commit).toHaveBeenLastCalledWith(undefined);
  });

  it('при ресайзе и пустом выделении обход строк не нужен', () => {
    const rowKey = vi.fn(view.rowKey);
    resolveSelectionForView(
      view,
      { ...view, columns: columns.map((col) => ({ ...col })), rowKey },
      initial,
      false,
    );
    resolveSelectionForView(
      view,
      { ...view, rows: [...rows].reverse(), rowKey },
      EMPTY_SELECTION,
      false,
    );
    expect(rowKey).not.toHaveBeenCalled();
  });
});
