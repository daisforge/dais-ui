import { describe, expect, it } from 'vitest';

import { getTableStateColors, type TableSemanticTokens } from './table-state-colors';
import { STEP, THEMES, buildTableColors, deltaE, deriveStates, fillStates, flattenHex, detectGroup, defaultUsage, hexToOklch, type ThemeName, STEP_FACTOR } from './table-token-states';
import { CELL, SEMANTIC, TABLE_COLORS, THEME_SETTINGS } from './table-token-sources';

const KNOWN: ThemeName[] = ['light', 'dark', 'betaCoreLight', 'betaCoreDark'];
const colors = buildTableColors(TABLE_COLORS, SEMANTIC, THEME_SETTINGS, CELL);

/** Ключи покоя и hover: совпадают со спекой 15.09 (table-state-colors.ts). Выделение считается иначе — наложением. */
const SAME_AS_SPEC = [
  'bgCell', 'bgRowHovered', 'bgHeader', 'bgHeaderHasFocus', 'bgGroupHeader', 'bgHeaderHovered', 'bgGroupHeaderHovered',
  'selectionCheckboxBg', 'selectionServiceBg', 'bgSelectedRowHovered', 'bgServiceRowHovered',
  'textDark', 'borderColor', 'accentColor', 'errorOutlineColor', 'fadeWhite', 'fadeGray',
];
/** Раздел «Наложение цветов (for dev)» макета «Выделение ячеек»: подложка + surface-transparent-accent = результат. */
const DOC_LIGHT: [string, string][] = [['#EDF8FF', '#D2EBFB'], ['#ECF6FC', '#D1E9F8'], ['#FFF6E5', '#E2E9E4'], ['#FFE0E3', '#E2D6E2'], ['#1A9E321F', '#C9E6E5'], ['#FA5F051F', '#E1E0E1']];
const DOC_DARK: [string, string][] = [['#0A1924', '#0B304A'], ['#071A26', '#09314B'], ['#211807', '#1D2F33'], ['#4A0D13', '#3E263C'], ['#1A9E3233', '#0B3C3D'], ['#FA5F0533', '#2F3236']];
const maxChannelDiff = (a: string, b: string) => Math.max(...[1, 3, 5].map((i) => Math.abs(parseInt(a.slice(i, i + 2), 16) - parseInt(b.slice(i, i + 2), 16))));

describe('модель «токен + состояние» против спеки 15.09', () => {
  for (const theme of KNOWN) {
    it(`${theme}: неизменённые ключи совпадают с table-state-colors.ts`, () => {
      const tokens = {
        surfaceSolidCard: SEMANTIC.surfaceSolidCard.values[theme],
        surfaceSolidPrimary: SEMANTIC.surfaceSolidPrimary.values[theme],
        backgroundPrimary: SEMANTIC.backgroundPrimary.values[theme],
        surfaceAccentMinor: SEMANTIC.surfaceAccentMinor.values[theme],
        surfaceAccent: SEMANTIC.surfaceAccent.values[theme],
        outlineAccent: SEMANTIC.outlineAccent.values[theme],
        outlineSolidPrimary: SEMANTIC.outlineSolidPrimary.values[theme],
        textPrimary: SEMANTIC.textPrimary.values[theme],
        surfaceNegative: SEMANTIC.surfaceNegative.values[theme],
        dataYellow: SEMANTIC.dataYellow.values[theme],
      } as TableSemanticTokens;
      const spec = getTableStateColors(tokens, THEME_SETTINGS[theme].mode) as Record<string, string>;
      for (const key of SAME_AS_SPEC) expect(colors[key][theme], key).toBe(spec[key]);
    });
  }

  it('выделение — наложение surface-transparent-accent: значения макета, light и dark, ±1 канал', () => {
    for (const [base, expected] of DOC_LIGHT) expect(maxChannelDiff(fillStates(base, 'light', { selectionHex: '#118CDF1F' }).active!, expected), base).toBeLessThanOrEqual(1);
    for (const [base, expected] of DOC_DARK) expect(maxChannelDiff(fillStates(base, 'dark', { cardHex: '#060A0C', selectionHex: '#118CDF33' }).active!, expected), base).toBeLessThanOrEqual(1);
  });

  it('выделение на белом и в отмеченной строке — как в старом коде: #E2F1FB и #D1E9F8', () => {
    expect(colors.selectionActiveBg.light).toBe('#E2F1FB');
    expect(colors.accentLight.light).toBe('#E2F1FB');
    expect(colors.selectionActiveCheckboxBg.light).toBe('#D1E9F8');
    expect(colors.selectionServiceActiveBg.light).toBe('#D1E9F8');
  });

  it('hover на выделении показывается: +1δ по лучу от цвета выделения', () => {
    const pairs = [
      ['selectionActiveHoveredBg', 'selectionActiveBg'],
      ['selectionActiveCheckboxHoveredBg', 'selectionActiveCheckboxBg'],
      ['bgHeaderSelectedHovered', 'selectionServiceActiveBg'],
      ['bgEditableCellActiveHovered', 'bgEditableCellActive'],
      ['bgCellNegativeActiveHovered', 'bgCellNegativeActive'],
    ] as const;
    for (const theme of KNOWN) {
      const setting = THEME_SETTINGS[theme]!;
      const d = 100 * STEP * (setting.stepFactor ?? STEP_FACTOR[setting.mode]);
      for (const [hovered, base] of pairs) {
        const a = colors[base][theme], h = colors[hovered][theme];
        if (!a) { expect(h, hovered + ' ' + theme).toBeNull(); continue; }
        expect(h, hovered + ' ' + theme).not.toBe(a);
        expect(Math.abs(deltaE(a, h!) - d), hovered + ' ' + theme).toBeLessThan(0.3);
      }
    }
  });

  it('редактируемая ячейка в выделении — наложение на её цвет', () => {
    const s = deriveStates(SEMANTIC.dataYellowLight, THEME_SETTINGS, CELL);
    expect(colors.bgEditableCellActive.light).toBe(s.light!.active);
    expect(colors.bgEditableCellActive.light).toBe(fillStates('#FFE4AE', 'light', { selectionHex: '#118CDF1F' }).active);
    expect(colors.bgEditableCellActive.dark).toBe(fillStates('#211807', 'dark', { cardHex: '#060A0C', selectionHex: '#118CDF33' }).active);
  });

  it('редактирование — токены data-yellow-light / data-blue-light, в beta их нет', () => {
    expect(colors.bgEditableCell.light).toBe('#FFE4AE');
    expect(colors.bgEditableCell.dark).toBe('#211807');
    expect(colors.editedSuccessfullyCellColor.light).toBe('#EDF8FF');
    expect(colors.bgEditableCell.betaCoreLight).toBeNull();
    expect(colors.editedSuccessfullyCellColor.betaCoreDark).toBeNull();
  });
});

describe('шесть тем', () => {
  it('у каждого ключа ровно шесть тем', () => {
    for (const record of Object.values(colors)) expect(Object.keys(record)).toEqual([...THEMES]);
  });

  it('highContrastDark — заглушка, копия dark', () => {
    for (const record of Object.values(colors)) expect(record.highContrastDark).toBe(record.dark);
  });

  it('highContrastLight: null только там, где нет данных темы (hover фона — без surface-solid-primary)', () => {
    expect(colors.bgCell.highContrastLight).toBe('#FFFFFF');
    for (const [key, record] of Object.entries(colors)) {
      const e = TABLE_COLORS[key];
      const src = SEMANTIC[e.source] as { values: Record<string, string | null | undefined> };
      const shouldBeNull = src.values.highContrastLight == null || (e.source === 'surfaceSolidCard' && e.state === 'hover');
      if (shouldBeNull) expect(record.highContrastLight, key).toBeNull();
      else expect(record.highContrastLight, key).not.toBeNull();
    }
    expect(colors.bgHeader.highContrastLight).toBe('#CFE5F2');
  });
});

describe('группа и правило', () => {
  it('группа по имени токена и использование по умолчанию', () => {
    expect(detectGroup('surface-accent-minor')).toBe('surface');
    expect(detectGroup('--text-primary')).toBe('text');
    expect(detectGroup('outlineSolidPrimary')).toBe('outline');
    expect(detectGroup('data-yellow-light')).toBe('data');
    expect(detectGroup('background-primary')).toBe('background');
    expect(defaultUsage('surface')).toBe('fill');
    expect(defaultUsage('data')).toBe('fill');
    expect(defaultUsage('text')).toBe('text');
    expect(defaultUsage('outline')).toBe('outline');
    expect(defaultUsage('background')).toBe('static');
  });

  it('text: состояния из темы, формула не применяется', () => {
    expect(deriveStates(SEMANTIC.textPrimary, THEME_SETTINGS, CELL).light).toEqual({
      rest: '#13181BF5',
      hover: '#13181B93',
      active: '#13181BC4',
      hoverActive: '#13181BC4',
    });
  });

  it('заливка: hover отстоит от токена на δ в ΔEok; active — наложение выделения', () => {
    const states = deriveStates(SEMANTIC.surfaceAccentMinor, THEME_SETTINGS, CELL);
    for (const theme of KNOWN) {
      const k = THEME_SETTINGS[theme].mode === 'dark' ? 1.2 : 1;
      const s = states[theme]!;
      expect(deltaE(s.rest, s.hover!)).toBeCloseTo(100 * STEP * k, 0);
      expect(s.active).toBe(flattenHex(SEMANTIC.surfaceTransparentAccent.values[theme]!, s.rest));
    }
  });

  it('fillStates для произвольного hex совпадает с состояниями токена с тем же hex', () => {
    const s = fillStates('#1A9E321F', 'light', { selectionHex: '#118CDF1F' });
    expect(s).toEqual(deriveStates(SEMANTIC.surfaceTransparentPositive, THEME_SETTINGS, CELL).light);
    expect(s.rest).toBe('#E3F3E6');
    expect(colors.bgCellPositiveActive.light).toBe(s.active);
    const dark = fillStates('#1A9E3233', 'dark', { cardHex: '#060A0C', selectionHex: '#118CDF33' });
    expect(dark).toEqual(deriveStates(SEMANTIC.surfaceTransparentPositive, THEME_SETTINGS, CELL).dark);
    expect(fillStates('#FFFFFF', 'light').hover).toBeNull();
    expect(fillStates('#FFFFFF', 'light').active).toBeNull();
    expect(fillStates('#FFFFFF', 'light', { primaryHex: '#F2F5F8' }).hover).toBe(colors.bgRowHovered.light);
    expect(fillStates('#FFFFFF', 'light', { selectionHex: '#118CDF1F' }).active).toBe('#E2F1FB');
  });

  it('насыщенный токен как заливка: выход за sRGB снимается уменьшением хромы, тон сохраняется', () => {
    const s = deriveStates(SEMANTIC.surfaceAccent, THEME_SETTINGS, CELL, 'fill').light!;
    for (const hex of Object.values(s)) expect(hex).toMatch(/^#[0-9A-F]{6}$/);
    expect(Math.abs(hexToOklch(s.hover!).h - hexToOklch(s.rest).h)).toBeLessThan(3);
  });
});
