import { useMemo } from 'react';

import { SKELETON_ROW } from '../feature-infinity-scroll';
import { INFINITY_SCROLL_SKELETON_COUNT } from '../feature-infinity-scroll/constants';
import { ObjectForExtending } from '../types';
import { arrWithLength } from '../utils/arrWithLength';

export const useRowsWithSkeletonsOrNot = <RowType extends ObjectForExtending>({
  isLoadingTable,
  skeletonRowsCount,
  rows,
  infinityScrollActiveInConfig,
  infinityScrollHasMore
}: {
  isLoadingTable: boolean;
  skeletonRowsCount: number;
  rows: readonly RowType[];
  infinityScrollActiveInConfig: boolean;
  infinityScrollHasMore: boolean;
}) => {
  const rowsWithSkeletonsOrNot = useMemo(() => {
    if (isLoadingTable) {
      return arrWithLength(skeletonRowsCount).map(
        () => SKELETON_ROW as unknown as RowType
      );
    }
    const showInfinityScrollSkeleton =
      infinityScrollActiveInConfig && infinityScrollHasMore;

    if (showInfinityScrollSkeleton) {
      const rowsWithSkeletons = [
        ...rows,
        ...arrWithLength(INFINITY_SCROLL_SKELETON_COUNT).map(
          () => SKELETON_ROW as unknown as RowType
        )
      ];
      return rowsWithSkeletons;
    }

    return rows;
  }, [
    skeletonRowsCount,
    rows,
    infinityScrollHasMore,
    infinityScrollActiveInConfig,
    isLoadingTable
  ]);

  return {
    rowsWithSkeletonsOrNot
  };
};
