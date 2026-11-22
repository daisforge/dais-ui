/**
 * Data-атрибут для поиска скрытой trigger-кнопки поповера внутри контейнера таблицы.
 * Используется вместо document.getElementById — ищем через containerEl.querySelector.
 */
export const DATA_POPOVER_TRIGGER = 'data-popover-trigger';

/**
 * Offset (в px) между target-элементом и содержимым поповера.
 *
 * Отрицательное значение подтягивает поповер ближе к иконке фильтра,
 * чтобы визуально он «вырастал» из неё, а не отстоял на дефолтный зазор PopoverBeta.
 */
export const POPOVER_OFFSET = -10;

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
