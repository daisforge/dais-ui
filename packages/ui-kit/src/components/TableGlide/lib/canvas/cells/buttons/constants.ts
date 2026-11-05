import { getTokens, type Tokens } from '../../../../tokens';

import type {
  ButtonSize,
  ButtonVariant,
  ButtonView,
  EmbedViewColors,
  GlideThemeForRender,
  SizeConfig,
  ViewColors,
} from './types';

// Size configurations for each button size
export const SIZE_CONFIG: Record<ButtonSize, SizeConfig> = {
  xs: { height: 24, fontSize: 12, borderRadius: 4, paddingX: 8, iconSize: 14 },
  s: { height: 32, fontSize: 13, borderRadius: 6, paddingX: 12, iconSize: 16 },
  m: { height: 40, fontSize: 14, borderRadius: 8, paddingX: 16, iconSize: 18 },
  l: { height: 48, fontSize: 16, borderRadius: 10, paddingX: 20, iconSize: 20 },
};

/**
 * Недоступный контрол рисуется в своих обычных цветах целиком (фон, рамка,
 * текст, иконка) с непрозрачностью 40 % и без hover. Так у Button,
 * IconButton, EmbedIconButton и Checkbox в SDDS (`--plasma-*-disabled-opacity`).
 */
export const DISABLED_OPACITY = 0.4;

/**
 * Цвета видов кнопки с подложкой (Button и IconButton): токены компонента
 * Button в SDDS. У каждого вида свой фон под курсором; у видов с текстом
 * «на тёмном» или «на светлом» под курсором меняется и текст.
 * Вида `primary` в SDDS нет, он повторяет `default`; `success` и `critical`
 * соответствуют `positive` и `negative`.
 */
export function buildButtonViewColors(
  tokens: Tokens
): Record<ButtonView, ViewColors> {
  const solidDefault: ViewColors = {
    bgColor: tokens.surfaceSolidDefault,
    bgColorHover: tokens.surfaceSolidDefaultHover,
    borderColor: tokens.surfaceSolidDefault,
    textColor: tokens.inverseTextPrimary,
    textColorHover: tokens.inverseTextPrimaryHover,
    iconColor: tokens.inverseTextPrimary,
    iconColorHover: tokens.inverseTextPrimaryHover,
  };
  return {
    default: solidDefault,
    primary: solidDefault,
    accent: {
      bgColor: tokens.surfaceAccent,
      bgColorHover: tokens.surfaceAccentHover,
      borderColor: tokens.surfaceAccent,
      textColor: tokens.onDarkTextPrimary,
      iconColor: tokens.onDarkTextPrimary,
    },
    secondary: {
      bgColor: tokens.surfaceTransparentSecondary,
      bgColorHover: tokens.surfaceTransparentSecondaryHover,
      borderColor: 'transparent',
      textColor: tokens.textPrimary,
      iconColor: tokens.textPrimary,
    },
    clear: {
      bgColor: tokens.surfaceClear,
      bgColorHover: tokens.surfaceTransparentSecondaryHover,
      borderColor: 'transparent',
      textColor: tokens.textPrimary,
      iconColor: tokens.textPrimary,
    },
    success: {
      bgColor: tokens.surfacePositive,
      bgColorHover: tokens.surfacePositiveHover,
      borderColor: tokens.surfacePositive,
      textColor: tokens.onDarkTextPrimary,
      iconColor: tokens.onDarkTextPrimary,
    },
    warning: {
      bgColor: tokens.surfaceWarning,
      bgColorHover: tokens.surfaceWarningHover,
      borderColor: tokens.surfaceWarning,
      textColor: tokens.onDarkTextPrimary,
      iconColor: tokens.onDarkTextPrimary,
    },
    critical: {
      bgColor: tokens.surfaceNegative,
      bgColorHover: tokens.surfaceNegativeHover,
      borderColor: tokens.surfaceNegative,
      textColor: tokens.onDarkTextPrimary,
      iconColor: tokens.onDarkTextPrimary,
    },
    dark: {
      bgColor: tokens.onLightSurfaceTransparentDeep,
      bgColorHover: tokens.onLightSurfaceTransparentDeepHover,
      borderColor: 'transparent',
      textColor: tokens.onDarkTextPrimary,
      textColorHover: tokens.onDarkTextPrimaryHover,
      iconColor: tokens.onDarkTextPrimary,
      iconColorHover: tokens.onDarkTextPrimaryHover,
    },
    black: {
      bgColor: tokens.onLightSurfaceSolidDefault,
      bgColorHover: tokens.onLightSurfaceSolidDefaultHover,
      borderColor: tokens.onLightSurfaceSolidDefault,
      textColor: tokens.onDarkTextPrimary,
      textColorHover: tokens.onDarkTextPrimaryHover,
      iconColor: tokens.onDarkTextPrimary,
      iconColorHover: tokens.onDarkTextPrimaryHover,
    },
    white: {
      bgColor: tokens.onDarkSurfaceSolidDefault,
      bgColorHover: tokens.onDarkSurfaceSolidDefaultHover,
      borderColor: tokens.onDarkSurfaceSolidDefault,
      textColor: tokens.onLightTextPrimary,
      textColorHover: tokens.onLightTextPrimaryHover,
      iconColor: tokens.onLightTextPrimary,
      iconColorHover: tokens.onLightTextPrimaryHover,
    },
  };
}

/**
 * Цвета видов кнопки-иконки без подложки (EmbedIconButton): токены
 * компонента EmbedIconButton в SDDS. Иконка красится токенами текста, а не
 * фоном кнопки; фон всегда прозрачный (`surface-clear`).
 * Видов `clear`, `dark`, `black` и `white` у EmbedIconButton в SDDS нет:
 * `clear` повторяет `secondary`, `dark` и `black` берут текст «на светлом»,
 * `white` — текст «на тёмном».
 */
export function buildEmbedIconButtonViewColors(
  tokens: Tokens
): Record<ButtonView, EmbedViewColors> {
  const embed = (iconColor: string, iconColorHover: string): EmbedViewColors => ({
    bgColor: tokens.surfaceClear,
    bgColorHover: tokens.surfaceClear,
    borderColor: 'transparent',
    textColor: iconColor,
    textColorHover: iconColorHover,
    iconColor,
    iconColorHover,
  });
  const primary = embed(tokens.textPrimary, tokens.textPrimaryHover);
  const secondary = embed(tokens.textSecondary, tokens.textSecondaryHover);
  const onLight = embed(tokens.onLightTextPrimary, tokens.onLightTextPrimaryHover);
  return {
    default: primary,
    primary,
    accent: embed(tokens.textAccent, tokens.textAccentHover),
    secondary,
    clear: secondary,
    success: embed(tokens.textPositive, tokens.textPositiveHover),
    warning: embed(tokens.textWarning, tokens.textWarningHover),
    critical: embed(tokens.textNegative, tokens.textNegativeHover),
    dark: onLight,
    black: onLight,
    white: embed(tokens.onDarkTextPrimary, tokens.onDarkTextPrimaryHover),
  };
}

// Палитры видов считаются один раз на объект токенов темы: токены темы
// не меняются, а кнопки перерисовываются на каждом кадре.
const buttonViewColorsCache = new WeakMap<Tokens, Record<ButtonView, ViewColors>>();
const embedViewColorsCache = new WeakMap<Tokens, Record<ButtonView, EmbedViewColors>>();

export function getButtonViewColors(tokens: Tokens): Record<ButtonView, ViewColors> {
  let colors = buttonViewColorsCache.get(tokens);
  if (colors === undefined) {
    colors = buildButtonViewColors(tokens);
    buttonViewColorsCache.set(tokens, colors);
  }
  return colors;
}

export function getEmbedIconButtonViewColors(
  tokens: Tokens
): Record<ButtonView, EmbedViewColors> {
  let colors = embedViewColorsCache.get(tokens);
  if (colors === undefined) {
    colors = buildEmbedIconButtonViewColors(tokens);
    embedViewColorsCache.set(tokens, colors);
  }
  return colors;
}

/** Токены темы для отрисовки контрола; без темы — токены светлой темы. */
export function resolveTokens(theme: { tokens?: Tokens } | undefined): Tokens {
  return theme?.tokens ?? getTokens('light');
}

/**
 * Старый способ подключения кнопок (`variant`) красится теми же видами,
 * что новый (`view`): основная — accent, второстепенная — secondary,
 * опасная — critical.
 */
export const LEGACY_VARIANT_VIEW: Record<ButtonVariant, ButtonView> = {
  primary: 'accent',
  secondary: 'secondary',
  danger: 'critical',
};

/**
 * Тема для примитивов, созданных без темы таблицы (прямой `new CanvasButton(...)`):
 * шрифт по умолчанию и токены светлой темы.
 */
export const FALLBACK_THEME: GlideThemeForRender = (() => {
  const tokens = getTokens('light');
  return {
    accentColor: tokens.textAccent,
    accentFg: tokens.onDarkTextPrimary,
    bgCell: tokens.surfaceSolidCard,
    borderColor: tokens.outlineSolidPrimary,
    textLight: tokens.textSecondary,
    textDark: tokens.textPrimary,
    baseFontFull:
      "13px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    tokens,
  };
})();

/**
 * @deprecated Цвета видов светлой темы. Берите `getButtonViewColors(theme.tokens)`:
 * палитра зависит от темы таблицы.
 */
export const VIEW_COLORS: Record<ButtonView, ViewColors> = getButtonViewColors(
  getTokens('light')
);

// Button layout constants
export const BUTTON_PADDING_Y = 4;
export const ICON_SIZE_ADJUSTMENT = 4;
export const DEFAULT_ICON_SIZE = 16;
export const MAX_ICON_SIZE = 20;
export const DEFAULT_BUTTON_RADIUS = 4;
export const DEFAULT_BORDER_WIDTH = 1;
export const DEFAULT_ICON_SPACING = 6;
export const DEFAULT_TEXT_PADDING = 4;

// Default values
export const DEFAULT_SIZE: ButtonSize = 's';
export const DEFAULT_VIEW: ButtonView = 'default';

// Cache constants
export const CACHE_SEPARATOR = '|';
export const HEX_COLOR_PREFIX = '#';
export const HEX_COLOR_CHAR_CODE = 35;
