/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { StoryHint } from '@df-storybook/utils/StoryHint';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@ui-kit/components/Button';
import { Checkbox } from '@ui-kit/components/Checkbox';
import { Select } from '@ui-kit/components/Select';
import {
  type CellsSelectionMode,
  type ColumnConfig,
  CompactSelection,
  type GridSelection,
  type SortColumn,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/CellsSelection',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate,
    },
  },
};

export default meta;

type Story = StoryObj;

const SELECTION_MODE_OPTIONS: Array<{
  label: string;
  value: CellsSelectionMode;
}> = [
  { label: 'range-cell', value: 'range-cell' },
  { label: 'multi-range-cell', value: 'multi-range-cell' },
  { label: 'cell', value: 'cell' },
  { label: 'disabled', value: 'disabled' },
];

const EMPTY_SELECTION: GridSelection = {
  current: undefined,
  rows: CompactSelection.empty(),
  columns: CompactSelection.empty(),
};

const COLUMN_CONFIG: readonly ColumnConfig<Row>[] = [
  { key: 'id', name: 'ID', width: 90 },
  { key: 'task', name: 'Title', width: 260 },
  { key: 'priority', name: 'Priority', width: 180 },
  { key: 'issueType', name: 'Issue Type', width: 180 },
  { key: 'complete', name: '% Complete', width: 160 },
];

const preCode = `
import {
  type ColumnConfig,
  CompactSelection,
  type GridSelection,
  type CellsSelectionMode,
  TableCanvas,
} from '@daisforge/ui/components/TableCanvas';

const SELECTION_MODE_OPTIONS: Array<{ label: string; value: CellsSelectionMode }> = [
  { label: 'range-cell', value: 'range-cell' },
  { label: 'multi-range-cell', value: 'multi-range-cell' },
  { label: 'cell', value: 'cell' },
  { label: 'disabled', value: 'disabled' },
];

const EMPTY_SELECTION: GridSelection = {
  current: undefined,
  rows: CompactSelection.empty(),
  columns: CompactSelection.empty(),
};

const COLUMN_CONFIG: readonly ColumnConfig<Row>[] = [
  { key: 'id', name: 'ID', width: 90 },
  { key: 'task', name: 'Title', width: 260 },
  { key: 'priority', name: 'Priority', width: 180 },
  { key: 'issueType', name: 'Issue Type', width: 180 },
  { key: 'complete', name: '% Complete', width: 160 },
];

`;

export const SelectionModes: Story = {
  name: 'Режимы выделения (cellsSelection.mode)',
  ...storySourceDoc({ preCode, previewSource: 'shown' }),
  render: () => {
    const [rows] = useState(createRows);
    const [selectionMode, setSelectionMode] =
      useState<CellsSelectionMode>('range-cell');
    const columnConfig = useMemo(() => COLUMN_CONFIG, []);

    return (
      <div>
        <div style={{ maxWidth: 320, marginBottom: 12 }}>
          <Select
            label="Режим выделения"
            value={selectionMode}
            onChange={(value) => setSelectionMode(value as CellsSelectionMode)}
            items={SELECTION_MODE_OPTIONS}
          />
        </div>

        <StoryHint>
          <b>range-cell</b> — тянем мышкой диапазон ячеек.{' '}
          <b>multi-range-cell</b> — то же + Ctrl/Cmd копит несколько диапазонов.{' '}
          <b>cell</b> — одиночная ячейка. <b>disabled</b> — выделение ячеек
          отключено.
          <br />
          Клик/драг по колонке нумерации → выделение строки (Ctrl — группа).
          Клик по шапке → выделение колонки (Shift — диапазон, Ctrl — несмежно).
          Copy/Paste (Ctrl+C/V) работают по выделению.
        </StoryHint>

        <TableCanvas
          tableConfig={{
            containerStyle: { height: '600px' },
            cellsSelection: { mode: selectionMode },
            rowMarkers: { startIndex: 1 },
            editing: {
              onRowsChange: () => undefined,
              rowKeyGetter: (r) => `${r.id}`,
              defaultEnabled: true,
            },
          }}
          columnConfig={columnConfig}
          rows={rows}
        />
      </div>
    );
  },
};

export const Controlled: Story = {
  name: 'Контролируемое выделение извне (controlled)',
  ...storySourceDoc({ preCode, previewSource: 'shown' }),
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo(() => COLUMN_CONFIG, []);

    const gridSelectionState = useState<GridSelection>(EMPTY_SELECTION);
    const [gridSelection, setGridSelection] = gridSelectionState;

    const summary = gridSelection.current
      ? `x=${gridSelection.current.range.x} y=${gridSelection.current.range.y} w=${gridSelection.current.range.width} h=${gridSelection.current.range.height}`
      : 'нет выделения';

    return (
      <div>
        <div
          style={{
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap',
            marginBottom: 12,
          }}
        >
          <Button onClick={() => setGridSelection(EMPTY_SELECTION)}>
            Сбросить выделение
          </Button>
          <Button
            onClick={() =>
              setGridSelection({
                current: {
                  cell: [1, 0],
                  range: { x: 1, y: 0, width: 2, height: 3 },
                  rangeStack: [],
                },
                rows: CompactSelection.empty(),
                columns: CompactSelection.empty(),
              })
            }
          >
            Выделить Title:Priority (строки 1–3)
          </Button>
        </div>

        <StoryHint>
          Выделение — <b>controlled</b> через{' '}
          <code>tableConfig.cellsSelection.state</code> ([value, setter]).
          Кнопки задают/сбрасывают внешний стейт, таблица реагирует.
          Контролируется нативная ось (ячейки/диапазон/смежные строки и
          колонки); несмежный Ctrl-выбор — внутренний.
          <br />
          Текущее выделение: <b>{summary}</b>.
        </StoryHint>

        <TableCanvas
          tableConfig={{
            containerStyle: { height: '600px' },
            cellsSelection: { mode: 'range-cell', state: gridSelectionState },
            rowMarkers: { startIndex: 1 },
          }}
          columnConfig={columnConfig}
          rows={rows}
        />
      </div>
    );
  },
};

export const MultiRangeSelect: Story = {
  name: 'Мультивыбор диапазонов (multi-range-cell)',
  ...storySourceDoc({ preCode, previewSource: 'shown' }),
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo(() => COLUMN_CONFIG, []);
    // Таблица сама тосты не рисует: ошибки copy/paste приходят в notifications,
    // показ — на стороне потребителя. Здесь показываем последнее событие плашкой.
    const [lastNotification, setLastNotification] = useState<string | null>(
      null,
    );

    return (
      <div>
        <StoryHint>
          <b>multi-range-cell</b>: тяни мышкой диапазон, затем <b>Ctrl/Cmd</b> +
          клик/драг — докидывай ещё диапазоны. Заливка — у всех выделенных,
          рамка — у последнего (рамку у каждого включает{' '}
          <code>outlineEachRange</code>, см. ниже).
          <br />
          <b>Copy (Ctrl+C):</b> работает, если разрозненный выбор в пределах{' '}
          <b>одной колонки</b> или <b>одной строки</b> — промежутки схлопываются
          (значения копируются подряд), либо если куски складываются в сплошной
          прямоугольник. Разброс сразу по строкам и колонкам не копируется — в{' '}
          <b>notifications</b> уходит ошибка (плашка ниже).
          <br />
          <b>Paste</b> со схлопыванием промежутков — в режиме редактирования,
          см. <b>Copy-Paste-Fill</b>.
        </StoryHint>

        {lastNotification && (
          <p
            style={{
              fontSize: 13,
              marginBottom: 8,
              padding: '6px 10px',
              borderRadius: 6,
              background: '#fdecec',
              color: '#a33',
            }}
          >
            notifications: {lastNotification}
          </p>
        )}

        <TableCanvas
          tableConfig={{
            containerStyle: { height: '600px' },
            cellsSelection: { mode: 'multi-range-cell' },
            rowMarkers: { startIndex: 1 },
            notifications: {
              onNotification: (event) =>
                setLastNotification(
                  `[${event.type}/${event.level}] ${event.message} (${event.code})`,
                ),
            },
          }}
          columnConfig={columnConfig}
          rows={rows}
        />
      </div>
    );
  },
};

export const OutlineEachRange: Story = {
  name: 'Рамка у каждого Ctrl-диапазона (outlineEachRange)',
  ...storySourceDoc({ preCode, previewSource: 'shown' }),
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo(() => COLUMN_CONFIG, []);
    const [outlineEachRange, setOutlineEachRange] = useState(true);

    return (
      <div>
        <div style={{ marginBottom: 12 }}>
          <Checkbox
            checked={outlineEachRange}
            onChange={(e) => setOutlineEachRange(e.target.checked)}
            label={<div>cellsSelection.outlineEachRange</div>}
          />
        </div>

        <StoryHint>
          Выдели диапазон, затем с <b>Ctrl/Cmd</b> добавь ещё несколько. С
          опцией рамка есть у каждого диапазона (как в Google Sheets), без неё —
          только у последнего, остальные показаны заливкой.
          <br />
          Протяни новый диапазон поверх старого: поглощённый диапазон рамку не
          получает. У соседних диапазонов на стыке видна общая линия.
        </StoryHint>

        <TableCanvas
          tableConfig={{
            containerStyle: { height: '600px' },
            cellsSelection: { mode: 'multi-range-cell', outlineEachRange },
            rowMarkers: { startIndex: 1 },
          }}
          columnConfig={columnConfig}
          rows={rows}
        />
      </div>
    );
  },
};

export const EnableToggles: Story = {
  name: 'Включение/выключение колонок и строк',
  ...storySourceDoc({ preCode, previewSource: 'shown' }),
  render: () => {
    const [rows] = useState(createRows);
    const columnConfig = useMemo(() => COLUMN_CONFIG, []);
    const [enableColumnSelection, setEnableColumnSelection] = useState(true);
    const [enableRowSelection, setEnableRowSelection] = useState(true);

    return (
      <div>
        <div style={{ display: 'flex', gap: 20, marginBottom: 12 }}>
          <Checkbox
            checked={enableColumnSelection}
            onChange={(e) => setEnableColumnSelection(e.target.checked)}
            label={<div>enableColumnSelection</div>}
          />
          <Checkbox
            checked={enableRowSelection}
            onChange={(e) => setEnableRowSelection(e.target.checked)}
            label={<div>enableRowSelection</div>}
          />
        </div>

        <StoryHint>
          Сними галочку — клик по шапке (колонки) или по колонке нумерации
          (строки) перестанет выделять. Выделение ячеек мышью при этом
          продолжает работать.
        </StoryHint>

        <TableCanvas
          tableConfig={{
            containerStyle: { height: '600px' },
            cellsSelection: {
              mode: 'range-cell',
              enableColumnSelection,
              enableRowSelection,
            },
            rowMarkers: { startIndex: 1 },
          }}
          columnConfig={columnConfig}
          rows={rows}
        />
      </div>
    );
  },
};

export const ServerSort: StoryObj<{
  replaceOnLoad: boolean;
  extraRows: number;
}> = {
  args: { replaceOnLoad: false, extraRows: 0 },
  argTypes: {
    replaceOnLoad: { name: 'Заменить таблицу оверлеем на время запроса' },
    extraRows: {
      name: 'Дополнительные строки',
      control: { type: 'select' },
      options: [0, 100],
    },
  },
  name: 'Серверная сортировка',
  ...storySourceDoc({
    preCode: `import { useMemo, useState } from 'react';
import { Button, TableCanvas } from '@daisforge/ui';
import { CompactSelection, type GridSelection, type SortColumn } from '@daisforge/ui/components/TableCanvas';`,
    type: 'code',
    previewSource: 'shown',
  }),
  render: ({ replaceOnLoad = false, extraRows = 0 }) => {
    const [reversed, setReversed] = useState(false);
    const rows = useMemo(() => {
      const records = [
        { id: 10, department: 'Учёт', name: 'Анна' },
        { id: 20, department: 'Учёт', name: 'Борис' },
        { id: 30, department: 'Склад', name: 'Вера' },
        { id: 40, department: 'Склад', name: 'Глеб' },
        ...Array.from({ length: extraRows }, (_, i) => ({
          id: 50 + i,
          department: `Отдел ${i}`,
          name: `Сотрудник ${i}`,
        })),
      ];
      return reversed ? records.reverse() : records;
    }, [extraRows, reversed]);
    const selection = useState<GridSelection>({
      rows: CompactSelection.empty(),
      columns: CompactSelection.empty(),
    });
    const [sortColumns, setSortColumns] = useState<readonly SortColumn[]>([]);
    const [waiting, setWaiting] = useState(false);
    const [nameFirst, setNameFirst] = useState(false);
    const columns = useMemo(() => {
      const department = { key: 'department', name: 'Отдел', width: 130 };
      const name = { key: 'name', name: 'Имя', width: 150 };
      const id = {
        key: 'id',
        name: 'ID',
        width: 100,
        sortingType: 'numberSort' as const,
      };
      return nameFirst ? [name, department, id] : [department, name, id];
    }, [nameFirst]);
    const { current } = selection[0];
    return (
      <div style={{ display: 'grid', gap: 12 }}>
        <p>
          Выделите несколько ячеек. Запросите сортировку, затем примените ответ
          сервера.
        </p>
        <div style={{ display: 'flex', gap: 8 }}>
          <Button
            disabled={waiting}
            onClick={() => {
              setSortColumns([
                {
                  columnKey: 'id',
                  direction:
                    sortColumns[0]?.direction === 'DESC' ? 'ASC' : 'DESC',
                },
              ]);
              setWaiting(true);
            }}
          >
            Запросить сортировку
          </Button>
          <Button
            disabled={!waiting}
            onClick={() => {
              setReversed((prev) => !prev);
              setWaiting(false);
            }}
          >
            Применить ответ
          </Button>
          <Button onClick={() => setNameFirst((prev) => !prev)}>
            {nameFirst ? 'Вернуть порядок колонок' : 'Переместить имя в начало'}
          </Button>
        </div>
        <output>
          {current
            ? `ID ${rows[current.cell[1]]?.id}, колонка ${
                current.cell[0] + 1
              }, диапазон ${current.range.width} × ${current.range.height}`
            : 'Выделение пусто'}
        </output>
        <TableCanvas
          rows={rows}
          columnConfig={columns}
          tableConfig={{
            containerStyle: { height: 280 },
            loadingOverlay: { active: replaceOnLoad && waiting },
            sorting: {
              state: [sortColumns, setSortColumns],
              manualSorting: true,
            },
            mergeCells: { mergeByCellValues: ['department'] },
            cellsSelection: { rowKeyGetter: (row) => row.id, state: selection },
          }}
        />
      </div>
    );
  },
};

type TaskRow = {
  id: number;
  task: string;
  priority: string;
  issueType: string;
  complete: number;
};

const COLUMNS: readonly ColumnConfig<TaskRow>[] = [
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
const taskTableDataCode =
  `type TaskRow = { id: number; task: string; priority: string; issueType: string; complete: number };\n` +
  `const COLUMNS: readonly ColumnConfig<TaskRow>[] = ${JSON.stringify(
    COLUMNS,
    null,
    2,
  )};\n` +
  `const allRows = Array.from({ length: 100 }, (_, id) => ({ id, task: 'Задача ' + id, priority: id % 2 ? 'Средний' : 'Высокий', issueType: 'Задача', complete: id % 100 }));\n`;

export const ProjectionResetDemo: Story = {
  name: 'Смена страницы и обновление данных',
  ...storySourceDoc({
    preCode: `import { useState } from 'react';
import { Button, TableCanvas } from '@daisforge/ui';
import type { ColumnConfig, SortColumn } from '@daisforge/ui/components/TableCanvas';
const PAGE_SIZE = ${PAGE_SIZE};
${taskTableDataCode}`,
    type: 'code',
    previewSource: 'shown',
  }),
  render: () => {
    const [sortColumns, setSortColumns] = useState<readonly SortColumn[]>([]);
    const [page, setPage] = useState(0);
    // Версия меняется при смене страницы или порядка записей.
    const [revision, setRevision] = useState(0);
    const [rows, setRows] = useState<TaskRow[]>(() => allRows.slice(0, PAGE_SIZE));
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
  name: 'Скрытие и перестановка колонок',
  ...storySourceDoc({
    preCode: `import { useMemo, useState } from 'react';
import { Button, TableCanvas } from '@daisforge/ui';
import type { ColumnConfig } from '@daisforge/ui/components/TableCanvas';
${taskTableDataCode}`,
    type: 'code',
    previewSource: 'shown',
  }),
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
