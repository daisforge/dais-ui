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

  it('подписка и проверка без таблицы (undefined или null) видят блокировку любой таблицы', () => {
    const table = document.createElement('div');
    const onAny = vi.fn();
    const onAnyNull = vi.fn();
    const unsubscribe = subscribeToPortalHoverLock(onAny);
    const unsubscribeNull = subscribeToPortalHoverLock(onAnyNull, null);
    const release = lockPortalHover(table);
    expect(isPortalHoverLocked()).toBe(true);
    expect(isPortalHoverLocked(null)).toBe(true);
    expect(onAny).toHaveBeenLastCalledWith(true);
    expect(onAnyNull).toHaveBeenLastCalledWith(true);
    release();
    expect(isPortalHoverLocked()).toBe(false);
    expect(onAny).toHaveBeenLastCalledWith(false);
    expect(onAnyNull).toHaveBeenLastCalledWith(false);
    unsubscribe();
    unsubscribeNull();
  });

  it('подписка во время блокировки: слушателя не зовут, состояние даёт isPortalHoverLocked', () => {
    const table = document.createElement('div');
    const release = lockPortalHover(table);
    const onTable = vi.fn();
    const unsubscribe = subscribeToPortalHoverLock(onTable, table);
    expect(isPortalHoverLocked(table)).toBe(true);
    expect(onTable).not.toHaveBeenCalled();
    release();
    expect(onTable).toHaveBeenLastCalledWith(false);
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
