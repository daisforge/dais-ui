/* eslint-disable react-hooks/rules-of-hooks */
/**
 * Скриншотная матрица состояний цветов таблицы (палитра «токен × состояние»).
 *
 * Детерминированный грид со всеми типами ячеек: обычная, редактируемая
 * (жёлтая), статусный цвет потребителя (columnThemeOverride.bgCell),
 * ячейка с ошибкой. Каждая стори доводит грид до ОДНОГО состояния
 * (одна стори = один скриншот):
 *   покой / hover строки / отмеченные чекбоксом / выбранная строка
 *   (highlightActiveType='row') / их комбинации / пересечение с выделением /
 *   hover выделенной шапки / рамка ошибки поверх выделения.
 *
 * Ключевые сценарии продублированы по темам через parameters.forcedTheme
 * (dark, beta core, high contrast light; HC dark не существует как CSS-тема).
 *
 * `screenshot.keepState` — только у hover-сценариев: обычным раннер сбрасывает
 * мышь в (0,0), и ховер-подсветка (включена по умолчанию) не попадает в кадр.
 */
import { createRows, type Row } from '@df-storybook/data/tableData';
import type { Meta, StoryObj } from '@storybook/react';
import {
  type ColumnConfig,
  type HighlightActiveType,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import type { DataEditorRef } from '@ui-kit/components/TableCanvas/TableGlideInstance/type';
import { createRef, useState } from 'react';

import {
  click,
  drag,
  getGridTarget,
  gridReady,
  hover,
  makePoints,
  settle,
} from '../visual-helpers';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/ColoringStates/Визуальные тесты',
  tags: ['!autodocs'],
};
export default meta;

type Story = StoryObj;

const tableRef = createRef<DataEditorRef>();

// Раскладка-fallback: rowSize 'medium' + нумерация + чекбокс.
// В индекс glide-колонок (getBounds) входят ОБЕ сервисные колонки —
// нумерация и чекбокс, поэтому сдвиг data-колонок = 2.
const LAYOUT = {
  headerH: 33,
  rowH: 32,
  numW: 32,
  colW: 120,
  extraServiceCols: 2,
  extraServiceW: 32,
};

const ROWS: Row[] = createRows().slice(0, 6);

// Итоговая строка присутствует во всех кадрах как контроль: красится
// bgHeader (row-тема), hover/выделение/подсветку строки не получает.
const SUMMARY_ROWS = [
  {
    type: 'bottom' as const,
    values: [
      { columnId: 'id', value: 'Итого' },
      { columnId: 'task', value: `строк: ${ROWS.length}` },
      { columnId: 'complete', value: '263' },
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

// Статусные цвета потребителя: состояния считает рантайм-формула
const PRIORITY_COLORS: Record<string, string> = {
  Critical: '#FFE0E3',
  High: '#FEE2D2',
  Medium: '#CFECFF',
  Low: '#9EFAAF',
};

const COLS: readonly ColumnConfig<Row, SummaryRow>[] = [
  { key: 'id', name: 'ID', width: LAYOUT.colW, renderSummaryCell },
  {
    key: 'task',
    name: 'Task (edit)',
    width: LAYOUT.colW,
    renderSummaryCell,
    editingCell: {
      component: 'inputString',
      editable: true,
      // ошибка на первой строке (id 0) — для сценариев рамки ошибки
      error: { value: (row) => Number(row.id) % 7 === 0 },
    },
  },
  {
    key: 'priority',
    name: 'Priority',
    width: LAYOUT.colW,
    renderSummaryCell,
    themeOverride: ({ row }) => {
      const bgCell = PRIORITY_COLORS[row.priority];
      return bgCell ? { bgCell } : undefined;
    },
  },
  { key: 'issueType', name: 'Type', width: LAYOUT.colW, renderSummaryCell },
  {
    key: 'complete',
    name: '% (edit)',
    width: LAYOUT.colW,
    renderSummaryCell,
    editingCell: { component: 'inputNumber', editable: true },
  },
];

/**
 * Общий рендер: фиксированный грид со всеми типами ячеек.
 * `preCheckedRows` — индексы строк с заранее НАЖАТЫМ чекбоксом (состояние
 * контролируемое — кликать по чекбоксу в play не нужно).
 */
const renderGrid =
  (
    opts: {
      highlightActiveType?: HighlightActiveType;
      preCheckedRows?: readonly number[];
    } = {},
  ) =>
  () => {
    const preChecked = new Set(opts.preCheckedRows ?? []);
    const selectingState = useState<ReadonlySet<string | number>>(
      () => new Set(ROWS.filter((_, i) => preChecked.has(i)).map((r) => r.id)),
    );
    const [rows, setRows] = useState<Row[]>(() => [...ROWS]);
    return (
      <div style={{ padding: 8 }}>
        <TableCanvas
          refTable={tableRef}
          tableConfig={{
            // Итоговая строка рисуется ПРИЖАТОЙ К НИЗУ контейнера; высота с
            // запасом, чтобы она попадала в элемент-скриншот #storybook-root
            containerStyle: { height: '352px', width: '720px' },
            rowSize: { default: 'medium', showInControl: false },
            rowMarkers: { startIndex: 1 },
            summaryRows: { showDefault: true, showInControl: false },
            cellsSelection: { mode: 'range-cell' },
            highlightActiveType: opts.highlightActiveType ?? 'row',
            selecting: {
              state: selectingState,
              rowKeyGetter: (r: Row) => r.id,
            },
            editing: {
              onRowsChange: (next: Row[]) => setRows([...next]),
              rowKeyGetter: (r: Row) => r.id,
              defaultEnabled: true,
            },
          }}
          columnConfig={COLS}
          bottomSummaryRows={SUMMARY_ROWS}
          rows={rows}
        />
      </div>
    );
  };

const keepState = { parameters: { screenshot: { keepState: true } } };
const inTheme = (forcedTheme: string) => ({ parameters: { forcedTheme } });

type PlayCtx = { canvasElement: HTMLElement };

/** Подготовленные точки грида для play-функции. */
const gridPoints = async ({ canvasElement }: PlayCtx) => {
  const el = await getGridTarget(canvasElement);
  await gridReady(tableRef);
  return { el, p: makePoints(el, tableRef, LAYOUT) };
};

// --- Базовые состояния (light) ----------------------------------------------

export const Rest: Story = {
  name: 'Покой — все типы ячеек',
  render: renderGrid(),
};

export const HoverRow: Story = {
  name: 'Hover строки (включён по умолчанию)',
  ...keepState,
  render: renderGrid(),
  play: async (ctx: PlayCtx) => {
    const { el, p } = await gridPoints(ctx);
    hover(el, p.cell(3, 2));
    await settle();
  },
};

export const CheckedRows: Story = {
  name: 'Отмеченные чекбоксом строки — покой',
  render: renderGrid({ preCheckedRows: [1, 3] }),
};

export const CheckedRowHover: Story = {
  name: 'Отмеченная строка под курсором',
  ...keepState,
  render: renderGrid({ preCheckedRows: [1, 3] }),
  play: async (ctx: PlayCtx) => {
    const { el, p } = await gridPoints(ctx);
    hover(el, p.cell(3, 1));
    await settle();
  },
};

// --- Выбранная строка (highlightActiveType='row') ----------------------------

export const ActiveRow: Story = {
  name: 'Выбранная строка — покой (без курсора)',
  render: renderGrid(),
  play: async (ctx: PlayCtx) => {
    const { el, p } = await gridPoints(ctx);
    click(el, p.cell(3, 2));
    await settle();
  },
};

export const ActiveRowHover: Story = {
  name: 'Выбранная строка под курсором (hover2 у цветных)',
  ...keepState,
  render: renderGrid(),
  play: async (ctx: PlayCtx) => {
    const { el, p } = await gridPoints(ctx);
    click(el, p.cell(3, 2));
    await settle();
    hover(el, p.cell(0, 2));
    await settle();
  },
};

export const ActiveRowChecked: Story = {
  name: 'Выбранная строка с нажатым чекбоксом',
  render: renderGrid({ preCheckedRows: [2] }),
  play: async (ctx: PlayCtx) => {
    const { el, p } = await gridPoints(ctx);
    click(el, p.cell(3, 2));
    await settle();
  },
};

export const ActiveRowCheckedHover: Story = {
  name: 'Выбранная строка с чекбоксом под курсором (hover2)',
  ...keepState,
  render: renderGrid({ preCheckedRows: [2] }),
  play: async (ctx: PlayCtx) => {
    const { el, p } = await gridPoints(ctx);
    click(el, p.cell(3, 2));
    await settle();
    hover(el, p.cell(0, 2));
    await settle();
  },
};

export const ActiveRowRangeIntersect: Story = {
  name: 'Пересечение выбранной строки с диапазоном = выделение',
  render: renderGrid(),
  play: async (ctx: PlayCtx) => {
    const { el, p } = await gridPoints(ctx);
    click(el, p.cell(1, 2));
    await settle();
    drag(el, p.cell(3, 1), p.cell(3, 3));
    await settle();
  },
};

// --- Выделения и шапка --------------------------------------------------------

export const HeaderSelectedHover: Story = {
  name: 'Выделенная шапка под курсором (ступень глубже)',
  ...keepState,
  render: renderGrid({ highlightActiveType: 'disabled' }),
  play: async (ctx: PlayCtx) => {
    const { el, p } = await gridPoints(ctx);
    click(el, p.columnHeader(2));
    await settle();
    hover(el, p.columnHeader(2));
    await settle();
  },
};

export const RowSelectionHoverInside: Story = {
  name: 'Hover внутри выделенной строки (по нумерации)',
  ...keepState,
  render: renderGrid({ highlightActiveType: 'disabled' }),
  play: async (ctx: PlayCtx) => {
    const { el, p } = await gridPoints(ctx);
    click(el, p.numbering(2));
    await settle();
    hover(el, p.cell(2, 2));
    await settle();
  },
};

export const ErrorRingOverSelection: Story = {
  name: 'Рамка ошибки поверх выделения',
  render: renderGrid({ highlightActiveType: 'disabled' }),
  play: async (ctx: PlayCtx) => {
    const { el, p } = await gridPoints(ctx);
    drag(el, p.cell(0, 0), p.cell(2, 1));
    await settle();
  },
};

// --- Темы: те же сценарии в dark / beta / high contrast -----------------------

export const RestDark: Story = {
  name: 'Dark — покой',
  ...inTheme('FinAI:dark'),
  render: renderGrid(),
};

export const CheckedRowHoverDark: Story = {
  name: 'Dark — отмеченная строка под курсором',
  parameters: { ...keepState.parameters, ...inTheme('FinAI:dark').parameters },
  render: renderGrid({ preCheckedRows: [1, 3] }),
  play: async (ctx: PlayCtx) => {
    const { el, p } = await gridPoints(ctx);
    hover(el, p.cell(3, 1));
    await settle();
  },
};

export const ActiveRowHoverDark: Story = {
  name: 'Dark — выбранная строка под курсором (hover2)',
  parameters: { ...keepState.parameters, ...inTheme('FinAI:dark').parameters },
  render: renderGrid(),
  play: async (ctx: PlayCtx) => {
    const { el, p } = await gridPoints(ctx);
    click(el, p.cell(3, 2));
    await settle();
    hover(el, p.cell(0, 2));
    await settle();
  },
};

export const ActiveRowRangeIntersectDark: Story = {
  name: 'Dark — пересечение выбранной строки с диапазоном',
  ...inTheme('FinAI:dark'),
  render: renderGrid(),
  play: async (ctx: PlayCtx) => {
    const { el, p } = await gridPoints(ctx);
    click(el, p.cell(1, 2));
    await settle();
    drag(el, p.cell(3, 1), p.cell(3, 3));
    await settle();
  },
};

export const RestBetaLight: Story = {
  name: 'Beta light — покой',
  ...inTheme('FinAI Beta:light'),
  render: renderGrid(),
};

export const RestBetaDark: Story = {
  name: 'Beta dark — покой',
  ...inTheme('FinAI Beta:dark'),
  render: renderGrid(),
};

export const ActiveRowBetaDark: Story = {
  name: 'Beta dark — выбранная строка',
  ...inTheme('FinAI Beta:dark'),
  render: renderGrid(),
  play: async (ctx: PlayCtx) => {
    const { el, p } = await gridPoints(ctx);
    click(el, p.cell(3, 2));
    await settle();
  },
};

export const RestHcLight: Story = {
  name: 'HC light — покой',
  ...inTheme('FinAI HC:light'),
  render: renderGrid(),
};

export const ActiveRowHcLight: Story = {
  name: 'HC light — выбранная строка',
  ...inTheme('FinAI HC:light'),
  render: renderGrid(),
  play: async (ctx: PlayCtx) => {
    const { el, p } = await gridPoints(ctx);
    click(el, p.cell(3, 2));
    await settle();
  },
};
