import type { RefObject } from 'react';
import { useEffect, useRef } from 'react';

export interface ActiveRowsState {
  /** Подсвеченная строка (highlightActiveType='row'). */
  activeRow: number | undefined;
  /** Строки выделенного диапазона: по ним считаются признаки active у ячеек. */
  activeRows: ReadonlySet<number>;
}

export interface VisibleRows {
  y: number;
  height: number;
}

/** Строк за пределами видимой области, которые дорисовываем на всякий случай. */
const VISIBLE_MARGIN = 1;
/** Если видимая область ещё неизвестна, дорисовываем не больше стольких строк. */
const MAX_ROWS_WITHOUT_REGION = 200;

/**
 * Строки, у которых сменилась активность: прежняя и новая подсвеченная строка и строки, которые
 * вошли в выделенный диапазон или вышли из него. Строки, оставшиеся в диапазоне, не меняются.
 */
export function changedActiveRows(prev: ActiveRowsState, next: ActiveRowsState): number[] {
  const changed = new Set<number>();
  if (prev.activeRow !== next.activeRow) {
    if (prev.activeRow !== undefined) changed.add(prev.activeRow);
    if (next.activeRow !== undefined) changed.add(next.activeRow);
  }
  if (prev.activeRows !== next.activeRows) {
    prev.activeRows.forEach((row) => {
      if (!next.activeRows.has(row)) changed.add(row);
    });
    next.activeRows.forEach((row) => {
      if (!prev.activeRows.has(row)) changed.add(row);
    });
  }
  return Array.from(changed);
}

/**
 * Из списка строк оставляет видимые с запасом и прилипшие (glide рисует их всегда, но в
 * видимую область не включает); без известной области режет по числу.
 */
export function rowsToRedraw(
  rows: readonly number[],
  visible: VisibleRows | null,
  pinned: readonly number[] = [],
): number[] {
  if (visible === null) return rows.slice(0, MAX_ROWS_WITHOUT_REGION);
  const from = visible.y - VISIBLE_MARGIN;
  const to = visible.y + visible.height + VISIBLE_MARGIN;
  return rows.filter(
    (row) => (row >= from && row <= to) || pinned.includes(row),
  );
}

/**
 * Подсвеченная строка и строки выделенного диапазона читаются при отрисовке из ref, чтобы функции
 * содержимого и темы строк не пересоздавались на каждый клик (иначе glide перерисовывал бы весь
 * экран). Поэтому при их смене прежние и новые строки дорисовываем сами: glide по смене выделения
 * перерисует только ячейки самого выделения, а признаки active у остальных ячеек этих строк (их
 * видит renderCell) и фон подсвеченной строки остались бы прежними.
 *
 * Дорисовываются только видимые строки: невидимые glide рисует заново, когда они появятся.
 */
export function useActiveRowsRedraw({
  activeRow,
  activeRows,
  damageRows,
  visibleRowsRef,
  pinnedRows,
}: ActiveRowsState & {
  damageRows: (...rowIndexes: Array<number | undefined>) => void;
  visibleRowsRef: RefObject<VisibleRows | null>;
  /** Прилипшие строки: дорисовываются и вне видимой области. */
  pinnedRows?: readonly number[];
}) {
  const prevRef = useRef<ActiveRowsState | null>(null);

  useEffect(() => {
    const prev = prevRef.current;
    const next = { activeRow, activeRows };
    prevRef.current = next;
    // Первый кадр glide рисует целиком, дорисовывать нечего.
    if (prev === null) return;
    const changed = changedActiveRows(prev, next);
    if (changed.length === 0) return;
    damageRows(...rowsToRedraw(changed, visibleRowsRef.current, pinnedRows));
  }, [activeRow, activeRows, damageRows, visibleRowsRef, pinnedRows]);
}
