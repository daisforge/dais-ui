import type { DataEditorRef, Rectangle } from '@glideappsfinal/glide-data-grid';
import type { RefObject } from 'react';
import { useEffect, useRef } from 'react';

/** Если видимая область ещё неизвестна, перерисовываем шапки не больше стольких колонок. */
const MAX_COLUMNS_WITHOUT_REGION = 200;

/**
 * Заливает шапку выделенной колонки цветом выделения.
 *
 * Повторяет то, что раньше делал glide по теме колонки: слева остаётся пиксель
 * на линию сетки, наведение затемняет на ступень с той же прозрачностью, с
 * какой glide рисует своё наведение шапки.
 */
export function paintActiveHeaderBackground(
  ctx: CanvasRenderingContext2D,
  rect: Rectangle,
  columnIndex: number,
  hoverAmount: number,
  colors: { active: string; hovered: string },
) {
  const xOffset = columnIndex === 0 ? 0 : 1;
  ctx.fillStyle = colors.active;
  ctx.fillRect(rect.x + xOffset, rect.y, rect.width - xOffset, rect.height);
  if (hoverAmount > 0) {
    ctx.globalAlpha = hoverAmount;
    ctx.fillStyle = colors.hovered;
    ctx.fillRect(rect.x + xOffset, rect.y, rect.width - xOffset, rect.height);
    ctx.globalAlpha = 1;
  }
}

/**
 * Шапки каких колонок перерисовать: закреплённые, прилипшие (они видны и за
 * краем видимой области) и видимые с запасом в одну колонку.
 */
export function headerCellsToRedraw(
  visible: Rectangle | null,
  columnsCount: number,
  freezeColumns: number,
  stickyColumns: readonly number[] = [],
): Array<{ cell: [number, number] }> {
  const cells: Array<{ cell: [number, number] }> = [];
  const pushed = new Set<number>();
  const push = (col: number) => {
    if (col >= 0 && col < columnsCount && !pushed.has(col)) {
      pushed.add(col);
      cells.push({ cell: [col, -1] });
    }
  };
  for (let col = 0; col < Math.min(freezeColumns, columnsCount); col += 1)
    push(col);
  stickyColumns.forEach(push);
  if (visible === null) {
    for (
      let col = freezeColumns;
      col < Math.min(columnsCount, MAX_COLUMNS_WITHOUT_REGION);
      col += 1
    )
      push(col);
    return cells;
  }
  const from = Math.max(freezeColumns, visible.x - 1);
  const to = Math.min(columnsCount - 1, visible.x + visible.width + 1);
  for (let col = from; col <= to; col += 1) push(col);
  return cells;
}

/**
 * Дорисовывает шапки колонок, когда меняется выделение колонок или строк.
 *
 * Зачем. Признак «колонка выделена» шапка читает при отрисовке из ref
 * (drawHeader в TableGlide), а не из темы колонки: иначе на каждый клик
 * пересобирался бы массив колонок, и glide при числе колонок больше ста
 * перерисовывал бы весь экран. Сам glide о смене этого признака не знает,
 * поэтому шапки видимых колонок дорисовываем сами.
 *
 * Когда. При смене выделения ячеек glide и так рисует шапку заново. Хук нужен
 * для выделения колонок по шапке (selectedColumns) и строк по нумерации
 * (hasSelectedRows): о них glide не знает.
 */
export function useActiveHeadersRedraw({
  selectedColumns,
  hasSelectedRows,
  dataEditorRef,
  visibleRegionRef,
  columnsCount,
  freezeColumns,
  stickyColumns,
}: {
  /** Колонки, выделенные по шапке; при смене набора шапки перерисовываются. */
  selectedColumns: ReadonlySet<number>;
  hasSelectedRows: boolean;
  dataEditorRef: RefObject<DataEditorRef | null>;
  visibleRegionRef: RefObject<Rectangle | null>;
  columnsCount: number;
  freezeColumns: number;
  /** Прилипшие колонки: их шапки видны и вне области. */
  stickyColumns?: readonly number[];
}) {
  const firstRunRef = useRef(true);
  // Сами по себе прилипшие колонки дорисовки не вызывают: их читаем при смене
  // выделения, и новый массив с теми же колонками эффект не перезапускает.
  const stickyColumnsRef = useRef(stickyColumns);
  stickyColumnsRef.current = stickyColumns;

  useEffect(() => {
    // Первый кадр glide рисует целиком, дорисовывать нечего.
    if (firstRunRef.current) {
      firstRunRef.current = false;
      return;
    }
    const cells = headerCellsToRedraw(
      visibleRegionRef.current,
      columnsCount,
      freezeColumns,
      stickyColumnsRef.current,
    );
    if (cells.length > 0) dataEditorRef.current?.updateCells?.(cells);
  }, [
    selectedColumns,
    hasSelectedRows,
    dataEditorRef,
    visibleRegionRef,
    columnsCount,
    freezeColumns,
  ]);
}
