import type { GridSelection, Rectangle } from '@daisforge/glide-data-grid';
import isEqual from 'lodash.isequal';
import { type MutableRefObject, useLayoutEffect, useMemo, useRef } from 'react';

import type {
  CellsSelectionMode,
  SelectionSnapshot,
  SelectionView,
} from '../../types';
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

function summaryStart<R>(view: SelectionView<R>) {
  return view.rows.length + (view.placeholderCount ?? 0);
}

function sameRowAt<R>(y: number, prev: View<R>, next: View<R>) {
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
    if (columnsChanged && (hasAxes || !serviceOnly)) return EMPTY_SELECTION;
    const rowIndexes = selectedRows.length
      ? selectedRows
      : selection.rows.toArray();
    // При Ctrl-выборе строк важны только сами выбранные записи. Колонки
    // охватывают все записи, включая добавленные в конец.
    if (!rowIndexes.length) return undefined;
    if (reset) return EMPTY_SELECTION;
    return rowIndexes.every((y) => sameRowAt(y, prev, next))
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
  // Сортировка и фильтр меняют строки под рамкой. Колонки остаются выбранными.
  if (
    columnsSelected &&
    current.range.y === 0 &&
    current.range.height === displayHeight(prev)
  ) {
    const height = displayHeight(next);
    if (!height) return EMPTY_SELECTION;
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
  // Итоги следуют за данными. Сохраняем номер строки внутри блока итогов.
  const summaryIndex = oldY - summaryStart(prev);
  if (summaryIndex >= 0 && summaryIndex < (prev.summaryCount ?? 0)) {
    if (summaryIndex >= (next.summaryCount ?? 0)) return EMPTY_SELECTION;
    const y = summaryStart(next) + summaryIndex;
    return {
      ...EMPTY_SELECTION,
      current: { cell: [x, y], range: singleCell(x, y), rangeStack: [] },
    };
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
  mode,
  activeRow,
  commitActiveRow,
  columns,
  selection,
  controlled,
  hasAxes,
  getBlock,
  apply,
}: {
  view?: SelectionView<R>;
  history?: MutableRefObject<SelectionSnapshot<R> | undefined>;
  mode?: CellsSelectionMode;
  activeRow?: number;
  commitActiveRow?: (row: number | undefined) => void;
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
  const data = view?.loading && prev ? prev : view;
  const visibleColumns = view?.loading && prev ? prev.columns : columns;
  const { rows, rowKey, expandedRows, placeholderCount, summaryCount } =
    data ?? {};
  const { criteria, page, perPage, revision, loading } = view ?? {};
  const next = useMemo(
    () =>
      rows && criteria && loading !== undefined
        ? {
            rows,
            rowKey,
            expandedRows,
            placeholderCount,
            summaryCount,
            criteria,
            page,
            perPage,
            revision,
            loading,
            columns: visibleColumns,
          }
        : undefined,
    [
      rows,
      rowKey,
      expandedRows,
      placeholderCount,
      summaryCount,
      criteria,
      page,
      perPage,
      revision,
      loading,
      visibleColumns,
    ],
  );
  const previousValue = previous.current?.controlled;
  const externalOverride =
    controlled !== undefined &&
    previousValue !== undefined &&
    !sameSelection(controlled, previousValue);
  const projected =
    prev && next && prev !== next && !externalOverride
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
  let normalized = projected;
  if (prev && mode !== previous.current?.mode) {
    const current = (projected ?? selection).current;
    if (mode === 'disabled' || (mode === 'cell' && hasAxes))
      normalized = EMPTY_SELECTION;
    else if (current && mode === 'cell') {
      const [x, y] = current.cell;
      normalized = {
        ...EMPTY_SELECTION,
        current: { cell: current.cell, range: getBlock(x, y), rangeStack: [] },
      };
    } else if (current?.rangeStack.length && mode === 'range-cell') {
      normalized = {
        ...(projected ?? selection),
        current: { ...current, rangeStack: [] },
      };
    }
  }
  const changed =
    normalized && (hasAxes || !sameSelection(selection, normalized))
      ? normalized
      : undefined;

  useLayoutEffect(() => {
    if (!next) return;
    // Читаем только последнее зафиксированное представление. Прерванный рендер
    // не меняет историю. Повторный layout-эффект для того же снимка ничего не отправляет.
    if (
      previous.current?.view === next &&
      previous.current.controlled === controlled &&
      previous.current.mode === mode &&
      previous.current.activeRow === activeRow
    )
      return;
    const last = previous.current;
    previous.current = { view: next, controlled, mode, activeRow };
    if (
      activeRow !== undefined &&
      last &&
      last.view !== next &&
      last.activeRow === activeRow &&
      commitActiveRow
    ) {
      const old = last.view;
      if (
        old.page !== next.page ||
        old.perPage !== next.perPage ||
        (!next.rowKey &&
          (old.revision !== next.revision ||
            !isEqual(old.criteria, next.criteria)))
      ) {
        commitActiveRow(undefined);
      } else if (old.rows !== next.rows && !sameRowAt(activeRow, old, next)) {
        const record = old.rows[activeRow];
        const key = record === undefined ? undefined : old.rowKey?.(record);
        const index =
          key == null
            ? -1
            : next.rows.findIndex((row) => next.rowKey?.(row) === key);
        commitActiveRow(index < 0 ? undefined : index);
      }
    }
    if (changed)
      apply(
        changed,
        columnsSelected &&
          changed.current?.range.y === 0 &&
          changed.current.range.height === displayHeight(next),
      );
  }, [
    previous,
    next,
    controlled,
    columnsSelected,
    changed,
    apply,
    activeRow,
    commitActiveRow,
    mode,
  ]);

  // Glide проверяет границы и растягивает рамку объединённой ячейки в эффектах.
  // Передаём ему новые строки и новые координаты уже в одном рендере.
  if (view?.loading) return EMPTY_SELECTION;
  return changed ?? (prev?.loading ? selection : undefined);
}
