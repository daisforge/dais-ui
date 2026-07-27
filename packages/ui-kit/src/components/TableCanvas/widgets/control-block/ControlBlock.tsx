/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
import { Box } from '@ui-kit/components/Box';
import { Collapse } from '@ui-kit/components/Collapse';
import { Flow } from '@ui-kit/components/Flow';
import { LinkButton } from '@ui-kit/components/LinkButton';
import { ActiveViewModsType } from '@ui-kit/components/TableCanvas/types';
import { IconDotsVerticalCenteredOutline } from '@ui-kit/icons';
import { throttleWithLastCall } from '@ui-kit/utils';
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef
} from 'react';

import { TableDropdownConfigProps } from '../../components/TableDropdown/types';
import {
  useRefTableContainerContext,
  useTableCollapse,
  useTableResizeObserver
} from '../../contexts';
import { CollapseTableButton } from '../../feature-collapse-table';
import { ITEM_ID_GROUPED_ROWS } from '../../feature-rows-grouping/constants';
import { SearchBlock } from '../../feature-searching';
import {
  useCompressionFeatures,
  useControlBlockMeasurements,
  useMeasurementEffects
} from './compression';
import { controlBlockClassNames as cls } from './control-block.classnames';
import {
  getControlBlockSizeMap,
  getControlBlockSpacingMap
} from './control-block.constants';
import { ControlBlockActions } from './control-block-actions';
import { ControlBlockButton, StyledDivider } from './control-block-button';
import { type ControlBlockButtonProps } from './control-block-button.types';
import { RightSide } from './right-side';
import {
  CenteredItem,
  ControlBlockStyled,
  InlineTitleText,
  LefSideStyled,
  RightButtonsContainer
} from './styled';
import { FeatureItem, ToolsMenuState } from './types';

type ActivatedFeatures = {
  viewChanging: boolean;
  rowSize: boolean;
  columnsControl: boolean;
  summaryRows: boolean;
  selectingRows: boolean;
  fullScreen: boolean;
  rowInstruments: boolean;
  keyText: boolean;
  rowsGrouping: boolean;
  editingMode: boolean;
  searching: boolean;
  filtering: boolean;
};

export const ControlBlock = ({
  leftSideInner,
  rightSideInner,
  isHaveControlBlock,
  activeView,
  fullScreened,
  editModeEnabled,
  editModeLeftSlot,

  featuresObj: {
    isActivated,
    icons,
    featureItems,
    featureRightButtons,
    featureLeftButtons,
    featureSearching: {
      isActiveSearching,
      showSearchBlock,
      searchQueryLocalValue,
      placeholderSearchBlock
    }
  },
  $borderTopRounded,
  setCompressionVisibility,
  controlBlockLeftSideDropdownProps,
  controlBlockRightSideDropdownProps,
  collapseButtonPlacement = 'inside',
  controlBlockSize
}: {
  leftSideInner: ControlBlockButtonProps[] | undefined;
  rightSideInner: ControlBlockButtonProps[] | undefined;

  editModeEnabled: boolean;
  editModeLeftSlot?: React.ReactNode;
  fullScreened: boolean;
  isHaveControlBlock: boolean | undefined;
  activeView: ActiveViewModsType;
  featuresObj: {
    isActivated: ActivatedFeatures;
    icons: FeatureItem[];
    featureItems: FeatureItem[];
    all: FeatureItem[];
    featureRightButtons: ControlBlockButtonProps[];
    featureLeftButtons: ControlBlockButtonProps[];
    featureSearching: {
      isActiveSearching: boolean;
      showSearchBlock: boolean;
      setShowSearchBlock: React.Dispatch<React.SetStateAction<boolean>>;
      searchQueryLocalValue: string;
      placeholderSearchBlock: string;
    };
  };
  $borderTopRounded: boolean;
  setCompressionVisibility: React.Dispatch<
    React.SetStateAction<ToolsMenuState | undefined>
  >;
  controlBlockLeftSideDropdownProps?: TableDropdownConfigProps;
  controlBlockRightSideDropdownProps?: TableDropdownConfigProps;
  collapseButtonPlacement?: 'inside' | 'above';
  controlBlockSize?: import('../../types').ControlBlockSize;
}) => {
  const sizeMap = getControlBlockSizeMap(controlBlockSize);
  const spacing = getControlBlockSpacingMap(controlBlockSize);

  const {
    enableCollapse,
    isCollapsed,
    collapseButtonPlacement: ctxPlacement,
    titleText: ctxTitleText,
    titleRender: ctxTitleRender
  } = useTableCollapse();
  const hasInlineCollapse =
    enableCollapse && collapseButtonPlacement === 'inside';
  const containerRef = useRef<HTMLDivElement>(null);

  // Кнопки правой зоны одним массивом: сначала кнопки из конфига
  // (rightSideInner), затем встроенные фичи (ключ-текст, группировка).
  // Для компрессии и рендера они неразличимы, порядок массива задаёт
  // и порядок отображения, и порядок ухода в дропдаун (с конца).
  const rightButtons = useMemo(
    () => [...(rightSideInner ?? []), ...featureRightButtons],
    [rightSideInner, featureRightButtons]
  );

  // У кнопки группировки появился счётчик выбранных колонок (contentRight).
  // Он добавляет ширину, но прятать лейблы из-за него не нужно: при компрессии
  // сначала жертвуем шириной поиска. Флаг идёт в модель (учёт ширины счётчика)
  // и в конвейер шагов, а его смена должна заново запускать компрессию.
  const hasGroupingCounter = useMemo(
    () =>
      rightButtons.some(
        (btn) => btn.itemID === ITEM_ID_GROUPED_ROWS && !!btn.contentRight
      ),
    [rightButtons]
  );

  // Замеры реальных ширин для модели компрессии. Все рефы, стор и
  // фоллбек константы живут внутри хука (см. compression/measure.ts).
  const measurements = useControlBlockMeasurements({
    leftSideInner,
    rightButtons,
    featureLeftButtons,
    icons
  });
  const {
    mergedWidths,
    registerFeaturesRef,
    inlineTitleRef,
    editModeLeftSlotRef,
    overflowTriggerRef,
    leftSideInnerBlockRef
  } = measurements;

  // ============ Initial visibility state (v2) ============
  const initialVisibilityState: ToolsMenuState = useMemo(
    () => ({
      leftSide: {
        collapsingBlock: {
          isActive: hasInlineCollapse
        },
        editRowFeature: {
          isActive: isActivated.editingMode,
          isLabelVisible: true,
          editModeEnabled
        },
        leftSideInner: [...(leftSideInner ?? [])].map(() => ({
          isLabelVisible: true
        }))
      },
      middle: {
        searchingFeature: {
          isActive: isActiveSearching && showSearchBlock,
          minWidth: 250
        }
      },
      rightSide: {
        buttons: rightButtons.map(() => ({
          isLabelVisible: true
        })),
        customFeatures: icons.map((icon) => ({
          // По умолчанию фича может уезжать в overflow-дропдаун (true).
          // Обязательные фичи (fullScreen, rowSize) ставят false явно.
          canBeCompressed: icon.canBeCompressedInToolsMenu ?? true
        })),
        overflowItems: [],
        isOverflowTriggerVisible: false,
        hasGroupingCounter
      }
    }),
    [
      hasInlineCollapse,
      isActivated.editingMode,
      editModeEnabled,
      leftSideInner,
      isActiveSearching,
      showSearchBlock,
      rightButtons,
      hasGroupingCounter,
      icons
    ]
  );

  // ============ Hook компрессии (v2) ============
  const tableContainerRef = useRefTableContainerContext();
  const { compressedState: compressionVisibilityState, compress } =
    useCompressionFeatures(
      initialVisibilityState,
      mergedWidths,
      tableContainerRef?.current,
      {
        containerPadding: spacing.containerPadding,
        leftPartGap: spacing.leftPartGap,
        leftPartPaddingRight: spacing.leftPartPaddingRight,
        rightButtonsGap: spacing.rightButtonsGap,
        rightButtonsPaddingInline: spacing.rightButtonsPaddingInline
      },
      {
        editModeEnabled,
        hasEditModeLeftSlot: !!editModeLeftSlot,
        buttonSize: sizeMap.sideInnerButton
      }
    );

  // Эффекты замеров: дозамер при смене видимости лейблов, перезамер
  // после загрузки шрифтов, дебаг лог зон. Детали в compression/measure.ts.
  useMeasurementEffects(measurements, {
    visibilityState: compressionVisibilityState,
    containerRef,
    leftSideInner,
    rightButtons,
    featureLeftButtons,
    icons,
    fullScreened,
    editModeEnabled,
    isCollapsed
  });

  // ============ ResizeObserver ============
  const handleResize = useCallback(
    (entries: ResizeObserverEntry[]) => {
      const entry = entries[0];
      if (entry) {
        const { width } = entry.contentRect;
        if (width && typeof width === 'number') {
          // entry — это контейнер ТАБЛИЦЫ; доступная ширина контрл-блока —
          // его собственный clientWidth (без бордеров). Иначе avail завышен
          // на 2px бордеров и компрессия срабатывает раньше.
          compress(containerRef.current?.clientWidth ?? width);
        }
      }
    },
    [compress]
  );

  const throttledHandleResize = useMemo(
    () => throttleWithLastCall(handleResize, 100),
    [handleResize]
  );

  useTableResizeObserver(throttledHandleResize);

  // Этап 5: useLayoutEffect вместо useEffect для начального compress
  useLayoutEffect(() => {
    if (containerRef.current) {
      compress(containerRef.current.clientWidth);
    }
  }, [compress]);

  // Пересчитываем компрессию при смене режима редактирования
  useEffect(() => {
    if (containerRef.current) {
      compress(containerRef.current.clientWidth);
    }
  }, [editModeEnabled, compress]);

  // Пересчитываем компрессию при появлении/исчезновении счётчика группировки:
  // он меняет модель ширины и порядок шагов, а resize при этом не происходит,
  // поэтому compress нужно дёрнуть явно (как и для режима редактирования).
  useEffect(() => {
    if (containerRef.current) {
      compress(containerRef.current.clientWidth);
    }
  }, [hasGroupingCounter, compress]);

  // Передаём state компрессии наверх
  useEffect(() => {
    setCompressionVisibility(compressionVisibilityState);
  }, [compressionVisibilityState, setCompressionVisibility]);

  // ============ Данные для рендера (Этап 6) ============
  const { overflowItems, isOverflowTriggerVisible } =
    compressionVisibilityState.rightSide;

  const isItemInDropdown = useCallback(
    (sourceType: 'button' | 'customFeature', sourceIndex: number) =>
      overflowItems.some(
        (oi) =>
          oi.sourceType === sourceType &&
          oi.sourceIndex === sourceIndex &&
          oi.isInDropdown
      ),
    [overflowItems]
  );

  // leftSideInner: рендер по прежнему, если две и более то дропдаун "Действия"
  const filteredLeftSideInner = leftSideInner ?? [];
  const isLeftSideInnerInsideDropdown = filteredLeftSideInner.length >= 2;

  // Кнопки правой зоны, видимые (не в overflow дропдауне)
  const visibleRightButtons = rightButtons.filter(
    (_, i) => !isItemInDropdown('button', i)
  );

  // customFeatures (icons), видимые
  const visibleIcons = icons.filter(
    (_, i) => !isItemInDropdown('customFeature', i)
  );

  // Системная связка (fullScreen/rowSize/viewMode) — всегда в начале массива
  // иконок (визуально крайние справа). Триггер «...» вставляется сразу
  // ПОСЛЕ неё: справа налево — связка, дивайдер, триггер, остальные фичи.
  // for..of вместо индексного доступа — дружит с noUncheckedIndexedAccess.
  const SYSTEM_ICON_VALUES = ['full-screen', 'rowSize', 'view-mode'];
  let systemIconsCount = 0;
  for (const icon of visibleIcons) {
    if (!SYSTEM_ICON_VALUES.includes(icon.value)) break;
    systemIconsCount += 1;
  }

  // Собираем элементы для overflow дропдауна
  const dropdownButtons: (ControlBlockButtonProps | FeatureItem)[] =
    useMemo(() => {
      if (!isOverflowTriggerVisible) return [];

      const items: (ControlBlockButtonProps | FeatureItem)[] = [];

      // Кнопки правой зоны в дропдаун
      rightButtons.forEach((btn, i) => {
        if (isItemInDropdown('button', i)) {
          items.push(btn);
        }
      });

      // customFeatures в дропдаун
      icons.forEach((icon, i) => {
        if (isItemInDropdown('customFeature', i)) {
          items.push(icon);
        }
      });

      return items;
    }, [isOverflowTriggerVisible, rightButtons, icons, isItemInDropdown]);

  // Поиск всегда inline в v2
  const isSearchInline = isActiveSearching && showSearchBlock;

  // Есть ли видимые кнопки в правой части
  const hasVisibleRightButtons = visibleRightButtons.length > 0;
  const hasVisibleIcons = visibleIcons.length > 0;

  // Рендер leftSideInner
  const renderLeftSideInner = () =>
    isLeftSideInnerInsideDropdown ? (
      <ControlBlockActions
        buttons={filteredLeftSideInner}
        dropdownProps={controlBlockLeftSideDropdownProps}
      />
    ) : (
      filteredLeftSideInner.map((props, i) => (
        <React.Fragment key={props['key'] ?? `${props['text']}${i}`}>
          <CenteredItem
            ref={(el) => registerFeaturesRef(el, i, 'leftSideInner')}
          >
            <ControlBlockButton
              {...props}
              index={i}
              buttonSize={sizeMap.sideInnerButton}
              iconSize={sizeMap.sideInnerIcon}
              showLabel={
                compressionVisibilityState.leftSide.leftSideInner?.[i]
                  ?.isLabelVisible ?? true
              }
            />
          </CenteredItem>
        </React.Fragment>
      ))
    );

  return (
    <Collapse
      isOpen={isHaveControlBlock}
      sizeOnOpen={spacing.containerHeight}
      unMountOnClose
    >
      <ControlBlockStyled
        ref={containerRef}
        $activeView={activeView}
        $borderTopRounded={
          collapseButtonPlacement === 'above' ? false : $borderTopRounded
        }
        $isVisibleSearching={isSearchInline}
        $calculatedSearchQuery={searchQueryLocalValue}
        $searchMinWidth={
          compressionVisibilityState.middle.searchingFeature.minWidth
        }
        $placeholderSearchBlock={placeholderSearchBlock}
        $collapsedTable={isCollapsed}
        $containerPadding={spacing.containerPadding}
        $containerHeight={spacing.containerHeight}
      >
        {/* Inline title */}
        {ctxPlacement !== 'above' && (ctxTitleText || ctxTitleRender)
          ? ctxTitleRender || (
              <InlineTitleText
                ref={inlineTitleRef}
                $size={controlBlockSize || 'm'}
              >
                {ctxTitleText}
              </InlineTitleText>
            )
          : null}
        {(hasInlineCollapse ||
          (editModeEnabled && editModeLeftSlot) ||
          featureLeftButtons.length > 0 ||
          filteredLeftSideInner.length > 0) && (
          <Flow
            alignment="center"
            style={{
              flexWrap: 'nowrap'
            }}
          >
            {hasInlineCollapse && (
              <CollapseTableButton
                ref={(el) => registerFeaturesRef(el, 0, 'collapsingBlock')}
                buttonSize={sizeMap.collapsingButton}
                iconSize={sizeMap.collapsingIcon}
              />
            )}
            <LefSideStyled
              $gap={spacing.leftPartGap}
              $paddingRight={spacing.leftPartPaddingRight}
            >
              {editModeEnabled && editModeLeftSlot && (
                <div ref={editModeLeftSlotRef}>{editModeLeftSlot}</div>
              )}
              {featureLeftButtons.map((props, i, arr) => (
                <React.Fragment key={props['key'] ?? `${props['text']}${i}`}>
                  <CenteredItem
                    ref={(el) =>
                      registerFeaturesRef(el, i, 'featureLeftButton')
                    }
                  >
                    <ControlBlockButton
                      {...props}
                      index={i}
                      buttonSize={sizeMap.sideInnerButton}
                      iconSize={sizeMap.sideInnerIcon}
                      isLastButtonInnArray={
                        props?.skipRightDivider ||
                        (i === arr.length - 1 &&
                          filteredLeftSideInner.length === 0)
                      }
                      showLabel={
                        compressionVisibilityState.leftSide.editRowFeature
                          .isLabelVisible ?? true
                      }
                    />
                  </CenteredItem>
                </React.Fragment>
              ))}
              {filteredLeftSideInner.length > 0 && (
                <div
                  ref={leftSideInnerBlockRef}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  {renderLeftSideInner()}
                </div>
              )}
            </LefSideStyled>
          </Flow>
        )}
        {/* Поиск — всегда inline в v2 */}
        <div className={cls.searchControlBlock}>
          {isSearchInline && (
            <SearchBlock
              isVisible={showSearchBlock}
              size={sizeMap.searchField}
              iconSize={sizeMap.searchIcon}
            />
          )}
        </div>
        {/* Правая часть */}
        <Box
          $css="display: flex; align-items: center;"
          className={cls.rightControlBlock}
        >
          {hasVisibleRightButtons && (
            <RightButtonsContainer
              $gap={spacing.rightButtonsGap}
              $paddingInline={spacing.rightButtonsPaddingInline}
            >
              {/* Кнопки правой зоны (конфиг + встроенные фичи), видимые */}
              {visibleRightButtons.map((props) => {
                const originalIndex = rightButtons.indexOf(props);
                return (
                  <React.Fragment
                    key={props['key'] ?? `${props['text']}${originalIndex}`}
                  >
                    <CenteredItem
                      ref={(el) =>
                        registerFeaturesRef(el, originalIndex, 'rightButton')
                      }
                    >
                      <ControlBlockButton
                        {...props}
                        index={originalIndex}
                        buttonSize={sizeMap.sideInnerButton}
                        iconSize={sizeMap.sideInnerIcon}
                        showLabel={
                          compressionVisibilityState.rightSide.buttons[
                            originalIndex
                          ]?.isLabelVisible ?? true
                        }
                      />
                    </CenteredItem>
                  </React.Fragment>
                );
              })}
            </RightButtonsContainer>
          )}
          {/* Divider между кнопками и icon-features */}
          {hasVisibleIcons && hasVisibleRightButtons && (
            <StyledDivider orientation="vertical" length="16px" />
          )}
          {/* Триггер «...» живёт в ЗОНЕ ИКОНОК: справа налево —
              fullScreen, rowSize, дивайдер связки, триггер, остальные фичи
              (включая pinned). Вставляется после системной связки. */}
          <RightSide
            icons={visibleIcons}
            featureItems={featureItems}
            featureIconSize={sizeMap.featureIcon}
            triggerAfterCount={systemIconsCount}
            triggerSlot={
              isOverflowTriggerVisible ? (
                <div ref={overflowTriggerRef}>
                  <ControlBlockActions
                    buttons={dropdownButtons}
                    triggerSlot={
                      <LinkButton
                        size={sizeMap.overflowTriggerButton}
                        contentRight={
                          <IconDotsVerticalCenteredOutline
                            size={sizeMap.overflowTriggerIcon}
                          />
                        }
                        style={{
                          paddingInline: '5px 8px'
                        }}
                      />
                    }
                    dropdownProps={controlBlockRightSideDropdownProps}
                  />
                </div>
              ) : undefined
            }
            registerIconRef={(el, value) => {
              const originalIndex = icons.findIndex((ic) => ic.value === value);
              if (originalIndex > -1)
                registerFeaturesRef(el, originalIndex, 'customFeatures');
            }}
          />
        </Box>
      </ControlBlockStyled>
    </Collapse>
  );
};
