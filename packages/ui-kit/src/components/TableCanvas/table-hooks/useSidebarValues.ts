import { useState } from 'react';

import { DEFAULT_RIGHT_SIDEBAR_WIDTH } from '../feature-sidebar/constants';
import { ObjectForExtending, TableConfig } from '../types';
import { useSidebarOpenState, useSidebarResize } from './useSidebarOpenState';

export const useSidebarState = <
  FilterStateType extends ObjectForExtending,
  RowIdType extends string | number,
  RowType extends ObjectForExtending,
  SummaryRowType = unknown,
>({
  tableConfig,
  refTableContainer,
}: {
  tableConfig: TableConfig<RowType, SummaryRowType, RowIdType, FilterStateType>;
  refTableContainer?: React.RefObject<HTMLElement>;
}) => {
  const { isOpen, toggle } = useSidebarOpenState(tableConfig.sidebarConfig);
  // Числовой width/setWidth сохраняют прежний контракт useSidebar().
  const [width, setWidth] = useState(DEFAULT_RIGHT_SIDEBAR_WIDTH);
  const effectiveWidth = tableConfig.sidebarConfig?.width ?? width;
  useSidebarResize({ isOpen, width: effectiveWidth, refTableContainer });

  return {
    isOpen,
    width,
    toggle,
    setWidth,
    effectiveWidth,
  };
};
