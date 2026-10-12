import React from 'react';

import {
  SidebarTabsStateProps,
  useSidebarTabsState,
} from '../useSidebarTabsState';
import { SidebarContentLayout } from './SidebarContentLayout';
import { SidebarTabs } from './SidebarTabs';
import { SidebarContainer, SidebarContent, SidebarTogglePanel } from './styled';
import { tableSidebarClassNames as cls } from './TableSidebar.classnames';

export type TableSidebarProps = Omit<
  SidebarTabsStateProps,
  'isOpen' | 'toggle'
> & {
  side?: 'left' | 'right';
  children?: React.ReactNode;
  sidebarState: { isOpen: boolean; width: string | number; toggle: () => void };
  preserveMinimumWidth?: boolean;
  $borderRightBottomRadiusRounded?: boolean;
  $borderRightTopRadiusRounded?: boolean;
};

export const TableSidebar: React.FC<TableSidebarProps> = ({
  side = 'right',
  sidebarState: { isOpen, toggle, width },
  preserveMinimumWidth = false,
  children,
  $borderRightBottomRadiusRounded,
  $borderRightTopRadiusRounded,
  ...tabProps
}) => {
  const { selectedTab, displayedTab, handleTabChange } = useSidebarTabsState({
    ...tabProps,
    isOpen,
    toggle,
  });

  return (
    <SidebarContainer
      $side={side}
      data-table-sidebar={side}
      isOpen={isOpen}
      $contentWidth={width}
      $preserveMinimumWidth={preserveMinimumWidth}
      $borderRightTopRadiusRounded={$borderRightTopRadiusRounded}
      $borderRightBottomRadiusRounded={$borderRightBottomRadiusRounded}
    >
      <SidebarTogglePanel
        $side={side}
        isOpen={isOpen}
        as="div"
        aria-label={isOpen ? 'Скрыть сайдбар' : 'Показать сайдбар'}
      >
        <SidebarTabs
          tabs={tabProps.sidebarTabs}
          side={side}
          activeTabId={isOpen ? selectedTab : null}
          onTabChange={handleTabChange}
        />
      </SidebarTogglePanel>

      {/* Контент сохраняем для анимации. aria-hidden исключает чтение скринридером, inert — фокус и взаимодействие. */}
      <SidebarContent
        isOpen={isOpen}
        key={displayedTab?.id ?? null}
        aria-hidden={!isOpen}
        {...(!isOpen ? { inert: '' } : {})}
      >
        <div className={cls.tableSidebarContent}>
          <SidebarContentLayout
            title={displayedTab?.title ?? displayedTab?.label ?? ''}
            titleRightSlot={displayedTab?.titleRightSlot}
            domMetadata={displayedTab?.domMetadata}
            onClose={toggle}
          >
            {displayedTab?.content ?? children}
          </SidebarContentLayout>
        </div>
      </SidebarContent>
    </SidebarContainer>
  );
};
