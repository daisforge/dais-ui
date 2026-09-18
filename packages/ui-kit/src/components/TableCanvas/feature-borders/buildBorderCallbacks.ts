import type { CellBorders } from '@glideappsfinal/glide-data-grid';

import { getTreeIdAndLvlOfRow } from '../feature-tree/handlers';
import type { BordersConfig } from '../types/table-config.type';
import type { ObjectForExtending } from '../types/utils.type';

/** Колонка в том порядке, в котором её рисует grid (закреплённые в начале): ключ и настройки рамок. */
export interface RenderColBorder {
  key: string;
  verticalBorder?: boolean;
}

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
 * (verticalBorder) и строки (getHorizontalBorder), настройка колонки и строки
 * сильнее общих. Каждый колбэк создаётся только когда есть что настраивать,
 * иначе остаётся undefined и glide рисует линии как обычно. Рамки отдельных
 * ячеек требуют разбивки линий по ячейкам, а скрытие вертикальных или
 * горизонтальных линий работает без неё.
 *
 * rowsRef отдаёт отображаемые строки на момент отрисовки: точечные колбэки
 * получают саму строку, а не только индекс. Строки за пределами массива
 * (summary) точечным настройкам не отдаются.
 */
export const buildBorderCallbacks = <RowType extends ObjectForExtending>({
  borders,
  renderCols,
  rowsRef,
}: {
  borders: BordersConfig<RowType> | undefined;
  renderCols: readonly RenderColBorder[];
  rowsRef: { readonly current: readonly RowType[] };
}): BorderCallbacks => {
  const globalVertical = borders?.vertical ?? true;
  const globalHorizontal = borders?.horizontal ?? true;
  const getHorizontalBorder = borders?.getHorizontalBorder;
  const productGetCellBorder = borders?.getCellBorder;

  const hasColumnVerticalOverride = renderCols.some(
    (c) => c.verticalBorder !== undefined,
  );

  const result: BorderCallbacks = {};

  // Вертикальные линии: колбэк нужен, только если их кто-то отключает
  // (общей настройкой или на колонке). Glide спрашивает про линию слева от
  // колонки col, а настройка живёт у колонки-хозяйки этого разделителя,
  // то есть у колонки col - 1.
  if (globalVertical === false || hasColumnVerticalOverride) {
    result.verticalBorder = (col: number) => {
      const owner = renderCols[col - 1];
      return owner?.verticalBorder ?? globalVertical;
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
          treeLvl: getTreeIdAndLvlOfRow(rowData).lvl,
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
        columnKey: renderCols[col]?.key,
        row: rowData,
        rowIndex: row,
        treeLvl: getTreeIdAndLvlOfRow(rowData).lvl,
      });
    };
  }

  return result;
};
