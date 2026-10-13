import type {
  LoggerCounts,
  LoggerFilterValue,
  LoggerGroupItem,
  LoggerItem,
  LoggerMessageItem,
} from './Logger.types';

export const isLoggerGroup = (item: LoggerItem): item is LoggerGroupItem =>
  Array.isArray(item.items);

export const isLoggerMessage = (item: LoggerItem): item is LoggerMessageItem =>
  !isLoggerGroup(item);

const pad = (value: number) => String(value).padStart(2, '0');

export const formatLoggerDate = (
  value: string | number | Date,
): string | null => {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return null;

  const time = `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(
    date.getSeconds(),
  )}`;
  const day = `${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${pad(
    date.getFullYear() % 100,
  )}`;
  return `${time} ${day}`;
};

export const walkLoggerItems = (
  items: LoggerItem[],
  visit: (item: LoggerItem, depth: number) => void,
  depth = 0,
) => {
  items.forEach((item) => {
    visit(item, depth);
    if (isLoggerGroup(item)) walkLoggerItems(item.items, visit, depth + 1);
  });
};

export const countLoggerItems = (
  items?: LoggerItem[] | null,
): Required<LoggerCounts> => {
  const counts: Required<LoggerCounts> = {
    error: 0,
    warning: 0,
    info: 0,
    success: 0,
  };
  if (items) {
    walkLoggerItems(items, (item) => {
      counts[item.status] += 1;
    });
  }
  return counts;
};

export const sumLoggerCounts = (counts: LoggerCounts): number =>
  (counts.error ?? 0) +
  (counts.warning ?? 0) +
  (counts.info ?? 0) +
  (counts.success ?? 0);

export const filterLoggerItems = (
  items: LoggerItem[],
  filter: LoggerFilterValue | null | undefined,
): LoggerItem[] => {
  if (!filter || filter === 'all') return items;

  return items.reduce<LoggerItem[]>((acc, item) => {
    if (item.status === filter) {
      acc.push(item);
    } else if (isLoggerGroup(item)) {
      const nested = filterLoggerItems(item.items, filter);
      if (nested.length) acc.push({ ...item, items: nested });
    }
    return acc;
  }, []);
};

export const getLoggerGroupIds = (items?: LoggerItem[] | null): string[] => {
  const ids: string[] = [];
  if (items)
    walkLoggerItems(items, (item) => isLoggerGroup(item) && ids.push(item.id));
  return ids;
};

export const getLoggerDefaultOpenIds = (
  items?: LoggerItem[] | null,
): string[] => {
  const ids: string[] = [];
  if (items) {
    walkLoggerItems(items, (item) => {
      if (isLoggerGroup(item) && item.defaultOpen) ids.push(item.id);
    });
  }
  return ids;
};
