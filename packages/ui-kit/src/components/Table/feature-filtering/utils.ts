import { ColumnConfig, ObjectForExtending } from '../types';
import { FilteringConfig, TableConfig } from '../types/table-config.type';

export function inputStopPropagation(
  event: React.KeyboardEvent<HTMLInputElement>,
) {
  if (['ArrowLeft', 'ArrowRight'].includes(event.key)) {
    event.stopPropagation();
  }
}

export function selectStopPropagation(
  event: React.KeyboardEvent<HTMLInputElement>,
) {
  if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) {
    event.stopPropagation();
  }
}

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
/**
 * Проверяет наличие фильтров в конфигурации таблицы
 *
 * Функция анализирует переданную конфигурацию таблицы и определяет,
 * есть ли в ней какие-либо фильтры (колоночные или глобальные из sidebarConfig).
 *
 * @template RowType - Тип строки таблицы, должен расширять ObjectForExtending
 * @template SummaryRowType - Тип итоговой строки таблицы
 * @template FilterStateType - Тип состояния фильтров, должен расширять ObjectForExtending
 *
 * @param {Object} params - Параметры для проверки фильтров
 * @param {TableConfig<RowType, SummaryRowType, any, FilterStateType>} params.tableConfig - Конфигурация таблицы
 * @param {readonly ColumnConfig<RowType, SummaryRowType>[]} params.columnConfig - Конфигурация колонок
 *
 * @returns {boolean} - Возвращает true, если в таблице есть хотя бы один фильтр
 * (колоночный или глобальный), иначе false
 *
 * @example
 * // Проверка наличия фильтров
 * const isHasFilters = isHasFilters({
 *   tableConfig: myTableConfig,
 *   columnConfig: myColumnConfig
 * });
 *
 * if (isHasFilters) {
 *   // Показать UI для работы с фильтрами
 * }
 */
export type HasFiltersParams<
  RowType extends ObjectForExtending,
  SummaryRowType,
  RowIdType extends string | number,
  FilterStateType extends ObjectForExtending,
> = {
  tableConfig: TableConfig<RowType, SummaryRowType, RowIdType, FilterStateType>;
  columnConfig: readonly ColumnConfig<RowType, SummaryRowType>[];
};

export const isHasFilters = <
  RowType extends ObjectForExtending,
  SummaryRowType,
  RowIdType extends string | number,
  FilterStateType extends ObjectForExtending,
>(
  params: HasFiltersParams<RowType, SummaryRowType, RowIdType, FilterStateType>,
): boolean => {
  const { tableConfig, columnConfig } = params;

  // Проверяем колоночные фильтры
  const hasColumnFilters = columnConfig.some((item) => !!item.filtering);

  // Проверяем глобальные фильтры из sidebarConfig
  const hasGlobalFilters =
    tableConfig.filtering?.sidebarConfig?.items &&
    Object.values(tableConfig.filtering.sidebarConfig.items).some(
      (value) => !!value?.customRenderFn,
    );

  return (hasColumnFilters || hasGlobalFilters) ?? false;
};
