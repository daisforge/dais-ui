/**
 * Выбор фона ячейки в зависимости от её состояния: под курсором, в выбранной
 * строке, в выделении.
 *
 * Подробнее. Цвета всех состояний уже посчитаны (палитра или fill-states.ts),
 * здесь только выбирается, какой из них показать. Результат кладётся в тему
 * конкретной ячейки (или строки) и дальше рисуется Glide Data Grid.
 */
import type { CellFillStates } from './fill-states';
import type { TableColorTheme } from './table-colors.generated';

import { getCellFillStates } from './fill-states';

// ─── Типы ───

/**
 * Два цвета ячейки, которые кладутся в её тему.
 *
 * Подробнее:
 *  - bgCell — цвет ячейки сейчас;
 *  - accentLight — цвет на случай, если ячейку выделят. Glide Data Grid сам
 *    подставит его только в выделенную ячейку, поэтому здесь не нужно знать,
 *    выделена ли она.
 */
export type CellFillOverride = { bgCell: string; accentLight?: string };

/**
 * Где находится ячейка: в строке под курсором (rowHover) и/или в выбранной
 * строке (rowActive, highlightActiveType='row').
 */
export type CellFillContext = { rowHover: boolean; rowActive: boolean };

/** Поля темы с цветами редактируемой (жёлтой) ячейки во всех состояниях. */
type EditableCellTheme = {
  bgEditableCell: string;
  bgEditableCellHovered: string;
  bgEditableCellRowActiveHovered: string;
  bgEditableCellActive: string;
  bgEditableCellActiveHovered: string;
};

/** Поля темы с тремя ступенями фона выбранной строки. */
type ActiveRowBgTheme = {
  selectionCheckboxBg: string;
  bgSelectedRowHovered: string;
  bgSelectedRowActiveHovered: string;
};

// ─── Функции ───

/**
 * Цвет ячейки со своим цветом (редактируемая, статусная, цвет потребителя)
 * с учётом курсора и выбранной строки.
 *
 * Подробнее. Обычно: покой, под курсором — на ступень темнее (hover).
 * В выбранной строке ячейка уже на ступень темнее покоя (hover), а под
 * курсором — на две (hover2). Цвет выделения в выбранной строке НЕ
 * накладывается: выбранная строка — не выделение. Но accentLight задаётся
 * всегда — если поверх выбранной строки выделят диапазон, в нём будет цвет
 * выделения.
 */
export const resolveCellFillOverride = (
  states: CellFillStates,
  { rowHover, rowActive }: CellFillContext,
): CellFillOverride => {
  const hover = states.hover ?? states.rest;
  const hover2 = states.hover2 ?? hover;

  let bgCell: string;
  if (rowActive) {
    bgCell = rowHover ? hover2 : hover;
  } else {
    bgCell = rowHover ? hover : states.rest;
  }

  const accent = rowHover
    ? (states.hoverActive ?? states.active)
    : states.active;
  return { bgCell, ...(accent ? { accentLight: accent } : {}) };
};

/**
 * Цвет ячейки, для которого задал свой цвет потребитель
 * (themeOverride.bgCell).
 *
 * Подробнее. Состояния такого цвета считаются формулой (fill-states.ts),
 * дальше — как в resolveCellFillOverride. Если значение не цвет вида #…, а,
 * например, rgba() или var(), оно возвращается как есть — без hover и без
 * цвета выделения.
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

/**
 * Цвета редактируемой ячейки во всех состояниях, собранные из темы.
 *
 * Подробнее. Какие поля темы за какое состояние отвечают, знает только эта
 * функция — компоненту таблицы это знать не нужно.
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

/**
 * Фон обычной ячейки выбранной строки (highlightActiveType='row').
 *
 * Подробнее. Три ступени одного голубого цвета, от светлой к тёмной. Каждое
 * из условий «курсор над строкой» и «чекбокс строки нажат» добавляет одну
 * ступень:
 *  0 условий — selectionCheckboxBg;
 *  1 условие — bgSelectedRowHovered;
 *  2 условия — bgSelectedRowActiveHovered.
 * То, что «курсор без чекбокса» и «чекбокс без курсора» дают одинаковый
 * цвет, — так задумано дизайн-системой.
 */
export const resolveActiveRowBg = (
  theme: ActiveRowBgTheme,
  { rowHover, checkboxChecked }: { rowHover: boolean; checkboxChecked: boolean },
): string => {
  const steps = Number(rowHover) + Number(checkboxChecked);
  const ladder = [
    theme.selectionCheckboxBg,
    theme.bgSelectedRowHovered,
    theme.bgSelectedRowActiveHovered,
  ];
  return ladder[steps] ?? theme.selectionCheckboxBg;
};
