import type { TableCanvasSidebarConfig } from '../types';
import type { SidebarTab } from '../widgets/control-block/types';

export const getCustomSidebarTabs = (
  config?: Pick<TableCanvasSidebarConfig, 'customTabs' | 'customTabsOrder'>,
): SidebarTab[] => {
  const tabs = config?.customTabs ?? [];
  const order = [...new Set(config?.customTabsOrder ?? [])];
  return [
    ...order.flatMap((id) => tabs.filter((tab) => tab.id === id)),
    ...tabs.filter((tab) => !order.includes(tab.id)),
  ].map((tab) => ({ ...tab, showInSidebar: tab.showInSidebar ?? true }));
};
