import { describe, expect, it, vi } from 'vitest';

import { isCanvasNodeDropdownConfig } from '../dropdownConfig';
import {
  type CanvasPortalClickDetail,
  dispatchCanvasPortalClick,
  isCanvasNodePopoverConfig,
  subscribeToCanvasPortalClick,
} from '../portalClickEvents';

const detail: CanvasPortalClickDetail = {
  x: 1,
  y: 2,
  width: 3,
  height: 4,
  originId: 'node-1',
  source: 'cell',
  priority: 1,
};

describe('portalClickEvents: шина клика по canvas-якорю', () => {
  it('событие на контейнере таблицы получает только его подписчик', () => {
    const tableA = document.createElement('div');
    const tableB = document.createElement('div');
    const listenerA = vi.fn();
    const listenerB = vi.fn();
    const unsubscribeA = subscribeToCanvasPortalClick(listenerA, tableA);
    const unsubscribeB = subscribeToCanvasPortalClick(listenerB, tableB);

    dispatchCanvasPortalClick(detail, tableA);

    expect(listenerA).toHaveBeenCalledTimes(1);
    expect(listenerA).toHaveBeenCalledWith(detail);
    expect(listenerB).not.toHaveBeenCalled();

    unsubscribeA();
    unsubscribeB();
  });

  it('после отписки событие не приходит', () => {
    const table = document.createElement('div');
    const listener = vi.fn();
    const unsubscribe = subscribeToCanvasPortalClick(listener, table);
    unsubscribe();

    dispatchCanvasPortalClick(detail, table);

    expect(listener).not.toHaveBeenCalled();
  });

  it('без контейнера событие идёт на window', () => {
    const listener = vi.fn();
    const unsubscribe = subscribeToCanvasPortalClick(listener);

    dispatchCanvasPortalClick(detail);

    expect(listener).toHaveBeenCalledWith(detail);
    unsubscribe();
  });
});

describe('isCanvasNodePopoverConfig и isCanvasNodeDropdownConfig', () => {
  it('Popover: нужен content или функция renderContent', () => {
    expect(isCanvasNodePopoverConfig({ content: 'текст' })).toBe(true);
    expect(isCanvasNodePopoverConfig({ content: null })).toBe(true);
    expect(isCanvasNodePopoverConfig({ renderContent: () => null })).toBe(
      true
    );
    expect(isCanvasNodePopoverConfig({ content: undefined })).toBe(false);
    expect(isCanvasNodePopoverConfig({ renderContent: 'текст' })).toBe(false);
    expect(isCanvasNodePopoverConfig({})).toBe(false);
    expect(isCanvasNodePopoverConfig(null)).toBe(false);
  });

  it('Dropdown: нужен массив items или функция getItems', () => {
    expect(isCanvasNodeDropdownConfig({ items: [] })).toBe(true);
    expect(isCanvasNodeDropdownConfig({ getItems: () => [] })).toBe(true);
    expect(isCanvasNodeDropdownConfig({ items: undefined })).toBe(false);
    expect(isCanvasNodeDropdownConfig({ items: 'a' })).toBe(false);
    expect(isCanvasNodeDropdownConfig({ getItems: [] })).toBe(false);
    expect(isCanvasNodeDropdownConfig(undefined)).toBe(false);
  });
});
