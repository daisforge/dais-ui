export const storiesClassNames = {
  root: 'df-stories',
  preview: 'df-stories-preview',
  previewRing: 'df-stories-preview__ring',
  previewGap: 'df-stories-preview__gap',
  previewBody: 'df-stories-preview__body',
  previewTitle: 'df-stories-preview__title',
  viewer: 'df-stories-viewer',
  overlay: 'df-stories-viewer__overlay',
  stage: 'df-stories-viewer__stage',
  banner: 'df-stories-banner',
  progress: 'df-stories-progress',
  progressItem: 'df-stories-progress__item',
  content: 'df-stories-content',
  action: 'df-stories-banner__action',
  arrowPrev: 'df-stories-viewer__arrow-prev',
  arrowNext: 'df-stories-viewer__arrow-next',
  close: 'df-stories-viewer__close'
} as const;

/**
 * Фирменный градиент обводки непросмотренного триггера.
 * Хардкод: в tokens/gradient подходящего пресета нет (проверено).
 */
export const STORIES_RING_GRADIENT =
  'linear-gradient(135deg, #08c6c9 0%, #99b0fe 100%)';

/** Заглушка тела триггера, когда превью-картинка не задана. */
export const STORIES_PREVIEW_FALLBACK_BG = '#ecf6fc';

/** view-transition-name баннера — по нему потребитель может переопределить анимацию смены групп. */
export const STORIES_VIEW_TRANSITION_NAME = 'df-stories-banner';

export const STORIES_DEFAULTS = {
  /** Длительность показа сегмента по умолчанию, мс. */
  duration: 5000,
  /** Порог удержания указателя, после которого включается пауза (мс). До него — тап-навигация. */
  pauseHoldDelay: 200,
  /** Доля ширины баннера слева, отвечающая за переход к предыдущему сегменту (⅓). */
  tapPrevZone: 1 / 3,
  /** Цвет оверлея (тот же, что у ModalDF). */
  overlayColor: '#060a0c47',
  /** z-index оверлея; баннер получает zIndex + 1. */
  zIndex: 9000
} as const;

export const STORIES_SIZES = {
  /** Диаметр круглого триггера, px. */
  circle: 98,
  /** Толщина каждого кольца (градиент / белый зазор), px. */
  ring: 2,
  /** Отступ от триггера до подписи, px. */
  titleGap: 6,
  /** Радиусы прямоугольного триггера: внешнее кольцо / белый зазор / тело. */
  rectRadiusOuter: 12,
  rectRadiusGap: 10,
  rectRadiusBody: 8,
  /** Баннер. */
  bannerMaxWidth: 430,
  bannerMaxHeight: 900,
  bannerRadius: 16,
  bannerPadding: 28,
  /** Внешний контейнер вьюера (баннер + просветы под стрелки). */
  stageWidth: 558,
  /** Прогресс-индикаторы. */
  progressHeight: 4,
  progressRadius: 2,
  progressFillRadius: 6,
  progressGap: 4
} as const;

/** data-component на DOM-элементе триггера — для идентификации в разметке. */
export const STORIES_PREVIEW_DATA_COMPONENT = 'StoriesPreview';
