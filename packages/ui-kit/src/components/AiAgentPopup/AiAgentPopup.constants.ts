export const DRAG_THRESHOLD = 5;

export const DEFAULT_TARGET_GAP = 12;

export const DEFAULT_MIN_WIDTH = 360;

export const DEFAULT_MIN_HEIGHT = 360;

/** Отступ от левого верхнего угла экрана, если позицию не из чего вычислить */
export const FALLBACK_POSITION_INDENT = 56;

export const RESIZE_THROTTLE_DELAY = 100;

export const LOCAL_STORAGE_DEFAULT_KEY = 'ai-agent-popup-state';

/**
 * Элементы, с которых перетаскивание не начинается: клики по ним должны
 * работать как обычно. Потребитель может расширить список через
 * dragIgnoreSelector или атрибут data-no-drag.
 */
export const NO_DRAG_SELECTOR =
  'button, a, input, textarea, select, [contenteditable="true"], [data-no-drag]';

/**
 * Геометрия овального свечения по макету: овал 304x79 при ширине окна 360.
 * Ширина в долях от ширины окна, высота фиксированная и при ресайзе
 * не меняется.
 */
export const GLOW_WIDTH_RATIO = 0.84;

export const GLOW_HEIGHT = 79;

export const GLOW_BOTTOM_OFFSET = 8;
