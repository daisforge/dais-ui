/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Элемент фильтра для использования с адаптивными брейкпоинтами
 */
export interface FilterItem {
  /** Уникальный идентификатор */
  id: string;
  /** React-элемент для рендеринга */
  element: React.ReactNode;
  /** Дополнительные метаданные */
  metadata?: Record<string, any>;
}

/**
 * Модификации для элемента
 */
export interface ItemModifications {
  /** Ширина элемента (в пикселях, процентах или CSS значение) */
  width?: string | number;
  /** Процент от доступной ширины */
  widthPercent?: number;
  /** Дополнительные CSS стили */
  style?: React.CSSProperties;
  /** Кастомный класс */
  className?: string;
  /** Любые другие модификации */
  [key: string]: any;
}

/**
 * Конфигурация брейкпоинта
 */
export interface AdaptiveFiltersBreakpointConfig {
  /** ID элементов, видимых в mainBlock */
  visible: string[];
  /** ID элементов, перемещенных в popup/drawer */
  inOverlay?: string[];
  /** ID элементов, полностью скрытых */
  hidden?: string[];
  /** Модификации для конкретных элементов */
  modifications?: Record<string, ItemModifications>;
  /** Кастомные действия для этого брейкпоинта */
  customActions?: Record<string, any>;
}

/**
 * Действие для выполнения
 */
export interface FilterAction {
  /** Тип действия */
  type: 'show' | 'hide' | 'moveToOverlay' | 'resize' | 'modify' | 'custom';
  /** ID целевого элемента */
  targetId: string;
  /** Данные действия */
  payload?: any;
}

/**
 * Результат работы хука
 */
export interface UseAdaptiveFiltersResult {
  /** Видимые элементы в mainBlock */
  visibleItems: FilterItem[];
  /** Элементы для popover/drawer */
  overlayItems: FilterItem[];
  /** Полностью скрытые элементы */
  hiddenItems: FilterItem[];
  /** Модификации для видимых элементов */
  modifications: Record<string, ItemModifications>;
  /** Список действий для текущего брейкпоинта */
  actions: FilterAction[];
  /** Текущий активный брейкпоинт */
  activeBreakpoint: number;
  /** Есть ли элементы в popup */
  hasOverlayItems: boolean;
  /** Есть ли модификации */
  hasModifications: boolean;
  /** Кастомные действия */
  customActions: Record<string, any>;
  /** Хелпер для создания стилей элемента */
  getItemStyle: (
    modifications: ItemModifications | undefined,
    availableWidth?: number
  ) => React.CSSProperties;
  /** Хелпер для проверки активных фильтров */
  hasActiveFilters: (
    items: FilterItem[],
    filters: Record<string, any>
  ) => boolean;
}

/**
 * Параметры хука
 */
export interface UseAdaptiveFiltersParams {
  /** Массив всех элементов */
  items: FilterItem[];
  /** Текущая ширина */
  width: number;
  /** Конфигурация брейкпоинтов */
  breakpoints: Record<number, AdaptiveFiltersBreakpointConfig>;
}
