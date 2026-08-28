import {
  CompactSelection,
  type GridSelection,
} from '@glideappsfinal/glide-data-grid';
import { useCallback, useEffect, useRef, useState } from 'react';

import type { ProjectionResetSignal } from '../../TableGlide/types';
import type { TransferColumnConfig } from '../feature-cell-transfer/types';
import { resolveBlockOrigin } from '../feature-cell-transfer/utils/resolveBlockOrigin';
import type { ObjectForExtending } from '../types';

// Декларативный сброс нативного выделения при смене «проекции данных» (состав или
// порядок строк): сортировка, фильтры, поиск, группировка, версия данных. Смена
// только фокуса или колонок выделение не сбрасывает. Активная ячейка при возможности
// сохраняется по ключу строки. Все проверки O(1); поиск строки O(n) один раз на
// смену проекции и только если активная ячейка была.

const EMPTY_SELECTION: GridSelection = {
  columns: CompactSelection.empty(),
  rows: CompactSelection.empty(),
  current: undefined,
};

export type { ProjectionResetSignal };

/** Версия данных: явная от потребителя, иначе сам массив строк (сравнение по ссылке). */
export function resolveDataRevision(
  dataRevision: unknown,
  rows: readonly unknown[],
): unknown {
  return dataRevision !== undefined ? dataRevision : rows;
}

/** Изменилась ли проекция: поэлементное сравнение сигналов через ===. */
export function projectionChanged(
  prev: readonly unknown[],
  next: readonly unknown[],
): boolean {
  return prev.length !== next.length || next.some((v, i) => v !== prev[i]);
}

/** Активная ячейка, запомненная по ключам (переживает смену индексов). */
export interface SavedActiveCell {
  rowKey: string | number;
  colKey: string;
}

/**
 * Выделение «одна активная ячейка» для сохранённой ячейки в новой проекции.
 * Null, если строки или колонки больше нет. Ячейка внутри слитого блока
 * нормализуется к его левому верхнему углу.
 */
export function buildRestoredSelection<R extends ObjectForExtending>({
  saved,
  rows,
  renderColKeys,
  columns,
  rowKeyGetter,
}: {
  saved: SavedActiveCell;
  rows: readonly R[];
  renderColKeys: readonly string[];
  columns: readonly TransferColumnConfig[];
  rowKeyGetter: (row: R) => string | number;
}): { selection: GridSelection; cell: readonly [number, number] } | null {
  const rowInd = rows.findIndex((r) => rowKeyGetter(r) === saved.rowKey);
  if (rowInd < 0) return null;
  const colInd = renderColKeys.indexOf(saved.colKey);
  if (colInd < 0) return null;

  const [col, row] = resolveBlockOrigin(colInd, rowInd, columns, rows);
  return {
    cell: [col, row],
    selection: {
      columns: CompactSelection.empty(),
      rows: CompactSelection.empty(),
      current: {
        cell: [col, row],
        range: { x: col, y: row, width: 1, height: 1 },
        rangeStack: [],
      },
    },
  };
}

export function useSelectionProjectionReset<R extends ObjectForExtending>({
  projectionParts,
  controlledSetter,
  rowKeyGetter,
  flattenedRowsRef,
  renderColKeysRef,
  columns,
  scrollTo,
}: {
  /** Сигналы проекции: [sortColumns, filters, searchQuery, groupedCols, revision]. */
  projectionParts: readonly unknown[];
  /** Сеттер controlled-выделения потребителя; undefined в uncontrolled-режиме. */
  controlledSetter?: React.Dispatch<React.SetStateAction<GridSelection>>;
  /** Ключ строки для восстановления активной ячейки; без него — только сброс. */
  rowKeyGetter?: (row: R) => string | number;
  flattenedRowsRef?: { readonly current: readonly R[] };
  renderColKeysRef?: { readonly current: readonly string[] };
  /** Колонки в render-порядке (для нормализации к углу слитого блока). */
  columns?: readonly unknown[];
  scrollTo?: (col: number, row: number) => void;
}): {
  projectionResetSignal: ProjectionResetSignal | undefined;
  /** Тап в onSelectionEmit: запоминает активную ячейку по ключам. */
  captureActiveCell: (selection: GridSelection) => void;
} {
  const prevPartsRef = useRef<readonly unknown[] | null>(null);
  const tokenRef = useRef(0);
  const [projectionResetSignal, setProjectionResetSignal] =
    useState<ProjectionResetSignal>();

  const savedActiveRef = useRef<SavedActiveCell | null>(null);

  // Актуальные значения в ref, чтобы их смена не считалась сменой проекции.
  const controlledSetterRef = useRef(controlledSetter);
  controlledSetterRef.current = controlledSetter;
  const rowKeyGetterRef = useRef(rowKeyGetter);
  rowKeyGetterRef.current = rowKeyGetter;
  const columnsRef = useRef(columns);
  columnsRef.current = columns;
  const scrollToRef = useRef(scrollTo);
  scrollToRef.current = scrollTo;

  const captureActiveCell = useCallback(
    (selection: GridSelection) => {
      const cell = selection.current?.cell;
      const getKey = rowKeyGetterRef.current;
      if (!cell || !getKey) {
        savedActiveRef.current = null;
        return;
      }
      const row = flattenedRowsRef?.current?.[cell[1]];
      const colKey = renderColKeysRef?.current?.[cell[0]];
      savedActiveRef.current =
        row !== undefined && colKey !== undefined
          ? { rowKey: getKey(row), colKey }
          : null;
    },
    [flattenedRowsRef, renderColKeysRef],
  );

  useEffect(() => {
    const prev = prevPartsRef.current;
    prevPartsRef.current = projectionParts;
    // Маунт — не сбрасываем (controlled-выделение могло прийти готовым).
    if (prev === null) return;
    if (!projectionChanged(prev, projectionParts)) return;

    const saved = savedActiveRef.current;
    const getKey = rowKeyGetterRef.current;
    const restored =
      saved && getKey && flattenedRowsRef && renderColKeysRef
        ? buildRestoredSelection({
            saved,
            rows: flattenedRowsRef.current,
            renderColKeys: renderColKeysRef.current,
            columns: (columnsRef.current ??
              []) as readonly TransferColumnConfig[],
            rowKeyGetter: getKey,
          })
        : null;

    const setter = controlledSetterRef.current;
    if (setter) {
      setter(restored?.selection ?? EMPTY_SELECTION);
    } else {
      tokenRef.current += 1;
      setProjectionResetSignal({
        token: tokenRef.current,
        ...(restored && { nextSelection: restored.selection }),
      });
    }
    if (restored) {
      scrollToRef.current?.(restored.cell[0], restored.cell[1]);
    } else {
      savedActiveRef.current = null;
    }
    // Сравнение по элементам массива, identity самого массива не важна.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, projectionParts as unknown[]);

  return { projectionResetSignal, captureActiveCell };
}
