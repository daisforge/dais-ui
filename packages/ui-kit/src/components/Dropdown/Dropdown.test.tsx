/* eslint-disable no-restricted-imports -- Адаптер и его контракт проверяются непосредственно относительно SDDS. */
import { Dropdown as SDDSDropdown } from '@salutejs/sdds-finai';
import { cleanup, render } from '@testing-library/react';
import type { SyntheticEvent } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { Dropdown } from './Dropdown';
import type { DropdownItemOption, DropdownProps } from './Dropdown.types';

vi.mock('@salutejs/sdds-finai', () => ({ Dropdown: vi.fn(() => null) }));

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

const first = <T,>(values: readonly T[]): T => {
  const value = values[0];
  if (value === undefined) throw new Error('Ожидался непустой список');
  return value;
};
const upstreamProps = () =>
  first(vi.mocked(SDDSDropdown).mock.calls.slice(-1))[0];

describe('Dropdown: совместимость с SDDS 0.367', () => {
  it.each(['top', 'bottom', 'left', 'right'] as const)(
    'сохраняет выравнивание %s по началу стороны',
    (placement) => {
      render(<Dropdown items={[]} placement={placement} />);
      expect(upstreamProps().placement).toBe(`${placement}-start`);
    },
  );

  it.each([
    'auto',
    'top-start',
    'top-center',
    'top-end',
    'bottom-start',
    'bottom-center',
    'bottom-end',
    'left-start',
    'left-center',
    'left-end',
    'right-start',
    'right-center',
    'right-end',
    undefined,
  ] satisfies DropdownProps['placement'][])(
    'передаёт новое placement %s без изменений',
    (placement) => {
      render(<Dropdown items={[]} placement={placement} />);
      expect(upstreamProps().placement).toBe(placement);
    },
  );

  it('нормализует вложенные пункты без изменения входных данных', () => {
    const leaf = Object.freeze({
      value: 'leaf',
      label: 'Leaf',
      placement: 'left' as const,
    });
    const items = [
      {
        value: 'root',
        label: 'Root',
        placement: 'right' as const,
        items: [leaf],
      },
    ];
    render(<Dropdown items={items} />);
    expect(first(upstreamProps().items).placement).toBe('right-start');
    expect(first(first(upstreamProps().items).items ?? []).placement).toBe(
      'left-start',
    );
    expect(first(items).placement).toBe('right');
    expect(leaf.placement).toBe('left');
  });

  it('сохраняет исходные объекты, пользовательские поля и события в callbacks', () => {
    type Item = DropdownItemOption & { action: string };
    const child: Item = {
      value: 'child',
      label: 'Child',
      action: 'edit',
      placement: 'left',
    };
    const root: Item = {
      value: 'root',
      label: 'Root',
      action: 'open',
      items: [child],
    };
    const select = vi.fn();
    const hover = vi.fn();
    const renderItem = vi.fn((item: Item) => item.action);
    const toggle = vi.fn();
    render(
      <Dropdown<Item>
        items={[root]}
        onItemSelect={select}
        onHover={hover}
        renderItem={renderItem}
        onToggle={toggle}
      />,
    );
    const props = upstreamProps();
    const normalizedChild = first(first(props.items).items ?? []);
    const event = {} as SyntheticEvent;
    props.onItemSelect?.(normalizedChild, event);
    props.onHover?.(0, first(props.items));
    expect(props.renderItem?.(normalizedChild)).toBe('edit');
    expect(first(select.mock.calls)[0]).toBe(child);
    expect(first(select.mock.calls)[1]).toBe(event);
    expect(first(hover.mock.calls)).toEqual([0, root]);
    expect(first(renderItem.mock.calls)[0]).toBe(child);
    expect(props.onToggle).toBe(toggle);
  });

  it('подхватывает новый массив items при повторном рендере', () => {
    const select = vi.fn();
    const { rerender } = render(<Dropdown items={[]} onItemSelect={select} />);
    const item = { value: 'new', label: 'New', placement: 'bottom' as const };
    rerender(<Dropdown items={[item]} onItemSelect={select} />);
    upstreamProps().onItemSelect?.(
      first(upstreamProps().items),
      {} as SyntheticEvent,
    );
    expect(first(select.mock.calls)[0]).toBe(item);
  });
});
