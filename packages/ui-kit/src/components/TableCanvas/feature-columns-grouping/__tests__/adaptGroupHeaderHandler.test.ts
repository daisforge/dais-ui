import type { GroupHeaderClickedEventArgs } from '@glideappsfinal/glide-data-grid';
import { describe, expect, it, vi } from 'vitest';

import type { ColumnGroupConfig } from '../../types';
import { adaptGroupHeaderHandler } from '../adaptGroupHeaderHandler';

// Контракт onGroupHeaderClicked / onGroupHeaderContextMenu: обработчик получает
// colIndex, группу из columnConfig (key + children) и событие glide.

type Row = { task: string; priority: number };

const work: ColumnGroupConfig<Row> = {
  key: 'work',
  name: 'Работа',
  children: [
    { key: 'task', name: 'Задача' },
    { key: 'priority', name: 'Приоритет' },
  ],
};

const eventOf = (group: string) =>
  ({ group, location: [2, -1] } as unknown as GroupHeaderClickedEventArgs);

describe('adaptGroupHeaderHandler', () => {
  it('без обработчика — undefined: glide не получает лишний колбэк', () => {
    expect(adaptGroupHeaderHandler<Row, unknown>(undefined, new Map())).toBe(
      undefined,
    );
  });

  it('передаёт colIndex, key и children группы из columnConfig и событие', () => {
    const handler = vi.fn();
    const adapted = adaptGroupHeaderHandler<Row, unknown>(
      handler,
      new Map([['work', work]]),
    );
    const event = eventOf('work');

    adapted!(2, event);

    expect(handler).toHaveBeenCalledWith(
      2,
      { key: 'work', children: work.children },
      event,
    );
  });

  it('группы нет в columnConfig — key из события, children пустые', () => {
    const handler = vi.fn();
    const adapted = adaptGroupHeaderHandler<Row, unknown>(handler, new Map());

    adapted!(0, eventOf('gone'));

    expect(handler).toHaveBeenCalledWith(
      0,
      { key: 'gone', children: [] },
      expect.anything(),
    );
  });
});
