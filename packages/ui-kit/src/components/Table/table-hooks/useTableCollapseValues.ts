import { useCallback, useEffect, useMemo, useState } from 'react';

import { TableCollapseConfig } from '../types';

export const useTableCollapseValues = ({
  tableConfig,
}: {
  tableConfig: { collapsing?: TableCollapseConfig };
}) => {
  const {
    enableCollapse = false,
    defaultCollapsed = false,
    collapseText = 'Свернуть',
    expandText = 'Развернуть',
    onToggleCollapse,
    collapsedState: externalState,
  } = tableConfig.collapsing || {};

  // Внутреннее состояние (используется если нет externalState)
  const [internalState, setInternalState] = useState(defaultCollapsed);

  // источник состояния
  const [isCollapsed, setIsCollapsed] = externalState ?? [
    internalState,
    setInternalState,
  ];

  // Вызываем onToggleCollapse при изменении isCollapsed из любого источника
  useEffect(() => {
    if (onToggleCollapse) {
      onToggleCollapse(isCollapsed);
    }
  }, [isCollapsed, onToggleCollapse]);

  const toggleCollapse = useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, [setIsCollapsed]);

  return useMemo(
    () => ({
      isCollapsed,
      toggleCollapse,
      collapseText,
      expandText,
      enableCollapse,
      domMetadata: tableConfig.collapsing?.domMetadata,
      collapseButtonPlacement: tableConfig.collapsing?.collapseButtonPlacement,
      collapseButtonAboveRightSlot:
        tableConfig.collapsing?.collapseButtonAboveRightSlot,
    }),
    [
      isCollapsed,
      toggleCollapse,
      collapseText,
      expandText,
      enableCollapse,
      tableConfig.collapsing?.domMetadata,
      tableConfig.collapsing?.collapseButtonPlacement,
      tableConfig.collapsing?.collapseButtonAboveRightSlot,
    ],
  );
};
