import { cleanup, render, renderHook, screen } from '@testing-library/react';
import React, { useRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';

import { usePopoverFocusGuard } from '../hooks/usePopoverFocusGuard';

/** Разметка как у PopoverBeta: фокусируемый контейнер floating-ui и содержимое внутри. */
const createPopoverDom = () => {
  const container = document.createElement('div');
  container.setAttribute('data-floating-ui-focusable', '');
  container.setAttribute('role', 'dialog');
  container.tabIndex = 0;
  const content = document.createElement('div');
  const button = document.createElement('button');
  const text = document.createElement('span');
  content.append(text, button);
  container.appendChild(content);
  document.body.appendChild(container);
  return { container, content, button, text };
};

const createTable = () => {
  const table = document.createElement('div');
  const cell = document.createElement('td');
  cell.tabIndex = -1;
  const editor = document.createElement('input');
  table.append(cell, editor);
  document.body.appendChild(table);
  return { table, cell, editor };
};

describe('usePopoverFocusGuard: фокус остаётся в таблице', () => {
  afterEach(() => {
    cleanup();
    document.body.innerHTML = '';
  });

  it('фокус на контейнере при открытии возвращается на ячейку', () => {
    const { cell } = createTable();
    const popover = createPopoverDom();
    cell.focus();
    renderHook(() => usePopoverFocusGuard({ current: popover.content }));
    popover.container.focus();
    expect(document.activeElement).toBe(cell);
  });

  it('после нажатия внутри поповера фокус на контейнере не перехватывается', () => {
    const { cell } = createTable();
    const popover = createPopoverDom();
    cell.focus();
    renderHook(() => usePopoverFocusGuard({ current: popover.content }));
    popover.text.dispatchEvent(
      new MouseEvent('pointerdown', { bubbles: true }),
    );
    popover.container.focus();
    expect(document.activeElement).toBe(popover.container);
  });

  it('перехват работает один раз: дальше фокус ведёт пользователь', () => {
    const { cell } = createTable();
    const popover = createPopoverDom();
    cell.focus();
    renderHook(() => usePopoverFocusGuard({ current: popover.content }));
    popover.container.focus();
    expect(document.activeElement).toBe(cell);
    popover.container.focus();
    expect(document.activeElement).toBe(popover.container);
  });

  it('фокус на элементе внутри (autoFocus, Tab) не перехватывается', () => {
    const { cell } = createTable();
    const popover = createPopoverDom();
    cell.focus();
    renderHook(() => usePopoverFocusGuard({ current: popover.content }));
    popover.button.focus();
    expect(document.activeElement).toBe(popover.button);
  });

  it('закрытие с фокусом внутри возвращает фокус на ячейку', () => {
    // Содержимое Popover рисует и удаляет React, как в таблице: иначе React
    // сам вернул бы фокус на кнопку, оставшуюся в документе.
    const GuardedPopover = () => {
      const ref = useRef<HTMLDivElement>(null);
      usePopoverFocusGuard(ref);
      return (
        // Разметка floating-ui: контейнер Popover фокусируемый.
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        <div data-floating-ui-focusable="" role="dialog" tabIndex={0}>
          <div ref={ref}>
            <button type="button">Закрыть</button>
          </div>
        </div>
      );
    };
    const { cell } = createTable();
    cell.focus();
    const { rerender } = render(<GuardedPopover />);
    screen.getByText('Закрыть').focus();
    rerender(<span />);
    expect(document.activeElement).toBe(cell);
  });
});
