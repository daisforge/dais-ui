/* eslint-disable no-continue */
import { getTreeIdAndLvlOfRow } from '../../feature-tree/handlers';
import type { ObjectForExtending } from '../../types';
import type { CellTransferCellInfo, TransferColumnConfig } from '../types';
import { getCellText } from './getCellText';

/**
 * Собирает двумерную матрицу текстов по ЯВНЫМ спискам целевых строк и колонок
 * (`rowTargets` × `colTargets`), а не по прямоугольнику. Это range-cell-готовый
 * примитив: списки индексов могут быть несмежными (Ctrl-выбор колонок/строк, в
 * будущем — отдельные ячейки).
 *
 * Индексы, которых нет в `rows`/`columns`, пропускаются. Строки, в которых не
 * осталось ни одной валидной ячейки, в матрицу не попадают.
 *
 * Опция `withCells` включает параллельный сбор `CellTransferCellInfo[][]` —
 * матрицу той же формы с полной информацией о каждой ячейке (нужна только для
 * `onBeforeCopy` / `onBeforePaste` / `onBeforeFill`).
 */
export function collectMatrixFromTargets<R extends ObjectForExtending>(
  rowTargets: readonly number[],
  colTargets: readonly number[],
  columns: readonly TransferColumnConfig[],
  rows: readonly R[],
  options: { withCells?: boolean } = {}
): { grid: string[][]; cells: CellTransferCellInfo[][] } {
  const grid: string[][] = [];
  const cells: CellTransferCellInfo[][] = [];

  for (const rowIndex of rowTargets) {
    const row = rows[rowIndex];
    if (!row) continue;

    const { lvl } = getTreeIdAndLvlOfRow(row);
    const gridRow: string[] = [];
    const cellsRow: CellTransferCellInfo[] = [];

    for (const colIndex of colTargets) {
      const column = columns[colIndex];
      if (!column) continue;

      const formattedValue = getCellText(row, column, lvl);
      gridRow.push(formattedValue);

      if (options.withCells) {
        cellsRow.push({
          row: row as ObjectForExtending,
          column,
          colIndex,
          rowIndex,
          lvl,
          rawValue: row[column.key],
          formattedValue
        });
      }
    }

    if (gridRow.length > 0) {
      grid.push(gridRow);
      if (options.withCells) cells.push(cellsRow);
    }
  }

  return { grid, cells };
}
