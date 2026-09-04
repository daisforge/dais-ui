import type { GridSelection } from '@glideappsfinal/glide-data-grid';
import { Group, Item, ItemOrGroup } from '@ui-kit/components/ListOfFilters';
import type { MassActionsSize } from '@ui-kit/components/MassActions';
import { SIZE } from '@ui-kit/components/TableCanvas';
// FIXME: Ждем адаптации фичи RowInstauments
// import { RowInstrumentsType, SIZE } from '@ui-kit/components/TableCanvas';
import { CSSProperties, ReactNode } from 'react';
import { CSSObject } from 'styled-components';

import { TableDropdownConfigProps } from '../components/TableDropdown/types';
import type {
  CellTransferConfig,
  FillMeta,
  RowsChangeType,
} from '../feature-cell-transfer/types';
import { ColumnsControlConfig } from '../feature-column-control/types';
import {
  TableCanvasEmptyStateConfig,
  TableCanvasErrorStateConfig,
} from '../feature-content-state/types';
import { FullScreen } from '../feature-full-screen/types';
import { KeyTextConfig } from '../feature-key-text/types';
import type { TableNotificationsConfig } from '../feature-notifications';
import { PaginationProps } from '../feature-pagination/types';
import { RowsGrouping } from '../feature-rows-grouping/types';
import { SearchingProps } from '../feature-searching/types';
import {
  FlattenedRowsArrAndMap,
  SelectingRowConfig,
} from '../feature-select-row/types';
import { SubRows } from '../feature-tree/types';
import type {
  CellReadOnlyEditorGlideInstanceStaticProps,
  CellsSelectionMode,
  HighlightActiveType,
  HoverEffectsConfig,
  TableGlideCustomProps,
  TableGlideInstanceProps,
  TableInfoWithRow,
} from '../TableGlideInstance/type';
import { ControlBlockButtonProps } from '../widgets/control-block/control-block-button.types';
import {
  FeatureItem,
  PinningMenuConfig,
  SidebarTab,
} from '../widgets/control-block/types';
import type { MassActionButtonProps } from '../widgets/mass-actions/types';
import { DomMetadata } from './additional.type';
import type {
  ColumnConfig,
  EditingCellInfo,
  SortColumn,
} from './column-config.type';
import { ColumnsGroupingConfig } from './columns-grouping.type';
import { MergedCellsAlign } from './merged-cells.type';
import { Maybe, ObjectForExtending, Prettify } from './utils.type';

export type {
  ColumnsGroupingConfig,
  HeaderAlignment,
} from './columns-grouping.type';
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
export interface RowsChangeData<R extends ObjectForExtending, SR = unknown> {
  indexes: number[];
  column: ColumnConfig<R, SR>;
  rows: { before: R; after: R }[];
  /** Источник изменения: `'edit'` — ручное редактирование, `'paste'` — вставка, `'fill'` — fill handle */
  type: RowsChangeType;
  /** Метаданные fill handle (только при `type === 'fill'`) */
  fillMeta?: FillMeta;
  /** Результат `onBeforeFill` (только при `type === 'fill'`, если `onBeforeFill` задан) */
  fillResult?: string[][];
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
  currentRowSize: { rowSizeName: SIZE; rowSizeValue: number },
  rowIndex: number,
) => number;

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
   * Размещение кнопки коллапсинга / заголовка
   * - 'inside' - внутри контрол-блока (по умолчанию, участвует в компрессии)
   * - 'above' - в отдельном блоке сверху контрол-блока (не участвует в компрессии)
   * @default 'inside'
   */
  collapseButtonPlacement?: 'inside' | 'above';
  /**
   * Кастомный рендер правого слота кнопки коллапсинга, который используется при collapseButtonPlacement='above'
   */
  collapseButtonAboveRightSlot?: React.ReactNode;
  /**
   * Текст заголовка таблицы. Только строка, оформляется нашей типографикой.
   * Рендерится в блоке above или inline в зависимости от collapseButtonPlacement.
   * При 'above' — показывается вместе с кнопкой коллапсинга (или без неё если enableCollapse=false).
   * При 'inline' — показывается внутри контрол-блока слева.
   * Для произвольной разметки заголовка используйте titleRender.
   */
  titleText?: string;
  /**
   * Полностью кастомный рендер заголовка (заменяет titleText).
   */
  titleRender?: React.ReactNode;
};

export type { FlattenedRowsArrAndMap };

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
            setFilters: React.Dispatch<React.SetStateAction<T>>,
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
export type SidebarConfig = {
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
    React.Dispatch<React.SetStateAction<string | null>>,
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
        /** название таба в рамках горизонтального табов внутри таба настройки */
        label?: string;
        /** название таба в рамках вертикальных табов сайдбара (если данный таб окажется единственным табом в настройках) */
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
        /** @default true */
        showInSidebar?: boolean;
        /** тултип иконки шестеренки (для табов с id = filtering и columns - недоступен. Настраивается через таб с id='tableSettings') */
        iconTooltipText?: undefined;
      }
    | {
        id: 'tableSettings';
        /** название таба в рамках горизонтального табов внутри таба настройки */
        label?: string;
        /** название таба в рамках вертикальных табов сайдбара */
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
        /** @default true */
        showInSidebar?: boolean;
        /** тултип иконки шестеренки @default 'Настройки' */
        iconTooltipText?: string;
      }
  >;
};

export function activeViewIs<T extends 'cards' | 'rows'>(
  checkType: T,
  viewState: 'cards' | 'rows',
  view: View,
): view is ViewMods[T] {
  return checkType === viewState;
}

/** Размер controlBlock: 'm' и 's' — одинаковые стили, 'xs' — уменьшенный */
export type ControlBlockSize = 'm' | 's' | 'xs';

export type ControlBlockConfig = {
  /**
   * show - наличие controlBlock-а
   * @default true
   */
  show?: boolean;
  /**
   * Размер controlBlock и его элементов (кнопки, иконки, поиск, отступы).
   * 'm' и 's' — стандартные стили, 'xs' — компактный режим.
   * Не влияет на customFeatures и кастомные слоты — они контролируются разработчиком.
   * @default 'm'
   */
  size?: ControlBlockSize;
  /**
   * @deprecated Используйте кастомные кнопки через rightSideInner или customFeatures.
   * leftSideInner - пропс для добавления кнопок в левую часть контролблока.
   * Продолжает работать для обратной совместимости.
   */
  leftSideInner?: ControlBlockButtonProps[];
  /**
   * rightSideInner - пропс для добавления кнопок в правую часть контролблока
   */
  rightSideInner?: ControlBlockButtonProps[];
  /**
   * customFeatures - пропс для добавления кастомных фичей (кнопки-иконки)
   */
  customFeatures?: FeatureItem[];
  /**
   * pinningMenu - нативная фича закрепления столбцов (SplitIconButton с
   * дропдауном) в правой зоне иконок. Появляется, когда активировано
   * закрепление колонок (columnsControl.pinning). Продукт может донастроить
   * и дополнить пункты меню (см. PinningMenuConfig).
   */
  pinningMenu?: PinningMenuConfig;
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
    buttons: MassActionButtonProps[];
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

/** Пропсы кнопки редактирования. onClick исключён — используйте onSave/onCancel/onEnableEditing. */
export type EditingButtonProps = Omit<
  Partial<ControlBlockButtonProps>,
  | 'onClick'
  | 'size'
  | 'dropdown'
  | 'isTargetAction'
  | 'skipRightDivider'
  | 'tooltipText'
>;

export type EditingConfig<
  RowType extends ObjectForExtending,
  RowIdType,
  SummaryRowType,
> = {
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
   * Глубокое копирование строк перед применением правки в режиме редактирования.
   *
   * Включите, если строки, передаваемые в таблицу, иммутабельны/заморожены
   * (напр. стейт под управлением Redux Toolkit или Immer — они вызывают
   * Object.freeze в dev). При редактировании дочерней строки таблица записывает
   * изменение ВНУТРЬ объекта родителя; на замороженном объекте это падает с
   * `TypeError: Cannot assign to read only property`.
   *
   * Когда флаг включён, таблица сама делает structuredClone редактируемой строки
   * перед записью — ваш иммутабельный стейт не мутируется, и редактирование
   * дочерних строк работает без действий с вашей стороны.
   *
   * ⚠️ Данные строки должны быть сериализуемыми. Где доступен structuredClone —
   * Date/Map/Set и вложенные структуры копируются корректно; на старых средах
   * без structuredClone используется JSON-фоллбэк (теряет Date/Map/Set, undefined
   * и функции). Не включайте без необходимости — глубокое копирование добавляет
   * накладные расходы.
   *
   * @default false
   */
  deepCloneRows?: boolean;
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
  showButtons?: boolean;
  /**
   * Функция, вызывающаяся при включении фичи.
   * @param enableEditorMode - функция включающая режим редактирования
   */
  onEnableEditing?: (enableEditorMode: () => void) => void;
  /**
   * Функция, вызывающаяся при сохранении отредактированного.
   * @param disableEditorMode - функция выключающая режим редактирования
   */
  onSave?: (disableEditorMode: () => void) => void;
  /**
   * Функция, вызывающаяся при отмене отредактированного.
   * @param disableEditorMode - функция выключающая режим редактирования
   */
  onCancel?: (disableEditorMode: () => void) => void;
  /** Пропсы кнопок в controlBlock. */
  buttons?: {
    save?: EditingButtonProps;
    cancel?: EditingButtonProps;
    edit?: EditingButtonProps;
  };
  /**
   * Кастомный слот, отображаемый левее кнопок «Отменить» / «Сохранить».
   * Виден только когда режим редактирования активен (editMode = true).
   * Зона ответственности разработчика — размерная сетка controlBlock не влияет на этот слот.
   */
  editModeLeftSlot?: React.ReactNode;
  /**
   * Метки для автоматизированного тестирования и аналитики
   * Добавляет data-атрибуты и CSS-классы к элементам controlBlock
   */
  domMetadata?: {
    enableButton?: DomMetadata;
    saveButton?: DomMetadata;
    cancelButton?: DomMetadata;
  };
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

/**
 * Конфиг тултипа при hover по canvas-элементам.
 * Для активации фичи необходимо заполнить данный конфиг,
 * а также добавить нужные изменения в Canvas-элементах или в конфиге колонки.
 */
export type TableConfigTooltip = {
  /**
   * Включить/выключить колоночные и кастомные тултипы (cellTooltip, headerCellTooltip).
   * Внутренние тултипы (drag-иконка в шапке и другие по nodeId) работают всегда.
   * @default false
   */
  enabled?: boolean;
  /** Глобальная задержка перед показом тултипа (мс). Per-node переопределяет. @default 500 */
  mouseEnterDelay?: number;
  /** Глобальная задержка перед скрытием тултипа (мс). Per-node переопределяет. @default 0 */
  mouseLeaveDelay?: number;
};

export type InfinityScrollConfig<RowType extends ObjectForExtending> = {
  /** Триггер достижения скроллом зоны подгрузки данных. */
  onTrigger: (rows: RowType[]) => Promise<void> | void;
  /** Состояние загрузки (скелетоны) новых строк. */
  isLoading: boolean;
  /**
   * Флаг, когда все данные загружены — false.
   * @default true
   */
  hasMore?: boolean;
  /**
   * Для mode='region': за сколько строк до конца триггерить загрузку.
   * @default 5
   */
  rowThreshold?: number;
};

export type { TableCanvasEmptyStateConfig, TableCanvasErrorStateConfig };

/**
 * Настройка выделения ячеек/колонок/строк в TableCanvas — единый объект.
 * Это отдельная ось взаимодействия — не зависит от `highlightActiveType`.
 */
export type CellsSelectionConfig = {
  /**
   * Режим фактического выделения ячеек (нативный glide selection). По нему
   * работают copy/paste, рамка, fill-handle и затемнение шапки/нумерации.
   * @default "range-cell"
   */
  mode?: CellsSelectionMode;
  /**
   * Выделение колонок по клику на шапку. Ctrl/Cmd — добавить/убрать колонку,
   * Shift — диапазон колонок. Клик по иконкам сортировки/фильтрации в шапке
   * выделение НЕ вызывает. Поддерживает copy/paste по выделенным колонкам.
   * @default true
   */
  enableColumnSelection?: boolean;
  /**
   * Выделение строк по клику/драгу на колонке нумерации (`rowMarkers`).
   * Ctrl/Cmd — несмежный выбор отдельных строк, драг — смежный диапазон.
   * Поддерживает copy/paste по выделенным строкам. Требует включённой колонки
   * нумерации (`rowMarkers`). При `false` клик по нумерации ничего не выделяет.
   * @default true
   */
  enableRowSelection?: boolean;
  /**
   * Выделение всей таблицы кликом по «нулевой» ячейке — шапке колонки нумерации
   * (левый верхний угол). Выделяет все строки данных по всем колонкам одним
   * диапазоном; поддерживает copy/paste. Требует включённой колонки нумерации
   * (`rowMarkers`) и активного `mode` (≠ `disabled`).
   * @default true
   */
  enableSelectAll?: boolean;
  /**
   * Внешний (controlled) контроль НАТИВНОГО выделения (ячейки/диапазон/смежные
   * строки и колонки). `state` — кортеж `[value, setter]` как у `selecting.state`.
   * Сброс: `setter({ current: undefined, rows: empty, columns: empty })`.
   * Несмежный Ctrl-выбор колонок/строк (own-state) сюда не входит — он внутренний.
   */
  state?: [GridSelection, React.Dispatch<React.SetStateAction<GridSelection>>];
};

/** Один объединённый блок: какие строки и колонки слить. */
export type MergedCellsRegion = {
  rowKeys: Array<string | number>;
  colKeys: string[];
  /** Выравнивание контента этого блока. Важнее колоночного и общего. */
  mergedCellsAlign?: MergedCellsAlign;
};

export type TableConfig<
  RowType extends ObjectForExtending,
  SummaryRowType,
  RowIdType extends string | number,
  FilterStateType extends ObjectForExtending,
  // SubRowType
> = {
  /**
   * Группировка колонок (многоуровневая шапка через `columnConfig.children`):
   * объединение пустых ячеек шапки (`squashEmptyCells`, по умолчанию включено) и
   * дефолт выравнивания в объединённых ячейках (`squashedHeaderAlign`).
   */
  columnsGrouping?: ColumnsGroupingConfig;
  /**
   * Подсветка активной сущности в canvas-таблице.
   * @deprecated Значения `'cell'`/`'range-cell'` устарели — используйте
   * `cellsSelection.mode`. Актуальны `'row'` (подсветка строки) и `'disabled'`.
   */
  highlightActiveType?: HighlightActiveType;
  /**
   * Единый конфиг выделения ячеек: режим (`mode`), оси
   * (`enableColumnSelection`/`enableRowSelection`/`enableSelectAll`) и controlled
   * (`state`). См. {@link CellsSelectionConfig}.
   */
  cellsSelection?: CellsSelectionConfig;
  /**
   * Подсвеченная строка (`highlightActiveType='row'`).
   * `state` (опционально) — controlled-кортеж `[value, setter]`: задан — значением
   * владеешь снаружи (сброс `setter(undefined)`); не задан — таблица крутит
   * подсветку внутренним стейтом, а `onChange` всё равно срабатывает (подписка
   * без владения значением).
   */
  highlightActiveRow?: {
    state?: [
      number | undefined,
      React.Dispatch<React.SetStateAction<number | undefined>>,
    ];
    /**
     * Колбэк смены подсвеченной строки: отдаёт её флэт-индекс и сам объект
     * строки (`rows[index]`). Позволяет открывать данные подсвеченной строки
     * (например, в SplitView) без `onCellClicked`.
     */
    onChange?: (params: {
      index: number | undefined;
      row: RowType | undefined;
    }) => void;
  };
  /**
   * Эффекты при наведении (hover)
   * `row` — подсветка строки под курсором.
   * Независимая визуальная ось: селектинг (`cellsSelection`) и `highlightActiveType='row'`
   * рисуются ПОВЕРХ hover-подсветки и визуально перекрывают её (hover
   * «остаётся под ними» и снова виден после сброса выделения).
   *
   * `{ row: true }` — включить с цветами из темы;
   * `{ row: { color: '#F7F9FB' } }` — переопределить цвет data-ячеек.
   * @default undefined (выключено)
   */
  hoverEffects?: HoverEffectsConfig;
  /**
   * Включает компенсацию тонких canvas-линий при browser zoom ниже 100%, когда devicePixelRatio меньше 1.
   * Влияет только на grid/header/sticky hairline borders.
   * @default false
   */
  enableLowDprHairline?: boolean;
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
      React.Dispatch<React.SetStateAction<readonly SortColumn[]>>,
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
      React.Dispatch<React.SetStateAction<ReadonlySet<RowIdType>>>,
    ];
    rowKeyGetter: (row: RowType) => RowIdType;
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
   * cellTransfer — конфигурация копирования, вставки и fill handle.
   * По умолчанию копирование (Ctrl+C) работает в режиме редактирования.
   * Данные копируются в формате TSV (tab-separated values), совместимом с Excel.
   *
   * Пример:
   *
   * tableConfig={{ cellTransfer: { enabled: true, onBeforeCopy: (data) => data } }}
   */
  cellTransfer?: CellTransferConfig;

  /**
   * Объединение ячеек тела таблицы.
   *
   * mergeByCellValues — колонки, в которых подряд идущие одинаковые значения
   * сливаются в один блок (по вертикали). Границы блоков таблица считает сама из
   * данных; сортировка и фильтр их пересобирают. Данные не меняются — значение и
   * так повторяется в строках, объединение лишь показывает его одной ячейкой.
   *
   * mergedCellsRegions — список блоков, заданных снаружи (как выделение): каждый
   * блок описан ключами строк (rowKeys) и колонок (colKeys). Нужен rowKeyGetter.
   * Если после сортировки или скрытия колонок строки/колонки блока перестали идти
   * подряд — блок не рисуется. Важнее mergeByCellValues.
   *
   * Примеры: mergeCells={{ mergeByCellValues: ['dept', 'role'] }},
   * mergeCells={{ mergedCellsRegions, rowKeyGetter: (r) => r.id }}.
   */
  mergeCells?: {
    mergeByCellValues?: Array<
      string | { colKey: string; value: (row: RowType) => unknown }
    >;
    /** Список блоков, заданных снаружи (по ключам строк и колонок). */
    mergedCellsRegions?: MergedCellsRegion[];
    /**
     * Нужен для mergedCellsRegions: находит строку по её ключу. Должна быть
     * стабильной функцией; менять её на лету не нужно — в пересборку таблицы она
     * не входит.
     */
    rowKeyGetter?: (row: RowType) => string | number;
    /**
     * Выравнивание по умолчанию для всех блоков. Колоночный mergedCellsAlign и
     * выравнивание конкретного региона важнее.
     */
    mergedCellsAlign?: MergedCellsAlign;
  };

  /**
   * Модуль нотификаций: стандартизированный канал событий для внешних
   * потребителей. Таблица UI не рисует — вызывает `onNotification`, потребитель
   * показывает тост/модалку на своей стороне. Сейчас эмитятся ошибки copy/paste
   * (в т.ч. multi-range 2D-разброс, readonly/overflow-abort, пропуск валидацией).
   */
  notifications?: TableNotificationsConfig;

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
  /**
   * Столбец с нумерацией строк.
   * Активируется наличием этого свойства. Поддерживает `subRows` любой глубины.
   *
   * @see {@link RowMarkersTableConfig} — полное описание конфигурации и примеры.
   */
  rowMarkers?: RowMarkersTableConfig<RowType>;
  rowsGrouping?: RowsGrouping<RowType, SummaryRowType>;

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
   * unstickyHeader - откреплённая шапка. Header уезжает вместе со скроллом контента.
   * @default false
   */
  unstickyHeader?: boolean;

  /** Тултип при hover по canvas-элементам.
   *  Для активации фичи необходимо заполнить данный конфиг,
   * а также добавить нужные изменения в Canvas-элементах или в конфиге колонки.
   */
  tooltip?: TableConfigTooltip;

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
  infinityScroll?: InfinityScrollConfig<RowType>;
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
  /**
   * Empty state внутри content-области canvas-таблицы.
   * Не заменяет control block, header или pagination.
   */
  emptyState?: TableCanvasEmptyStateConfig;
  /**
   * Error state внутри content-области canvas-таблицы.
   * Не заменяет control block, header или pagination.
   */
  errorState?: TableCanvasErrorStateConfig;
  // FIXME:
  // noRowsFallback?: boolean | { custom: ReactNode };
  columnsControl?: ColumnsControlConfig;
  // FIXME:
  // rowDetailPanel?: RowDetailConfig<RowType>;
  // FIXME: Временно комментирую использование, пока не адаптируем TableCanvas
  // rowInstruments?: {
  //   getRowDropdownConfig: RowInstrumentsType<RowType>;
  //   /**
  //    * @default false
  //    */
  //   defaultOpened?: boolean;
  //   /**
  //    * @default true
  //    */
  //   showInControl?: boolean;
  //   /**
  //    * Внешний стейт видимости
  //    */
  //   openedState?: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  // };
  fullScreenEnabled?: FullScreen;
  /**
   * Переносит портал editor overlay внутрь контейнера таблицы вместо document.body.
   * Решает проблему focus trap и сдвига координат при рендере таблицы в модалке с CSS transform.
   * @default undefined (overlay рендерится в document.body — стандартное поведение)
   */
  editorOverlayPortal?: 'inside';
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
   * onHeaderContextMenu - callback открытия контекстного меню.
   */
  onHeaderContextMenu?: TableGlideInstanceProps<
    RowType,
    SummaryRowType
  >['onHeaderContextMenu'];
  onHeaderContextMenuDropdown?: TableGlideInstanceProps<
    RowType,
    SummaryRowType
  >['onHeaderContextMenuDropdown'];
  onCellContextMenuDropdown?: TableGlideInstanceProps<
    RowType,
    SummaryRowType
  >['onCellContextMenuDropdown'];
  onCellContextMenu?: TableGlideInstanceProps<
    RowType,
    SummaryRowType
  >['onCellContextMenu'];
  /**
   * Обработчик клика по ячейке.
   *
   * Получает `cell` readonly [colIndex, rowIndex] от glide, и `info` обогащённый объект
   * с row, column, ctxs, refTable (аналогично onCellContextMenu).
   */
  onCellClicked?: (
    cell: readonly [number, number],
    info: TableInfoWithRow<RowType, SummaryRowType>,
  ) => void;
} & GlideInstanceOmitted<RowType, SummaryRowType>;

type GlideInstanceOmitted<
  RowType extends ObjectForExtending,
  SummaryRowType,
> = Pick<
  Omit<
    TableGlideInstanceProps<RowType, SummaryRowType>,
    | keyof TableGlideCustomProps<RowType, SummaryRowType>
    | 'CellReadOnlyEditor' /* CellReadOnlyEditor - свойство только для GlideInstance */
  >,
  | 'className'
  | 'columnSelect'
  | 'minColumnWidth'
  | 'maxColumnWidth'
  | 'maxColumnAutoWidth'
  | 'onVisibleRegionChanged'
  | 'onCellClicked'
  // | 'CellReadOnlyEditor'
  // | 'onGroupHeaderClicked'
  | 'onHeaderClicked'
  | 'onItemHovered'
  | 'trapFocus'
  | 'onColumnResize'
>;
export type CellReadOnlyEditorProps<
  RowType extends ObjectForExtending,
  SummaryRowType,
> = CellReadOnlyEditorGlideInstanceStaticProps &
  EditingCellInfo<RowType, SummaryRowType>;

//  & Pick<
//   DataGridPropsDefault<RowType, SummaryRowType, RowIdType>,
//   | 'summaryRowHeight'
//   | 'onFill'
//   | 'onCopy'
//   | 'onPaste'
//   | 'onCellClick'
//   | 'onCellDoubleClick'
//   | 'onCellContextMenu'
//   | 'onCellKeyDown'
//   | 'onSelectedCellChange'
//   | 'onScroll'
//   | 'onColumnResize'
//   | 'onColumnsReorder'
//   | 'enableVirtualization'
//   | 'rowClass'
//   | 'data-testid'
//   | 'headerRowHeight'
// >;

/**
 * Конфигурация фичи rowMarkers (столбец с нумерацией строк).
 *
 * Столбец frozen, вставляется первым, исключён из reorder/pin/hide/sort/grouping.
 * Поддерживает плоский и древовидный (`subRows`) режимы любой глубины вложенности.
 *
 * **Дефолтное поведение** (без `getRowMarker`): root-only нумерация —
 * корневые строки получают номер (`startIndex + rootIndex`), дочерние — пустую строку.
 *
 * @example
 * ```tsx
 * // Минимальная конфигурация
 * tableConfig={{ rowMarkers: { startIndex: 1 } }}
 *
 * // Сквозная стабильная нумерация
 * tableConfig={{ rowMarkers: { getRowMarker: ({ flatIndex }) => flatIndex + 1 } }}
 * ```
 */
export type RowMarkersTableConfig<
  RowType extends ObjectForExtending = ObjectForExtending,
> = {
  /**
   * Стартовый индекс нумерации (для дефолтной логики без `getRowMarker`).
   * @default 1
   */
  startIndex?: number;

  /**
   * Ширина столбца с нумерацией (в px).
   * Если задан `size` — он приоритетнее.
+  * Если ни `size`, ни `width` не заданы — ширина подстраивается
+  * под глобальный `tableConfig.rowSize` (small=20, medium=32, big=48).
   * @default 32
   */
  width?: number;
  /**
   * Размер столбца. Приоритетнее `width`.
   * - `xs` = 20px
   * - `s` = 32px
   * - `m` = 48px
   */
  size?: 'xs' | 's' | 'm';
  /**
   * Кастомная функция нумерации. Полностью переопределяет дефолтную root-only логику.
   * Вызывается при рендере каждой ячейки столбца нумерации.
   *
   * ⚠️ Вызывается не только при полной отрисовке таблицы, но и при ховере/скролле —
   * для **одной** ячейки. Не используйте внешние переменные-счётчики —
   * используйте аргументы (`siblingPath`, `flatIndex` и др.), они всегда актуальны.
   *
   * @example
   * // Сквозная стабильная нумерация (все строки, номера не прыгают при сворачивании)
   * getRowMarker: ({ flatIndex }) => flatIndex + 1
   *
   * @example
   * // Корневые — номер, дочерние — прочерк
   * getRowMarker: ({ isSubRow, flatIndex }) => isSubRow ? '—' : flatIndex + 1
   *
   * @example
   * // Иерархическая нумерация любой глубины: 1, 1.1, 1.1.1, 1.2, 2
   * getRowMarker: ({ siblingPath }) => siblingPath.map(i => i + 1).join('.')
   */
  getRowMarker?: (args: {
    /** Данные текущей строки. */
    row: RowType;
    /** Уровень строки в дереве: `0` — корневая, `1` — дочерняя, `2` — внучка, и т.д. */
    level: number;
    /** `true`, если строка дочерняя (`level > 0`). */
    isSubRow: boolean;
    /**
     * Индекс строки в **видимых** строках.
     * **Нестабильный** — меняется при сворачивании и разворачивании веток.
     */
    rowIndex: number;
    /**
     * Стабильный 0-based индекс строки в **полном** дереве (включая скрытые/свёрнутые).
     * Не меняется при collapse/expand — подходит для сквозной нумерации.
     */
    flatIndex: number;
    /**
     * Порядковый номер среди siblings одного родителя (0-based).
     * Для корневых строк — порядковый номер среди всех корневых.
     * Для дочерних — порядковый номер среди children одного `parentKey`.
     */
    siblingIndex: number;
    /**
     * Путь siblingIndex-ов от корня до текущей строки (каждый элемент 0-based).
     *
     * Примеры:
     * - корневая строка (2-я): `[1]`
     * - дочерняя (3-й ребёнок 2-го корня): `[1, 2]`
     * - внучка (1-й ребёнок 1-го ребёнка 1-го корня): `[0, 0, 0]`
     *
     * Для иерархической нумерации: `siblingPath.map(i => i + 1).join('.')` → `"1.1.1"`
     *
     * Для плоской таблицы (без subRows): всегда `[siblingIndex]` (один элемент).
     */
    siblingPath: number[];
    /**
     * Ключ родительской строки (`rowKeyGetter(parent)`).
     * `null` для корневых строк. Работает для **любой** глубины вложенности.
     */
    parentKey: string | number | null;
    /** Текущий видимый `flattened` массив строк. */
    rows: readonly RowType[];
  }) => string | number;
};
