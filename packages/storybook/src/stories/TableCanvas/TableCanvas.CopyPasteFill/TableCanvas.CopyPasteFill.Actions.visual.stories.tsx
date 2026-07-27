/**
 * Визуальные (интеракционные) тесты ДЕЙСТВИЙ: copy / paste на редактируемом
 * гриде. Проверяем, что данные РЕАЛЬНО меняются (скриншот показывает новые
 * значения ячеек).
 *
 * Координаты ячеек берём ЧЕРЕЗ РЕФ (`refTable.getBounds`) — без пиксельных
 * констант и ручной геометрии. Важный нюанс индексации:
 *   getBounds индексирует ВЕСЬ массив колонок, ВКЛЮЧАЯ служебные. TableCanvas
 *   рисует нумерацию как обычную служебную колонку 'row-markers' (нативную фичу
 *   glide rowMarkers не использует → rowMarkerOffset=0). Поэтому:
 *     getBounds(0) = нумерация, getBounds(1) = 1-я data-колонка, и т.д.
 *   → data-колонку d (0-based по данным) адресуем как getBounds(d + LEADING).
 *
 * getBounds в headless может отдать NaN, пока grid не смерил ширину — поэтому
 * `ready()` ждёт, пока координаты станут конечными, а `cellCenter` их проверяет.
 *
 * copy/paste — реальные Ctrl+C / Ctrl+V (keydown на гриде всплывает к контейнеру,
 * где висит наш `useClipboard`-листенер); буфер требует прав — они выданы в
 * `preVisit` (`.storybook/test-runner.ts`). Выделение диапазона — Shift-клик.
 *
 * Fill (протяжка fill-handle) здесь НЕ тестируется: захват canvas-handle drag'ом в
 * headless нестабилен. Логика протяжки покрыта юнит-тестом `applyValuesToRows`.
 */
import type { Meta, StoryObj } from '@storybook/react';
import { fireEvent, waitFor } from '@storybook/test';
import { type ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import type { DataEditorRef } from '@ui-kit/components/TableCanvas/TableGlideInstance/type';
import { createRef, useState } from 'react';

const meta: Meta = {
  title:
    'Локальные компоненты/TableCanvas/Copy-Paste-Fill/Визуальные тесты действий',
  tags: ['!autodocs']
};
export default meta;

type Story = StoryObj;

// Ref таблицы — общий на модуль (render кладёт, play читает).
const tableRef = createRef<DataEditorRef>();

// Число ведущих служебных колонок слева (нумерация). getBounds индексирует весь
// массив колонок, поэтому data-колонку смещаем на LEADING (см. шапку файла).
const LEADING = 1;

type ActionRow = { id: number; name: string; qty: number; status: string };

// Индексы DATA-колонок (0-based по данным): id=0, name=1, qty=2, status=3.
const NAME = 1;
const STATUS = 3;

const INITIAL_ROWS: ActionRow[] = [
  { id: 1, name: 'Alpha', qty: 10, status: 'open' },
  { id: 2, name: 'Beta', qty: 20, status: 'closed' },
  { id: 3, name: 'Gamma', qty: 30, status: 'open' },
  { id: 4, name: 'Delta', qty: 40, status: 'closed' }
];

// Ширины — конфиг рендера грида (для читаемого скрина); в вычислении координат НЕ
// участвуют — координаты берём из getBounds.
const COLS: readonly ColumnConfig<ActionRow>[] = [
  { key: 'id', name: 'ID', width: 80 }, // readonly (нет editingCell)
  {
    key: 'name',
    name: 'Name',
    width: 180,
    editingCell: { component: 'inputString' }
  },
  {
    key: 'qty',
    name: 'Qty',
    width: 120,
    editingCell: { component: 'inputNumber' },
    contentFormat: 'number'
  },
  {
    key: 'status',
    name: 'Status',
    width: 160,
    editingCell: { component: 'inputString' }
  }
];

/** Редактируемый грид со стейтом строк — paste его меняет, он ререндерится. */
function EditableActionsGrid({
  withBroadcast = false
}: {
  withBroadcast?: boolean;
}) {
  const [rows, setRows] = useState<ActionRow[]>(INITIAL_ROWS);
  return (
    <div style={{ padding: 8 }}>
      <TableCanvas
        refTable={tableRef}
        tableConfig={{
          containerStyle: { height: '260px', width: '640px' },
          rowSize: { default: 'medium', showInControl: true },
          rowMarkers: { startIndex: 1 },
          cellsSelection: { mode: 'range-cell' },
          // broadcast по умолчанию ВЫКЛЮЧЕН — для тиража 1 ячейки на диапазон включаем явно.
          ...(withBroadcast
            ? { cellTransfer: { paste: { broadcast: true } } }
            : {}),
          editing: {
            defaultEnabled: true,
            onRowsChange: setRows,
            rowKeyGetter: (r) => `${r.id}`
          }
        }}
        columnConfig={COLS}
        rows={rows}
      />
    </div>
  );
}

// --- Хелперы -----------------------------------------------------------------
// eslint-disable-next-line no-promise-executor-return
const settle = () => new Promise((r) => setTimeout(r, 250));

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

/**
 * Центр DATA-ячейки через ref. `+LEADING` пропускает служебную колонку нумерации.
 * undefined — если grid ещё не смерил ширину (getBounds отдаёт NaN).
 */
function cellCenter(dataCol: number, row: number): Point | undefined {
  const b = tableRef.current?.getBounds(dataCol + LEADING, row);
  if (!b || !Number.isFinite(b.x) || !Number.isFinite(b.y) || b.width <= 0) {
    return undefined;
  }
  return { x: b.x + b.width / 2, y: b.y + b.height / 2 };
}

/** Центр ячейки, гарантированно готовый (зовётся после ready). */
function point(dataCol: number, row: number): Point {
  const p = cellCenter(dataCol, row);
  if (!p) throw new Error(`getBounds не готов: col=${dataCol}, row=${row}`);
  return p;
}

/** Ждём, пока grid смерится и getBounds начнёт отдавать конечные координаты. */
async function ready(): Promise<void> {
  await settle();
  await waitFor(() => cellCenter(NAME, 0) !== undefined, { timeout: 2000 });
}

function click(
  el: HTMLElement,
  p: Point,
  mods: { shiftKey?: boolean; ctrlKey?: boolean } = {}
) {
  const base = { clientX: p.x, clientY: p.y, pointerType: 'mouse', ...mods };
  fireEvent.pointerDown(el, { ...base, button: 0, buttons: 1 });
  fireEvent.pointerUp(el, { ...base, button: 0, buttons: 0 });
}

/** Хоткей на грид — всплывёт к контейнеру, где наш useClipboard-листенер. */
function pressHotkey(el: HTMLElement, code: 'KeyC' | 'KeyV') {
  const key = code === 'KeyC' ? 'c' : 'v';
  fireEvent.keyDown(el, { key, code, ctrlKey: true });
  fireEvent.keyUp(el, { key, code, ctrlKey: true });
}

const screenshot = { parameters: { screenshot: { keepState: true } } };

// --- Сценарии ----------------------------------------------------------------

export const CopyPasteCell: Story = {
  name: 'Copy/Paste — одна ячейка',
  ...screenshot,
  render: () => <EditableActionsGrid />,
  play: async ({ canvasElement }) => {
    const el = await getGridTarget(canvasElement);
    await ready();
    // источник: Name строки 0 ('Alpha')
    click(el, point(NAME, 0));
    await settle();
    pressHotkey(el, 'KeyC');
    await settle();
    // цель: Name строки 2 ('Gamma') → станет 'Alpha'
    click(el, point(NAME, 2));
    await settle();
    pressHotkey(el, 'KeyV');
    await settle();
  }
};

export const CopyPasteBroadcastRange: Story = {
  name: 'Copy/Paste — одна ячейка на диапазон (broadcast)',
  ...screenshot,
  render: () => <EditableActionsGrid withBroadcast />,
  play: async ({ canvasElement }) => {
    const el = await getGridTarget(canvasElement);
    await ready();
    // источник: Status строки 0 ('open')
    click(el, point(STATUS, 0));
    await settle();
    pressHotkey(el, 'KeyC');
    await settle();
    // цель: диапазон Status строк 1..3 через Shift-клик (детерминированнее drag).
    click(el, point(STATUS, 1));
    await settle();
    click(el, point(STATUS, 3), { shiftKey: true });
    await settle();
    pressHotkey(el, 'KeyV');
    await settle();
  }
};
