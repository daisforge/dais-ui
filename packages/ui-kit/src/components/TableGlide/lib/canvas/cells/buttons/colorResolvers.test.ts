import { describe, expect, it } from 'vitest';

import { getTokens } from '../../../../tokens';
import {
  getEmbedIconButtonColors,
  resolveButtonColors,
  resolveCheckboxColors,
  resolveEmbedIconButtonColors,
  resolveViewColors,
} from './colorResolvers';
import { FALLBACK_THEME, getButtonViewColors } from './constants';
import { withOpacity } from './utils';

// Цвета контролов в ячейках берутся из токенов темы таблицы, как у
// компонентов SDDS; недоступный контрол — те же цвета на 40 %.

const light = getTokens('light');
const dark = getTokens('dark');
const darkTheme = { ...FALLBACK_THEME, tokens: dark };

describe('withOpacity', () => {
  it('умножает непрозрачность hex-цвета, включая #RRGGBBAA', () => {
    expect(withOpacity('#FF0000', 0.4)).toBe('rgba(255, 0, 0, 0.4)');
    expect(withOpacity('#FF000080', 0.5)).toBe('rgba(255, 0, 0, 0.251)');
  });

  it('понимает rgba() и оставляет transparent как есть', () => {
    expect(withOpacity('rgba(1, 2, 3, 0.5)', 0.4)).toBe('rgba(1, 2, 3, 0.2)');
    expect(withOpacity('transparent', 0.4)).toBe('transparent');
  });
});

describe('resolveViewColors', () => {
  const view = getButtonViewColors(light).black;

  it('под курсором берёт фон и текст hover своего вида', () => {
    const colors = resolveViewColors(view, false, true);
    expect(colors.bgColor).toBe(light.onLightSurfaceSolidDefaultHover);
    expect(colors.textColor).toBe(light.onDarkTextPrimaryHover);
  });

  it('недоступная кнопка рисуется цветами покоя на 40 % и не реагирует на курсор', () => {
    const colors = resolveViewColors(view, true, true);
    expect(colors.bgColor).toBe(withOpacity(view.bgColor, 0.4));
    expect(colors.textColor).toBe(withOpacity(view.textColor, 0.4));
  });
});

describe('resolveButtonColors (старый способ подключения)', () => {
  it('основная кнопка красится как accent, опасная как critical своей темы', () => {
    expect(
      resolveButtonColors(darkTheme, 'primary', false, false).bgColor
    ).toBe(dark.surfaceAccent);
    expect(resolveButtonColors(darkTheme, 'danger', false, false).bgColor).toBe(
      dark.surfaceNegative
    );
    expect(
      resolveButtonColors(darkTheme, 'secondary', false, true).bgColor
    ).toBe(dark.surfaceTransparentSecondaryHover);
  });

  it('без токенов темы берёт светлую тему', () => {
    expect(
      resolveButtonColors(FALLBACK_THEME, 'primary', false, false).bgColor
    ).toBe(light.surfaceAccent);
  });
});

describe('кнопка-иконка без подложки', () => {
  it('secondary красится токенами текста, фон прозрачный', () => {
    const view = getEmbedIconButtonColors(darkTheme, 'secondary');
    const rest = resolveEmbedIconButtonColors(view, false, false);
    const hover = resolveEmbedIconButtonColors(view, false, true);
    expect(rest.iconColor).toBe(dark.textSecondary);
    expect(hover.iconColor).toBe(dark.textSecondaryHover);
    expect(rest.bgColor).toBe(dark.surfaceClear);
  });

  it('переопределение цвета иконки приоритетнее вида и держит цвет под курсором', () => {
    const view = getEmbedIconButtonColors(darkTheme, 'secondary');
    const hover = resolveEmbedIconButtonColors(view, false, true, {
      iconColor: '#123456',
    });
    expect(hover.iconColor).toBe('#123456');
  });

  it('недоступная — цвет покоя на 40 %', () => {
    const view = getEmbedIconButtonColors(darkTheme, 'accent');
    expect(resolveEmbedIconButtonColors(view, true, true).iconColor).toBe(
      withOpacity(dark.textAccent, 0.4)
    );
  });
});

describe('resolveCheckboxColors', () => {
  it('неотмеченный: фон карточки и рамка text-secondary своей темы', () => {
    const colors = resolveCheckboxColors(darkTheme, false, false, false, false);
    expect(colors.bgColor).toBe(dark.surfaceSolidCard);
    expect(
      resolveCheckboxColors(FALLBACK_THEME, false, false, false, false).bgColor,
    ).toBe(light.surfaceSolidCard);
    expect(colors.borderColor).toBe(dark.textSecondary);
  });

  it('отмеченный: заливка text-accent, галочка on-dark-text-primary', () => {
    const colors = resolveCheckboxColors(darkTheme, true, false, false, false);
    expect(colors.bgColor).toBe(dark.textAccent);
    expect(colors.iconColor).toBe(dark.onDarkTextPrimary);
  });

  it('недоступный — те же цвета на 40 %', () => {
    const colors = resolveCheckboxColors(darkTheme, true, false, false, true);
    expect(colors.bgColor).toBe(withOpacity(dark.textAccent, 0.4));
  });
});
