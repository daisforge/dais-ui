import { cleanup, render, renderHook, screen } from '@testing-library/react';
import React, { useRef } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { useEscapeClose } from '../hooks/useEscapeClose';
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

const pressEscape = (target: Element) => {
  const event = new KeyboardEvent('keydown', { key: 'Escape', bubbles: true });
  target.dispatchEvent(event);
  return event;
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
    // Содержимое поповера рендерит и удаляет React, как в таблице: иначе React
    // сам вернул бы фокус на кнопку, оставшуюся в документе.
    const GuardedPopover = () => {
      const ref = useRef<HTMLDivElement>(null);
      usePopoverFocusGuard(ref);
      return (
        // Разметка floating-ui: контейнер поповера фокусируемый.
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

describe('useEscapeClose: Esc только из своей таблицы', () => {
  let onClose: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    onClose = vi.fn();
  });

  afterEach(() => {
    cleanup();
    document.body.innerHTML = '';
  });

  const renderEscapeHook = (
    table: HTMLElement,
    popoverContent: HTMLElement,
    enabled = true,
  ) =>
    renderHook(() =>
      useEscapeClose({
        enabled,
        onClose,
        tableContainer: table,
        popoverRef: { current: popoverContent },
      }),
    );

  it('Esc из ячейки таблицы закрывает поповер и не доходит до таблицы', () => {
    const { table, cell } = createTable();
    const popover = createPopoverDom();
    renderEscapeHook(table, popover.content);
    const tableListener = vi.fn();
    table.addEventListener('keydown', tableListener);
    pressEscape(cell);
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(tableListener).not.toHaveBeenCalled();
  });

  it('Esc в редакторе ячейки поповер не закрывает', () => {
    const { table, editor } = createTable();
    const popover = createPopoverDom();
    renderEscapeHook(table, popover.content);
    pressEscape(editor);
    expect(onClose).not.toHaveBeenCalled();
  });

  it('Esc внутри поповера оставляем содержимому и PopoverBeta', () => {
    const { table } = createTable();
    const popover = createPopoverDom();
    const ref = renderEscapeHook(table, popover.content);
    const contentListener = vi.fn();
    popover.button.addEventListener('keydown', contentListener);
    pressEscape(popover.button);
    expect(onClose).not.toHaveBeenCalled();
    expect(contentListener).toHaveBeenCalled();
    expect(ref.result.current.current.at).toBeGreaterThan(0);
    expect(ref.result.current.current.closes).toBe(true);
  });

  it('Esc в чужом элементе страницы не трогаем', () => {
    const { table } = createTable();
    const popover = createPopoverDom();
    const foreign = document.createElement('button');
    document.body.appendChild(foreign);
    renderEscapeHook(table, popover.content);
    const foreignListener = vi.fn();
    foreign.addEventListener('keydown', foreignListener);
    pressEscape(foreign);
    expect(onClose).not.toHaveBeenCalled();
    expect(foreignListener).toHaveBeenCalled();
  });

  it('Esc в чужом элементе помечается как не закрывающий', () => {
    const { table } = createTable();
    const popover = createPopoverDom();
    const foreign = document.createElement('button');
    document.body.appendChild(foreign);
    const ref = renderEscapeHook(table, popover.content);
    pressEscape(foreign);
    expect(ref.result.current.current.at).toBeGreaterThan(0);
    expect(ref.result.current.current.closes).toBe(false);
  });

  it('таблица внутри модалки: Esc из ячейки закрывает поповер, а не модалку', () => {
    const modal = document.createElement('div');
    modal.setAttribute('role', 'dialog');
    document.body.appendChild(modal);
    const { table, cell } = createTable();
    modal.appendChild(table);
    const popover = createPopoverDom();
    renderEscapeHook(table, popover.content);
    const modalListener = vi.fn();
    modal.addEventListener('keydown', modalListener);
    pressEscape(cell);
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(modalListener).not.toHaveBeenCalled();
  });

  it('Esc в меню внутри таблицы оставляем меню', () => {
    const { table } = createTable();
    const menu = document.createElement('div');
    menu.setAttribute('role', 'menu');
    const item = document.createElement('button');
    menu.appendChild(item);
    table.appendChild(menu);
    const popover = createPopoverDom();
    renderEscapeHook(table, popover.content);
    pressEscape(item);
    expect(onClose).not.toHaveBeenCalled();
  });

  it('Esc без фокуса (body) закрывает, всплытие не останавливает', () => {
    const { table } = createTable();
    const popover = createPopoverDom();
    renderEscapeHook(table, popover.content);
    const bodyListener = vi.fn();
    document.body.addEventListener('keydown', bodyListener);
    pressEscape(document.body);
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(bodyListener).toHaveBeenCalled();
  });

  it('closeOnEsc: false — Esc поповер не закрывает', () => {
    const { table, cell } = createTable();
    const popover = createPopoverDom();
    renderEscapeHook(table, popover.content, false);
    pressEscape(cell);
    expect(onClose).not.toHaveBeenCalled();
  });
});
