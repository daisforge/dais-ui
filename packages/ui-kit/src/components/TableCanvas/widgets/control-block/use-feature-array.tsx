/* eslint-disable @typescript-eslint/no-use-before-define */

import {
  ColumnConfig,
  // ControlBlockSwitch,
  ObjectForExtending,
  SIZE,
  TableConfig,
} from '@ui-kit/components/TableCanvas';
import {
  IconClose,
  IconDone,
  IconFullscreenOff,
  IconFullscreenOn,
  IconKeyOutline,
  IconMessageDraftFill,
  IconSettingsOutline,
  IconViewScreen4Outline,
  IconViewSplit4Outline,
} from '@ui-kit/icons';
import { mergeClasses } from '@ui-kit/utils';
import React, { useCallback, useMemo, useState } from 'react';

import { ColumnsControl } from '../../feature-column-control';
import { ColumnsControlConfig } from '../../feature-column-control/types';
import { isHasFilters } from '../../feature-filtering';
import { SidebarFilters } from '../../feature-filtering/sidebar-filter-block';
import { FullScreenObj } from '../../feature-full-screen/types';
import {
  getKeyTextOptionsWithIcon,
  KEY_TEXT_OPTIONS,
  showKeyText,
} from '../../feature-key-text';
import type { KeyText, KeyTextMap } from '../../feature-key-text/types';
import { notifications } from '../../feature-notifications';
import {
  getCurrentSizeIcon,
  getCurrentSizeLabel,
  isActivatedRowSize,
  setRowSizeCb,
} from '../../feature-row-size';
import { useGetRowsGroupingBtnProps } from '../../feature-rows-grouping';
import { TableSettingsWithTabs } from '../../feature-table-settings';
import { ActiveViewModsType } from '../../types';
import { DOM_METADATA_ACTIONS } from '../../types/dom-metadata-actions';
import { EDIT_BUTTON_CANCEL_CLASS, EDIT_BUTTON_CLASS } from './constants';
import { getControlBlockSizeMap } from './control-block.constants';
import { ControlBlockButtonProps } from './control-block-button.types';
import {
  getPinIconState,
  pinColumns,
  resetPinning,
  unpinColumns,
} from './pinning-menu/pinning-actions';
import { buildPinningFeature } from './pinning-menu/PinningFeature';
import { FeatureItem, SidebarTab } from './types';
import { getDropdownIconSize } from './use-buttons-to-dropdown';

const ifTrue = <T extends FeatureItem>(reason: boolean, value: T) =>
  reason ? [value] : [];
const ifTrueBtn = <T extends ControlBlockButtonProps>(
  reason: boolean,
  value: T,
) => (reason ? [value] : []);

export const useFeatureArray = <
  FilterStateType extends ObjectForExtending,
  RowType extends ObjectForExtending,
  RowIdType extends string | number,
  SummaryRowType = unknown,
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
  enableAdaptiveCompress,
  selectedColumnKeys,
  setPendingSelectKeys,
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
  enableAdaptiveCompress: boolean;
  /** Ключи выделенных колонок (объединённые) — для экшена «Закрепить столбцы». */
  selectedColumnKeys: string[];
  /** Follow: перевыделить эти ключи после пина/анпина (сброс — эффектом). */
  setPendingSelectKeys: React.Dispatch<React.SetStateAction<string[] | null>>;
}) => {
  const activeViewIsRows = activeView === 'rows';
  // Состояние активного settings таба (внутренние табы в сайдбаре: Общие. Фильтры. Столбцы)
  // По умолчанию Общие
  const [activeSettingsTabId, setActiveSettingsTabId] = useState<string | null>(
    'general',
  );

  const isActivated = {
    viewChanging: tableConfig?.view?.type === 'both-types',
    rowSize: activeViewIsRows && isActivatedRowSize(tableConfig.rowSize),
    columnsControl: activeViewIsRows && columnsControlEnable,
    // Нативная фича закрепления столбцов в контрл-блоке. Показывается, когда
    // активно закрепление колонок (columnsControl.pinning), независимо от того,
    // передал ли продукт конфиг pinningMenu (тогда — 2 нативных пункта).
    pinningMenu:
      activeViewIsRows &&
      columnsControlEnable &&
      (columnsControlConfig?.pinning ?? true) &&
      (tableConfig.controlBlock?.pinningMenu?.enable ?? true),
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
    rowInstruments: activeViewIsRows && false,
    // FIXME
    // !!tableConfig.rowInstruments &&
    // (tableConfig.rowInstruments.showInControl ?? true),
    keyText: activeViewIsRows && showKeyText(tableConfig.keyText),

    rowsGrouping:
      rowsGroupingIsActiveInConfig &&
      (tableConfig.rowsGrouping?.showInControl ?? true),
    editingMode:
      !!tableConfig.editing &&
      tableConfig.editing?.showButtons !== false &&
      typeof tableConfig.editing.enabled !== 'boolean',

    searching: activeViewIsRows && !!tableConfig?.searching?.enabled,
    filtering: isHasFilters({ tableConfig, columnConfig }),
    collapsing: tableConfig.collapsing?.enableCollapse,
  };

  // Нативные экшены закрепления столбцов для контрл-блока (SplitIconButton +
  // меню). Логику учёта disablePinning/пар key/text держим в чистых хелперах.
  // Объявлены до сборки массива icons, где строится сама фича закрепления.
  const pinningActionCtx = useMemo(
    () => ({
      disablePinningSet: new Set(columnsControlConfig?.disablePinning ?? []),
      colsWithKeyTextMap,
      tableConfigKeyTextBoolean,
    }),
    [columnsControlConfig, colsWithKeyTextMap, tableConfigKeyTextBoolean],
  );

  // Follow: сохранить текущее выделение по ключам — перевыделим после реордера.
  const followSelection = useCallback(() => {
    if (selectedColumnKeys.length > 0) {
      setPendingSelectKeys(selectedColumnKeys);
    }
  }, [selectedColumnKeys, setPendingSelectKeys]);

  const onPinSelectedColumns = useCallback(() => {
    // Нет выделенных колонок — закреплять нечего: шлём нотификацию, чтобы
    // продукт мог показать подсказку («Выберите столбцы для закрепления»).
    if (selectedColumnKeys.length === 0) {
      tableConfig.notifications?.onNotification(notifications.pinNoSelection());
      return;
    }
    setPinnedCols((prev) =>
      pinColumns(prev, selectedColumnKeys, pinningActionCtx),
    );
    followSelection();
  }, [
    setPinnedCols,
    selectedColumnKeys,
    pinningActionCtx,
    tableConfig.notifications,
    followSelection,
  ]);

  const onUnpinSelectedColumns = useCallback(() => {
    setPinnedCols((prev) =>
      unpinColumns(prev, selectedColumnKeys, pinningActionCtx),
    );
    followSelection();
  }, [setPinnedCols, selectedColumnKeys, pinningActionCtx, followSelection]);

  const onResetPinning = useCallback(() => {
    setPinnedCols((prev) => resetPinning(prev, pinningActionCtx));
    followSelection();
  }, [setPinnedCols, pinningActionCtx, followSelection]);

  const pinIconState = getPinIconState({
    selectedKeys: selectedColumnKeys,
    pinnedCols,
    hiddenCols,
    ctx: pinningActionCtx,
  });

  const onPinIconClick = useCallback(() => {
    if (pinIconState.action === 'unpin') {
      onUnpinSelectedColumns();
    } else {
      onPinSelectedColumns();
    }
  }, [pinIconState.action, onUnpinSelectedColumns, onPinSelectedColumns]);

  const { rowsGroupingButtonProps } = useGetRowsGroupingBtnProps({
    tableConfig,
    columnConfig,
    groupedCols,
    setGroupedCols,
    isActivatedRowsGrouping: isActivated.rowsGrouping,
  });

  const enableEditMode = () => setEditModeEnabled?.(true);
  const disableEditMode = () => setEditModeEnabled?.(false);
  const editingButtons = tableConfig.editing?.buttons;
  const featureLeftButtons: ControlBlockButtonProps[] = [
    ...ifTrueBtn(isActivated.editingMode && editModeEnabled, {
      text: 'Отменить',
      tooltipText: 'Отменить',
      view: 'secondary',
      style: { marginRight: '4px' },
      skipRightDivider: true,
      contentLeft: <IconClose size="xs" color="inherit" />,
      ...editingButtons?.cancel,
      onClick: () => {
        if (tableConfig.editing?.onCancel) {
          return tableConfig.editing?.onCancel?.(disableEditMode);
        }
        return disableEditMode();
      },
      className: mergeClasses(
        EDIT_BUTTON_CLASS,
        EDIT_BUTTON_CANCEL_CLASS,
        tableConfig?.editing?.domMetadata?.cancelButton?.className,
        editingButtons?.cancel?.['className'],
      ),
      ...tableConfig.editing?.domMetadata?.cancelButton?.dataAttributes,
    }),
    ...ifTrueBtn(isActivated.editingMode && editModeEnabled, {
      text: 'Сохранить',
      tooltipText: 'Сохранить',
      view: 'secondary',
      contentLeft: <IconDone size="xs" color="inherit" />,
      ...editingButtons?.save,
      onClick: () => {
        if (tableConfig.editing?.onSave) {
          return tableConfig.editing?.onSave?.(disableEditMode);
        }
        return disableEditMode();
      },
      className: mergeClasses(
        EDIT_BUTTON_CLASS,
        tableConfig?.editing?.domMetadata?.saveButton?.className,
        editingButtons?.save?.['className'],
      ),
      ...tableConfig.editing?.domMetadata?.saveButton?.dataAttributes,
    }),
    ...ifTrueBtn(isActivated.editingMode && !editModeEnabled, {
      text: 'Редактировать',
      tooltipText: 'Редактировать',
      view: 'secondary',
      contentLeft: <IconMessageDraftFill size="xs" color="inherit" />,
      ...editingButtons?.edit,
      onClick: () => {
        if (tableConfig.editing?.onEnableEditing) {
          return tableConfig.editing.onEnableEditing(enableEditMode);
        }
        return enableEditMode();
      },
      className: mergeClasses(
        EDIT_BUTTON_CLASS,
        tableConfig?.editing?.domMetadata?.enableButton?.className,
        editingButtons?.edit?.['className'],
      ),
      ...tableConfig.editing?.domMetadata?.enableButton?.dataAttributes,
    }),
  ];

  const featureRightButtons: ControlBlockButtonProps[] = [
    ...ifTrueBtn(isActivated.keyText, {
      text: 'Ключ-текст',
      // Ключик виден ВСЕГДА (и с лейблом, и в icon-only).
      // Шеврон раскрытия справа рисует сама кнопка (авто-шеврон по dropdown),
      // поэтому contentRight здесь не задаём.
      contentLeft: <IconKeyOutline color="inherit" />,
      // В overflow дропдауне иконку берём на ступень меньше на маленьком
      // rowSize (как остальные пункты дропдауна)
      dropdownIconRender: (ctx) => (
        <IconKeyOutline
          color="inherit"
          size={getDropdownIconSize(ctx.rowSize)}
        />
      ),
      dropdown: {
        onItemSelect: (i) => setKeyText(i.value as KeyText),
        items: getKeyTextOptionsWithIcon({ keyText, rowSize }),
      },
      ...(typeof tableConfig?.keyText !== 'boolean'
        ? {
            className:
              tableConfig.keyText?.controlBlock?.domMetadata?.className,
            ...(tableConfig.keyText?.controlBlock?.domMetadata
              ?.dataAttributes || {}),
          }
        : {}),
    }),
    ...ifTrueBtn(isActivated.rowsGrouping, rowsGroupingButtonProps),
  ];

  const featureSearching = {
    isActiveSearching: isActivated.searching,
    showSearchBlock,
    setShowSearchBlock,
    searchQueryLocalValue,
    placeholderSearchBlock,
  };

  const { all, icons, featureItems } = (() => {
    //  порядок в ui справа налево (flex-direction: row-reverse;). Например, rowSize - первый справа

    // Сначала собираем обязательные фичи (не попадают в сайдбар)
    const mandatoryFeatures: FeatureItem[] = [
      ...ifTrue(isActivated.fullScreen, {
        value: 'full-screen',
        label: fullScreened
          ? 'Выйти из полноэкранного режима'
          : 'На весь экран',
        // fullScreen + rowSize — связка (fullScreen крайний справа, rowSize
        // левее). Дивайдер один, слева от связки: если rowSize активен —
        // дивайдер у него, иначе у fullScreen.
        dividerLeft: !isActivated.rowSize,
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
          : {}),
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
            size: newSize,
          });
        },

        Icon: getCurrentSizeIcon(rowSize),
        mandatory: true, // Добавляем флаг обязательности
        // rowSize, как и fullScreen, НИКОГДА не уходит в overflow-дропдаун —
        // связка всегда остаётся в правой части
        canBeCompressedInToolsMenu: false,
        // Дивайдер связки fullScreen+rowSize — слева от rowSize
        dividerLeft: true,
        // DomMetadata
        className: tableConfig.rowSize?.domMetadata?.className,
        ...tableConfig?.rowSize?.domMetadata?.dataAttributes,
      }),
      // @deprecated viewMode — переключение карточки/таблица. Сохранено для обратной совместимости.
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
        ...tableConfig?.view?.domMetadata?.dataAttributes,
      }),
      // Нативная фича закрепления столбцов. mandatory (не уходит в сайдбар) +
      // canBeCompressedInToolsMenu (может уйти в overflow «…»), как view-mode.
      ...ifTrue(
        isActivated.pinningMenu,
        buildPinningFeature({
          rowSize,
          pinningMenuConfig: tableConfig.controlBlock?.pinningMenu,
          onPinSelectedColumns,
          onResetPinning,
          // Размер связки = featureIcon текущего размера контрл-блока, чтобы
          // пин+шеврон совпадали по сетке с остальными иконками зоны.
          embedSize: getControlBlockSizeMap(tableConfig.controlBlock?.size)
            .featureIcon,
          iconColored: pinIconState.colored,
          iconTooltip: pinIconState.tooltip,
          onIconClick: onPinIconClick,
        }),
      ),
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
      ...(tableConfig.controlBlock?.customFeatures ?? []).map((feature) => ({
        ...feature,
        mandatory: feature.mandatory || false,
        canBeCompressedInToolsMenu: feature.canBeCompressedInToolsMenu ?? true,
      })),
    ];

    // Sidebar-only фичи: НЕ рендерятся в controlBlock (не попадают в icons
    // и в модель компрессии), но их details рендерятся в правом сайдбаре.
    const sidebarOnlyFeatures: FeatureItem[] = [
      // keyText перенесён в featureRightButtons как обычная кнопка с dropdown,
      // здесь — только select для сайдбара
      ...ifTrue(isActivated.keyText, {
        value: 'key-text-sidebar-only',
        CustomIconRender: () => null,
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
          ...(typeof tableConfig?.keyText !== 'boolean'
            ? tableConfig.keyText?.sidebar.domMetadata?.dataAttributes || {}
            : {}),
        },
      }),
    ];

    // Разделяем все фичи на mandatory и optional
    const allMandatoryFeatures = [
      ...mandatoryFeatures,
      ...optionalFeatures.filter((f) => f.mandatory),
    ];
    const allOptionalFeatures = optionalFeatures.filter((f) => !f.mandatory);

    // В controlBlock — только реально видимые фичи (без sidebar-only)
    const visibleIcons = [...allMandatoryFeatures, ...allOptionalFeatures];

    // В сайдбар — sidebar-only + optional (порядок как раньше:
    // «Ключ и текст» шёл до кастомных фич)
    const featureItems = [...sidebarOnlyFeatures, ...allOptionalFeatures];

    return {
      all: [
        ...allMandatoryFeatures,
        ...allOptionalFeatures,
        ...sidebarOnlyFeatures,
      ],
      icons: visibleIcons,
      featureItems,
    };
  })();

  // Буля используется для определения видим ли ControlBlock (как часть условия)
  const isHaveSomeFeature =
    all.length > 0 ||
    featureLeftButtons.length > 0 ||
    featureRightButtons.length > 0 ||
    featureSearching.isActiveSearching ||
    isActivated.collapsing; // фича сворачивания таблицы
  // isActivated.selectingRows; // фича ушла в RightSidebar, она НЕ влияет на наличие ControlBlock
  // isActivated.rowInstruments; // фича ушла в RightSidebar, она НЕ влияет на наличие ControlBlock

  // Sidebar показывается когда есть generalSettings или sidebar-фичи,
  // но НЕ из-за компрессии (компрессия отправляет в overflow dropdown, не в sidebar)
  const isHaveSomeCustomFeatureInSidebar = (() => {
    if (!enableAdaptiveCompress) return featureItems.length > 0;
    // С компрессией v2 sidebar не зависит от состояния компрессии —
    // фичи с details для sidebar всегда показываются там
    return featureItems.some(
      (item) => 'details' in item && item.details != null,
    );
  })();

  // Функция поиска элемента среди дефолтных табов таблицы
  const findInDefaultTabs = useCallback(
    (id: string) =>
      tableConfig?.sidebarConfig?.defaultTabs?.find((item) => item.id === id),
    [tableConfig?.sidebarConfig?.defaultTabs],
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
              ...tableConfig.summaryRows?.domMetadata?.dataAttributes,
            },
          },
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
              ...tableConfig.selecting?.sidebar?.domMetadata?.dataAttributes,
            },
          },
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
                setShowRowInstruments(e.target.checked),
            },
          },
        ]
      : []),
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
    Boolean,
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
      domMetadata: tableSettingsTabFromConfig?.domMetadata,
    },
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
          (tab) => !customTabsOrder.includes(tab.id),
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
    pinningActions: { onPinSelectedColumns, onResetPinning },
    isHaveSomeFeatureInSidebar:
      (tableConfig.sidebarConfig?.enabled ?? true) &&
      sidebarTabs.some((tab) => tab.showInSidebar),
    activeSidebarTabId,
    sidebarTabs,
    isActivated,
  };
};
