import { describe, expect, it } from 'vitest';

import { rangeHasAny, resolveBlockRowOverride } from './block-row-override';

// Объединённый блок красится целиком по строкам, проходящим через него:
// приоритет тот же, что у фона одиночной строки.

const theme = {
  selectionCheckboxBg: 'checkbox',
  bgSelectedRowHovered: 'checkbox-hover',
  bgSelectedRowActiveHovered: 'checkbox-hover2',
  bgRowHovered: 'hover',
  selectionActiveBg: 'active',
  selectionActiveCheckboxBg: 'active-checkbox',
  selectionActiveCheckboxHoveredBg: 'active-checkbox-hover',
  selectionActiveHoveredBg: 'active-hover',
};

const rest = {
  rowHover: false,
  activeRow: undefined,
  checkboxRow: false,
  activeRowChecked: false,
};

describe('resolveBlockRowOverride', () => {
  it('покой без состояний — фон не задаётся', () => {
    expect(resolveBlockRowOverride(theme, rest)).toBeUndefined();
  });

  it('строка под курсором проходит через блок — весь блок hover', () => {
    expect(resolveBlockRowOverride(theme, { ...rest, rowHover: true })).toEqual({
      bgCell: 'hover',
      accentLight: 'active-hover',
    });
  });

  it('отмеченная чекбоксом строка проходит через блок — фон отмеченной строки, под курсором темнее', () => {
    expect(
      resolveBlockRowOverride(theme, { ...rest, checkboxRow: true }),
    ).toEqual({ bgCell: 'checkbox', accentLight: 'active-checkbox' });
    expect(
      resolveBlockRowOverride(theme, {
        ...rest,
        checkboxRow: true,
        rowHover: true,
      }),
    ).toEqual({
      bgCell: 'checkbox-hover',
      accentLight: 'active-checkbox-hover',
    });
  });

  it('выбранная строка проходит через блок — лестница выбранной строки', () => {
    expect(resolveBlockRowOverride(theme, { ...rest, activeRow: 3 })).toEqual({
      bgCell: 'checkbox',
      accentLight: 'active',
    });
    expect(
      resolveBlockRowOverride(theme, {
        ...rest,
        activeRow: 3,
        rowHover: true,
        activeRowChecked: true,
      }),
    ).toEqual({
      bgCell: 'checkbox-hover2',
      accentLight: 'active-checkbox-hover',
    });
  });

  it('выделение на блоке выбранной строки: обычный цвет выделения, в отмеченной строке свой', () => {
    expect(
      resolveBlockRowOverride(theme, { ...rest, activeRow: 3, rowHover: true })
        ?.accentLight,
    ).toBe('active-hover');
    expect(
      resolveBlockRowOverride(theme, { ...rest, activeRow: 3, checkboxRow: true })
        ?.accentLight,
    ).toBe('active-checkbox');
  });

  it('выбранная строка приоритетнее отмеченной', () => {
    expect(
      resolveBlockRowOverride(theme, {
        ...rest,
        activeRow: 3,
        checkboxRow: true,
      })?.bgCell,
    ).toBe('checkbox');
  });
});

describe('rangeHasAny', () => {
  it('находит индекс внутри диапазона и не находит вне', () => {
    const set = new Set([5]);
    expect(rangeHasAny(3, 6, (i) => set.has(i))).toBe(true);
    expect(rangeHasAny(0, 4, (i) => set.has(i))).toBe(false);
  });
});
