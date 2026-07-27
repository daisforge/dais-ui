/* eslint-disable no-continue */
import { getTreeIdAndLvlOfRow } from '../../feature-tree/handlers';
import type { ObjectForExtending } from '../../types';
import type {
  CellIterationItem,
  Rectangle,
  TransferColumnConfig
} from '../types';

/**
 * Генератор по всем валидным ячейкам прямоугольного диапазона.
 * Пропускает индексы, для которых в `flatRows`/`columns` нет элемента
 * (за границами таблицы). Для каждой ячейки возвращает строку, колонку,
 * индексы и уровень subrow.
 */
export function* iterateCellRange<R extends ObjectForExtending>(
  range: Rectangle,
  columns: readonly TransferColumnConfig[],
  flatRows: readonly R[]
): Generator<CellIterationItem<R>> {
  for (
    let rowIndex = range.y;
    rowIndex < range.y + range.height;
    rowIndex += 1
  ) {
    const row = flatRows[rowIndex];
    if (!row) continue;

    const { lvl } = getTreeIdAndLvlOfRow(row);

    for (
      let colIndex = range.x;
      colIndex < range.x + range.width;
      colIndex += 1
    ) {
      const column = columns[colIndex];
      if (!column) continue;

      yield { row, column, colIndex, rowIndex, lvl };
    }
  }
}
