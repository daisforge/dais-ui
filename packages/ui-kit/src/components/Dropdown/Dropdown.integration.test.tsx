import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { Dropdown, type DropdownItemOption } from './index';

afterEach(cleanup);

describe('Dropdown: настоящие вложенные меню SDDS', () => {
  it('сохраняет пользовательские поля и исходные данные при фильтрации вложенных пунктов', async () => {
    type Item = DropdownItemOption & { action: string };
    const child: Item = {
      value: 'child',
      label: 'Дочерний',
      action: 'edit',
      placement: 'left',
    };
    const hidden: Item = {
      value: 'hidden',
      label: 'Скрытый',
      action: 'hide',
      hidden: true,
    };
    const parent: Item = {
      value: 'parent',
      label: 'Родительский',
      action: 'open',
      placement: 'right',
      items: [child, hidden],
    };
    // После удаления скрытых children SDDS превращает этот клон в обычный пункт.
    const emptyParent: Item = {
      value: 'empty',
      label: 'Без видимых потомков',
      action: 'empty',
      items: [hidden],
    };
    const items = [parent, emptyParent];
    const originalItems = structuredClone(items);
    const visibleParent = { ...parent, items: [child] };
    const visibleEmptyParent = { ...emptyParent, items: undefined };
    const select = vi.fn();
    const hover = vi.fn();
    const renderItem = vi.fn((item: Item) => (
      <span>
        {item.label}: {item.action}
      </span>
    ));
    render(
      <Dropdown<Item>
        items={items}
        alwaysOpened
        closeOnSelect={false}
        onItemSelect={select}
        onHover={hover}
        renderItem={renderItem}
      >
        <button type="button">Меню</button>
      </Dropdown>,
    );
    const parentElement = await screen.findByRole('option', {
      name: 'Родительский',
    });
    expect(renderItem).toHaveBeenCalledWith(visibleParent);
    fireEvent.mouseEnter(parentElement);
    expect(hover).toHaveBeenCalledWith(0, visibleParent);
    fireEvent.click(parentElement);
    expect(select).toHaveBeenLastCalledWith(visibleParent, expect.anything());
    const childElement = await screen.findByRole('option', {
      name: 'Дочерний: edit',
    });
    fireEvent.click(childElement);
    expect(select).toHaveBeenLastCalledWith(child, expect.anything());
    fireEvent.click(
      screen.getByRole('option', { name: 'Без видимых потомков: empty' }),
    );
    expect(select).toHaveBeenLastCalledWith(
      visibleEmptyParent,
      expect.anything(),
    );
    expect(items).toEqual(originalItems);
    expect(screen.queryByText('Скрытый: hide')).toBeNull();
  });
});
