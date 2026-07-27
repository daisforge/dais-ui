/* eslint-disable no-restricted-syntax */
/* eslint-disable no-continue */
/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { Layout } from 'react-grid-layout';

export type Size = { w: number; h: number };

function ensureRows(rows: boolean[][], upto: number, cols: number) {
  while (rows.length < upto) rows.push(Array(cols).fill(false));
}

function rowHasFree(rows: boolean[][], y: number, cols: number) {
  ensureRows(rows, y + 1, cols);
  const rowY = rows[y];
  return rowY ? rowY.some((c) => !c) : false;
}

function firstFreeInRow(
  rows: boolean[][],
  y: number,
  cols: number,
  fromX = 0
): number {
  ensureRows(rows, y + 1, cols);
  const row = rows[y];
  if (!row) return -1;
  for (let x = Math.max(0, fromX); x < cols; x++) {
    if (x >= row.length) return -1;
    if (!row[x]) return x;
  }
  return -1;
}

function fits(
  rows: boolean[][],
  x: number,
  y: number,
  w: number,
  h: number,
  cols: number
) {
  ensureRows(rows, y + h, cols);
  for (let yy = y; yy < y + h; yy++) {
    const row = rows[yy];
    if (!row) return false;
    for (let xx = x; xx < x + w; xx++) {
      if (xx >= cols || row[xx]) return false;
    }
  }
  return true;
}

function occupy(
  rows: boolean[][],
  x: number,
  y: number,
  w: number,
  h: number,
  cols: number
) {
  ensureRows(rows, y + h, cols);
  for (let yy = y; yy < y + h; yy++) {
    const row = rows[yy];
    if (!row) continue;
    for (let xx = x; xx < x + w; xx++) {
      if (xx < cols) row[xx] = true;
    }
  }
}

function nextFreeRowBelow(rows: boolean[][], fromY: number, cols: number) {
  let y = Math.max(0, fromY);
  for (;;) {
    if (rowHasFree(rows, y, cols)) return y;
    y++;
  }
}

/**
 * Жёсткая укладка «по очереди»:
 *  - чтение слева-направо/сверху-вниз НЕ нарушается
 *  - после того как ушли на более низкую строку, назад в верхние ряды НЕ возвращаемся
 *  - дырки в более ранних строках могут остаться (это «нормальная пустота» по ТЗ)
 */
export function packByItemsOrder(
  order: string[],
  sizes: Record<string, Size>,
  cols: number,
  isResizable: boolean
): Layout[] {
  const placed: Layout[] = [];
  const grid: boolean[][] = [];

  // "Граница чтения": самая ранняя незавершённая строка и позиция в ней
  let fy = 0; // пограничный ряд
  let fx = 0; // пограничная область в пределах fy

  for (const id of order) {
    const sizeEntry = sizes[id];
    if (!sizeEntry) {
      continue; // пропускаем этот элемент дальше, если размер не найден
    }

    const base = sizeEntry;
    const w = Math.max(1, Math.min(base.w, cols));
    const h = Math.max(1, base.h);

    let chosen: { x: number; y: number } | null = null;

    // A) пробуем в текущей "границе" — только строка fy и только начиная с fx
    for (let x = fx; x <= cols - w; x++) {
      if (fits(grid, x, fy, w, h, cols)) {
        chosen = { x, y: fy };
        break;
      }
    }

    // B) если не влезло, ищем ТОЛЬКО ниже fy
    if (!chosen) {
      let y = fy + 1;
      // идём вниз, ищем первый же fit
      for (;;) {
        for (let x = 0; x <= cols - w; x++) {
          if (fits(grid, x, y, w, h, cols)) {
            chosen = { x, y };
            break;
          }
        }
        if (chosen) break;
        y++;
      }
    }

    const { x, y } = chosen!;
    occupy(grid, x, y, w, h, cols);
    placed.push({
      i: id,
      x,
      y,
      w,
      h,
      minW: 1,
      maxW: cols,
      minH: 1,
      isResizable,
      static: false
    });

    // === Обновляем "границу"
    if (y > fy) {
      // мы спустились ниже — больше НИКОГДА не возвращаемся наверх
      fy = y;
      fx = Math.max(0, firstFreeInRow(grid, fy, cols, 0));
      if (fx === -1) {
        // строка fy забита — перенесём границу на следующую свободную строку
        fy = nextFreeRowBelow(grid, fy, cols);
        fx = firstFreeInRow(grid, fy, cols, 0);
      }
    } else {
      // y === fy: двигаем fx вправо (минимальный свободный x >= x+w)
      const nextFx = firstFreeInRow(grid, fy, cols, x + w);
      if (nextFx === -1) {
        // строка fy завершена — переносим границу на первую строку ниже с дыркой
        fy = nextFreeRowBelow(grid, fy, cols);
        fx = firstFreeInRow(grid, fy, cols, 0);
      } else {
        fx = nextFx;
      }
    }
  }

  return placed;
}

/** Порядок чтения по итоговому layout (y, затем x) */
export function readingOrder(layout: Layout[]): string[] {
  return [...layout].sort((a, b) => a.y - b.y || a.x - b.x).map((l) => l.i);
}
