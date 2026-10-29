import { describe, expect, it } from 'vitest';

import { clipAnchorRect, getPopoverSourceKey } from '../utils/anchor';

describe('getPopoverSourceKey: ключ источника поповера', () => {
  it('один id ноды в разных строках даёт разные ключи', () => {
    const column = { id: 'action' };
    const row2 = getPopoverSourceKey({
      originId: 'details',
      tooltipContext: { column, rowInd: 2 },
    });
    const row3 = getPopoverSourceKey({
      originId: 'details',
      tooltipContext: { column, rowInd: 3 },
    });
    expect(row2).not.toBe(row3);
  });

  it('один id в разных колонках даёт разные ключи', () => {
    expect(
      getPopoverSourceKey({
        originId: 'details',
        tooltipContext: { column: { id: 'a' }, rowInd: 1 },
      }),
    ).not.toBe(
      getPopoverSourceKey({
        originId: 'details',
        tooltipContext: { column: { id: 'b' }, rowInd: 1 },
      }),
    );
  });

  it('шапка без строки и событие без контекста тоже получают ключ', () => {
    expect(
      getPopoverSourceKey({
        originId: 'header-popover-1',
        tooltipContext: { column: { id: 'task' } },
      }),
    ).toBe('header-popover-1|task|header');
    expect(getPopoverSourceKey({ originId: 'group-node' })).toBe(
      'group-node||header',
    );
  });

  it('без id ключа нет', () => {
    expect(getPopoverSourceKey({ originId: '' })).toBeNull();
  });
});

describe('clipAnchorRect: якорь в видимой области', () => {
  const rect = { x: 100, y: 40, width: 200, height: 48 };

  it('без ограничений якорь не меняется', () => {
    expect(clipAnchorRect(rect, null)).toEqual(rect);
  });

  it('обрезается краем таблицы', () => {
    const viewport = { x: 0, y: 0, width: 250, height: 70 };
    expect(clipAnchorRect(rect, viewport)).toEqual({
      x: 100,
      y: 40,
      width: 150,
      height: 30,
    });
  });

  it('пустое пересечение возвращает исходный якорь', () => {
    expect(
      clipAnchorRect(rect, { x: 0, y: 500, width: 100, height: 100 }),
    ).toEqual(rect);
  });
});
