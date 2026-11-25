import type { GridSelection, Rectangle } from '@daisforge/glide-data-grid';
import { type MutableRefObject, useLayoutEffect, useMemo, useRef } from 'react';

import type {
  CellsSelectionMode,
  SelectionSnapshot,
  SelectionView,
} from '../../types';
import {
  resolveSelectionForView,
  sameRowAt,
  queryChanged,
  displayHeight,
} from './resolveSelectionForView';
import { EMPTY_SELECTION, sameSelection } from './gridSelection';

/** Сверяем координаты с последними показанными данными до отрисовки новой рамки. */
export function useSelectionOnViewChange<R>({
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
  columns: SelectionSnapshot<R>['view']['columns'];
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
  // диапазон, даже если новые строки ещё не пришли.
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
      ? resolveSelectionForView(
          prev,
          next,
          selection,
          hasAxes,
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
        queryChanged(old, next) ||
        (old.rows !== next.rows && !sameRowAt(activeRow, old, next))
      ) {
        commitActiveRow(undefined);
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
