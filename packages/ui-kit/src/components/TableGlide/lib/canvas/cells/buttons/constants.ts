import type { Tokens } from '../../../../tokens';

import type { ButtonSize, ButtonView, SizeConfig, ViewColors } from './types';

// Size configurations for each button size
export const SIZE_CONFIG: Record<ButtonSize, SizeConfig> = {
  xs: { height: 24, fontSize: 12, borderRadius: 4, paddingX: 8, iconSize: 14 },
  s: { height: 32, fontSize: 13, borderRadius: 6, paddingX: 12, iconSize: 16 },
  m: { height: 40, fontSize: 14, borderRadius: 8, paddingX: 16, iconSize: 18 },
  l: { height: 48, fontSize: 16, borderRadius: 10, paddingX: 20, iconSize: 20 },
};

export function buildButtonViewColors(
  tokens: Tokens
): Record<ButtonView, ViewColors> {
  return {
    default: {
      bgColor: tokens.surfaceSolidDefault,
      bgColorHover: tokens.surfaceSolidDefault,
      borderColor: tokens.surfaceSolidDefault,
      textColor: tokens.inverseTextPrimary,
      iconColor: tokens.inverseTextPrimary,
    },
    primary: {
      bgColor: tokens.surfaceSolidDefault,
      bgColorHover: tokens.surfaceSolidDefault,
      borderColor: tokens.surfaceSolidDefault,
      textColor: tokens.inverseTextPrimary,
      iconColor: tokens.inverseTextPrimary,
    },
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
      bgColorHover: tokens.onLightSurfaceTransparentDeep,
      borderColor: tokens.onLightSurfaceTransparentDeep,
      textColor: tokens.onDarkTextPrimary,
      iconColor: tokens.onDarkTextPrimary,
    },
    black: {
      bgColor: tokens.onLightSurfaceSolidDefault,
      bgColorHover: tokens.onLightSurfaceSolidDefault,
      borderColor: tokens.onLightSurfaceSolidDefault,
      textColor: tokens.onDarkTextPrimary,
      iconColor: tokens.onDarkTextPrimary,
    },
    white: {
      bgColor: tokens.onDarkSurfaceSolidDefault,
      bgColorHover: tokens.onDarkSurfaceSolidDefault,
      borderColor: tokens.onDarkSurfaceSolidDefault,
      textColor: tokens.onLightTextPrimary,
      iconColor: tokens.onLightTextPrimary,
    },
  };
}

const BLACK: ViewColors = {
  bgColor: '#060A0C',
  bgColorHover: '#13181B',
  borderColor: 'transparent',
  textColor: '#FFFFFF',
  /**
   *#F2F5F893 --on-dark-text-primary-hover
   */
  textColorHover: '#F2F5F893',
  iconColor: '#FFFFFF',
  /**
   *#F2F5F893 --on-dark-text-primary-hover
   */
  iconColorHover: '#F2F5F893',
};

/**
 * @deprecated Use buildButtonViewColors(tokens) instead.
 * Kept for backward compatibility with drawIconButton/drawEmbedIconButton.
 */
export const VIEW_COLORS: Record<ButtonView, ViewColors> = {
  default: BLACK,
  primary: {
    bgColor: '#060A0C',
    bgColorHover: '#111C22',
    borderColor: 'transparent',
    textColor: '#FFFFFF',
    iconColor: '#FFFFFF',
  },
  accent: {
    bgColor: '#118CDF',
    bgColorHover: '#1798EE',
    borderColor: 'transparent',
    textColor: '#FFFFFF',
    iconColor: '#FFFFFF',
  },
  secondary: {
    /**
     * surface transparent secondary
     */
    bgColor: '#ADB9C238',
    /**
     * surface transparent secondary hover
     */
    bgColorHover: '#ADB9C247',
    borderColor: 'transparent',
    textColor: '#060A0C',
    iconColor: '#060A0C',
  },
  clear: {
    bgColor: 'transparent',
    bgColorHover: 'rgba(6, 10, 12, 0.08)',
    borderColor: 'transparent',
    textColor: '#060A0C',
    iconColor: '#060A0C',
  },
  success: {
    bgColor: '#1A9E32',
    bgColorHover: '#1EB83A',
    borderColor: 'transparent',
    textColor: '#FFFFFF',
    iconColor: '#FFFFFF',
  },
  warning: {
    bgColor: '#FA5F05',
    bgColorHover: '#FB782D',
    borderColor: 'transparent',
    textColor: '#FFFFFF',
    iconColor: '#FFFFFF',
  },
  critical: {
    bgColor: '#FF293E',
    bgColorHover: '#FF5263',
    borderColor: 'transparent',
    textColor: '#FFFFFF',
    iconColor: '#FFFFFF',
  },
  dark: {
    /**
     * #30373CC7 --on-light-surface-transparent-deep
     */
    bgColor: '#30373CC7',
    bgColorHover: '#30373CC7',
    borderColor: 'transparent',
    textColor: '#FFFFFF',
    textColorHover: '#F2F5F893',
    iconColor: '#FFFFFF',
    iconColorHover: '#F2F5F893',
  },
  black: BLACK,
  white: {
    bgColor: '#FFFFFF',
    bgColorHover: '#FFFFFF',
    borderColor: 'transparent',
    textColor: '#060A0C',
    /**
     * #13181B93 --on-light-text-primary-hover
     */
    textColorHover: '#13181B93',
    iconColor: '#060A0C',
    /**
     * #13181B93 --on-light-text-primary-hover
     */
    iconColorHover: '#13181B93',
  },
};

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

// Color constants
export const DANGER_COLOR = '#d32f2f';
export const DEFAULT_ACCENT_FG = '#ffffff';
export const DEFAULT_SECONDARY_HOVER = 'rgba(30, 136, 229, 0.08)';
export const DANGER_TEXT_COLOR = '#ffffff';

// Disabled state colors
export const DISABLED_BG_COLOR = '#E8EEF2';
export const DISABLED_BORDER_COLOR = '#D5DFE6';
export const DISABLED_TEXT_COLOR = '#8A959D';

// Cache constants
export const CACHE_SEPARATOR = '|';
export const HEX_COLOR_PREFIX = '#';
export const HEX_COLOR_CHAR_CODE = 35;
export const LIGHTEN_AMOUNT = 15;
