import type { ActiveTheme } from './activeTheme.type';
import type { GlideSizeConfig, SIZE } from '../constants';

import { fontMetrics, fontStyles } from '../fonts';
import { getTokens } from '../tokens';
import { TABLE_STATE_COLORS } from './table-colors.generated';

export type ThemeCustoms = ReturnType<typeof getCustomColors> & {
  rowSize: SIZE;
  activeSizes: GlideSizeConfig;
};

/**
 * Кастомные цвета TableGlide — не входят в стандартный Theme библиотеки Glide Data Grid.
 * Используются в наших рендерерах: выделение строк, редактируемые ячейки, ошибки.
 *
 * Источник — палитра «токен × состояние» (table-colors.generated.ts),
 * руками значения не поддерживаются: перегенерация в generators/table-token-states.
 */
export const getCustomColors = (activeTheme: ActiveTheme) => ({
  /**
   * Токены для canvas-рендереров (бейджи, статусы, кнопки внутри ячеек).
   * Пример: theme.tokens.textSecondary
   */
  tokens: getTokens(activeTheme),
  /**
   * Строки шрифтов для компонентов.
   * Пример: theme.fonts.bodyS
   */
  fonts: fontStyles,
  /**
   * Числовые метрики тех же шрифтов для canvas layout.
   */
  fontMetrics,

  // Редактируемая ячейка (data-yellow-light × состояния)
  bgEditableCell: TABLE_STATE_COLORS.bgEditableCell[activeTheme],
  bgEditableCellHovered: TABLE_STATE_COLORS.bgEditableCellHovered[activeTheme],
  bgEditableCellActive: TABLE_STATE_COLORS.bgEditableCellActive[activeTheme],
  bgEditableCellActiveHovered:
    TABLE_STATE_COLORS.bgEditableCellActiveHovered[activeTheme],

  // Отмеченная строка и служебные колонки (surface-accent-minor × состояния)
  selectionCheckboxBg: TABLE_STATE_COLORS.selectionCheckboxBg[activeTheme],
  selectionActiveBg: TABLE_STATE_COLORS.selectionActiveBg[activeTheme],
  selectionActiveCheckboxBg:
    TABLE_STATE_COLORS.selectionActiveCheckboxBg[activeTheme],
  selectionServiceBg: TABLE_STATE_COLORS.selectionServiceBg[activeTheme],
  selectionServiceActiveBg:
    TABLE_STATE_COLORS.selectionServiceActiveBg[activeTheme],
  errorOutlineColor: TABLE_STATE_COLORS.errorOutlineColor[activeTheme],

  // Фон строки под курсором (hoverEffects.row) — hover фона ячейки.
  bgRowHovered: TABLE_STATE_COLORS.bgRowHovered[activeTheme],
  // Служебные колонки (нумерация/чекбокс/инструменты) в hovered-строке.
  bgServiceRowHovered: TABLE_STATE_COLORS.bgServiceRowHovered[activeTheme],
  // Checkbox-selected строка под курсором: вся строка темнеет вместо серого hover.
  bgSelectedRowHovered: TABLE_STATE_COLORS.bgSelectedRowHovered[activeTheme],

  // Hover поверх выделения
  selectionActiveHoveredBg:
    TABLE_STATE_COLORS.selectionActiveHoveredBg[activeTheme],
  selectionActiveCheckboxHoveredBg:
    TABLE_STATE_COLORS.selectionActiveCheckboxHoveredBg[activeTheme],
  selectionServiceActiveHoveredBg:
    TABLE_STATE_COLORS.selectionServiceActiveHoveredBg[activeTheme],
  bgHeaderSelectedHovered:
    TABLE_STATE_COLORS.bgHeaderSelectedHovered[activeTheme],

  // Успешно сохранённая ячейка (data-blue-light × состояния)
  editedSuccessfullyCellColor:
    TABLE_STATE_COLORS.editedSuccessfullyCellColor[activeTheme],
  editedSuccessfullyCellHoverColor:
    TABLE_STATE_COLORS.editedSuccessfullyCellHoverColor[activeTheme],
  editedSuccessfullyCellActiveColor:
    TABLE_STATE_COLORS.editedSuccessfullyCellActiveColor[activeTheme],
  editedSuccessfullyCellActiveHoverColor:
    TABLE_STATE_COLORS.editedSuccessfullyCellActiveHoverColor[activeTheme],

  // Статусные заливки ячеек (positive / negative / warning / info × состояния)
  bgCellPositive: TABLE_STATE_COLORS.bgCellPositive[activeTheme],
  bgCellPositiveHovered: TABLE_STATE_COLORS.bgCellPositiveHovered[activeTheme],
  bgCellPositiveActive: TABLE_STATE_COLORS.bgCellPositiveActive[activeTheme],
  bgCellPositiveActiveHovered:
    TABLE_STATE_COLORS.bgCellPositiveActiveHovered[activeTheme],
  bgCellNegative: TABLE_STATE_COLORS.bgCellNegative[activeTheme],
  bgCellNegativeHovered: TABLE_STATE_COLORS.bgCellNegativeHovered[activeTheme],
  bgCellNegativeActive: TABLE_STATE_COLORS.bgCellNegativeActive[activeTheme],
  bgCellNegativeActiveHovered:
    TABLE_STATE_COLORS.bgCellNegativeActiveHovered[activeTheme],
  bgCellWarning: TABLE_STATE_COLORS.bgCellWarning[activeTheme],
  bgCellWarningHovered: TABLE_STATE_COLORS.bgCellWarningHovered[activeTheme],
  bgCellWarningActive: TABLE_STATE_COLORS.bgCellWarningActive[activeTheme],
  bgCellWarningActiveHovered:
    TABLE_STATE_COLORS.bgCellWarningActiveHovered[activeTheme],
  bgCellInfo: TABLE_STATE_COLORS.bgCellInfo[activeTheme],
  bgCellInfoHovered: TABLE_STATE_COLORS.bgCellInfoHovered[activeTheme],
  bgCellInfoActive: TABLE_STATE_COLORS.bgCellInfoActive[activeTheme],
  bgCellInfoActiveHovered:
    TABLE_STATE_COLORS.bgCellInfoActiveHovered[activeTheme],

  // Затухание при скролле — статичные цвета
  fadeWhite: TABLE_STATE_COLORS.fadeWhite[activeTheme],
  fadeGray: TABLE_STATE_COLORS.fadeGray[activeTheme],
});
