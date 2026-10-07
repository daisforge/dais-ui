import type { CellFillStates } from './fill-states';
import type { TableColorTheme } from './table-colors.generated';

import { getCellFillStates } from './fill-states';

/**
 * Состояния заливки ячейки со своим цветом для per-cell themeOverride:
 * bgCell — rest/hover (в выбранной строке hover/hover2); accentLight —
 * active/hoverActive (заливка выделения Glide берёт accentLight из per-cell
 * темы и применяется только в выделении).
 */
export type CellFillOverride = { bgCell: string; accentLight?: string };

/**
 * Положение ячейки относительно курсора и выбранной строки
 * (highlightActiveType='row').
 */
export type CellFillContext = { rowHover: boolean; rowActive: boolean };

export const resolveCellFillOverride = (
  states: CellFillStates,
  { rowHover, rowActive }: CellFillContext,
): CellFillOverride => {
  // Выбранная строка — не выделение, наложения нет: цветная ячейка в ней
  // показывает свой hover, под курсором — hover2 (+2δ). accentLight остаётся:
  // пересечение с реальным выделением показывает active-цвета.
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

/**
 * То же для произвольного цвета потребителя (themeOverride.bgCell):
 * состояния считаются формулой генератора с кэшем по hex. Не-hex значение
 * (rgba(), var() и т. п.) передаётся как есть, без вычисленных состояний.
 */
/** Ключи темы, образующие лестницу фона выбранной строки. */
type ActiveRowBgTheme = {
  selectionCheckboxBg: string;
  bgSelectedRowHovered: string;
  bgSelectedRowActiveHovered: string;
};

/**
 * Фон обычной ячейки выбранной строки (highlightActiveType='row', правило
 * v1.2): rest = selectionCheckboxBg, под курсором hover = bgSelectedRowHovered;
 * НАЖАТЫЙ чекбокс добавляет ступень (hover, под курсором hover2 =
 * bgSelectedRowActiveHovered). Используется row-темой и гашением тонирования
 * одиночной активной ячейки.
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
