import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import type { RowsChangeDataGlideInstance } from '../TableGlideInstance/type';
import type { RowsChangeData } from '../types';
import { useOnRowsChange } from './useOnRowsChange';

type Row = { id: number; price: number; qty: number; subRows?: Row[] };

describe('onRowsChange при изменении нескольких ячеек', () => {
  it('принимает прежнюю форму публичных метаданных', () => {
    const data = {
      indexes: [0],
      column: { key: 'price', name: 'Цена' },
      type: 'edit',
    } satisfies RowsChangeDataGlideInstance<Row>;
    const before = { id: 1, price: 0, qty: 1 };
    const after = { ...before, price: 3 };
    const onRowsChange = vi.fn();
    const { result } = renderHook(() =>
      useOnRowsChange({
        rows: [before],
        flattenedRowsRef: { current: [before] },
        tableConfig: {
          editing: { rowKeyGetter: (r: Row) => r.id, onRowsChange },
        },
        markEditedCells: vi.fn(),
      }),
    );
    result.current.onRowsChangeLastVersion([after], data);
    expect(onRowsChange).toHaveBeenCalledWith([after], {
      ...data,
      rows: [{ before, after }],
      changedCells: [],
    });
  });

  it.each(['edit', 'paste', 'fill'] as const)(
    'сохраняет подстроку без собственного ID (%s)',
    (type) => {
      type DocumentRow = {
        price: number;
        document?: { id: number };
        subRows?: DocumentRow[];
      };
      const child = { price: 1 };
      const parent = { document: { id: 4 }, price: 0, subRows: [child] };
      const flat = { ...child, treeId: '4.subRows.0' };
      const onRowsChange = vi.fn();
      const markEditedCells = vi.fn();
      const { result } = renderHook(() =>
        useOnRowsChange({
          rows: [parent] as DocumentRow[],
          flattenedRowsRef: { current: [parent, flat] },
          tableConfig: {
            editing: {
              rowKeyGetter: (r: DocumentRow) =>
                (r.document as { id: number }).id,
              onRowsChange,
              deepCloneRows: true,
            },
          },
          markEditedCells,
        }),
      );
      const column = { key: 'price', name: 'Цена' };
      result.current.onRowsChangeLastVersion([parent, { ...flat, price: 8 }], {
        type,
        column,
        indexes: [1],
        writtenCells: [{ rowIndex: 1, columnKey: 'price' }],
      });
      expect(onRowsChange).toHaveBeenCalledWith(
        [{ ...parent, subRows: [{ price: 8 }] }],
        {
          type,
          column,
          indexes: [0],
          rows: [{ before: child, after: { price: 8 } }],
          changedCells: [],
        },
      );
      expect(markEditedCells).toHaveBeenCalledWith([], new Map());
    },
  );

  it.each(['edit', 'paste', 'fill'] as const)(
    'обновляет вложенную строку по составному subRowsKey (%s)',
    (type) => {
      type Nested = Row & { data?: { children: Nested[] } };
      const leaf: Nested = { id: 3, price: 1, qty: 0 };
      const branch: Nested = { ...leaf, id: 2, data: { children: [leaf] } };
      const root: Nested = { ...leaf, id: 1, data: { children: [branch] } };
      const flat = { ...leaf, treeId: '1.subRows.0.subRows.0' };
      const onRowsChange = vi.fn<[Nested[], RowsChangeData<Nested>], void>();
      const markEditedCells = vi.fn();
      const { result } = renderHook(() =>
        useOnRowsChange({
          rows: [root],
          flattenedRowsRef: { current: [root, branch, flat] },
          tableConfig: {
            editing: {
              onRowsChange,
              rowKeyGetter: (r: Nested) => r.id,
              subRowsKey: 'data.children',
              deepCloneRows: true,
            },
          },
          markEditedCells,
        }),
      );
      const column = { key: 'price', name: 'Цена' };
      const after = { ...leaf, price: 8 };
      result.current.onRowsChangeLastVersion(
        [root, branch, { ...flat, ...after }],
        {
          type,
          column,
          indexes: [2],
          writtenCells: [{ rowIndex: 2, columnKey: 'price' }],
        },
      );
      const changedCells = [{ rowId: 3, columnKey: 'price' }];
      expect(
        onRowsChange.mock.calls[0]?.[0][0]?.data?.children[0]?.data?.children,
      ).toEqual([after]);
      expect(onRowsChange.mock.calls[0]?.[1]).toEqual({
        type,
        column,
        indexes: [0],
        changedCells,
        rows: [{ before: leaf, after }],
      });
      expect(markEditedCells).toHaveBeenCalledWith(changedCells, new Map());
      expect(leaf.price).toBe(1);
    },
  );

  it('сохраняет первую колонку и индекс родителя, передаёт адреса ячеек дочерней строки', () => {
    const child = { id: 17, price: 1, qty: 2 };
    const parent = { id: 4, price: 3, qty: 4, subRows: [child] };
    const flatChild = { ...child, treeId: '4.subRows.0' };
    const after = { ...flatChild, price: 8, qty: 9 };
    const rows = [parent];
    const onRowsChange = vi.fn<[Row[], RowsChangeData<Row>], void>();
    const markEditedCells = vi.fn();
    const { result } = renderHook(() =>
      useOnRowsChange({
        rows,
        flattenedRowsRef: { current: [parent, flatChild] as Row[] },
        tableConfig: {
          editing: {
            rowKeyGetter: (row: Row) => row.id,
            onRowsChange,
            deepCloneRows: true,
          },
        },
        markEditedCells,
      }),
    );
    const column = { key: 'price', name: 'Цена' };
    result.current.onRowsChangeLastVersion([parent, after], {
      column,
      type: 'paste',
      indexes: [1],
      writtenCells: [
        { rowIndex: 1, columnKey: 'price' },
        { rowIndex: 1, columnKey: 'qty' },
        { rowIndex: 1, columnKey: 'price' },
      ],
    });
    const changedCells = [
      { rowId: 17, columnKey: 'price' },
      { rowId: 17, columnKey: 'qty' },
    ];
    expect(onRowsChange).toHaveBeenCalledTimes(1);
    expect(onRowsChange.mock.calls[0]?.[1]).toEqual({
      column,
      indexes: [0],
      type: 'paste',
      changedCells,
      rows: [{ before: child, after: { id: 17, price: 8, qty: 9 } }],
    });
    expect(markEditedCells).toHaveBeenCalledWith(changedCells, new Map());
  });
});
