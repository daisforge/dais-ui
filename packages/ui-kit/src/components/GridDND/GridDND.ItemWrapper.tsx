import React, { ReactNode } from 'react';

import { GridDNDClassNames } from './GridDND.constants';
import { GridDNDItemConfig } from './GridDND.types';

export interface GridDNDItemWrapperProps {
  item: GridDNDItemConfig;
  actionsSlot?: ReactNode;
  children: React.ReactNode;
}

// actionsSlot рендерится в потоке relative-контейнера. Позиционирование берёт на
// себя сам контент (напр. AnalyticalWidget.DotsIconButton с пропом absolute), а
// не обёртка, поэтому отступы контролируются на стороне ui-kit.
export const ItemWrapper = ({
  item,
  actionsSlot,
  children,
}: GridDNDItemWrapperProps) => (
  <div
    style={{ height: '100%', position: 'relative' }}
    id={item.id}
    className={GridDNDClassNames.gridItemWrapper}
  >
    {actionsSlot}
    {children}
  </div>
);
