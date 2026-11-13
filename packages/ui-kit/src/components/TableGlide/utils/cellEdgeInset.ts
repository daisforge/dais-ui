import type { CellEdgeInset } from '../cellRenderer';

type GridLineSetting = boolean | ((index: number) => boolean) | undefined;

/** Сколько пикселей у краёв ячейки не закрашивать (см. CellEdgeInset в cellRenderer) */
export const cellEdgeInset = ({
  hasLeftLine,
  hasTopLine,
  keepsRing,
  isLastColumn,
  isLastRow,
}: {
  hasLeftLine: boolean;
  hasTopLine: boolean;
  /** На краю ячейки рамка выделения или ошибки: пиксель за ней */
  keepsRing: boolean;
  isLastColumn: boolean;
  isLastRow: boolean;
}): CellEdgeInset => ({
  left: hasLeftLine || keepsRing ? 1 : 0,
  top: hasTopLine || keepsRing ? 1 : 0,
  right: isLastColumn ? 1 : 0,
  bottom: isLastRow ? 1 : 0,
});

/** Есть ли линия сетки по настройке glide: булево значение или функция от индекса */
const hasGridLine = (border: GridLineSetting, index: number): boolean =>
  typeof border === 'function' ? border(index) : border ?? true;

/**
 * Есть ли линии сетки слева и сверху от ячейки.
 *
 * В glide verticalBorder(col) это линия у левого края колонки col (правый край
 * колонки i он рисует по verticalBorder(i + 1)), horizontalBorder(row) это
 * линия у верхнего края строки row. У первой колонки линии слева нет. Точечные
 * рамки ячеек (getCellBorder) по сторонам не разбираем: считаем, что линии
 * есть.
 */
export const gridLinesAroundCell = (
  {
    verticalBorder,
    horizontalBorder,
    hasCellBorders,
  }: {
    verticalBorder: GridLineSetting;
    horizontalBorder: GridLineSetting;
    hasCellBorders: boolean;
  },
  colInd: number,
  rowInd: number,
): { hasLeftLine: boolean; hasTopLine: boolean } => ({
  hasLeftLine:
    hasCellBorders || (colInd > 0 && hasGridLine(verticalBorder, colInd)),
  hasTopLine: hasCellBorders || hasGridLine(horizontalBorder, rowInd),
});
