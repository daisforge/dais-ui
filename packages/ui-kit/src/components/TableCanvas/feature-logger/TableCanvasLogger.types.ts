import type { ButtonCompProps } from '@ui-kit/components/Button';
import type { ReactNode } from 'react';
import type { CSSObject, FlattenSimpleInterpolation } from 'styled-components';

/** Статус сообщения. Определяет иконку, цвет и фильтр */
export type TableCanvasLoggerStatus = 'error' | 'warning' | 'info' | 'success';

/** Значение фильтра: конкретный статус или все сообщения */
export type TableCanvasLoggerFilterValue = 'all' | TableCanvasLoggerStatus;

/** Что именно было скопировано пользователем */
export type TableCanvasLoggerCopyKind = 'traceId' | 'description';

/** Дополнительное действие сообщения (кнопка в строке действий) */
export type TableCanvasLoggerAction = {
  id: string;
  text?: string;
  icon?: ReactNode;
  view?: ButtonCompProps['view'];
  disabled?: boolean;
  /** Подсказка и aria-label, если у кнопки нет текста */
  title?: string;
  onClick?: (item: TableCanvasLoggerMessageItem) => void;
};

/** Общие поля элементов лога */
type TableCanvasLoggerItemBase = {
  /** Уникален среди всех сообщений и групп: по нему хранится раскрытие и строится key */
  id: string;
  status: TableCanvasLoggerStatus;
  title: ReactNode;
  className?: string;
  /** Произвольные данные для кастомных рендеров и колбэков */
  meta?: Record<string, unknown>;
};

/** Одиночное сообщение */
export type TableCanvasLoggerMessageItem = TableCanvasLoggerItemBase & {
  /** Текст подробностей. Если строка, то доступно копирование */
  description?: ReactNode;
  /** Дата создания: ISO-строка, timestamp или Date */
  date?: string | number | Date;
  /** Идентификатор трассировки. Показывает кнопку копирования */
  traceId?: string | null;
  /** Код сообщения, например F23. Показывается отдельной кнопкой */
  code?: string;
  /** Дополнительные действия, добавляются после встроенных кнопок */
  actions?: TableCanvasLoggerAction[];
  items?: undefined;
};

/** Группа сообщений. Может содержать как сообщения, так и вложенные группы */
export type TableCanvasLoggerGroupItem = TableCanvasLoggerItemBase & {
  items: TableCanvasLoggerItem[];
  /** Раскрыть группу при появлении. В управляемом `expandedIds` не применяется */
  defaultOpen?: boolean;
};

export type TableCanvasLoggerItem =
  | TableCanvasLoggerMessageItem
  | TableCanvasLoggerGroupItem;

/** Тексты компонента. Переопределяются целиком или частично */
export type TableCanvasLoggerLabels = {
  title: string;
  all: string;
  details: string;
  hide: string;
  copyTraceId: string;
  copied: string;
  copyDescription: string;
  empty: string;
  /** Подсказка кнопки свёрнутой группы */
  expandGroup: string;
  /** Подсказка кнопки раскрытой группы */
  collapseGroup: string;
  /** Подпись группы фильтров для скринридера */
  filters: string;
} & Record<TableCanvasLoggerStatus, string>;

/** Классы внутренних элементов */
export type TableCanvasLoggerClasses = {
  root?: string;
  header?: string;
  filters?: string;
  filter?: string;
  list?: string;
  empty?: string;
  group?: string;
  groupHeader?: string;
  groupBody?: string;
  message?: string;
  messageIcon?: string;
  messageTitle?: string;
  messageActions?: string;
  messageDate?: string;
  messageDescription?: string;
};

export type TableCanvasLoggerCssProp =
  | string
  | CSSObject
  | FlattenSimpleInterpolation;

/** Контекст, который получает кастомный рендер сообщения */
export type TableCanvasLoggerMessageRenderContext = {
  item: TableCanvasLoggerMessageItem;
  /** Раскрыты ли подробности */
  open: boolean;
  toggle: () => void;
  /** Копирование значения с учётом `onCopy` и обратной связи в кнопке */
  copy: (kind: TableCanvasLoggerCopyKind, value: string) => Promise<void>;
  /** Стандартный рендер сообщения, удобен для оборачивания */
  defaultRender: () => ReactNode;
};

/** Контекст, который получает кастомный рендер группы */
export type TableCanvasLoggerGroupRenderContext = {
  item: TableCanvasLoggerGroupItem;
  open: boolean;
  toggle: () => void;
  /** Уже отрисованные дочерние элементы */
  children: ReactNode;
  defaultRender: () => ReactNode;
};

/** Настройки отображения, общие для всех элементов списка */
export type TableCanvasLoggerRenderProps = {
  /** Замена иконок статусов */
  statusIcons?: Partial<Record<TableCanvasLoggerStatus, ReactNode>>;
  /** Полная замена сообщения */
  renderMessage?: (ctx: TableCanvasLoggerMessageRenderContext) => ReactNode;
  /** Полная замена группы */
  renderGroup?: (ctx: TableCanvasLoggerGroupRenderContext) => ReactNode;
  /** Замена блока подробностей */
  renderDescription?: (item: TableCanvasLoggerMessageItem) => ReactNode;
  /** Замена строки действий. Получает стандартные кнопки вторым аргументом */
  renderActions?: (
    item: TableCanvasLoggerMessageItem,
    defaultActions: ReactNode,
  ) => ReactNode;
  /** Дополнительный контент справа от заголовка сообщения */
  renderMessageExtra?: (item: TableCanvasLoggerMessageItem) => ReactNode;
  /** Формат даты. Вернуть null, чтобы скрыть дату */
  formatDate?: (
    date: NonNullable<TableCanvasLoggerMessageItem['date']>,
    item: TableCanvasLoggerMessageItem,
  ) => string | null;
  labels?: Partial<TableCanvasLoggerLabels>;
  classes?: TableCanvasLoggerClasses;
  /** Вызывается после копирования. Если задан `copyToClipboard`, он заменяет стандартное копирование */
  onCopy?: (
    kind: TableCanvasLoggerCopyKind,
    value: string,
    item: TableCanvasLoggerMessageItem,
  ) => void;
  /** Своё копирование. Вернуть `false` или выбросить ошибку, если скопировать не удалось */
  copyToClipboard?: (value: string) => Promise<boolean | void> | boolean | void;
  /** Вызывается при клике на кнопку с кодом сообщения */
  onCodeClick?: (code: string, item: TableCanvasLoggerMessageItem) => void;
};

/** Счётчики сообщений по статусам, могут быть переданы снаружи (например, с сервера) */
export type TableCanvasLoggerCounts = Partial<
  Record<TableCanvasLoggerStatus, number>
>;

/** Пропсы списка сообщений */
export type TableCanvasLoggerListProps = TableCanvasLoggerRenderProps & {
  items?: TableCanvasLoggerItem[] | null;
  /** Раскрытые id: сообщений (подробности) и групп */
  expandedIds?: string[];
  defaultExpandedIds?: string[];
  onExpandedIdsChange?: (ids: string[]) => void;
  /** Текущий фильтр. Применяется к списку и счётчикам */
  filter?: TableCanvasLoggerFilterValue;
  /** Контент пустого списка */
  emptyContent?: ReactNode;
  /** Максимальная высота списка. По умолчанию не ограничена: логгер занимает высоту родителя, а список прокручивается */
  maxHeight?: number | string;
  className?: string;
  $css?: TableCanvasLoggerCssProp;
};

/** Пропсы панели лога */
export type TableCanvasLoggerProps = Omit<
  TableCanvasLoggerListProps,
  'filter'
> & {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Текущий фильтр. При закрытии панели сбрасывается на «Все», в закрытой панели чипсы не выделены */
  filter?: TableCanvasLoggerFilterValue;
  defaultFilter?: TableCanvasLoggerFilterValue;
  onFilterChange?: (filter: TableCanvasLoggerFilterValue) => void;
  /**
   * Внешние счётчики. По умолчанию считаются по `items`: группа учитывается
   * наравне с сообщениями, поэтому группа с тремя сообщениями даёт «Все (4)»
   */
  counts?: TableCanvasLoggerCounts;
  /** Заголовок панели */
  title?: ReactNode;
  /** Иконка слева от заголовка */
  icon?: ReactNode;
  /** Контент справа в шапке */
  headerExtra?: ReactNode;
  /** Скрыть шапку: остаётся только список */
  hideHeader?: boolean;
  /** Скрыть фильтры в шапке */
  hideFilters?: boolean;
  /** Показывать ли чипс статуса с нулевым счётчиком */
  showEmptyFilters?: boolean;
};
