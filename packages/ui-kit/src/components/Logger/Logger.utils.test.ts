import { describe, expect, it } from 'vitest';

import type {
  LoggerGroupItem,
  LoggerItem,
  LoggerMessageItem,
} from './Logger.types';
import {
  countLoggerItems,
  filterLoggerItems,
  formatLoggerDate,
  getLoggerDefaultOpenIds,
  getLoggerGroupIds,
  isLoggerGroup,
} from './Logger.utils';

const msg = (id: string, status: LoggerItem['status']): LoggerMessageItem => ({
  id,
  status,
  title: id,
});

const group = (
  id: string,
  status: LoggerItem['status'],
  items: LoggerItem[],
): LoggerGroupItem => ({ id, status, title: id, items });

describe('formatLoggerDate', () => {
  it('форматирует дату как ЧЧ:мм:сс ДД.ММ.ГГ из макета', () => {
    expect(formatLoggerDate(new Date(2025, 0, 1, 0, 0, 0))).toBe(
      '00:00:00 01.01.25',
    );
    expect(formatLoggerDate(new Date(2026, 4, 23, 18, 7, 32))).toBe(
      '18:07:32 23.05.26',
    );
  });

  it('принимает ISO-строку и timestamp', () => {
    const date = new Date(2024, 11, 31, 23, 59, 59);
    expect(formatLoggerDate(date.toISOString())).toBe('23:59:59 31.12.24');
    expect(formatLoggerDate(date.getTime())).toBe('23:59:59 31.12.24');
  });

  it('возвращает null для невалидной даты', () => {
    expect(formatLoggerDate('не дата')).toBeNull();
  });
});

describe('countLoggerItems', () => {
  it('считает и группы, и вложенные сообщения', () => {
    const tree = [
      group('a', 'error', [msg('b', 'warning'), msg('c', 'warning')]),
      msg('d', 'success'),
    ];
    expect(countLoggerItems(tree)).toEqual({
      error: 1,
      warning: 2,
      info: 0,
      success: 1,
    });
  });

  it('возвращает нули для пустого списка', () => {
    expect(countLoggerItems(null)).toEqual({
      error: 0,
      warning: 0,
      info: 0,
      success: 0,
    });
  });
});

describe('filterLoggerItems', () => {
  const tree = [
    group('a', 'error', [msg('b', 'warning'), msg('c', 'info')]),
    msg('d', 'success'),
  ];

  it('«all» и пустой фильтр возвращают исходный список', () => {
    expect(filterLoggerItems(tree, 'all')).toBe(tree);
    expect(filterLoggerItems(tree, null)).toBe(tree);
  });

  it('оставляет группу, если подходит вложенное сообщение, и фильтрует детей', () => {
    const result = filterLoggerItems(tree, 'warning');
    expect(result.map((item) => item.id)).toEqual(['a']);
    const [group] = result;
    expect(isLoggerGroup(group) && group.items.map((item) => item.id)).toEqual([
      'b',
    ]);
  });

  it('не трогает детей группы, если подошла сама группа', () => {
    const [group] = filterLoggerItems(tree, 'error');
    expect(isLoggerGroup(group) && group.items).toHaveLength(2);
  });

  it('возвращает пустой список, если ничего не подошло', () => {
    expect(filterLoggerItems([msg('x', 'info')], 'error')).toEqual([]);
  });

  it('не мутирует исходное дерево', () => {
    filterLoggerItems(tree, 'warning');
    const [group] = tree;
    expect(isLoggerGroup(group) && group.items).toHaveLength(2);
  });
});

describe('getLoggerGroupIds', () => {
  it('возвращает id всех групп на любой глубине', () => {
    const tree = [
      group('a', 'error', [group('b', 'error', [msg('c', 'info')])]),
    ];
    expect(getLoggerGroupIds(tree)).toEqual(['a', 'b']);
  });
});

describe('getLoggerDefaultOpenIds', () => {
  it('возвращает только группы с defaultOpen', () => {
    const items: LoggerItem[] = [
      { id: 'a', status: 'error', title: 'a', defaultOpen: true, items: [] },
      { id: 'b', status: 'error', title: 'b', items: [] },
      { id: 'c', status: 'info', title: 'c' },
    ];
    expect(getLoggerDefaultOpenIds(items)).toEqual(['a']);
  });
});
