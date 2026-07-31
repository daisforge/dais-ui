import { useMemo } from 'react';

import {
  TableCanvasEmptyStateConfig,
  TableCanvasErrorStateConfig,
  TableContentStateOverlay,
} from './types';

export const useContentStateOverlay = ({
  borderLeftBottomRadiusRounded,
  borderLeftTopRadiusRounded,
  borderRightBottomRadiusRounded,
  borderRightTopRadiusRounded,
  errorStateConfig,
  emptyStateConfig,
  hasRenderableHeaders,
  isLoadingTable,
  rowsLength,
}: {
  borderLeftBottomRadiusRounded: boolean;
  borderLeftTopRadiusRounded: boolean;
  borderRightBottomRadiusRounded: boolean;
  borderRightTopRadiusRounded: boolean;
  errorStateConfig: TableCanvasErrorStateConfig | undefined;
  emptyStateConfig: TableCanvasEmptyStateConfig | undefined;
  hasRenderableHeaders: boolean;
  isLoadingTable: boolean;
  rowsLength: number;
}) => {
  const showErrorState = useMemo(
    () => !isLoadingTable && Boolean(errorStateConfig?.enabled),
    [errorStateConfig, isLoadingTable],
  );

  const showEmptyState = useMemo(() => {
    if (!emptyStateConfig?.enabled || showErrorState || isLoadingTable) {
      return false;
    }

    return rowsLength === 0;
  }, [emptyStateConfig, isLoadingTable, rowsLength, showErrorState]);

  const contentStateOverlay = useMemo<
    TableContentStateOverlay | undefined
  >(() => {
    if (showErrorState) {
      const {
        enabled: _enabled,
        custom,
        ...errorPageProps
      } = errorStateConfig ?? {};

      return {
        kind: 'error',
        displayMode: hasRenderableHeaders ? 'body-overlay' : 'full-content',
        borderLeftTopRadiusRounded,
        borderRightTopRadiusRounded,
        borderLeftBottomRadiusRounded,
        borderRightBottomRadiusRounded,
        custom,
        errorPageProps,
      };
    }

    if (showEmptyState) {
      const {
        enabled: _enabled,
        custom,
        ...emptyStateProps
      } = emptyStateConfig ?? {};

      return {
        kind: 'empty',
        displayMode: hasRenderableHeaders ? 'body-overlay' : 'full-content',
        borderLeftTopRadiusRounded,
        borderRightTopRadiusRounded,
        borderLeftBottomRadiusRounded,
        borderRightBottomRadiusRounded,
        custom,
        ...emptyStateProps,
      };
    }

    return undefined;
  }, [
    emptyStateConfig,
    errorStateConfig,
    hasRenderableHeaders,
    borderLeftBottomRadiusRounded,
    borderLeftTopRadiusRounded,
    borderRightBottomRadiusRounded,
    borderRightTopRadiusRounded,
    showEmptyState,
    showErrorState,
  ]);

  return {
    showErrorState,
    showEmptyState,
    contentStateOverlay,
  };
};
