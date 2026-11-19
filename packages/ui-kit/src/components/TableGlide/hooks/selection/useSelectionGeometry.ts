import type {
  GridSelection,
  Item,
  Rectangle,
} from '@glideappsfinal/glide-data-grid';
import { useMemo } from 'react';

import type {
  ColumnGlideLast,
  ObjectForExtending,
  CellsSelectionMode,
} from '../../types';
import type { RowRange } from '../visibleRows';
import {
  clampRectToDataColumns,
  findFirstDataColumnIndex,
  rectContainsCell,
} from './rectGeometry';

interface UseSelectionGeometryParams<
  R extends ObjectForExtending,
  SR = unknown
> {
  columns: readonly ColumnGlideLast<R, SR>[];
  selection: GridSelection;
  cellsSelectionMode: CellsSelectionMode;
  checkboxSelectedRowIndexes?: ReadonlySet<number>;
}

export function useSelectionGeometry<
  R extends ObjectForExtending,
  SR = unknown
>({
  columns,
  selection,
  cellsSelectionMode,
  checkboxSelectedRowIndexes,
}: UseSelectionGeometryParams<R, SR>) {
  return useMemo(() => {
    // Хук переводит нативный glide selection (current) в "геометрию рендера":
    // где начинается data-area, какие строки/колонки считаются active (для
    // затемнения шапки/нумерации), и какой прямоугольник отдать дальше в
    // highlightRegions. Активность считается ОТ СЕЛЕКТИНГА (cellsSelectionMode), а
    // не от highlightActiveType (подсветка строки — отдельная визуальная ось).
    const current = selection.current;
    const firstDataColumnIndex = findFirstDataColumnIndex(columns);

    const hasCurrentSelection =
      cellsSelectionMode !== 'disabled' && current !== undefined;

    if (!hasCurrentSelection || !current) {
      return {
        hasAnyActiveSelection: false,
        firstDataColumnIndex,
        leadingServiceColumnsCount: firstDataColumnIndex,
        activeRowsRange: undefined as RowRange | undefined,
        activeDataRange: undefined as Rectangle | undefined,
        soloDataCell: undefined as Item | undefined,
        isSingleCellCustomHighlight: false,
        outlineRange: undefined as Rectangle | undefined,
        isServiceColumn: (colInd: number) => !!columns[colInd]?.isServiceColumn,
        isActiveRow: (_rowInd: number) => false,
        isCheckboxSelectedRow: (rowInd: number) =>
          checkboxSelectedRowIndexes?.has(rowInd) ?? false,
        isActiveDataCell: (_colInd: number, _rowInd: number) => false,
        isActiveHeaderColumn: (_colInd: number) => false,
      };
    }

    // Активная геометрия — ВСЕГДА из current.range, клампленного к данным
    // (в cell-режиме range = 1x1; выделение строки по нумерации задаёт диапазон
    // на всю ширину данных и должно затемнять шапку/нумерацию независимо от
    // cellsSelectionMode). Сервисные колонки в active range не входят.
    const activeDataRange = clampRectToDataColumns(
      current.range,
      firstDataColumnIndex
    );

    const hasAnyActiveSelection = activeDataRange !== undefined;
    // Свою заливку+обводку рисуем ТОЛЬКО для одиночной ячейки в cell-режиме.
    // Любой реальный диапазон (range-cell, строка по нумерации) рисует glide
    // нативно — мы добавляем лишь затемнение шапки/нумерации.
    const isSingleCellCustomHighlight =
      cellsSelectionMode === 'cell' &&
      activeDataRange !== undefined &&
      activeDataRange.width === 1 &&
      activeDataRange.height === 1;

    if (!hasAnyActiveSelection) {
      return {
        hasAnyActiveSelection: false,
        firstDataColumnIndex,
        leadingServiceColumnsCount: firstDataColumnIndex,
        activeRowsRange: undefined as RowRange | undefined,
        activeDataRange: undefined as Rectangle | undefined,
        soloDataCell: undefined as Item | undefined,
        isSingleCellCustomHighlight: false,
        outlineRange: undefined as Rectangle | undefined,
        isServiceColumn: (colInd: number) => !!columns[colInd]?.isServiceColumn,
        isActiveRow: (_rowInd: number) => false,
        isCheckboxSelectedRow: (rowInd: number) =>
          checkboxSelectedRowIndexes?.has(rowInd) ?? false,
        isActiveDataCell: (_colInd: number, _rowInd: number) => false,
        isActiveHeaderColumn: (_colInd: number) => false,
      };
    }

    // Границы, а не набор строк: диапазон бывает на всю колонку в миллион строк
    const activeRowsRange: RowRange | undefined =
      activeDataRange.height > 0
        ? {
            from: activeDataRange.y,
            to: activeDataRange.y + activeDataRange.height - 1,
          }
        : undefined;

    // Координаты выбранной ячейки, если выделена ровно одна ячейка
    // (иначе undefined). Нужно, например, чтобы на выбранной строке не
    // подкрашивать кликнутую ячейку цветом выделения — только рамка.
    const soloDataCell: Item | undefined =
      activeDataRange.width === 1 && activeDataRange.height === 1
        ? [activeDataRange.x, activeDataRange.y]
        : undefined;

    return {
      hasAnyActiveSelection,
      firstDataColumnIndex,
      leadingServiceColumnsCount: firstDataColumnIndex,
      activeRowsRange,
      activeDataRange,
      soloDataCell,
      // Флаг: рисуем ли свою заливку/обводку (только одиночная ячейка в cell).
      isSingleCellCustomHighlight,
      // outline рисуем сами только для одиночной ячейки; реальные диапазоны
      // (range-cell, строка по нумерации) обводит glide нативно.
      outlineRange: isSingleCellCustomHighlight ? activeDataRange : undefined,
      isServiceColumn: (colInd: number) => !!columns[colInd]?.isServiceColumn,
      isActiveRow: (rowInd: number) =>
        activeRowsRange !== undefined &&
        rowInd >= activeRowsRange.from &&
        rowInd <= activeRowsRange.to,
      isCheckboxSelectedRow: (rowInd: number) =>
        checkboxSelectedRowIndexes?.has(rowInd) ?? false,
      isActiveDataCell: (colInd: number, rowInd: number) =>
        rectContainsCell(activeDataRange, colInd, rowInd),
      isActiveHeaderColumn: (colInd: number) => {
        const column = columns[colInd];

        if (!column) {
          return false;
        }

        return (
          colInd >= activeDataRange.x &&
          colInd < activeDataRange.x + activeDataRange.width
        );
      },
    };
  }, [columns, cellsSelectionMode, checkboxSelectedRowIndexes, selection]);
}
