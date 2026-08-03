import React, { useEffect, useState } from 'react';

import { useSidebar } from '../../contexts';
import { SidebarTab } from '../../widgets/control-block/types';
import { SidebarContentLayout } from './SidebarContentLayout';
import { SidebarTabs } from './SidebarTabs';
import { SidebarContainer, SidebarContent, SidebarTogglePanel } from './styled';
import { tableSidebarClassNames as cls } from './TableSidebar.classnames';

export const TableSidebar: React.FC<{
  children?: React.ReactNode;
  activeTabId: string | null;
  $borderRightBottomRadiusRounded?: boolean | undefined;
  $borderRightTopRadiusRounded?: boolean | undefined;
  sidebarTabs: SidebarTab[];
  defaultActiveTabId?: string;
  activeTabState?: [
    string | null,
    React.Dispatch<React.SetStateAction<string | null>>,
  ];
  onActiveTabChange?: (tabId: string | null, tab?: SidebarTab) => void;
}> = ({
  activeTabId,
  sidebarTabs,
  children,
  defaultActiveTabId,
  activeTabState,
  onActiveTabChange,
  $borderRightBottomRadiusRounded,
  $borderRightTopRadiusRounded,
}) => {
  const { isOpen, toggle, width } = useSidebar();

  const validDefaultTabId =
    defaultActiveTabId &&
    sidebarTabs.some(
      (tab) => tab.id === defaultActiveTabId && tab.showInSidebar,
    )
      ? defaultActiveTabId
      : null;

  const [internalTab, setInternalTab] = useState<string | null>(
    validDefaultTabId ?? (isOpen ? activeTabId : null),
  );

  const setActiveExternally = activeTabState?.[1];
  const activeTab = activeTabState ? activeTabState[0] : internalTab;

  const commitActiveTab = (next: string | null) => {
    if (setActiveExternally) {
      setActiveExternally(next);
    } else {
      setInternalTab(next);
    }
    onActiveTabChange?.(
      next,
      next ? sidebarTabs.find((tab) => tab.id === next) : undefined,
    );
  };

  const handleTabChange = (id: string) => {
    commitActiveTab(id);

    if (!isOpen || activeTab === id) {
      toggle();
    }
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    if (!isOpen && activeTab !== null) {
      timeoutId = setTimeout(() => {
        commitActiveTab(null);
      }, 300);
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // Эффект нужен, чтобы при инициализации компонента и закрытом сайдбаре не было подсветки активного таба
  useEffect(() => {
    if (!isOpen && activeTab !== null) {
      commitActiveTab(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const activeTabInfo = activeTab
    ? sidebarTabs.find((tab) => tab.id === activeTab)
    : null;

  return (
    <SidebarContainer
      isOpen={isOpen}
      $contentWidth={width}
      $borderRightTopRadiusRounded={$borderRightTopRadiusRounded}
      $borderRightBottomRadiusRounded={$borderRightBottomRadiusRounded}
    >
      <SidebarTogglePanel
        isOpen={isOpen}
        as="div"
        aria-label={isOpen ? 'Скрыть сайдбар' : 'Показать сайдбар'}
      >
        <SidebarTabs
          tabs={sidebarTabs}
          activeTabId={activeTab}
          onTabChange={handleTabChange}
        />
      </SidebarTogglePanel>

      <SidebarContent isOpen={isOpen} $contentWidth={width} key={activeTab}>
        <div className={cls.tableSidebarContent}>
          <SidebarContentLayout
            title={activeTabInfo?.title ?? activeTabInfo?.label ?? ''}
            titleRightSlot={activeTabInfo?.titleRightSlot}
            domMetadata={activeTabInfo?.domMetadata}
          >
            {activeTabInfo?.content || children}
          </SidebarContentLayout>
        </div>
      </SidebarContent>
    </SidebarContainer>
  );
};
