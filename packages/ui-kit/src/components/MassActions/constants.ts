/**
 * Константы для панели массовых действий (MassActions)
 */

// ==================== РАЗМЕРЫ ЭЛЕМЕНТОВ ====================

/**
 * Ширина кнопки сворачивания/разворачивания панели
 */
export const COLLAPSE_BUTTON_WIDTH = 24;

/**
 * Расстояние между элементами внутри панели (gap)
 */
export const ELEMENTS_GAP = 4;

/**
 * Ширина узкой панели переключателя сайдбара (тогл-кнопка)
 */
export const TOGGLE_SIDEBAR_PANEL_WIDTH = 44;

/**
 * Приблизительная ширина кнопки "Ещё" с дропдауном
 */
export const MORE_BUTTON_WIDTH_ESTIMATE = 40;

// ==================== ОТСТУПЫ И PADDING ====================

/**
 * Минимальный отступ панели от краев контейнера (слева и справа)
 */
export const MIN_PANEL_PADDING = 24;

/**
 * Padding контейнера панели в развернутом состоянии
 * Формат: { top, right, bottom, left }
 */
export const PANEL_PADDING_EXPANDED = {
  top: 12,
  right: 8,
  bottom: 12,
  left: 24,
} as const;

/**
 * Padding контейнера панели в свернутом состоянии
 * Формат: { top, right, bottom, left }
 */
export const PANEL_PADDING_COLLAPSED = {
  top: 0,
  right: 10,
  bottom: 0,
  left: 24,
} as const;

/**
 * Общая ширина padding контейнера (левый + правый) в развернутом состоянии
 */
export const CONTAINER_PADDING_HORIZONTAL =
  PANEL_PADDING_EXPANDED.left + PANEL_PADDING_EXPANDED.right;

// ==================== ПРИБЛИЗИТЕЛЬНЫЕ ЗНАЧЕНИЯ ДЛЯ РАСЧЕТОВ ====================

/**
 * Приблизительная ширина счетчика выбранных элементов
 * Используется для предварительных расчетов, когда элемент еще не отрендерен
 */
export const COUNTER_WIDTH_ESTIMATE = 90;

/**
 * Приблизительная ширина кнопки "Сбросить всё"
 * Используется для предварительных расчетов, когда элемент еще не отрендерен
 */
export const RESET_BUTTON_WIDTH_ESTIMATE = 110;

/**
 * Приблизительная ширина одной кнопки действия
 * Используется для предварительных расчетов, когда элемент еще не отрендерен
 */
export const ACTION_BUTTON_WIDTH_ESTIMATE = 100;

// ==================== TIMING ====================

/**
 * Время анимации сворачивания/разворачивания панели (в миллисекундах)
 */
export const ANIMATION_DURATION = 300;

/**
 * Задержка после завершения анимации для уточнения позиции (в миллисекундах)
 * Немного больше времени анимации для гарантии завершения всех переходов
 */
export const ANIMATION_COMPLETE_DELAY = 550;

/**
 * Задержка перед показом панели.
 * Дешевое решение, ждем пока произойдет калькуляция ширин
 */
export const DELAY_BEFORE_SHOW_PANEL = 350;

/**
 * Задержка перед запуском компрессии после рендера (в миллисекундах)
 */
export const COMPRESSION_CALCULATION_DELAY = 50;

/**
 * Задержка перед первым расчетом позиции после появления панели (в миллисекундах)
 */
export const INITIAL_POSITION_CALCULATION_DELAY = 100;
