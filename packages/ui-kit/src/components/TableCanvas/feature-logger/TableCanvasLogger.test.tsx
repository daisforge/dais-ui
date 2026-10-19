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

import { useTableCanvasLogger } from './hooks';
import { TableCanvasLogger } from './TableCanvasLogger';
import type {
  TableCanvasLoggerGroupItem,
  TableCanvasLoggerItem,
} from './TableCanvasLogger.types';
import { TableCanvasLoggerList } from './TableCanvasLoggerList';

afterEach(() => cleanup());

const items: TableCanvasLoggerItem[] = [
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

describe('TableCanvasLogger', () => {
  it('в закрытом состоянии показывает только шапку со счётчиками', () => {
    render(<TableCanvasLogger items={items} />);

    expect(screen.getByText('Сообщения системы')).toBeTruthy();
    expect(screen.getByText('Все (4)')).toBeTruthy();
    expect(screen.queryByText('Всё сохранено')).toBeNull();
  });

  it('открывается по клику на шапку и вызывает onOpenChange', () => {
    const onOpenChange = vi.fn();
    render(<TableCanvasLogger items={items} onOpenChange={onOpenChange} />);

    fireEvent.click(screen.getByRole('button', { name: /Сообщения системы/ }));

    expect(onOpenChange).toHaveBeenCalledWith(true);
    expect(screen.getByText('Всё сохранено')).toBeTruthy();
  });

  it('в управляемом режиме не меняет состояние сам', () => {
    const onOpenChange = vi.fn();
    render(
      <TableCanvasLogger
        items={items}
        open={false}
        onOpenChange={onOpenChange}
      />,
    );

    fireEvent.click(screen.getByRole('button', { name: /Сообщения системы/ }));

    expect(onOpenChange).toHaveBeenCalledWith(true);
    expect(screen.queryByText('Всё сохранено')).toBeNull();
  });

  it('выбор фильтра открывает закрытую панель и учитывает вложенные сообщения', () => {
    const { container } = render(
      <TableCanvasLogger items={items} defaultExpandedIds={['group-1']} />,
    );

    expect(screen.queryByText('Всё сохранено')).toBeNull();
    fireEvent.click(
      container.querySelector('button[data-status="warning"]') as Element,
    );

    expect(screen.getByText('Вложенное предупреждение')).toBeTruthy();
    expect(screen.queryByText('Всё сохранено')).toBeNull();
  });

  it('показывает пустое состояние, если сообщений нет', () => {
    render(<TableCanvasLogger items={[]} defaultOpen />);
    expect(screen.getByText('Сообщений нет')).toBeTruthy();
  });

  it('позволяет переопределить тексты', () => {
    render(
      <TableCanvasLogger
        items={[]}
        defaultOpen
        labels={{ title: 'Журнал', empty: 'Пусто' }}
      />,
    );
    expect(screen.getByText('Журнал')).toBeTruthy();
    expect(screen.getByText('Пусто')).toBeTruthy();
  });

  it('hideHeader рендерит только список', () => {
    render(<TableCanvasLogger items={items} hideHeader />);
    expect(screen.queryByText('Сообщения системы')).toBeNull();
    expect(screen.getByText('Всё сохранено')).toBeTruthy();
  });

  it('фильтры и headerExtra не вложены в кнопку раскрытия', () => {
    render(
      <TableCanvasLogger
        items={items}
        headerExtra={<button type="button">Экспорт</button>}
      />,
    );

    const toggle = screen.getByRole('button', { name: /Сообщения системы/ });
    expect(toggle.querySelector('button')).toBeNull();
    expect(toggle.contains(screen.getByText('Все (4)'))).toBe(false);
    expect(toggle.contains(screen.getByText('Экспорт'))).toBe(false);
  });

  it('кнопка раскрытия ссылается на список через aria-controls', () => {
    render(<TableCanvasLogger items={items} defaultOpen />);

    const toggle = screen.getByRole('button', { name: /Сообщения системы/ });
    const listId = toggle.getAttribute('aria-controls');
    expect(listId).toBeTruthy();
    expect(document.getElementById(listId as string)).toBeTruthy();
  });
});

describe('TableCanvasLoggerList', () => {
  it('раскрывает группы с defaultOpen при первом рендере', () => {
    render(
      <TableCanvasLoggerList
        items={[
          { ...(items[0] as TableCanvasLoggerGroupItem), defaultOpen: true },
        ]}
      />,
    );
    expect(screen.getByText('Вложенное предупреждение')).toBeTruthy();
  });

  it('группа раскрывается по клику и показывает вложенные сообщения', () => {
    render(<TableCanvasLoggerList items={items} />);

    expect(screen.queryByText('Вложенное предупреждение')).toBeNull();
    fireEvent.click(
      screen.getByRole('button', { name: /Ошибка скачивания Excel/ }),
    );
    expect(screen.getByText('Вложенное предупреждение')).toBeTruthy();
  });

  it('подробности вложенного сообщения раскрываются (регресс: раньше не работало)', () => {
    render(
      <TableCanvasLoggerList items={items} defaultExpandedIds={['group-1']} />,
    );

    expect(screen.queryByText('Подробный текст вложенного')).toBeNull();
    fireEvent.click(
      screen.getAllByRole('button', { name: 'Подробнее' })[0] as HTMLElement,
    );
    expect(screen.getByText('Подробный текст вложенного')).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Скрыть' })).toBeTruthy();
    expect(screen.queryByText('Описание инфо')).toBeNull();
  });

  it('показывает дату в формате из макета', () => {
    render(
      <TableCanvasLoggerList items={items} defaultExpandedIds={['group-1']} />,
    );
    expect(screen.getByText('00:00:00 01.01.25')).toBeTruthy();
  });

  it('фильтр оставляет группу с подходящим вложенным сообщением', () => {
    render(
      <TableCanvasLoggerList
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
      <TableCanvasLoggerList
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
      <TableCanvasLoggerList
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
    const custom: TableCanvasLoggerItem[] = [
      {
        id: 'x',
        status: 'error',
        title: 'С действием',
        actions: [{ id: 'retry', text: 'Повторить', onClick }],
      },
    ];
    render(<TableCanvasLoggerList items={custom} />);

    fireEvent.click(screen.getByRole('button', { name: 'Повторить' }));
    expect(onClick).toHaveBeenCalledWith(custom[0]);
  });

  it('aria-label действия ставится только для кнопки без текста', () => {
    render(
      <TableCanvasLoggerList
        items={[
          {
            id: 'x',
            status: 'error',
            title: 'С действиями',
            actions: [
              { id: 'retry', text: 'Повторить', title: 'Повторить запрос' },
              { id: 'open', icon: <span />, title: 'Открыть в новой вкладке' },
            ],
          },
        ]}
      />,
    );

    expect(
      screen
        .getByRole('button', { name: 'Повторить' })
        .getAttribute('aria-label'),
    ).toBeNull();
    expect(
      screen.getByRole('button', { name: 'Открыть в новой вкладке' }),
    ).toBeTruthy();
  });

  it('без Clipboard API копирует через execCommand', async () => {
    const clipboard = Object.getOwnPropertyDescriptor(navigator, 'clipboard');
    Object.defineProperty(navigator, 'clipboard', {
      value: undefined,
      configurable: true,
    });
    const execCommand = vi.fn().mockReturnValue(true);
    Object.defineProperty(document, 'execCommand', {
      value: execCommand,
      configurable: true,
    });

    try {
      render(
        <TableCanvasLoggerList
          items={items}
          defaultExpandedIds={['group-1']}
        />,
      );
      fireEvent.click(screen.getByRole('button', { name: 'Скопировать ID' }));

      await waitFor(() =>
        expect(
          screen.getByRole('button', { name: 'Скопировано' }),
        ).toBeTruthy(),
      );
      expect(execCommand).toHaveBeenCalledWith('copy');
    } finally {
      if (clipboard) Object.defineProperty(navigator, 'clipboard', clipboard);
      else delete (navigator as { clipboard?: unknown }).clipboard;
      delete (document as { execCommand?: unknown }).execCommand;
    }
  });

  it('id подробностей уникальны, если список отрисован дважды', () => {
    const list = (
      <TableCanvasLoggerList items={items} defaultExpandedIds={['m-3']} />
    );
    render(
      <>
        {list}
        {list}
      </>,
    );

    const toggles = screen.getAllByRole('button', { name: 'Скрыть' });
    const ids = toggles.map((button) => button.getAttribute('aria-controls'));
    expect(new Set(ids).size).toBe(2);
    ids.forEach((id) =>
      expect(document.getElementById(id as string)).toBeTruthy(),
    );
  });
});

describe('расширяемость', () => {
  it('renderMessage полностью заменяет сообщение и получает defaultRender', () => {
    render(
      <TableCanvasLoggerList
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
      <TableCanvasLoggerList
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

    expect(screen.getByTestId('group').getAttribute('data-open')).toBe('true');
    expect(screen.getByText('Вложенное предупреждение')).toBeTruthy();
  });

  it('statusIcons и renderStatusIcon заменяют иконки', () => {
    render(
      <TableCanvasLoggerList
        items={[{ id: 'x', status: 'error', title: 'Ошибка' }]}
        statusIcons={{ error: <i data-testid="my-error" /> }}
      />,
    );
    expect(screen.getByTestId('my-error')).toBeTruthy();
  });

  it('renderActions получает стандартные кнопки и может их дополнить', () => {
    render(
      <TableCanvasLoggerList
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
      <TableCanvasLoggerList
        items={[{ id: 'x', status: 'info', title: 'Т', date: new Date() }]}
        formatDate={() => null}
      />,
    );
    expect(screen.queryByText(/\d{2}:\d{2}:\d{2}/)).toBeNull();
  });

  it('classes и $css применяются к внутренним элементам', () => {
    const { container } = render(
      <TableCanvasLoggerList
        items={[{ id: 'x', status: 'info', title: 'Т' }]}
        classes={{ message: 'my-message' }}
        className="my-list"
      />,
    );

    expect(container.querySelector('.my-list')).toBeTruthy();
    expect(
      container.querySelector('.rdg-table-logger__message.my-message'),
    ).toBeTruthy();
  });
});

describe('useTableCanvasLogger', () => {
  it('toggleOpen при открытии выбирает «Все», при закрытии сбрасывает фильтр', () => {
    const { result } = renderHook(() =>
      useTableCanvasLogger({ items, defaultFilter: null }),
    );

    act(() => result.current.toggleOpen());
    expect(result.current.open).toBe(true);
    expect(result.current.filter).toBe('all');

    act(() => result.current.toggleOpen());
    expect(result.current.open).toBe(false);
    expect(result.current.filter).toBeNull();
  });

  it('selectFilter открывает панель', () => {
    const { result } = renderHook(() => useTableCanvasLogger({ items }));

    act(() => result.current.selectFilter('error'));
    expect(result.current.open).toBe(true);
    expect(result.current.filter).toBe('error');
  });

  it('expandAll и collapseAll работают по группам', () => {
    const { result } = renderHook(() => useTableCanvasLogger({ items }));

    act(() => result.current.expandAll());
    expect(result.current.expandedIds).toEqual(['group-1']);
    act(() => result.current.collapseAll());
    expect(result.current.expandedIds).toEqual([]);
  });

  it('в управляемом режиме не подменяет значение до ответа родителя', () => {
    const onExpandedIdsChange = vi.fn();
    const { result } = renderHook(() =>
      useTableCanvasLogger({ items, expandedIds: [], onExpandedIdsChange }),
    );

    act(() => result.current.toggleExpanded('group-1'));
    act(() => result.current.toggleExpanded('group-1'));

    expect(onExpandedIdsChange).toHaveBeenNthCalledWith(1, ['group-1']);
    expect(onExpandedIdsChange).toHaveBeenNthCalledWith(2, ['group-1']);
    expect(result.current.expandedIds).toEqual([]);
  });

  it('внешние counts перекрывают вычисленные', () => {
    const { result } = renderHook(() =>
      useTableCanvasLogger({ items, counts: { error: 10 } }),
    );
    expect(result.current.counts.error).toBe(10);
    expect(result.current.counts.warning).toBe(1);
  });
});

describe('доступность', () => {
  it('чипсы фильтров и группа фильтров подписаны', () => {
    render(<TableCanvasLogger items={items} />);

    expect(
      screen.getByRole('group', { name: 'Фильтр по статусу' }),
    ).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Ошибка: 1' })).toBeTruthy();
    expect(
      screen.getByRole('button', { name: 'Предупреждение: 1' }),
    ).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Успешно: 1' })).toBeTruthy();
  });

  it('иконка статуса сообщения озвучивается, а кнопка группы сохраняет видимый заголовок', () => {
    render(
      <TableCanvasLoggerList items={items} defaultExpandedIds={['group-1']} />,
    );

    expect(
      screen.getAllByRole('img', { name: 'Успешно' }).length,
    ).toBeGreaterThan(0);
    const groupButton = screen.getByRole('button', {
      name: /Ошибка скачивания Excel/,
    });
    expect(groupButton.getAttribute('aria-label')).toBeNull();
    expect(groupButton.getAttribute('title')).toBe('Свернуть группу');
  });

  it('сообщает о копировании через live-регион', async () => {
    render(
      <TableCanvasLoggerList
        items={items}
        defaultExpandedIds={['group-1']}
        copyToClipboard={vi.fn().mockResolvedValue(undefined)}
      />,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Скопировать ID' }));

    await waitFor(() =>
      expect(
        screen
          .getAllByRole('status')
          .some((node) => node.textContent === 'Скопировано'),
      ).toBe(true),
    );
  });
});

describe('надёжность', () => {
  it('не показывает «Скопировано», если копирование не удалось', async () => {
    const onCopy = vi.fn();
    const copyToClipboard = vi.fn().mockResolvedValue(false);
    render(
      <TableCanvasLoggerList
        items={items}
        defaultExpandedIds={['group-1']}
        copyToClipboard={copyToClipboard}
        onCopy={onCopy}
      />,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Скопировать ID' }));

    await waitFor(() => expect(copyToClipboard).toHaveBeenCalled());
    expect(onCopy).not.toHaveBeenCalled();
    expect(screen.queryByRole('button', { name: 'Скопировано' })).toBeNull();
  });

  it('пустое описание не показывает кнопку «Подробнее»', () => {
    render(
      <TableCanvasLoggerList
        items={[{ id: 'x', status: 'info', title: 'Т', description: '' }]}
      />,
    );
    expect(screen.queryByRole('button', { name: 'Подробнее' })).toBeNull();
  });

  it('переключение подробностей перерисовывает только это сообщение', () => {
    const many: TableCanvasLoggerItem[] = Array.from(
      { length: 20 },
      (_, index) => ({
        id: `n-${index}`,
        status: 'info',
        title: `Сообщение ${index}`,
        description: 'Описание',
      }),
    );
    const renderMessage = vi.fn(({ defaultRender }) => defaultRender());
    render(
      <TableCanvasLogger
        items={many}
        defaultOpen
        renderMessage={renderMessage}
      />,
    );
    renderMessage.mockClear();

    fireEvent.click(
      screen.getAllByRole('button', { name: 'Подробнее' })[0] as HTMLElement,
    );

    expect(renderMessage).toHaveBeenCalledTimes(1);
    expect(screen.getByText('Описание')).toBeTruthy();
  });

  it('раскрывает группу с defaultOpen, добавленную после монтирования', () => {
    const lateGroup: TableCanvasLoggerGroupItem = {
      id: 'late',
      status: 'warning',
      title: 'Поздняя группа',
      defaultOpen: true,
      items: [{ id: 'late-1', status: 'warning', title: 'Внутри поздней' }],
    };
    const { rerender } = render(<TableCanvasLoggerList items={items} />);
    expect(screen.queryByText('Внутри поздней')).toBeNull();

    rerender(<TableCanvasLoggerList items={[...items, lateGroup]} />);

    expect(screen.getByText('Внутри поздней')).toBeTruthy();
  });

  it('в управляемом expandedIds новые группы с defaultOpen не раскрываются сами', () => {
    const onExpandedIdsChange = vi.fn();
    const lateGroup: TableCanvasLoggerGroupItem = {
      id: 'late',
      status: 'warning',
      title: 'Поздняя группа',
      defaultOpen: true,
      items: [{ id: 'late-1', status: 'warning', title: 'Внутри поздней' }],
    };
    const { rerender } = render(
      <TableCanvasLoggerList
        items={items}
        expandedIds={[]}
        onExpandedIdsChange={onExpandedIdsChange}
      />,
    );

    rerender(
      <TableCanvasLoggerList
        items={[...items, lateGroup]}
        expandedIds={[]}
        onExpandedIdsChange={onExpandedIdsChange}
      />,
    );

    expect(onExpandedIdsChange).not.toHaveBeenCalled();
    expect(screen.queryByText('Внутри поздней')).toBeNull();
  });
});
