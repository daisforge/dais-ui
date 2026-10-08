import { DURATION } from '../styles/styles.constants';

export const SIDEBAR_DURATION = DURATION;

export const DEFAULT_LEFT_SIDEBAR_WIDTH = 300;
export const DEFAULT_RIGHT_SIDEBAR_WIDTH = 400;
export const SIDEBAR_TABS_WIDTH = 44;
export const DEFAULT_BOTTOM_SHEET_HEIGHT = 32;
export const MIN_CANVAS_HEIGHT_WITH_BOTTOM_SHEET = 120;

/** Числовые размеры React/CSS трактуются как px; строки не разбираем. */
export const toCssSize = (size: string | number) =>
  typeof size === 'number' ? `${size}px` : size;
