import { describe, expect, it } from 'vitest';

import { getSelectionRowKey } from '../handlers';

describe('ключ выделенной строки при группировке', () => {
  it('отделяет пустой ключ группы от ключа записи и вызывает геттер только для записей', () => {
    const group = {
      groupKey: '',
      groupByKey: 'name',
      groupParents: '',
      childGroups: [],
      childRows: [],
    };
    const getter = getSelectionRowKey<Record<string, unknown>>(
      (row) => (row['record'] as { id: string }).id,
      true,
    );
    const groupId = getter?.(group);
    expect(typeof groupId).toBe('string');
    expect(getter?.({ ...group })).toBe(groupId);
    expect(getter?.({ record: { id: groupId } })).not.toBe(groupId);
    expect(getter?.({ ...group, groupParents: 'другая группа' })).not.toBe(
      groupId,
    );
  });
});
