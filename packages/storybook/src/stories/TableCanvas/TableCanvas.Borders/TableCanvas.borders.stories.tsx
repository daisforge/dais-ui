/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Canvas,
  ColumnConfig,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/Borders',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate,
    },
  },
};

export default meta;

const preCode = `
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`;

type Story = StoryObj;

const COLS: readonly ColumnConfig<Row>[] = [
  { key: 'id', name: 'ID', width: 120 },
  { key: 'task', name: 'Title', width: 160 },
  { key: 'priority', name: 'Priority', width: 140 },
  { key: 'issueType', name: 'Issue Type', width: 140 },
  { key: 'complete', name: '% Complete', width: 140 },
];

// Лёгкий генератор строк для нагрузочного стенда: только нужные поля, без subRows
// и без loremIpsum, иначе миллион строк это гигабайты и вкладка ляжет.
const PRIORITIES = ['Critical', 'High', 'Medium', 'Low'];
const ISSUE_TYPES = ['Bug', 'Improvement', 'Epic', 'Story'];

function makeLeanRows(count: number): Row[] {
  const rows: Row[] = new Array(count);
  for (let i = 0; i < count; i += 1) {
    rows[i] = {
      id: i + 1,
      task: `Task ${i + 1}`,
      priority: PRIORITIES[i % 4]!,
      issueType: ISSUE_TYPES[Math.floor(i / 4) % 4]!,
      complete: (i * 37) % 101,
      developer: '',
      done: false,
      inspiredDay: 0,
      tr: '',
      loremIpsum: '',
    };
  }
  return rows;
}

// Нагрузочный набор колонок: к базовым добавляем синтетические колонки-показатели.
// Значения не хранятся в данных (иначе 1000 колонок x 1M строк это миллиард ячеек),
// а считаются лениво в renderCell от id строки. glide рисует только видимые.
function makeManyCols(count: number): ColumnConfig<Row>[] {
  if (count <= COLS.length) {
    return [...COLS];
  }
  const extra: ColumnConfig<Row>[] = [];
  for (let i = COLS.length; i < count; i += 1) {
    extra.push({
      key: `m${i}`,
      name: `M${i - COLS.length + 1}`,
      width: 90,
      renderCell: ({ row }) => (
        <Canvas.Text>{String((Number(row.id) * (i + 1)) % 1000)}</Canvas.Text>
      ),
    });
  }
  return [...COLS, ...extra];
}

// Рамки выносим в константы: getCellBorder вызывается для каждой видимой ячейки
// при каждой перерисовке, и новый объект на каждый вызов создавал бы лишний
// мусор для сборщика памяти.
const BOTTOM_ON = { bottom: true } as const;
const FRAME_ON = { top: true, right: true, bottom: true, left: true } as const;
// Вертикальные разделители у обычных (не слитых) колонок.
const SIDES_ON = { left: true, right: true } as const;
const SIDES_WITH_BOTTOM = { left: true, right: true, bottom: true } as const;

/**
 * Выключены все вертикальные линии, остаются только горизонтальные.
 * Самый частый случай: убрать разделители колонок.
 */
export const NoVerticalLines: Story = {
  ...storySourceDoc({ preCode, previewSource: 'shown' }),
  render: () => {
    const [rows] = useState(createRows);
    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: 360 },
          rowMarkers: { startIndex: 1 },
          borders: { vertical: false },
        }}
        columnConfig={COLS}
        rows={rows}
      />
    );
  },
};

/**
 * Точечно: у колонки Priority убран разделитель справа
 * (columnConfig.verticalBorder=false), остальные линии на месте.
 */
export const HideColumnBorder: Story = {
  ...storySourceDoc({ preCode, previewSource: 'shown' }),
  render: () => {
    const [rows] = useState(createRows);
    const cols: readonly ColumnConfig<Row>[] = COLS.map((c) =>
      c.key === 'priority' ? { ...c, verticalBorder: false } : c,
    );
    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: 360 },
          rowMarkers: { startIndex: 1 },
        }}
        columnConfig={cols}
        rows={rows}
      />
    );
  },
};

/**
 * Выключены все горизонтальные линии тела.
 */
export const NoHorizontalLines: Story = {
  ...storySourceDoc({ preCode, previewSource: 'shown' }),
  render: () => {
    const [rows] = useState(createRows);
    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: 360 },
          rowMarkers: { startIndex: 1 },
          borders: { horizontal: false },
        }}
        columnConfig={COLS}
        rows={rows}
      />
    );
  },
};

/**
 * Рамки отдельных ячеек: горизонтальные линии выключены целиком, а в колонке
 * % Complete нижняя рамка точечно включена у значений от 50. getCellBorder
 * получает саму строку, поэтому порог проверяется прямо по её полю.
 */
export const PerCellBorders: Story = {
  ...storySourceDoc({ preCode, previewSource: 'shown' }),
  render: () => {
    const [rows] = useState(createRows);
    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: 360 },
          rowMarkers: { startIndex: 1 },
          borders: {
            horizontal: false,
            getCellBorder: ({ columnKey, row }) =>
              columnKey === 'complete' && row.complete >= 50
                ? BOTTOM_ON
                : undefined,
          },
        }}
        columnConfig={COLS}
        rows={rows}
      />
    );
  },
};

/**
 * Дерево subRows: вертикальные линии выключены целиком, остаются только
 * горизонтальные между корневыми строками, а внутри раскрытых блоков они не
 * рисуются, и родитель с детьми выглядит цельным.
 *
 * vertical: false убирает все разделители колонок. getHorizontalBorder получает
 * саму строку и уровень вложенности treeLvl: у дочерних строк (treeLvl больше 0)
 * линия сверху выключается. Гаснет и линия между родителем и первым ребёнком, и
 * линии между детьми, а линия сверху следующей корневой строки остаётся. Индексы
 * строк при раскрытии сдвигаются, поэтому настройка привязана к строке, а не к
 * номеру.
 */
export const SubRowsWithoutInnerLines: Story = {
  ...storySourceDoc({ preCode, previewSource: 'shown' }),
  render: () => {
    const [rows] = useState(createRows);
    const cols: readonly ColumnConfig<Row>[] = [
      {
        key: 'task',
        name: 'Title',
        width: 220,
        subRow: { keyOfColumnInSubRow: 'task', isColumnWithArrow: true },
      },
      { key: 'priority', name: 'Priority', width: 140 },
      { key: 'issueType', name: 'Issue Type', width: 140 },
      { key: 'complete', name: '% Complete', width: 140 },
    ];
    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: 420 },
          rowMarkers: { startIndex: 1 },
          subRows: {
            getSubRows: (row) => row.subRows,
            rowKeyGetter: (row) => row.id,
          },
          borders: {
            vertical: false,
            getHorizontalBorder: ({ treeLvl }) =>
              treeLvl > 0 ? false : undefined,
          },
        }}
        columnConfig={cols}
        rows={rows}
      />
    );
  },
};

/**
 * Нагрузочный стенд. Генерируем до миллиона строк и включаем рамки отдельных ячеек.
 *
 * Что проверяем: скролл остаётся плавным независимо от числа строк, потому что glide
 * рисует только видимую область. В режиме рамок горизонтали выключены целиком, а
 * getCellBorder точечно включает нижнюю рамку: у каждой 10-й строки (граница десятки)
 * и в колонке % Complete у значений от 50.
 *
 * Контролы: «Строк» (100k / 500k / 1M), «Колонок» (5 / 100 / 500 / 1000) и «Рамки
 * ячеек» (включить разбивку линий по ячейкам через getCellBorder или оставить
 * сплошные линии). 1000 колонок x 1M строк скролл держит: рисуется только
 * видимая область.
 */
export const MillionRows: Story = {
  ...storySourceDoc({ preCode, previewSource: 'shown' }),
  // Нагрузочный стенд не показываем в агрегации Docs: 100k+ строк рендерились бы
  // прямо в доке. Стенд доступен отдельной стори.
  parameters: { docs: { disable: true } },
  argTypes: {
    rowsCount: {
      name: 'Строк',
      control: 'select',
      options: [100_000, 500_000, 1_000_000],
    },
    colsCount: {
      name: 'Колонок',
      control: 'select',
      options: [5, 100, 500, 1000],
    },
    perCell: { name: 'Рамки ячеек (getCellBorder)', control: 'boolean' },
  },
  args: { rowsCount: 100_000, colsCount: 100, perCell: true },
  render: ({
    rowsCount,
    colsCount,
    perCell,
  }: {
    rowsCount: number;
    colsCount: number;
    perCell: boolean;
  }) => {
    const rows = useMemo(() => makeLeanRows(rowsCount), [rowsCount]);
    const columnConfig = useMemo(() => makeManyCols(colsCount), [colsCount]);
    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: 480 },
          rowMarkers: { startIndex: 1 },
          borders: perCell
            ? {
                horizontal: false,
                getCellBorder: ({ columnKey, row, rowIndex }) => {
                  if (rowIndex % 10 === 9) return BOTTOM_ON;
                  if (columnKey !== 'complete') return undefined;
                  return row.complete >= 50 ? BOTTOM_ON : undefined;
                },
              }
            : { vertical: false },
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};

// --- Линии + объединённые ячейки ---

type MergeRow = {
  id: number;
  region: string;
  team: string;
  dept: string;
  metric: number;
  status: string;
};

// 3 региона по 4 строки. region склеивается блоками по 4 (прижат к нумерации),
// dept склеивается блоками по 2 в средней колонке, для сравнения с колонкой у нумерации.
function makeMergeRows(): MergeRow[] {
  const regions = ['Север', 'Юг', 'Запад'];
  const depts = ['Продажи', 'Развитие'];
  const rows: MergeRow[] = [];
  let i = 1;
  regions.forEach((region) => {
    for (let t = 0; t < 4; t += 1) {
      rows.push({
        id: i,
        region,
        team: `Команда ${t + 1}`,
        dept: depts[Math.floor(t / 2) % 2]!,
        metric: (i * 29) % 101,
        status: i % 2 ? 'OK' : 'Warn',
      });
      i += 1;
    }
  });
  return rows;
}

const MERGE_COLS: readonly ColumnConfig<MergeRow>[] = [
  { key: 'region', name: 'Регион (merged, у нумерации)', width: 200 },
  { key: 'team', name: 'Команда', width: 150 },
  { key: 'dept', name: 'Отдел (merged, средний)', width: 190 },
  { key: 'metric', name: 'Метрика', width: 120 },
  { key: 'status', name: 'Статус', width: 120 },
];

/**
 * Линии + объединённые ячейки. «Регион» слит блоками по 4 (прижат к нумерации),
 * «Отдел» слит блоками по 2 в средней колонке.
 *
 * Все линии сетки выключены, точечно дорисованы:
 * - контур у слитых колонок «Регион» и «Отдел»: внутрь блока линии не попадают
 *   никогда, от рамок ячеек остаётся только внешний контур блока;
 * - у обычных колонок «Метрика» и «Статус» есть вертикальные разделители по бокам;
 * - в «Метрике» дополнительно нижняя рамка у значений от 50.
 *
 * hoverEffects.row и выделение включены, чтобы проверять поведение ховера
 * на объединённых ячейках.
 */
export const WithMergedCells: Story = {
  ...storySourceDoc({ preCode, previewSource: 'shown' }),
  render: () => {
    const [rows] = useState(makeMergeRows);
    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: 420 },
          rowMarkers: { startIndex: 1 },
          mergeCells: { mergeByCellValues: ['region', 'dept'] },
          hoverEffects: { row: true },
          cellsSelection: { mode: 'range-cell' },
          borders: {
            vertical: false,
            horizontal: false,
            getCellBorder: ({ columnKey, row }) => {
              if (columnKey === 'region' || columnKey === 'dept') {
                return FRAME_ON;
              }
              if (columnKey === 'metric') {
                return row.metric >= 50 ? SIDES_WITH_BOTTOM : SIDES_ON;
              }
              if (columnKey === 'status') {
                return SIDES_ON;
              }
              return undefined;
            },
          },
        }}
        columnConfig={MERGE_COLS}
        rows={rows}
      />
    );
  },
};
