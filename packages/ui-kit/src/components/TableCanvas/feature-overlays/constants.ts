/**
 * z-index поповера.
 *
 * Поповер всегда рендерится поверх таблицы (canvas, хедер, строки).
 * Значение 9001 выбрано с запасом, чтобы в режиме fullscreen таблица
 * рендерилась внутри модалки (z-index ~9000), а поповер перекрывал и её.
 */
export const POPOVER_Z_INDEX = 9001;

/** Padding контента поповера (px). */
export const POPOVER_CONTENT_PADDING = 4;

/** Border-radius контента поповера (px). */
export const POPOVER_CONTENT_BORDER_RADIUS = 8;
