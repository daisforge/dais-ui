import type { Theme as ThemeGlide } from '@glideappsfinal/glide-data-grid';
import { GlideSizeConfig, SIZE } from '../constants';
import { ThemeCustoms } from './custom-colors';

export type ThemeDynamicCustoms = {
  rowSize: SIZE;
  activeSizes: GlideSizeConfig;
};

// Theme
export type Theme = ThemeGlide & ThemeCustoms & ThemeDynamicCustoms;

export type GlideThemePartial = Partial<Theme>;

export interface GlideThemeForRender extends GlideThemePartial {
  accentColor: string;
  accentLight?: string;
  accentFg?: string;
  bgCell: string;
  bgHeader?: string;
  borderColor: string;
  textLight: string;
  textDark: string;
  textMedium?: string;
  baseFontFull: string;
  cellHorizontalPadding?: number;
}
