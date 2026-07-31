import type { ObjectForExtending } from '../../types';
import type {
  CellTransferCellInfo,
  Rectangle,
  TransferColumnConfig,
} from '../types';
import { collectMatrixFromTargets } from './collectMatrixFromTargets';
import { rangeToIndexes } from './rangeToIndexes';

/**
 * Собирает двумерную матрицу текстов из прямоугольного диапазона.
 * Используется в copy (формирование TSV), paste (meta для `onBeforePaste`)
 * и в fill handle (чтение source).
 *
 * Тонкая обёртка над `collectMatrixFromTargets`: разворачивает прямоугольник в
 * явные списки строк/колонок. Опция `withCells` включает параллельный сбор
 * `CellTransferCellInfo[][]`.
 */
export function collectTextMatrix<R extends ObjectForExtending>(
  range: Rectangle,
  columns: readonly TransferColumnConfig[],
  rows: readonly R[],
  options: { withCells?: boolean } = {},
): { grid: string[][]; cells: CellTransferCellInfo[][] } {
  return collectMatrixFromTargets(
    rangeToIndexes(range.y, range.height),
    rangeToIndexes(range.x, range.width),
    columns,
    rows,
    options,
  );
}
