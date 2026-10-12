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
 * Наши цвета таблицы, которых нет в стандартной теме Glide Data Grid:
 * состояния выделения и подсветки строк, редактируемые, сохранённые и
 * статусные ячейки, рамка ошибки, а также цвета содержимого ячеек и шрифты.
 *
 * Названия состояний в именах ключей:
 *  - без суффикса — покой;
 *  - Hovered / HoverColor — под курсором;
 *  - Active — ячейка в выделении;
 *  - ActiveHovered — в выделении и под курсором;
 *  - RowActiveHovered — в выбранной строке под курсором
 *    (highlightActiveType='row').
 *
 * Значения берутся из палитры таблицы (table-colors.generated.ts) — руками
 * их не правят: палитру пересчитывает npm run table-colors:palette.
 */
export const getCustomColors = (activeTheme: ActiveTheme) => ({
  /**
   * Цвета содержимого ячеек: текст, бейджи, кнопки, цвета данных.
   * Пример: theme.tokens.textSecondary
   */
  tokens: getTokens(activeTheme),
  /**
   * Шрифты строкой, как в CSS (размер, начертание, семейство).
   * Пример: theme.fonts.bodyS
   */
  fonts: fontStyles,
  /**
   * Размеры тех же шрифтов числами — для расчёта раскладки на canvas.
   */
  fontMetrics,

  // Редактируемая (жёлтая) ячейка во всех состояниях
  bgEditableCell: TABLE_STATE_COLORS.bgEditableCell[activeTheme],
  bgEditableCellHovered: TABLE_STATE_COLORS.bgEditableCellHovered[activeTheme],
  bgEditableCellActive: TABLE_STATE_COLORS.bgEditableCellActive[activeTheme],
  bgEditableCellActiveHovered:
    TABLE_STATE_COLORS.bgEditableCellActiveHovered[activeTheme],

  bgEditableCellRowActiveHovered:
    TABLE_STATE_COLORS.bgEditableCellRowActiveHovered[activeTheme],

  // Фон строки, отмеченной чекбоксом, и фон выбранной строки в покое
  selectionCheckboxBg: TABLE_STATE_COLORS.selectionCheckboxBg[activeTheme],
  // Выбранная строка с нажатым чекбоксом под курсором — самая тёмная ступень
  bgSelectedRowActiveHovered:
    TABLE_STATE_COLORS.bgSelectedRowActiveHovered[activeTheme],
  // Выделенная ячейка; выделенная ячейка в отмеченной чекбоксом строке
  selectionActiveBg: TABLE_STATE_COLORS.selectionActiveBg[activeTheme],
  selectionActiveCheckboxBg:
    TABLE_STATE_COLORS.selectionActiveCheckboxBg[activeTheme],
  // Служебные колонки (нумерация, чекбокс): в покое и рядом с выделением
  selectionServiceBg: TABLE_STATE_COLORS.selectionServiceBg[activeTheme],
  selectionServiceActiveBg:
    TABLE_STATE_COLORS.selectionServiceActiveBg[activeTheme],
  // Красная рамка ячейки с ошибкой
  errorOutlineColor: TABLE_STATE_COLORS.errorOutlineColor[activeTheme],

  // Строка под курсором (hoverEffects.row): обычные ячейки
  bgRowHovered: TABLE_STATE_COLORS.bgRowHovered[activeTheme],
  // …и служебные колонки (нумерация, чекбокс) в этой строке
  bgServiceRowHovered: TABLE_STATE_COLORS.bgServiceRowHovered[activeTheme],
  // Отмеченная чекбоксом строка под курсором: темнеет целиком, а не серым
  bgSelectedRowHovered: TABLE_STATE_COLORS.bgSelectedRowHovered[activeTheme],

  // Выделение под курсором: ячейка, ячейка отмеченной строки, служебная
  // колонка, выделенная шапка
  selectionActiveHoveredBg:
    TABLE_STATE_COLORS.selectionActiveHoveredBg[activeTheme],
  selectionActiveCheckboxHoveredBg:
    TABLE_STATE_COLORS.selectionActiveCheckboxHoveredBg[activeTheme],
  selectionServiceActiveHoveredBg:
    TABLE_STATE_COLORS.selectionServiceActiveHoveredBg[activeTheme],
  bgHeaderSelectedHovered:
    TABLE_STATE_COLORS.bgHeaderSelectedHovered[activeTheme],

  // Успешно сохранённая (голубая) ячейка во всех состояниях
  editedSuccessfullyCellColor:
    TABLE_STATE_COLORS.editedSuccessfullyCellColor[activeTheme],
  editedSuccessfullyCellHoverColor:
    TABLE_STATE_COLORS.editedSuccessfullyCellHoverColor[activeTheme],
  editedSuccessfullyCellActiveColor:
    TABLE_STATE_COLORS.editedSuccessfullyCellActiveColor[activeTheme],
  editedSuccessfullyCellActiveHoverColor:
    TABLE_STATE_COLORS.editedSuccessfullyCellActiveHoverColor[activeTheme],
  editedSuccessfullyCellRowActiveHoverColor:
    TABLE_STATE_COLORS.editedSuccessfullyCellRowActiveHoverColor[activeTheme],

  // Статусные ячейки (positive / negative / warning / info) во всех состояниях
  bgCellPositive: TABLE_STATE_COLORS.bgCellPositive[activeTheme],
  bgCellPositiveHovered: TABLE_STATE_COLORS.bgCellPositiveHovered[activeTheme],
  bgCellPositiveActive: TABLE_STATE_COLORS.bgCellPositiveActive[activeTheme],
  bgCellPositiveActiveHovered:
    TABLE_STATE_COLORS.bgCellPositiveActiveHovered[activeTheme],
  bgCellPositiveRowActiveHovered:
    TABLE_STATE_COLORS.bgCellPositiveRowActiveHovered[activeTheme],
  bgCellNegative: TABLE_STATE_COLORS.bgCellNegative[activeTheme],
  bgCellNegativeHovered: TABLE_STATE_COLORS.bgCellNegativeHovered[activeTheme],
  bgCellNegativeActive: TABLE_STATE_COLORS.bgCellNegativeActive[activeTheme],
  bgCellNegativeActiveHovered:
    TABLE_STATE_COLORS.bgCellNegativeActiveHovered[activeTheme],
  bgCellNegativeRowActiveHovered:
    TABLE_STATE_COLORS.bgCellNegativeRowActiveHovered[activeTheme],
  bgCellWarning: TABLE_STATE_COLORS.bgCellWarning[activeTheme],
  bgCellWarningHovered: TABLE_STATE_COLORS.bgCellWarningHovered[activeTheme],
  bgCellWarningActive: TABLE_STATE_COLORS.bgCellWarningActive[activeTheme],
  bgCellWarningActiveHovered:
    TABLE_STATE_COLORS.bgCellWarningActiveHovered[activeTheme],
  bgCellWarningRowActiveHovered:
    TABLE_STATE_COLORS.bgCellWarningRowActiveHovered[activeTheme],
  bgCellInfo: TABLE_STATE_COLORS.bgCellInfo[activeTheme],
  bgCellInfoHovered: TABLE_STATE_COLORS.bgCellInfoHovered[activeTheme],
  bgCellInfoActive: TABLE_STATE_COLORS.bgCellInfoActive[activeTheme],
  bgCellInfoActiveHovered:
    TABLE_STATE_COLORS.bgCellInfoActiveHovered[activeTheme],
  bgCellInfoRowActiveHovered:
    TABLE_STATE_COLORS.bgCellInfoRowActiveHovered[activeTheme],

  // Цвет плавного затухания у края при прокрутке (без состояний)
  fadeWhite: TABLE_STATE_COLORS.fadeWhite[activeTheme],
  fadeGray: TABLE_STATE_COLORS.fadeGray[activeTheme],
});
