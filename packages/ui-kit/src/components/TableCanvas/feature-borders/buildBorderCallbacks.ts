import type { CellBorders } from '@glideappsfinal/glide-data-grid';

import { getLvlOfRow } from '../feature-tree/handlers';
import type { BordersConfig } from '../types/table-config.type';
import type { ObjectForExtending } from '../types/utils.type';

export interface BorderCallbacks {
  /**
   * Рисовать ли вертикальную линию слева от колонки k. Это та же линия, что
   * разделитель справа от колонки k-1. Если undefined, glide рисует как обычно.
   */
  verticalBorder?: (col: number) => boolean;
  /** Рисовать ли горизонтальную линию сверху строки. Если undefined, glide рисует как обычно. */
  horizontalBorder?: (row: number) => boolean;
  /**
   * Рамки отдельных ячеек. Если undefined, glide рисует сплошные линии
   * без разбивки по ячейкам (это заметно дешевле).
   */
  getCellBorder?: (col: number, row: number) => CellBorders | undefined;
}

/**
 * Сводит настройки линий (общие, по колонкам, по строкам, по ячейкам) в колбэки
 * для glide.
 *
 * Приоритет: настройка ячейки (getCellBorder) сильнее настройки колонки
 * (getVerticalBorder) и строки (getHorizontalBorder), настройка колонки и строки
 * сильнее общих. Каждый колбэк создаётся только когда есть что настраивать,
 * иначе остаётся undefined и glide рисует линии как обычно. Рамки отдельных
 * ячеек требуют разбивки линий по ячейкам, а скрытие вертикальных или
 * горизонтальных линий работает без неё.
 *
 * orderedColumnKeys - ключи колонок в том порядке, в котором их рисует grid
 * (закреплённые в начале). rowsRef отдаёт отображаемые строки на момент
 * отрисовки: точечные колбэки получают саму строку, а не только индекс. Строки
 * за пределами массива (summary) точечным настройкам не отдаются.
 */
export const buildBorderCallbacks = <RowType extends ObjectForExtending>({
  borders,
  orderedColumnKeys,
  rowsRef,
}: {
  borders: BordersConfig<RowType> | undefined;
  orderedColumnKeys: readonly string[];
  rowsRef: { readonly current: readonly RowType[] };
}): BorderCallbacks => {
  const globalVertical = borders?.vertical ?? true;
  const globalHorizontal = borders?.horizontal ?? true;
  const getVerticalBorder = borders?.getVerticalBorder;
  const getHorizontalBorder = borders?.getHorizontalBorder;
  const productGetCellBorder = borders?.getCellBorder;

  const result: BorderCallbacks = {};

  // Вертикальные линии: колбэк нужен, только если их кто-то отключает
  // (общей настройкой или точечно по колонке). Glide спрашивает про линию слева
  // от колонки col, а настройка живёт у колонки-хозяйки этого разделителя,
  // то есть у колонки col - 1.
  if (globalVertical === false || getVerticalBorder !== undefined) {
    result.verticalBorder = (col: number) => {
      if (getVerticalBorder === undefined) return globalVertical;
      const columnIndex = col - 1;
      const columnKey = orderedColumnKeys[columnIndex];
      if (columnKey === undefined) return globalVertical;
      return getVerticalBorder({ columnKey, columnIndex }) ?? globalVertical;
    };
  }

  // Горизонтальные линии: колбэк нужен, только если они выключены целиком
  // или задана точечная настройка по строкам.
  if (globalHorizontal === false || getHorizontalBorder !== undefined) {
    result.horizontalBorder = (row: number) => {
      if (getHorizontalBorder === undefined) return globalHorizontal;
      const rowData = rowsRef.current[row];
      if (rowData === undefined) return globalHorizontal;
      return (
        getHorizontalBorder({
          row: rowData,
          rowIndex: row,
          treeLvl: getLvlOfRow(rowData),
        }) ?? globalHorizontal
      );
    };
  }

  // Рамки отдельных ячеек: нужны, только если потребитель задал getCellBorder.
  if (productGetCellBorder !== undefined) {
    result.getCellBorder = (col: number, row: number) => {
      const rowData = rowsRef.current[row];
      if (rowData === undefined) return undefined;
      return productGetCellBorder({
        col,
        columnKey: orderedColumnKeys[col],
        row: rowData,
        rowIndex: row,
        treeLvl: getLvlOfRow(rowData),
      });
    };
  }

  return result;
};
