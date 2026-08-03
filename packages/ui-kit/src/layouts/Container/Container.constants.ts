/**
 * Классы компонента Container
 */
export const CONTAINER_CLASSES = {
  wrapper: 'container__wrapper',
  left: 'container__wrapper_left',
  middle: 'container__wrapper_middle',
  right: 'container__wrapper_right',
} as const;

/**
 * Дефолтные значения для Container
 */
export const CONTAINER_DEFAULTS = {
  MIN_COL_WIDTH: '360px', // Минимальная ширина колонки
  GAP: '24px', // Отступ между колонками
  FIXED_WIDTH: '360px', // Ширина фиксированной колонки
  MIN_FIXED_WIDTH: '240px', // Минимальная ширина фиксированной колонки
} as const;
