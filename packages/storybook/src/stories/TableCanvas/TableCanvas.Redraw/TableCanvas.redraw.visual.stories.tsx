/**
 * Стенды тестов перерисовки (packages/storybook/test/redraw).
 *
 * Детерминированные таблицы с известной раскладкой: одна служебная колонка
 * (нумерация), колонки фиксированной ширины, строки из seeded-генератора.
 * Playwright водит по ним настоящей мышью и клавиатурой и после каждого шага
 * сверяет частичный кадр glide с кадром целиком. PNG этих историй не снимаются:
 * вид таблицы здесь не проверяется, только совпадение частичной перерисовки.
 */
import type { GridSelection } from '@daisforge/glide-data-grid';
import { CompactSelection } from '@daisforge/glide-data-grid';
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
 * Выделение хранит потребитель: каждый клик перерисовывает компонент, но
 * таблица дорисовывает только области выделения.
 */
export const Controlled: Story = {
  name: 'Выделение снаружи (controlled)',
  render: () => <ControlledExample />,
};

const NOTES = [
  'Коротко.',
  'Две строки текста, чтобы ячейка стала выше соседей и строка выросла по содержимому.',
  'Три строки: длинное описание задачи с подробностями, которые не помещаются в одну строку и переносятся на следующие, пока не закончатся.',
  'Одна строка средней длины, помещается.',
];

const AUTO_COLUMNS: readonly ColumnConfig<Row, SummaryRow>[] = [
  { key: 'id', name: 'ID', width: 80 },
  { key: 'name', name: 'Название', width: 160 },
  {
    key: 'dept',
    name: 'Заметка',
    width: 320,
    renderCell: ({ row, theme }) => (
      <Canvas.Container alignItems="center" padding={{ left: 8, right: 8 }}>
        <Canvas.Text font={theme.baseFontStyle} wordWrap>
          {NOTES[row.id % NOTES.length]}
        </Canvas.Text>
      </Canvas.Container>
    ),
  },
  ...COLUMNS.slice(3, 8),
];

/** Высота строки по содержимому: строки разной высоты, стрелки у края экрана. */
export const AutoHeight: Story = {
  name: 'Автовысота строк',
  render: () => (
    <div style={{ padding: 8 }}>
      <TableCanvas
        tableConfig={{ ...BASE_CONFIG, rowHeight: 'auto' }}
        columnConfig={AUTO_COLUMNS}
        rows={ROWS}
      />
    </div>
  ),
};

const EDIT_COLUMNS: readonly ColumnConfig<Row, SummaryRow>[] = [
  { key: 'id', name: 'ID', width: 80 },
  {
    key: 'name',
    name: 'Название',
    width: 160,
    editingCell: { component: 'inputString', editable: true },
  },
  { key: 'dept', name: 'Отдел', width: 120 },
  {
    key: 'amount',
    name: 'Сумма',
    width: 110,
    editingCell: {
      component: 'inputNumber',
      editable: true,
      error: { value: (row) => row.amount < 0 },
    },
  },
  ...COLUMNS.slice(6, 12),
];

function EditingExample() {
  const [rows, setRows] = useState<Row[]>(() => [...ROWS]);
  return (
    <div style={{ padding: 8 }}>
      <TableCanvas
        tableConfig={{
          ...BASE_CONFIG,
          editing: {
            defaultEnabled: true,
            rowKeyGetter: (row: Row) => row.id,
            onRowsChange: (next: Row[]) => setRows([...next]),
          },
          cellTransfer: { fillHandle: true },
        }}
        columnConfig={EDIT_COLUMNS}
        rows={rows}
      />
    </div>
  );
}

/** Редактируемые и нередактируемые ячейки вперемешку, маркер растяжения, ошибка в ячейке. */
export const Editing: Story = {
  name: 'Редактирование и маркер растяжения',
  render: () => <EditingExample />,
};

const MARK_COLUMNS: readonly ColumnConfig<Row, SummaryRow>[] = [
  ...COLUMNS.slice(0, 4),
  {
    key: 'status',
    name: 'Действие',
    width: 150,
    // кнопка меняет вид под курсором: ячейка перерисовывается при наведении
    renderCell: ({ row }) => (
      <Canvas.Container direction="row" alignItems="center" padding={8}>
        <Canvas.Button view="secondary" size="s">
          {row.status}
        </Canvas.Button>
      </Canvas.Container>
    ),
  },
  ...COLUMNS.slice(5, 11),
];

function MarksExample() {
  const selecting = useState<ReadonlySet<string | number>>(
    () => new Set([2, 5]),
  );
  return (
    <div style={{ padding: 8 }}>
      <TableCanvas
        tableConfig={{
          ...BASE_CONFIG,
          selecting: { state: selecting, rowKeyGetter: (row: Row) => row.id },
          // ошибки строк живут в настройке редактирования
          editing: {
            defaultEnabled: false,
            rowKeyGetter: (row: Row) => row.id,
            onRowsChange: () => undefined,
            rowErrors: { isErrorRow: (row: Row) => row.amount < 0 },
          },
        }}
        columnConfig={MARK_COLUMNS}
        rows={ROWS}
      />
    </div>
  );
}

/** Чекбоксы строк, столбец ошибок строки и кнопка в ячейке: дорисовки из обёртки. */
export const Marks: Story = {
  name: 'Отметки строк, ошибки и кнопка в ячейке',
  render: () => <MarksExample />,
};

const GROUPED_COLUMNS = [
  { key: 'main', name: 'Основное', children: COLUMNS.slice(0, 2) },
  { key: 'org', name: 'Подразделение', children: COLUMNS.slice(2, 4) },
  { key: 'money', name: 'Деньги', children: COLUMNS.slice(4, 6) },
  {
    key: 'months',
    name: 'Месяцы',
    children: [
      { key: 'h1', name: 'Первое полугодие', children: COLUMNS.slice(6, 10) },
      { key: 'h2', name: 'Второе полугодие', children: COLUMNS.slice(10, 14) },
    ],
  },
];

/** Группы колонок в два уровня: шапка групп при наведении и выделении. */
export const Groups: Story = {
  name: 'Группы колонок',
  render: () => (
    <div style={{ padding: 8 }}>
      <TableCanvas
        tableConfig={BASE_CONFIG}
        columnConfig={GROUPED_COLUMNS}
        rows={ROWS}
      />
    </div>
  ),
};

const BORDER_COLUMNS: readonly ColumnConfig<Row, SummaryRow>[] = COLUMNS.map(
  (column) => ({ ...column, resizable: true }),
);

function BordersExample() {
  const hidden = useState<string[]>([]);
  const [hiddenKeys, setHidden] = hidden;
  return (
    <div style={{ padding: 8 }}>
      <button
        type="button"
        onClick={() => setHidden(hiddenKeys.includes('role') ? [] : ['role'])}
      >
        {hiddenKeys.includes('role') ? 'Показать роль' : 'Скрыть роль'}
      </button>
      <TableCanvas
        tableConfig={{
          ...BASE_CONFIG,
          resizableColumn: true,
          columnsControl: { enable: true, hiddenState: hidden },
          // у чётных колонок нет правой линии, у каждой третьей строки нижней
          borders: {
            getCellBorder: ({
              col,
              rowIndex,
            }: {
              col: number;
              rowIndex: number;
            }) => ({
              right: col % 2 !== 0,
              bottom: rowIndex % 3 !== 2,
            }),
          },
        }}
        columnConfig={BORDER_COLUMNS}
        rows={ROWS}
      />
    </div>
  );
}

/** Свои рамки ячеек, ресайз колонки мышью и скрытие колонки извне. */
export const Borders: Story = {
  name: 'Рамки ячеек, ресайз и скрытие колонки',
  render: () => <BordersExample />,
};

/** Без линий сетки: левый и верхний пиксели ячейки принадлежат ей, а не линии. */
export const NoLines: Story = {
  name: 'Без линий сетки',
  render: () => (
    <div style={{ padding: 8 }}>
      <TableCanvas
        tableConfig={{
          ...BASE_CONFIG,
          borders: { vertical: false, horizontal: false },
        }}
        columnConfig={COLUMNS}
        rows={ROWS}
      />
    </div>
  ),
};
