/* eslint-disable no-continue */
import { getTreeIdAndLvlOfRow } from '../../feature-tree/handlers';
import type { ObjectForExtending } from '../../types';
import type { CellTransferCellInfo, TransferColumnConfig } from '../types';
import { getCellText } from './getCellText';
import { resolveBlockOrigin } from './resolveBlockOrigin';

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
  options: { withCells?: boolean; resolveOrigin?: boolean } = {},
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

      // Покрытую позицию блока читаем как значение origin — то, что видно на
      // экране (broadcast). Без резолва читаем ячейку как есть.
      let srcRow = row;
      let srcCol = column;
      let srcLvl = lvl;
      let srcRowIndex = rowIndex;
      let srcColIndex = colIndex;
      if (options.resolveOrigin) {
        const [oCol, oRow] = resolveBlockOrigin(
          colIndex,
          rowIndex,
          columns,
          rows,
        );
        if (oCol !== colIndex || oRow !== rowIndex) {
          const originRow = rows[oRow];
          const originCol = columns[oCol];
          if (originRow && originCol) {
            srcRow = originRow;
            srcCol = originCol;
            srcLvl = getTreeIdAndLvlOfRow(originRow).lvl;
            srcRowIndex = oRow;
            srcColIndex = oCol;
          }
        }
      }

      const formattedValue = getCellText(srcRow, srcCol, srcLvl);
      gridRow.push(formattedValue);

      if (options.withCells) {
        cellsRow.push({
          row: srcRow as ObjectForExtending,
          column: srcCol,
          colIndex: srcColIndex,
          rowIndex: srcRowIndex,
          lvl: srcLvl,
          rawValue: srcRow[srcCol.key],
          formattedValue,
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
