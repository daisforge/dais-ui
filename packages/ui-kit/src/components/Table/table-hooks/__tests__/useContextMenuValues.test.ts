import { act, renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { useContextMenuValues } from '../useContextMenuValues';

// Стили таблицы тянут за собой половину библиотеки, хуку нужны только имена классов
vi.mock('../../styles', () => ({
  tableClassNames: { table: 'table', headerRow: 'header-row' },
}));

type Row = { id: number };

const ITEMS = [{ value: 'edit', label: 'Редактировать' }];

const setup = (tableConfig: object) =>
  renderHook(() =>
    useContextMenuValues<object, number, Row>({
      tableConfig: tableConfig as never,
      refTableX: { current: null },
    }),
  );

const openCell = (result: ReturnType<typeof setup>['result']) =>
  act(() => {
    result.current.openCellContextMenu(
      { row: { id: 1 }, column: { key: 'name' }, selectCell: vi.fn() } as never,
      {
        preventDefault: vi.fn(),
        clientX: 10,
        clientY: 20,
        currentTarget: document.createElement('div'),
      } as never,
    );
  });

describe('useContextMenuValues (Table)', () => {
  it('onOpen ячейки вызывается при каждом открытии, даже если пункты уже есть', () => {
    const onOpen = vi.fn();
    const { result } = setup({
      onCellContextMenuDropDown: {
        type: 'dropdown',
        getDropDownItems: () => ITEMS,
        onOpen,
      },
    });

    openCell(result);
    act(() => result.current.close());
    openCell(result);

    expect(onOpen).toHaveBeenCalledTimes(2);
    expect(result.current.isOpen).toBe(true);
  });

  it('без onOpen меню открывается с пунктами из getDropDownItems', () => {
    const { result } = setup({
      onCellContextMenuDropDown: {
        type: 'dropdown',
        getDropDownItems: () => ITEMS,
      },
    });

    openCell(result);

    expect(result.current.isOpen).toBe(true);
    expect(result.current.items).toEqual(ITEMS);
  });
});

describe('useContextMenuValues (Table): настройки вида при двух меню', () => {
  const config = {
    onCellContextMenuDropDown: {
      type: 'dropdown',
      getDropDownItems: () => ITEMS,
      listWidth: '240px',
      beforeList: 'ошибка ячейки',
    },
    onHeaderContextMenuDropDown: {
      type: 'dropdown',
      getDropDownItems: () => ITEMS,
      listWidth: '400px',
    },
  };

  const openHeader = (result: ReturnType<typeof setup>['result']) => {
    const header = document.createElement('div');
    header.setAttribute('role', 'columnheader');
    // В jsdom нет innerText, а по нему хук берёт подпись колонки
    Object.defineProperty(header, 'innerText', { value: 'Название' });
    act(() => {
      result.current.openHeaderContextMenu({
        target: header,
        currentTarget: header,
        clientX: 10,
        clientY: 20,
        preventDefault: vi.fn(),
      } as never);
    });
  };

  it('меню заголовка берёт свои настройки, а не настройки ячейки', () => {
    const { result } = setup(config);

    openHeader(result);

    expect(result.current.isOpen).toBe(true);
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
