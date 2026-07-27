import { useFiltersList } from '@ui-kit/components/ListOfFilters';
import { BodyS } from '@ui-kit/components/Typography';
import { IconClose, IconSearch, IconSettingsFilter } from '@ui-kit/icons';
import {
  EmptySearchFallback,
  StyledClearBtn,
  StyledSearchBlock
} from '@ui-kit/shared/ui/Search';
import { textPrimary } from '@ui-kit/tokens';
import isEqual from 'lodash.isequal';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import {
  HeaderContextValueTypeInstance,
  useHeaderContext
} from '../../contexts';
import { ColumnConfig, ObjectForExtending, TableConfig } from '../../types';
import { FiltersVariables } from '../filtering.type';
import { useFilterManagement } from '../hooks/use-filter-management';
import { useFilterRenderer } from '../hooks/use-filter-renderer';
import { tableSidebarFilterBlockClassNames as cls } from './SideBarFilter.classnames';
import { ConfirmOrReset } from './SidebarFilterReset';
import { SidebarFilterContainerStyled, SidebarFiltersStyled } from './styled';

const EMPTY_OBJ = {};

type SidebarFiltersProps<
  FilterStateType extends ObjectForExtending,
  RowType extends ObjectForExtending,
  SummaryRowType,
  RowIdType extends string | number
> = {
  tableConfig: TableConfig<RowType, SummaryRowType, RowIdType, FilterStateType>;
  columnConfig: readonly ColumnConfig<RowType, SummaryRowType>[];
};

export const SidebarFilters = <
  FilterStateType extends ObjectForExtending,
  RowType extends ObjectForExtending,
  SummaryRowType,
  RowIdType extends string | number
>({
  tableConfig,
  columnConfig
}: SidebarFiltersProps<
  FilterStateType,
  RowType,
  SummaryRowType,
  RowIdType
>) => {
  const headerContextState = useHeaderContext<
    HeaderContextValueTypeInstance<FilterStateType> & FiltersVariables
  >();
  const [localFilters, setLocalFilters] = useState<FilterStateType>(
    headerContextState.filters || (EMPTY_OBJ as FilterStateType)
  );

  const wrappedSetFilters = useCallback(
    (
      value:
        | FilterStateType
        | ObjectForExtending
        | ((prev: FilterStateType) => FilterStateType)
    ) => {
      setLocalFilters((prev) => {
        // Если value - функция, вызываем её с предыдущим состоянием
        if (typeof value === 'function') {
          const result = (value as (prev: FilterStateType) => FilterStateType)(
            prev
          );
          return result;
        }

        // Если value - объект, просто возвращаем его
        return value as FilterStateType;
      });
    },
    []
  );

  useEffect(() => {
    setLocalFilters(
      headerContextState.filters || (EMPTY_OBJ as FilterStateType)
    );
  }, [headerContextState.filters]);

  const handleApply = useCallback(() => {
    headerContextState.setFilters?.(localFilters);
  }, [localFilters, headerContextState]);

  const { renderFilter } = useFilterRenderer<
    FilterStateType,
    RowType,
    SummaryRowType
  >();

  // Поиск по фильтрам
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value.toLowerCase());
    },
    []
  );
  const handleClear = useCallback(() => {
    setSearchQuery('');
  }, []);

  // Получаем конфиг сайдбара из tableConfig
  const sidebarConfig = tableConfig.filtering?.sidebarConfig;

  // Группируем фильтры
  const { columnFilters, globalFilters } = useMemo(() => {
    const columnFilters: Array<{
      key: string;
      label: string;
      render: () => React.ReactNode;
    }> = [];
    const globalFilters: Array<{
      key: string;
      label: string;
      render: () => React.ReactNode;
    }> = [];

    // Обрабатываем колоночные фильтры
    columnConfig.forEach((column) => {
      if (!column.filtering) return;

      const filterKey = column.filtering.keyInFilterState || column.key;
      const customRender = sidebarConfig?.items?.[filterKey]?.customRenderFn;

      const fallbackLabel =
        sidebarConfig?.items?.[filterKey]?.label ||
        (typeof column.name === 'string' ? column.name : column.nameAsString) ||
        filterKey;

      columnFilters.push({
        key: filterKey,
        label: fallbackLabel,
        render: () =>
          renderFilter(
            {
              columnConfig: column,
              headerContextState: {
                ...headerContextState,
                filters: localFilters,
                setFilters: wrappedSetFilters
              },
              popoverIsOpen: true,
              setPopoverIsOpen: () => {},
              tabIndex: 0,
              filterSource: 'sidebar'
            },
            customRender?.bind(this, localFilters, setLocalFilters),
            fallbackLabel
          )
      });
    });

    // Обрабатываем глобальные фильтры из sidebarConfig
    if (sidebarConfig?.items) {
      Object.entries(sidebarConfig.items).forEach(([key, config]) => {
        // Пропускаем если это переопределение колоночного фильтра
        if (columnFilters.some((f) => f.key === key)) return;

        globalFilters.push({
          key,
          label: config?.label || key,
          render: () =>
            config?.customRenderFn?.(localFilters, setLocalFilters) || null
        });
      });
    }

    return { columnFilters, globalFilters };
  }, [
    columnConfig,
    sidebarConfig,
    renderFilter,
    headerContextState,
    localFilters,
    wrappedSetFilters
  ]);

  // Получаем опции из headerContext и информацию по значениям фильтров
  const { options, filtersInfo, filtersOrder } = useFilterManagement({
    columnConfig,
    filters: localFilters,
    tableConfig,
    headerContextValue: headerContextState
  });

  // сортировка по filtersOrder
  const orderedFilters = useMemo(() => {
    // Создаем Map для быстрого поиска фильтров по ключу
    const allFiltersMap = new Map<string, (typeof columnFilters)[0]>();

    [...columnFilters, ...globalFilters].forEach((filter) => {
      allFiltersMap.set(filter.key, filter);
    });

    // Сортируем согласно filtersOrder и фильтруем по поиску
    return filtersOrder
      .map((key) => allFiltersMap.get(key))
      .filter((filter): filter is NonNullable<typeof filter> => {
        // Проверяем что фильтр существует
        if (!filter) return false;

        // Проверяем поисковый запрос
        const matchesSearch =
          filter.key.toLowerCase().includes(searchQuery.toLowerCase()) ||
          filter.label.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesSearch;
      });
  }, [filtersOrder, columnFilters, globalFilters, searchQuery]);

  // Получаем функцию для очистки фильтров
  const { clearAll } = useFiltersList({
    filters: localFilters ?? EMPTY_OBJ, // empty object if filters is undefined
    options,
    updateFilters: (key, newValue) => {
      if (setLocalFilters) {
        setLocalFilters((prev) => ({
          ...(prev ?? EMPTY_OBJ),
          [key]: newValue
        }));
      }
    },
    filtersInfo
  });

  // Функция для сброса к глобальному состоянию
  const handleReset = useCallback(() => {
    setLocalFilters(
      headerContextState.filters || (EMPTY_OBJ as FilterStateType)
    );
  }, [headerContextState.filters]);

  // Проверяем, есть ли различия между локальным и глобальным состоянием
  const isDirty = useMemo(
    () => !isEqual(localFilters, headerContextState.filters || EMPTY_OBJ),
    [localFilters, headerContextState.filters]
  );

  const isEmptySearch = !!(orderedFilters.length === 0 && searchQuery);

  const totalFiltersCount = columnFilters.length + globalFilters.length;

  return (
    <SidebarFilterContainerStyled $isEmptySearch={isEmptySearch}>
      {totalFiltersCount >= 1 && (
        <div className={cls.tableSidebarFilterSearchBlock}>
          <StyledSearchBlock
            placeholder="Поиск по фильтрам"
            value={searchQuery}
            onChange={handleSearchChange}
            contentLeft={
              <span style={{ marginRight: '2px' }}>
                <IconSearch />
              </span>
            }
            contentRight={
              searchQuery ? (
                <StyledClearBtn
                  onClick={handleClear}
                  aria-label="Очистить поиск"
                >
                  <IconClose />
                </StyledClearBtn>
              ) : undefined
            }
            clear
          />
        </div>
      )}
      <SidebarFiltersStyled $isEmptySearch={isEmptySearch}>
        {isEmptySearch && (
          <EmptySearchFallback icon={<IconSettingsFilter size="m" />} />
        )}
        {orderedFilters.map((filter) => (
          <div key={filter.key} className={cls.tableSidebarFilterItem}>
            <BodyS className={cls.tableSidebarFilterLabel} color={textPrimary}>
              {filter.label}
            </BodyS>
            <div className={cls.tableSidebarFilterControl}>
              {filter.render()}
            </div>
          </div>
        ))}
      </SidebarFiltersStyled>
      <ConfirmOrReset
        clear={clearAll}
        apply={handleApply}
        reset={handleReset}
        isDirty={isDirty}
      />
    </SidebarFilterContainerStyled>
  );
};
