/**
 * Визуальные (скриншотные) тесты выделения/подсветки на детерминированном гриде.
 *
 * Точки клика по канвасу берём ДВУМЯ путями (ref-first с fallback):
 *   1) через ref таблицы — `refTable.current.getBounds(dataCol, row)` даёт реальные
 *      экранные координаты ячейки/шапки. Индексация — по DATA-колонкам (реф сам
 *      прибавляет rowMarkerOffset), шапка — row = -1.
 *   2) если glide в headless-раннере не успел смерить ширину и getBounds отдаёт
 *      НЕконечные (NaN) координаты — падаем на детерминированную раскладку:
 *        HEADER_H=33, ROW_H=32 (rowSize 'medium'), NUM_W=32, COL_W=140.
 *
 * Колонку нумерации / угол select-all реф адресовать не умеет (getBounds всегда
 * прибавляет оффсет ряд-маркера) — для них всегда раскладка.
 *
 * Каждая стори доводит грид до ОДНОГО состояния (одна стори = один скриншот).
 * `parameters.screenshot.keepState` — не сбрасывать состояние/мышь перед скрином.
 * Эталонные PNG генерятся первым прогоном test-runner (`-u`) на стороне CI.
 */
import { createRows, type Row } from '@df-storybook/data/tableData';
import type { Meta, StoryObj } from '@storybook/react';
import { fireEvent, waitFor } from '@storybook/test';
import {
  type CellsSelectionMode,
  type ColumnConfig,
  type HighlightActiveType,
  TableCanvas
} from '@ui-kit/components/TableCanvas';
import type { DataEditorRef } from '@ui-kit/components/TableCanvas/TableGlideInstance/type';
import { createRef } from 'react';

const meta: Meta = {
  title:
    'Локальные компоненты/TableCanvas/Copy-Paste-Fill/Визуальные тесты выделения',
  tags: ['!autodocs']
};
export default meta;

type Story = StoryObj;

// Ref таблицы — общий на модуль, читаем из play. Пробрасываем в TableCanvas.refTable.
const tableRef = createRef<DataEditorRef>();

// --- Детерминированная раскладка (fallback, когда ref-getBounds недоступен) ---
const HEADER_H = 33;
const ROW_H = 32; // rowSize 'medium'
const NUM_W = 32; // ширина колонки нумерации при rowSize 'medium'
const COL_W = 140;

const ROWS: Row[] = createRows().slice(0, 6);

const COLS: readonly ColumnConfig<Row>[] = [
  { key: 'id', name: 'ID', width: COL_W },
  { key: 'task', name: 'Title', width: COL_W },
  { key: 'priority', name: 'Priority', width: COL_W },
  { key: 'issueType', name: 'Type', width: COL_W },
  { key: 'complete', name: '%', width: COL_W }
];

/** Общий рендер: фиксированный грид, режимы задаются на сценарий. */
const renderGrid =
  (
    selectionMode: CellsSelectionMode,
    highlightActiveType: HighlightActiveType = 'disabled'
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
              enableSelectAll: true
            },
            highlightActiveType
          }}
          columnConfig={COLS}
          rows={ROWS}
        />
      </div>
    );

// --- Хелперы взаимодействия с канвасом ---------------------------------------
// eslint-disable-next-line no-promise-executor-return
const settle = () => new Promise((r) => setTimeout(r, 200));

async function getGridTarget(canvasElement: HTMLElement): Promise<HTMLElement> {
  return waitFor(() => {
    const el =
      canvasElement.querySelector<HTMLElement>('.dvn-scroller') ??
      canvasElement.querySelector<HTMLElement>(
        '[data-testid="data-grid-canvas"]'
      );
    if (!el) throw new Error('Grid canvas not found');
    return el;
  });
}

type Point = { x: number; y: number };

/** Центр по конечному bounds ref'а — или undefined, если координаты NaN. */
function refCenter(dataCol: number, row: number): Point | undefined {
  const b = tableRef.current?.getBounds(dataCol, row);
  if (
    b &&
    Number.isFinite(b.x) &&
    Number.isFinite(b.y) &&
    b.width > 0 &&
    b.height > 0
  ) {
    return { x: b.x + b.width / 2, y: b.y + b.height / 2 };
  }
  return undefined;
}

/**
 * Дать grid'у смериться, чтобы ref-getBounds стал конечным. Не падаем, если так и
 * не смерился — на клике сработает fallback на раскладку.
 */
async function ready(el: HTMLElement): Promise<void> {
  await settle();
  await waitFor(() => refCenter(0, 0) !== undefined, { timeout: 1500 }).catch(
    () => undefined
  );
  // eslint-disable-next-line no-void
  void el;
}

/**
 * Точки взаимодействия: ячейки/шапки — ref-first (реальные координаты), с
 * fallback на детерминированную раскладку. Нумерация/угол — только раскладка.
 */
function points(target: HTMLElement) {
  const r = target.getBoundingClientRect();
  const dataColCenterX = (col: number) =>
    r.left + NUM_W + col * COL_W + COL_W / 2;
  const headerY = r.top + HEADER_H / 2;
  const rowCenterY = (row: number) =>
    r.top + HEADER_H + row * ROW_H + ROW_H / 2;
  return {
    columnHeader: (col: number): Point =>
      refCenter(col, -1) ?? { x: dataColCenterX(col), y: headerY },
    // Левый верхний угол — шапка колонки нумерации (select-all): только раскладка.
    corner: (): Point => ({ x: r.left + NUM_W / 2, y: headerY }),
    // Колонка нумерации: ref её не адресует — только раскладка.
    numbering: (row: number): Point => ({
      x: r.left + NUM_W / 2,
      y: rowCenterY(row)
    }),
    cell: (col: number, row: number): Point =>
      refCenter(col, row) ?? { x: dataColCenterX(col), y: rowCenterY(row) }
  };
}

type Mods = { ctrlKey?: boolean; shiftKey?: boolean; metaKey?: boolean };

function click(el: HTMLElement, p: Point, mods: Mods = {}) {
  const base = { clientX: p.x, clientY: p.y, pointerType: 'mouse', ...mods };
  fireEvent.pointerDown(el, { ...base, button: 0, buttons: 1 });
  fireEvent.pointerUp(el, { ...base, button: 0, buttons: 0 });
}

function drag(el: HTMLElement, from: Point, to: Point, mods: Mods = {}) {
  const base = { pointerType: 'mouse', ...mods };
  fireEvent.pointerDown(el, {
    ...base,
    clientX: from.x,
    clientY: from.y,
    button: 0,
    buttons: 1
  });
  fireEvent.pointerMove(el, {
    ...base,
    clientX: to.x,
    clientY: to.y,
    buttons: 1
  });
  fireEvent.pointerUp(el, {
    ...base,
    clientX: to.x,
    clientY: to.y,
    button: 0,
    buttons: 0
  });
}

const screenshot = { parameters: { screenshot: { keepState: true } } };

// --- Сценарии: КОЛОНКИ --------------------------------------------------------

export const ColumnSingle: Story = {
  name: 'Колонка — одиночный клик по шапке',
  ...screenshot,
  render: renderGrid('range-cell'),
  play: async ({ canvasElement }) => {
    const el = await getGridTarget(canvasElement);
    await ready(el);
    click(el, points(el).columnHeader(1));
    await settle();
  }
};

export const ColumnShiftRange: Story = {
  name: 'Колонки — диапазон через Shift',
  ...screenshot,
  render: renderGrid('range-cell'),
  play: async ({ canvasElement }) => {
    const el = await getGridTarget(canvasElement);
    await ready(el);
    const p = points(el);
    click(el, p.columnHeader(1));
    await settle();
    click(el, p.columnHeader(3), { shiftKey: true });
    await settle();
  }
};

export const ColumnCtrlMulti: Story = {
  name: 'Колонки — несмежные через Ctrl',
  ...screenshot,
  render: renderGrid('range-cell'),
  play: async ({ canvasElement }) => {
    const el = await getGridTarget(canvasElement);
    await ready(el);
    const p = points(el);
    click(el, p.columnHeader(1), { ctrlKey: true });
    await settle();
    click(el, p.columnHeader(3), { ctrlKey: true });
    await settle();
  }
};

export const SelectAll: Story = {
  name: 'Вся таблица — клик по углу нумерации',
  ...screenshot,
  render: renderGrid('range-cell'),
  play: async ({ canvasElement }) => {
    const el = await getGridTarget(canvasElement);
    await ready(el);
    click(el, points(el).corner());
    await settle();
  }
};

// --- Сценарии: СТРОКИ ---------------------------------------------------------

export const RowSingle: Story = {
  name: 'Строка — клик по нумерации',
  ...screenshot,
  render: renderGrid('range-cell'),
  play: async ({ canvasElement }) => {
    const el = await getGridTarget(canvasElement);
    await ready(el);
    click(el, points(el).numbering(2));
    await settle();
  }
};

export const RowDragRange: Story = {
  name: 'Строки — диапазон протяжкой по нумерации',
  ...screenshot,
  render: renderGrid('range-cell'),
  play: async ({ canvasElement }) => {
    const el = await getGridTarget(canvasElement);
    await ready(el);
    const p = points(el);
    drag(el, p.numbering(1), p.numbering(3));
    await settle();
  }
};

export const RowCtrlMulti: Story = {
  name: 'Строки — несмежные через Ctrl',
  ...screenshot,
  render: renderGrid('range-cell'),
  play: async ({ canvasElement }) => {
    const el = await getGridTarget(canvasElement);
    await ready(el);
    const p = points(el);
    click(el, p.numbering(0), { ctrlKey: true });
    await settle();
    click(el, p.numbering(2), { ctrlKey: true });
    await settle();
  }
};

// --- Сценарии: ЯЧЕЙКИ / ПОДСВЕТКА --------------------------------------------

export const MultiRangeCells: Story = {
  name: 'Ячейки — multi-range через Ctrl',
  ...screenshot,
  render: renderGrid('multi-range-cell'),
  play: async ({ canvasElement }) => {
    const el = await getGridTarget(canvasElement);
    await ready(el);
    const p = points(el);
    // диапазон протяжкой
    drag(el, p.cell(0, 0), p.cell(1, 1));
    await settle();
    // + ещё одна ячейка через Ctrl (становится активной)
    click(el, p.cell(3, 3), { ctrlKey: true });
    await settle();
  }
};

export const ActiveRowHighlight: Story = {
  name: 'Подсветка активной строки (highlightActiveType=row)',
  ...screenshot,
  render: renderGrid('range-cell', 'row'),
  play: async ({ canvasElement }) => {
    const el = await getGridTarget(canvasElement);
    await ready(el);
    click(el, points(el).cell(1, 2));
    await settle();
  }
};
