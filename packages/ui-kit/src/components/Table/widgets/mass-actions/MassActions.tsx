/* eslint-disable no-continue */
/* eslint-disable no-lonely-if */
import { LinkButton } from '@ui-kit/components/LinkButton';
import {
  MassActions,
  MassActionsButtonProps,
  MassActionsSize,
} from '@ui-kit/components/MassActions';
import React, { useMemo, useRef } from 'react';
import styled from 'styled-components';

import { TableDropdownConfigProps } from '../../components/TableDropdown/types';
import { useRefTableGlobalContainerContext, useSidebar } from '../../contexts';
import { useSelectingRowContext } from '../../feature-select-row/selecting-contexts';
import { SummaryCheckbox } from '../../feature-select-row/summary-checkbox';

const ResetButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ResetButton = styled(LinkButton)`
  margin-left: 12px;
`;

/**
 * Компонент массовых действий для таблицы
 * Обертка над базовым MassActions с интеграцией контекстов таблицы
 */
export const MassActionsInTable = ({
  buttons,
  isHaveSomeFeatureInSidebar = false,
  collapsedDropdownProps,
  bottom = 24,
  forceShow = false,
  size = 's',
}: {
  buttons?: MassActionsButtonProps[];
  collapsedDropdownProps?: TableDropdownConfigProps;
  isHaveSomeFeatureInSidebar?: boolean;
  bottom?: number;
  forceShow?: boolean;
  /** Размерная сетка панели внутри таблицы: `m`/`s` — обычный, `xs` — уменьшенный. Viewport-логика (1280) в таблице не используется. */
  size?: MassActionsSize;
}) => {
  const { selectedRows, selectingRowConfig } = useSelectingRowContext();
  const { selectingRowsIsActive } = selectingRowConfig;
  const refGlobalTableContainer = useRefTableGlobalContainerContext();
  const sidebar = useSidebar();

  const summaryCheckboxElRef = useRef<HTMLDivElement | null>(null);

  const selectedCount = selectedRows?.size ?? 0;

  // Конфигурация сайдбара
  const sidebarConfig = useMemo(
    () => ({
      isOpen: sidebar.isOpen,
      width: sidebar.width,
      togglePanelWidth: 44,
    }),
    [sidebar.isOpen, sidebar.width],
  );
  const onChangeHandlerRef = useRef(
    (_arg: { clearButtonClicked: true; checkedAll: true }) => {},
  );
  const hasSelectingContext = selectingRowsIsActive && selectedCount > 0;

  // Левая секция - счетчик с SummaryCheckbox (только при активном selecting)
  const leftSection = useMemo(
    () =>
      hasSelectingContext ? (
        <div ref={summaryCheckboxElRef}>
          <SummaryCheckbox
            isHaveRightDivider={false}
            hideCheckbox
            onChangeHandlerRef={onChangeHandlerRef}
          />
        </div>
      ) : null,
    [onChangeHandlerRef, hasSelectingContext],
  );

  // Средняя секция - кнопка "Сбросить всё" (только при активном selecting)
  const middleSection = useMemo(
    () =>
      hasSelectingContext ? (
        <ResetButtonWrapper>
          <ResetButton
            text="Сбросить всё"
            size={size === 'xs' ? 'xxs' : 's'}
            onClick={() =>
              onChangeHandlerRef.current({
                clearButtonClicked: true,
                checkedAll: true,
              })
            }
          />
        </ResetButtonWrapper>
      ) : null,
    [size, onChangeHandlerRef, hasSelectingContext],
  );

  // Панель не показывается, если нет выбранных строк или selecting неактивен
  // forceShow=true обходит эти проверки (панель видна всегда, даже без selecting)
  // Также не показываем, если нет контейнера (не должен быть, но на всякий случай)
  if (!refGlobalTableContainer) {
    return null;
  }
  if (!forceShow && (selectedCount === 0 || !selectingRowsIsActive)) {
    return null;
  }

  return (
    <MassActions
      containerRef={refGlobalTableContainer}
      leftSection={leftSection}
      middleSection={middleSection}
      buttons={buttons}
      sidebarConfig={sidebarConfig}
      isHaveSomeFeatureInSidebar={isHaveSomeFeatureInSidebar}
      collapsedDropdownProps={collapsedDropdownProps}
      selectedCount={selectedCount}
      useTableDropdown
      minPadding={24}
      bottom={bottom}
      size={size}
    />
  );
};
