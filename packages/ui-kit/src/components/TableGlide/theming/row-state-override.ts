import { type ActiveRowBgTheme, resolveActiveRowBg } from './cell-fill-override';

export type RowStateOverrideTheme = ActiveRowBgTheme & {
  bgRowHovered: string;
  bgZebraRow: string;
  bgZebraRowHovered: string;
  bgZebraRowActive: string;
  bgZebraRowActiveHovered: string;
  selectionActiveBg: string;
  selectionActiveCheckboxBg: string;
  selectionActiveCheckboxHoveredBg: string;
  selectionActiveHoveredBg: string;
};

export type RowState = {
  /** Строка под курсором (режим hoverEffects.row). */
  rowHover: boolean;
  /** Выбранная строка (highlightActiveType='row'). */
  active: boolean;
  /** Выбранная строка отмечена чекбоксом. */
  activeChecked: boolean;
  /** Отмечена чекбоксом. */
  checked: boolean;
  /** Серая строка зебры. */
  zebra: boolean;
};

export type RowStateOverride = { bgCell: string; accentLight: string };

/**
 * Фон строки и цвет выделения в ней по её состояниям. Тот же порядок у
 * одиночной строки и у объединённого блока, через который проходят строки
 * в этих состояниях: выбранная строка, затем отмеченная чекбоксом, затем
 * зебра, затем строка под курсором. Курсор даёт вариант того же состояния
 * на ступень темнее. Выделение в отмеченной строке своего оттенка, в
 * остальных обычного цвета. Без состояний undefined: фон строки не меняется.
 */
export const resolveRowStateOverride = (
  theme: RowStateOverrideTheme,
  { rowHover, active, activeChecked, checked, zebra }: RowState,
): RowStateOverride | undefined => {
  const accentLight = checked
    ? rowHover
      ? theme.selectionActiveCheckboxHoveredBg
      : theme.selectionActiveCheckboxBg
    : rowHover
    ? theme.selectionActiveHoveredBg
    : theme.selectionActiveBg;

  if (active) {
    return {
      bgCell: resolveActiveRowBg(theme, {
        rowHover,
        checkboxChecked: activeChecked,
      }),
      accentLight,
    };
  }
  if (checked) {
    return {
      bgCell: rowHover ? theme.bgSelectedRowHovered : theme.selectionCheckboxBg,
      accentLight,
    };
  }
  if (zebra) {
    return {
      bgCell: rowHover ? theme.bgZebraRowHovered : theme.bgZebraRow,
      accentLight: rowHover
        ? theme.bgZebraRowActiveHovered
        : theme.bgZebraRowActive,
    };
  }
  if (rowHover) {
    return { bgCell: theme.bgRowHovered, accentLight };
  }
  return undefined;
};
