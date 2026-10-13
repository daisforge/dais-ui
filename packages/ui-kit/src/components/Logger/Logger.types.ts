import type { ReactNode } from 'react';
import type { CSSObject, FlattenSimpleInterpolation } from 'styled-components';

import type { ButtonCompProps } from '../Button';

/** Статус сообщения. Определяет иконку, цвет и фильтр */
export type LoggerStatus = 'error' | 'warning' | 'info' | 'success';

/** Значение фильтра: конкретный статус или все сообщения */
export type LoggerFilterValue = 'all' | LoggerStatus;

/** Что именно было скопировано пользователем */
export type LoggerCopyKind = 'traceId' | 'description';

/** Дополнительное действие сообщения (кнопка в строке действий) */
export type LoggerAction = {
  id: string;
  text?: string;
  icon?: ReactNode;
  view?: ButtonCompProps['view'];
  disabled?: boolean;
  /** Подсказка и aria-label, если у кнопки нет текста */
  title?: string;
  onClick?: (item: LoggerMessageItem) => void;
};

/** Общие поля элементов лога */
type LoggerItemBase = {
  id: string;
  status: LoggerStatus;
  title: ReactNode;
  className?: string;
  /** Произвольные данные для кастомных рендеров и колбэков */
  meta?: Record<string, unknown>;
};

/** Одиночное сообщение */
export type LoggerMessageItem = LoggerItemBase & {
  /** Текст подробностей. Если строка, то доступно копирование */
  description?: ReactNode;
  /** Дата создания: ISO-строка, timestamp или Date */
  date?: string | number | Date;
  /** Идентификатор трассировки. Показывает кнопку копирования */
  traceId?: string | null;
  /** Код сообщения, например F23. Показывается отдельной кнопкой */
  code?: string;
  /** Дополнительные действия, добавляются после встроенных кнопок */
  actions?: LoggerAction[];
  items?: undefined;
};

/** Группа сообщений. Может содержать как сообщения, так и вложенные группы */
export type LoggerGroupItem = LoggerItemBase & {
  items: LoggerItem[];
  /** Значение по умолчанию для неконтролируемого режима */
  defaultOpen?: boolean;
};

export type LoggerItem = LoggerMessageItem | LoggerGroupItem;

/** Тексты компонента. Переопределяются целиком или частично */
export type LoggerLabels = {
  title: string;
  all: string;
  details: string;
  hide: string;
  copyTraceId: string;
  copied: string;
  copyDescription: string;
  empty: string;
  expandGroup: string;
  collapseGroup: string;
};

/** Классы внутренних элементов */
export type LoggerClasses = {
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

export type LoggerCssProp = string | CSSObject | FlattenSimpleInterpolation;

/** Контекст, который получает кастомный рендер сообщения */
export type LoggerMessageRenderContext = {
  item: LoggerMessageItem;
  depth: number;
  /** Раскрыты ли подробности */
  open: boolean;
  toggle: () => void;
  /** Копирование значения с учётом `onCopy` и обратной связи в кнопке */
  copy: (kind: LoggerCopyKind, value: string) => Promise<void>;
  /** Стандартный рендер сообщения, удобен для оборачивания */
  defaultRender: () => ReactNode;
};

/** Контекст, который получает кастомный рендер группы */
export type LoggerGroupRenderContext = {
  item: LoggerGroupItem;
  depth: number;
  open: boolean;
  toggle: () => void;
  /** Уже отрисованные дочерние элементы */
  children: ReactNode;
  defaultRender: () => ReactNode;
};

/** Настройки отображения, общие для всех элементов списка */
export type LoggerRenderProps = {
  /** Замена иконок статусов */
  statusIcons?: Partial<Record<LoggerStatus, ReactNode>>;
  /** Полная замена иконки статуса */
  renderStatusIcon?: (status: LoggerStatus, item: LoggerItem) => ReactNode;
  /** Полная замена сообщения */
  renderMessage?: (ctx: LoggerMessageRenderContext) => ReactNode;
  /** Полная замена группы */
  renderGroup?: (ctx: LoggerGroupRenderContext) => ReactNode;
  /** Замена блока подробностей */
  renderDescription?: (item: LoggerMessageItem) => ReactNode;
  /** Замена строки действий. Получает стандартные кнопки вторым аргументом */
  renderActions?: (
    item: LoggerMessageItem,
    defaultActions: ReactNode,
  ) => ReactNode;
  /** Дополнительный контент справа от заголовка сообщения */
  renderMessageExtra?: (item: LoggerMessageItem) => ReactNode;
  /** Формат даты. Вернуть null, чтобы скрыть дату */
  formatDate?: (
    date: NonNullable<LoggerMessageItem['date']>,
    item: LoggerMessageItem,
  ) => string | null;
  labels?: Partial<LoggerLabels>;
  classes?: LoggerClasses;
  /** Вызывается после копирования. Если задан `copyToClipboard`, он заменяет стандартное копирование */
  onCopy?: (
    kind: LoggerCopyKind,
    value: string,
    item: LoggerMessageItem,
  ) => void;
  copyToClipboard?: (value: string) => Promise<void> | void;
  /** Вызывается при клике на кнопку с кодом сообщения */
  onCodeClick?: (code: string, item: LoggerMessageItem) => void;
};

/** Счётчики сообщений по статусам, могут быть переданы снаружи (например, с сервера) */
export type LoggerCounts = Partial<Record<LoggerStatus, number>>;

/** Пропсы списка сообщений */
export type LoggerListProps = LoggerRenderProps & {
  items?: LoggerItem[] | null;
  /** Раскрытые id: сообщений (подробности) и групп */
  expandedIds?: string[];
  defaultExpandedIds?: string[];
  onExpandedIdsChange?: (ids: string[]) => void;
  /** Текущий фильтр. Применяется к списку и счётчикам */
  filter?: LoggerFilterValue;
  /** Контент пустого списка */
  emptyContent?: ReactNode;
  maxHeight?: number | string;
  className?: string;
  $css?: LoggerCssProp;
};

/** Пропсы панели лога */
export type LoggerProps = Omit<LoggerListProps, 'filter'> & {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  filter?: LoggerFilterValue | null;
  defaultFilter?: LoggerFilterValue | null;
  onFilterChange?: (filter: LoggerFilterValue | null) => void;
  /** Внешние счётчики. По умолчанию считаются по `items` */
  counts?: LoggerCounts;
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
