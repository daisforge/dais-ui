import type {
  TableCanvasLoggerCounts,
  TableCanvasLoggerFilterValue,
  TableCanvasLoggerGroupItem,
  TableCanvasLoggerItem,
  TableCanvasLoggerMessageItem,
} from './TableCanvasLogger.types';

export const isTableCanvasLoggerGroup = (
  item: TableCanvasLoggerItem,
): item is TableCanvasLoggerGroupItem => Array.isArray(item.items);

export const isTableCanvasLoggerMessage = (
  item: TableCanvasLoggerItem,
): item is TableCanvasLoggerMessageItem => !isTableCanvasLoggerGroup(item);

const pad = (value: number) => String(value).padStart(2, '0');

export const formatTableCanvasLoggerDate = (
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

export const walkTableCanvasLoggerItems = (
  items: TableCanvasLoggerItem[],
  visit: (item: TableCanvasLoggerItem, depth: number) => void,
  depth = 0,
) => {
  items.forEach((item) => {
    visit(item, depth);
    if (isTableCanvasLoggerGroup(item))
      walkTableCanvasLoggerItems(item.items, visit, depth + 1);
  });
};

export const countTableCanvasLoggerItems = (
  items?: TableCanvasLoggerItem[] | null,
): Required<TableCanvasLoggerCounts> => {
  const counts: Required<TableCanvasLoggerCounts> = {
    error: 0,
    warning: 0,
    info: 0,
    success: 0,
  };
  if (items) {
    walkTableCanvasLoggerItems(items, (item) => {
      counts[item.status] += 1;
    });
  }
  return counts;
};

export const sumTableCanvasLoggerCounts = (
  counts: TableCanvasLoggerCounts,
): number =>
  (counts.error ?? 0) +
  (counts.warning ?? 0) +
  (counts.info ?? 0) +
  (counts.success ?? 0);

export const filterTableCanvasLoggerItems = (
  items: TableCanvasLoggerItem[],
  filter: TableCanvasLoggerFilterValue | null | undefined,
): TableCanvasLoggerItem[] => {
  if (!filter || filter === 'all') return items;

  return items.reduce<TableCanvasLoggerItem[]>((acc, item) => {
    if (item.status === filter) {
      acc.push(item);
    } else if (isTableCanvasLoggerGroup(item)) {
      const nested = filterTableCanvasLoggerItems(item.items, filter);
      if (nested.length) acc.push({ ...item, items: nested });
    }
    return acc;
  }, []);
};

export const getTableCanvasLoggerGroupIds = (
  items?: TableCanvasLoggerItem[] | null,
): string[] => {
  const ids: string[] = [];
  if (items)
    walkTableCanvasLoggerItems(
      items,
      (item) => isTableCanvasLoggerGroup(item) && ids.push(item.id),
    );
  return ids;
};

export const getTableCanvasLoggerDefaultOpenIds = (
  items?: TableCanvasLoggerItem[] | null,
): string[] => {
  const ids: string[] = [];
  if (items) {
    walkTableCanvasLoggerItems(items, (item) => {
      if (isTableCanvasLoggerGroup(item) && item.defaultOpen) ids.push(item.id);
    });
  }
  return ids;
};
