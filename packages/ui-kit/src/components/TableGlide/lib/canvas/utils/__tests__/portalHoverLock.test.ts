import { describe, expect, it, vi } from 'vitest';

import {
  isPortalHoverLocked,
  lockPortalHover,
  subscribeToPortalHoverLock
} from '../portalHoverEvents';

describe('lockPortalHover по таблице', () => {
  it('блокировка одной таблицы не трогает другую', () => {
    const first = document.createElement('div');
    const second = document.createElement('div');
    const onFirst = vi.fn();
    const onSecond = vi.fn();
    const unsubscribeFirst = subscribeToPortalHoverLock(onFirst, first);
    const unsubscribeSecond = subscribeToPortalHoverLock(onSecond, second);

    const release = lockPortalHover(first);
    expect(isPortalHoverLocked(first)).toBe(true);
    expect(isPortalHoverLocked(second)).toBe(false);
    expect(onFirst).toHaveBeenLastCalledWith(true);
    expect(onSecond).not.toHaveBeenCalled();

    release();
    expect(isPortalHoverLocked(first)).toBe(false);
    expect(onFirst).toHaveBeenLastCalledWith(false);
    expect(onSecond).not.toHaveBeenCalled();

    unsubscribeFirst();
    unsubscribeSecond();
  });

  it('блокировка без таблицы действует на все таблицы', () => {
    const table = document.createElement('div');
    const onTable = vi.fn();
    const unsubscribe = subscribeToPortalHoverLock(onTable, table);
    const release = lockPortalHover();
    expect(isPortalHoverLocked(table)).toBe(true);
    expect(onTable).toHaveBeenLastCalledWith(true);
    release();
    expect(onTable).toHaveBeenLastCalledWith(false);
    unsubscribe();
  });

  it('подписка без таблицы слышит блокировку любой таблицы', () => {
    const table = document.createElement('div');
    const onAny = vi.fn();
    const unsubscribe = subscribeToPortalHoverLock(onAny);
    const release = lockPortalHover(table);
    expect(isPortalHoverLocked()).toBe(true);
    expect(onAny).toHaveBeenLastCalledWith(true);
    release();
    expect(isPortalHoverLocked()).toBe(false);
    expect(onAny).toHaveBeenLastCalledWith(false);
    unsubscribe();
  });

  it('две блокировки одной таблицы: снимается после второго снятия, повторное снятие ничего не делает', () => {
    const table = document.createElement('div');
    const onTable = vi.fn();
    const unsubscribe = subscribeToPortalHoverLock(onTable, table);
    const releaseA = lockPortalHover(table);
    const releaseB = lockPortalHover(table);
    releaseA();
    releaseA();
    expect(isPortalHoverLocked(table)).toBe(true);
    releaseB();
    expect(isPortalHoverLocked(table)).toBe(false);
    expect(onTable.mock.calls).toEqual([[true], [false]]);
    unsubscribe();
  });
});
