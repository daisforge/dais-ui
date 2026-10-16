import type { LoggerClasses, LoggerLabels, LoggerStatus } from './Logger.types';

export const loggerClassNames = {
  root: 'logger',
  header: 'logger__header',
  filters: 'logger__filters',
  filter: 'logger__filter',
  list: 'logger__list',
  empty: 'logger__empty',
  group: 'logger__group',
  groupHeader: 'logger__groupHeader',
  groupBody: 'logger__groupBody',
  message: 'logger__message',
  messageIcon: 'logger__messageIcon',
  messageTitle: 'logger__messageTitle',
  messageActions: 'logger__messageActions',
  messageDate: 'logger__messageDate',
  messageDescription: 'logger__messageDescription',
} as const satisfies Required<LoggerClasses>;

export const DEFAULT_LOGGER_LABELS: LoggerLabels = {
  title: 'Сообщения системы',
  all: 'Все',
  details: 'Подробнее',
  hide: 'Скрыть',
  copyTraceId: 'Скопировать ID',
  copied: 'Скопировано',
  copyDescription: 'Скопировать описание',
  empty: 'Сообщений нет',
  expandGroup: 'Развернуть группу',
  collapseGroup: 'Свернуть группу',
};

export const LOGGER_STATUSES: LoggerStatus[] = [
  'info',
  'error',
  'warning',
  'success',
];

export const COPIED_FEEDBACK_MS = 2000;

export const GROUP_BODY_INDENT = 42;
