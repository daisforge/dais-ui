import { renderHook } from '@testing-library/react';
import { useState } from 'react';
import { describe, expect, it } from 'vitest';

import type { ColumnConfig } from '../../types';
import { getSortPlan, isSameSortPlan } from '../sort-handlers';
import type { SortColumn } from '../types';
import { useSortedRows } from '../useSortedRows';

type Row = { id: number; name: string };
type Col = ColumnConfig<Row>;

const rows: Row[] = [
  { id: 2, name: 'b' },
  { id: 3, name: 'c' },
  { id: 1, name: 'a' },
];

const idCol: Col = { key: 'id', name: 'ID', sortingType: 'numberSort' };
const nameCol: Col = { key: 'name', name: 'Name', sortingType: 'stringSort' };

type Props = {
  columns: readonly Col[];
  sortColumns: readonly SortColumn[];
};

const renderSorted = (initial: Props) =>
  renderHook(
    ({ columns, sortColumns }: Props) =>
      useSortedRows({
        rows,
        columns,
        tableConfig: { sorting: { state: [sortColumns, () => {}] } },
        infinityScrollActiveInConfig: false,
        paginationActiveInConfig: false,
      }),
    { initialProps: initial },
  );

const ids = (list: readonly Row[]) => list.map((r) => r.id);

describe('getSortPlan и isSameSortPlan', () => {
  it('план берёт компаратор столбца, а у отсутствующего столбца его нет', () => {
    const plan = getSortPlan(
      [
        { columnKey: 'id', direction: 'ASC' },
        { columnKey: 'hidden', direction: 'DESC' },
      ],
      [idCol],
    );
    expect(plan).toEqual([
      { columnKey: 'id', direction: 'ASC', sortingType: 'numberSort' },
      { columnKey: 'hidden', direction: 'DESC', sortingType: undefined },
    ]);
  });

  it('планы сравниваются по ключу, направлению и компаратору', () => {
    const comparator = (x: Row, y: Row) => x.id - y.id;
    const base = getSortPlan<Row>(
      [{ columnKey: 'id', direction: 'ASC' }],
      [{ key: 'id', sortingType: comparator }],
    );
    expect(
      isSameSortPlan(
        base,
        getSortPlan<Row>(
          [{ columnKey: 'id', direction: 'ASC' }],
          [{ key: 'id', sortingType: comparator }],
        ),
      ),
    ).toBe(true);
    expect(
      isSameSortPlan(
        base,
        getSortPlan<Row>(
          [{ columnKey: 'id', direction: 'DESC' }],
          [{ key: 'id', sortingType: comparator }],
        ),
      ),
    ).toBe(false);
    expect(
      isSameSortPlan(
        base,
        getSortPlan<Row>(
          [{ columnKey: 'id', direction: 'ASC' }],
          [{ key: 'id', sortingType: (x, y) => x.id - y.id }],
        ),
      ),
    ).toBe(false);
  });
});

describe('useSortedRows: пересортировка только при смене условий', () => {
  const sortById: SortColumn[] = [{ columnKey: 'id', direction: 'ASC' }];

  it('сортирует по активному столбцу', () => {
    const { result } = renderSorted({
      columns: [idCol, nameCol],
      sortColumns: sortById,
    });
    expect(ids(result.current.sortedRows)).toEqual([1, 2, 3]);
  });

  it('новый массив столбцов из тех же объектов не пересортировывает строки', () => {
    const { result, rerender } = renderSorted({
      columns: [idCol, nameCol],
      sortColumns: sortById,
    });
    const before = result.current.sortedRows;

    rerender({ columns: [idCol], sortColumns: sortById });

    expect(result.current.sortedRows).toBe(before);
  });

  it('новые объекты столбцов с теми же настройками не пересортировывают строки', () => {
    const { result, rerender } = renderSorted({
      columns: [idCol, nameCol],
      sortColumns: sortById,
    });
    const before = result.current.sortedRows;

    rerender({
      columns: [{ ...idCol }, { ...nameCol }],
      sortColumns: [{ columnKey: 'id', direction: 'ASC' }],
    });

    expect(result.current.sortedRows).toBe(before);
  });

  it('скрытие отсортированного столбца возвращает исходный порядок', () => {
    const { result, rerender } = renderSorted({
      columns: [idCol, nameCol],
      sortColumns: sortById,
    });

    rerender({ columns: [nameCol], sortColumns: sortById });

    expect(ids(result.current.sortedRows)).toEqual(ids(rows));
  });

  it('смена направления сортирует заново', () => {
    const { result, rerender } = renderSorted({
      columns: [idCol, nameCol],
      sortColumns: sortById,
    });

    rerender({
      columns: [idCol, nameCol],
      sortColumns: [{ columnKey: 'id', direction: 'DESC' }],
    });

    expect(ids(result.current.sortedRows)).toEqual([3, 2, 1]);
  });

  it('без активной сортировки строки возвращаются как есть', () => {
    const { result } = renderSorted({
      columns: [idCol, nameCol],
      sortColumns: [],
    });
    expect(result.current.sortedRows).toBe(rows);
  });
});

describe('useSortedRows: сортировка по скрытому столбцу', () => {
  const renderWithSortState = (
    initialSort: readonly SortColumn[],
    initialHidden: readonly string[],
  ) =>
    renderHook(
      ({ hiddenCols }: { hiddenCols: readonly string[] }) => {
        const sortState = useState(initialSort);
        const hiddenSet = new Set(hiddenCols);
        const sorted = useSortedRows({
          rows,
          columns: [idCol, nameCol].filter((c) => !hiddenSet.has(c.key)),
          hiddenCols,
          tableConfig: { sorting: { state: sortState } },
          infinityScrollActiveInConfig: false,
          paginationActiveInConfig: false,
        });
        return { sortState, sorted };
      },
      { initialProps: { hiddenCols: initialHidden } },
    );

  it('скрытие отсортированного столбца снимает сортировку', () => {
    const { result, rerender } = renderWithSortState(
      [{ columnKey: 'id', direction: 'ASC' }],
      [],
    );
    expect(ids(result.current.sorted.sortedRows)).toEqual([1, 2, 3]);

    rerender({ hiddenCols: ['id'] });

    expect(result.current.sortState[0]).toEqual([]);
    expect(ids(result.current.sorted.sortedRows)).toEqual(ids(rows));

    // Столбец снова показан, но сортировка не возвращается сама.
    rerender({ hiddenCols: [] });
    expect(result.current.sortState[0]).toEqual([]);
    expect(ids(result.current.sorted.sortedRows)).toEqual(ids(rows));
  });

  it('скрытие другого столбца сортировку не трогает', () => {
    const sort: SortColumn[] = [{ columnKey: 'id', direction: 'ASC' }];
    const { result, rerender } = renderWithSortState(sort, []);

    rerender({ hiddenCols: ['name'] });

    expect(result.current.sortState[0]).toBe(sort);
    expect(ids(result.current.sorted.sortedRows)).toEqual([1, 2, 3]);
  });

  it('сортировка по столбцу, скрытому с самого начала, снимается', () => {
    const { result } = renderWithSortState(
      [{ columnKey: 'id', direction: 'DESC' }],
      ['id'],
    );
    expect(result.current.sortState[0]).toEqual([]);
  });
});

describe('useSortedRows: несколько столбцов в сортировке', () => {
  it('столбец без компаратора первым в списке не даёт применить следующие', () => {
    const plainCol: Col = { key: 'plain', name: 'Plain' };
    const { result } = renderSorted({
      columns: [plainCol, idCol],
      sortColumns: [
        { columnKey: 'plain', direction: 'ASC' },
        { columnKey: 'id', direction: 'ASC' },
      ],
    });
    // Так было и до плана сортировки: сравнение останавливается на первом
    // столбце без компаратора.
    expect(ids(result.current.sortedRows)).toEqual(ids(rows));
  });
});
