import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import React from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import {
  HeaderContext,
  type HeaderContextValueTypeInstance,
} from '../../contexts';
import type { CanvasNodeDropdownConfig } from '../../TableGlideInstance';
import { CanvasDropdown } from '../components/CanvasDropdown';
import { normalizeDropdownConfig } from '../utils';

const ITEMS = [
  { value: 'open', label: 'Открыть' },
  { value: 'copy', label: 'Копировать' },
];

const headerContext = {
  rowSize: 'big',
} as unknown as HeaderContextValueTypeInstance<Record<string, unknown>>;

/**
 * Переходник на настоящем Dropdown из дизайн-системы: он управляемый через
 * `alwaysOpened`, закрытие делаем сами. Проверяем, что сигналы от атомарки
 * (выбор пункта) и от таблицы (клик мимо, Esc) доходят до close.
 */
describe('CanvasDropdown на настоящем Dropdown', () => {
  afterEach(() => {
    cleanup();
    document.body.innerHTML = '';
  });

  const createTable = () => {
    const table = document.createElement('div');
    const cell = document.createElement('div');
    cell.tabIndex = -1;
    table.appendChild(cell);
    document.body.appendChild(table);
    return { table, cell };
  };

  const renderDropdown = (
    table: HTMLElement,
    overrides: Partial<CanvasNodeDropdownConfig> = {},
  ) => {
    const close = vi.fn();
    const config = normalizeDropdownConfig({
      items: ITEMS,
      ...overrides,
    } as CanvasNodeDropdownConfig);
    render(
      <HeaderContext.Provider value={headerContext}>
        <CanvasDropdown config={config} close={close} tableContainer={table} />
      </HeaderContext.Provider>,
    );
    return close;
  };

  it('показывает пункты сразу после открытия', async () => {
    const { table } = createTable();
    renderDropdown(table);
    expect(await screen.findByText('Открыть')).toBeTruthy();
    expect(screen.getByText('Копировать')).toBeTruthy();
  });

  it('выбор пункта вызывает onItemSelect с close и закрывает дропдаун', async () => {
    const { table } = createTable();
    const onItemSelect = vi.fn();
    const close = renderDropdown(table, { onItemSelect });
    fireEvent.click(await screen.findByText('Копировать'));
    expect(onItemSelect).toHaveBeenCalledTimes(1);
    expect(onItemSelect.mock.calls[0]?.[0]).toMatchObject({ value: 'copy' });
    expect(typeof onItemSelect.mock.calls[0]?.[1]?.close).toBe('function');
    expect(close).toHaveBeenCalled();
  });

  it('при closeOnSelect: false выбор пункта дропдаун не закрывает', async () => {
    const { table } = createTable();
    const close = renderDropdown(table, { closeOnSelect: false });
    fireEvent.click(await screen.findByText('Открыть'));
    expect(close).not.toHaveBeenCalled();
  });

  it('нажатие вне списка закрывает как клик мимо, внутри списка нет', async () => {
    const { table, cell } = createTable();
    const close = renderDropdown(table);
    const item = await screen.findByText('Открыть');
    fireEvent.pointerDown(item);
    expect(close).not.toHaveBeenCalled();
    fireEvent.pointerDown(cell);
    expect(close).toHaveBeenCalledWith({ outsidePress: true });
  });

  it('при closeOnOutsideClick: false нажатие вне списка не закрывает', async () => {
    const { table, cell } = createTable();
    const close = renderDropdown(table, { closeOnOutsideClick: false });
    await screen.findByText('Открыть');
    fireEvent.pointerDown(cell);
    expect(close).not.toHaveBeenCalled();
  });

  it('Esc из таблицы закрывает', async () => {
    const { table, cell } = createTable();
    cell.focus();
    const close = renderDropdown(table);
    await screen.findByText('Открыть');
    fireEvent.keyDown(cell, { key: 'Escape' });
    expect(close).toHaveBeenCalled();
  });

  it('пока getItems грузится, показывает пункт загрузки, потом пункты', async () => {
    const { table } = createTable();
    let resolve: (items: typeof ITEMS) => void = () => {};
    renderDropdown(table, {
      items: undefined,
      getItems: () =>
        new Promise<typeof ITEMS>((res) => {
          resolve = res;
        }),
    });
    expect(await screen.findByText('Загрузка...')).toBeTruthy();
    await act(async () => {
      resolve(ITEMS);
    });
    expect(await screen.findByText('Открыть')).toBeTruthy();
    expect(screen.queryByText('Загрузка...')).toBeNull();
  });

  it('ошибка загрузки без renderError показывает пункт ошибки', async () => {
    const { table } = createTable();
    renderDropdown(table, {
      items: undefined,
      getItems: () => Promise.reject(new Error('сеть')),
    });
    expect(await screen.findByText('Не удалось загрузить')).toBeTruthy();
  });

  it('renderError получает ошибку и retry', async () => {
    const { table } = createTable();
    const getItems = vi
      .fn()
      .mockRejectedValueOnce(new Error('сеть'))
      .mockResolvedValueOnce(ITEMS);
    renderDropdown(table, {
      items: undefined,
      getItems,
      renderError: ({ error, retry }) => (
        <button type="button" onClick={retry}>
          Повторить: {(error as Error).message}
        </button>
      ),
    });
    fireEvent.click(await screen.findByText('Повторить: сеть'));
    expect(await screen.findByText('Открыть')).toBeTruthy();
    expect(getItems).toHaveBeenCalledTimes(2);
  });
});
