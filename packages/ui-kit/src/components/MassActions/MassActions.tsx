import { IconButton } from '@ui-kit/components/IconButton';
import { Tooltip } from '@ui-kit/components/Tooltip';
import { IconDotsVerticalCenteredOutline } from '@ui-kit/icons';
import { useBreakpoint } from '@ui-kit/utils';
import { useEffect, useRef, useState } from 'react';

import {
  DELAY_BEFORE_SHOW_PANEL,
  MORE_BUTTON_WIDTH_ESTIMATE,
  PANEL_PADDING_EXPANDED
} from './constants';
import {
  useMassActionsButtons,
  useMassActionsCollapse,
  useMassActionsCompression,
  useMassActionsContainer,
  useMassActionsEffects,
  useMassActionsPosition,
  useMassActionsSidebar,
  useMassActionsVisibility
} from './hooks';
import { MassActionsButton } from './MassActionsButton';
import { MassActionsCounter } from './MassActionsCounter';
import { MassActionsDropdown } from './MassActionsDropdown';
import {
  ActionsWrapper,
  ButtonMeasurementWrapper,
  CollapseButton,
  CollapseIcon,
  HiddenButtonsMeasurementContainer,
  MassActionsContainer,
  MassActionsContent,
  StyledDivider,
  VisibleButtonWrapper
} from './styled';
import type {
  MassActionsButtonProps,
  MassActionsButtonPropsButton,
  MassActionsButtonPropsLinkButton,
  MassActionsProps
} from './types';

type AdaptiveButtonActionProps = {
  button: MassActionsButtonPropsButton;
  isCompact: boolean;
  compactSize?: 'xs' | 'xxs';
  useTableDropdown?: boolean;
};

const AdaptiveButtonAction = ({
  button,
  isCompact,
  compactSize = 'xs',
  useTableDropdown = false
}: AdaptiveButtonActionProps) => {
  // Размер задан явно потребителем — используем как есть (любой). Не задан —
  // подбираем по дизайну: `s` в обычной панели, compactSize (`xs`/`xxs`) в компакте/xs.
  const adaptiveButtonSize = button.size ?? (isCompact ? compactSize : 's');

  return (
    <MassActionsButton
      {...button}
      size={adaptiveButtonSize}
      showLabel
      useTableDropdown={useTableDropdown}
    />
  );
};

type AdaptiveLinkActionProps = {
  button: MassActionsButtonPropsLinkButton;
  isCompact: boolean;
  compactSize?: 'xs' | 'xxs';
  useTableDropdown?: boolean;
};

const AdaptiveLinkAction = ({
  button,
  isCompact,
  compactSize = 'xs',
  useTableDropdown = false
}: AdaptiveLinkActionProps) => {
  // Размер задан явно потребителем — используем как есть (любой). Не задан —
  // подбираем по дизайну: `s` в обычной панели, compactSize (`xs`/`xxs`) в компакте/xs.
  const adaptiveButtonSize = button.size ?? (isCompact ? compactSize : 's');

  return (
    <MassActionsButton
      {...button}
      size={adaptiveButtonSize}
      showLabel
      useTableDropdown={useTableDropdown}
    />
  );
};

const renderMassActionButton = (
  button: MassActionsButtonProps,
  isCompact: boolean,
  useTableDropdown = false,
  compactSize: 'xs' | 'xxs' = 'xs'
) => {
  if (button.type === 'button') {
    return (
      <AdaptiveButtonAction
        button={button}
        isCompact={isCompact}
        compactSize={compactSize}
        useTableDropdown={useTableDropdown}
      />
    );
  }

  return (
    <AdaptiveLinkAction
      button={button}
      isCompact={isCompact}
      compactSize={compactSize}
      useTableDropdown={useTableDropdown}
    />
  );
};

/**
 * Базовый адаптивный компонент панели массовых действий
 * Независим от таблицы - может использоваться с любым контейнером
 */
export const MassActions = ({
  containerRef,
  leftSection,
  middleSection,
  buttons,
  sidebarConfig,
  isHaveSomeFeatureInSidebar = false,
  collapsedDropdownProps,
  selectedCount,
  show,
  useTableDropdown = false,
  enableDebugLogs = false,
  bottom = 16,
  minPadding = 16,
  size
}: MassActionsProps) => {
  const { down } = useBreakpoint();
  // Внутри таблиц компактность задаётся статическим `size` (M/S = обычный, XS = уменьшенный),
  // без него — по ширине вьюпорта (standalone).
  const isCompact = size ? size === 'xs' : down('xl');
  // Целевой размер кнопок в компактном режиме: xxs для табличного XS, xs для viewport-компакта.
  const compactButtonSize: 'xs' | 'xxs' = size ? 'xxs' : 'xs';

  const [isCollapsed, setIsCollapsed] = useState(false);
  const panelContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const middleSectionRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<(HTMLDivElement | null)[]>([]);
  const moreButtonRef = useRef<HTMLDivElement | null>(null);
  const collapseButtonRef = useRef<HTMLDivElement | null>(null);
  const leftSectionRef = useRef<HTMLDivElement | null>(null);
  const dividerRef = useRef<HTMLDivElement | null>(null);

  // Состояния для компрессии
  const [visibleButtonsCount, setVisibleButtonsCount] = useState(
    buttons?.length ?? 0
  );
  const [translateX, setTranslateX] = useState<number | undefined>(undefined);

  // Флаг завершения начального расчета компрессии (для предотвращения "прыжка")
  // Прыжок - когда показываются все кнопки при первом рендере - а затем срабатывает компрессия
  const [isInitialCalculationComplete, setIsInitialCalculationComplete] =
    useState(false);

  // Хук для работы с контейнером
  const { containerWidth, getContainerWidth } =
    useMassActionsContainer(containerRef);

  // Видимость: если show указан явно - используем его, иначе логика на основе selectedCount
  const visibilityFromCount = useMassActionsVisibility(selectedCount);
  const isVisible = show !== undefined ? show : visibilityFromCount;

  const {
    calculatePosition,
    calculatePositionForState,
    shouldApplySidebarOffsetRef
  } = useMassActionsPosition({
    containerRef: panelContainerRef,
    collapseButtonRef,
    leftSectionRef,
    getContainerWidth,
    isHaveSomeFeatureInSidebar,
    sidebarConfig,
    visibleButtonsCount,
    setTranslateX,
    minPadding
  });

  const { calculateCompression, measuredButtonWidthsRef } =
    useMassActionsCompression({
      isCollapsed,
      containerRef: panelContainerRef,
      contentRef,
      middleSectionRef,
      buttonRefs,
      moreButtonRef,
      collapseButtonRef,
      leftSectionRef,
      dividerRef,
      buttons,
      isHaveSomeFeatureInSidebar,
      getContainerWidth,
      setVisibleButtonsCount,
      enableDebugLogs,
      minPadding,
      leftPadding: PANEL_PADDING_EXPANDED.left,
      rightPadding: PANEL_PADDING_EXPANDED.right,
      moreButtonWidthEstimate: isCompact ? 32 : MORE_BUTTON_WIDTH_ESTIMATE
    });

  const { isSidebarOpen, wasAutoCollapsedRef } = useMassActionsSidebar({
    isCollapsed,
    setIsCollapsed,
    calculatePositionForState,
    calculatePosition,
    setTranslateX,
    shouldApplySidebarOffsetRef,
    sidebarConfig,
    getContainerWidth
  });

  const { handleToggleCollapse } = useMassActionsCollapse({
    isCollapsed,
    setIsCollapsed,
    isSidebarOpen,
    calculatePositionForState,
    calculatePosition,
    setTranslateX,
    shouldApplySidebarOffsetRef,
    wasAutoCollapsedRef
  });

  const { visibleButtons, buttonsInDropdown, allButtons } =
    useMassActionsButtons({
      buttons,
      visibleButtonsCount
    });

  // Внизу файла оставил комментарий с лейаут эффектом при первичной инициализации.
  // Сейчас вместо сложной логики расчета при первичном рендере пришел к более простому решению с использованием задержки
  useEffect(() => {
    const timerId = setTimeout(
      () => setIsInitialCalculationComplete(true),
      DELAY_BEFORE_SHOW_PANEL
    );
    return () => clearTimeout(timerId);
  }, []);

  // Хук для всех остальных эффектов
  useMassActionsEffects({
    containerRef: panelContainerRef,
    buttonRefs,
    buttons,
    isVisible,
    isCollapsed,
    visibleButtonsCount,
    selectedCount,
    setIsCollapsed,
    setVisibleButtonsCount,
    calculatePosition,
    calculateCompression,
    measuredButtonWidthsRef,
    containerWidth
  });

  // Панель не показывается, если isVisible === false
  // (либо явно через show={false}, либо автоматически при selectedCount === 0)
  if (!isVisible) {
    return null;
  }

  // Условие показа divider
  const shouldShowActionsDivider = !isCollapsed && (buttons?.length ?? 0) > 0;

  return (
    <MassActionsContainer
      ref={panelContainerRef}
      $isCollapsed={isCollapsed}
      $size={size}
      $translateX={translateX}
      $isInitialCalculationComplete={isInitialCalculationComplete}
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
                ref={(el: HTMLDivElement | null) => {
                  // Сохраняем ref по глобальному индексу кнопки в массиве buttons
                  buttonRefs.current[index] = el;
                }}
              >
                {renderMassActionButton(
                  button,
                  isCompact,
                  useTableDropdown,
                  compactButtonSize
                )}
              </ButtonMeasurementWrapper>
            );
          })}
        </HiddenButtonsMeasurementContainer>

        {/* Левая секция (счетчик, чекбокс и т.д.) */}
        <div ref={leftSectionRef}>{leftSection}</div>

        {/* Средняя секция и кнопки действий - скрываются при сворачивании */}
        <ActionsWrapper $isCollapsed={isCollapsed}>
          {/* Средняя секция (например, кнопка "Сбросить все") */}
          {middleSection && <div ref={middleSectionRef}>{middleSection}</div>}

          {shouldShowActionsDivider && (
            <div ref={dividerRef}>
              <StyledDivider orientation="vertical" length="16px" />
            </div>
          )}

          {/* Dropdown для кнопок, которые не поместились */}
          {buttonsInDropdown.length > 0 && (
            <div
              ref={(el: HTMLDivElement | null) => {
                moreButtonRef.current = el;
              }}
            >
              <MassActionsDropdown
                buttons={buttonsInDropdown}
                useTableDropdown={useTableDropdown}
                dropdownProps={{
                  placement: 'top',
                  ...collapsedDropdownProps
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
          {visibleButtons.map(
            (button: MassActionsButtonProps, index: number) => {
              const buttonKey = button['key'] ?? `${button['text']}${index}`;
              const buttonElement = (
                <VisibleButtonWrapper key={buttonKey}>
                  {renderMassActionButton(
                    button,
                    isCompact,
                    useTableDropdown,
                    compactButtonSize
                  )}
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
            }
          )}
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

// Compound component
MassActions.Counter = MassActionsCounter;

// Может быть полезно, оставлю закомментированным
// Предварительное измерение и расчет компрессии
// Выполняется ДО показа панели, чтобы предотвратить "прыжок"
// useLayoutEffect(() => {
//   // Если нет кнопок или панель не видна - сразу показываем
//   if (!isVisible || isCollapsed || !buttons || buttons.length === 0) {
//     setIsInitialCalculationComplete(true);
//     return undefined;
//   }

//   // Сбрасываем флаг при изменении кнопок или видимости
//   setIsInitialCalculationComplete(false);

//   // Используем двойной requestAnimationFrame + попытки с задержкой
//   // для гарантии что DOM полностью обновлен и элементы отрендерились
//   let rafId2: number;
//   let timeoutId: NodeJS.Timeout;
//   let attemptCount = 0;
//   const maxAttempts = 3; // Максимум 3 попытки

//   const tryCalculate = () => {
//     attemptCount += 1;
//     const calculationSuccess = calculateInitialCompression();

//     if (calculationSuccess) {
//       // Даем панели время пересчитать размеры перед показом,
//       // чтобы избежать вспышки широкой панели до компрессии
//       timeoutId = setTimeout(
//         () => setIsInitialCalculationComplete(true),
//         ANIMATION_COMPLETE_DELAY
//       );
//     } else if (attemptCount < maxAttempts) {
//       // Пробуем еще раз с увеличивающейся задержкой
//       timeoutId = setTimeout(tryCalculate, attemptCount * 10);
//     } else {
//       // Если все попытки не удались, выполняем обычный расчет
//       calculateCompression();
//       timeoutId = setTimeout(
//         () => setIsInitialCalculationComplete(true),
//         ANIMATION_COMPLETE_DELAY
//       );
//     }
//   };

//   const rafId1 = requestAnimationFrame(() => {
//     rafId2 = requestAnimationFrame(() => {
//       // Небольшая задержка после RAF для гарантии что элементы отрендерились
//       timeoutId = setTimeout(tryCalculate, 10);
//     });
//   });

//   return () => {
//     if (rafId1) cancelAnimationFrame(rafId1);
//     if (rafId2) cancelAnimationFrame(rafId2);
//     if (timeoutId) clearTimeout(timeoutId);
//   };
// }, [
//   isVisible,
//   isCollapsed,
//   buttons,
//   calculateInitialCompression,
//   calculateCompression,
// ]);
