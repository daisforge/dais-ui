import { SIZE_CONFIG } from '@ui-kit/components/TableGlide/lib/canvas';
import { ROW_SIZE_TOKENS } from '@ui-kit/components/TableGlide/theming/size-tokens';

import { getExpandAllIconWidth } from '../feature-tree/tree-disclosure-icons';
import { HEADER_LEFT_ICONS_CONFIG, RowSize } from '../renders/rowIconConfig';

/** Отступ между текстом шапки и блоком кнопок справа, px: кнопки не липнут к тексту. */
export const HEADER_TEXT_TO_ICONS_GAP = 6;
/** Отступ между кнопками фильтра и сортировки, px. */
export const HEADER_ICONS_GAP = 4;
/**
 * Сколько места оставляем названию колонки при минимальной ширине, px.
 * Хватает на одну широкую букву с многоточием.
 *
 * Подробнее: оценка сверху для полужирного шрифта шапки большой строки, где
 * «Ш…» занимает около 22 px; для средней и малой строки выходит меньше.
 * Точный минимум название считает само при измерении (minContentWidth у
 * CanvasText), а эта оценка нужна заранее, до отрисовки, для минимума колонки.
 */
const HEADER_TEXT_MIN_WIDTH = 24;
/** Кнопки фильтра и сортировки в шапке рисуются размером xs. */
const HEADER_BUTTON_SIZE = 'xs';

/**
 * Сколько места в шапке занимает блок кнопок справа от названия, px.
 *
 * Подробнее: отступ от названия, квадраты кнопок размера xs и зазоры между
 * ними. Для нуля кнопок возвращает 0, без отступа.
 */
export function getHeaderButtonsBlockWidth(buttonsCount: number): number {
  if (buttonsCount <= 0) {
    return 0;
  }
  return (
    HEADER_TEXT_TO_ICONS_GAP +
    buttonsCount * SIZE_CONFIG[HEADER_BUTTON_SIZE].height +
    (buttonsCount - 1) * HEADER_ICONS_GAP
  );
}

/**
 * Минимальная ширина колонки, при которой её шапка остаётся читаемой.
 * Уже этой ширины колонку не сжать: иначе кнопки съедают правый отступ.
 *
 * Подробнее: считается для состояния с наведением, когда показаны все
 * кнопки. Складывается из отступов ячейки по размеру строки, квадратов левых
 * иконок с отступом до названия, места под букву с многоточием и блока кнопок
 * справа. Результат идёт в minWidth колонки, см. useColumns.
 */
export function calculateMinColumnWidth(options: {
  rowSize: RowSize;
  isHaveFiltering: boolean;
  isHaveSorting: boolean;
  columnIsPinned: boolean;
  subRowIsActiveAndColumnWithArrow: boolean;
  reorderForColIsActive?: boolean;
}): number {
  const {
    rowSize,
    isHaveFiltering,
    isHaveSorting,
    columnIsPinned,
    subRowIsActiveAndColumnWithArrow,
    reorderForColIsActive = false,
  } = options;

  const paddingSides = ROW_SIZE_TOKENS[rowSize].cellHorizontalPadding * 2;
  const leftIconsCfg = HEADER_LEFT_ICONS_CONFIG[rowSize];

  // Левые иконки стоят вплотную друг к другу, после них отступ до текста.
  const leftIconsWidth =
    (subRowIsActiveAndColumnWithArrow ? getExpandAllIconWidth(rowSize) : 0) +
    (reorderForColIsActive ? leftIconsCfg.squareSize : 0) +
    (columnIsPinned ? leftIconsCfg.squareSize : 0);
  const leftWidth =
    leftIconsWidth > 0 ? leftIconsWidth + leftIconsCfg.gapToText : 0;

  // Кнопки справа квадратные, между ними зазор, перед блоком отступ от текста.
  const rightWidth = getHeaderButtonsBlockWidth(
    [isHaveFiltering, isHaveSorting].filter(Boolean).length,
  );

  return paddingSides + leftWidth + HEADER_TEXT_MIN_WIDTH + rightWidth;
}
