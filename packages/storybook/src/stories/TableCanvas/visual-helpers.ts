/**
 * Хелперы скриншотных (visual) сторис TableCanvas: поиск канвы грида,
 * вычисление точек клика и синтетические pointer-события.
 *
 * Точки по канвасу берутся ДВУМЯ путями (ref-first с fallback):
 *  1) `refTable.current.getBounds(col, row)` — реальные экранные координаты
 *     (row = -1 — шапка). Сервисные колонки (нумерация, чекбокс) входят в
 *     индекс колонок getBounds — сколько их идёт ПЕРЕД data-колонками,
 *     передаётся в `extraServiceCols` (подбирается по конфигу грида).
 *  2) если glide в headless-раннере не успел смериться и getBounds отдаёт
 *     NaN — детерминированная раскладка из переданных размеров.
 *
 * Колонку нумерации и угол select-all реф адресовать не умеет — для них
 * всегда раскладка.
 */
import { fireEvent, waitFor } from '@storybook/test';
import type { DataEditorRef } from '@ui-kit/components/TableCanvas/TableGlideInstance/type';
import type { RefObject } from 'react';

export type Point = { x: number; y: number };

export type Mods = { ctrlKey?: boolean; shiftKey?: boolean; metaKey?: boolean };

export type GridLayout = {
  /** Высота шапки, px. */
  headerH: number;
  /** Высота строки, px. */
  rowH: number;
  /** Ширина колонки нумерации, px. */
  numW: number;
  /** Ширина data-колонки, px (раскладка предполагает равные колонки). */
  colW: number;
  /** Сервисные колонки в индексе getBounds перед data-колонками: число… */
  extraServiceCols?: number;
  /** …и ширина тех из них, что правее нумерации (для fallback-раскладки), px. */
  extraServiceW?: number;
};

// eslint-disable-next-line no-promise-executor-return
export const settle = () => new Promise((r) => setTimeout(r, 200));

/** Элемент грида, принимающий pointer-события. */
export const getGridTarget = (canvasElement: HTMLElement) =>
  waitFor(() => {
    const el =
      canvasElement.querySelector<HTMLElement>('.dvn-scroller') ??
      canvasElement.querySelector<HTMLElement>(
        '[data-testid="data-grid-canvas"]',
      );
    if (!el) throw new Error('Grid canvas not found');
    return el;
  });

/** Центр по конечному bounds ref'а — или undefined, если координаты NaN. */
const refCenter = (
  ref: RefObject<DataEditorRef>,
  col: number,
  row: number,
): Point | undefined => {
  const b = ref.current?.getBounds(col, row);
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
};

/**
 * Дать grid'у смериться, чтобы ref-getBounds стал конечным. Не падаем, если
 * так и не смерился — сработает fallback на раскладку.
 */
export const gridReady = async (ref: RefObject<DataEditorRef>) => {
  await settle();
  await waitFor(() => refCenter(ref, 0, 0) !== undefined, {
    timeout: 1500,
  }).catch(() => undefined);
};

/** Точки взаимодействия грида: ячейки/шапки ref-first, сервис-зона — раскладка. */
export const makePoints = (
  target: HTMLElement,
  ref: RefObject<DataEditorRef>,
  layout: GridLayout,
) => {
  const r = target.getBoundingClientRect();
  const extraCols = layout.extraServiceCols ?? 0;
  const extraW = layout.extraServiceW ?? 0;
  const dataColCenterX = (col: number) =>
    r.left + layout.numW + extraW + col * layout.colW + layout.colW / 2;
  const headerY = r.top + layout.headerH / 2;
  const rowCenterY = (row: number) =>
    r.top + layout.headerH + row * layout.rowH + layout.rowH / 2;
  return {
    columnHeader: (col: number): Point =>
      refCenter(ref, col + extraCols, -1) ?? {
        x: dataColCenterX(col),
        y: headerY,
      },
    corner: (): Point => ({ x: r.left + layout.numW / 2, y: headerY }),
    numbering: (row: number): Point => ({
      x: r.left + layout.numW / 2,
      y: rowCenterY(row),
    }),
    cell: (col: number, row: number): Point =>
      refCenter(ref, col + extraCols, row) ?? {
        x: dataColCenterX(col),
        y: rowCenterY(row),
      },
  };
};

export const click = (el: HTMLElement, p: Point, mods: Mods = {}) => {
  const base = { clientX: p.x, clientY: p.y, pointerType: 'mouse', ...mods };
  fireEvent.pointerDown(el, { ...base, button: 0, buttons: 1 });
  fireEvent.pointerUp(el, { ...base, button: 0, buttons: 0 });
};

export const drag = (
  el: HTMLElement,
  from: Point,
  to: Point,
  mods: Mods = {},
) => {
  const base = { pointerType: 'mouse', ...mods };
  fireEvent.pointerDown(el, {
    ...base,
    clientX: from.x,
    clientY: from.y,
    button: 0,
    buttons: 1,
  });
  fireEvent.pointerMove(el, {
    ...base,
    clientX: to.x,
    clientY: to.y,
    buttons: 1,
  });
  fireEvent.pointerUp(el, {
    ...base,
    clientX: to.x,
    clientY: to.y,
    button: 0,
    buttons: 0,
  });
};

/** Навести курсор (hover) без кликов — для стори с keepState. */
export const hover = (el: HTMLElement, p: Point) => {
  const base = {
    clientX: p.x,
    clientY: p.y,
    pointerType: 'mouse',
    buttons: 0,
  };
  fireEvent.pointerMove(el, base);
  fireEvent.mouseMove(el, base);
};
