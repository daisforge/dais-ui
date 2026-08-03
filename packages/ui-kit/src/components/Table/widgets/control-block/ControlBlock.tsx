/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
import { Box } from '@ui-kit/components/Box';
import { Collapse } from '@ui-kit/components/Collapse';
import { Flow } from '@ui-kit/components/Flow';
import { LinkButton } from '@ui-kit/components/LinkButton';
import { ActiveViewModsType } from '@ui-kit/components/Table/types';
import { IconDotsHorizontalOutline } from '@ui-kit/icons';
import { throttleWithLastCall } from '@ui-kit/utils';
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { TableDropdownConfigProps } from '../../components/TableDropdown/types';
import {
  useRefTableContext,
  useTableCollapse,
  useTableResizeObserver,
} from '../../contexts';
import { CollapseTableButton } from '../../feature-collapse-table';
import { SearchBlock, StyledSearchBlockBellow } from '../../feature-searching';
// import { useSelectingRowContext } from '../../feature-select-row/selecting-contexts';
// import { SummaryCheckbox } from '../../feature-select-row/summary-checkbox';
import { HEIGHT_CONTROL_BLOCK } from '../../styles';
import { controlBlockClassNames as cls } from './control-block.classnames';
import { ControlBlockActions } from './control-block-actions';
import { ControlBlockButton, StyledDivider } from './control-block-button';
import { type ControlBlockButtonProps } from './control-block-button.types';
import { RightSide } from './right-side';
import { ControlBlockStyled, LefSideStyled } from './styled';
import {
  FeatureItem,
  InitialWidthsForToolsMenu,
  ToolsMenuState,
} from './types';
import { useCompressionFeatures } from './use-compression-features';

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

const getDividerIndexes: ({
  visibleRightButtons,
  featureRightButtons,
}: {
  visibleRightButtons: ControlBlockButtonProps[];
  featureRightButtons: ControlBlockButtonProps[];
}) => Array<number> = ({ visibleRightButtons, featureRightButtons }) => {
  if (visibleRightButtons.length > 0 && featureRightButtons.length === 0) {
    return [visibleRightButtons.length - 1];
  }
  if (visibleRightButtons.length === 0 && featureRightButtons.length > 0) {
    return [featureRightButtons.length - 1];
  }
  if (visibleRightButtons.length > 0 && featureRightButtons.length > 0) {
    return [visibleRightButtons.length + featureRightButtons.length - 1];
  }
  return [];
};

export const ControlBlock = ({
  leftSideInner,
  rightSideInner,
  isHaveControlBlock,
  activeView,
  fullScreened,
  editModeEnabled,

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
      placeholderSearchBlock,
    },
  },
  $borderTopRounded,
  setCompressionVisibility,
  controlBlockLeftSideDropdownProps,
  controlBlockRightSideDropdownProps,
  collapseButtonPlacement = 'inside',
}: {
  leftSideInner: ControlBlockButtonProps[] | undefined;
  rightSideInner: ControlBlockButtonProps[] | undefined;

  editModeEnabled: boolean;
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
}) => {
  // Debug (можно сохранить в будущем полезно для дебага того, что приходит в компонент)
  // console.group('Info about features in ControlBlock');
  // console.debug('rightSideInner', rightSideInner);
  // console.debug('featureRightButtons', featureRightButtons);
  // console.debug('leftSideInner', leftSideInner);
  // console.debug('featureLeftButtons', featureLeftButtons);
  // console.debug('icons', icons);
  // console.debug('featureItems', featureItems);
  // console.groupEnd();
  const refTableContext = useRefTableContext();
  const { enableCollapse, isCollapsed } = useTableCollapse();
  const containerRef = useRef<HTMLDivElement>(null);
  // const {
  //   selectingRowConfig: { selectingRowsIsActive },
  //   setIsSelectingRowCounterVisible,
  //   setIsSelectingRowLabelVisible,
  // } = useSelectingRowContext();

  /**
   *  Ширины кнопок с текстом и иконкой (их задают количество и текст пользователи задают самостоятельно)
   *  Нужно учитывать их длину
   *  Данный стейт передается в хук компрессии для более точного подсчёта (вместо использования заготовок в виде констант)
   */
  const [initialWidths, setInitialWidths] = useState<InitialWidthsForToolsMenu>(
    {},
  );

  /**
   * Рефы для хранения информации и ширинах кастомных элементов
   * customFeaturesRefs на данный момент не используется при вычислении компрессии, пока что используется константа, в будущем планируется добавить
   */
  const rightSideInnerRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const leftSideInnerRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const customFeaturesRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const collapsingBlockRefs = useRef<Record<number, HTMLDivElement | null>>({});

  /**
   * Инициализируем состояние видимости/позиции на основе фичей
   * Данное состояние передается в хук компрессии.
   * Оно включает в себя наличие и позицию всех фичей таблицы в ToolsMenu
   * Важно отметить, что состояние должно отражать самый "длинный" вариант, когда
   * все фичи активны и показаны в верхней панеле ToolsMenu
   */
  const initialVisibilityState: ToolsMenuState = useMemo(
    () => ({
      leftSide: {
        collapsingBlock: {
          isActive: enableCollapse && collapseButtonPlacement === 'inside',
        },
        // isActive: isActivated.selectingRows && selectingRowsIsActive.
        // Сейчас отключаем для компрессии, так как counter теперь в MassActions
        selectingRowFeature: {
          isActive: false,
          isLabelVisible: false,
          isCounterVisible: false,
        },
        editRowFeature: {
          isActive: isActivated.editingMode,
          isLabelVisible: true,
          editModeEnabled,
        },
        leftSideInner: [...(leftSideInner ?? [])].map((btn) => ({
          isLabelVisible: true,
          isTargetAction:
            btn.isTargetAction || btn.view === 'linkAccent' || false, // Целевые действие
        })),
        isLeftSideInnerInsideDropdown: (leftSideInner ?? []).length >= 2, // Если 2 или более фичей в leftSideInner, то скроются в Dropdown
      },
      middle: {
        searchingFeature: {
          isActive: isActiveSearching && showSearchBlock,
          searchPosition: 'inline', // По умолчанию в одной строке
        },
      },
      rightSide: {
        rightSideInner: [...(rightSideInner ?? [])].map((btn) => ({
          isLabelVisible: true,
          isTargetAction:
            btn.isTargetAction || btn.view === 'linkAccent' || false, // Целевые действие
        })),
        customFeatures: icons.map((icon) => ({
          isMovedToRightSidebar: false,
          isMandatory: icon.mandatory || false, // Обязательные фичи (не попадают в sidebar)
          canBeCompressedInToolsMenu: icon.canBeCompressedInToolsMenu || false, //
        })),
        groupingRowsFeature: {
          isActive: isActivated.rowsGrouping,
          isVisibleLabel: true,
          isCounterVisible: true, // самый "длинный" вариант
        },
        isRightSideInsideDropdown: false,
      },
    }),
    //
    [
      enableCollapse,
      isActivated.editingMode,
      isActivated.rowsGrouping,
      editModeEnabled,
      leftSideInner,
      isActiveSearching,
      showSearchBlock,
      rightSideInner,
      icons,
      collapseButtonPlacement,
    ],
  );

  /**
   * Измеряем ширины RightSideInner и LeftSideInner кнопок при монтировании
   * Это кнопки текст + иконка.
   * Так как мы не знаем заранее, какой может быть текст длиной
   */
  useLayoutEffect(() => {
    if (Object.keys(initialWidths).length > 0) return;

    const newWidths: InitialWidthsForToolsMenu = {};

    // Измеряем правую часть
    const rightSideWidths: number[] = [];
    Object.entries(rightSideInnerRefs.current).forEach(([indexStr, el]) => {
      if (!el) return;
      const index = Number(indexStr);
      rightSideWidths[index] = el.getBoundingClientRect().width;
    });
    if (rightSideWidths.length > 0) {
      newWidths.rightSideInner = rightSideWidths;
    }

    // Измеряем левую часть
    const leftSideWidths: number[] = [];
    Object.entries(leftSideInnerRefs.current).forEach(([indexStr, el]) => {
      if (!el) return;
      const index = Number(indexStr);
      leftSideWidths[index] = el.getBoundingClientRect().width;
    });
    if (leftSideWidths.length > 0) {
      newWidths.leftSideInner = leftSideWidths;
    }

    // Измеряем collapseBlock
    const collapseBlockWidths: number[] = [];
    Object.entries(collapsingBlockRefs.current).forEach(([indexStr, el]) => {
      if (!el) return;
      const index = Number(indexStr);
      collapseBlockWidths[index] = el.getBoundingClientRect().width;
    });

    if (collapseBlockWidths.length > 0) {
      newWidths.collapseBlock = collapseBlockWidths;
    }

    if (Object.keys(newWidths).length > 0) {
      setInitialWidths(newWidths);
    }
  }, [
    rightSideInner?.length,
    leftSideInner?.length,
    initialWidths,
    fullScreened,
  ]);

  /**
   * Hook компрессии.
   * Получаем state видимости после сжатия + функцию для сжатия, которую вызываем при изменении
   * размеров ToolsMenu контейнера
   */
  const { compressedState: compressionVisibilityState, compress } =
    useCompressionFeatures(
      initialVisibilityState,
      initialWidths,
      refTableContext?.current?.element,
    );

  /**
   * Эффект применения сжатия при изменении размеров таблицы
   * Используем единый ResizeObserver из контекста
   */
  const handleResize = useCallback(
    (entries: ResizeObserverEntry[]) => {
      try {
        const entry = entries[0];
        if (entry) {
          const { width } = entry.contentRect;
          // Проверяем, что width существует и является числом
          if (width && typeof width === 'number') {
            // Применяем сжатие, передавая в аргументы текущую ширину контейнера
            compress(width);
          } else {
            console.warn('Cannot get valid width for compression');
          }
        }
      } catch (error) {
        console.error('ResizeObserver error:', error);
        // Принудительно пересчитываем при ошибке
        if (containerRef.current) {
          compress(containerRef.current.clientWidth);
        }
      }
    },
    [compress],
  );

  // Обернутая в throttle handleResize
  const throttledHandleResize = useMemo(
    () => throttleWithLastCall(handleResize, 100),
    [handleResize],
  );

  useTableResizeObserver(throttledHandleResize);

  // Первый вызов для получения начальной ширины
  useEffect(() => {
    if (containerRef.current) {
      const initialWidth = containerRef.current.clientWidth;
      if (initialWidth && typeof initialWidth === 'number') {
        compress(initialWidth);
      }
    }
  }, [compress]);

  /**
   * State видимости после компрессии (глобальный, на уровне таблицы)
   * Используется в use-feature-array, в частности для определения, какие
   * кастомные features будут в RightSidebar
   */
  useEffect(() => {
    setCompressionVisibility(compressionVisibilityState);
  }, [compressionVisibilityState, setCompressionVisibility]);

  // Эффект для управления видимостью feature Selecting
  // useEffect(() => {
  //   const { isActive, isLabelVisible, isCounterVisible } =
  //     compressionVisibilityState.leftSide.selectingRowFeature;
  //   if (isActive) {
  //     if (isLabelVisible) {
  //       setIsSelectingRowLabelVisible(true);
  //     } else {
  //       setIsSelectingRowLabelVisible(false);
  //     }
  //     if (isCounterVisible) {
  //       setIsSelectingRowCounterVisible(true);
  //     } else {
  //       setIsSelectingRowCounterVisible(false);
  //     }
  //   }
  // }, [
  //   compressionVisibilityState.leftSide.selectingRowFeature,
  //   setIsSelectingRowCounterVisible,
  //   setIsSelectingRowLabelVisible,
  // ]);

  // Собираем все ref в один объект
  const registerFeaturesRef = useCallback(
    (
      el: HTMLDivElement | null,
      index: number,
      target:
        | 'rightSideInner'
        | 'leftSideInner'
        | 'customFeatures'
        | 'collapsingBlock',
    ) => {
      switch (target) {
        case 'rightSideInner':
          rightSideInnerRefs.current[index] = el;
          break;
        case 'leftSideInner':
          leftSideInnerRefs.current[index] = el;
          break;
        case 'customFeatures':
          customFeaturesRefs.current[index] = el;
          break;
        case 'collapsingBlock':
          collapsingBlockRefs.current[index] = el;
          break;
        default:
          break;
      }
    },
    [],
  );

  // Должна ли скрыться правая часть в Dropdown
  const { isRightSideInsideDropdown } = compressionVisibilityState.rightSide;

  // 1. Фильтрация leftSideInner с учетом compressionVisibilityState
  const filteredLeftSideInner = (leftSideInner ?? []).filter(
    (_, index) =>
      compressionVisibilityState.leftSide.leftSideInner[index]
        ?.isLabelVisible !== false,
  );

  // 2. rightSideInner
  const visibleRightButtons = rightSideInner ?? [];

  // 3. Фильтрация иконок для правой части
  const visibleIcons = icons.filter(
    (_, index) =>
      !compressionVisibilityState.rightSide.customFeatures[index]
        ?.isMovedToRightSidebar,
  );

  // 4. Фильтрация иконок для правой части (попали ли они в Dropdown скрытия)
  const visibleIconsAfterCheckRightSideInDropdown = isRightSideInsideDropdown
    ? [...visibleIcons.filter((item) => !item.canBeCompressedInToolsMenu)]
    : [...visibleIcons];

  // Блок поиска остается в верхней части ControlBlock (inline)
  const isSearchingBlockInlineAfterCompress =
    compressionVisibilityState.middle.searchingFeature.searchPosition ===
    'inline';

  // Блок поиска смещается ниже ControlBlock (bellow)
  const isSearchingBlockBellow =
    !isSearchingBlockInlineAfterCompress &&
    isActiveSearching &&
    showSearchBlock;

  // Если в leftSideInner более 2 features, то рисуем их в Dropdown
  const renderLeftSideInner = () =>
    filteredLeftSideInner.length >= 2 ? (
      <ControlBlockActions
        buttons={filteredLeftSideInner}
        dropdownProps={controlBlockLeftSideDropdownProps}
      />
    ) : (
      filteredLeftSideInner.map((props, i) => (
        <React.Fragment key={props['key'] ?? `${props['text']}${i}`}>
          <div ref={(el) => registerFeaturesRef(el, i, 'leftSideInner')}>
            <ControlBlockButton
              {...props}
              index={i}
              showLabel={
                compressionVisibilityState.leftSide.leftSideInner?.[i]
                  ?.isLabelVisible ?? true
              }
            />
          </div>
        </React.Fragment>
      ))
    );

  // render RightSideInner
  const renderRightSideInner = ({ onlyTargetActions = false } = {}) =>
    visibleRightButtons
      .filter((item) =>
        onlyTargetActions
          ? item.isTargetAction || item.view === 'linkAccent'
          : item,
      )
      .map((props, i, arr) => {
        const isLastButtonInnArray =
          i === arr.length - 1 && featureRightButtons.length === 0;

        return (
          <React.Fragment key={props['key'] ?? `${props['text']}${i}`}>
            <div ref={(el) => registerFeaturesRef(el, i, 'rightSideInner')}>
              <ControlBlockButton
                {...props}
                index={i}
                showLabel={
                  compressionVisibilityState.rightSide.rightSideInner[i]
                    ?.isLabelVisible ?? true
                }
              />
            </div>
            {isLastButtonInnArray && (
              <StyledDivider orientation="vertical" length="16px" />
            )}
          </React.Fragment>
        );
      });

  return (
    <Collapse
      isOpen={isHaveControlBlock}
      sizeOnOpen={
        HEIGHT_CONTROL_BLOCK +
        (isSearchingBlockBellow ? HEIGHT_CONTROL_BLOCK : 0)
      }
      unMountOnClose
    >
      <ControlBlockStyled
        ref={containerRef}
        $activeView={activeView}
        $borderTopRounded={
          collapseButtonPlacement === 'above' ? false : $borderTopRounded
        }
        $isVisibleSearching={
          isActiveSearching &&
          showSearchBlock &&
          isSearchingBlockInlineAfterCompress
        }
        $calculatedSearchQuery={searchQueryLocalValue}
        $placeholderSearchBlock={placeholderSearchBlock}
        $collapsedTable={isCollapsed}
      >
        <Flow
          alignment="center"
          style={{
            flexWrap: 'nowrap',
          }}
        >
          {/* Collapsing block - рендерим только если размещение внутри  */}
          {collapseButtonPlacement === 'inside' && (
            <CollapseTableButton
              ref={(el) => registerFeaturesRef(el, 0, 'collapsingBlock')}
            />
          )}
          {/* Левая часть */}
          <LefSideStyled>
            {/* Selecting (перенесли в MassActions) */}
            {/* <SummaryCheckbox
              isHaveRightDivider={
                filteredLeftSideInner.length > 0 &&
                featureLeftButtons.length === 0
              }
            /> */}
            {/* В featureLeftButtons попадает только EditRowFeature, если активна */}
            {featureLeftButtons.map((props, i, arr) => (
              <React.Fragment key={props['key'] ?? `${props['text']}${i}`}>
                <ControlBlockButton
                  {...props}
                  index={i}
                  // Не Ставим Divider, если это последний элемент И за ним нет других фичей в левой части
                  isLastButtonInnArray={
                    i === arr.length - 1 && filteredLeftSideInner.length === 0
                  }
                  showLabel={
                    compressionVisibilityState.leftSide.editRowFeature
                      .isLabelVisible ?? true
                  }
                />
              </React.Fragment>
            ))}
            {/* Рендер левой части */}
            {/* Если кнопок более 2 -> они скрываются в Dropdown Действия */}
            {renderLeftSideInner()}
          </LefSideStyled>
        </Flow>
        {/* Поиск в inline позиции в ControlBlock */}
        <div className={cls.searchControlBlock}>
          {isActiveSearching &&
            compressionVisibilityState.middle.searchingFeature
              .searchPosition === 'inline' && (
              <SearchBlock isVisible={showSearchBlock} />
            )}
        </div>
        {/* Правая часть RightSideInner */}
        <Box $css="display: flex;" className={cls.rightControlBlock}>
          {isRightSideInsideDropdown ? (
            <>
              {renderRightSideInner({
                onlyTargetActions: true,
              })}
              <ControlBlockActions
                buttons={visibleRightButtons
                  .concat(
                    featureRightButtons.filter((item) => !item.isTargetAction),
                  )
                  .concat(
                    visibleIcons
                      .reverse() // меняем порядок местами, так как ранее эти фичи были в другом порядке и это компенсировалось row-reverse для flex контейнера, но в dropdown так сделать не получится.
                      .filter((item) => item.canBeCompressedInToolsMenu),
                  )}
                dividerIndexes={
                  visibleIcons.some((item) => item.canBeCompressedInToolsMenu)
                    ? getDividerIndexes({
                        visibleRightButtons,
                        featureRightButtons,
                      })
                    : []
                }
                triggerSlot={
                  <LinkButton
                    size="s"
                    contentRight={<IconDotsHorizontalOutline size="s" />}
                    style={{
                      paddingInline: '5px 8px',
                    }}
                  />
                }
                dropdownProps={controlBlockRightSideDropdownProps}
              />
              {/* Если правее Dropdown есть иконки какие-нибудь - нужен разделитель */}
              {visibleIconsAfterCheckRightSideInDropdown.length > 0 && (
                <StyledDivider orientation="vertical" length="16px" />
              )}
            </>
          ) : (
            <>
              {/* Рендер кастомных кнопок с label + иконка */}
              {renderRightSideInner()}
              {/* В featureRightButtons попадает (пока) только RowsGrouping, если активна */}
              {featureRightButtons.map((props, i, arr) => {
                const isLastBtnInnArray =
                  i === arr.length - 1 && visibleIcons.length > 0;
                return (
                  <React.Fragment key={props['key'] ?? `${props['text']}${i}`}>
                    <ControlBlockButton
                      key={props['key'] ?? `${props['text']}${i}`}
                      {...props}
                      index={i}
                      showLabel={
                        compressionVisibilityState.rightSide.groupingRowsFeature
                          .isVisibleLabel ?? true
                      }
                    />
                    {isLastBtnInnArray && (
                      <StyledDivider orientation="vertical" length="16px" />
                    )}
                  </React.Fragment>
                );
              })}
            </>
          )}
          <RightSide
            icons={visibleIconsAfterCheckRightSideInDropdown}
            featureItems={featureItems}
          />
        </Box>
      </ControlBlockStyled>
      {/* Блок поиска снизу */}
      {isSearchingBlockBellow && (
        <StyledSearchBlockBellow
          $activeView={activeView}
          $isCollapsed={isCollapsed}
        >
          <SearchBlock isVisible={showSearchBlock} $isFullHeight />
        </StyledSearchBlockBellow>
      )}
    </Collapse>
  );
};
