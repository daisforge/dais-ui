/**
 * Визуальные (скриншотные) + интеракционные тесты закрепления столбцов через
 * контрл-блок.
 *
 * Адресация колонок (важно!):
 *   getBounds индексирует ВЕСЬ массив колонок в ТЕКУЩЕМ порядке, включая служебную
 *   нумерацию (getBounds(0)=нумерация). Закреплённые колонки уезжают влево (сразу
 *   после нумерации), поэтому статичный data-индекс ломается, когда что-то уже
 *   закреплено. `visualIndex(key, pinned)` считает актуальный визуальный индекс
 *   data-колонки по ключу с учётом закреплённых, а `headerPointByKey` даёт центр
 *   её шапки через ref (getBounds(visualIndex + LEADING), шапка = row -1).
 *
 * Мультивыбор — через Shift (смежный диапазон): в headless синтетический ctrl-клик
 * НЕ накапливает выбор колонок (второй клик не видит первый — артефакт fireEvent +
 * тайминга ре-рендера; в реальном юзе ctrl-мульти работает). Shift-диапазон в этом
 * харнессе стабилен. Логика pin нескольких ключей покрыта юнит-тестом pinColumns.
 *
 * Кнопка закрепления в контрл-блоке (SplitIconButton): якорь — data-testid на левой
 * иконке (через controlBlock.pinningMenu.iconDomMetadata). Левая иконка = тоглер
 * pin/unpin ВЫБРАННЫХ; шеврон рядом открывает дропдаун («Открепить всё» /
 * «Закрепить столбцы»). Дропдаун Plasma рендерится в портал ВНЕ #storybook-root
 * (test-runner снимает только его), поэтому открытый дропдаун проверяем не скрином,
 * а функционально (наличие пунктов).
 *
 * Данные детерминированы: createRows (seeded-random, сид 42) — стабильные строки.
 */
import { createRows, type Row } from '@df-storybook/data/tableData';
import type { Meta, StoryObj } from '@storybook/react';
import { fireEvent, userEvent, waitFor, within } from '@storybook/test';
import { type ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import type { DataEditorRef } from '@ui-kit/components/TableCanvas/TableGlideInstance/type';
import { createRef } from 'react';

const meta: Meta = {
  title:
    'Локальные компоненты/TableCanvas/ColumnsControl/Визуальные тесты закрепления',
  tags: ['!autodocs']
};
export default meta;

type Story = StoryObj;

// Ref таблицы — общий на модуль, читаем из play. Пробрасываем в refTable.
const tableRef = createRef<DataEditorRef>();

// data-testid левой иконки-пина (проброшен через pinningMenu.iconDomMetadata).
const PIN_TESTID = 'pinning-icon';

// Число ведущих служебных колонок слева (нумерация): getBounds(d + LEADING).
const LEADING = 1;

// Ключи DATA-колонок в ИСХОДНОМ порядке (task=Title, issueType=Type).
const DATA_KEYS = ['id', 'task', 'priority', 'issueType', 'complete'] as const;

// Детерминированные строки (seeded-random в createRows) — первые 6.
const ROWS: Row[] = createRows().slice(0, 6);

const COLS: readonly ColumnConfig<Row>[] = [
  { key: 'id', name: 'ID', width: 140 },
  { key: 'task', name: 'Title', width: 140 },
  { key: 'priority', name: 'Priority', width: 140 },
  { key: 'issueType', name: 'Type', width: 140 },
  { key: 'complete', name: '%', width: 140 }
];

/** Общий рендер: фиксированный грид, закрепление + выделение столбцов. */
const renderGrid =
  (pinnedDefault: string[] = []) =>
  () =>
    (
      <div style={{ padding: 8 }}>
        <TableCanvas
          refTable={tableRef}
          tableConfig={{
            containerStyle: { height: '360px', width: '900px' },
            rowSize: { default: 'medium', showInControl: false },
            rowMarkers: { startIndex: 1 },
            cellsSelection: {
              mode: 'range-cell',
              enableColumnSelection: true,
              enableRowSelection: true,
              enableSelectAll: true
            },
            columnsControl: {
              enable: true,
              pinning: true,
              pinnedDefault
            },
            controlBlock: {
              pinningMenu: {
                iconDomMetadata: {
                  dataAttributes: { 'data-testid': PIN_TESTID }
                }
              }
            }
          }}
          columnConfig={COLS}
          rows={ROWS}
        />
      </div>
    );

// --- Хелперы взаимодействия с канвасом (только ref, без раскладки) ------------
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

/** Центр ячейки/шапки по ref-getBounds — или undefined, если координаты NaN. */
function refCenter(col: number, row: number): Point | undefined {
  const b = tableRef.current?.getBounds(col, row);
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

/** Ждём, пока grid смерится и getBounds шапки станет конечным. */
async function ready(): Promise<void> {
  await settle();
  await waitFor(() => refCenter(LEADING, -1) !== undefined, { timeout: 3000 });
}

/**
 * Визуальный индекс data-колонки (0-based) с учётом закреплённых: закреплённые
 * (в порядке pinned) уезжают влево, затем остальные в исходном порядке.
 */
function visualIndex(key: string, pinned: string[]): number {
  const pin = pinned.filter((k) =>
    (DATA_KEYS as readonly string[]).includes(k)
  );
  const rest = DATA_KEYS.filter((k) => !pin.includes(k));
  return [...pin, ...rest].indexOf(key);
}

/** Центр шапки колонки по ключу с учётом текущего закрепления. Падает, если grid не готов. */
function headerPointByKey(key: string, pinned: string[] = []): Point {
  const p = refCenter(visualIndex(key, pinned) + LEADING, -1);
  if (!p) {
    throw new Error(`getBounds не готов для шапки '${key}' — grid не смерился`);
  }
  return p;
}

type Mods = { ctrlKey?: boolean; shiftKey?: boolean; metaKey?: boolean };

function click(el: HTMLElement, p: Point, mods: Mods = {}) {
  const base = { clientX: p.x, clientY: p.y, pointerType: 'mouse', ...mods };
  fireEvent.pointerDown(el, { ...base, button: 0, buttons: 1 });
  fireEvent.pointerUp(el, { ...base, button: 0, buttons: 0 });
}

/** Выделить один столбец по ключу (нативный single-select). */
async function selectColumn(
  el: HTMLElement,
  key: string,
  pinned: string[] = []
): Promise<void> {
  click(el, headerPointByKey(key, pinned));
  await settle();
}

/** Расширить выделение Shift-кликом до столбца по ключу (смежный диапазон). */
async function shiftSelectTo(
  el: HTMLElement,
  key: string,
  pinned: string[] = []
): Promise<void> {
  click(el, headerPointByKey(key, pinned), { shiftKey: true });
  await settle();
}

// --- DOM-хелперы для кнопки/меню закрепления в контрл-блоке -------------------

/** Ждём появления левой иконки закрепления (контрл-блок рендерится асинхронно). */
async function findPinIcon(): Promise<HTMLElement> {
  return waitFor(
    () => {
      const el = document.querySelector<HTMLElement>(
        `[data-testid="${PIN_TESTID}"]`
      );
      if (!el) throw new Error('Кнопка закрепления не найдена (data-testid)');
      return el;
    },
    { timeout: 3000 }
  );
}

/** Клик по ЛЕВОЙ иконке закрепления — тоглер pin/unpin выбранных столбцов. */
async function clickPinIcon(): Promise<void> {
  const iconBtn = await findPinIcon();
  fireEvent.click(iconBtn);
  await settle();
}

/**
 * Открывает дропдаун закрепления: от левой иконки поднимаемся до Root
 * SplitIconButton (первый предок с ≥2 кнопками) и кликаем шеврон (последнюю).
 */
async function openPinningMenu(): Promise<void> {
  const iconBtn = await findPinIcon();
  let root: HTMLElement | null = iconBtn;
  while (root && root.querySelectorAll('button').length < 2) {
    root = root.parentElement;
  }
  const buttons = root?.querySelectorAll<HTMLElement>('button');
  const chevron = buttons?.[buttons.length - 1];
  if (!chevron) throw new Error('Шеврон меню закрепления не найден');
  fireEvent.click(chevron);
  await settle();
}

/** Клик по пункту меню закрепления (в портале дропдауна) — по видимому тексту. */
async function clickMenuItem(label: string): Promise<void> {
  const item = await within(document.body).findByText(label);
  await userEvent.click(item);
  await settle();
}

const screenshot = { parameters: { screenshot: { keepState: true } } };

// --- Сценарии ----------------------------------------------------------------

/** 1. Меню открывается и содержит оба нативных пункта (функционально, без скрина). */
export const DropdownOpens: Story = {
  name: 'Меню закрепления — открывается с нужными пунктами',
  parameters: { screenshot: { skip: true } },
  render: renderGrid(),
  play: async ({ canvasElement }) => {
    await getGridTarget(canvasElement);
    await ready();
    await settle();
    // Холодный старт первой стори: контрл-блок дорисовывается/ре-рендерится и может
    // закрыть только что открытое меню. Переоткрываем до 3 попыток, пока пункты не
    // окажутся в портале (у остальных стори прогрев даёт предшествующий selectColumn).
    // eslint-disable-next-line no-restricted-syntax
    for (let attempt = 0; attempt < 3; attempt += 1) {
      // eslint-disable-next-line no-await-in-loop
      await openPinningMenu();
      try {
        // eslint-disable-next-line no-await-in-loop
        await within(document.body).findByText('Закрепить столбцы', undefined, {
          timeout: 1500
        });
        // eslint-disable-next-line no-await-in-loop
        await within(document.body).findByText('Открепить всё');
        return;
      } catch {
        // eslint-disable-next-line no-await-in-loop
        await settle();
      }
    }
    throw new Error('Меню закрепления не открылось с пунктами (3 попытки)');
  }
};

/** 2. Один столбец → «Закрепить столбцы» через дропдаун. */
export const PinSingleViaDropdown: Story = {
  name: 'Один столбец (Title) → «Закрепить столбцы» через дропдаун',
  ...screenshot,
  render: renderGrid(),
  play: async ({ canvasElement }) => {
    const el = await getGridTarget(canvasElement);
    await ready();
    await selectColumn(el, 'task');
    await openPinningMenu();
    await clickMenuItem('Закрепить столбцы');
  }
};

/** 3. Один столбец → закрепить кликом по ЛЕВОЙ иконке (не через дропдаун). */
export const PinViaLeftIcon: Story = {
  name: 'Один столбец (Title) → закрепить кликом по левой иконке',
  ...screenshot,
  render: renderGrid(),
  play: async ({ canvasElement }) => {
    const el = await getGridTarget(canvasElement);
    await ready();
    await selectColumn(el, 'task');
    await clickPinIcon();
  }
};

/** 4. Диапазон столбцов (Shift) → «Закрепить столбцы»; выделение сохраняется. */
export const PinRangeViaDropdown: Story = {
  name: 'Shift-диапазон Title..Type → «Закрепить столбцы» (выделение сохраняется)',
  ...screenshot,
  render: renderGrid(),
  play: async ({ canvasElement }) => {
    const el = await getGridTarget(canvasElement);
    await ready();
    // Title → Shift-клик Type = смежный диапазон Title, Priority, Type.
    await selectColumn(el, 'task');
    await shiftSelectTo(el, 'issueType');
    await openPinningMenu();
    await clickMenuItem('Закрепить столбцы');
  }
};

/** 5. Закрепили левой иконкой, затем ей же открепили (тоглер pin→unpin). */
export const UnpinViaLeftIcon: Story = {
  name: 'Левая иконка: закрепить выбранный, затем открепить (тоглер)',
  ...screenshot,
  render: renderGrid(),
  play: async ({ canvasElement }) => {
    const el = await getGridTarget(canvasElement);
    await ready();
    await selectColumn(el, 'task');
    await clickPinIcon(); // action=pin → Title закреплён
    await clickPinIcon(); // тот же выбор уже закреплён → action=unpin → откреплён
  }
};

/** 6. «Открепить всё» через дропдаун — снимает закрепление со всех. */
export const UnpinAllViaDropdown: Story = {
  name: '«Открепить всё» через дропдаун (из закреплённых по умолчанию)',
  ...screenshot,
  render: renderGrid(['task', 'issueType']),
  play: async ({ canvasElement }) => {
    await getGridTarget(canvasElement);
    await ready();
    await openPinningMenu();
    await clickMenuItem('Открепить всё');
  }
};

/** 7. Добавление к уже закреплённому: task закреплён, выделяем Type и закрепляем — оба. */
export const AddPinToExisting: Story = {
  name: 'Уже закреплён Title, выделяем Type → «Закрепить» (закреплены оба)',
  ...screenshot,
  render: renderGrid(['task']),
  play: async ({ canvasElement }) => {
    const el = await getGridTarget(canvasElement);
    await ready();
    // task уже закреплён (уехал влево) → issueType адресуем с учётом этого.
    await selectColumn(el, 'issueType', ['task']);
    await openPinningMenu();
    await clickMenuItem('Закрепить столбцы');
  }
};

/** 8. Выборочное открепление: из двух закреплённых открепляем только выбранный. */
export const UnpinSelectedKeepsOthers: Story = {
  name: 'Два закреплены, выделен один Title → левая иконка открепляет только его (Type остаётся)',
  ...screenshot,
  render: renderGrid(['task', 'issueType']),
  play: async ({ canvasElement }) => {
    const el = await getGridTarget(canvasElement);
    await ready();
    // Оба закреплены → task на визуальной позиции 0.
    await selectColumn(el, 'task', ['task', 'issueType']);
    await clickPinIcon(); // выбран закреплённый → action=unpin → откреплён только task
  }
};
