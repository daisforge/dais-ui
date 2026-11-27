import { cleanup, render } from '@testing-library/react';
import type { TableGlideProps } from '@ui-kit/components/TableGlide';
import { afterEach, expect, it, vi } from 'vitest';

import { ROW_MARKER_COLUMN_KEY } from '../../feature-row-markers/constants';
import { KEY_GROUPED_COL } from '../../feature-rows-grouping/constants';
import { TableCanvas } from '../../TableCanvas';
import * as instance from '../../TableGlideInstance/TableGlideInstance';

type Row = { category: string; name: string; value: string };
type GridProps = TableGlideProps<Row, unknown>;

const grid = vi.hoisted(() => vi.fn((_props: GridProps) => null));

vi.mock('@ui-kit/components/TableGlide', async (importOriginal) => ({
  ...(await importOriginal<object>()),
  TableGlide: grid,
}));

vi.stubGlobal(
  'ResizeObserver',
  vi.fn(() => ({ observe: vi.fn(), unobserve: vi.fn(), disconnect: vi.fn() })),
);

vi.stubGlobal('matchMedia', () => ({ matches: false }));

afterEach(() => {
  cleanup();
  grid.mockClear();
  vi.restoreAllMocks();
});

function renderTable({
  groupBy = ['category'],
  pinnedDefault = [],
  onColumnProposeMove,
}: {
  groupBy?: string[];
  pinnedDefault?: string[];
  onColumnProposeMove?: GridProps['onColumnProposeMove'];
} = {}) {
  if (onColumnProposeMove) {
    // Колбэк принимает TableGlideInstance. TableCanvas предоставляет ему контексты.
    const Instance = instance.TableGlideInstance;
    vi.spyOn(instance, 'TableGlideInstance').mockImplementation((props) => (
      <Instance {...props} onColumnProposeMove={onColumnProposeMove} />
    ));
  }

  render(
    <TableCanvas
      rows={[{ category: 'A', name: 'Первая', value: '1' }]}
      columnConfig={[
        { key: 'category', name: 'Категория' },
        { key: 'name', name: 'Название' },
        { key: 'value', name: 'Значение' },
      ]}
      tableConfig={{
        rowMarkers: { startIndex: 1 },
        columnsControl: { enable: true, pinnedDefault },
        rowsGrouping: {
          rowKeyGetter: (row) => row.name,
          groupByState: [groupBy, vi.fn()],
        },
      }}
    />,
  );

  const props = grid.mock.lastCall?.[0];
  if (!props) throw new Error('Таблица не передала колонки в Glide');
  return props;
}

it('запрещает перестановку колонки группировки и разрешает перестановку обычных колонок', () => {
  const { columns, onColumnProposeMove, onColumnsReorder } = renderTable();
  const group = columns.findIndex((column) => column.id === KEY_GROUPED_COL);
  const name = columns.findIndex((column) => column.id === 'name');
  const value = columns.findIndex((column) => column.id === 'value');
  const marker = columns.findIndex(
    (column) => column.id === ROW_MARKER_COLUMN_KEY,
  );
  expect(marker).toBeGreaterThanOrEqual(0);
  expect(group).toBeGreaterThan(marker);
  expect(name).toBeGreaterThan(group);
  expect(value).toBeGreaterThan(name);
  expect(onColumnsReorder).toEqual(expect.any(Function));

  // Glide проверяет эту функцию для предпросмотра перестановки и при отпускании мыши.
  expect(onColumnProposeMove?.(group, name)).toBe(false);
  expect(onColumnProposeMove?.(name, group)).toBe(false);
  expect(onColumnProposeMove?.(value, marker)).toBe(false);
  expect(onColumnProposeMove?.(marker, value)).toBe(false);
  expect(onColumnProposeMove?.(name, value)).toBe(true);
  expect(onColumnProposeMove?.(value, name)).toBe(true);
});

it('учитывает запрет потребителя на перенос по одну сторону от группировки', () => {
  const consumer = vi.fn((from: number, to: number) => from < to);
  const { columns, onColumnProposeMove } = renderTable({
    onColumnProposeMove: consumer,
  });
  const ids = columns.map(({ id }) => id);
  const name = ids.indexOf('name');
  const value = ids.indexOf('value');

  expect(onColumnProposeMove?.(value, name)).toBe(false);
  expect(onColumnProposeMove?.(name, value)).toBe(true);
  expect(onColumnProposeMove?.(ids.indexOf(KEY_GROUPED_COL), value)).toBe(
    false,
  );
  expect(consumer.mock.calls).toEqual([
    [value, name],
    [name, value],
  ]);
});

it('без группировки передаёт в Glide исходный колбэк потребителя', () => {
  const consumer = vi.fn(() => false);
  const { onColumnProposeMove } = renderTable({
    groupBy: [],
    onColumnProposeMove: consumer,
  });
  expect(onColumnProposeMove).toBe(consumer);
});

it('проверяет индексы в порядке Glide после закрепления колонки', () => {
  const { columns, freezeColumns, onColumnProposeMove } = renderTable({
    pinnedDefault: ['value'],
  });
  expect(columns.map(({ id }) => id)).toEqual([
    ROW_MARKER_COLUMN_KEY,
    KEY_GROUPED_COL,
    'value',
    'name',
  ]);
  expect(freezeColumns).toBe(3);
  expect(onColumnProposeMove?.(1, 3)).toBe(false);
  expect(onColumnProposeMove?.(3, 1)).toBe(false);
  expect(onColumnProposeMove?.(3, 0)).toBe(false);
});
