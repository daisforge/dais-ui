import type { GridSelection } from '@glideappsfinal/glide-data-grid';

import type { Rectangle, TransferColumnConfig } from '../types';
import { buildActiveDataRange } from './buildActiveDataRange';
import { findFirstDataCol } from './findFirstDataCol';
import { rangeToIndexes } from './rangeToIndexes';
import {
  getSelectedDataColumnIndexes,
  getSelectedRowIndexes,
  hasColumnsOnlySelection,
  hasRowsOnlySelection,
  isContiguousIndexes,
} from './selectionTargets';

/** Какая ось выделения стала источником переноса данных. */
export type TransferTargetKind = 'cells' | 'cell-ranges' | 'columns' | 'rows';

/** Клампит прямоугольник к data-колонкам (без сервисных). null — если пустой. */
function clampRectToData(
  rect: Rectangle,
  firstDataCol: number,
): Rectangle | null {
  const x = Math.max(rect.x, firstDataCol);
  const width = rect.x + rect.width - x;
  if (width <= 0 || rect.height <= 0) return null;
  return { x, y: rect.y, width, height: rect.height };
}

/**
 * Нормализованное описание выделения для copy/paste/fill: к чему сводятся
 * любые оси (ячейки `current.range`, колонки по шапке, строки по нумерации).
 *
 * Ключевая идея — единый формат «таргетов» как ПЕРЕСЕЧЕНИЕ явных списков
 * `rowTargets × colTargets`. Смежные диапазоны разворачиваются в
 * последовательные индексы, несмежные (Ctrl) приходят как есть.
 */
export interface TransferTargets {
  kind: TransferTargetKind;
  /** Прямоугольник-обёртка выделения (якорь + габариты), уже без сервисных колонок. */
  range: Rectangle;
  /** Явные индексы целевых строк (по возрастанию). */
  rowTargets: number[];
  /** Явные индексы целевых колонок данных (по возрастанию). */
  colTargets: number[];
  /** Смежны ли строки (нет разрывов) — паста использует для broadcast. */
  contiguousRows: boolean;
  /** Смежны ли колонки (нет разрывов) — паста использует для broadcast. */
  contiguousCols: boolean;
}

/**
 * Результат классификации выделения:
 * - `ok` — есть что переносить (`targets`);
 * - `empty` — переносить нечего (нет выделения);
 * - `unsupported` — выделение есть, но перенос по нему не поддержан (напр.
 *   multi-range 2D-разброс) → повод для нотификации об ошибке.
 */
export type ResolveTransferResult =
  | { status: 'ok'; targets: TransferTargets }
  | { status: 'empty' }
  | { status: 'unsupported'; reason: 'scattered-2d' };

const EMPTY: ResolveTransferResult = { status: 'empty' };
const ok = (targets: TransferTargets): ResolveTransferResult => ({
  status: 'ok',
  targets,
});

/**
 * Классифицирует выделение. Приоритет осей: ячейки (`current`) → колонки → строки.
 */
export function resolveTransferTargets(
  selection: GridSelection | null,
  columns: readonly TransferColumnConfig[],
  rowCount: number,
): ResolveTransferResult {
  if (!selection) return EMPTY;

  const firstDataCol = findFirstDataCol(columns);

  // 1) Ячейки — нативный current.range (+ rangeStack при multi-range-cell).
  if (selection.current) {
    const stack = selection.current.rangeStack ?? [];

    // Multi-rect (Ctrl копит несколько диапазонов). Переносим ТОЛЬКО если все
    // выбранные ячейки лежат в ОДНОЙ колонке или в ОДНОЙ строке — тогда
    // промежутки между ними схлопываются (буфер кладётся по выбранным подряд).
    // 2D-разброс (и по строкам, и по колонкам) не поддержан → unsupported.
    if (stack.length > 0) {
      const rects = [selection.current.range, ...stack]
        .map((r) => clampRectToData(r, firstDataCol))
        .filter((r): r is Rectangle => r !== null);
      if (rects.length === 0) return EMPTY;

      const colSet = new Set<number>();
      const rowSet = new Set<number>();
      for (const r of rects) {
        for (let c = r.x; c < r.x + r.width; c += 1) colSet.add(c);
        for (let rw = r.y; rw < r.y + r.height; rw += 1) rowSet.add(rw);
      }
      const cols = [...colSet].sort((a, b) => a - b);
      const rows = [...rowSet].sort((a, b) => a - b);
      const minCol = cols[0];
      const minRow = rows[0];
      if (minCol === undefined || minRow === undefined) return EMPTY;

      if (cols.length === 1) {
        // Единственная колонка → строки схлопываются (пишем по выбранным подряд).
        return ok({
          kind: 'cell-ranges',
          range: { x: minCol, y: minRow, width: 1, height: rows.length },
          rowTargets: rows,
          colTargets: cols,
          contiguousRows: isContiguousIndexes(rows),
          contiguousCols: true,
        });
      }
      if (rows.length === 1) {
        // Единственная строка → колонки схлопываются.
        return ok({
          kind: 'cell-ranges',
          range: { x: minCol, y: minRow, width: cols.length, height: 1 },
          rowTargets: rows,
          colTargets: cols,
          contiguousRows: true,
          contiguousCols: isContiguousIndexes(cols),
        });
      }
      // 2D-выбор: если объединение прямоугольников — СПЛОШНОЙ прямоугольник (все
      // ячейки bounding-box покрыты, без дыр), копируем как единый диапазон. Так
      // Ctrl-навыделянный замкнутый прямоугольник ведёт себя как обычный range.
      const maxCol = cols[cols.length - 1] as number;
      const maxRow = rows[rows.length - 1] as number;
      const bboxWidth = maxCol - minCol + 1;
      const bboxHeight = maxRow - minRow + 1;
      const coveredCells = new Set<string>();
      for (const r of rects) {
        for (let c = r.x; c < r.x + r.width; c += 1) {
          for (let rw = r.y; rw < r.y + r.height; rw += 1) {
            coveredCells.add(`${c},${rw}`);
          }
        }
      }
      if (coveredCells.size === bboxWidth * bboxHeight) {
        return ok({
          kind: 'cells',
          range: { x: minCol, y: minRow, width: bboxWidth, height: bboxHeight },
          rowTargets: rangeToIndexes(minRow, bboxHeight),
          colTargets: rangeToIndexes(minCol, bboxWidth),
          contiguousRows: true,
          contiguousCols: true,
        });
      }

      // Иначе разрозненный 2D-выбор с дырами — перенос не поддержан.
      return { status: 'unsupported', reason: 'scattered-2d' };
    }

    const range = buildActiveDataRange(selection, firstDataCol);
    if (!range) return EMPTY;
    return ok({
      kind: 'cells',
      range,
      rowTargets: rangeToIndexes(range.y, range.height),
      colTargets: rangeToIndexes(range.x, range.width),
      contiguousRows: true,
      contiguousCols: true,
    });
  }

  // 2) Колонки — выбор по шапке (selection.columns). Вставка/копирование по всем
  //    строкам данных, по выбранным колонкам.
  if (hasColumnsOnlySelection(selection)) {
    const colIndexes = getSelectedDataColumnIndexes(selection, columns);
    const firstCol = colIndexes[0];
    if (firstCol === undefined) return EMPTY;
    return ok({
      kind: 'columns',
      range: { x: firstCol, y: 0, width: colIndexes.length, height: rowCount },
      rowTargets: rangeToIndexes(0, rowCount),
      colTargets: colIndexes,
      contiguousRows: true,
      contiguousCols: isContiguousIndexes(colIndexes),
    });
  }

  // 3) Строки — выбор по нумерации (selection.rows). По всем колонкам данных, по
  //    выбранным строкам.
  if (hasRowsOnlySelection(selection)) {
    const rowIndexes = getSelectedRowIndexes(selection);
    const firstRow = rowIndexes[0];
    const dataWidth = columns.length - firstDataCol;
    if (firstRow === undefined || dataWidth <= 0) return EMPTY;
    return ok({
      kind: 'rows',
      range: {
        x: firstDataCol,
        y: firstRow,
        width: dataWidth,
        height: rowIndexes.length,
      },
      rowTargets: rowIndexes,
      colTargets: rangeToIndexes(firstDataCol, dataWidth),
      contiguousRows: isContiguousIndexes(rowIndexes),
      contiguousCols: true,
    });
  }

  return EMPTY;
}
