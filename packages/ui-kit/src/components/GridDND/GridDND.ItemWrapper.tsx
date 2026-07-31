import React, { ReactNode } from 'react';

import { GridDNDClassNames } from './GridDND.constants';
import { GridDNDItemConfig } from './GridDND.types';

export interface GridDNDItemWrapperProps {
  item: GridDNDItemConfig;
  actionsSlot?: ReactNode;
  actionsSlotStyle?: React.CSSProperties;
  children: React.ReactNode;
}

export const ItemWrapper = ({
  item,
  actionsSlot,
  actionsSlotStyle,
  children,
}: GridDNDItemWrapperProps) => (
  <div
    style={{ height: '100%', position: 'relative' }}
    id={item.id}
    className={GridDNDClassNames.gridItemWrapper}
  >
    {actionsSlot && (
      <div
        style={{
          position: 'absolute',
          right: 16,
          top: 16,
          ...actionsSlotStyle,
        }}
        className={GridDNDClassNames.noDrag}
      >
        {actionsSlot}
      </div>
    )}
    {children}
  </div>
);
