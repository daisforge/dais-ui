import type { CellFillStates } from './fill-states';
import type { TableColorTheme } from './table-colors.generated';

import { getCellFillStates } from './fill-states';

/**
 * Какой цвет показать ячейке, у которой есть свой цвет (редактируемая,
 * статусная, цвет потребителя), в зависимости от курсора и выбранной строки.
 *
 * Возвращаются два цвета, оба кладутся в тему этой ячейки:
 *  - bgCell — цвет ячейки сейчас: покой или «под курсором» (а в выбранной
 *    строке — на ступень глубже: hover или hover2);
 *  - accentLight — цвет на случай, если ячейку выделят. Glide Data Grid
 *    сам подставит его только в выделенную ячейку, поэтому здесь не нужно
 *    знать, выделена ли она.
 */
export type CellFillOverride = { bgCell: string; accentLight?: string };

/**
 * Где ячейка: в строке под курсором (rowHover) и/или в выбранной строке
 * (rowActive, highlightActiveType='row').
 */
export type CellFillContext = { rowHover: boolean; rowActive: boolean };

export const resolveCellFillOverride = (
  states: CellFillStates,
  { rowHover, rowActive }: CellFillContext,
): CellFillOverride => {
  // Выбранная строка — это не выделение: цвет выделения на неё не
  // накладывается. Цветная ячейка в ней на ступень темнее покоя (hover), а
  // под курсором — на две (hover2). accentLight всё равно задаём: если поверх
  // выбранной строки выделят диапазон, в нём будет цвет выделения.
  const hover = states.hover ?? states.rest;
  const bgCell = rowActive
    ? rowHover
      ? (states.hover2 ?? hover)
      : hover
    : rowHover
      ? hover
      : states.rest;
  const accent = rowHover
    ? (states.hoverActive ?? states.active)
    : states.active;
  return { bgCell, ...(accent ? { accentLight: accent } : {}) };
};

/** Поля темы с цветами редактируемой (жёлтой) ячейки во всех состояниях. */
type EditableCellTheme = {
  bgEditableCell: string;
  bgEditableCellHovered: string;
  bgEditableCellRowActiveHovered: string;
  bgEditableCellActive: string;
  bgEditableCellActiveHovered: string;
};

/**
 * Цвета редактируемой ячейки во всех состояниях, собранные из темы.
 * Какие поля темы за какое состояние отвечают — знает только эта функция,
 * компоненту таблицы это знать не нужно.
 */
export const getEditableCellFillStates = (
  theme: EditableCellTheme,
): CellFillStates => ({
  rest: theme.bgEditableCell,
  hover: theme.bgEditableCellHovered,
  hover2: theme.bgEditableCellRowActiveHovered,
  active: theme.bgEditableCellActive,
  hoverActive: theme.bgEditableCellActiveHovered,
});

/** Поля темы с цветами фона выбранной строки. */
type ActiveRowBgTheme = {
  selectionCheckboxBg: string;
  bgSelectedRowHovered: string;
  bgSelectedRowActiveHovered: string;
};

/**
 * Фон обычной ячейки выбранной строки (highlightActiveType='row').
 * Три ступени одного голубого цвета, от светлой к тёмной:
 *  1) строка выбрана — selectionCheckboxBg;
 *  2) плюс курсор ИЛИ плюс нажатый чекбокс — bgSelectedRowHovered;
 *  3) курсор и нажатый чекбокс вместе — bgSelectedRowActiveHovered.
 * То, что «курсор без чекбокса» и «чекбокс без курсора» дают одинаковый
 * цвет, — так задумано дизайн-системой, не ошибка.
 */
export const resolveActiveRowBg = (
  theme: ActiveRowBgTheme,
  { rowHover, checkboxChecked }: { rowHover: boolean; checkboxChecked: boolean },
): string =>
  checkboxChecked
    ? rowHover
      ? theme.bgSelectedRowActiveHovered
      : theme.bgSelectedRowHovered
    : rowHover
      ? theme.bgSelectedRowHovered
      : theme.selectionCheckboxBg;

/**
 * То же для цвета, который задал потребитель (themeOverride.bgCell): его
 * состояния считаются формулой (fill-states.ts). Если это не цвет вида #…,
 * а, например, rgba() или var(), он возвращается как есть — без hover и
 * без цвета выделения.
 */
export const resolveConsumerFillOverride = (
  bgCell: string,
  theme: TableColorTheme,
  context: CellFillContext,
): CellFillOverride => {
  try {
    return resolveCellFillOverride(getCellFillStates(bgCell, theme), context);
  } catch {
    return { bgCell };
  }
};
