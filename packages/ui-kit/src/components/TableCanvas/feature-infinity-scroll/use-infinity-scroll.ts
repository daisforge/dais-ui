import { useCallback, useEffect, useRef } from 'react';

import { TableGlideInstanceProps } from '../TableGlideInstance/type';
import { ObjectForExtending, TableConfig } from '../types';
import {
  DEFAULT_ROW_THRESHOLD,
  INFINITY_SCROLL_SKELETON_COUNT
} from './constants';

type VisibleRegionChangedHandler<
  R extends ObjectForExtending,
  SR
> = NonNullable<TableGlideInstanceProps<R, SR>['onVisibleRegionChanged']>;

export const useInfinityScroll = <
  FilterStateType extends ObjectForExtending,
  RowIdType extends string | number,
  RowType extends ObjectForExtending,
  SummaryRowType = unknown
>({
  tableConfig,
  rows
}: {
  tableConfig: TableConfig<RowType, SummaryRowType, RowIdType, FilterStateType>;
  rows: RowType[];
}) => {
  const { infinityScroll } = tableConfig;
  const infinityScrollActiveInConfig = !!infinityScroll;

  const {
    onTrigger,
    hasMore = true,
    rowThreshold = DEFAULT_ROW_THRESHOLD,
    isLoading: isLoadingInfinityScroll = false
  } = infinityScroll ?? {};

  const effectiveThreshold = rowThreshold + INFINITY_SCROLL_SKELETON_COUNT;

  // Считаем infinity scroll активным, только если конфиг задан,
  // есть ещё данные для загрузки и передан callback
  const isHaveActiveInfinityScroll =
    infinityScrollActiveInConfig && hasMore && !!onTrigger;

  // Храним rows и onTrigger в refs, чтобы callback-и не пересоздавались
  // при каждом обновлении данных
  const triggerCalledRef = useRef(false);
  const rowsRef = useRef(rows);
  const onTriggerRef = useRef(onTrigger);

  rowsRef.current = rows;
  onTriggerRef.current = onTrigger;

  // Когда загрузка завершается (isLoading: true -> false),
  // сбрасываем guard, чтобы следующий скролл мог снова вызвать триггер
  const prevIsLoadingRef = useRef(isLoadingInfinityScroll);
  useEffect(() => {
    if (prevIsLoadingRef.current && !isLoadingInfinityScroll) {
      triggerCalledRef.current = false;
    }
    prevIsLoadingRef.current = isLoadingInfinityScroll;
  }, [isLoadingInfinityScroll]);

  // Region mode: проверяем через onVisibleRegionChanged,
  // достаточно ли пользователь доскроллил до конца списка
  const handleInfinityScrollRegionChange = useCallback<
    VisibleRegionChangedHandler<RowType, SummaryRowType>
  >(
    (range) => {
      if (!isHaveActiveInfinityScroll) return;
      if (isLoadingInfinityScroll) return;
      if (triggerCalledRef.current) return;

      const lastVisibleRow = range.y + range.height;
      if (lastVisibleRow >= rowsRef.current.length - effectiveThreshold) {
        triggerCalledRef.current = true;
        onTriggerRef.current?.(rowsRef.current);
      }
    },
    [isHaveActiveInfinityScroll, isLoadingInfinityScroll, effectiveThreshold]
  );

  return {
    /** Callback для onVisibleRegionChanged. */
    handleInfinityScrollRegionChange,
    infinityScrollActiveInConfig,
    isHaveActiveInfinityScroll,
    infinityScrollHasMore: hasMore
  };
};
