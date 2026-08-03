import { bubble } from '@ui-kit/utils';
import { useState } from 'react';

import { TABLE_BUBBLES } from '../constants';
import { SIDEBAR_DURATION } from '../feature-right-sidebar/constants';
import { ObjectForExtending, TableConfig } from '../types';

const BUBBLE_DELAY = 100;

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
  // FIXME: ширину пока не выносим в конфиг — по дизайну она фиксированная. Открытие управляется через sidebarConfig.
  const internalOpenState = useState(
    tableConfig.sidebarConfig?.defaultOpen ?? false,
  );
  const [isOpen, setIsOpen] =
    tableConfig.sidebarConfig?.openState ?? internalOpenState;
  const [width, setWidth] = useState(400);

  const toggle = () => {
    setIsOpen(!isOpen);
    setTimeout(() => {
      if (refTableContainer?.current) {
        bubble(refTableContainer?.current, TABLE_BUBBLES.recalculateWidth);
      }
    }, SIDEBAR_DURATION * 1000 + BUBBLE_DELAY);
  };

  return {
    isOpen,
    width,
    toggle,
    setWidth,
  };
};
