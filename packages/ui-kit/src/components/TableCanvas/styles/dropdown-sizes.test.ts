import { describe, expect, it } from 'vitest';

import { getTableDropdownConfig } from './dropdown-sizes';

describe('размеры табличного меню', () => {
  it.each([
    ['small', 'xs', 'tight', 16, 'xs', 's', 120, 300],
    ['medium', 's', 'normal', 16, 'xs', 's', 120, 380],
    ['big', 'm', 'normal', 24, 's', 'm', 140, 440],
  ] as const)(
    'применяет шкалу строки %s',
    (
      rowSize,
      size,
      variant,
      iconWidth,
      searchSize,
      checkboxSize,
      minWidth,
      maxWidth,
    ) => {
      expect(getTableDropdownConfig(rowSize)).toMatchObject({
        size,
        variant,
        iconWidth,
        searchSize,
        checkboxSize,
        minWidth,
        maxWidth,
      });
    },
  );

  it('ограничивает ширину по явному размеру Dropdown', () => {
    expect(getTableDropdownConfig('big', 's').maxWidth).toBe(380);
  });
});
