/* eslint-disable no-continue */
/* eslint-disable no-lonely-if */
import { IconButton } from '@ui-kit/components/IconButton';
import type { MassActionsSize } from '@ui-kit/components/MassActions';
import { Tooltip } from '@ui-kit/components/Tooltip';
import { IconDotsVerticalCenteredOutline } from '@ui-kit/icons';
import { useBreakpoint } from '@ui-kit/utils';
import React, { useRef, useState } from 'react';

import { TableDropdownConfigProps } from '../../components/TableDropdown/types';
import { useSelectingRowContext } from '../../feature-select-row/selecting-contexts';
import { SummaryCheckbox } from '../../feature-select-row/summary-checkbox';
import {
  useMassActionsButtons,
  useMassActionsCollapse,
  useMassActionsCompression,
  useMassActionsEffects,
  useMassActionsPosition,
  useMassActionsSidebar,
  useMassActionsVisibility,
} from './hooks';
import { MassActionButton } from './MassActionButton';
import { MassActionsDropdown } from './MassActionsDropdown';
import {
  ActionsWrapper,
  ButtonMeasurementWrapper,
  CollapseButton,
  CollapseIcon,
  HiddenButtonsMeasurementContainer,
  MassActionsContainer,
  MassActionsContent,
  ResetButton,
  ResetButtonWrapper,
  StyledDivider,
  VisibleButtonWrapper,
} from './styled';
import type {
  MassActionButtonProps,
  MassActionButtonPropsButton,
  MassActionButtonPropsLinkButton,
} from './types';

type AdaptiveButtonActionProps = {
  button: MassActionButtonPropsButton;
  isCompact: boolean;
  compactSize?: 'xs' | 'xxs';
};

const AdaptiveButtonAction = ({
  button,
  isCompact,
  compactSize = 'xs',
}: AdaptiveButtonActionProps) => {
  // Размер задан явно потребителем — используем как есть (любой). Не задан —
  // подбираем по дизайну: `s` в обычной панели, compactSize (`xs`/`xxs`) в компакте/xs.
  const adaptiveButtonSize = button.size ?? (isCompact ? compactSize : 's');

  return <MassActionButton {...button} size={adaptiveButtonSize} showLabel />;
};

type AdaptiveLinkActionProps = {
  button: MassActionButtonPropsLinkButton;
  isCompact: boolean;
  compactSize?: 'xs' | 'xxs';
};

const AdaptiveLinkAction = ({
  button,
  isCompact,
  compactSize = 'xs',
}: AdaptiveLinkActionProps) => {
  // Размер задан явно потребителем — используем как есть (любой). Не задан —
  // подбираем по дизайну: `s` в обычной панели, compactSize (`xs`/`xxs`) в компакте/xs.
  const adaptiveButtonSize = button.size ?? (isCompact ? compactSize : 's');

  return <MassActionButton {...button} size={adaptiveButtonSize} showLabel />;
};

const renderMassActionButton = (
  button: MassActionButtonProps,
  isCompact: boolean,
  compactSize: 'xs' | 'xxs' = 'xs',
) => {
  if (button.type === 'button') {
    return (
      <AdaptiveButtonAction
        button={button}
        isCompact={isCompact}
        compactSize={compactSize}
      />
    );
  }

  return (
    <AdaptiveLinkAction
      button={button}
      isCompact={isCompact}
      compactSize={compactSize}
    />
  );
};

export const MassActions = ({
  buttons,
  isHaveSomeFeatureInSidebar = false,
  collapsedDropdownProps,
  bottom = 24,
  forceShow = false,
  size = 's',
}: {
  buttons?: MassActionButtonProps[];
  collapsedDropdownProps?: TableDropdownConfigProps;
  isHaveSomeFeatureInSidebar?: boolean;
  bottom?: number;
  forceShow?: boolean;
  size?: MassActionsSize;
}) => {
  const { down } = useBreakpoint();
  // В таблице компактность задаёт статический `size` (M/S = обычный, XS = уменьшенный),
  // viewport (1280) в таблице не используется.
  const isCompact = size ? size === 'xs' : down('xl');
  const compactButtonSize: 'xs' | 'xxs' = size ? 'xxs' : 'xs';
  const { selectedRows, selectingRowConfig } = useSelectingRowContext();
  const { selectingRowsIsActive } = selectingRowConfig;

  const [isCollapsed, setIsCollapsed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const resetButtonRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<(HTMLDivElement | null)[]>([]);
  const moreButtonRef = useRef<HTMLDivElement | null>(null);
  const collapseButtonRef = useRef<HTMLDivElement | null>(null);
  const summaryCheckboxElRef = useRef<HTMLDivElement | null>(null);

  const selectedCount = selectedRows?.size ?? 0;
  const hasSelectingContext = selectingRowsIsActive && selectedCount > 0;

  // Состояния для компрессии
  const [visibleButtonsCount, setVisibleButtonsCount] = useState(
    buttons?.length ?? 0,
  );
  const [translateX, setTranslateX] = useState<number | undefined>(undefined);

  // Используем хуки для управления логикой
  const isVisible = useMassActionsVisibility(selectedCount);

  const {
    calculatePosition,
    calculatePositionForState,
    shouldApplySidebarOffsetRef,
  } = useMassActionsPosition({
    containerRef,
    collapseButtonRef,
    summaryCheckboxElRef,
    isCompact,
    isHaveSomeFeatureInSidebar,
    visibleButtonsCount,
    setTranslateX,
  });

  const { calculateCompression, measuredButtonWidthsRef } =
    useMassActionsCompression({
      isCollapsed,
      containerRef,
      contentRef,
      resetButtonRef,
      buttonRefs,
      moreButtonRef,
      collapseButtonRef,
      summaryCheckboxElRef,
      buttons,
      isHaveSomeFeatureInSidebar,
      setVisibleButtonsCount,
    });

  const { isSidebarOpen, wasAutoCollapsedRef } = useMassActionsSidebar({
    isCollapsed,
    setIsCollapsed,
    calculatePositionForState,
    calculatePosition,
    setTranslateX,
    shouldApplySidebarOffsetRef,
  });

  const { handleToggleCollapse } = useMassActionsCollapse({
    isCollapsed,
    setIsCollapsed,
    isSidebarOpen,
    calculatePositionForState,
    calculatePosition,
    setTranslateX,
    shouldApplySidebarOffsetRef,
    wasAutoCollapsedRef,
  });

  const { visibleButtons, buttonsInDropdown, allButtons } =
    useMassActionsButtons({
      buttons,
      visibleButtonsCount,
    });

  // хук для всех эффектов
  useMassActionsEffects({
    containerRef,
    buttonRefs,
    buttons,
    isVisible,
    isCollapsed,
    visibleButtonsCount,
    selectedCount,
    selectingRowsIsActive,
    setIsCollapsed,
    setVisibleButtonsCount,
    calculatePosition,
    calculateCompression,
    measuredButtonWidthsRef,
  });
  const onChangeHandlerRef = useRef(
    (_arg: { clearButtonClicked: true; checkedAll: true }) => {},
  );

  // Панель не показывается, если нет выбранных строк
  // forceShow=true обходит эти проверки (панель видна всегда, даже без selecting)
  if (
    !forceShow &&
    (!isVisible || selectedCount === 0 || !selectingRowsIsActive)
  ) {
    return null;
  }

  return (
    <MassActionsContainer
      ref={containerRef}
      $isCollapsed={isCollapsed}
      $size={size}
      $translateX={translateX}
      $bottom={bottom}
    >
      <MassActionsContent
        ref={contentRef}
        $isCollapsed={isCollapsed}
        $isCompact={isCompact}
      >
        <HiddenButtonsMeasurementContainer>
          {allButtons.map((button, index) => {
            const buttonKey = button['key'] ?? `${button['text']}${index}`;
            return (
              <ButtonMeasurementWrapper
                key={`measure-${buttonKey}`}
                ref={(el) => {
                  // Сохраняем ref по глобальному индексу кнопки в массиве buttons
                  buttonRefs.current[index] = el;
                }}
              >
                {renderMassActionButton(button, isCompact, compactButtonSize)}
              </ButtonMeasurementWrapper>
            );
          })}
        </HiddenButtonsMeasurementContainer>

        {/* Counter выбранных строк - только при активном selecting */}
        {hasSelectingContext && (
          <div ref={summaryCheckboxElRef}>
            <SummaryCheckbox
              isHaveRightDivider={false}
              hideCheckbox
              onChangeHandlerRef={onChangeHandlerRef}
            />
          </div>
        )}

        {/* Кнопка "Сбросить все" и кнопки действий - скрываются при сворачивании */}
        <ActionsWrapper $isCollapsed={isCollapsed}>
          {/* Кнопка "Сбросить все" с divider - только при активном selecting */}
          {hasSelectingContext && (
            <ResetButtonWrapper ref={resetButtonRef}>
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
              {/* Divider после кнопки "Сбросить все", если справа есть кнопки */}
              {(visibleButtons.length > 0 || buttonsInDropdown.length > 0) && (
                <StyledDivider orientation="vertical" length="16px" />
              )}
            </ResetButtonWrapper>
          )}

          {/* Dropdown для кнопок, которые не поместились */}
          {buttonsInDropdown.length > 0 && (
            <div
              ref={(el) => {
                moreButtonRef.current = el;
              }}
            >
              <MassActionsDropdown
                buttons={buttonsInDropdown}
                dropdownProps={{
                  placement: 'top',
                  ...collapsedDropdownProps,
                }}
                triggerSlot={
                  <IconButton
                    view="secondary"
                    size={isCompact ? compactButtonSize : 's'}
                    contentLeft={
                      <IconDotsVerticalCenteredOutline
                        size={isCompact ? 'xs' : 's'}
                      />
                    }
                  />
                }
              />
            </div>
          )}

          {/* Видимые кнопки действий */}
          {visibleButtons.map((button, index, arr) => {
            const buttonKey = button['key'] ?? `${button['text']}${index}`;
            const buttonElement = (
              <VisibleButtonWrapper
                key={buttonKey}
                $isFirst={index === 0}
                $isLast={index + 1 === arr.length}
                $hasDropdown={buttonsInDropdown.length > 0}
              >
                {renderMassActionButton(button, isCompact, compactButtonSize)}
              </VisibleButtonWrapper>
            );

            // Если кнопка disabled и есть tooltip, оборачиваем в Tooltip
            if (button['disabled'] && button['disabledTooltipProps']) {
              return (
                <Tooltip
                  key={buttonKey}
                  trigger="hover"
                  {...button['disabledTooltipProps']}
                >
                  {buttonElement}
                </Tooltip>
              );
            }

            return buttonElement;
          })}
        </ActionsWrapper>

        {/* Кнопка сворачивания - всегда видна */}
        <div ref={collapseButtonRef}>
          <CollapseButton
            size={isCompact ? 's' : 'm'}
            $isCollapsed={isCollapsed}
            $isCompact={isCompact}
            onClick={handleToggleCollapse}
          >
            <CollapseIcon
              size={isCompact ? 'xs' : 's'}
              $isCollapsed={isCollapsed}
            />
          </CollapseButton>
        </div>
      </MassActionsContent>
    </MassActionsContainer>
  );
};
