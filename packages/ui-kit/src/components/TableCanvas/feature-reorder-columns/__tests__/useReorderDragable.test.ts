import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ColumnConfigInternal } from '../../types/column-config-internal.type';
import { sameOrder } from '../handlers';
import { useReorderDragable } from '../useReorderDragable';

type Col = ColumnConfigInternal<{ id: number }, unknown>;

const col = (key: string) => ({ key, name: key } as unknown as Col);

const a = col('a');
const b = col('b');
const c = col('c');
const d = col('d');

const baseProps = {
  reorderIsActive: true,
  tableConfigColumnsControl: { enable: true },
  rowMarkersIsActive: false,
  selectingRowsIsActive: false,
  rowErrorsIsActive: false,
  rowsGroupingIsActive: false,
  showRowInstruments: false,
  tableConfigKeyTextBoolean: false,
  keyText: 'text' as const,
  colsWithKeyTextMap: new Map(),
  pinnedCols: [],
};

type Props = {
  allColumns: readonly Col[];
  columns: readonly Col[];
  reorderIsActive?: boolean;
};

const renderReorder = (initial: Props) =>
  renderHook(
    ({ allColumns, columns, reorderIsActive = true }: Props) =>
      useReorderDragable({
        ...baseProps,
        reorderIsActive,
        allColumns,
        columns,
        columnConfig: allColumns,
      }),
    { initialProps: initial },
  );

describe('sameOrder', () => {
  it('одинаковые списки ключей', () => {
    expect(sameOrder(['a', 'b'], ['a', 'b'])).toBe(true);
  });

  it('другой порядок или длина', () => {
    expect(sameOrder(['a', 'b'], ['b', 'a'])).toBe(false);
    expect(sameOrder(['a'], ['a', 'b'])).toBe(false);
  });
});

describe('useReorderDragable: скрытие столбцов', () => {
  it('скрытие сразу убирает столбец из reorderedColumns и не трогает порядок', () => {
    const allColumns = [a, b, c];
    const { result, rerender } = renderReorder({
      allColumns,
      columns: allColumns,
    });
    const orderBefore = result.current.columnsOrder;

    rerender({ allColumns, columns: [a, c] });

    expect(result.current.reorderedColumns).toEqual([a, c]);
    expect(result.current.reorderedColumns[0]).toBe(a);
    expect(result.current.columnsOrder).toBe(orderBefore);
  });

  it('новые объекты столбцов с теми же ключами не меняют порядок', () => {
    const { result, rerender } = renderReorder({
      allColumns: [a, b, c],
      columns: [a, b, c],
    });
    const orderBefore = result.current.columnsOrder;

    const rebuilt = [col('a'), col('b'), col('c')];
    rerender({ allColumns: rebuilt, columns: rebuilt });

    expect(result.current.columnsOrder).toBe(orderBefore);
    expect(result.current.reorderedColumns).toEqual(rebuilt);
  });

  it('новый столбец в конфиге встаёт на своё место в порядке', () => {
    const { result, rerender } = renderReorder({
      allColumns: [a, b, c],
      columns: [a, b, c],
    });

    const withD = [a, d, b, c];
    rerender({ allColumns: withD, columns: withD });

    expect(result.current.columnsOrder).toEqual(['a', 'd', 'b', 'c']);
    expect(result.current.reorderedColumns).toEqual(withD);
  });

  it('удалённый из конфига столбец уходит из порядка, скрытый остаётся', () => {
    const { result, rerender } = renderReorder({
      allColumns: [a, b, c],
      columns: [a, b, c],
    });

    rerender({ allColumns: [a, b, c], columns: [a, c] });
    expect(result.current.columnsOrder).toEqual(['a', 'b', 'c']);

    rerender({ allColumns: [a, c], columns: [a, c] });
    expect(result.current.columnsOrder).toEqual(['a', 'c']);
    expect(result.current.reorderedColumns).toEqual([a, c]);
  });

  it('без перестановки reorderedColumns совпадает с видимыми столбцами', () => {
    const { result, rerender } = renderReorder({
      allColumns: [a, b, c],
      columns: [a, b, c],
      reorderIsActive: false,
    });
    const visible = [a, c];

    rerender({
      allColumns: [a, b, c],
      columns: visible,
      reorderIsActive: false,
    });

    expect(result.current.reorderedColumns).toBe(visible);
  });
});
