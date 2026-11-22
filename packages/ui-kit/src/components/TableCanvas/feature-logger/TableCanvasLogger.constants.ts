import type {
  TableCanvasLoggerClasses,
  TableCanvasLoggerLabels,
  TableCanvasLoggerStatus,
} from './TableCanvasLogger.types';

export const tableCanvasLoggerClassNames = {
  root: 'rdg-table-logger',
  header: 'rdg-table-logger__header',
  filters: 'rdg-table-logger__filters',
  filter: 'rdg-table-logger__filter',
  list: 'rdg-table-logger__list',
  empty: 'rdg-table-logger__empty',
  group: 'rdg-table-logger__group',
  groupHeader: 'rdg-table-logger__groupHeader',
  groupBody: 'rdg-table-logger__groupBody',
  message: 'rdg-table-logger__message',
  messageIcon: 'rdg-table-logger__messageIcon',
  messageTitle: 'rdg-table-logger__messageTitle',
  messageActions: 'rdg-table-logger__messageActions',
  messageDate: 'rdg-table-logger__messageDate',
  messageDescription: 'rdg-table-logger__messageDescription',
} as const satisfies Required<TableCanvasLoggerClasses>;

export const DEFAULT_TABLE_CANVAS_LOGGER_LABELS: TableCanvasLoggerLabels = {
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
  filters: 'Фильтр по статусу',
  error: 'Ошибка',
  warning: 'Предупреждение',
  info: 'Информация',
  success: 'Успешно',
};

export const TABLE_CANVAS_LOGGER_STATUSES: TableCanvasLoggerStatus[] = [
  'info',
  'error',
  'warning',
  'success',
];

export const COPIED_FEEDBACK_MS = 2000;

/** Размер иконок статусов и шевронов */
export const ICON_SIZE = 16;

/** Скругление как у Button size="xxs": чипсы фильтров выглядят как кнопки */
export const BUTTON_XXS_RADIUS = '0.375rem';
