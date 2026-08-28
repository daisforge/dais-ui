/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
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

const COLUMNS: readonly ColumnConfig<Row>[] = [
  { key: 'id', name: 'ID', width: 90, sortingType: 'number' },
  { key: 'task', name: 'Title', width: 240, sortingType: 'string' },
  { key: 'priority', name: 'Priority', width: 160, sortingType: 'string' },
  { key: 'issueType', name: 'Issue Type', width: 160 },
  { key: 'complete', name: '% Complete', width: 140, sortingType: 'number' },
];

const PAGE_SIZE = 25;
const allRows = createRows(0, 100);

/**
 * Демо поведенческой модели «сброс выделения при смене проекции данных».
 *
 * Рамка сбрасывается: сортировка (клик по шапке), смена страницы, «рефетч с новым
 * составом». Рамка живёт: «live-рефетч того же состава» (dataRevision не меняется),
 * скролл, клики вне ячеек. Активная ячейка при сортировке остаётся на своей записи
 * (rowKeyGetter) и таблица к ней доскролливает. Чекбоксы строк переживают всё.
 * Esc: первое нажатие сводит диапазон к активной ячейке, второе снимает её.
 */
export const ProjectionResetDemo: Story = {
  name: 'Сброс при смене данных (демо)',
  render: () => {
    const [sortColumns, setSortColumns] = useState<readonly SortColumn[]>([]);
    const [page, setPage] = useState(0);
    // «Версия данных» страницы/рефетча: меняется только когда состав строк другой.
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

    // Тот же состав строк, но новый массив: без dataRevision рамка бы сбросилась.
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
          <TableCanvas<Row>
            rows={rows}
            columnConfig={COLUMNS}
            tableConfig={{
              sorting: { state: [sortColumns, setSortColumns] },
              cellsSelection: {
                dataRevision: revision,
                rowKeyGetter: (row) => (row as Row).id,
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

/**
 * Диагностика «разрыва рамки» колоночными операциями. По поведенческой модели
 * скрытие и перестановка колонок рамку НЕ сбрасывают (меняется только ось
 * отображения, записи те же): рамка перерисовывается, допуская разрыв. Стори
 * позволяет оценить визуал: выделите диапазон и скрывайте/переставляйте колонки.
 */
export const ColumnBreakDiagnostic: Story = {
  name: 'Диагностика: колонки при активном выделении',
  render: () => {
    const [hiddenKey, setHiddenKey] = useState<string | null>(null);
    const [swapped, setSwapped] = useState(false);
    const rows = useMemo(() => createRows(0, 30), []);

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
          <TableCanvas<Row>
            rows={rows}
            columnConfig={columns}
            tableConfig={{
              cellsSelection: { rowKeyGetter: (row) => (row as Row).id },
              rowMarkers: {},
            }}
          />
        </div>
      </div>
    );
  },
};
