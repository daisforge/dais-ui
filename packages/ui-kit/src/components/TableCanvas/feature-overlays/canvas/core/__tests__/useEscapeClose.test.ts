import { cleanup, renderHook } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { isEscapeInProgress, useEscapeClose } from '../hooks/useEscapeClose';

const createTable = () => {
  const table = document.createElement('div');
  const cell = document.createElement('div');
  cell.tabIndex = -1;
  const editor = document.createElement('input');
  table.append(cell, editor);
  document.body.appendChild(table);
  return { table, cell, editor };
};

/** Разметка как у PopoverBeta: контейнер с ролью dialog и содержимое внутри. */
const createWindow = (parent: HTMLElement = document.body) => {
  const container = document.createElement('div');
  container.setAttribute('role', 'dialog');
  const content = document.createElement('div');
  const button = document.createElement('button');
  content.appendChild(button);
  container.appendChild(content);
  parent.appendChild(container);
  return { container, content, button };
};

const pressEscape = (target: EventTarget) =>
  target.dispatchEvent(
    new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }),
  );

const renderEscapeHook = (
  table: HTMLElement,
  overlay: HTMLElement,
  enabled = true,
) => {
  const onClose = vi.fn();
  const hook = renderHook(() =>
    useEscapeClose({
      enabled,
      onClose,
      tableContainer: table,
      getOverlayElement: () => overlay,
    }),
  );
  return { onClose, unmount: hook.unmount };
};

afterEach(() => {
  cleanup();
  document.body.innerHTML = '';
});

describe('useEscapeClose', () => {
  it('Esc из ячейки таблицы закрывает и не доходит до таблицы', () => {
    const { table, cell } = createTable();
    const { onClose } = renderEscapeHook(table, createWindow().container);
    const tableListener = vi.fn();
    table.addEventListener('keydown', tableListener);
    pressEscape(cell);
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(tableListener).not.toHaveBeenCalled();
  });

  it('Esc внутри окна (на его контейнере и на содержимом) закрывает и дальше не идёт', () => {
    const { table } = createTable();
    const view = createWindow();
    const { onClose } = renderEscapeHook(table, view.container);
    const bodyListener = vi.fn();
    document.body.addEventListener('keydown', bodyListener);
    pressEscape(view.container);
    pressEscape(view.button);
    expect(onClose).toHaveBeenCalledTimes(2);
    expect(bodyListener).not.toHaveBeenCalled();
  });

  it('Esc в поле ввода внутри окна оставляем полю', () => {
    const { table } = createTable();
    const view = createWindow();
    const input = document.createElement('input');
    view.content.appendChild(input);
    const { onClose } = renderEscapeHook(table, view.container);
    const inputListener = vi.fn();
    input.addEventListener('keydown', inputListener);
    pressEscape(input);
    expect(onClose).not.toHaveBeenCalled();
    expect(inputListener).toHaveBeenCalled();
  });

  it('Esc в раскрытом списке внутри окна оставляем списку', () => {
    const { table } = createTable();
    const view = createWindow();
    const listbox = document.createElement('div');
    listbox.setAttribute('role', 'listbox');
    const option = document.createElement('div');
    listbox.appendChild(option);
    view.content.appendChild(listbox);
    const { onClose } = renderEscapeHook(table, view.container);
    pressEscape(option);
    expect(onClose).not.toHaveBeenCalled();
  });

  it('Esc в редакторе ячейки не закрывает', () => {
    const { table, editor } = createTable();
    const { onClose } = renderEscapeHook(table, createWindow().container);
    pressEscape(editor);
    expect(onClose).not.toHaveBeenCalled();
  });

  it('Esc в чужом элементе страницы не закрывает и не останавливается', () => {
    const { table } = createTable();
    const foreign = document.createElement('input');
    document.body.appendChild(foreign);
    const { onClose } = renderEscapeHook(table, createWindow().container);
    const foreignListener = vi.fn();
    foreign.addEventListener('keydown', foreignListener);
    pressEscape(foreign);
    expect(onClose).not.toHaveBeenCalled();
    expect(foreignListener).toHaveBeenCalled();
  });

  it('таблица внутри модалки: Esc из ячейки закрывает окно, а не модалку', () => {
    const modal = document.createElement('div');
    modal.setAttribute('role', 'dialog');
    document.body.appendChild(modal);
    const { table, cell } = createTable();
    modal.appendChild(table);
    const { onClose } = renderEscapeHook(table, createWindow().container);
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
    const { onClose } = renderEscapeHook(table, createWindow().container);
    pressEscape(item);
    expect(onClose).not.toHaveBeenCalled();
  });

  it('Esc без фокуса (body) закрывает, всплытие не останавливает', () => {
    const { table } = createTable();
    const { onClose } = renderEscapeHook(table, createWindow().container);
    const bodyListener = vi.fn();
    document.body.addEventListener('keydown', bodyListener);
    pressEscape(document.body);
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(bodyListener).toHaveBeenCalled();
  });

  it('enabled: false: Esc не закрывает ни из таблицы, ни изнутри, ни с body', () => {
    const { table, cell } = createTable();
    const view = createWindow();
    const { onClose } = renderEscapeHook(table, view.container, false);
    pressEscape(cell);
    pressEscape(view.button);
    pressEscape(document.body);
    expect(onClose).not.toHaveBeenCalled();
  });

  it('окно внутри модалки (список Dropdown): Esc в модалке вне таблицы не закрывает, Esc в окне не доходит до модалки', () => {
    const modal = document.createElement('div');
    modal.setAttribute('role', 'dialog');
    const field = document.createElement('input');
    modal.appendChild(field);
    document.body.appendChild(modal);
    const { table, cell } = createTable();
    modal.appendChild(table);
    const view = createWindow(table);
    const { onClose } = renderEscapeHook(table, view.container);
    const modalListener = vi.fn();
    modal.addEventListener('keydown', modalListener);

    pressEscape(field);
    expect(onClose).not.toHaveBeenCalled();
    expect(modalListener).toHaveBeenCalledTimes(1);

    pressEscape(view.button);
    pressEscape(cell);
    expect(onClose).toHaveBeenCalledTimes(2);
    expect(modalListener).toHaveBeenCalledTimes(1);
  });
});

describe('useEscapeClose: несколько таблиц на странице', () => {
  it('Esc на body закрывает только последнее открытое окно', () => {
    const first = renderEscapeHook(
      createTable().table,
      createWindow().container,
    );
    const second = renderEscapeHook(
      createTable().table,
      createWindow().container,
    );
    pressEscape(document.body);
    expect(first.onClose).not.toHaveBeenCalled();
    expect(second.onClose).toHaveBeenCalledTimes(1);
  });

  it('окно с closeOnEsc: false не заслоняет Esc на body для остальных', () => {
    const first = renderEscapeHook(
      createTable().table,
      createWindow().container,
    );
    renderEscapeHook(createTable().table, createWindow().container, false);
    pressEscape(document.body);
    expect(first.onClose).toHaveBeenCalledTimes(1);
  });

  it('после закрытия последнего Esc на body закрывает предыдущее', () => {
    const first = renderEscapeHook(
      createTable().table,
      createWindow().container,
    );
    const second = renderEscapeHook(
      createTable().table,
      createWindow().container,
    );
    second.unmount();
    pressEscape(document.body);
    expect(first.onClose).toHaveBeenCalledTimes(1);
  });

  it('Esc из таблицы закрывает окно только своей таблицы', () => {
    const firstTable = createTable();
    const first = renderEscapeHook(firstTable.table, createWindow().container);
    const second = renderEscapeHook(
      createTable().table,
      createWindow().container,
    );
    pressEscape(firstTable.cell);
    expect(first.onClose).toHaveBeenCalledTimes(1);
    expect(second.onClose).not.toHaveBeenCalled();
  });
});

describe('isEscapeInProgress', () => {
  it('true только пока Esc идёт по документу', () => {
    const { table } = createTable();
    renderEscapeHook(table, createWindow().container);
    const foreign = document.createElement('button');
    document.body.appendChild(foreign);
    const seen: boolean[] = [];
    document.addEventListener(
      'keydown',
      () => seen.push(isEscapeInProgress()),
      {
        once: true,
      },
    );
    pressEscape(foreign);
    expect(seen).toEqual([true]);
    expect(isEscapeInProgress()).toBe(false);
  });
});
