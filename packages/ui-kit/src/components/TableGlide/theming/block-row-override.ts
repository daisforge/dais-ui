import { type ActiveRowBgTheme, resolveActiveRowBg } from './cell-fill-override';

export type BlockRowOverrideTheme = ActiveRowBgTheme & {
  bgRowHovered: string;
  selectionActiveCheckboxBg: string;
  selectionActiveCheckboxHoveredBg: string;
  selectionActiveHoveredBg: string;
};

export type BlockRowState = {
  /** Строка под курсором проходит через блок (режим hoverEffects.row). */
  rowHover: boolean;
  /** Выбранная строка (highlightActiveType='row'), проходящая через блок. */
  activeRow: number | undefined;
  /** Через блок проходит хотя бы одна строка, отмеченная чекбоксом. */
  checkboxRow: boolean;
  /** Выбранная строка блока отмечена чекбоксом. */
  activeRowChecked: boolean;
};

export type BlockRowOverride = { bgCell: string; accentLight: string };

/**
 * Фон объединённого блока по строкам, проходящим через него (решение
 * дизайнера от 19.10.2026: блок красится целиком, полосами по пересечению не
 * красим). Приоритет тот же, что у фона одиночной строки в getRowThemeOverride:
 * выбранная строка, затем отмеченная чекбоксом, затем строка под курсором.
 * Ничего из этого нет — undefined: блок остаётся своим фоном (зебра строк
 * внутри блока рисуется построчно самим гридом).
 */
export const resolveBlockRowOverride = (
  theme: BlockRowOverrideTheme,
  { rowHover, activeRow, checkboxRow, activeRowChecked }: BlockRowState,
): BlockRowOverride | undefined => {
  if (activeRow !== undefined) {
    return {
      bgCell: resolveActiveRowBg(theme, {
        rowHover,
        checkboxChecked: activeRowChecked,
      }),
      accentLight: rowHover
        ? theme.selectionActiveCheckboxHoveredBg
        : theme.selectionActiveCheckboxBg,
    };
  }
  if (checkboxRow) {
    return {
      bgCell: rowHover ? theme.bgSelectedRowHovered : theme.selectionCheckboxBg,
      accentLight: rowHover
        ? theme.selectionActiveCheckboxHoveredBg
        : theme.selectionActiveCheckboxBg,
    };
  }
  if (rowHover) {
    return {
      bgCell: theme.bgRowHovered,
      accentLight: theme.selectionActiveHoveredBg,
    };
  }
  return undefined;
};

/** Есть ли в диапазоне [from, to] хотя бы один индекс из набора. */
export const rangeHasAny = (
  from: number,
  to: number,
  has: (index: number) => boolean,
): boolean => {
  for (let i = from; i <= to; i += 1) {
    if (has(i)) {
      return true;
    }
  }
  return false;
};
