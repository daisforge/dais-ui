/* eslint-disable @typescript-eslint/no-use-before-define */

import {
  ColumnConfig,
  // ControlBlockSwitch,
  ObjectForExtending,
  SIZE,
  TableConfig
} from '@ui-kit/components/Table';
import {
  IconEditOutline,
  IconFullscreenOff,
  IconFullscreenOn,
  IconKeyOutline,
  // IconPinListOutline,
  // IconSettingsFilter,
  IconSettingsOutline,
  IconViewScreen4Outline,
  // IconListView,
  IconViewSplit4Outline
} from '@ui-kit/icons';
import React, { useCallback, useState } from 'react';

import { ColumnsControl } from '../../feature-column-control';
import { ColumnsControlConfig } from '../../feature-column-control/types';
import { isHasFilters } from '../../feature-filtering';
import { SidebarFilters } from '../../feature-filtering/sidebar-filter-block';
import { FullScreenObj } from '../../feature-full-screen/types';
import {
  KEY_TEXT_OPTIONS,
  KeyTextIconWithDropdown,
  showKeyText
} from '../../feature-key-text';
import type { KeyText, KeyTextMap } from '../../feature-key-text/types';
import {
  getCurrentSizeIcon,
  getCurrentSizeLabel,
  isActivatedRowSize,
  setRowSizeCb
} from '../../feature-row-size';
import { useGetRowsGroupingBtnProps } from '../../feature-rows-grouping';
import { TableSettingsWithTabs } from '../../feature-table-settings';
import { ActiveViewModsType } from '../../types';
import { DOM_METADATA_ACTIONS } from '../../types/dom-metadata-actions';
import { ControlBlockButtonProps } from './control-block-button.types';
import { FeatureItem, SidebarTab, ToolsMenuState } from './types';

const ifTrue = <T extends FeatureItem>(reason: boolean, value: T) =>
  reason ? [value] : [];
const ifTrueBtn = <T extends ControlBlockButtonProps>(
  reason: boolean,
  value: T
) => (reason ? [value] : []);

export const useFeatureArray = <
  FilterStateType extends ObjectForExtending,
  RowType extends ObjectForExtending,
  RowIdType extends string | number,
  SummaryRowType = unknown
>({
  tableConfig,
  activeView,
  setActiveView,
  summaryRowsIsActive,
  setSummaryRowsIsActive,
  selectingRowsIsActive,
  setSelectingRowsIsActive,
  rowSize,
  setRowSize,
  columnsControlEnable,
  fullScreened,
  setFullScreened,
  showRowInstruments,
  setShowRowInstruments,
  keyText,
  setKeyText,
  rowsGroupingIsActiveInConfig,
  groupedCols,
  setGroupedCols,
  columnConfig,
  editModeEnabled,
  setEditModeEnabled,
  showSearchBlock,
  setShowSearchBlock,
  searchQueryLocalValue,
  placeholderSearchBlock,
  // ControlBlock
  openControlModal,
  setOpenControlModal,
  setColumnsOrder,
  columnsOrder,
  pinnedCols,
  setPinnedCols,
  hiddenCols,
  setHiddenCols,
  getDefaultColumnsOrder,
  columnsControlConfig,
  colsWithKeyTextMap,
  tableConfigKeyTextBoolean,
  compressionVisibility,
  enableAdaptiveCompress
}: {
  tableConfig: TableConfig<
    RowType,
    SummaryRowType,
    RowIdType,
    FilterStateType
    // SubRowType
  >;
  activeView: ActiveViewModsType;
  setActiveView: React.Dispatch<React.SetStateAction<ActiveViewModsType>>;
  summaryRowsIsActive: boolean;
  setSummaryRowsIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  selectingRowsIsActive: boolean;
  setSelectingRowsIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  clearedFiltersValue: FilterStateType | undefined;
  rowSize: SIZE;
  setRowSize: React.Dispatch<React.SetStateAction<SIZE>>;
  columnsControlEnable: boolean;
  setOpenControlModal: React.Dispatch<React.SetStateAction<boolean>>;
  fullScreened: boolean;
  setFullScreened: NonNullable<FullScreenObj['state']>['1'];
  showRowInstruments: boolean;
  setShowRowInstruments: React.Dispatch<React.SetStateAction<boolean>>;
  keyText: KeyText;
  setKeyText: React.Dispatch<React.SetStateAction<KeyText>>;
  rowsGroupingIsActiveInConfig: boolean;
  groupedCols: string[] | undefined;
  setGroupedCols: React.Dispatch<React.SetStateAction<string[]>> | undefined;
  columnConfig: readonly ColumnConfig<RowType, SummaryRowType>[];
  editModeEnabled: boolean;
  setEditModeEnabled: React.Dispatch<React.SetStateAction<boolean>> | null;
  showSearchBlock: boolean;
  setShowSearchBlock: React.Dispatch<React.SetStateAction<boolean>>;
  placeholderSearchBlock: string;
  searchQueryLocalValue: string;
  // ControlBlockProps
  openControlModal: boolean;
  setColumnsOrder: React.Dispatch<React.SetStateAction<string[]>>;
  columnsOrder: string[];
  pinnedCols: string[];
  setPinnedCols: React.Dispatch<React.SetStateAction<string[]>>;
  hiddenCols: string[];
  setHiddenCols: React.Dispatch<React.SetStateAction<string[]>>;
  getDefaultColumnsOrder: () => string[];
  columnsControlConfig: ColumnsControlConfig;
  colsWithKeyTextMap: KeyTextMap;
  tableConfigKeyTextBoolean: boolean;
  compressionVisibility: ToolsMenuState | undefined;
  enableAdaptiveCompress: boolean;
}) => {
  const activeViewIsRows = activeView === 'rows';
  // Состояние активного settings таба (внутренние табы в сайдбаре: Общие. Фильтры. Столбцы)
  // По умолчанию Общие
  const [activeSettingsTabId, setActiveSettingsTabId] = useState<string | null>(
    'general'
  );

  const isActivated = {
    viewChanging: tableConfig?.view?.type === 'both-types',
    rowSize: activeViewIsRows && isActivatedRowSize(tableConfig.rowSize),
    columnsControl: activeViewIsRows && columnsControlEnable,
    summaryRows: activeViewIsRows && !!tableConfig.summaryRows?.showInControl,

    selectingRows:
      activeViewIsRows &&
      !!tableConfig.selecting &&
      (tableConfig.selecting?.showInControl ?? true),

    fullScreen:
      activeViewIsRows &&
      !!tableConfig.fullScreenEnabled &&
      (typeof tableConfig.fullScreenEnabled === 'object'
        ? tableConfig.fullScreenEnabled.showInControl ?? true
        : true),
    rowInstruments:
      activeViewIsRows &&
      !!tableConfig.rowInstruments &&
      (tableConfig.rowInstruments.showInControl ?? true),
    keyText: activeViewIsRows && showKeyText(tableConfig.keyText),

    rowsGrouping:
      rowsGroupingIsActiveInConfig &&
      (tableConfig.rowsGrouping?.showInControl ?? true),
    editingMode:
      !!tableConfig.editing &&
      tableConfig.editing?.showToggleEnabledButton !== false &&
      typeof tableConfig.editing.enabled !== 'boolean',

    searching: activeViewIsRows && !!tableConfig?.searching?.enabled,
    filtering: isHasFilters({ tableConfig, columnConfig }),
    collapsing: tableConfig.collapsing?.enableCollapse
  };

  const { rowsGroupingButtonProps } = useGetRowsGroupingBtnProps({
    tableConfig,
    columnConfig,
    groupedCols,
    setGroupedCols,
    isActivatedRowsGrouping: isActivated.rowsGrouping
  });

  const featureLeftButtons: ControlBlockButtonProps[] = [
    ...ifTrueBtn(isActivated.editingMode, {
      text: editModeEnabled ? 'Просмотреть' : 'Редактировать',
      contentLeft: <IconEditOutline />,
      onClick: () => {
        if (!setEditModeEnabled) {
          return;
        }
        setEditModeEnabled((prev) => {
          const newV = !prev;
          tableConfig.editing?.onToggleEnableEditing?.(newV);
          return newV;
        });
      },
      className: tableConfig?.editing?.domMetadata?.className,
      ...tableConfig.editing?.domMetadata?.dataAttributes
    })
  ];

  const featureRightButtons: ControlBlockButtonProps[] = [
    ...ifTrueBtn(isActivated.rowsGrouping, rowsGroupingButtonProps)
  ];

  const featureSearching = {
    isActiveSearching: isActivated.searching,
    showSearchBlock,
    setShowSearchBlock,
    searchQueryLocalValue,
    placeholderSearchBlock
  };

  const { all, icons, featureItems, mandatoryFeatures } = (() => {
    //  порядок в ui справа налево (flex-direction: row-reverse;). Например, rowSize - первый справа

    // Сначала собираем обязательные фичи (не попадают в сайдбар)
    const mandatoryFeatures: FeatureItem[] = [
      ...ifTrue(isActivated.fullScreen, {
        value: 'full-screen',
        label: fullScreened
          ? 'Выйти из полноэкранного режима'
          : 'На весь экран',
        dividerLeft: true,
        onClick: () => setFullScreened((prev) => !prev),
        Icon: fullScreened ? IconFullscreenOff : IconFullscreenOn,
        mandatory: true, // Добавляем флаг обязательности
        canBeCompressedInToolsMenu: false,
        // DomMetadata
        className:
          typeof tableConfig?.fullScreenEnabled !== 'boolean'
            ? tableConfig.fullScreenEnabled?.domMetadata?.className
            : '',
        // data-атрибуты
        ...(typeof tableConfig?.fullScreenEnabled !== 'boolean'
          ? tableConfig.fullScreenEnabled?.domMetadata?.dataAttributes || {}
          : {})
      }),
      ...ifTrue(isActivated.rowSize, {
        value: 'rowSize',
        label: getCurrentSizeLabel(rowSize),
        onClick: () => {
          let newSize: string | undefined;
          setRowSize((prev) => {
            const res = setRowSizeCb(prev, tableConfig.rowSize);
            tableConfig.rowSize?.onRowSizeChange?.(res);
            newSize = res;
            return res;
          });
          tableConfig.rowSize?.domMetadata?.onClick?.(undefined, {
            action: DOM_METADATA_ACTIONS.CHANGE_ROW_SIZE,
            size: newSize
          });
        },

        Icon: getCurrentSizeIcon(rowSize),
        mandatory: true, // Добавляем флаг обязательности
        canBeCompressedInToolsMenu: true,
        dividerLeft:
          !isActivated.viewChanging &&
          tableConfig.controlBlock?.customFeatures &&
          tableConfig.controlBlock?.customFeatures?.length > 0,
        // DomMetadata
        className: tableConfig.rowSize?.domMetadata?.className,
        ...tableConfig?.rowSize?.domMetadata?.dataAttributes
      }),
      ...ifTrue(isActivated.viewChanging, {
        value: 'view-mode',
        label: 'Изменить вид отображения',
        onClick: () => {
          setActiveView((prev) => (prev === 'cards' && 'rows') || 'cards');
        },
        Icon:
          (activeView === 'rows' && IconViewSplit4Outline) ||
          IconViewScreen4Outline,
        mandatory: true, // Добавляем флаг обязательности
        canBeCompressedInToolsMenu: true, // Фича может быть сжата в кнопку [...] при сильном сжатии
        dividerLeft:
          tableConfig.controlBlock?.customFeatures &&
          tableConfig.controlBlock?.customFeatures?.length > 0,
        // DomMetadata
        className: tableConfig?.view?.domMetadata?.className,
        ...tableConfig?.view?.domMetadata?.dataAttributes
      })
    ];

    // Затем собираем остальные фичи
    const optionalFeatures: FeatureItem[] = [
      // Перенеслись в sidebar
      // ...ifTrue(isActivated.summaryRows, {
      //   value: 'summary-rows',
      //   label: summaryRowsIsActive
      //     ? 'Скрыть итоговые строки'
      //     : 'Показать итоговые строки',
      //   onClick: () => setSummaryRowsIsActive((prev) => !prev),
      //   Icon: CustomIcons.SummaryRows,

      //   dropdown: {
      //     contentRight: <ControlBlockSwitch checked={summaryRowsIsActive} />,
      //     onItemSelect: () => setSummaryRowsIsActive((prev) => !prev),
      //   },
      // }),

      // Перенеслись в sidebar
      // ...ifTrue(isActivated.selectingRows, {
      //   value: 'selecting-rows',
      //   label: selectingRowsIsActive
      //     ? 'Отключить выбор строк'
      //     : 'Включить выбор строк',
      //   onClick: () => {
      //     setSelectingRowsIsActive((prev) => !prev);
      //   },
      //   Icon: IconListView,

      //   dropdown: {
      //     contentRight: <ControlBlockSwitch checked={selectingRowsIsActive} />,
      //     onItemSelect: () => {
      //       setSelectingRowsIsActive((prev) => !prev);
      //     },
      //   },
      // }),

      // Перенеслись в sidebar
      // ...ifTrue(isActivated.rowInstruments, {
      //   value: 'rows-settings',
      //   label: 'Инструменты в строках',
      //   onClick: () => {
      //     setShowRowInstruments((prev) => !prev);
      //   },
      //   Icon: IconPanelSidebarRFocusOutline,

      //   dropdown: {
      //     contentRight: <ControlBlockSwitch checked={showRowInstruments} />,
      //     onItemSelect: () => {
      //       setShowRowInstruments((prev) => !prev);
      //     },
      //   },
      // }),
      ...ifTrue(isActivated.keyText, {
        value: 'key-text-wrapper',
        CustomIconRender: () => (
          <KeyTextIconWithDropdown
            keyText={keyText}
            setKeyText={setKeyText}
            className={
              typeof tableConfig?.keyText !== 'boolean'
                ? tableConfig.keyText?.controlBlock.domMetadata?.className
                : ''
            }
            // data-атрибуты
            {...(typeof tableConfig?.keyText !== 'boolean'
              ? tableConfig.keyText?.controlBlock.domMetadata?.dataAttributes ||
                {}
              : {})}
          />
        ),
        details: {
          type: 'select',
          label: 'Ключ и текст',
          icon: <IconKeyOutline color="inherit" size="s" />,
          value: keyText,
          options: KEY_TEXT_OPTIONS,
          onChange: (value) => setKeyText(value as KeyText),
          className:
            typeof tableConfig?.keyText !== 'boolean'
              ? tableConfig.keyText?.sidebar.domMetadata?.className
              : '',
          // Data-атрибуты
          ...(typeof tableConfig?.keyText !== 'boolean'
            ? tableConfig.keyText?.sidebar.domMetadata?.dataAttributes || {}
            : {})
        }
      }),
      ...(tableConfig.controlBlock?.customFeatures ?? []).map((feature) => ({
        ...feature,
        // Помечаем кастомные фичи как optional, если явно не указано mandatory
        mandatory: feature.mandatory || false,
        canBeCompressedInToolsMenu: true // любые кастомные фичи могут быть сжаты в ...
      }))
    ];

    // Разделяем все фичи на mandatory и optional
    const allMandatoryFeatures = [
      ...mandatoryFeatures,
      ...optionalFeatures.filter((f) => f.mandatory)
    ];
    const allOptionalFeatures = optionalFeatures.filter((f) => !f.mandatory);

    const maxMandatoryFeatures = 5;

    // Формируем видимые фичи (не более maxMandatoryFeatures)
    let visibleIcons: FeatureItem[];
    if (allMandatoryFeatures.length >= maxMandatoryFeatures) {
      // Если mandatory фичей уже 5 или больше - показываем только их
      visibleIcons = allMandatoryFeatures.slice(0, maxMandatoryFeatures);
    } else {
      // Иначе добавляем optional фичи до достижения лимита в 5
      const optionalToShow = Math.min(
        allOptionalFeatures.length,
        maxMandatoryFeatures - allMandatoryFeatures.length
      );
      visibleIcons = [
        ...allMandatoryFeatures,
        ...allOptionalFeatures.slice(0, optionalToShow)
      ];
    }

    // Формируем featureItems для сайдбара
    const featureItems =
      enableAdaptiveCompress && compressionVisibility
        ? allOptionalFeatures.filter((feature, index) => {
            // Фича должна попасть в сайдбар если:
            // 1. Она не входит в visibleIcons
            // 2. ИЛИ система компрессии пометила ее как isMovedToRightSidebar

            const isVisible = visibleIcons.some(
              (v) => v.value === feature.value
            );
            const globalIndex = allMandatoryFeatures.length + index;
            const isMovedByCompression =
              compressionVisibility?.rightSide.customFeatures[globalIndex]
                ?.isMovedToRightSidebar ?? false;

            return !isVisible || isMovedByCompression;
          })
        : allOptionalFeatures.filter(
            (f) => !visibleIcons.some((v) => v.value === f.value)
          );

    return {
      all: [...allMandatoryFeatures, ...allOptionalFeatures],
      icons: visibleIcons,
      featureItems,
      mandatoryFeatures: allMandatoryFeatures
    };
  })();

  // Буля используется для определения видим ли ControlBlock (как часть условия)
  const isHaveSomeFeature =
    all.length > 0 ||
    featureLeftButtons.length > 0 ||
    featureRightButtons.length > 0 ||
    featureSearching.isActiveSearching ||
    isActivated.collapsing; // фича сворачивания таблицы
  // isActivated.selectingRows; // фича ушла в RightSidebar, она НЕ влияет на наличие на наличие ControlBlock
  // isActivated.rowInstruments; // фича ушла в RightSidebar, она НЕ влияет на наличие ControlBlock

  // Мы пытаемся найти хотя бы одну фичу после компрессии перемещенную в RightSidebar
  const isHaveSomeCustomFeatureInSidebar = (() => {
    // Если компрессия выключена, показываем сайдбар, если есть фичи
    if (!enableAdaptiveCompress) return featureItems.length > 0;

    // Если компрессия включена, но данные ещё не загружены, не показываем сайдбар
    if (!compressionVisibility) return false;

    // Иначе смотрим, есть ли фичи для сайдбара
    return compressionVisibility.rightSide.customFeatures
      .slice(mandatoryFeatures.length)
      .some((featureItem) => featureItem.isMovedToRightSidebar);
  })();

  // Функция поиска элемента среди дефолтных табов таблицы
  const findInDefaultTabs = useCallback(
    (id: string) =>
      tableConfig?.sidebarConfig?.defaultTabs?.find((item) => item.id === id),
    [tableConfig?.sidebarConfig?.defaultTabs]
  );

  const tableSettingsTabFromConfig = findInDefaultTabs('tableSettings');
  const tableFilteringTabFromConfig = findInDefaultTabs('filtering');
  const tableColumnsTabFromConfig = findInDefaultTabs('columns');

  // Определяем общие настройки для таба "Общие"
  const generalSettings: FeatureItem[] = [
    ...(isActivated.summaryRows
      ? [
          {
            value: 'summary-rows',
            label: 'Итоговые строки',
            onClick: () => {},
            Icon: () => null,
            details: {
              type: 'switch' as const,
              label: 'Итоговые строки',
              checked: summaryRowsIsActive,
              className: tableConfig.summaryRows?.domMetadata?.className,
              onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                setSummaryRowsIsActive(e.target.checked),
              ...tableConfig.summaryRows?.domMetadata?.dataAttributes
            }
          }
        ]
      : []),
    ...(isActivated.selectingRows
      ? [
          {
            value: 'selecting-rows',
            label: 'Выбор строк',
            onClick: () => {},
            Icon: () => null,
            details: {
              type: 'switch' as const,
              label: 'Выбор строк',
              checked: selectingRowsIsActive,
              onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                setSelectingRowsIsActive(e.target.checked),
              className: tableConfig.selecting?.sidebar?.domMetadata?.className,
              ...tableConfig.selecting?.sidebar?.domMetadata?.dataAttributes
            }
          }
        ]
      : []),
    ...(isActivated.rowInstruments
      ? [
          {
            value: 'row-instruments',
            label: 'Инструменты в строках',
            onClick: () => {},
            Icon: () => null,
            details: {
              type: 'switch' as const,
              label: 'Инструменты в строках',
              checked: showRowInstruments,
              onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                setShowRowInstruments(e.target.checked)
            }
          }
        ]
      : [])
  ];

  // Кастомный слот для блока общих настроек в правом сайдбаре таблицы
  const hasGeneralSettingsCustomSlot =
    tableSettingsTabFromConfig &&
    'customGeneralSettingsSlot' in tableSettingsTabFromConfig &&
    !!tableSettingsTabFromConfig?.customGeneralSettingsSlot;

  // Определяем активные разделы для динамического title
  const hasGeneral =
    generalSettings.length > 0 ||
    featureItems.length > 0 ||
    hasGeneralSettingsCustomSlot;
  const hasFiltering = isActivated.filtering;
  const hasColumnsControl = isActivated.columnsControl;

  const activeSections = [hasGeneral, hasFiltering, hasColumnsControl].filter(
    Boolean
  ).length;

  // Если активен только один раздел - используем его название в качестве title
  let titleForSettings = tableSettingsTabFromConfig?.title ?? 'Настройки';
  if (activeSections === 1) {
    if (hasGeneral) titleForSettings = 'Общие настройки';
    else if (hasFiltering) titleForSettings = 'Фильтры';
    else if (hasColumnsControl) titleForSettings = 'Настройки столбцов';
  }

  // Объединенный таб настроек с горизонтальными подтабами
  const defaultSidebarTabs: SidebarTab[] = [
    {
      id: 'tableSettings',
      label: tableSettingsTabFromConfig?.label ?? 'Настройки',
      icon: <IconSettingsOutline size="s" />,
      // Показываем таб если есть хотя бы одно из условий
      showInSidebar:
        isActivated.summaryRows ||
        isActivated.selectingRows ||
        isActivated.rowInstruments ||
        isHaveSomeCustomFeatureInSidebar ||
        isActivated.filtering ||
        isActivated.columnsControl ||
        hasGeneralSettingsCustomSlot,
      title: titleForSettings,
      titleRightSlot: tableSettingsTabFromConfig?.titleRightSlot,
      content: (
        <TableSettingsWithTabs
          generalSettings={generalSettings}
          customFeatures={featureItems}
          filteringContent={
            <SidebarFilters
              tableConfig={tableConfig}
              columnConfig={columnConfig}
            />
          }
          columnsContent={
            <ColumnsControl
              opened={openControlModal}
              onClose={() => setOpenControlModal(false)}
              setColumnsOrder={setColumnsOrder}
              columnsOrder={columnsOrder}
              pinnedCols={pinnedCols}
              setPinnedCols={setPinnedCols}
              hiddenCols={hiddenCols}
              setHiddenCols={setHiddenCols}
              getDefaultColumnsOrder={getDefaultColumnsOrder}
              columnConfig={columnConfig}
              columnsControlConfig={columnsControlConfig}
              colsWithKeyTextMap={colsWithKeyTextMap}
              keyText={keyText}
              tableConfigKeyTextBoolean={tableConfigKeyTextBoolean}
            />
          }
          showFiltering={isActivated.filtering}
          showColumns={isActivated.columnsControl}
          activeSettingsTabId={activeSettingsTabId}
          setActiveSettingsTabId={setActiveSettingsTabId}
          filteringDomMetadata={tableFilteringTabFromConfig?.domMetadata}
          columnsDomMetadata={tableColumnsTabFromConfig?.domMetadata}
          customGeneralSettingsSlot={
            hasGeneralSettingsCustomSlot
              ? tableSettingsTabFromConfig?.customGeneralSettingsSlot
              : null
          }
        />
      ),
      domMetadata: tableSettingsTabFromConfig?.domMetadata
    }
  ];

  const sidebarTabs: SidebarTab[] = (() => {
    // Всегда начинаем с дефолтных вкладок
    const resultTabs = [...defaultSidebarTabs];

    // Добавляем кастомные если есть
    if (tableConfig.sidebarConfig?.customTabs) {
      const { customTabs, customTabsOrder } = tableConfig.sidebarConfig;

      // Применяем порядок если указан
      if (customTabsOrder) {
        const orderedTabs = customTabsOrder
          .map((id) => customTabs.find((tab) => tab.id === id))
          .filter(Boolean) as SidebarTab[];

        const remainingTabs = customTabs.filter(
          (tab) => !customTabsOrder.includes(tab.id)
        );
        resultTabs.push(...orderedTabs, ...remainingTabs);
      } else {
        resultTabs.push(...customTabs);
      }
    }

    return resultTabs;
  })();

  const activeSidebarTabId = (() => {
    const firstAvailableTab = sidebarTabs.find((tab) => tab.showInSidebar);
    return firstAvailableTab ? firstAvailableTab.id : null;
  })();

  return {
    icons,
    featureItems,
    all,
    featureRightButtons,
    featureLeftButtons,
    isHaveSomeFeature,
    featureSearching,
    isHaveSomeFeatureInSidebar:
      (tableConfig.sidebarConfig?.enabled ?? true) &&
      sidebarTabs.some((tab) => tab.showInSidebar),
    activeSidebarTabId,
    sidebarTabs,
    isActivated
  };
};
