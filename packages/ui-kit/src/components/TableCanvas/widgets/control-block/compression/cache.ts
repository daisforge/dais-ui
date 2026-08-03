/**
 * Кэш результатов компрессии.
 *
 * Идея: для конкретной конфигурации контрл-блока (ключ) запоминаем
 * диапазоны ширины, в которых итоговое состояние не меняется.
 * Диапазон: от ширины самого сжатого состояния (min) до доступной
 * ширины, при которой оно было рассчитано (max). Попали в диапазон
 * при ресайзе, состояние берём готовым без пересчёта шагов.
 *
 * Кэш живёт в WeakMap по DOM элементу контейнера таблицы, поэтому
 * переживает ремаунт ControlBlock (например, схлопывание таблицы),
 * а при удалении элемента собирается GC.
 */
import { isStructuredCloneSupported } from '@ui-kit/utils';

import { CompressionCache, RangeCache, ToolsMenuState } from '../types';

const elementCaches = new WeakMap<HTMLDivElement, CompressionCache>();

/** Глубокая копия состояния (structuredClone с JSON фоллбеком) */
export const cloneState = (state: ToolsMenuState): ToolsMenuState =>
  isStructuredCloneSupported
    ? structuredClone(state)
    : JSON.parse(JSON.stringify(state));

/**
 * Достаёт (или создаёт) кэш для DOM элемента таблицы.
 * Без элемента возвращает свежий изолированный кэш.
 */
export const getOrCreateElementCache = (
  element: HTMLDivElement | null | undefined,
): CompressionCache => {
  if (!element) return { cache: new Map() };
  let elementCache = elementCaches.get(element);
  if (!elementCache) {
    elementCache = { cache: new Map() };
    elementCaches.set(element, elementCache);
  }
  return elementCache;
};

/** Ищет закэшированное состояние для данной доступной ширины */
export const findCachedState = (
  cache: CompressionCache,
  key: string,
  width: number,
): ToolsMenuState | null => {
  const cacheEntry = cache.cache.get(key);
  if (!cacheEntry) return null;
  const foundRange = cacheEntry.ranges.find(
    (range) => width >= range.min && width <= range.max,
  );
  return foundRange?.state ?? null;
};

/** Кладёт рассчитанное состояние в кэш диапазоном [stateWidth, width] */
export const addToCache = (
  cache: CompressionCache,
  key: string,
  width: number,
  state: ToolsMenuState,
  stateWidth: number,
  originalState: ToolsMenuState,
) => {
  let cacheEntry = cache.cache.get(key);

  if (!cacheEntry) {
    cacheEntry = {
      originalState: cloneState(originalState),
      ranges: [],
    };
    cache.cache.set(key, cacheEntry);
  }

  const newRange: RangeCache = {
    min: stateWidth,
    max: width,
    state: cloneState(state),
    stateWidth,
  };

  // Диапазон, целиком накрытый существующим, не добавляем
  const isOverlapped = cacheEntry.ranges.some(
    (range) => newRange.min >= range.min && newRange.max <= range.max,
  );
  if (isOverlapped) return;

  cacheEntry.ranges.push(newRange);
  cacheEntry.ranges.sort((a, b) => a.min - b.min);
};
