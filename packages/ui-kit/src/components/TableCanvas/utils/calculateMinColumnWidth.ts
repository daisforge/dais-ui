/**
 * Рассчитывает минимальную ширину колонки на основе переданных опций.
 *
 * @typedef {Object} ColumnWidthOptions
 * @property {boolean} [isHaveFiltering=false] - Есть ли фильтрация (иконка справа от текста).
 * @property {boolean} [isHaveSorting=false] - Есть ли сортировка (иконка справа от текста).
 * @property {boolean} [columnIsPinned=false] - Закреплена ли колонка (иконка слева от текста).
 * @property {boolean} [subRowIsActiveAndColumnWithArrow=false] - Есть ли стрелка подрядков (иконка слева от текста).
 * @property {boolean} [reorderForColIsActive=false] - Активен ли реордер колонки (иконка слева от текста).
 * @property {number} [customMinWidth] - Кастомная минимальная ширина (если нужно переопределить расчет).
 *
 * @param {ColumnWidthOptions} options - Опции для расчета ширины.
 * @returns {number} - Рассчитанная минимальная ширина колонки.
 *
 */
export function calculateMinColumnWidth(options: {
  isHaveFiltering: boolean;
  isHaveSorting: boolean;
  columnIsPinned: boolean;
  subRowIsActiveAndColumnWithArrow: boolean;
  reorderForColIsActive?: boolean;
  customMinWidth?: number;
}): number {
  const {
    isHaveFiltering,
    isHaveSorting,
    columnIsPinned,
    subRowIsActiveAndColumnWithArrow,
    reorderForColIsActive = false,
    customMinWidth,
  } = options;

  // Базовые константы
  const PADDING_SIDES = 16 * 2; // 16 слева и справа
  const TEXT_BLOCK_WIDTH = 36;
  const FEATURE_WIDTH = 16; // ширина одной фичи (иконки)
  const GAP_BETWEEN_FEATURES = 4; // отступ между фичами
  const GAP_BEFORE_AFTER_TEXT = 6; // отступ до и после текста

  // Логика расчёта ширины левой части (до текста)
  const leftFeatures = [
    subRowIsActiveAndColumnWithArrow,
    reorderForColIsActive,
    columnIsPinned,
  ].filter(Boolean).length;

  const leftWidth =
    leftFeatures * FEATURE_WIDTH + // ширина всех фичей слева
    Math.max(0, leftFeatures - 1) * GAP_BETWEEN_FEATURES + // отступы между ними
    GAP_BEFORE_AFTER_TEXT; // отступ перед текстом

  // Логика расчёта правой части (после текста)
  const rightFeatures = [isHaveFiltering, isHaveSorting].filter(Boolean).length;

  const rightWidth =
    rightFeatures * FEATURE_WIDTH + // ширина всех фичей справа
    Math.max(0, rightFeatures - 1) * GAP_BETWEEN_FEATURES + // отступы между ними
    GAP_BEFORE_AFTER_TEXT; // отступ после текста

  // Общая минимальная ширина
  const totalMinWidth =
    PADDING_SIDES + leftWidth + TEXT_BLOCK_WIDTH + rightWidth;

  // Возвращаем кастомную ширину, если передана, или рассчитанную
  return customMinWidth ?? totalMinWidth;
}
