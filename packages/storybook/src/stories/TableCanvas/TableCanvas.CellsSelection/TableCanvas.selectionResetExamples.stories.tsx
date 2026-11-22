/* eslint-disable react-hooks/rules-of-hooks */
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@ui-kit/components/Button';
import {
  type ColumnConfig,
  type SortColumn,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/CellsSelection/Сброс выделения',
  tags: ['!autodocs'],
};

export default meta;

type Story = StoryObj;
type Row = {
  id: number;
  task: string;
  priority: string;
  issueType: string;
  complete: number;
};

const COLUMNS: readonly ColumnConfig<Row>[] = [
  { key: 'id', name: 'ID', width: 90, sortingType: 'numberSort' },
  { key: 'task', name: 'Title', width: 240, sortingType: 'stringSort' },
  { key: 'priority', name: 'Priority', width: 160, sortingType: 'stringSort' },
  { key: 'issueType', name: 'Issue Type', width: 160 },
  {
    key: 'complete',
    name: '% Complete',
    width: 140,
    sortingType: 'numberSort',
  },
];

const PAGE_SIZE = 25;
const allRows = Array.from({ length: 100 }, (_, id) => ({
  id,
  task: `Задача ${id}`,
  priority: id % 2 ? 'Средний' : 'Высокий',
  issueType: 'Задача',
  complete: id % 100,
}));
const preCode =
  `import { useMemo, useState } from 'react';\nimport { Button, TableCanvas } from '@daisforge/ui';\nimport type { ColumnConfig, SortColumn } from '@daisforge/ui/components/TableCanvas';\n` +
  `type Row = { id: number; task: string; priority: string; issueType: string; complete: number };\n` +
  `const COLUMNS: readonly ColumnConfig<Row>[] = ${JSON.stringify(
    COLUMNS,
    null,
    2,
  )};\n` +
  `const PAGE_SIZE = 25;\nconst allRows = Array.from({ length: 100 }, (_, id) => ({ id, task: 'Задача ' + id, priority: id % 2 ? 'Средний' : 'Высокий', issueType: 'Задача', complete: id % 100 }));\n`;

export const ProjectionResetDemo: Story = {
  name: 'Сброс при смене данных (демо)',
  ...storySourceDoc({ preCode, previewSource: 'shown' }),
  render: () => {
    const [sortColumns, setSortColumns] = useState<readonly SortColumn[]>([]);
    const [page, setPage] = useState(0);
    // Версия меняется при смене страницы или порядка записей.
    const [revision, setRevision] = useState(0);
    const [rows, setRows] = useState<Row[]>(() => allRows.slice(0, PAGE_SIZE));
    const [selectedRows, setSelectedRows] = useState<ReadonlySet<number>>(
      new Set(),
    );

    const goToPage = (next: number) => {
      setPage(next);
      setRows(allRows.slice(next * PAGE_SIZE, (next + 1) * PAGE_SIZE));
      setRevision((r) => r + 1);
    };

    // Фоновое обновление сохраняет порядок и ключи записей.
    const refetchSame = () => {
      setRows((prev) => prev.map((r) => ({ ...r })));
    };

    const refetchChanged = () => {
      setRows((prev) => [...prev].reverse());
      setRevision((r) => r + 1);
    };

    return (
      <div style={{ display: 'grid', gap: 12 }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Button
            size="xs"
            disabled={page === 0}
            onClick={() => goToPage(page - 1)}
          >
            ← Страница
          </Button>
          <Button
            size="xs"
            disabled={(page + 1) * PAGE_SIZE >= allRows.length}
            onClick={() => goToPage(page + 1)}
          >
            Страница →
          </Button>
          <Button size="xs" view="secondary" onClick={refetchSame}>
            Live-рефетч того же состава (рамка живёт)
          </Button>
          <Button size="xs" view="secondary" onClick={refetchChanged}>
            Рефетч с новым составом (сброс)
          </Button>
          <span style={{ alignSelf: 'center', fontSize: 12 }}>
            страница {page + 1} · выбрано строк: {selectedRows.size}
          </span>
        </div>
        <div style={{ height: 420 }}>
          <TableCanvas
            rows={rows}
            columnConfig={COLUMNS}
            tableConfig={{
              sorting: { state: [sortColumns, setSortColumns] },
              cellsSelection: {
                dataRevision: revision,
                rowKeyGetter: (row) => row.id,
              },
              selecting: {
                state: [selectedRows, setSelectedRows],
                rowKeyGetter: (row) => row.id,
              },
              rowMarkers: {},
            }}
          />
        </div>
      </div>
    );
  },
};

export const ColumnBreakDiagnostic: Story = {
  name: 'Диагностика: колонки при активном выделении',
  ...storySourceDoc({ preCode, previewSource: 'shown' }),
  render: () => {
    const [hiddenKey, setHiddenKey] = useState<string | null>(null);
    const [swapped, setSwapped] = useState(false);
    const rows = useMemo(() => allRows.slice(0, 30), []);

    const columns = useMemo(() => {
      let cols = COLUMNS.filter((c) => c.key !== hiddenKey);
      if (swapped) {
        cols = [...cols].reverse();
      }
      return cols;
    }, [hiddenKey, swapped]);

    return (
      <div style={{ display: 'grid', gap: 12 }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Button
            size="xs"
            view="secondary"
            onClick={() =>
              setHiddenKey((k) => (k === 'priority' ? null : 'priority'))
            }
          >
            {hiddenKey ? 'Вернуть колонку Priority' : 'Скрыть колонку Priority'}
          </Button>
          <Button
            size="xs"
            view="secondary"
            onClick={() => setSwapped((s) => !s)}
          >
            {swapped ? 'Вернуть порядок колонок' : 'Обратный порядок колонок'}
          </Button>
        </div>
        <div style={{ height: 420 }}>
          <TableCanvas
            rows={rows}
            columnConfig={columns}
            tableConfig={{
              cellsSelection: { rowKeyGetter: (row) => row.id },
              rowMarkers: {},
            }}
          />
        </div>
      </div>
    );
  },
};
