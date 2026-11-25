import { describe, expect, it } from 'vitest';

import { getTableDropdownConfig } from './dropdown-sizes';

describe('размеры табличного меню', () => {
  it.each([
    ['small', 'xs', 'tight', 16, 'xs', 's', 120],
    ['medium', 's', 'normal', 16, 'xs', 's', 120],
    ['big', 'm', 'normal', 24, 's', 'm', 140],
  ] as const)(
    'применяет шкалу строки %s',
    (rowSize, size, variant, iconWidth, searchSize, checkboxSize, minWidth) => {
      expect(getTableDropdownConfig(rowSize)).toMatchObject({
        size,
        variant,
        iconWidth,
        searchSize,
        checkboxSize,
        minWidth,
      });
    },
  );

  it('учитывает явный размер при выборе минимальной ширины', () => {
    expect(getTableDropdownConfig('big', 's').minWidth).toBe(120);
  });
});
