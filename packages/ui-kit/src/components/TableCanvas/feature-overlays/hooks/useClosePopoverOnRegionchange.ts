import { useCallback, useRef } from 'react';

import { TableGlideInstanceProps } from '../../TableGlideInstance/type';
import { ObjectForExtending } from '../../types';
import { getPopoverBehavior, TablePopoverContextValue } from '../context';

interface UseClosePopoverOnRegionChangeOptions {
  /** Порог скролла для закрытия (в пикселях) */
  scrollThreshold?: number;
}

interface LastRegion {
  x: number;
  y: number;
  tx: number;
  ty: number;
}

/**
 * Закрывает поповер при скролле таблицы. Ось берётся из правил открытого
 * поповера (`behavior.closeOnScroll`): фильтр шапки закрывается только при
 * горизонтальном скролле, canvas-поповер при любом.
 *
 * Сдвиг считаем по первой видимой ячейке (`range.x`, `range.y`) и смещению
 * внутри неё (`tx`, `ty`): одно смещение не меняется, если прокрутили ровно на
 * целое число строк или колонок. Положение держим всегда, а не только при
 * открытом поповере: первый же сдвиг после открытия сравнивается с реальным
 * положением.
 */
export function useClosePopoverOnRegionChange<
  RowType extends ObjectForExtending,
  SummaryRowType,
>(
  tablePopoverValue: TablePopoverContextValue,
  options: UseClosePopoverOnRegionChangeOptions = {},
) {
  const { scrollThreshold = 3 } = options;

  const lastRegionRef = useRef<LastRegion | null>(null);
  // Состояние читаем через ref: обработчик уходит в Glide и не должен
  // меняться на каждое открытие и закрытие поповера.
  const valueRef = useRef(tablePopoverValue);
  valueRef.current = tablePopoverValue;

  const handleVisibleRegionChange = useCallback<
    NonNullable<
      TableGlideInstanceProps<RowType, SummaryRowType>['onVisibleRegionChanged']
    >
  >(
    (range, tx, ty) => {
      const last = lastRegionRef.current;
      lastRegionRef.current = { x: range.x, y: range.y, tx, ty };

      const { state, close } = valueRef.current;
      const behavior = getPopoverBehavior(state);
      if (!state.isOpen || !behavior?.closeOnScroll || !last) return;

      const movedX =
        range.x !== last.x || Math.abs(tx - last.tx) > scrollThreshold;
      const movedY =
        range.y !== last.y || Math.abs(ty - last.ty) > scrollThreshold;

      if (movedX || (behavior.closeOnScroll === 'xy' && movedY)) {
        close();
      }
    },
    [scrollThreshold],
  );

  return handleVisibleRegionChange;
}
