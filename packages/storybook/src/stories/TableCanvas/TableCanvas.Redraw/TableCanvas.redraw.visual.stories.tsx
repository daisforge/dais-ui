/**
 * Стенды тестов перерисовки (packages/storybook/test/redraw).
 *
 * Детерминированные таблицы с известной раскладкой: одна служебная колонка
 * (нумерация), колонки фиксированной ширины, строки из seeded-генератора.
 * Playwright водит по ним настоящей мышью и клавиатурой и после каждого шага
 * сверяет частичный кадр glide с кадром целиком. PNG этих историй не снимаются:
 * вид таблицы здесь не проверяется, только совпадение частичной перерисовки.
 */
import type { GridSelection } from '@glideappsfinal/glide-data-grid';
import { CompactSelection } from '@glideappsfinal/glide-data-grid';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Canvas,
  type ColumnConfig,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import { useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/Redraw',
  tags: ['!autodocs'],
  parameters: {
    screenshot: {
      skip: true,
      skipReason: 'стенд тестов перерисовки (test/redraw), PNG не нужен',
    },
  },
};
export default meta;

type Story = StoryObj;

const STATUSES = ['Новая', 'В работе', 'Готово'] as const;
const DEPTS = ['Продажи', 'Риски', 'Финансы', 'Данные'];
const ROLES = ['Аналитик', 'Менеджер', 'Инженер'];
const MONTHS = 8;

type Row = {
  id: number;
  name: string;
  dept: string;
  role: string;
  status: (typeof STATUSES)[number];
  amount: number;
} & Record<`m${number}`, number>;

/** Линейный генератор: одни и те же числа при каждом запуске. */
const seeded = (seed: number) => {
  let state = seed;
  return () => {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };
};

const ROWS: Row[] = Array.from({ length: 60 }, (_, i) => {
  const random = seeded(i + 1);
  const months = Object.fromEntries(
    Array.from({ length: MONTHS }, (__, m) => [
      `m${m + 1}`,
      Math.round(random() * 2000 - 500),
    ]),
  ) as Record<`m${number}`, number>;
  return {
    id: i + 1,
    name: `Запись ${i + 1}`,
    // блоки по 4 строки для объединения, роли блоками по 2: блок с соседом
    // помещается на экран, иначе выделение в блоке всегда шло бы кадром целиком
    dept: DEPTS[Math.floor(i / 4) % DEPTS.length] ?? '',
    role: ROLES[Math.floor(i / 2) % ROLES.length] ?? '',
    status: STATUSES[i % STATUSES.length] ?? 'Новая',
    amount: Math.round(random() * 20000 - 5000),
    ...months,
  };
});

const SUMMARY_ROWS = [
  {
    type: 'bottom' as const,
    values: [
      { columnId: 'id', value: 'Итого' },
      { columnId: 'amount', value: '123 456' },
    ],
  },
];
type SummaryRow = (typeof SUMMARY_ROWS)[number];

const renderSummaryCell = ({
  row,
  column,
}: {
  row: SummaryRow;
  column: { key: string };
}) => row.values.find((v) => v.columnId === column.key)?.value ?? '';

const COLUMNS: readonly ColumnConfig<Row, SummaryRow>[] = [
  { key: 'id', name: 'ID', width: 80, renderSummaryCell },
  { key: 'name', name: 'Название', width: 160, renderSummaryCell },
  { key: 'dept', name: 'Отдел', width: 120, renderSummaryCell },
  { key: 'role', name: 'Роль', width: 120, renderSummaryCell },
  {
    key: 'status',
    name: 'Статус',
    width: 130,
    renderSummaryCell,
    // свой рендер: при наведении и выделении ячейка рисуется заново целиком
    renderCell: ({ row }) => (
      <Canvas.Container direction="row" alignItems="center" padding={8}>
        <Canvas.Badge text={row.status} view="accent" size="s" />
      </Canvas.Container>
    ),
  },
  {
    key: 'amount',
    name: 'Сумма',
    width: 110,
    renderSummaryCell,
    // свой цвет ячейки: его состояния при наведении и выделении считает таблица
    themeOverride: ({ row, theme }) =>
      row.amount < 0 ? { bgCell: theme.bgCellNegative } : undefined,
  },
  ...Array.from({ length: MONTHS }, (_, m) => ({
    key: `m${m + 1}` as const,
    name: `М${m + 1}`,
    width: 90,
    renderSummaryCell,
  })),
];

const BASE_CONFIG = {
  containerStyle: { height: '520px', width: '1200px' },
  rowSize: { default: 'medium' as const, showInControl: false },
  rowMarkers: { startIndex: 1 },
  highlightActiveType: 'row' as const,
  cellsSelection: { mode: 'multi-range-cell' as const },
};

/** Обычная таблица: наведение на строку, выделение, стрелки, прокрутка. */
export const Basic: Story = {
  name: 'Обычная таблица',
  render: () => (
    <div style={{ padding: 8 }}>
      <TableCanvas
        tableConfig={BASE_CONFIG}
        columnConfig={COLUMNS}
        rows={ROWS}
      />
    </div>
  ),
};

/** Закреплённые колонки, прилипшие строки и итоговая строка. */
export const Sticky: Story = {
  name: 'Закреплённые колонки и строки',
  render: () => (
    <div style={{ padding: 8 }}>
      <TableCanvas
        tableConfig={{
          ...BASE_CONFIG,
          stickyColumns: ['id', 'name'],
          stickyRows: [4, 11],
          summaryRows: { showDefault: true, showInControl: false },
        }}
        columnConfig={COLUMNS}
        bottomSummaryRows={SUMMARY_ROWS}
        rows={ROWS}
      />
    </div>
  ),
};

/** Объединённые ячейки по значению: отдел блоками по 4 строки, роль по 2. */
export const Merged: Story = {
  name: 'Объединённые ячейки',
  render: () => (
    <div style={{ padding: 8 }}>
      <TableCanvas
        tableConfig={{
          ...BASE_CONFIG,
          mergeCells: { mergeByCellValues: ['dept', 'role'] },
        }}
        columnConfig={COLUMNS}
        rows={ROWS}
      />
    </div>
  ),
};

const EMPTY_SELECTION: GridSelection = {
  current: undefined,
  rows: CompactSelection.empty(),
  columns: CompactSelection.empty(),
};

function ControlledExample() {
  const [selection, setSelection] = useState<GridSelection>(EMPTY_SELECTION);
  return (
    <div style={{ padding: 8 }}>
      <TableCanvas
        tableConfig={{
          ...BASE_CONFIG,
          cellsSelection: {
            mode: 'multi-range-cell',
            state: [selection, setSelection],
          },
        }}
        columnConfig={COLUMNS}
        rows={ROWS}
      />
    </div>
  );
}

/**
 * Выделение хранит потребитель: каждый клик перерисовывает компонент, кадр
 * рисуется целиком. Проверяется только совпадение, не экономия.
 */
export const Controlled: Story = {
  name: 'Выделение снаружи (controlled)',
  render: () => <ControlledExample />,
};
