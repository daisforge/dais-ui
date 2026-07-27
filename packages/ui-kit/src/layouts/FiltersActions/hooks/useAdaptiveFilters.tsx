/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useMemo } from 'react';

import type {
  AdaptiveFiltersBreakpointConfig,
  FilterAction,
  FilterItem,
  ItemModifications,
  UseAdaptiveFiltersParams,
  UseAdaptiveFiltersResult
} from './types';

/**
 * Построение результата на основе конфигурации брейкпоинта
 */
function buildResult(
  items: FilterItem[],
  activeBreakpoint: number,
  config: AdaptiveFiltersBreakpointConfig
): Omit<UseAdaptiveFiltersResult, 'getItemStyle' | 'hasActiveFilters'> {
  const {
    visible = [],
    inOverlay = [],
    hidden = [],
    modifications = {},
    customActions = {}
  } = config;

  // Создаем Set'ы для быстрого поиска
  const visibleIds = new Set(visible);
  const overlayIds = new Set(inOverlay);
  const hiddenIds = new Set(hidden);

  // Разделяем элементы по категориям
  const visibleItems = items.filter((item) => visibleIds.has(item.id));
  const overlayItems = items.filter((item) => overlayIds.has(item.id));
  const hiddenItems = items.filter((item) => hiddenIds.has(item.id));

  // Cписок действи
  const actions: FilterAction[] = [];

  // Действия для видимых элементов
  visible.forEach((id) => {
    actions.push({ type: 'show', targetId: id, payload: null });
  });

  // Действия для элементов в popover
  inOverlay.forEach((id) => {
    actions.push({ type: 'moveToOverlay', targetId: id, payload: null });
  });

  // Действия для скрытых элементов
  hidden.forEach((id) => {
    actions.push({ type: 'hide', targetId: id, payload: null });
  });

  // Дйствия модификаций
  Object.entries(modifications).forEach(([id, mods]) => {
    actions.push({
      type: 'modify',
      targetId: id,
      payload: mods
    });
  });

  return {
    visibleItems,
    overlayItems,
    hiddenItems,
    modifications,
    actions,
    activeBreakpoint,
    hasOverlayItems: overlayItems.length > 0,
    hasModifications: Object.keys(modifications).length > 0,
    customActions
  };
}

/**
 * Хук для адаптивного управления элементами фильтров на основе брейкпоинтов
 *
 * @example
 * ```tsx
 * const {
 *   visibleItems,
 *   popupItems,
 *   modifications,
 *   getItemStyle,
 *   hasActiveFilters
 * } = useAdaptiveFilters({
 *   items: allFilterItems,
 *   width: dimensions.availableMainBlockWidth,
 *   breakpoints: {
 *     1920: {
 *       visible: ['segments', 'search', 'combobox1'],
 *       modifications: {
 *         segments: { width: 'auto' },
 *         combobox1: { width: '168px' }
 *       }
 *     },
 *     1400: {
 *       visible: ['segments', 'search'],
 *       inOverlay: ['combobox1']
 *     }
 *   }
 * });
 *
 * // Рендеринг
 * {visibleItems.map(item => (
 *   <div style={getItemStyle(modifications[item.id], availableWidth)}>
 *     {item.element}
 *   </div>
 * ))}
 *
 * // Проверка активных фильтров
 * const hasActive = hasActiveFilters(popupItems, filters);
 * ```
 */
export const useAdaptiveFilters = ({
  items,
  width,
  breakpoints
}: UseAdaptiveFiltersParams): UseAdaptiveFiltersResult => {
  // Вычисляем состояние на основе брейкпоинтов
  const state = useMemo(() => {
    // Сортируем брейкпоинты по убыванию
    const sortedBreakpoints = Object.entries(breakpoints)
      .map(([bp, config]) => ({ breakpoint: Number(bp), config }))
      .sort((a, b) => b.breakpoint - a.breakpoint);

    // Находим активный брейкпоинт
    const activeBreakpointData = sortedBreakpoints.find(
      ({ breakpoint }) => width >= breakpoint
    );

    if (!activeBreakpointData) {
      // Если не нашли подходящий брейкпоинт - берем минимальный (0)
      const fallbackBreakpoint =
        sortedBreakpoints[sortedBreakpoints.length - 1];
      return buildResult(
        items,
        fallbackBreakpoint?.breakpoint || 0,
        fallbackBreakpoint?.config || {
          visible: [],
          inOverlay: [],
          hidden: []
        }
      );
    }

    return buildResult(
      items,
      activeBreakpointData.breakpoint,
      activeBreakpointData.config
    );
  }, [items, width, breakpoints]);

  // Хелпер для создания стилей
  const getItemStyle = useCallback(
    (
      modifications: ItemModifications | undefined,
      availableWidth?: number
    ): React.CSSProperties => {
      if (!modifications) return {};

      const style: React.CSSProperties = { ...modifications.style };

      // Обрабатываем ширину
      if (modifications.width) {
        style.width = modifications.width;
      } else if (modifications.widthPercent && availableWidth) {
        style.width = `${
          (availableWidth * modifications.widthPercent) / 100
        }px`;
      } else if (modifications.widthPercent) {
        style.width = `${modifications.widthPercent}%`;
      }

      return style;
    },
    []
  );

  // Хелпер для проверки активных фильтров
  const hasActiveFilters = useCallback(
    (filterItems: FilterItem[], filters: Record<string, any>): boolean =>
      filterItems.some((item) => {
        const filterValue = filters[item.id];
        if (filterValue === undefined) return false;

        // Проверяем разные типы значений
        if (Array.isArray(filterValue)) {
          return filterValue.length > 0;
        }
        if (typeof filterValue === 'boolean') {
          return filterValue === true;
        }
        if (typeof filterValue === 'string') {
          return filterValue !== '';
        }
        if (typeof filterValue === 'number') {
          return filterValue !== 0;
        }

        return Boolean(filterValue);
      }),
    []
  );

  return {
    ...state,
    getItemStyle,
    hasActiveFilters
  };
};
