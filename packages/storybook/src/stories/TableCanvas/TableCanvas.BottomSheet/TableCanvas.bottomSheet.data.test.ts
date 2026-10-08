/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { describe, expect, it } from 'vitest';

import {
  applyBottomSheetRowChanges,
  type BottomSheetFilters,
  type BottomSheetRow,
  cloneBottomSheetRows,
  createBottomSheetRows,
  prepareBottomSheetRows,
  selectBottomSheetRows,
  summarizeBottomSheetRows,
} from './TableCanvas.bottomSheet.data';

const emptyFilters: BottomSheetFilters = {
  priority: 'All',
  issueType: [],
  developer: '',
  complete: '',
  globalFilter: '',
};

function makeRow(
  id: number | string,
  values: Partial<BottomSheetRow> = {},
): BottomSheetRow {
  return {
    id,
    task: `Задача ${id}`,
    priority: 'High',
    issueType: 'Bug',
    developer: 'Анна',
    complete: 50,
    ...values,
  };
}

describe('BottomSheet example data pipeline', () => {
  it('creates repeatable roots and uniquely identified children without shared mutable data', () => {
    const rows = createBottomSheetRows();
    const again = createBottomSheetRows();
    const ids = rows.flatMap((row) => [
      row.id,
      ...row.subRows!.map((child) => child.id),
    ]);

    expect(rows).toEqual(again);
    expect(rows).toHaveLength(100);
    expect(new Set(ids.map(String)).size).toBe(300);
    rows[0]!.subRows![0]!.task = 'Правка';
    expect(again[0]!.subRows![0]!.task).not.toBe('Правка');
  });

  it('searches and filters the master set before sorting and selecting a page', () => {
    const rows = [
      makeRow(1, { task: 'Отчёт A', complete: 20 }),
      makeRow(2, { task: 'Отчёт B', complete: 60 }),
      makeRow(3, { task: 'Отчёт C', complete: 90, priority: 'Low' }),
      makeRow(4, { task: 'Отчёт D', complete: 80 }),
      makeRow(5, { task: 'Документ E', complete: 100 }),
      makeRow(6, { task: 'Отчёт F', complete: 70, developer: 'Борис' }),
    ];
    const filtered = prepareBottomSheetRows(
      rows,
      '  ОТЧЁТ ',
      {
        ...emptyFilters,
        priority: 'High',
        issueType: ['Bug'],
        developer: 'Ан',
        complete: '50',
        globalFilter: 'Анна',
      },
      [{ columnKey: 'complete', direction: 'DESC' }],
    );

    expect(filtered.map((row) => row.id)).toEqual([4, 2]);
    expect(
      selectBottomSheetRows(filtered, 'pagination', 2, 1).map((row) => row.id),
    ).toEqual([2]);
    expect(rows.map((row) => row.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('uses secondary sort keys with natural numeric ID order and keeps stable ties', () => {
    const rows = [
      makeRow(10),
      makeRow(2),
      makeRow(3, { complete: 90 }),
      makeRow(4, { complete: 90 }),
    ];
    const sorted = prepareBottomSheetRows(rows, '', emptyFilters, [
      { columnKey: 'unknown', direction: 'ASC' },
      { columnKey: 'complete', direction: 'DESC' },
      { columnKey: 'id', direction: 'ASC' },
    ]);

    expect(sorted.map((row) => row.id)).toEqual([3, 4, 2, 10]);
    expect(
      prepareBottomSheetRows(rows, '', emptyFilters, [
        { columnKey: 'priority', direction: 'DESC' },
      ]).map((row) => row.id),
    ).toEqual([10, 2, 3, 4]);
  });

  it('keeps the complete ancestor chain of matching descendants and sorts siblings independently', () => {
    const rows = [
      makeRow(1, {
        priority: 'Low',
        subRows: [
          makeRow('1.1', {
            priority: 'Low',
            subRows: [makeRow('1.1.1', { complete: 90 })],
          }),
          makeRow('1.2', { complete: 80 }),
          makeRow('1.3', { priority: 'Low', complete: 100 }),
        ],
      }),
      makeRow(2, {
        complete: 100,
        subRows: [makeRow('2.1', { complete: 60 })],
      }),
      makeRow(3, {
        priority: 'Low',
        subRows: [makeRow('3.1', { priority: 'Low' })],
      }),
    ];
    const filtered = prepareBottomSheetRows(
      rows,
      '',
      { ...emptyFilters, priority: 'High', complete: '70' },
      [{ columnKey: 'id', direction: 'DESC' }],
      true,
    );

    expect(filtered.map((row) => row.id)).toEqual([2, 1]);
    expect(filtered[0]!.subRows).toBeUndefined();
    expect(filtered[1]!.subRows!.map((row) => row.id)).toEqual(['1.2', '1.1']);
    expect(filtered[1]!.subRows![1]!.subRows!.map((row) => row.id)).toEqual([
      '1.1.1',
    ]);
    expect(
      selectBottomSheetRows(filtered, 'pagination', 2, 1)[0]!.subRows,
    ).toHaveLength(2);
  });

  it('drops subRows only in the flat view, leaving the master tree intact', () => {
    const rows = createBottomSheetRows(2);
    const flat = prepareBottomSheetRows(rows, '', emptyFilters, []);

    expect(flat).toHaveLength(2);
    expect(flat.every((row) => !row.subRows)).toBe(true);
    expect(rows.every((row) => row.subRows?.length === 2)).toBe(true);
  });

  it('applies edits, paste and fill across reordered pages by ID and preserves hidden descendants', () => {
    const rows = createBottomSheetRows();
    const filtered = prepareBottomSheetRows(rows, '', emptyFilters, [
      { columnKey: 'id', direction: 'DESC' },
    ]);
    const page = selectBottomSheetRows(filtered, 'pagination', 2);
    const first = page[0]!;
    const last = page[19]!;
    const updated = applyBottomSheetRowChanges(rows, [
      { ...first, developer: 'Новый исполнитель', complete: 99 },
      { ...last, task: 'Вставлено из буфера', complete: 88 },
      {
        ...rows[0]!.subRows![0]!,
        task: 'Заполнено протягиванием',
        complete: 77,
      },
    ]);

    expect(first.id).toBe(80);
    expect(updated.find((row) => row.id === 80)!.developer).toBe(
      'Новый исполнитель',
    );
    expect(updated.find((row) => row.id === 61)!.task).toBe(
      'Вставлено из буфера',
    );
    expect(updated[0]!.subRows![0]!.complete).toBe(77);
    expect(updated[0]!.subRows![1]).toEqual(rows[0]!.subRows![1]);
    expect(updated[79]!.subRows).toEqual(rows[79]!.subRows);
    expect(updated[99]).toEqual(rows[99]);
    expect(rows[79]!.developer).not.toBe('Новый исполнитель');
  });

  it('merges filtered tree updates without deleting siblings and snapshots the whole dataset for cancel', () => {
    const master = [
      makeRow(1, { subRows: [makeRow('1.1'), makeRow('1.2')] }),
      makeRow(2),
    ];
    const snapshot = cloneBottomSheetRows(master);
    const changedParent = {
      ...master[0]!,
      task: 'Новый родитель',
      subRows: [{ ...master[0]!.subRows![0]!, complete: 95 }],
    };
    const updated = applyBottomSheetRowChanges(master, [changedParent]);

    expect(updated[0]!.task).toBe('Новый родитель');
    expect(updated[0]!.subRows).toHaveLength(2);
    expect(updated[0]!.subRows![0]!.complete).toBe(95);
    expect(updated[0]!.subRows![1]).toEqual(master[0]!.subRows![1]);
    updated[0]!.subRows![0]!.task = 'Ещё одна правка';
    expect(snapshot).toEqual(master);
    expect(snapshot[0]!.subRows![0]!.complete).toBe(50);
  });

  it('summarizes the full filtered set rather than the visible page and handles empty trees', () => {
    const rows = [
      makeRow(1, { complete: 20, subRows: [makeRow('1.1', { complete: 80 })] }),
      makeRow(2, { complete: 60 }),
    ];
    const summaries = summarizeBottomSheetRows(rows);
    const treeSummaries = summarizeBottomSheetRows(rows, true);
    const value = (summary: (typeof summaries)[number], key: string) =>
      summary.values.find((entry) => entry.columnId === key)?.value;

    expect(selectBottomSheetRows(rows, 'pagination', 1, 1)).toHaveLength(1);
    expect(value(summaries[0]!, 'id')).toBe('2');
    expect(value(summaries[1]!, 'complete')).toBe('40.0%');
    expect(value(treeSummaries[0]!, 'id')).toBe('3');
    expect(value(treeSummaries[1]!, 'complete')).toBe('53.3%');
    expect(value(summarizeBottomSheetRows([])[1]!, 'complete')).toBe('0.0%');
  });

  it('grows local infinity batches to completion and clamps pages after filters reduce the set', () => {
    const rows = createBottomSheetRows(45);

    expect(selectBottomSheetRows(rows, 'infinity', 1, 20, 20)).toHaveLength(20);
    expect(selectBottomSheetRows(rows, 'infinity', 1, 20, 40)).toHaveLength(40);
    expect(selectBottomSheetRows(rows, 'infinity', 1, 20, 60)).toHaveLength(45);
    expect(
      selectBottomSheetRows(rows.slice(0, 3), 'pagination', 5),
    ).toHaveLength(3);
    expect(selectBottomSheetRows([], 'pagination')).toEqual([]);
    expect(selectBottomSheetRows(rows, 'all')).toEqual(rows);
  });
});
