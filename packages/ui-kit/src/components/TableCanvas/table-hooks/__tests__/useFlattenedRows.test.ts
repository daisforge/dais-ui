import { act, renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { useAutoRowHeight } from '../../../TableGlide/hooks/useAutoRowHeight';
import { TREE_ID_KEY, TREE_LVL_KEY } from '../../feature-tree/constants';
import { useFlattenedRows } from '../useFlattenedRows';

vi.mock('../../../TableGlide/lib/canvas/hooks/fontsLoaded', () => ({
  subscribeFontsLoaded: () => () => {},
}));

type Row = { id: number; text: string; children?: Row[] };

const ROWS: Row[] = [
  { id: 0, text: 'a' },
  { id: 1, text: 'b', children: [{ id: 10, text: 'b1' }] },
  { id: 2, text: 'c' },
];
const tableConfig = {
  subRows: {
    getSubRows: (r: Row) => r.children,
    rowKeyGetter: (r: Row) => r.id,
  },
} as never;

const renderFlattened = () =>
  renderHook(() =>
    useFlattenedRows<never, number, Row>({
      rows: ROWS,
      tableConfig,
      groupedCols: undefined as never,
    }),
  );

describe('useFlattenedRows: объекты строк при раскрытии', () => {
  it('корневые строки остаются теми же объектами, дочерняя копия одна на раскрытия', () => {
    const { result } = renderFlattened();
    expect(result.current.flattenedRows).toBe(ROWS);

    act(() => result.current.expandedRowsIdsStateAndSetter[1](new Set([1])));
    const expanded = result.current.flattenedRows;
    expect(expanded.map((r) => r.id)).toEqual([0, 1, 10, 2]);
    expect(expanded[0]).toBe(ROWS[0]);
    expect(expanded[1]).toBe(ROWS[1]);
    expect(expanded[3]).toBe(ROWS[2]);
    const child = expanded[2]!;
    expect(child).not.toBe(ROWS[1]!.children![0]);
    expect(child).toMatchObject({
      id: 10,
      [TREE_ID_KEY]: '1.subRows.0',
      [TREE_LVL_KEY]: 1,
    });

    act(() => result.current.expandedRowsIdsStateAndSetter[1](new Set()));
    expect(result.current.flattenedRows).toBe(ROWS);

    act(() => result.current.expandedRowsIdsStateAndSetter[1](new Set([1])));
    expect(result.current.flattenedRows[2]).toBe(child);
    // Та же копия и в карте всех строк
    expect(result.current.allRowsMap?.get(10)?.row).toBe(child);
  });

  it('rowHeight auto: замеры строк переживают раскрытие', async () => {
    const flattened = renderFlattened();
    const auto = renderHook(
      ({ rows }: { rows: readonly Row[] }) =>
        useAutoRowHeight<Row>({
          enabled: true,
          rows,
          columns: [{ id: 'text', renderCell: () => 't' }] as never,
          theme: {} as never,
          baseHeight: 36,
        }),
      { initialProps: { rows: flattened.result.current.flattenedRows } },
    );
    for (let i = 0; i < 3; i += 1) auto.result.current.heightOf(i);
    await act(async () => {
      auto.result.current
        .reporterFor(ROWS[1]!, 1, 'text', false)
        .report(200, 90);
      auto.result.current
        .reporterFor(ROWS[2]!, 2, 'text', false)
        .report(200, 120);
    });
    expect(auto.result.current.heightOf(2)).toBe(120);

    act(() =>
      flattened.result.current.expandedRowsIdsStateAndSetter[1](new Set([1])),
    );
    auto.rerender({ rows: flattened.result.current.flattenedRows });
    expect(auto.result.current.heightOf(1)).toBe(90);
    expect(auto.result.current.heightOf(3)).toBe(120);
  });
});
