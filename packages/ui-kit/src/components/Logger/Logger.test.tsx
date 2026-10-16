import {
  act,
  cleanup,
  fireEvent,
  render,
  renderHook,
  screen,
  waitFor,
} from '@testing-library/react';
import React from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { useLogger } from './hooks';
import { Logger } from './Logger';
import type { LoggerGroupItem, LoggerItem } from './Logger.types';
import { LoggerList } from './LoggerList';

afterEach(() => cleanup());

const items: LoggerItem[] = [
  {
    id: 'group-1',
    status: 'error',
    title: 'Ошибка скачивания Excel',
    items: [
      {
        id: 'm-1',
        status: 'warning',
        title: 'Вложенное предупреждение',
        description: 'Подробный текст вложенного',
        traceId: 'trace-1',
        code: 'F23',
        date: new Date(2025, 0, 1, 0, 0, 0),
      },
    ],
  },
  { id: 'm-2', status: 'success', title: 'Всё сохранено' },
  {
    id: 'm-3',
    status: 'info',
    title: 'Информация',
    description: 'Описание инфо',
  },
];

describe('Logger', () => {
  it('в закрытом состоянии показывает только шапку со счётчиками', () => {
    render(<Logger items={items} />);

    expect(screen.getByText('Сообщения системы')).toBeTruthy();
    expect(screen.getByText('Все (4)')).toBeTruthy();
    expect(screen.queryByText('Всё сохранено')).toBeNull();
  });

  it('открывается по клику на шапку и вызывает onOpenChange', () => {
    const onOpenChange = vi.fn();
    render(<Logger items={items} onOpenChange={onOpenChange} />);

    fireEvent.click(screen.getByRole('button', { name: /Сообщения системы/ }));

    expect(onOpenChange).toHaveBeenCalledWith(true);
    expect(screen.getByText('Всё сохранено')).toBeTruthy();
  });

  it('в управляемом режиме не меняет состояние сам', () => {
    const onOpenChange = vi.fn();
    render(<Logger items={items} open={false} onOpenChange={onOpenChange} />);

    fireEvent.click(screen.getByRole('button', { name: /Сообщения системы/ }));

    expect(onOpenChange).toHaveBeenCalledWith(true);
    expect(screen.queryByText('Всё сохранено')).toBeNull();
  });

  it('выбор фильтра открывает закрытую панель и учитывает вложенные сообщения', () => {
    const { container } = render(
      <Logger items={items} defaultExpandedIds={['group-1']} />,
    );

    expect(screen.queryByText('Всё сохранено')).toBeNull();
    fireEvent.click(
      container.querySelector('button[data-status="warning"]') as Element,
    );

    expect(screen.getByText('Вложенное предупреждение')).toBeTruthy();
    expect(screen.queryByText('Всё сохранено')).toBeNull();
  });

  it('показывает пустое состояние, если сообщений нет', () => {
    render(<Logger items={[]} defaultOpen />);
    expect(screen.getByText('Сообщений нет')).toBeTruthy();
  });

  it('позволяет переопределить тексты', () => {
    render(
      <Logger
        items={[]}
        defaultOpen
        labels={{ title: 'Журнал', empty: 'Пусто' }}
      />,
    );
    expect(screen.getByText('Журнал')).toBeTruthy();
    expect(screen.getByText('Пусто')).toBeTruthy();
  });

  it('hideHeader рендерит только список', () => {
    render(<Logger items={items} hideHeader />);
    expect(screen.queryByText('Сообщения системы')).toBeNull();
    expect(screen.getByText('Всё сохранено')).toBeTruthy();
  });
});

describe('LoggerList', () => {
  it('раскрывает группы с defaultOpen при первом рендере', () => {
    render(
      <LoggerList
        items={[{ ...(items[0] as LoggerGroupItem), defaultOpen: true }]}
      />,
    );
    expect(screen.getByText('Вложенное предупреждение')).toBeTruthy();
  });

  it('группа раскрывается по клику и показывает вложенные сообщения', () => {
    render(<LoggerList items={items} />);

    expect(screen.queryByText('Вложенное предупреждение')).toBeNull();
    fireEvent.click(
      screen.getByRole('button', { name: /Ошибка скачивания Excel/ }),
    );
    expect(screen.getByText('Вложенное предупреждение')).toBeTruthy();
  });

  it('подробности вложенного сообщения раскрываются (регресс: раньше не работало)', () => {
    render(<LoggerList items={items} defaultExpandedIds={['group-1']} />);

    expect(screen.queryByText('Подробный текст вложенного')).toBeNull();
    fireEvent.click(screen.getAllByRole('button', { name: 'Подробнее' })[0]);
    expect(screen.getByText('Подробный текст вложенного')).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Скрыть' })).toBeTruthy();
    expect(screen.queryByText('Описание инфо')).toBeNull();
  });

  it('показывает дату в формате из макета', () => {
    render(<LoggerList items={items} defaultExpandedIds={['group-1']} />);
    expect(screen.getByText('00:00:00 01.01.25')).toBeTruthy();
  });

  it('фильтр оставляет группу с подходящим вложенным сообщением', () => {
    render(
      <LoggerList
        items={items}
        filter="warning"
        defaultExpandedIds={['group-1']}
      />,
    );

    expect(screen.getByText('Вложенное предупреждение')).toBeTruthy();
    expect(screen.queryByText('Всё сохранено')).toBeNull();
  });

  it('копирует traceId через copyToClipboard и показывает обратную связь', async () => {
    const copyToClipboard = vi.fn().mockResolvedValue(undefined);
    const onCopy = vi.fn();
    render(
      <LoggerList
        items={items}
        defaultExpandedIds={['group-1']}
        copyToClipboard={copyToClipboard}
        onCopy={onCopy}
      />,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Скопировать ID' }));

    await waitFor(() =>
      expect(screen.getByRole('button', { name: 'Скопировано' })).toBeTruthy(),
    );
    expect(copyToClipboard).toHaveBeenCalledWith('trace-1');
    expect(onCopy).toHaveBeenCalledWith(
      'traceId',
      'trace-1',
      expect.objectContaining({ id: 'm-1' }),
    );
  });

  it('кнопка кода вызывает onCodeClick', () => {
    const onCodeClick = vi.fn();
    render(
      <LoggerList
        items={items}
        defaultExpandedIds={['group-1']}
        onCodeClick={onCodeClick}
      />,
    );

    fireEvent.click(screen.getByRole('button', { name: 'F23' }));
    expect(onCodeClick).toHaveBeenCalledWith(
      'F23',
      expect.objectContaining({ id: 'm-1' }),
    );
  });

  it('рендерит кастомные действия сообщения', () => {
    const onClick = vi.fn();
    const custom: LoggerItem[] = [
      {
        id: 'x',
        status: 'error',
        title: 'С действием',
        actions: [{ id: 'retry', text: 'Повторить', onClick }],
      },
    ];
    render(<LoggerList items={custom} />);

    fireEvent.click(screen.getByRole('button', { name: 'Повторить' }));
    expect(onClick).toHaveBeenCalledWith(custom[0]);
  });
});

describe('расширяемость', () => {
  it('renderMessage полностью заменяет сообщение и получает defaultRender', () => {
    render(
      <LoggerList
        items={[{ id: 'x', status: 'info', title: 'Исходный' }]}
        renderMessage={({ item, defaultRender }) => (
          <section data-testid="custom">
            {item.id}
            {defaultRender()}
          </section>
        )}
      />,
    );

    expect(screen.getByTestId('custom').textContent).toContain('Исходный');
  });

  it('renderGroup получает уже отрисованных детей', () => {
    render(
      <LoggerList
        items={items}
        defaultExpandedIds={['group-1']}
        renderGroup={({ item, open, children }) => (
          <div data-testid="group" data-open={String(open)}>
            {item.id}
            {children}
          </div>
        )}
      />,
    );

    expect(screen.getByTestId('group').dataset.open).toBe('true');
    expect(screen.getByText('Вложенное предупреждение')).toBeTruthy();
  });

  it('statusIcons и renderStatusIcon заменяют иконки', () => {
    render(
      <LoggerList
        items={[{ id: 'x', status: 'error', title: 'Ошибка' }]}
        statusIcons={{ error: <i data-testid="my-error" /> }}
      />,
    );
    expect(screen.getByTestId('my-error')).toBeTruthy();
  });

  it('renderActions получает стандартные кнопки и может их дополнить', () => {
    render(
      <LoggerList
        items={[{ id: 'x', status: 'info', title: 'Т', description: 'Д' }]}
        renderActions={(_item, defaults) => (
          <>
            {defaults}
            <span>доп. кнопка</span>
          </>
        )}
      />,
    );

    expect(screen.getByRole('button', { name: 'Подробнее' })).toBeTruthy();
    expect(screen.getByText('доп. кнопка')).toBeTruthy();
  });

  it('formatDate может скрыть дату', () => {
    render(
      <LoggerList
        items={[{ id: 'x', status: 'info', title: 'Т', date: new Date() }]}
        formatDate={() => null}
      />,
    );
    expect(screen.queryByText(/\d{2}:\d{2}:\d{2}/)).toBeNull();
  });

  it('classes и $css применяются к внутренним элементам', () => {
    const { container } = render(
      <LoggerList
        items={[{ id: 'x', status: 'info', title: 'Т' }]}
        classes={{ message: 'my-message' }}
        className="my-list"
      />,
    );

    expect(container.querySelector('.my-list')).toBeTruthy();
    expect(container.querySelector('.logger__message.my-message')).toBeTruthy();
  });
});

describe('useLogger', () => {
  it('toggleOpen при открытии выбирает «Все», при закрытии сбрасывает фильтр', () => {
    const { result } = renderHook(() =>
      useLogger({ items, defaultFilter: null }),
    );

    act(() => result.current.toggleOpen());
    expect(result.current.open).toBe(true);
    expect(result.current.filter).toBe('all');

    act(() => result.current.toggleOpen());
    expect(result.current.open).toBe(false);
    expect(result.current.filter).toBeNull();
  });

  it('selectFilter открывает панель', () => {
    const { result } = renderHook(() => useLogger({ items }));

    act(() => result.current.selectFilter('error'));
    expect(result.current.open).toBe(true);
    expect(result.current.filter).toBe('error');
  });

  it('expandAll и collapseAll работают по группам', () => {
    const { result } = renderHook(() => useLogger({ items }));

    act(() => result.current.expandAll());
    expect(result.current.expandedIds).toEqual(['group-1']);
    act(() => result.current.collapseAll());
    expect(result.current.expandedIds).toEqual([]);
  });

  it('внешние counts перекрывают вычисленные', () => {
    const { result } = renderHook(() =>
      useLogger({ items, counts: { error: 10 } }),
    );
    expect(result.current.counts.error).toBe(10);
    expect(result.current.counts.warning).toBe(1);
  });
});
