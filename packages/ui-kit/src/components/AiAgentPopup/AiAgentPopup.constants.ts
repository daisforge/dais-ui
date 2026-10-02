export const DRAG_THRESHOLD = 5;

/**
 * Толщина светящейся рамки, нарисованной снаружи блочной модели
 * (inset:-4px у floating-оболочки). В размеры контейнера она не входит,
 * поэтому в расчётах границ окна её учитываем отдельно: для границ окно
 * считается на столько шире с каждой стороны, иначе рамка вылезает
 * за dragBoundary при перетаскивании и ресайзе к краю.
 */
export const GLOW_BORDER = 4;

export const DEFAULT_TARGET_GAP = 12;

export const DEFAULT_MIN_WIDTH = 360;

export const DEFAULT_MIN_HEIGHT = 360;

/**
 * Внутренний отступ белой карточки до контента. Вместе со светящейся рамкой
 * (GLOW_BORDER) даёт отступ контента от внешнего края окна 12 + 4 = 16,
 * как в макете.
 */
export const CARD_PADDING = 12;

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
 * высотой 41 и ширине контентной зоны окна 328. При ресайзе окна
 * тянется только ширина овала, высота фиксированная.
 */
export const GLOW_WIDTH_RATIO = 0.93;

/**
 * Высота овала свечения фиксированная (макет): при авторосте поля овал
 * не растягивается, а держится у верхней границы поля и поднимается
 * вместе с ней.
 */
export const GLOW_HEIGHT = 79;

/**
 * Свес свечения над верхней границей поля ввода (макет). При поле
 * в одну строку (41px) снизу остаётся 79 - 41 - 25 = 13px, то есть овал
 * смещён к верхней кромке; при росте поля нижняя часть овала уходит
 * за поле, а верхний свес остаётся прежним.
 */
export const GLOW_TOP_OVERHANG = 25;

/** Максимальная высота поля ввода при авторосте по умолчанию, px (макет).
 * Высота всей текстовой рамки, включая её внутренние отступы */
export const DEFAULT_INPUT_MAX_HEIGHT = 160;

/** Обвязка поля размера s вокруг textarea: внутренние отступы рамки.
 * Поле в одну строку 41px при textarea 18px */
export const INPUT_VERTICAL_CHROME = 23;

/** Ширина полосы иконок левой панели (свёрнутое состояние), макет */
export const LEFT_PANEL_RAIL_WIDTH = 44;

/** Ширина открытого раздела левой панели, макет */
export const LEFT_PANEL_SECTION_WIDTH = 300;

/** Отступ до и после вертикального девайдера между левой панелью и чатом */
export const LEFT_PANEL_DIVIDER_GAP = 4;

/** Толщина вертикального девайдера */
export const LEFT_PANEL_DIVIDER_WIDTH = 1;

/** Высота шапки открытого раздела: иконка, заголовок, крестик, макет */
export const LEFT_PANEL_HEADER_HEIGHT = 40;

/** Максимальный размер окна при ресайзе (и по ширине, и по высоте), макет */
export const POPUP_MAX_SIZE = 800;

/** Минимальная ширина окна, когда открыт раздел левой панели, макет */
export const MIN_WIDTH_WITH_SECTION = 615;

/**
 * Прирост ширины окна при открытии раздела: раздел (300) заменяет полосу
 * иконок (44), окно дорастягивается на разницу, чтобы чат не сужался.
 * Совпадает с разницей минимумов (615 - 360).
 */
export const LEFT_PANEL_SECTION_DELTA =
  MIN_WIDTH_WITH_SECTION - DEFAULT_MIN_WIDTH;
