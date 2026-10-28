import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import {
  HeaderContext,
  type HeaderContextValueTypeInstance,
} from '../../../../contexts';
import type {
  CanvasNodeDropdownConfig,
  CanvasNodePopoverConfig,
} from '../../../../TableGlideInstance';
import { CanvasDropdown } from '../../dropdown/components/CanvasDropdown';
import { normalizeDropdownConfig } from '../../dropdown/utils';
import { CanvasPopover } from '../../popover/components/CanvasPopover';
import { normalizePopoverConfig } from '../../popover/utils';

const headerContext = {
  rowSize: 'big',
} as unknown as HeaderContextValueTypeInstance<Record<string, unknown>>;

type CloseMock = ReturnType<typeof vi.fn>;

interface OverlayCase {
  name: string;
  /** Рисует окно на настоящей атомарке и возвращает элемент внутри него. */
  renderOverlay: (
    table: HTMLElement,
    close: CloseMock,
    closeOnEsc?: boolean,
  ) => Promise<HTMLElement>;
}

const popoverCase: OverlayCase = {
  name: 'Popover',
  renderOverlay: async (table, close, closeOnEsc = true) => {
    const config = normalizePopoverConfig({
      content: <button type="button">Внутри</button>,
      closeOnEsc,
    } as CanvasNodePopoverConfig);
    render(
      <CanvasPopover config={config} close={close} tableContainer={table} />,
    );
    return screen.findByText('Внутри');
  },
};

const dropdownCase: OverlayCase = {
  name: 'Dropdown',
  renderOverlay: async (table, close, closeOnEsc = true) => {
    const config = normalizeDropdownConfig({
      items: [{ value: 'open', label: 'Открыть' }],
      closeOnEsc,
    } as CanvasNodeDropdownConfig);
    render(
      <HeaderContext.Provider value={headerContext}>
        <CanvasDropdown config={config} close={close} tableContainer={table} />
      </HeaderContext.Provider>,
    );
    return screen.findByText('Открыть');
  },
};

const cases = [popoverCase, dropdownCase];

const createTable = () => {
  const table = document.createElement('div');
  const cell = document.createElement('div');
  cell.tabIndex = -1;
  table.appendChild(cell);
  document.body.appendChild(table);
  return { table, cell };
};

const createForeignInput = () => {
  const input = document.createElement('input');
  document.body.appendChild(input);
  return input;
};

const pressEscape = (target: Element) =>
  fireEvent.keyDown(target, { key: 'Escape' });

const expectClosedByEscape = (close: CloseMock) => {
  expect(close).toHaveBeenCalledTimes(1);
  expect(close.mock.calls[0]?.[0]).toBeUndefined();
};

/**
 * Popover и Dropdown закрываются по Esc одинаково: только через
 * useEscapeClose. Своё закрытие атомарки по Esc переходник пропускает.
 */
describe.each(cases)('$name: Esc', ({ renderOverlay }) => {
  afterEach(() => {
    cleanup();
    document.body.innerHTML = '';
  });

  it('Esc с фокусом в таблице закрывает', async () => {
    const { table, cell } = createTable();
    cell.focus();
    const close = vi.fn();
    await renderOverlay(table, close);
    pressEscape(cell);
    expectClosedByEscape(close);
  });

  it('Esc внутри окна закрывает', async () => {
    const { table } = createTable();
    const close = vi.fn();
    const inside = await renderOverlay(table, close);
    pressEscape(inside);
    expectClosedByEscape(close);
  });

  it('Esc в поле ввода вне таблицы не закрывает', async () => {
    const { table } = createTable();
    const input = createForeignInput();
    input.focus();
    const close = vi.fn();
    await renderOverlay(table, close);
    pressEscape(input);
    expect(close).not.toHaveBeenCalled();
  });

  it('Esc без фокуса (body) закрывает', async () => {
    const { table } = createTable();
    const close = vi.fn();
    await renderOverlay(table, close);
    pressEscape(document.body);
    expectClosedByEscape(close);
  });

  it('closeOnEsc: false: Esc не закрывает нигде', async () => {
    const { table, cell } = createTable();
    const input = createForeignInput();
    const close = vi.fn();
    const inside = await renderOverlay(table, close, false);
    pressEscape(cell);
    pressEscape(inside);
    pressEscape(input);
    pressEscape(document.body);
    expect(close).not.toHaveBeenCalled();
  });

  it('пропущенный Esc не мешает потом закрыть кликом мимо', async () => {
    const { table, cell } = createTable();
    const input = createForeignInput();
    const close = vi.fn();
    await renderOverlay(table, close);
    pressEscape(input);
    fireEvent.pointerDown(cell);
    expect(close).toHaveBeenCalledWith({ outsidePress: true });
  });
});

describe('Esc на body при окнах в двух таблицах', () => {
  afterEach(() => {
    cleanup();
    document.body.innerHTML = '';
  });

  it('закрывает только последнее открытое окно', async () => {
    const closePopover = vi.fn();
    const closeDropdown = vi.fn();
    await popoverCase.renderOverlay(createTable().table, closePopover);
    await dropdownCase.renderOverlay(createTable().table, closeDropdown);
    pressEscape(document.body);
    expect(closePopover).not.toHaveBeenCalled();
    expectClosedByEscape(closeDropdown);
  });
});
