import { HistoryDay, HistoryItem } from './ApprovalCenter.types';

export function isNotNullOrUndefined<T>(
  value: T | null | undefined
): value is T {
  return value !== null && value !== undefined;
}

export function isNonEmptyArray<T>(value: unknown): value is [T, ...T[]] {
  return Array.isArray(value) && value.length > 0;
}

export function groupByDay(items: HistoryItem[]): HistoryDay[] {
  const dayFormatter = new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long'
  });

  const timeFormatter = new Intl.DateTimeFormat('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

  const now = new Date();

  const groups = new Map<
    string,
    {
      status: HistoryItem['status'];
      title: string;
      time: string;
    }[]
  >();

  for (const item of items) {
    const date = new Date(item.actionDate);

    const isToday =
      date.getFullYear() === now.getFullYear() &&
      date.getMonth() === now.getMonth() &&
      date.getDate() === now.getDate();

    const day = isToday ? 'Сегодня' : dayFormatter.format(date);
    const time = timeFormatter.format(date);

    const formattedItem = {
      status: item.status,
      title: item.actionTitle,
      time
    };

    let actions = groups.get(day);

    if (actions === undefined) {
      actions = [];
      groups.set(day, actions);
    }

    actions.push(formattedItem);
  }

  return Array.from(groups, ([date, actions]) => ({
    date,
    actions
  }));
}
