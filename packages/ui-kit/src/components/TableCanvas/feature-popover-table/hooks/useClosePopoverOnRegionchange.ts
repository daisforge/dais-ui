import { useCallback, useEffect, useRef } from 'react';

import { TableGlideInstanceProps } from '../../TableGlideInstance/type';
import { ObjectForExtending } from '../../types';
import { TablePopoverContextValue } from '../context';

interface UseClosePopoverOnRegionChangeOptions {
  /** Порог скролла для закрытия (в пикселях) */
  scrollThreshold?: number;
  /** Тип контента, для которого применяется логика */
  targetContentType?: string;
}

export function useClosePopoverOnRegionChange<
  RowType extends ObjectForExtending,
  SummaryRowType,
>(
  tablePopoverValue: TablePopoverContextValue,
  options: UseClosePopoverOnRegionChangeOptions = {},
) {
  const { scrollThreshold = 3, targetContentType = 'filter' } = options;

  const lastTxRef = useRef<number | null>(null);

  // Сбрасываем lastTxRef при открытии поповера
  useEffect(() => {
    if (tablePopoverValue.state.isOpen) {
      lastTxRef.current = null;
    }
  }, [tablePopoverValue.state.isOpen]);

  // Закрываем поповер фильтра при изменении региона (горизонтальный скролл)
  const handleVisibleRegionChange = useCallback<
    NonNullable<
      TableGlideInstanceProps<RowType, SummaryRowType>['onVisibleRegionChanged']
    >
  >(
    (_range, tx, _ty) => {
      if (
        tablePopoverValue.state.isOpen &&
        tablePopoverValue.state.contentType === targetContentType
      ) {
        if (tx === 0) {
          lastTxRef.current = 0;
          return;
        }

        if (lastTxRef.current === null) {
          lastTxRef.current = tx;
          return;
        }

        if (Math.abs(lastTxRef.current - tx) > scrollThreshold) {
          tablePopoverValue.close();
        }

        lastTxRef.current = tx;
      }
    },
    [tablePopoverValue, scrollThreshold, targetContentType],
  );

  return handleVisibleRegionChange;
}
