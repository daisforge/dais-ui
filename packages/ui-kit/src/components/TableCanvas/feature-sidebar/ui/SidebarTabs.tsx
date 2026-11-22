import React, { isValidElement } from 'react';

import { TableTooltip } from '../../components/TableTooltip';
import { TABLE_TOOLTIP_MOUSE_ENTER_DELAY } from '../../constants';
import { DOM_METADATA_ACTIONS } from '../../types/dom-metadata-actions';
import { SidebarTab } from '../../widgets/control-block/types';
import { TabItemStyled, TabsStyled } from './styled';

interface SidebarTabsProps {
  tabs: SidebarTab[];
  activeTabId: string | null;
  onTabChange: (id: string) => void;
  side?: 'left' | 'right';
}

export const SidebarTabs = ({
  tabs,
  activeTabId,
  onTabChange,
  side = 'right',
}: SidebarTabsProps) => (
  <TabsStyled view="divider" orientation="vertical" size="xs">
    {tabs
      .filter((tab) => tab.showInSidebar ?? true)
      .map((tab) => (
        <TableTooltip
          key={`tooltip-${tab.id}`}
          text={tab.label}
          placement={side === 'left' ? 'right' : 'left'}
          trigger="hover"
          hasArrow
          mouseEnterDelay={TABLE_TOOLTIP_MOUSE_ENTER_DELAY}
        >
          <TabItemStyled
            key={tab.id}
            view="divider"
            orientation="vertical"
            size="xs"
            selected={tab.id === activeTabId}
            aria-label={tab.label}
            tabIndex={0}
            contentLeft={isValidElement(tab.icon) && tab.icon}
            onClick={(e: React.MouseEvent<HTMLElement>) => {
              onTabChange(tab.id);
              tab.domMetadata?.onClick?.(e, {
                action: DOM_METADATA_ACTIONS.TOGGLE_SIDEBAR_TAB,
                tabId: tab.id,
              });
            }}
            style={{ justifyContent: 'center' }}
            className={tab.domMetadata?.className}
            {...tab.domMetadata?.dataAttributes}
          />
        </TableTooltip>
      ))}
  </TabsStyled>
);
