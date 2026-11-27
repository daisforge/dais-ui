import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { ITEM_ID_GROUPED_ROWS } from '../../feature-rows-grouping/constants';
import { useButtonsToDropdownItems } from './use-buttons-to-dropdown';

vi.mock('../../contexts', () => ({
  useHeaderContext: () => ({ rowSize: 'medium' }),
}));

describe('Подменю кнопок в узкой панели', () => {
  it('сохраняет ограничение высоты группировки и пользовательской кнопки', () => {
    const items = [{ value: 'last', label: 'Последний пункт' }];
    const { result } = renderHook(() =>
      useButtonsToDropdownItems([
        {
          text: 'Группировать',
          itemID: ITEM_ID_GROUPED_ROWS,
          dropdown: { items, listMaxHeight: 'min(360px, 50dvh)' },
        },
        { text: 'Экспорт', dropdown: { items, listMaxHeight: '180px' } },
        { text: 'Отчёты', dropdown: { items } },
      ]),
    );

    expect(
      result.current.dropdownItems.map((item) => item.listMaxHeight),
    ).toEqual(['min(360px, 50dvh)', '180px', undefined]);
  });
});
