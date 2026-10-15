import { describe, expect, it } from 'vitest';

import { buildConfirmParams } from '../confirmParams';

const keepAll = (cols: string[]) => cols;
const base = { order: ['a', 'b', 'c'], pinned: ['a'], hidden: [] as string[] };

describe('buildConfirmParams: параметры onConfirm', () => {
  it('без изменений changed пустой', () => {
    expect(buildConfirmParams(base, base, keepAll).changed).toEqual({});
  });

  it('смена порядка отмечается как order', () => {
    const next = { ...base, order: ['b', 'a', 'c'] };
    expect(buildConfirmParams(base, next, keepAll)).toEqual({
      order: ['b', 'a', 'c'],
      pinned: ['a'],
      hidden: [],
      changed: { order: 'order' },
    });
  });

  it('закрепление и скрытие сравниваются как наборы, без учёта порядка', () => {
    const prev = { ...base, pinned: ['a', 'b'], hidden: ['c'] };
    const sameSets = { ...prev, pinned: ['b', 'a'] };
    expect(buildConfirmParams(prev, sameSets, keepAll).changed).toEqual({});

    const next = { ...prev, pinned: ['a'], hidden: [] };
    expect(buildConfirmParams(prev, next, keepAll).changed).toEqual({
      pinned: 'pinned',
      hidden: 'hidden',
    });
  });

  it('служебные колонки убираются из результата', () => {
    const withService = { ...base, order: ['checkbox', 'a', 'b', 'c'] };
    const dropService = (cols: string[]) =>
      cols.filter((k) => k !== 'checkbox');
    expect(
      buildConfirmParams(withService, withService, dropService).order,
    ).toEqual(['a', 'b', 'c']);
  });
});
