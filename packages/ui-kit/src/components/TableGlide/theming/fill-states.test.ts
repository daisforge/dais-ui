import { describe, expect, it } from 'vitest';

import { getCellFillStates } from './fill-states';
import {
  TABLE_COLOR_THEMES,
  TABLE_STATE_COLORS,
} from './table-colors.generated';

/**
 * Проверяет, что копия формулы в fill-states.ts считает так же, как формула
 * дизайнера в генераторе: из исходного цвета токена должны получиться ровно
 * те цвета, что лежат в палитре (table-colors.generated.ts).
 * Исходные цвета токенов взяты из generators/table-token-states
 * (code/table-token-sources.ts).
 */

// Токен → исходный цвет по темам и ключи палитры, где лежат его состояния
// (часть токенов: статусные заливки и фон отмеченной строки)
const SOURCES = {
  surfaceTransparentPositive: {
    keys: {
      rest: 'bgCellPositive',
      hover: 'bgCellPositiveHovered',
      hover2: 'bgCellPositiveRowActiveHovered',
      active: 'bgCellPositiveActive',
      hoverActive: 'bgCellPositiveActiveHovered',
    },
    values: {
      light: '#1A9E321F',
      dark: '#1A9E3233',
      betaCoreLight: '#21A0381F',
      betaCoreDark: '#21A03833',
      highContrastLight: '#198A004D',
      highContrastDark: '#1A9E3233',
    },
  },
  surfaceNegativeMinor: {
    keys: {
      rest: 'bgCellNegative',
      hover: 'bgCellNegativeHovered',
      hover2: 'bgCellNegativeRowActiveHovered',
      active: 'bgCellNegativeActive',
      hoverActive: 'bgCellNegativeActiveHovered',
    },
    values: {
      light: '#FFE0E3',
      dark: '#4A0D13',
      betaCoreLight: '#FEDFDE',
      betaCoreDark: '#480B11',
      highContrastLight: '#F8BDC4',
      highContrastDark: '#4A0D13',
    },
  },
  surfaceAccentMinor: {
    keys: {
      rest: 'selectionCheckboxBg',
      hover: 'bgSelectedRowHovered',
      hover2: 'bgSelectedRowActiveHovered',
      active: 'selectionActiveCheckboxBg',
      hoverActive: 'selectionActiveCheckboxHoveredBg',
    },
    values: {
      light: '#ECF6FCFF',
      dark: '#071A26FF',
      betaCoreLight: '#EFF8FF',
      betaCoreDark: '#0C1A24',
      highContrastLight: '#CFE5F2FF',
      highContrastDark: '#071A26FF',
    },
  },
} as const;

const STATE_NAMES = ['rest', 'hover', 'hover2', 'active', 'hoverActive'] as const;

describe('fill-states: эквивалентность рантайм-формулы и генератора', () => {
  for (const [token, { keys, values }] of Object.entries(SOURCES)) {
    for (const [theme, sourceHex] of Object.entries(values)) {
      it(`${token} в ${theme}: все пять состояний совпадают с палитрой`, () => {
        const states = getCellFillStates(
          sourceHex,
          theme as keyof typeof TABLE_STATE_COLORS.bgCell,
        );
        for (const state of STATE_NAMES) {
          const paletteKey = keys[state];
          const expected =
            TABLE_STATE_COLORS[paletteKey][
              theme as keyof typeof TABLE_STATE_COLORS.bgCell
            ];
          expect(states[state], `${paletteKey}.${theme}`).toBe(expected);
        }
      });
    }
  }

  it('кэширует результат по hex и теме (возвращает тот же объект)', () => {
    const a = getCellFillStates('#ABCDEF', 'light');
    const b = getCellFillStates('#ABCDEF', 'light');
    expect(a).toBe(b);
    const c = getCellFillStates('#ABCDEF', 'dark');
    expect(c).not.toBe(a);
  });

  it('покрывает все шесть тем без исключений', () => {
    for (const theme of TABLE_COLOR_THEMES) {
      const states = getCellFillStates('#FF0000', theme);
      expect(states.rest).toMatch(/^#[0-9A-F]{6}$/);
    }
  });
});
