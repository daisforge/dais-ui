/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from 'react';

import { ObjectForExtending, TableConfig } from '../types';
import { isAtBottom } from '.';

export const useInfinityScroll = <
  FilterStateType extends ObjectForExtending,
  RowIdType extends string | number,
  RowType extends ObjectForExtending,
  SummaryRowType = unknown,
>({
  tableConfig,
  rows,
}: {
  tableConfig: TableConfig<
    RowType,
    SummaryRowType,
    RowIdType,
    FilterStateType
    // SubRowType
  >;
  rows: RowType[];
}) => {
  const { infinityScroll } = tableConfig;
  const infinityScrollActiveInConfig = !!infinityScroll;

  const {
    onTrigger,
    hasMore = true,
    scrollThreshold = 100,
    isLoading: isLoadingInfinityScroll = false,
  } = infinityScroll ?? {};

  const isHaveActiveInfinityScroll =
    infinityScrollActiveInConfig && hasMore && !!onTrigger;

  // TODO: если будут проблемы с throttle, то план - вернуться к useStack
  // const { setStackRef, setFromEmptyToOne } = useStack({ rows, onTrigger });

  const infinityScrollHandler = useCallback(
    (event: React.UIEvent<HTMLDivElement>) => {
      if (!isHaveActiveInfinityScroll) {
        return;
      }

      const isAtBotom = isAtBottom({
        event,
        scrollThreshold,
      });

      if (isAtBotom && !isLoadingInfinityScroll) {
        onTrigger(rows);

        // TODO: если будут проблемы с throttle, то план - вернуться к useStack
        // setStackRef((prev) => {
        //     if (prev.length === 0) {
        //         setFromEmptyToOne((prev) => prev + 1);
        //     }
        //     return [...prev, onTrigger];
        // });
      }
    },
    [
      isHaveActiveInfinityScroll,
      isLoadingInfinityScroll,
      onTrigger,
      rows,
      scrollThreshold,
    ],
  );

  return {
    infinityScrollHandler,
    infinityScrollActiveInConfig,
    isHaveActiveInfinityScroll,
    infinityScrollHasMore: hasMore,
  };
};
