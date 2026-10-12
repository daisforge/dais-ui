import React from 'react';

import { useSidebar } from '../contexts';
import { SidebarContentLayout as Layout } from '../feature-sidebar/ui/SidebarContentLayout';
import {
  TableSidebar as Sidebar,
  TableSidebarProps,
} from '../feature-sidebar/ui/TableSidebar';

// Старый экспорт сам выбирает правый контекст и не требует sidebarState.
export const TableSidebar: React.FC<Omit<TableSidebarProps, 'sidebarState'>> = (
  props,
) => {
  const sidebarState = useSidebar();
  return (
    <Sidebar {...props} sidebarState={sidebarState} preserveMinimumWidth />
  );
};

// Прежний layout сам выбирал обработчик закрытия из правого контекста.
export const SidebarContentLayout: React.FC<
  Omit<React.ComponentProps<typeof Layout>, 'onClose'> & {
    onClose?: () => void;
  }
> = ({ onClose, ...props }) => {
  const { toggle } = useSidebar();
  return <Layout {...props} onClose={onClose ?? toggle} />;
};
