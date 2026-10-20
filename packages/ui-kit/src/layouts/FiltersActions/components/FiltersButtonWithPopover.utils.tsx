import type { CompPopoverProps } from '@ui-kit/components/Popover';
import { IconResizeCorneredFill } from '@ui-kit/icons';
import { textTertiary } from '@ui-kit/tokens';
import React from 'react';

import { FILTERS_POPOVER_SIZE } from './FiltersButtonWithPopover.constants';

type ResizableProp = CompPopoverProps['resizable'];
type ResizableConfig = Exclude<ResizableProp, boolean | undefined>;

// Высоту считаем при каждом вызове, а не при загрузке модуля: окно могли
// уменьшить после загрузки страницы.
const getMaxHeight = () =>
  typeof window !== 'undefined'
    ? window.innerHeight * FILTERS_POPOVER_SIZE.maxHeightViewportRatio
    : FILTERS_POPOVER_SIZE.fallbackMaxHeight;

export const getDefaultFiltersPopoverResizable = (): ResizableConfig => ({
  minHeight: FILTERS_POPOVER_SIZE.minHeight,
  minWidth: FILTERS_POPOVER_SIZE.minWidth,
  maxWidth: FILTERS_POPOVER_SIZE.maxWidth,
  maxHeight: getMaxHeight(),
  defaultSize: {
    width: FILTERS_POPOVER_SIZE.defaultWidth,
    height: FILTERS_POPOVER_SIZE.defaultHeight,
  },
  directions: ['bottom-right'],
  icons: {
    topRight: null,
    bottomRight: <IconResizeCorneredFill color={textTertiary} />,
    bottomLeft: null,
    topLeft: null,
  },
  hiddenIcons: ['bottom-left', 'top-left', 'top-right'],
});

/**
 * Итоговый resizable для Popover фильтров: `false` выключает ресайз,
 * `true` или отсутствие пропа дают настройки по умолчанию, объект
 * накладывается поверх настроек по умолчанию.
 */
export const getFiltersPopoverResizable = (
  external: ResizableProp,
): ResizableProp => {
  if (external === false) return false;

  const defaults = getDefaultFiltersPopoverResizable();

  if (typeof external === 'object' && external !== null) {
    return { ...defaults, ...external };
  }

  return defaults;
};
