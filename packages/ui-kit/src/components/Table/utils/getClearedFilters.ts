import { FilteringConfig } from '../types/table-config.type';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getTypedEntries<T extends Record<string, any>>(
  obj: T,
): Array<[keyof T, T[keyof T]]> {
  return Object.entries(obj) as Array<[keyof T, T[keyof T]]>;
}

/**
 * Возвращает очищенные значения фильтров.
 * Если задан filtersInfo, собирает clearedValue из него, иначе берёт устаревший clearedValue.
 * @param filtering Конфигурация фильтрации
 * @returns T | undefined - Очищенные значения фильтров или undefined, если filtering не передан
 */
export function getClearedFilters<T>(
  filtering?: FilteringConfig<T>,
): T | undefined {
  if (!filtering) return undefined;

  if (filtering.filtersInfo) {
    return getTypedEntries(filtering.filtersInfo).reduce<T>(
      (acc, [key, value]) => {
        acc[key] = value.clearedValue;
        return acc;
      },
      {} as T,
    );
  }

  return filtering.clearedValue;
}
