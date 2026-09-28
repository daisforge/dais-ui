export const DRAG_THRESHOLD = 5;

export const DEFAULT_TARGET_GAP = 12;

export const DEFAULT_MIN_WIDTH = 360;

export const DEFAULT_MIN_HEIGHT = 360;

/** Отступ от левого верхнего угла экрана, если позицию не из чего вычислить */
export const FALLBACK_POSITION_INDENT = 56;

export const RESIZE_THROTTLE_DELAY = 100;

export const LOCAL_STORAGE_DEFAULT_KEY = 'ai-agent-popup-state';

/** Пауза записи состояния в localStorage после последнего изменения */
export const STORAGE_SAVE_DELAY = 300;

/** Класс на корне окна во время перетаскивания */
export const DRAGGING_CLASS = 'ai-agent-popup-dragging';

/**
 * Элементы, с которых перетаскивание не начинается: клики по ним должны
 * работать как обычно. Потребитель может расширить список через
 * dragIgnoreSelector или атрибут data-no-drag.
 */
export const NO_DRAG_SELECTOR =
  'button, a, input, textarea, select, [contenteditable="true"], [data-no-drag]';

/**
 * Геометрия овального свечения по макету: овал 304x79 при поле ввода
 * высотой 41 и ширине контентной зоны окна 328. Свечение привязано к полю
 * ввода: свесы сверху и снизу постоянные, поэтому при авторосте поля овал
 * растёт по высоте вслед за ним, а при ресайзе окна тянется только ширина.
 */
export const GLOW_WIDTH_RATIO = 0.93;

/**
 * Симметричный свес свечения над и под полем ввода: центр овала совпадает
 * с центром поля. Значение это (высота свечения 72 минус высота поля
 * в одну строку 41) пополам; при авторосте поля свес остаётся тем же.
 */
export const GLOW_OVERHANG = 16;

/** Максимальная высота поля ввода при авторосте по умолчанию, px */
export const DEFAULT_INPUT_MAX_HEIGHT = 312;
