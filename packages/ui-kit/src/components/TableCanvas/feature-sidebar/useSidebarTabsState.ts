import { useEffect, useRef, useState } from 'react';

import type { TableCanvasSidebarConfig } from '../types';
import type { SidebarTab } from '../widgets/control-block/types';
import { SIDEBAR_DURATION } from './constants';

// Срок уведомления о закрытии сохраняем для прежних потребителей правой панели.
const ACTIVE_TAB_RESET_DELAY = 300;

export type SidebarTabsStateProps = Pick<
  TableCanvasSidebarConfig,
  'defaultActiveTabId' | 'activeTabState' | 'onActiveTabChange'
> & {
  isOpen: boolean;
  toggle: () => void;
  sidebarTabs: SidebarTab[];
  activeTabId: string | null;
};

export const useSidebarTabsState = ({
  isOpen,
  toggle,
  sidebarTabs,
  activeTabId,
  defaultActiveTabId,
  activeTabState,
  onActiveTabChange,
}: SidebarTabsStateProps) => {
  const visibleTabs = sidebarTabs.filter((tab) => tab.showInSidebar ?? true);
  const firstTabId = visibleTabs[0]?.id ?? null;
  const validDefaultTabId = visibleTabs.find(
    (tab) => tab.id === defaultActiveTabId,
  )?.id;
  const hasOpenedRef = useRef(isOpen);
  const [internalTab, setInternalTab] = useState<string | null>(
    validDefaultTabId ?? (isOpen ? activeTabId ?? firstTabId : null),
  );
  const activeTab = activeTabState ? activeTabState[0] : internalTab;
  // Применяем default и при первом внешнем открытии; исчезнувший таб заменяем доступным.
  let selectedTab = visibleTabs.some((tab) => tab.id === activeTab)
    ? activeTab
    : null;
  if (isOpen && selectedTab === null) {
    const initialDefault =
      !activeTabState && !hasOpenedRef.current ? validDefaultTabId : null;
    selectedTab = initialDefault ?? firstTabId;
  }
  const activeTabInfo =
    visibleTabs.find((tab) => tab.id === selectedTab) ?? null;
  const [retainedTab, setRetainedTab] = useState(activeTabInfo);

  const currentRef = useRef({
    activeTab,
    commit: (_next: string | null) => undefined as void,
  });
  currentRef.current = {
    activeTab,
    commit: (next: string | null) => {
      (activeTabState?.[1] ?? setInternalTab)(next);
      onActiveTabChange?.(
        next,
        next ? visibleTabs.find((tab) => tab.id === next) : undefined,
      );
    },
  };
  const initialStateRef = useRef({ isOpen, activeTab });

  useEffect(() => {
    if (!isOpen && currentRef.current.activeTab !== null) {
      const timeoutId = setTimeout(() => {
        currentRef.current.commit(null);
      }, ACTIVE_TAB_RESET_DELAY);
      return () => clearTimeout(timeoutId);
    }
    return undefined;
  }, [isOpen]);

  useEffect(() => {
    // Прежняя правая панель уведомляла о сбросе выбранного таба и при закрытом первом рендере.
    const initial = initialStateRef.current;
    if (!initial.isOpen && initial.activeTab !== null) {
      currentRef.current.commit(null);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      hasOpenedRef.current = true;
      if (activeTab !== selectedTab) currentRef.current.commit(selectedTab);
    }
  }, [isOpen, activeTab, selectedTab]);

  useEffect(() => {
    if (isOpen) setRetainedTab(activeTabInfo);
  }, [isOpen, activeTabInfo]);

  useEffect(() => {
    if (isOpen) return undefined;
    // Callback сбрасывает ID раньше конца анимации, но видимый контент удерживаем.
    const timeoutId = setTimeout(
      () => setRetainedTab(null),
      SIDEBAR_DURATION * 1000,
    );
    return () => clearTimeout(timeoutId);
  }, [isOpen]);

  const handleTabChange = (id: string) => {
    currentRef.current.commit(id);
    if (!isOpen || selectedTab === id) toggle();
  };

  return {
    selectedTab,
    displayedTab: isOpen ? activeTabInfo : retainedTab,
    handleTabChange,
  };
};
