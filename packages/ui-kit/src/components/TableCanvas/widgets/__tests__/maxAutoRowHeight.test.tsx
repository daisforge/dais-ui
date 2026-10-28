import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { TableCanvas } from '../../TableCanvas';

const glideProps = vi.hoisted(() => [] as Record<string, unknown>[]);

vi.mock('@ui-kit/components/TableGlide', async (importOriginal) => ({
  ...(await importOriginal<object>()),
  TableGlide: (props: Record<string, unknown>) => {
    glideProps.push(props);
    return null;
  },
}));

vi.stubGlobal(
  'ResizeObserver',
  vi.fn(() => ({ observe: vi.fn(), unobserve: vi.fn(), disconnect: vi.fn() })),
);

type Row = { id: number; task: string };

const ROWS: Row[] = [{ id: 1, task: 'a' }];

const renderTable = (maxAutoRowHeight?: number) =>
  render(
    <TableCanvas
      tableConfig={{ rowHeight: 'auto', maxAutoRowHeight }}
      columnConfig={[{ key: 'task', name: 'Задача' }]}
      rows={ROWS}
    />,
  );

describe('tableConfig.maxAutoRowHeight', () => {
  afterEach(() => {
    cleanup();
    glideProps.length = 0;
  });

  it('доходит до TableGlide', () => {
    renderTable(777);

    expect(glideProps.at(-1)).toMatchObject({
      rowHeight: 'auto',
      maxAutoRowHeight: 777,
    });
  });

  it('без значения TableGlide берёт потолок по умолчанию', () => {
    renderTable();

    expect(glideProps.at(-1)?.['maxAutoRowHeight']).toBeUndefined();
  });
});
