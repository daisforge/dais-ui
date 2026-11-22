/**
 * Размеры Popover фильтров по умолчанию, в px.
 * С ресайзом идут в resizable-конфиг, без ресайза ограничивают карточку через CSS.
 */
export const FILTERS_POPOVER_SIZE = {
  minWidth: 360,
  maxWidth: 700,
  minHeight: 430,
  defaultWidth: 360,
  defaultHeight: 430,
  /** Доля высоты окна, выше которой Popover не растягивается. */
  maxHeightViewportRatio: 0.8,
  /** Максимальная высота, когда окна нет (SSR). */
  fallbackMaxHeight: 600,
} as const;
