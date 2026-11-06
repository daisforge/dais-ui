import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { Dropdown } from './Dropdown';
import type { DropdownItemOption } from './Dropdown.types';

afterEach(cleanup);

describe('Dropdown: настоящие вложенные меню SDDS', () => {
  it('возвращает исходные пункты после фильтрации и клонирования SDDS', async () => {
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
    const select = vi.fn();
    const hover = vi.fn();
    const renderItem = vi.fn((item: Item) => (
      <span>
        {item.label}: {item.action}
      </span>
    ));
    render(
      <Dropdown<Item>
        items={[parent, emptyParent]}
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
    expect(renderItem.mock.calls.some(([item]) => item === parent)).toBe(true);
    fireEvent.mouseEnter(parentElement);
    expect(hover).toHaveBeenCalledWith(0, parent);
    fireEvent.click(parentElement);
    expect(select).toHaveBeenLastCalledWith(parent, expect.anything());
    const childElement = await screen.findByRole('option', {
      name: 'Дочерний: edit',
    });
    fireEvent.click(childElement);
    expect(select).toHaveBeenLastCalledWith(child, expect.anything());
    fireEvent.click(
      screen.getByRole('option', { name: 'Без видимых потомков: empty' }),
    );
    expect(select).toHaveBeenLastCalledWith(emptyParent, expect.anything());
    expect(parent.items).toEqual([child, hidden]);
    expect(parent.placement).toBe('right');
    expect(screen.queryByText('Скрытый: hide')).toBeNull();
  });
});
