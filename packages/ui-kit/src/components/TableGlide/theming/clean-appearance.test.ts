import { describe, expect, it } from 'vitest';

import { getTheme } from './index';
import {
  TABLE_COLOR_THEMES,
  TABLE_STATE_COLORS,
} from './table-colors.generated';

describe('getTheme: «чистый» вид (appearance.variant = clean)', () => {
  it('default без варианта и с variant=default совпадают', () => {
    expect(getTheme('big', 'light', 'default')).toEqual(
      getTheme('big', 'light'),
    );
  });

  it.each(TABLE_COLOR_THEMES)(
    'тема %s: шапка, групповая шапка и служебные колонки на фоне ячеек',
    (activeTheme) => {
      const theme = getTheme('big', activeTheme, 'clean');
      expect(theme.bgHeader).toBe(theme.bgCell);
      expect(theme.bgHeaderHasFocus).toBe(theme.bgCell);
      expect(theme.bgGroupHeader).toBe(theme.bgCell);
      expect(theme.selectionServiceBg).toBe(theme.bgCell);
      expect(theme.bgHeaderHovered).toBe(theme.bgRowHovered);
      expect(theme.bgGroupHeaderHovered).toBe(theme.bgRowHovered);
      expect(theme.bgServiceRowHovered).toBe(theme.bgRowHovered);
    },
  );

  it.each(TABLE_COLOR_THEMES)(
    'тема %s: текст шапки — text-secondary из палитры',
    (activeTheme) => {
      const theme = getTheme('big', activeTheme, 'clean');
      const expected = TABLE_STATE_COLORS.textHeaderClean[activeTheme];
      expect(theme.textHeader).toBe(expected);
      expect(theme.textHeaderSelected).toBe(expected);
      expect(theme.textGroupHeader).toBe(expected);
    },
  );

  it.each(TABLE_COLOR_THEMES)(
    'тема %s: итоговая строка остаётся голубой, как шапка в обычном виде',
    (activeTheme) => {
      const base = getTheme('big', activeTheme);
      const clean = getTheme('big', activeTheme, 'clean');
      expect(clean.bgSummaryRow).toBe(base.bgHeader);
      expect(clean.bgSummaryRow).not.toBe(clean.bgCell);
    },
  );

  it('выделение шапки и служебной зоны — цвета выделения на белом', () => {
    const theme = getTheme('big', 'light', 'clean');
    expect(theme.selectionServiceActiveBg).toBe(theme.selectionActiveBg);
    expect(theme.selectionServiceActiveHoveredBg).toBe(
      theme.selectionActiveHoveredBg,
    );
    expect(theme.bgHeaderSelectedHovered).toBe(theme.selectionActiveHoveredBg);
  });

  it('линии, которые форк рисует независимо от borders, прозрачные', () => {
    const theme = getTheme('big', 'light', 'clean');
    expect(theme.borderColor).toBe('transparent');
    expect(theme.horizontalBorderColor).toBe('transparent');
    expect(theme.headerBottomBorderColor).toBe('transparent');
  });

  it('остальные цвета не меняются: hover, выделение, отмеченная строка, редактируемая ячейка', () => {
    const base = getTheme('big', 'light');
    const clean = getTheme('big', 'light', 'clean');
    expect(clean.bgCell).toBe(base.bgCell);
    expect(clean.bgRowHovered).toBe(base.bgRowHovered);
    expect(clean.accentColor).toBe(base.accentColor);
    expect(clean.accentLight).toBe(base.accentLight);
    expect(clean.selectionCheckboxBg).toBe(base.selectionCheckboxBg);
    expect(clean.bgEditableCell).toBe(base.bgEditableCell);
    expect(clean.textDark).toBe(base.textDark);
  });

  it('зебра: четыре состояния есть в теме и отличаются друг от друга', () => {
    const theme = getTheme('big', 'light');
    const states = [
      theme.bgZebraRow,
      theme.bgZebraRowHovered,
      theme.bgZebraRowActive,
      theme.bgZebraRowActiveHovered,
    ];
    expect(new Set(states).size).toBe(4);
    expect(theme.bgZebraRow).not.toBe(theme.bgCell);
  });
});
