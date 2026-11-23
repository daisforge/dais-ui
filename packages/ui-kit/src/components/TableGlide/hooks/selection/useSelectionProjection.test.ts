import { act, renderHook } from '@testing-library/react';
import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import type { GridSelection } from '@daisforge/glide-data-grid';

import {
  EMPTY_SELECTION,
  useNativeGridSelection,
} from './useNativeGridSelection';
import {
  projectSelection,
  useSelectionProjection,
} from './useSelectionProjection';

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
const project = (
  next: Partial<typeof view>,
  selection = initial,
  getBlock = singleCell,
) => projectSelection(view, { ...view, ...next }, selection, false, getBlock);

describe('выделение после изменения таблицы', () => {
  it.each([true, false])(
    'серверная сортировка двумя обновлениями, controlled=%s',
    (controlled) => {
      const sync = vi.fn();
      const emit = vi.fn();
      const { result, rerender } = renderHook(
        (v: typeof view) => {
          const [external, setExternal] = useState(EMPTY_SELECTION);
          const native = useNativeGridSelection({
            cellsSelectionMode: 'range-cell',
            columns: v.columns,
            gridSelection: controlled ? external : undefined,
            onGridSelectionChange: setExternal,
            onExternalSelectionChange: sync,
            onSelectionEmit: emit,
          });
          useSelectionProjection({
            view: v,
            columns: v.columns,
            selection: native.selection,
            controlled: controlled ? external : undefined,
            hasAxes: false,
            getBlock: singleCell,
            apply: native.applyProjectedSelection,
          });
          return native;
        },
        { initialProps: view },
      );
      act(() => result.current.handleGridSelectionChange(initial));
      emit.mockClear();
      const sorted = { ...view, criteria: { sort: 'desc' } };
      rerender({ ...sorted, loading: true, rows: [] });
      expect(result.current.selection.current?.range).toEqual({
        x: 1,
        y: 1,
        width: 1,
        height: 1,
      });
      rerender({ ...sorted, rows: [...rows].reverse() });
      expect(result.current.selection.current?.cell).toEqual([1, 2]);
      expect(sync).toHaveBeenLastCalledWith(result.current.selection, false);
      expect(emit).not.toHaveBeenCalled();
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
    expect(project({ revision: 2 })?.current?.range.width).toBe(1);
  });

  it('без версии распознаёт ту же запись по ключу, без ключа снимает устаревший диапазон', () => {
    const before = { ...view, revision: undefined };
    const after = { ...before, rows: rows.map((row) => ({ ...row })) };
    expect(
      projectSelection(before, after, initial, false, singleCell),
    ).toBeUndefined();
    expect(
      projectSelection(
        { ...before, rowKey: undefined },
        { ...after, rowKey: undefined },
        initial,
        false,
        singleCell,
      ),
    ).toBe(EMPTY_SELECTION);
  });

  it('переносит смежные колонки и сохраняет только якорь при разрыве диапазона', () => {
    expect(project({ columns: [c, a, b] })?.current).toEqual({
      cell: [2, 1],
      range: { x: 1, y: 1, width: 2, height: 2 },
      rangeStack: [],
    });
    expect(project({ columns: [a, c, b] })?.current).toEqual({
      cell: [2, 1],
      range: { x: 2, y: 1, width: 1, height: 1 },
      rangeStack: [],
    });
    expect(project({ columns: [a, c] })).toBe(EMPTY_SELECTION);
  });

  it('использует геометрию блока в новом порядке колонок', () => {
    const reordered = [b, a, c];
    const getBlock = vi.fn((x: number, y: number) =>
      x === 1 ? { x, y: 0, width: 1, height: 2 } : singleCell(x, y),
    );
    expect(
      project({ columns: reordered, revision: 2 }, initial, getBlock)?.current
        ?.cell,
    ).toEqual([0, 1]);
    expect(getBlock).toHaveBeenCalledWith(0, 1);
    expect(project({ revision: 2 }, initial, getBlock)?.current?.range).toEqual(
      { x: 1, y: 0, width: 1, height: 2 },
    );
  });

  it('сохраняет диапазон при равнозначной замене условий', () => {
    const criteria = () => ({
      sort: [],
      filters: [{ key: 'name', value: 'А' }],
    });
    expect(
      projectSelection(
        { ...view, criteria: criteria() },
        { ...view, criteria: criteria() },
        initial,
        false,
        singleCell,
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
      projectSelection(
        before,
        { ...before, rows: updated },
        full,
        false,
        singleCell,
      ),
    ).toBeUndefined();
    expect(
      projectSelection(
        before,
        { ...before, summaryCount: 0 },
        full,
        false,
        singleCell,
      )?.current?.range.height,
    ).toBe(1);
  });

  it('сохраняет Ctrl-выбор при дозагрузке и обнаруживает замену выбранной записи', () => {
    const before = { ...view, revision: undefined };
    const appended = [
      ...rows.map((row) => ({ ...row })),
      { id: 99, value: '' },
    ];
    for (const selectedRows of [[], [1, 3]]) {
      expect(
        projectSelection(
          before,
          { ...before, rows: appended },
          EMPTY_SELECTION,
          true,
          singleCell,
          selectedRows,
        ),
      ).toBeUndefined();
    }
    appended[1] = { id: 123, value: '' };
    expect(
      projectSelection(
        before,
        { ...before, rows: appended },
        EMPTY_SELECTION,
        true,
        singleCell,
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
      projectSelection(
        before,
        { ...before, rows: many.map((row) => ({ ...row })) },
        full,
        false,
        singleCell,
      ),
    ).toBeUndefined();
    expect(rowKey).toHaveBeenCalledTimes(2);
  });

  it('удаляет только разорванный дополнительный диапазон', () => {
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
    expect(project({ columns: [a, b] }, multi)?.current?.rangeStack).toEqual([
      keep,
    ]);
  });

  it('сохраняет строку, выбранную по номеру, при перестановке колонок данных', () => {
    const marker = { id: 'row-markers', isServiceColumn: true };
    const selection: GridSelection = {
      ...EMPTY_SELECTION,
      current: {
        cell: [0, 1],
        range: { x: 1, y: 1, width: 2, height: 1 },
        rangeStack: [],
      },
    };
    const moved = projectSelection(
      { ...view, columns: [marker, a, b] },
      { ...view, columns: [marker, b, a] },
      selection,
      false,
      singleCell,
    );
    expect(moved?.current).toEqual(selection.current);
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
      projectSelection(
        before,
        { ...before, rows: refreshed },
        selection,
        false,
        singleCell,
        [],
        true,
      ),
    ).toBeUndefined();
    const appended = {
      ...before,
      rows: [...refreshed, { id: 100, value: 'новая' }],
    };
    expect(
      projectSelection(before, appended, selection, false, singleCell, [], true)
        ?.current?.range.height,
    ).toBe(rows.length + 6);
    expect(
      projectSelection(
        before,
        { ...appended, placeholderCount: 0 },
        selection,
        false,
        singleCell,
        [],
        true,
      )?.current?.range.height,
    ).toBe(rows.length + 1);
  });

  it('при ресайзе и пустом выделении обход строк не нужен', () => {
    const rowKey = vi.fn(view.rowKey);
    projectSelection(
      view,
      { ...view, columns: columns.map((col) => ({ ...col })), rowKey },
      initial,
      false,
      singleCell,
    );
    projectSelection(
      view,
      { ...view, rows: [...rows].reverse(), rowKey },
      EMPTY_SELECTION,
      false,
      singleCell,
    );
    expect(rowKey).not.toHaveBeenCalled();
  });
});
