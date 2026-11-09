import { describe, expect, it } from 'vitest';

import { resolveRowStateOverride } from './row-state-override';

// Фон строки и цвет выделения в ней. Тот же порядок у одиночной строки и у
// объединённого блока, через который проходят строки в этих состояниях.

const theme = {
  selectionCheckboxBg: 'checkbox',
  bgSelectedRowHovered: 'checkbox-hover',
  bgSelectedRowActiveHovered: 'checkbox-hover2',
  bgRowHovered: 'hover',
  bgZebraRow: 'zebra',
  bgZebraRowHovered: 'zebra-hover',
  bgZebraRowActive: 'zebra-active',
  bgZebraRowActiveHovered: 'zebra-active-hover',
  selectionActiveBg: 'active',
  selectionActiveCheckboxBg: 'active-checkbox',
  selectionActiveCheckboxHoveredBg: 'active-checkbox-hover',
  selectionActiveHoveredBg: 'active-hover',
};

const rest = {
  rowHover: false,
  active: false,
  activeChecked: false,
  checked: false,
  zebra: false,
};

describe('resolveRowStateOverride', () => {
  it('покой без состояний: фон не задаётся', () => {
    expect(resolveRowStateOverride(theme, rest)).toBeUndefined();
  });

  it('строка под курсором', () => {
    expect(resolveRowStateOverride(theme, { ...rest, rowHover: true })).toEqual(
      { bgCell: 'hover', accentLight: 'active-hover' },
    );
  });

  it('отмеченная чекбоксом строка, под курсором темнее', () => {
    expect(resolveRowStateOverride(theme, { ...rest, checked: true })).toEqual({
      bgCell: 'checkbox',
      accentLight: 'active-checkbox',
    });
    expect(
      resolveRowStateOverride(theme, { ...rest, checked: true, rowHover: true }),
    ).toEqual({
      bgCell: 'checkbox-hover',
      accentLight: 'active-checkbox-hover',
    });
  });

  it('выбранная строка: лестница выбранной строки', () => {
    expect(resolveRowStateOverride(theme, { ...rest, active: true })).toEqual({
      bgCell: 'checkbox',
      accentLight: 'active',
    });
    expect(
      resolveRowStateOverride(theme, {
        ...rest,
        active: true,
        activeChecked: true,
        checked: true,
        rowHover: true,
      }),
    ).toEqual({
      bgCell: 'checkbox-hover2',
      accentLight: 'active-checkbox-hover',
    });
  });

  it('выделение в выбранной строке: обычный цвет, в отмеченной свой оттенок', () => {
    expect(
      resolveRowStateOverride(theme, { ...rest, active: true, rowHover: true })
        ?.accentLight,
    ).toBe('active-hover');
    expect(
      resolveRowStateOverride(theme, { ...rest, active: true, checked: true })
        ?.accentLight,
    ).toBe('active-checkbox');
  });

  it('выбранная строка приоритетнее отмеченной', () => {
    expect(
      resolveRowStateOverride(theme, { ...rest, active: true, checked: true })
        ?.bgCell,
    ).toBe('checkbox');
  });

  it('зебра ниже отмеченной строки и выше курсора', () => {
    expect(
      resolveRowStateOverride(theme, { ...rest, zebra: true, rowHover: true }),
    ).toEqual({ bgCell: 'zebra-hover', accentLight: 'zebra-active-hover' });
    expect(
      resolveRowStateOverride(theme, { ...rest, zebra: true, checked: true })
        ?.bgCell,
    ).toBe('checkbox');
  });
});
