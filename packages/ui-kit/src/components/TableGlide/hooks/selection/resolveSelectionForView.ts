import type { GridSelection, Rectangle } from '@daisforge/glide-data-grid';
import isEqual from 'lodash.isequal';
import type { SelectionSnapshot } from '../../types';
import { EMPTY_SELECTION } from './gridSelection';

type View<R> = SelectionSnapshot<R>['view'];

export function queryChanged<R>(prev: View<R>, next: View<R>) {
  return (
    prev.page !== next.page ||
    prev.perPage !== next.perPage ||
    prev.revision !== next.revision ||
    !isEqual(prev.criteria, next.criteria)
  );
}

function sameColumns(
  before: View<unknown>['columns'],
  after: View<unknown>['columns'],
) {
  return (
    before === after ||
    (before.length === after.length &&
      before.every((col, i) => col.id === after[i]?.id))
  );
}

function summaryStart<R>(view: View<R>) {
  return view.rows.length + (view.placeholderCount ?? 0);
}

export function sameRowAt<R>(y: number, prev: View<R>, next: View<R>) {
  const before = prev.rows[y];
  const after = next.rows[y];
  if (before === undefined || after === undefined) {
    return (
      y >= summaryStart(prev) &&
      summaryStart(prev) === summaryStart(next) &&
      y <
        summaryStart(prev) +
          Math.min(prev.summaryCount ?? 0, next.summaryCount ?? 0)
    );
  }
  if (before === after) return true;
  if (!prev.rowKey || !next.rowKey) return true;
  const key = prev.rowKey(before);
  return key != null && key === next.rowKey(after);
}

/** Итоговые строки имеют постоянный номер внутри блока итогов. */
function sameRowsInRange<R>(
  range: Rectangle,
  prev: View<R>,
  next: View<R>,
  trustedOrder: boolean,
) {
  const end = range.y + range.height;
  if (range.y < 0 || end > displayHeight(prev) || end > displayHeight(next))
    return false;
  if (end > Math.min(prev.rows.length, next.rows.length)) {
    // Диапазон, заходящий в итоги, остаётся на месте лишь при том же
    // начале блока итогов. Заглушки между данными и итогами не являются записями.
    if (summaryStart(prev) !== summaryStart(next)) return false;
    if (
      range.y < summaryStart(prev) &&
      ((prev.placeholderCount ?? 0) > 0 || (next.placeholderCount ?? 0) > 0)
    )
      return false;
  }
  if (prev.rows === next.rows || trustedOrder || (!prev.rowKey && !next.rowKey))
    return true;
  for (let y = range.y; y < Math.min(end, prev.rows.length); y += 1) {
    if (!sameRowAt(y, prev, next)) return false;
  }
  return true;
}

export function displayHeight<R>(view: View<R>) {
  return (
    view.rows.length + (view.placeholderCount ?? 0) + (view.summaryCount ?? 0)
  );
}

/** Проверяем только прежние позиции. Устаревшее выделение сбрасывается целиком. */
export function resolveSelectionForView<R>(
  prev: View<R>,
  next: View<R>,
  selection: GridSelection,
  hasAxes: boolean,
  selectedRows: readonly number[] = [],
  columnsSelected = false,
): GridSelection | undefined {
  if (
    !selection.current &&
    !hasAxes &&
    !selection.rows.length &&
    !selection.columns.length
  )
    return undefined;
  if (queryChanged(prev, next)) return EMPTY_SELECTION;
  if (!sameColumns(prev.columns, next.columns)) {
    // Сдвиг ведущих служебных колонок обрабатывает useGridSelectionState.
    if (
      hasAxes ||
      !sameColumns(
        prev.columns.filter((c) => !c.isServiceColumn),
        next.columns.filter((c) => !c.isServiceColumn),
      )
    )
      return EMPTY_SELECTION;
  }
  if (hasAxes || selection.rows.length || selection.columns.length) {
    const indexes = selectedRows.length
      ? selectedRows
      : selection.rows.toArray();
    return indexes.every((y) => sameRowAt(y, prev, next))
      ? undefined
      : EMPTY_SELECTION;
  }
  const current = selection.current;
  if (!current) return undefined;
  if (
    columnsSelected &&
    current.range.y === 0 &&
    current.range.height === displayHeight(prev)
  ) {
    const height = displayHeight(next);
    if (!height) return EMPTY_SELECTION;
    return height === current.range.height
      ? undefined
      : {
          ...selection,
          current: { ...current, range: { ...current.range, height } },
        };
  }
  const trustedOrder =
    next.revision !== undefined &&
    prev.revision === next.revision &&
    prev.expandedRows === next.expandedRows;
  if (!sameRowAt(current.cell[1], prev, next)) return EMPTY_SELECTION;
  return [current.range, ...current.rangeStack].every((r) =>
    sameRowsInRange(r, prev, next, trustedOrder),
  )
    ? undefined
    : EMPTY_SELECTION;
}
