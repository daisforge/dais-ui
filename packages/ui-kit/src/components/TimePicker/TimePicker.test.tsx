import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { TimePicker } from './index';

afterEach(cleanup);

describe('TimePicker: редактирование сегментов времени', () => {
  it('сохраняет секунды при очистке минут и передаёт пустой сегмент в onChange', () => {
    const onChange = vi.fn();
    render(<TimePicker columnsQuantity={3} onChange={onChange} />);
    const input = screen.getByRole<HTMLInputElement>('textbox');

    fireEvent.change(input, { target: { value: '12:34:56' } });
    fireEvent.change(input, { target: { value: '12::56' } });

    expect(input.value).toBe('12::56');
    expect(onChange).toHaveBeenLastCalledWith(
      expect.anything(),
      expect.objectContaining({
        timeValues: { hour: 12, minute: null, second: 56 },
      }),
    );
  });

  it('добавляет разделитель после полного значения часов', () => {
    render(<TimePicker columnsQuantity={2} />);
    const input = screen.getByRole<HTMLInputElement>('textbox');

    fireEvent.change(input, { target: { value: '12' } });

    expect(input.value).toBe('12:');
  });

  it.each([
    ['Backspace', 3, 2],
    ['Delete', 2, 3],
  ] as const)(
    '%s переносит курсор через разделитель к удаляемой цифре',
    (key, cursorBefore, cursorAfter) => {
      render(<TimePicker columnsQuantity={2} value="12:34" />);
      const input = screen.getByRole<HTMLInputElement>('textbox');
      act(() => input.focus());
      input.setSelectionRange(cursorBefore, cursorBefore);

      fireEvent.keyDown(input, { key });

      expect(input.selectionStart).toBe(cursorAfter);
      expect(input.selectionEnd).toBe(cursorAfter);
    },
  );
});
