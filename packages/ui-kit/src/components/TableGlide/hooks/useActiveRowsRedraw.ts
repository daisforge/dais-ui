import type { RefObject } from 'react';
import { useEffect, useRef } from 'react';

import {
  MAX_ROWS_WITHOUT_REGION,
  type RowRange,
  type VisibleRegion,
} from './visibleRows';

export interface ActiveRowsState {
  /** Подсвеченная строка (highlightActiveType='row'). */
  activeRow: number | undefined;
  /** Строки выделенного диапазона: по ним считаются признаки active у ячеек. */
  activeRowsRange: RowRange | undefined;
}

/** Строк за пределами видимой области, которые дорисовываем на всякий случай. */
const VISIBLE_MARGIN = 1;

/** Строки a, которых нет в b: ноль, один или два куска. */
const rangeMinus = (a: RowRange, b: RowRange | undefined): RowRange[] => {
  if (!b || b.to < a.from || b.from > a.to) return [a];
  const parts: RowRange[] = [];
  if (a.from < b.from) parts.push({ from: a.from, to: b.from - 1 });
  if (a.to > b.to) parts.push({ from: b.to + 1, to: a.to });
  return parts;
};

/**
 * Строки, у которых сменилось выделение: их нужно дорисовать.
 *
 * Это прежняя и новая подсвеченная строка и строки, которые вошли в выделенный
 * диапазон или вышли из него. Строки, оставшиеся в диапазоне, не меняются.
 * Считается по границам диапазонов, без обхода их строк: при протяжке на всю
 * колонку в миллион строк каждый шаг стоит столько же, сколько на десяти
 * строках.
 */
export function changedActiveRanges(
  prev: ActiveRowsState,
  next: ActiveRowsState,
): RowRange[] {
  const changed: RowRange[] = [];
  if (prev.activeRow !== next.activeRow) {
    if (prev.activeRow !== undefined) {
      changed.push({ from: prev.activeRow, to: prev.activeRow });
    }
    if (next.activeRow !== undefined) {
      changed.push({ from: next.activeRow, to: next.activeRow });
    }
  }
  const { activeRowsRange: a } = prev;
  const { activeRowsRange: b } = next;
  if (a?.from !== b?.from || a?.to !== b?.to) {
    if (a) changed.push(...rangeMinus(a, b));
    if (b) changed.push(...rangeMinus(b, a));
  }
  return changed;
}

/**
 * Какие из изменившихся строк дорисовать: только те, что видны на экране.
 *
 * Берутся видимые строки с запасом в одну строку и прилипшие (glide рисует их
 * всегда, но в видимую область не включает). Пока видимая область неизвестна,
 * не больше первых MAX_ROWS_WITHOUT_REGION строк. Результат по возрастанию, без
 * повторов.
 */
export function rowsToRedraw(
  ranges: readonly RowRange[],
  visible: VisibleRegion | null,
  pinned: readonly number[] = [],
): number[] {
  const rows = new Set<number>();
  if (visible === null) {
    ranges.forEach(({ from, to }) => {
      for (
        let row = from;
        row <= to && rows.size < MAX_ROWS_WITHOUT_REGION;
        row += 1
      ) {
        rows.add(row);
      }
    });
  } else {
    const top = visible.y - VISIBLE_MARGIN;
    const bottom = visible.y + visible.height + VISIBLE_MARGIN;
    ranges.forEach(({ from, to }) => {
      for (
        let row = Math.max(from, top);
        row <= Math.min(to, bottom);
        row += 1
      ) {
        rows.add(row);
      }
      pinned.forEach((row) => {
        if (row >= from && row <= to) rows.add(row);
      });
    });
  }
  return Array.from(rows).sort((x, y) => x - y);
}

/**
 * Дорисовывает строки, у которых сменилось выделение или подсветка строки.
 *
 * Зачем. Подсвеченная строка и строки выделенного диапазона читаются при
 * отрисовке из ref, чтобы функции содержимого и темы строк не пересоздавались
 * на каждый клик (иначе glide перерисовывал бы весь экран). Сам glide по смене
 * выделения перерисует только ячейки самого выделения. Признаки active у
 * остальных ячеек этих строк (их видит renderCell) и фон подсвеченной строки
 * остались бы прежними, поэтому эти строки дорисовываем сами.
 *
 * Дорисовываются только видимые строки: невидимые glide нарисует заново, когда
 * они появятся.
 */
export function useActiveRowsRedraw({
  activeRow,
  activeRowsRange,
  damageRows,
  visibleRowsRef,
  pinnedRows,
}: ActiveRowsState & {
  damageRows: (...rowIndexes: Array<number | undefined>) => void;
  visibleRowsRef: RefObject<VisibleRegion | null>;
  /** Прилипшие строки: дорисовываются и вне видимой области. */
  pinnedRows?: readonly number[];
}) {
  const prevRef = useRef<ActiveRowsState | null>(null);
  // Сами по себе прилипшие строки дорисовки не вызывают: их читаем при смене
  // активности, и новый массив с теми же строками эффект не перезапускает.
  const pinnedRowsRef = useRef(pinnedRows);
  pinnedRowsRef.current = pinnedRows;
  const rangeFrom = activeRowsRange?.from;
  const rangeTo = activeRowsRange?.to;

  useEffect(() => {
    const prev = prevRef.current;
    const next: ActiveRowsState = {
      activeRow,
      activeRowsRange:
        rangeFrom === undefined || rangeTo === undefined
          ? undefined
          : { from: rangeFrom, to: rangeTo },
    };
    prevRef.current = next;
    // Первый кадр glide рисует целиком, дорисовывать нечего.
    if (prev === null) return;
    const changed = changedActiveRanges(prev, next);
    if (changed.length === 0) return;
    const rows = rowsToRedraw(
      changed,
      visibleRowsRef.current,
      pinnedRowsRef.current,
    );
    if (rows.length > 0) damageRows(...rows);
  }, [activeRow, rangeFrom, rangeTo, damageRows, visibleRowsRef]);
}
