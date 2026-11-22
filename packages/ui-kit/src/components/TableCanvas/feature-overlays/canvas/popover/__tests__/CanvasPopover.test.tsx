import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import type { CanvasNodePopoverConfig } from '../../../../TableGlideInstance';
import { CanvasPopover } from '../components/CanvasPopover';
import { normalizePopoverConfig } from '../utils';

/**
 * CanvasPopover с настоящим PopoverBeta: тот сам ставит фокус. Проверяем, что
 * таблица с этим уживается. Esc проверяет canvas/core.
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

  it('фокус остаётся на ячейке таблицы после открытия', async () => {
    const { table, cell } = createTable();
    cell.focus();
    renderPopover(table);
    await screen.findByText('Внутри');
    expect(document.activeElement).toBe(cell);
  });
});
