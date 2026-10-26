import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import type { CanvasNodePopoverConfig } from '../../TableGlideInstance';
import { CanvasPopover } from '../components/CanvasPopover';
import { normalizePopoverConfig } from '../utils';

/**
 * Переходник на настоящем PopoverBeta: floating-ui внутри него сам слушает Esc
 * на всём документе и сам ставит фокус. Проверяем, что таблица с этим уживается.
 */
describe('CanvasPopover на настоящем PopoverBeta', () => {
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

  const renderPopover = (
    table: HTMLElement,
    overrides: Partial<CanvasNodePopoverConfig> = {},
  ) => {
    const close = vi.fn();
    const config = normalizePopoverConfig({
      content: <button type="button">Внутри</button>,
      ...overrides,
    } as CanvasNodePopoverConfig);
    render(
      <CanvasPopover config={config} close={close} tableContainer={table} />,
    );
    return close;
  };

  const pressEscape = (target: Element) =>
    fireEvent.keyDown(target, { key: 'Escape' });

  it('фокус остаётся на ячейке таблицы после открытия', async () => {
    const { table, cell } = createTable();
    cell.focus();
    renderPopover(table);
    await screen.findByText('Внутри');
    expect(document.activeElement).toBe(cell);
  });

  it('Esc из таблицы закрывает', async () => {
    const { table, cell } = createTable();
    cell.focus();
    const close = renderPopover(table);
    await screen.findByText('Внутри');
    pressEscape(cell);
    expect(close).toHaveBeenCalled();
    close.mock.calls.forEach((call) => expect(call[0]).toBeUndefined());
  });

  it('Esc в чужом элементе страницы не закрывает', async () => {
    const { table } = createTable();
    const foreign = document.createElement('button');
    document.body.appendChild(foreign);
    const close = renderPopover(table);
    await screen.findByText('Внутри');
    pressEscape(foreign);
    expect(close).not.toHaveBeenCalled();
  });

  it('Esc внутри поповера закрывает без пометки клика мимо', async () => {
    const { table } = createTable();
    const close = renderPopover(table);
    pressEscape(await screen.findByText('Внутри'));
    expect(close).toHaveBeenCalled();
    close.mock.calls.forEach((call) => expect(call[0]).toBeUndefined());
  });

  it('closeOnEsc: false: Esc не закрывает ни из таблицы, ни изнутри', async () => {
    const { table, cell } = createTable();
    const close = renderPopover(table, { closeOnEsc: false });
    const inside = await screen.findByText('Внутри');
    pressEscape(cell);
    pressEscape(inside);
    expect(close).not.toHaveBeenCalled();
  });
});
