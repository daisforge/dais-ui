/**
 * Визуальные (скриншотные) тесты выделения/подсветки на детерминированном гриде.
 *
 * Механика точек клика и pointer-событий — общая для visual-сторис TableCanvas:
 * см. `../visual-helpers.ts` (ref-first через getBounds с fallback на
 * детерминированную раскладку; нумерация/угол — всегда раскладка).
 *
 * Каждая стори доводит грид до ОДНОГО состояния (одна стори = один скриншот).
 * `parameters.screenshot.keepState` — не сбрасывать состояние/мышь перед скрином.
 * Эталонные PNG генерятся первым прогоном test-runner (`-u`) на стороне CI.
 */
import { createRows, type Row } from '@df-storybook/data/tableData';
import type { Meta, StoryObj } from '@storybook/react';
import {
  type CellsSelectionMode,
  type ColumnConfig,
  type HighlightActiveType,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import type { DataEditorRef } from '@ui-kit/components/TableCanvas/TableGlideInstance/type';
import { createRef } from 'react';

import {
  click,
  drag,
  getGridTarget,
  gridReady,
  makePoints,
  settle,
} from '../visual-helpers';

const meta: Meta = {
  title:
    'Локальные компоненты/TableCanvas/Copy-Paste-Fill/Визуальные тесты выделения',
  tags: ['!autodocs'],
};
export default meta;

type Story = StoryObj;

// Ref таблицы — общий на модуль, читаем из play. Пробрасываем в TableCanvas.refTable.
const tableRef = createRef<DataEditorRef>();

// Детерминированная раскладка (fallback, когда ref-getBounds недоступен):
// rowSize 'medium', нумерация, без чекбокса.
const LAYOUT = { headerH: 33, rowH: 32, numW: 32, colW: 140 };

const ROWS: Row[] = createRows().slice(0, 6);

const COLS: readonly ColumnConfig<Row>[] = [
  { key: 'id', name: 'ID', width: LAYOUT.colW },
  { key: 'task', name: 'Title', width: LAYOUT.colW },
  { key: 'priority', name: 'Priority', width: LAYOUT.colW },
  { key: 'issueType', name: 'Type', width: LAYOUT.colW },
  { key: 'complete', name: '%', width: LAYOUT.colW },
];

/** Общий рендер: фиксированный грид, режимы задаются на сценарий. */
const renderGrid =
  (
    selectionMode: CellsSelectionMode,
    highlightActiveType: HighlightActiveType = 'disabled',
  ) =>
  () =>
    (
      <div style={{ padding: 8 }}>
        <TableCanvas
          refTable={tableRef}
          tableConfig={{
            containerStyle: { height: '320px', width: '800px' },
            rowSize: { default: 'medium', showInControl: false },
            rowMarkers: { startIndex: 1 },
            cellsSelection: {
              mode: selectionMode,
              enableColumnSelection: true,
              enableRowSelection: true,
              enableSelectAll: true,
            },
            highlightActiveType,
          }}
          columnConfig={COLS}
          rows={ROWS}
        />
      </div>
    );

const screenshot = { parameters: { screenshot: { keepState: true } } };

type PlayCtx = { canvasElement: HTMLElement };

const gridPoints = async ({ canvasElement }: PlayCtx) => {
  const el = await getGridTarget(canvasElement);
  await gridReady(tableRef);
  return { el, p: makePoints(el, tableRef, LAYOUT) };
};

// --- Сценарии: КОЛОНКИ --------------------------------------------------------

export const ColumnSingle: Story = {
  name: 'Колонка — одиночный клик по шапке',
  ...screenshot,
  render: renderGrid('range-cell'),
  play: async (ctx: PlayCtx) => {
    const { el, p } = await gridPoints(ctx);
    click(el, p.columnHeader(1));
    await settle();
  },
};

export const ColumnShiftRange: Story = {
  name: 'Колонки — диапазон через Shift',
  ...screenshot,
  render: renderGrid('range-cell'),
  play: async (ctx: PlayCtx) => {
    const { el, p } = await gridPoints(ctx);
    click(el, p.columnHeader(1));
    await settle();
    click(el, p.columnHeader(3), { shiftKey: true });
    await settle();
  },
};

export const ColumnCtrlMulti: Story = {
  name: 'Колонки — несмежные через Ctrl',
  ...screenshot,
  render: renderGrid('range-cell'),
  play: async (ctx: PlayCtx) => {
    const { el, p } = await gridPoints(ctx);
    click(el, p.columnHeader(1), { ctrlKey: true });
    await settle();
    click(el, p.columnHeader(3), { ctrlKey: true });
    await settle();
  },
};

export const SelectAll: Story = {
  name: 'Вся таблица — клик по углу нумерации',
  ...screenshot,
  render: renderGrid('range-cell'),
  play: async (ctx: PlayCtx) => {
    const { el, p } = await gridPoints(ctx);
    click(el, p.corner());
    await settle();
  },
};

// --- Сценарии: СТРОКИ ---------------------------------------------------------

export const RowSingle: Story = {
  name: 'Строка — клик по нумерации',
  ...screenshot,
  render: renderGrid('range-cell'),
  play: async (ctx: PlayCtx) => {
    const { el, p } = await gridPoints(ctx);
    click(el, p.numbering(2));
    await settle();
  },
};

export const RowDragRange: Story = {
  name: 'Строки — диапазон протяжкой по нумерации',
  ...screenshot,
  render: renderGrid('range-cell'),
  play: async (ctx: PlayCtx) => {
    const { el, p } = await gridPoints(ctx);
    drag(el, p.numbering(1), p.numbering(3));
    await settle();
  },
};

export const RowCtrlMulti: Story = {
  name: 'Строки — несмежные через Ctrl',
  ...screenshot,
  render: renderGrid('range-cell'),
  play: async (ctx: PlayCtx) => {
    const { el, p } = await gridPoints(ctx);
    click(el, p.numbering(0), { ctrlKey: true });
    await settle();
    click(el, p.numbering(2), { ctrlKey: true });
    await settle();
  },
};

// --- Сценарии: ЯЧЕЙКИ / ПОДСВЕТКА --------------------------------------------

export const MultiRangeCells: Story = {
  name: 'Ячейки — multi-range через Ctrl',
  ...screenshot,
  render: renderGrid('multi-range-cell'),
  play: async (ctx: PlayCtx) => {
    const { el, p } = await gridPoints(ctx);
    // диапазон протяжкой
    drag(el, p.cell(0, 0), p.cell(1, 1));
    await settle();
    // + ещё одна ячейка через Ctrl (становится активной)
    click(el, p.cell(3, 3), { ctrlKey: true });
    await settle();
  },
};

export const ActiveRowHighlight: Story = {
  name: 'Подсветка активной строки (highlightActiveType=row)',
  ...screenshot,
  render: renderGrid('range-cell', 'row'),
  play: async (ctx: PlayCtx) => {
    const { el, p } = await gridPoints(ctx);
    click(el, p.cell(1, 2));
    await settle();
  },
};
