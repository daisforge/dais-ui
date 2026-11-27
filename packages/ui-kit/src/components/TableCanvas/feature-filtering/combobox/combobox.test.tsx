import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { ComboboxX } from './combobox';
import { TableFilterSelectAll } from './filter-controls';

const options = [
  { text: 'Первый', value: 'a' },
  { text: 'Второй', value: 'b' },
];

describe('Множественный фильтр заголовка', () => {
  it('показывает первый пункт при отсутствующем значении и записывает выбор только по клику', () => {
    const onChange = vi.fn();
    render(
      <ComboboxX
        mode="multiple"
        options={options}
        value={undefined}
        onChange={onChange}
      />,
    );
    expect(screen.getByRole('textbox')).toBeDefined();
    expect(screen.getByRole('checkbox', { name: 'Выбрать всё' })).toBeDefined();
    expect(onChange).not.toHaveBeenCalled();
    fireEvent.click(screen.getByText('Первый'));
    expect(onChange.mock.calls).toEqual([[['a']]]);
  });

  it('позволяет выбрать вариант с клавиатуры без верхнего слота', () => {
    const onChange = vi.fn();
    render(
      <ComboboxX
        mode="multiple"
        options={options}
        listControls="slots"
        onChange={onChange}
      />,
    );
    const first = screen.getByRole('option', { name: 'Первый' });
    const second = screen.getByRole('option', { name: 'Второй' });
    first.focus();
    fireEvent.keyDown(first, { key: 'ArrowDown' });
    expect(document.activeElement).toBe(second);
    fireEvent.keyDown(second, { key: 'Enter' });
    expect(onChange.mock.calls).toEqual([[['b']]]);
  });

  it.each([
    { value: undefined, checked: false, mixed: false },
    { value: [], checked: false, mixed: false },
    { value: ['a'], checked: false, mixed: true },
    { value: ['a', 'b'], checked: true, mixed: false },
  ])('показывает массовый выбор для $value', ({ value, checked, mixed }) => {
    render(
      <ComboboxX
        mode="multiple"
        options={options}
        value={value}
        listControls="slots"
        beforeList={<TableFilterSelectAll />}
        onChange={vi.fn()}
      />,
    );
    const checkbox = screen.getByRole<HTMLInputElement>('checkbox', {
      name: 'Выбрать всё',
    });
    expect(checkbox.checked).toBe(checked);
    expect(checkbox.indeterminate).toBe(mixed);
  });
});
