import { describe, expect, it } from 'vitest';

import { getTheme } from './index';
import { TABLE_COLOR_THEMES } from './table-colors.generated';

describe('цвет индикатора изменения ширины колонки', () => {
  it.each(TABLE_COLOR_THEMES)(
    'тема %s: совпадает с рамкой выделения в обоих вариантах таблицы',
    (activeTheme) => {
      for (const variant of ['default', 'clean'] as const) {
        const theme = getTheme('big', activeTheme, variant);
        expect(theme.resizeIndicatorColor).toBe(theme.accentColor);
        expect(theme.resizeIndicatorColor).not.toBe(theme.accentLight);
      }
    },
  );

  it.each(['default', 'clean'] as const)(
    'вариант %s: следует за подменой accentColor в палитре',
    (variant) => {
      const theme = getTheme('big', 'light', variant, {
        colors: { accentColor: '#123456' },
      });
      expect(theme.resizeIndicatorColor).toBe('#123456');
      expect(theme.resizeIndicatorColor).toBe(theme.accentColor);
    },
  );
});
