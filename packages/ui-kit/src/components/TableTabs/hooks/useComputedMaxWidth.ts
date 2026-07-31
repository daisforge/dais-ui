import { useMemo } from 'react';

import { TABS_CONTAINER_PADDING } from '../TableTabs.constants';
import { TTabsContainerOptions } from '../TableTabs.types';

/**
 * Хук для вычисления maxWidth контейнера табов
 * @param maxWidth - значение maxWidth из опций
 * @param parentContainerWidth - ширина родительского контейнера (для вычисления % и автоматического maxWidth)
 */
export const useComputedMaxWidth = (
  maxWidth: TTabsContainerOptions['maxWidth'],
  parentContainerWidth: number | null,
) =>
  useMemo(() => {
    // Если maxWidth не задан - используем ширину родительского контейнера
    if (!maxWidth) {
      if (parentContainerWidth !== null) {
        return `${parentContainerWidth - TABS_CONTAINER_PADDING * 2}px`;
      }
      return undefined;
    }

    if (typeof maxWidth === 'string') {
      // Если строка содержит %, вычисляем на основе ширины родительского контейнера
      if (maxWidth.includes('%')) {
        if (parentContainerWidth !== null) {
          const percent = parseFloat(maxWidth);
          if (!Number.isNaN(percent)) {
            return `${(parentContainerWidth * percent) / 100}px`;
          }
        }
        // Если parentContainerWidth еще не известен, возвращаем undefined (будет пересчитано позже)
        return undefined;
      }
      // Если строка без % - используем как есть (например, '250px')
      return maxWidth;
    }

    // Если число - фиксированное значение в пикселях
    return `${maxWidth}px`;
  }, [maxWidth, parentContainerWidth]);
