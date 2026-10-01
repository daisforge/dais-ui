import type { CellFillStates } from './fill-states';
import type { TableColorTheme } from './table-colors.generated';

import { getCellFillStates } from './fill-states';

/**
 * Состояния заливки ячейки со своим цветом для per-cell themeOverride:
 * bgCell — rest/hover; accentLight — active/hoverActive (заливка выделения
 * Glide берёт accentLight из per-cell темы и применяется только в выделении).
 */
export type CellFillOverride = { bgCell: string; accentLight?: string };

export const resolveCellFillOverride = (
  states: CellFillStates,
  rowHover: boolean,
): CellFillOverride => {
  const bgCell = rowHover ? (states.hover ?? states.rest) : states.rest;
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
export const resolveConsumerFillOverride = (
  bgCell: string,
  theme: TableColorTheme,
  rowHover: boolean,
): CellFillOverride => {
  try {
    return resolveCellFillOverride(getCellFillStates(bgCell, theme), rowHover);
  } catch {
    return { bgCell };
  }
};
