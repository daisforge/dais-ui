import { act, renderHook } from '@testing-library/react';
import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';

import { useContextMenuValues } from '../useContextMenuValues';

type Row = { id: number };

const ITEMS = [{ value: 'edit', label: 'Редактировать' }];

const createEvent = () =>
  ({
    preventDefault: vi.fn(),
    bounds: { x: 0, y: 0 },
    localEventX: 10,
    localEventY: 20,
  } as never);

const setup = (tableConfig: object) =>
  renderHook(
    (config: object) =>
      useContextMenuValues<object, number, Row>({
        tableConfig: config as never,
        popover: { state: { isOpen: false } } as never,
      }),
    { initialProps: tableConfig },
  );

const CELL_INFO = {
  row: { id: 1 },
  column: { key: 'name' },
  ctxs: {},
  refTable: {},
} as never;

const openCell = (result: ReturnType<typeof setup>['result']) =>
  act(() => {
    result.current.openCellContextMenu(
      [0, 0] as never,
      createEvent(),
      CELL_INFO,
    );
  });

const openHeader = (result: ReturnType<typeof setup>['result']) =>
  act(() => {
    result.current.openHeaderContextMenu(0, createEvent(), {
      column: { key: 'name' },
      ctxs: {},
      refTable: {},
    } as never);
  });

describe('useContextMenuValues', () => {
  it('onOpen ячейки вызывается при каждом открытии, даже если пункты уже есть', () => {
    const onOpen = vi.fn();
    const { result } = setup({
      onCellContextMenuDropdown: {
        type: 'dropdown',
        getDropdownItems: () => ITEMS,
        onOpen,
      },
    });

    openCell(result);
    act(() => result.current.close());
    openCell(result);

    expect(onOpen).toHaveBeenCalledTimes(2);
    expect(onOpen).toHaveBeenLastCalledWith(
      expect.objectContaining({ row: { id: 1 } }),
    );
  });

  it('onOpen заголовка вызывается при каждом открытии, даже если пункты уже есть', () => {
    const onOpen = vi.fn();
    const { result } = setup({
      onHeaderContextMenuDropdown: {
        type: 'dropdown',
        getDropdownItems: () => ITEMS,
        onOpen,
      },
    });

    openHeader(result);
    act(() => result.current.close());
    openHeader(result);

    expect(onOpen).toHaveBeenCalledTimes(2);
  });

  it('с onOpen пункты перечитываются, пока меню открыто', () => {
    const configWith = (items: typeof ITEMS) => ({
      onCellContextMenuDropdown: {
        type: 'dropdown',
        getDropdownItems: () => items,
        onOpen: () => undefined,
      },
    });
    const { result, rerender } = setup(configWith([]));

    openCell(result);
    expect(result.current.isOpen).toBe(true);
    expect(result.current.items).toEqual([]);

    rerender(configWith(ITEMS));
    expect(result.current.items).toEqual(ITEMS);
  });

  it('без onOpen меню открывается с пунктами из getDropdownItems', () => {
    const { result } = setup({
      onCellContextMenuDropdown: {
        type: 'dropdown',
        getDropdownItems: () => ITEMS,
      },
    });

    openCell(result);

    expect(result.current.isOpen).toBe(true);
    expect(result.current.items).toEqual(ITEMS);
  });

  it('без onOpen и без пунктов меню не открывается', () => {
    const { result } = setup({
      onCellContextMenuDropdown: {
        type: 'dropdown',
        getDropdownItems: () => [],
      },
    });

    openCell(result);

    expect(result.current.isOpen).toBe(false);
  });

  it('с onOpen открытие отменяет системное меню браузера', () => {
    const { result } = setup({
      onCellContextMenuDropdown: {
        type: 'dropdown',
        getDropdownItems: () => [],
        onOpen: () => undefined,
      },
    });
    const event = createEvent() as { preventDefault: () => void };

    act(() => {
      result.current.openCellContextMenu(
        [0, 0] as never,
        event as never,
        CELL_INFO,
      );
    });

    expect(event.preventDefault).toHaveBeenCalled();
  });
});

describe('useContextMenuValues: настройки вида при двух меню', () => {
  const config = {
    onCellContextMenuDropdown: {
      type: 'dropdown',
      getDropdownItems: () => ITEMS,
      listWidth: '240px',
      beforeList: 'ошибка ячейки',
    },
    onHeaderContextMenuDropdown: {
      type: 'dropdown',
      getDropdownItems: () => ITEMS,
      listWidth: '400px',
    },
  };

  it('меню заголовка берёт свои настройки, а не настройки ячейки', () => {
    const { result } = setup(config);

    openHeader(result);

    expect(result.current.listWidth).toBe('400px');
    expect(result.current.beforeList).toBeUndefined();
  });

  it('меню ячейки берёт свои настройки', () => {
    const { result } = setup(config);

    openCell(result);

    expect(result.current.listWidth).toBe('240px');
    expect(result.current.beforeList).toBe('ошибка ячейки');
  });
});

const STALE_ITEMS = [{ value: 'old', label: 'Действие для прежнего статуса' }];
const LOADING_ITEMS = [{ value: '__skeleton', label: '' }];

type ConsumerMenu = {
  status: 'loading' | 'success';
  items: typeof STALE_ITEMS;
  rowId: number | null;
};

// Потребитель из обращения: пункты прошлого открытия строки 1 уже загружены
// и хранятся в его состоянии, onOpen переводит состояние в загрузку
const useConsumerMenu = (openedItems: unknown[]) => {
  const [menu, setMenu] = useState<ConsumerMenu>({
    status: 'success',
    items: STALE_ITEMS,
    rowId: 1,
  });
  const values = useContextMenuValues<object, number, Row>({
    tableConfig: {
      onCellContextMenuDropdown: {
        type: 'dropdown',
        onOpen: ({ row }: { row: Row }) =>
          setMenu({ status: 'loading', items: [], rowId: row.id }),
        getDropdownItems: ({ row }: { row: Row }) => {
          if (menu.rowId !== row.id) return [];
          return menu.status === 'loading' ? LOADING_ITEMS : menu.items;
        },
      },
    } as never,
    popover: { state: { isOpen: false } } as never,
  });
  if (values.isOpen) openedItems.push(values.items);
  return values;
};

describe('useContextMenuValues: повторное открытие на той же строке', () => {
  it('меню сразу показывает загрузку, а не пункты прошлого открытия', () => {
    const openedItems: unknown[] = [];
    const { result } = renderHook(() => useConsumerMenu(openedItems));

    openCell(result as never);

    expect(openedItems).toEqual([LOADING_ITEMS]);
  });

  it('пункты прошлого открытия не появляются, даже если React не объединяет обновления', () => {
    const openedItems: unknown[] = [];
    const { result } = renderHook(() => useConsumerMenu(openedItems), {
      legacyRoot: true,
    });
    // Glide зовёт обработчик из своего слушателя contextmenu, вне act: при
    // ReactDOM.render каждое обновление состояния отрисовывается сразу
    const scope = globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean };
    const actEnvironment = scope.IS_REACT_ACT_ENVIRONMENT;
    scope.IS_REACT_ACT_ENVIRONMENT = false;
    try {
      result.current.openCellContextMenu(
        [0, 0] as never,
        createEvent(),
        CELL_INFO,
      );
    } finally {
      scope.IS_REACT_ACT_ENVIRONMENT = actEnvironment;
    }

    expect(openedItems).not.toContainEqual(STALE_ITEMS);
    expect(openedItems.at(-1)).toEqual(LOADING_ITEMS);
  });
});
