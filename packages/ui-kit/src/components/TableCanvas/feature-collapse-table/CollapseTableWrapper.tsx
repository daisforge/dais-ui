import React, { FC, KeyboardEvent, PropsWithChildren } from 'react';

import { useTableCollapse } from '../contexts';

export const CollapseTableWrapper: FC<PropsWithChildren> = ({ children }) => {
  const { toggleCollapse, isCollapsed } = useTableCollapse();

  const handleClick = () => {
    if (isCollapsed) {
      toggleCollapse();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    // Активируем по Enter/Space как нативные кнопки
    if (isCollapsed && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      toggleCollapse();
    }
  };

  return (
    <div
      role="button" // семантическая роль
      tabIndex={isCollapsed ? 0 : -1} // фокусируемым только когда свернуто
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-expanded={!isCollapsed} // раскрытия для скринридеров
      style={isCollapsed ? { cursor: 'pointer' } : undefined} // hint
    >
      {children}
    </div>
  );
};
