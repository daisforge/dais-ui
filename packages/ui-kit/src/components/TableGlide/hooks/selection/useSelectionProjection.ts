import type { GridSelection, Rectangle } from '@daisforge/glide-data-grid';
import isEqual from 'lodash.isequal';
import { type MutableRefObject, useLayoutEffect, useRef } from 'react';

import type { SelectionSnapshot, SelectionView } from '../../types';
import { rectContainsRect } from './rectGeometry';
import { EMPTY_SELECTION, sameSelection } from './useNativeGridSelection';

interface Column {
  id?: string;
  isServiceColumn?: boolean;
}

interface View<R> extends SelectionView<R> {
  columns: readonly Column[];
}

const singleCell = (x: number, y: number): Rectangle => ({
  x,
  y,
  width: 1,
  height: 1,
});

function sameColumns(before: readonly Column[], after: readonly Column[]) {
  return (
    before === after ||
    (before.length === after.length &&
      before.every((col, i) => col.id === after[i]?.id))
  );
}

/** После перестановки рамка может покрывать только прежний набор соседних колонок. */
function moveRange(
  range: Rectangle,
  before: readonly Column[],
  indexes: Map<string, number>,
) {
  let first = Infinity;
  let last = -1;
  for (let i = range.x; i < range.x + range.width; i += 1) {
    const id = before[i]?.id;
    const x = id === undefined ? undefined : indexes.get(id);
    if (x === undefined) return undefined;
    first = Math.min(first, x);
    last = Math.max(last, x);
  }
  if (last - first + 1 !== range.width) return undefined;
  return { ...range, x: first };
}

function sameRowAt<R>(y: number, prev: View<R>, next: View<R>) {
  const before = prev.rows[y];
  const after = next.rows[y];
  if (before === undefined || after === undefined) {
    return (
      y >= prev.rows.length &&
      prev.rows.length === next.rows.length &&
      y <
        prev.rows.length +
          Math.min(prev.summaryCount ?? 0, next.summaryCount ?? 0)
    );
  }
  if (before === after) return true;
  if (!prev.rowKey || !next.rowKey) return next.revision !== undefined;
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
  if (
    range.y < 0 ||
    end > prev.rows.length + (prev.summaryCount ?? 0) ||
    end > next.rows.length + (next.summaryCount ?? 0)
  )
    return false;
  if (
    end > Math.min(prev.rows.length, next.rows.length) &&
    prev.rows.length !== next.rows.length
  )
    return false;
  if (prev.rows === next.rows || trustedOrder) return true;
  for (let y = range.y; y < Math.min(end, prev.rows.length); y += 1) {
    if (!sameRowAt(y, prev, next)) return false;
  }
  return true;
}

function displayHeight<R>(view: SelectionView<R>) {
  return (
    view.rows.length + (view.placeholderCount ?? 0) + (view.summaryCount ?? 0)
  );
}

// undefined оставляет выделение и существующую обработку сдвига служебных колонок в Glide.
export function projectSelection<R>(
  prev: View<R>,
  next: View<R>,
  selection: GridSelection,
  hasAxes: boolean,
  getBlock: (x: number, y: number) => Rectangle,
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
  if (prev.page !== next.page || prev.perPage !== next.perPage)
    return EMPTY_SELECTION;
  const reset =
    (prev.criteria !== next.criteria &&
      !isEqual(prev.criteria, next.criteria)) ||
    prev.revision !== next.revision;
  const columnsChanged = !sameColumns(prev.columns, next.columns);
  const serviceOnly =
    columnsChanged &&
    sameColumns(
      prev.columns.filter((c) => !c.isServiceColumn),
      next.columns.filter((c) => !c.isServiceColumn),
    );
  const current = selection.current;
  const stableRowOrder =
    next.revision !== undefined &&
    prev.revision === next.revision &&
    prev.expandedRows === next.expandedRows;
  if (hasAxes || selection.rows.length || selection.columns.length) {
    if (reset || (columnsChanged && (hasAxes || !serviceOnly)))
      return EMPTY_SELECTION;
    if (prev.rows === next.rows && prev.summaryCount === next.summaryCount)
      return undefined;
    const rowIndexes = selectedRows.length
      ? selectedRows
      : selection.rows.toArray();
    // При Ctrl-выборе строк важны только сами выбранные записи. Колонки
    // охватывают все записи, включая добавленные в конец.
    if (rowIndexes.length)
      return rowIndexes.every((y) => sameRowAt(y, prev, next))
        ? undefined
        : EMPTY_SELECTION;
    return sameRowsInRange(
      { x: 0, y: 0, width: 1, height: prev.rows.length },
      prev,
      next,
      stableRowOrder,
    )
      ? undefined
      : EMPTY_SELECTION;
  }
  if (!current) return undefined;
  if (
    !reset &&
    prev.rows === next.rows &&
    displayHeight(prev) === displayHeight(next) &&
    (!columnsChanged || serviceOnly)
  )
    return undefined;
  const indexes = new Map<string, number>();
  if (columnsChanged)
    next.columns.forEach((col, i) => {
      if (col.id !== undefined) indexes.set(col.id, i);
    });
  const [oldX, oldY] = current.cell;
  const id = prev.columns[oldX]?.id;
  const x = columnsChanged
    ? id === undefined
      ? undefined
      : indexes.get(id)
    : oldX;
  if (x === undefined || !next.columns[x]) return EMPTY_SELECTION;
  // Выбор по заголовку охватывает видимую высоту, включая итоги и заглушки.
  // При дозагрузке сравниваем только записи, а рамку растягиваем до нового конца.
  if (
    !reset &&
    columnsSelected &&
    current.range.y === 0 &&
    current.range.height === displayHeight(prev) &&
    displayHeight(next) > 0 &&
    sameRowsInRange(
      { ...current.range, height: prev.rows.length },
      prev,
      next,
      stableRowOrder,
    )
  ) {
    const height = displayHeight(next);
    if (height === current.range.height && (!columnsChanged || serviceOnly))
      return undefined;
    const range = columnsChanged
      ? moveRange(current.range, prev.columns, indexes)
      : current.range;
    if (range)
      return {
        ...selection,
        current: { ...current, cell: [x, oldY], range: { ...range, height } },
      };
  }
  const ranges = [current.range, ...current.rangeStack];
  const anchorMatches = !stableRowOrder || sameRowAt(oldY, prev, next);
  if (
    !reset &&
    anchorMatches &&
    ranges.every((range) => sameRowsInRange(range, prev, next, stableRowOrder))
  ) {
    if (!columnsChanged || serviceOnly) return undefined;
    const range = moveRange(current.range, prev.columns, indexes);
    if (range) {
      const block =
        oldY < next.rows.length ? getBlock(x, oldY) : singleCell(x, oldY);
      // У выбранной по номеру строки якорь лежит слева от диапазона данных.
      const rowMarker =
        prev.columns[oldX]?.isServiceColumn &&
        id === 'row-markers' &&
        oldX < current.range.x;
      if (rowMarker || rectContainsRect(range, block)) {
        return {
          ...selection,
          current: {
            cell: rowMarker ? [x, oldY] : [block.x, block.y],
            range,
            rangeStack: current.rangeStack.flatMap(
              (r) => moveRange(r, prev.columns, indexes) ?? [],
            ),
          },
        };
      }
    }
  }
  const oldRow = prev.rows[oldY];
  if (oldRow === undefined) return EMPTY_SELECTION;
  let y = oldY;
  if (prev.rows !== next.rows || reset) {
    if (!prev.rowKey || !next.rowKey) return EMPTY_SELECTION;
    const key = prev.rowKey(oldRow);
    if (key == null) return EMPTY_SELECTION;
    const rowKey = next.rowKey;
    const atPosition = next.rows[y];
    if (atPosition === undefined || rowKey(atPosition) !== key) {
      y = next.rows.findIndex((row) => rowKey(row) === key);
    }
    if (y < 0) return EMPTY_SELECTION;
  }
  const range = getBlock(x, y);
  return {
    ...EMPTY_SELECTION,
    current: {
      cell: [range.x, range.y],
      range,
      rangeStack: [],
    },
  };
}

/** Сверяем координаты с последними показанными данными до отрисовки новой рамки. */
export function useSelectionProjection<R>({
  view,
  history,
  selectedRows,
  columnsSelected,
  columns,
  selection,
  controlled,
  hasAxes,
  getBlock,
  apply,
}: {
  view?: SelectionView<R>;
  history?: MutableRefObject<SelectionSnapshot<R> | undefined>;
  selectedRows?: readonly number[];
  columnsSelected?: boolean;
  columns: readonly Column[];
  selection: GridSelection;
  controlled?: GridSelection;
  hasAxes: boolean;
  getBlock: (x: number, y: number) => Rectangle;
  apply: (next: GridSelection, preserveColumnSelection?: boolean) => void;
}) {
  const localHistory = useRef<SelectionSnapshot<R>>();
  const previous = history ?? localHistory;
  const prev = previous.current?.view;
  // При загрузке работаем с последними данными. Новый критерий уже снимает
  // диапазон. Когда придут строки, вновь найдём активную запись по её ключу.
  const next = view && {
    criteria: view.criteria,
    page: view.page,
    perPage: view.perPage,
    revision: view.revision,
    loading: view.loading,
    expandedRows: view.loading && prev ? prev.expandedRows : view.expandedRows,
    rowKey: view.loading && prev ? prev.rowKey : view.rowKey,
    placeholderCount:
      view.loading && prev ? prev.placeholderCount : view.placeholderCount,
    summaryCount: view.loading && prev ? prev.summaryCount : view.summaryCount,
    rows: view.loading && prev ? prev.rows : view.rows,
    columns: view.loading && prev ? prev.columns : columns,
  };
  const previousValue = previous.current?.controlled;
  const externalOverride =
    controlled !== undefined &&
    previousValue !== undefined &&
    !sameSelection(controlled, previousValue);
  const projected =
    prev && next && !externalOverride
      ? projectSelection(
          prev,
          next,
          selection,
          hasAxes,
          next.loading ? singleCell : getBlock,
          selectedRows,
          columnsSelected,
        )
      : undefined;
  const changed =
    projected && (hasAxes || !sameSelection(selection, projected))
      ? projected
      : undefined;

  useLayoutEffect(() => {
    if (!next) return;
    previous.current = { view: next, controlled };
    if (changed)
      apply(
        changed,
        columnsSelected &&
          changed.current?.range.y === 0 &&
          changed.current.range.height === displayHeight(next),
      );
  }, [previous, next, controlled, columnsSelected, changed, apply]);

  // Glide проверяет границы и растягивает рамку объединённой ячейки в эффектах.
  // Передаём ему новые строки и новые координаты уже в одном рендере.
  if (view?.loading) return EMPTY_SELECTION;
  return changed ?? (prev?.loading ? selection : undefined);
}
