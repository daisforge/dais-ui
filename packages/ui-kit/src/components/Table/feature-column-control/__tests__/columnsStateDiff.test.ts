import { describe, expect, it } from 'vitest';

import { getColumnsStateChanged } from '../columnsStateDiff';

describe('getColumnsStateChanged', () => {
  it('одинаковые состояния дают пустой changed', () => {
    const state = { order: ['a', 'b'], pinned: ['a'], hidden: ['b'] };
    expect(getColumnsStateChanged(state, state)).toEqual({});
  });

  it('другая последовательность order считается изменением', () => {
    expect(
      getColumnsStateChanged(
        { order: ['a', 'b'], pinned: [], hidden: [] },
        { order: ['b', 'a'], pinned: [], hidden: [] },
      ),
    ).toEqual({ order: 'order' });
  });

  it('для pinned и hidden важен только состав, а не порядок', () => {
    expect(
      getColumnsStateChanged(
        { order: [], pinned: ['a', 'b'], hidden: ['c', 'd'] },
        { order: [], pinned: ['b', 'a'], hidden: ['d', 'c'] },
      ),
    ).toEqual({});
  });

  it('отмечает все изменившиеся части сразу', () => {
    expect(
      getColumnsStateChanged(
        { order: ['a', 'b'], pinned: [], hidden: [] },
        { order: ['b', 'a'], pinned: ['a'], hidden: ['b'] },
      ),
    ).toEqual({ order: 'order', pinned: 'pinned', hidden: 'hidden' });
  });
});
