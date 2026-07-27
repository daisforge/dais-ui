import { Group, Item, ItemOrGroup } from '@ui-kit/components/ListOfFilters';
import type {
  MassActionsButtonProps,
  MassActionsSize
} from '@ui-kit/components/MassActions/types';
import { RowInstrumentsType, SIZE } from '@ui-kit/components/Table';
import { ChangeEvent, CSSProperties, ReactNode } from 'react';
import { CalculatedColumn, SortColumn } from 'react-data-grid';
import { CSSObject } from 'styled-components';

import { TableDropdownConfigProps } from '../components/TableDropdown/types';
import { ColumnsControlConfig } from '../feature-column-control/types';
import {
  CellContextMenuDropDownProps,
  HeaderContextMenuDropDownProps,
  HeaderContextMenuProps
} from '../feature-context-menu';
import { FullScreen } from '../feature-full-screen/types';
import { KeyTextConfig } from '../feature-key-text/types';
import { PaginationProps } from '../feature-pagination/types';
import { RowDetailConfig } from '../feature-row-detail/types';
import { GroupRow, RowsGrouping } from '../feature-rows-grouping/types';
import { SearchingProps } from '../feature-searching/types';
import { SELECTING_KEYS } from '../feature-select-row/constants';
import {
  ChildrenInfo,
  RowCheckboxDisabled,
  RowGetStatesProps,
  RowGetStatesReturnType,
  RowShowCheckbox
} from '../feature-select-row/types';
import { SubRows } from '../feature-tree/types';
import { ControlBlockButtonProps } from '../widgets/control-block/control-block-button.types';
import { FeatureItem, SidebarTab } from '../widgets/control-block/types';
import { DomMetadata } from './additional.type';
import { DataGridPropsDefault } from './data-grid.type';
import { Maybe, ObjectForExtending, Prettify } from './utils.type';

export type HighlightActiveType = 'cell' | 'row' | 'disabled';

/** @deprecated Свойство view не используется и будет удалено в следующей мажорной версии. */
export type ViewMods = {
  rows: {
    type: 'rows';
    /**
     * Метки для автоматизированного тестирования и аналитики
     * Добавляет data-атрибуты и CSS-классы к элементам controlBlock
     */
    domMetadata?: DomMetadata;
  };
  cards: {
    type: 'cards';
    typeCardsRender: ReactNode;
    /**
     * Метки для автоматизированного тестирования и аналитики
     * Добавляет data-атрибуты и CSS-классы к элементам controlBlock
     */
    domMetadata?: DomMetadata;
  };
  bothTypes: {
    type: 'both-types';
    typeCardsRender: ReactNode;
    default?: 'cards' | 'rows';
    /**
     * Метки для автоматизированного тестирования и аналитики
     * Добавляет data-атрибуты и CSS-классы к элементам controlBlock
     */
    domMetadata?: DomMetadata;
  };
};
export interface RowsChangeData<R, SR = unknown> {
  indexes: number[];
  column: CalculatedColumn<R, SR>;
  rows: { before: R; after: R }[];
}

export type ActiveViewModsType = Exclude<keyof ViewMods, 'bothTypes'>;

/** @deprecated Свойство view не используется и будет удалено в следующей мажорной версии. */
export type View = ViewMods['rows' | 'bothTypes' | 'cards'];
export type { ControlBlockButtonProps };
export type RowSize = {
  /**
   * Показывать кнопку в блоке управления
   */
  showInControl: boolean;
  /**
   * Значение по умолчанию
   */
  default?: SIZE;
  /**
   * Список доступных значений размера
   */
  available?: SIZE[];
  /**
   * Обработчик изменения rowSize
   * @param size
   * @returns
   */
  onRowSizeChange?: (size: SIZE) => void;
  /**
   * Метки для автоматизированного тестирования и аналитики
   * Добавляет data-атрибуты и CSS-классы к элементам controlBlock
   */
  domMetadata?: DomMetadata;
};
export type RowHeightFunc<RowType> = (
  row: RowType,
  currentRowSize: { rowSizeName: SIZE; rowSizeValue: number }
) => number;

type SummaryCheckedFunc<
  RowType,
  ReturnType,
  AdditionalPropsObj extends ObjectForExtending | void = void,
  RowIdType extends string | number = string | number
> = (
  props: {
    rows: RowType[];
    flattenedRows: (RowType & {
      level?: number;
      parent?: RowType | null;
    })[];
    selectedRowsIds: ReadonlySet<string | number>;
    rowKeyGetter: (row: RowType) => string | number;
    rowCheckboxDisabled: SelectingRowConfig<
      RowType,
      RowIdType
    >['rowCheckboxDisabled'];
    rowShowCheckbox: SelectingRowConfig<RowType, RowIdType>['rowShowCheckbox'];
    allRowsInLevels: (RowType & {
      level?: number;
      parent?: RowType | null;
    })[];
    getAllRowsInfo: () => ChildrenInfo<RowType, RowIdType>;
  } & (AdditionalPropsObj extends ObjectForExtending
    ? AdditionalPropsObj
    : // eslint-disable-next-line @typescript-eslint/ban-types
      {})
) => ReturnType;

// Типы для конфигурации коллапса таблицы
export type TableCollapseConfig = {
  /**
   * Обязательный флаг для активации
   * @default false
   */
  enableCollapse?: boolean;
  /**
   * Начальное состояние (опционально)
   *  @default false
   */
  defaultCollapsed?: boolean;
  /**
   * Текст для кнопки при раскрытом состоянии (опционально)
   * @default "Свернуть"
   */
  collapseText?: string;
  /**
   * Текст для кнопки при закрытом состоянии (опционально)
   * @default "Развернуть"
   */
  expandText?: string;
  /**
   * callback при изменении состояния
   */
  onToggleCollapse?: (isCollapsed: boolean) => void;
  /** Внешнее состояние [isCollapsed, setIsCollapsed] */
  collapsedState?: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  /**
   * Метки для автоматизированного тестирования и аналитики
   * Добавляет data-атрибуты и CSS-классы к элементам controlBlock
   */
  domMetadata?: DomMetadata;
  /**
   * Размещение кнопки коллапсинга
   * - 'inside' - внутри контрол-блока (по умолчанию, участвует в компрессии)
   * - 'above' - в отдельном блоке сверху контрол-блока (не участвует в компрессии)
   * @default 'inside'
   */
  collapseButtonPlacement?: 'inside' | 'above';
  /**
   * Кастомный рендер правого слота кнопки коллапсинга, который используется при collapseButtonPlacement='above'
   */
  collapseButtonAboveRightSlot?: React.ReactNode;
};

export type FlattenedRowsArrAndMap<RowType, RowIdType> = {
  flattenedRows: (RowType & {
    [SELECTING_KEYS.level]?: number;
    [SELECTING_KEYS.parent]?: RowType | null;
  })[];

  flattenedRowsMap: Map<
    RowIdType,
    RowType & {
      [SELECTING_KEYS.level]?: number;
      [SELECTING_KEYS.parent]?: RowType | null;
    }
  >;
};

export type SelectingRowConfig<
  RowType,
  RowIdType extends string | number = string | number
> = {
  rowKeyGetter: (row: RowType) => RowIdType;
  /**
   * showDefault - состояние, отвечающее за то, видно ли по дефолту чекбоксы.
   */
  showDefault?: boolean;
  /**
   * showState - состояние, отвечающее за то, видны ли чекбоксы.
   */
  showState?: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  /**
   * showInControl - состояние, отвечающее за то, добавлять ли выбор строк как фичу, которую можно скрывать и раскрывать в правой части контролблока.
   */
  showInControl?: boolean;
  /**
   * selectingRules - пропс, отвечающий за кастомизацию логики выбора строк.
   */
  selectingRules?: {
    /**
     * изменять ли скрытые строки при клике на чекбокс-ы родительских строк
     * @default true
     */
    // changeableOfRowWithoutCheckbox?: boolean;
    /**
     * изменять ли задизейбленные строки при клике на чекбокс-ы родительских строк
     * @default true
     */
    // changeableDisabledRow?: boolean;
    /**
     * levels - логика активации чекбоксов у строк с определенным уровнем вложенности.
     */
    levels?: number | 'all' | number[] | ((lvl: number) => boolean);
  };
  disableSummaryCheckboxInHeader?: boolean;
  hideSummaryCheckboxInHeader?: boolean;
  /**
   * hideSummaryCheckbox - в островке  массовых действий
   */
  hideSummaryCheckbox?: boolean;
  /**
   * summaryChecked - пропс, отвечающий за логику состояния checked у итогового чекбокса в левой части контролблока.
   */
  summaryChecked?: {
    checked: boolean | SummaryCheckedFunc<RowType, boolean>;
    indeterminate:
      | boolean
      | SummaryCheckedFunc<RowType, boolean, { checkedAll: boolean }>;
    getCountOfChecked: SummaryCheckedFunc<RowType, number>;
    onChange: SummaryCheckedFunc<
      RowType,
      void,
      {
        checkedAll: boolean;
        clearButtonClicked?: boolean;
        setSelectedRowsIds: React.Dispatch<
          React.SetStateAction<ReadonlySet<string | number>>
        >;
      }
    >;
  };

  /**
   * summaryCheckedUncontrolled - пропс отвечающий за колбеки в неконтролируемом режиме
   */
  summaryCheckedUncontrolled?: {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  };

  /**
   * rowShowCheckbox - пропс, отвечающий за то, будет ли у конкретной строки отрендерен чекбокс.
   */
  rowShowCheckbox?: RowShowCheckbox<RowType>;
  /**
   * rowCheckboxDisabled - пропс, отвечающий за то, будет ли у конкретной строки чекбокс задизейблен.
   */
  rowCheckboxDisabled?: RowCheckboxDisabled<RowType>;

  /**
   * Функция для переопределения checked, indeterminate для каждой строки.
   * Что будет возвращено функцией в объекте, то будет переопределено.
   */
  rowGetStates?: (
    p: RowGetStatesProps<RowType, RowIdType>
  ) => RowGetStatesReturnType<RowType, RowIdType> | null;

  groupedRow?: {
    /**
     * Функция для переопределения checked, indeterminate, showCheckbox, checkboxDisabled для группированных строк.
     * Что будет возвращено функцией в объекте, то будет переопределено.
     */
    getStates: (p: {
      checkedCalculated: boolean;
      indeterminateCalculated: boolean;
      row: GroupRow<RowType>;
      selectedRows: ReadonlySet<string | number>;
      selectedChildCount: number;
      childCount: number;
    }) => {
      checked?: boolean | null;
      indeterminate?: boolean | null;
      showCheckbox?: boolean | null;
      checkboxDisabled?: boolean | null;
    } | null;
    onChange?: (p: {
      row: GroupRow<RowType>;

      setSelectedRows: React.Dispatch<
        React.SetStateAction<ReadonlySet<string | number>>
      >;
      checked: boolean;
      indeterminate: boolean;
      checkboxDisabled: boolean;
      showCheckbox: boolean;
      defaultSetter: () => void;
    }) => void;
  };
};

export type FilteringConfig<T> = {
  state: [T, React.Dispatch<React.SetStateAction<T>>];
  /**
   * @deprecated Использовать filtersInfo
   *
   * clearedValue - состояние фильтров после очистки. Используется для сравнения:
   * Например, был ли фильтр конкретной колонки изменен рассчитывается посредством сравнения текущего значения фильтра и значения фильтра в clearedValue.
   * Если они равны, то фильтр считается не измененным.
   */
  clearedValue?: T;
  /**
   * Информация о фильтрах для каждой колонки.
   * Используется для:
   * 1. Хранения меток (label) фильтров для отображения в UI
   * 2. Хранения значений по умолчанию (clearedValue) для каждого фильтра
   * 3. Определения, был ли фильтр изменен (сравнение текущего значения с clearedValue)
   */
  filtersInfo?: Record<
    keyof T,
    {
      label: string;
      clearedValue: T[keyof T];
    }
  >;
  /**
   * manualFiltering - пропс, активирующий ручную-кастомную (или на стороне бэка) фильтрацию.
   * @remarks
   * Для автоматической фильтрации (когда не используется manualFiltering в tableConfig):
   * - Для всех типов фильтров обязательно должен быть указан `valueInRow`
   * - Для component: 'select' дополнительно должен быть указан `filteringType`
   * - Для component: 'input' с кастомным фильтром (когда filter - функция)
   *   функция фильтрации должна быть передана явно
   *
   * Если используется manualFiltering, эти параметры не обязательны,
   * так как вся логика фильтрации реализуется извне.
   */
  manualFiltering?: boolean;
  /**
   * Конфигурация для отображения фильтров в правом сайдбаре.
   *
   * Позволяет:
   * 1. Добавлять глобальные фильтры (не привязанные к конкретной колонке)
   * 2. Управлять порядком отображения фильтров
   * 3. Переопределять рендер и заголовки колоночных фильтров
   *
   * Логика работы:
   * - По умолчанию в сайдбаре отображаются все колоночные фильтры (из columnConfig)
   * - Ключом фильтра считается `key` колонки, если его нет, то пытаемся взять `keyInFilterState` (если указан), иначе это не будет работать
   * - Заголовком фильтра по умолчанию является `name` колонки или ключ фильтра (name || key)
   * - Глобальные фильтры добавляются через `items` с уникальными ключами
   *
   * Особенности:
   * 1. Порядок отображения:
   *    - Сначала фильтры из `order` (в указанной последовательности)
   *    - Затем остальные колоночные фильтры (в порядке columnConfig)
   *    - В конце - глобальные фильтры (в алфавитном порядке ключей)
   *
   * 2. Переопределение колоночных фильтров:
   *    - Чтобы изменить заголовок: укажите ключ колонки в `items` с новым `label`
   *    - Чтобы заменить рендер: укажите ключ колонки с `customRenderFn`
   *    - Оригинальный фильтр из колонки будет проигнорирован
   *
   * 3. Глобальные фильтры:
   *    - Ключ не должен совпадать с ключами колонок
   *    - Обязательно указать `label` и `customRenderFn`
   *    - Отображаются после всех колоночных фильтров, если не переопределены в order
   *
   * @example
   * // Добавление глобального фильтра и изменение порядка
   * sidebarConfig: {
   *   order: ['status', 'tasks', 'type'], // Сначала статус, затем глобальный поиск
   *   items: {
   *     tasks: { // Уникальный ключ
   *       label: 'Поиск по всем полям',
   *       customRenderFn: () => <TaskComponent />
   *     },
   *     status: { // Переопределение колоночного фильтра
   *       label: 'Статус заявки', // Новый заголовок
   *       customRenderFn: () => <CustomStatusFilter /> // Кастомный рендер
   *     }
   *     type: { // Переопределение только Label колоночного фильтра
   *       label: 'Тип', // Новый заголовок
   *     }
   *   }
   * }
   */
  sidebarConfig?: {
    /**
     * Определяет порядок отображения фильтров.
     * - Указываются ключи фильтров (колоночных или глобальных)
     * - Не указанные в order фильтры отображаются после
     * - Если order пуст, сохраняется порядок: глобальные фильтры + columnConfig фильтры в конце
     */
    order?: string[];
    /**
     * Конфигурация фильтров для сайдбара.
     * Ключом может быть:
     * - Ключ колонки (для переопределения колоночного фильтра)
     * - Уникальный ключ (для добавления глобального фильтра)
     */
    items: Partial<
      Record<
        keyof T,
        {
          /** Заголовок фильтра (обязателен для глобальных фильтров), можно использовать для переопределения для локальных фильтров */
          label: string;
          /**
           * Функция рендера компонента фильтра.
           * Для колоночных фильтров переопределяет оригинальный рендер.
           * Для глобальных фильтров обязательна.
           */
          customRenderFn?: (
            filters: T,
            setFilters: React.Dispatch<React.SetStateAction<T>>
          ) => React.ReactNode;
        }
      >
    >;
  };
  /**
   * Callback для кастомизации стилей чипсов (фильтров) в списке
   *
   * @param {ItemOrGroup} itemOrGroup - Текущий элемент или группа фильтров
   * @param {Item | undefined} item - Конкретный элемент фильтра (если есть)
   * @returns {CSSObject} Объект стилей, который будет применен к чипсу
   *
   * @description
   * Позволяет динамически задавать стили для каждого чипса в зависимости от его типа и содержимого.
   * Вызывается для каждого отображаемого чипса (как для отдельных элементов, так и для элементов внутри групп).
   *
   * @example
   * // Пример 1: Стилизация чипсов по типу
   * chipStyle: (itemOrGroup, item) => {
   *   if (isGroup(itemOrGroup)) {
   *     return { backgroundColor: '#f0f0f0' };
   *   }
   *   return { backgroundColor: '#e0e0e0' };
   * }
   *
   * @example
   * // Пример 2: Стилизация по значению фильтра
   * chipStyle: (itemOrGroup, item) => {
   *   if (item?.label === 'Высокий приоритет') {
   *     return {
   *       backgroundColor: '#ffebee',
   *       color: '#d32f2f'
   *     };
   *   }
   *   return {};
   * }
   *
   * @example
   * // Пример 3: Разные стили для элементов в группе и одиночных
   * chipStyle: (itemOrGroup, item) => {
   *   if (item) {
   *     // Стиль для элемента внутри группы
   *     return { maxWidth: 180 };
   *   }
   *   // Стиль для одиночного чипа
   *   return { maxWidth: 150 };
   * }
   */
  chipStyle?: (itemOrGroup: ItemOrGroup, item: Item | undefined) => CSSObject;
  /**
   * Пользовательский форматтер заголовка группы чипсов.
   *
   * Используется в блоке активных фильтров для подмены текста заголовка
   * группы (например, “Статус”, “Тип”, “Автор”). Полезно, когда нужно
   * динамически менять подпись (добавить счётчик, i18n и т.п.).
   *
   * @param {ItemOrGroup} itemOrGroup Объект группы (тип Group). Вызов происходит только для групп,
   *                                   поэтому безопасно кастовать к Group.
   * @returns {string} Текст заголовка группы чипсов.
   *
   * @default Возвращается `group.groupLabel`.
   *
   * @remarks
   * - Функция должна быть чистой и быстрой (без сетевых запросов и побочных эффектов).
   * - Возвращайте ТОЛЬКО строку — чипы отображают текстовое значение.
   * - Для длинных строк применяется усечение (overflow с многоточием) на уровне компонента.
   *
   * @example
   * // Добавить двоеточие и количество выбранных элементов
   * renderGroupLabel: (group) => `${group.groupLabel}: ${group.items.length}`
   *
   * @example
   * // Локализация заголовка группы
   * const i18n = { status: 'Статус', type: 'Тип' };
   * renderGroupLabel: (group) => i18n[group.groupId] ?? group.groupLabel
   */
  renderGroupLabel?: (group: Group) => string;

  /**
   * Пользовательский форматтер текста чипса (элемента внутри группы или одиночного фильтра).
   *
   * Позволяет управлять тем, что именно отображается внутри каждого чипса. Особенно полезен
   * при серверной пагинации/ленивой загрузке, когда в состоянии фильтра хранится только value,
   * а label необходимо подставить из локального кэша.
   *
   * @param {Group | null } group  Группа, внутри которой рендерится чип (или null).
   * @param {Item} item   Сам элемент чипса. В группах передаётся конкретный `Item`,
   *                                  для одиночного чипа может быть `undefined`.
   * @returns {string} Текст, который будет показан в чипсе.
   *
   * @default Используется `item?.label.toString()` (или строковое представление value).
   *
   * @remarks
   * - Функция должна быть чистой и быстрой;
   * - Возвращайте ТОЛЬКО строку.
   *
   * @example
   * // 1) Отображение label из кэша при серверной пагинации
   * const labelsCacheRef = useRef(new Map<string, string>());
   * renderChipLabel: (group, item) => {
   *   if (item?.id != null) {
   *     const key = String(item.id);
   *     const fromCache = labelsCacheRef.current.get(key);
   *     if (fromCache) return fromCache;     // красивый label, если уже загрузили
   *     return String(item.label ?? key);    // фоллбэк: временно показываем value/label из item
   *   }
   *   return ''; // безопасный фоллбэк для одиночных случаев
   * }
   *
   * @example
   * // 2) Нормализация отображения числовых значений
   * renderChipLabel: (_group, item) => {
   *   const v = Number(item?.label);
   *   return Number.isFinite(v) ? v.toLocaleString('ru-RU') : String(item?.label ?? '');
   * }
   *
   * @example
   * // 3) Префикс по типу группы
   * renderChipLabel: (group, item) => {
   *   const prefix = group.groupId === 'status' ? '' : '#';
   *   return `${prefix}${item?.label ?? item?.id ?? ''}`;
   * }
   */
  renderChipLabel?: (group: Group | null, item: Item) => string;
};

export type DefaultSidebarTabIds = 'columns' | 'tableSettings' | 'filtering';

/**
 * Конфигурация sidebar
 */
type SidebarConfig = {
  /**
   * Включен ли sidebar. Отвечает только за UI. Не влияет на перерасчёт фичей.
   * @default true
   */
  enabled?: boolean;
  /**
   * Открыт ли sidebar при первом рендере (uncontrolled-режим).
   * Игнорируется, если передан openState.
   * @default false
   */
  defaultOpen?: boolean;
  /**
   * Внешний контроль открытия/закрытия sidebar.
   * Если передан — источник истины, defaultOpen игнорируется.
   */
  openState?: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  /**
   * id вкладки, выбранной по умолчанию (актуально при открытом сайдбаре).
   * Если id не найден или у вкладки showInSidebar=false — используется первая доступная.
   */
  defaultActiveTabId?: string;
  /**
   * Внешний контроль активной вкладки (controlled-режим).
   * Если передан — источник истины, defaultActiveTabId игнорируется.
   */
  activeTabState?: [
    string | null,
    React.Dispatch<React.SetStateAction<string | null>>
  ];
  /**
   * Колбэк смены активной вкладки. Вызывается и в uncontrolled-режиме.
   * При закрытии сайдбара приходит null.
   */
  onActiveTabChange?: (tabId: string | null, tab?: SidebarTab) => void;
  /**
   * Кастомные табы
   */
  customTabs?: Array<
    Omit<SidebarTab, 'id'> & {
      id: Exclude<string, DefaultSidebarTabIds>;
    }
  >;
  /**
   * Порядок отображения кастомных вкладок
   */
  customTabsOrder?: Array<Exclude<string, DefaultSidebarTabIds>>;
  defaultTabs?: Array<
    | {
        id: 'filtering' | 'columns';
        label?: string;
        title?: string;
        /**
         * Метки для автоматизированного тестирования и аналитики
         * Добавляет data-атрибуты и CSS-классы к элементам controlBlock
         */
        domMetadata?: DomMetadata;
        /**
         * Кастомный элемент справа от title в шапке сайдбара
         */
        titleRightSlot?: React.ReactNode;
      }
    | {
        id: 'tableSettings';
        label?: string;
        title?: string;
        /**
         * Метки для автоматизированного тестирования и аналитики
         * Добавляет data-атрибуты и CSS-классы к элементам controlBlock
         */
        domMetadata?: DomMetadata;
        /**
         * Кастомный слот для вкладки tableSettings (рендерится после общих настроек)
         * Только дл id: 'tableSettings'
         */
        customGeneralSettingsSlot?: React.ReactNode;
        /**
         * Кастомный элемент справа от title в шапке сайдбара
         */
        titleRightSlot?: React.ReactNode;
      }
  >;
};

export function activeViewIs<T extends 'cards' | 'rows'>(
  checkType: T,
  viewState: 'cards' | 'rows',
  view: View
): view is ViewMods[T] {
  return checkType === viewState;
}

export type ControlBlockConfig = {
  /**
   * show - наличие controlBlock-а
   * @default true
   */
  show?: boolean;
  /**
   * leftSideInner - пропс для добавления кнопок в левую часть контролблока
   */
  leftSideInner?: ControlBlockButtonProps[];
  /**
   * rightSideInner - пропс для добавления кнопок в в правую часть контролблока
   */
  rightSideInner?: ControlBlockButtonProps[];
  /**
   * rightSideInner - пропс для добавления кастомные фичей (кнопки-иконки)
   */
  customFeatures?: FeatureItem[];
  /**
   * Пропсы для компонента dropdown в котором будут скрыты левые фичи при адаптивной компрессии
   */
  leftSideDropdownProps?: TableDropdownConfigProps;
  /**
   * Пропсы для компонента dropdown в котором будут скрыты правые фичи при адаптивной компрессии
   */
  rightSideDropdownProps?: TableDropdownConfigProps;
  /**
   * Активна ли фича компрессии (сжатие ToolsMenu при адаптиве)
   * @default true
   */
  enableAdaptiveCompress?: boolean;
  /**
   * Панель массовых действий
   */
  massActionPanel?: {
    /**
     * Кнопки панели. Размеры кнопок/дропдаунов панель подбирает сама (по `size` панели и компактности) —
     * передавать `size` кнопкам не нужно. Если `size` на кнопке всё же задан — он используется как есть.
     */
    buttons: MassActionsButtonProps[];
    /**
     * Пропсы для Dropdown, в который сжались кнопки
     */
    collapsedDropdownProps?: TableDropdownConfigProps;
    /**
     * Отступ панели снизу от контейнера (px)
     * @default 24
     */
    bottom?: number;
    /**
     * Управление отображением панели массовых действий.
     * - `undefined` (по умолчанию) — стандартное поведение (показывается при selecting + выбранных строках)
     * - `false` — панель не рендерится, разработчик управляет действиями самостоятельно
     * - `true` — панель показывается всегда, даже без активного selecting и выбранных строк
     */
    show?: boolean;
    /**
     * Размерная сетка панели внутри таблицы: `m`/`s` — обычный размер, `xs` — уменьшенный (кнопки `xxs`, «ещё» `xs`, счётчик Body XS).
     * Viewport-логика (1280) в таблице не используется.
     * @default 's'
     */
    size?: MassActionsSize;
  };
};

export type EditingConfig<RowType, RowIdType, SummaryRowType> = {
  /**
   * Функция обработки изменений в редактируемой строке
   */
  onRowsChange: Maybe<
    (rows: RowType[], data: RowsChangeData<RowType, SummaryRowType>) => void
  >;
  /**
   * свойство, необходимое для корректного изменения дочерних строк.
   * Данное свойство обязательно, если ваши дочерние строки установлены не под ключом "subRows" внутри строки.
   *
   * Как дочерние строки можно указывать свойство, которые вложено в другое свойство.
   * В таком случае "." будет знаком для обозначения сл. уровня вложенности.
   *
   * @example "child" или "uvh367.children"
   */
  subRowsKey?: string;
  /**
   * Функция определения уникального id строки
   * @param row
   * @returns
   */
  rowKeyGetter: (row: RowType) => RowIdType;
  /**
   * Функция определения возможности редактирования строки
   * @param row
   * @returns
   */
  rowEditable?: (row: RowType) => boolean;
  /**
   * defaultEnabled - пропс, отвечающий за то, будет ли активен режим редактирования или нет. По умолчанию - не активно.
   * @default false
   */
  defaultEnabled?: boolean;
  /**
   * enabled - необходим для управления режимом редактирования снаружи компонента Таблицы.
   * По умолчанию, управление происходит в компоненте.
   * Приоритетнее, чем defaultEnabled.
   *
   * @type boolean - если НЕ нужно переключение в самой таблице
   * @type [boolean, React.Dispatch<React.SetStateAction<boolean>>] - если нужно переключение в самой таблице
   *
   */
  enabled?: boolean | [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  /**
   * Cостояние скрытия/раскрытия кнопки включения/выключения фичи
   * @default true
   */
  showToggleEnabledButton?: boolean;
  /**
   * Функция, вызывающаяся при включении/выключении фичи
   * @param editingIsActive
   * @returns
   */
  onToggleEnableEditing?: (editingIsActive: boolean) => void;
  /**
   * Метки для автоматизированного тестирования и аналитики
   * Добавляет data-атрибуты и CSS-классы к элементам controlBlock
   */
  domMetadata?: DomMetadata;
};

export type SummaryRowsConfig = {
  showDefault: boolean;
  showInControl: boolean;
} & {
  /**
   * Метки для автоматизированного тестирования и аналитики
   * Добавляет data-атрибуты и CSS-классы к элементам controlBlock
   */
  domMetadata?: DomMetadata;
};

export type TableConfig<
  RowType extends ObjectForExtending,
  SummaryRowType,
  RowIdType extends string | number,
  FilterStateType extends ObjectForExtending
  // SubRowType
> = {
  /**
   * Тип выделения активной (кликнутой) сущности `'cell' | 'row'`
   * @default 'cell'
   */
  highlightActiveType?: HighlightActiveType;
  /**
   * rowSize - размеры строк таблицы
   */
  rowSize?: Prettify<RowSize>;
  /**
   * rowHeight - размер высоты строк таблицы
   */
  rowHeight?: Maybe<number | RowHeightFunc<RowType>>;
  /**
   * sorting - активация сортировки. Условие активации - это наличие данного свойства. Нужно также сконфигурировать колонки.
   *
   * Пример:
   *
   * tableConfig={sorting: {sortingState}}
   *
   * columnConfig=[{sortingType: 'numberSort'}]
   */
  sorting?: {
    state: [
      readonly SortColumn[],
      React.Dispatch<React.SetStateAction<readonly SortColumn[]>>
    ];
    /**
     * manualSorting - пропс, активирующий ручную-кастомную (или на стороне бэкенда) сортировку
     */
    manualSorting?: boolean;
  };
  /** @deprecated Свойство view не используется и будет удалено в следующей мажорной версии. */
  view?: View;
  /**
   * filtering - активация фильтрации. Условие активации - это наличие данного свойства. Нужно также сконфигурировать колонки.
   *
   * Пример:
   *
   * tableConfig={filtering: {stateAndSetter, ...}}
   *
   * columnConfig=[{filtering: {...}}]
   */
  filtering?: FilteringConfig<FilterStateType>;
  /**
   * Сворачивание / разворачивание таблицы
   */
  collapsing?: TableCollapseConfig;
  /**
   * selecting - активация выбора строк. Условие активации - это наличие данного свойства.
   * Есть поддержка выбора строк с многоуровневой вложенностью.
   *
   * Пример:
   *
   *```jsx
   * import { Table } from '@daisforge/ui';
   *
   * <Table
   * tableConfig={{selecting: {stateAndSetter, rowKeyGetter}}}
   * {...rest}
   * />
   * ```
   */
  selecting?: {
    state: [
      ReadonlySet<RowIdType>,
      React.Dispatch<React.SetStateAction<ReadonlySet<RowIdType>>>
    ];
  } & Prettify<SelectingRowConfig<RowType, RowIdType>> & {
      /**
       * Метки для автоматизированного тестирования и аналитики
       * Добавляет data-атрибуты и CSS-классы к элементам controlBlock
       */
      controlBlock?: {
        domMetadata?: DomMetadata;
      };
      /**
       * Метки для автоматизированного тестирования и аналитики
       * Добавляет data-атрибуты и CSS-классы к элементам RightSidebar
       */
      sidebar?: {
        domMetadata?: DomMetadata;
      };
    };
  /**
   * editing - активация редактирования. Условие активации - это наличие данного свойства. Нужно также сконфигурировать колонки.
   *
   * Пример:
   *
   * tableConfig={editing: {onRowsChange, rowKeyGetter}}
   *
   * columnConfig=[{editingCell: {...}}]
   */
  editing?: EditingConfig<RowType, RowIdType, SummaryRowType>;

  /**
   * subRows - активация иерархии, отображения вложенных строк. Условие активации - наличие данного свойства. Нужно также сконфигурировать колонки.
   *
   * Пример:
   *
   * tableConfig={subRows: {getSubRows, rowKeyGetter}}
   *
   * columnConfig=[{subRow: {...}}]
   */
  subRows?: SubRows<RowType, RowIdType>;
  rowsGrouping?: RowsGrouping<RowType>;

  /**
   * resizableColumn - активация изменения ширины колонки с помощью курсора. Условие активации -  resizableColumn: true. Нужно также сконфигурировать колонки.
   *
   * Пример:
   *
   * tableConfig={resizableColumn: true}
   *
   * columnConfig=[{resizable: true}]
   */
  resizableColumn?: boolean;
  /**
   * style - inline-стили. Для стилей самой таблицы (без вложенности).
   *
   * Исключены свойства 'width' | 'height' | 'minWidth' | 'minHeight' | 'maxWidth' | 'maxHeight'. Их следует стилизовать через свойства containerStyle.
   */
  style?: Omit<
    CSSProperties,
    'width' | 'height' | 'minWidth' | 'minHeight' | 'maxWidth' | 'maxHeight'
  >;
  /**
   * css - для стилей простых и сложных(например, для стилизации cell, headerCell, ...).
   *
   * Пример:
   *
   * ```css
   * & > .rdg-header-row > .rdgCell {
   * background-color: red;
   * }
   * ```
   *
   */
  css?: string | CSSObject;

  summaryRows?: SummaryRowsConfig;
  /**
   * controlBlock - пропс для активации, кастомизации контролблока.
   */
  controlBlock?: ControlBlockConfig;
  /**
     * containerStyle - инлайновые стили контейнера таблицы и контролблока. высоту и ширину для таблицы рекомендуется задавать в этом пропсе.
     * Пример:
     *
     * ```tsx
        tableConfig={{ containerStyle: { height: '70vh' } }}
     * ```
     */
  containerStyle?: CSSProperties | undefined;
  /**
   * containerCss - стили для контейнера таблицы и контролблока.
   * Через этот пропс можно дополнительно кастомизировать контейнер и все его дочерние элементы.
   */
  containerCss?: string | CSSObject | undefined;
  /**
   * containerId - html-атрибут id контейнера таблицы.
   */
  containerId?: string | undefined;

  /**
   * infinityScroll - бесконечная подгрузка данных при скролле.
   *
   *  Условие активации - наличие самого пропса infinityScroll.
   *
   * При активации infinityScroll отключается дефолтная сортировка и фильтрация.
   * (Предполагается, что если есть infinityScroll,
   * то в таблице представлен не весь объем данных,
   * по этой причине дефолтная сортировка и фильтрация не подходят и будут отображать некорректные данные)
   *
   */
  infinityScroll?: {
    onTrigger: (rows: RowType[]) => Promise<void> | void;
    isLoading: boolean;
    /**
     * @default true
     */
    hasMore?: boolean;
    /**
     * @default 100   (px)
     */
    scrollThreshold?: number;
  };
  /**
   * @isLoading - состояние загрузки данных для таблицы.
   */
  isLoading?: boolean | { boolean: boolean; skeletonRowsCount: number };
  /**
   * loadingOverlay - конфигурация для отображения оверлея загрузки.
   * Показывает индикатор загрузки поверх таблицы с возможностью кастомизации.
   */
  loadingOverlay?: {
    /**
     * Активен ли оверлей загрузки
     * @default true
     */
    active?: boolean;
    /**
     * Кастомный компонент спиннера
     * @default <Spinner view="secondary" size="36" /> (внутренний компонент)
     */
    spinner?: ReactNode;
    /**
     * Основной заголовок оверлея
     * @default "Загрузка таблицы"
     */
    title?: string;
    /**
     * Подзаголовок, который появится после задержки, пустая строка - значит он не появится
     * @default ""
     */
    subtitle?: string;
    /**
     * Задержка перед показом подзаголовка (мс)
     * @default 10000 (10 секунд)
     */
    showSubtitleDelay?: number;
  };
  noRowsFallback?: boolean | { custom: ReactNode };
  columnsControl?: ColumnsControlConfig;
  rowDetailPanel?: RowDetailConfig<RowType>;
  rowInstruments?: {
    getRowDropdownConfig: RowInstrumentsType<RowType>;
    /**
     * @default false
     */
    defaultOpened?: boolean;
    /**
     * @default true
     */
    showInControl?: boolean;
    /**
     * Внешний стейт видимости
     */
    openedState?: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  };
  fullScreenEnabled?: FullScreen;
  keyText?: boolean | KeyTextConfig;
  /**
   * pagination - пропс для пагинации.
   *
   * Условие активации - наличие самого пропса pagination.
   *
   * При активации pagination отключается дефолтные поиск, сортировка и фильтрация.
   * (поиск работает на уровне с фильтрацией и сортировкой, сначала поиск, затем фильтрация, затем сортировка)
   *
   */
  pagination?: PaginationProps;
  /**
   * searching - пропс для поиска по таблицу.
   *
   * Условие активации - наличие searching.enabled: true
   *
   */
  /**
   * Конфигурация табов в сайдбаре
   */
  sidebarConfig?: SidebarConfig;
  searching?: SearchingProps;
  /**
   * onHeaderContextMenu - пропс для активации открытия контекстного меню.
   *
   */
  onHeaderContextMenu?: HeaderContextMenuProps;
  onHeaderContextMenuDropDown?: HeaderContextMenuDropDownProps;
  onCellContextMenuDropDown?: CellContextMenuDropDownProps<
    RowType,
    SummaryRowType
  >;
} & Pick<
  DataGridPropsDefault<RowType, SummaryRowType, RowIdType>,
  | 'summaryRowHeight'
  | 'onFill'
  | 'onCopy'
  | 'onPaste'
  | 'onCellClick'
  | 'onCellDoubleClick'
  | 'onCellContextMenu'
  | 'onCellKeyDown'
  | 'onSelectedCellChange'
  | 'onScroll'
  | 'onColumnResize'
  | 'onColumnsReorder'
  | 'enableVirtualization'
  | 'rowClass'
  | 'data-testid'
  | 'headerRowHeight'
>;
