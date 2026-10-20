import { describe, expect, it } from 'vitest';

import type {
  TableCanvasLoggerGroupItem,
  TableCanvasLoggerItem,
  TableCanvasLoggerMessageItem,
} from './TableCanvasLogger.types';
import {
  countTableCanvasLoggerItems,
  filterTableCanvasLoggerItems,
  formatTableCanvasLoggerDate,
  getTableCanvasLoggerDefaultOpenIds,
  getTableCanvasLoggerGroupIds,
  isTableCanvasLoggerGroup,
} from './TableCanvasLogger.utils';

const msg = (
  id: string,
  status: TableCanvasLoggerItem['status'],
): TableCanvasLoggerMessageItem => ({
  id,
  status,
  title: id,
});

const group = (
  id: string,
  status: TableCanvasLoggerItem['status'],
  items: TableCanvasLoggerItem[],
): TableCanvasLoggerGroupItem => ({ id, status, title: id, items });

describe('formatTableCanvasLoggerDate', () => {
  it('форматирует дату как ЧЧ:мм:сс ДД.ММ.ГГ из макета', () => {
    expect(formatTableCanvasLoggerDate(new Date(2025, 0, 1, 0, 0, 0))).toBe(
      '00:00:00 01.01.25',
    );
    expect(formatTableCanvasLoggerDate(new Date(2026, 4, 23, 18, 7, 32))).toBe(
      '18:07:32 23.05.26',
    );
  });

  it('принимает ISO-строку и timestamp', () => {
    const date = new Date(2024, 11, 31, 23, 59, 59);
    expect(formatTableCanvasLoggerDate(date.toISOString())).toBe(
      '23:59:59 31.12.24',
    );
    expect(formatTableCanvasLoggerDate(date.getTime())).toBe(
      '23:59:59 31.12.24',
    );
  });

  it('возвращает null для невалидной даты', () => {
    expect(formatTableCanvasLoggerDate('не дата')).toBeNull();
  });
});

describe('countTableCanvasLoggerItems', () => {
  it('считает и группы, и вложенные сообщения', () => {
    const tree = [
      group('a', 'error', [msg('b', 'warning'), msg('c', 'warning')]),
      msg('d', 'success'),
    ];
    expect(countTableCanvasLoggerItems(tree)).toEqual({
      error: 1,
      warning: 2,
      info: 0,
      success: 1,
    });
  });

  it('возвращает нули для пустого списка', () => {
    expect(countTableCanvasLoggerItems(null)).toEqual({
      error: 0,
      warning: 0,
      info: 0,
      success: 0,
    });
  });
});

describe('filterTableCanvasLoggerItems', () => {
  const tree = [
    group('a', 'error', [msg('b', 'warning'), msg('c', 'info')]),
    msg('d', 'success'),
  ];

  it('«all» и пустой фильтр возвращают исходный список', () => {
    expect(filterTableCanvasLoggerItems(tree, 'all')).toBe(tree);
    expect(filterTableCanvasLoggerItems(tree, null)).toBe(tree);
  });

  it('оставляет группу, если подходит вложенное сообщение, и фильтрует детей', () => {
    const result = filterTableCanvasLoggerItems(tree, 'warning');
    expect(result.map((item) => item.id)).toEqual(['a']);
    const [group] = result;
    expect(
      !!group &&
        isTableCanvasLoggerGroup(group) &&
        group.items.map((item) => item.id),
    ).toEqual(['b']);
  });

  it('не трогает детей группы, если подошла сама группа', () => {
    const [group] = filterTableCanvasLoggerItems(tree, 'error');
    expect(
      !!group && isTableCanvasLoggerGroup(group) && group.items,
    ).toHaveLength(2);
  });

  it('возвращает пустой список, если ничего не подошло', () => {
    expect(filterTableCanvasLoggerItems([msg('x', 'info')], 'error')).toEqual(
      [],
    );
  });

  it('не мутирует исходное дерево', () => {
    filterTableCanvasLoggerItems(tree, 'warning');
    const [group] = tree;
    expect(
      !!group && isTableCanvasLoggerGroup(group) && group.items,
    ).toHaveLength(2);
  });
});

describe('getTableCanvasLoggerGroupIds', () => {
  it('возвращает id всех групп на любой глубине', () => {
    const tree = [
      group('a', 'error', [group('b', 'error', [msg('c', 'info')])]),
    ];
    expect(getTableCanvasLoggerGroupIds(tree)).toEqual(['a', 'b']);
  });
});

describe('getTableCanvasLoggerDefaultOpenIds', () => {
  it('возвращает только группы с defaultOpen', () => {
    const items: TableCanvasLoggerItem[] = [
      { id: 'a', status: 'error', title: 'a', defaultOpen: true, items: [] },
      { id: 'b', status: 'error', title: 'b', items: [] },
      { id: 'c', status: 'info', title: 'c' },
    ];
    expect(getTableCanvasLoggerDefaultOpenIds(items)).toEqual(['a']);
  });
});
