import {
  onDarkSurfaceSolidCardBrightness,
  onLightSurfaceSolidPrimary,
} from '@ui-kit/tokens';
import type { CSSObject } from 'styled-components';

import { tourWidgetTokens as tokens } from './TourWidget.tokens';

const lightGradient = `linear-gradient(
  270deg,
  #00dfff 33.759%,
  #51b7fb 63.268%,
  #bbb0fc 84.246%
)`;

const ovalGradient = `linear-gradient(
  180deg,
  #56ff71 0%,
  rgba(86, 255, 113, 0) 100%
)`;

// Палитра задаётся на карточке отдельно от геометрии и пользовательских
// --tour-widget-* overrides.
export const tourWidgetThemePalettes = {
  light: {
    [tokens.themeBackground]: onLightSurfaceSolidPrimary,
    [tokens.themeGradientVertical]: lightGradient,
    [tokens.themeGradientHorizontal]: lightGradient,
    [tokens.themeGradientOpacity]: '0.53',
    [tokens.themeGradientVerticalBlur]: '45px',
    [tokens.themeGradientHorizontalBlur]: '45px',
    [tokens.themeOvalBackground]: ovalGradient,
    [tokens.themeOvalVerticalOpacity]: '0.42',
    [tokens.themeOvalHorizontalOpacity]: '0.42',
    [tokens.themeOvalVerticalBlur]: '48px',
    [tokens.themeOvalHorizontalBlur]: '48px',
    [tokens.themeShapeOpacity]: '0.32',
    [tokens.themeShapeStart]: '#bbb0fc',
    [tokens.themeShapeMiddle]: '#00dfff',
    [tokens.themeShapeEnd]: '#56ff71',
  },
  dark: {
    [tokens.themeBackground]: onDarkSurfaceSolidCardBrightness,
    [tokens.themeGradientVertical]: `linear-gradient(
      -45.68deg,
      rgb(56 255 62) 16.982%,
      rgb(0 224 255) 16.982%,
      rgb(16 194 219) 44.903%,
      rgb(110 135 219) 69.826%
    )`,
    [tokens.themeGradientHorizontal]: `linear-gradient(
      -45.68deg,
      rgb(56 255 136) 16.982%,
      rgb(0 224 255) 16.982%,
      rgb(16 138 219) 44.903%,
      rgb(90 117 207) 69.826%
    )`,
    [tokens.themeGradientOpacity]: '1',
    [tokens.themeGradientVerticalBlur]: '34px',
    [tokens.themeGradientHorizontalBlur]: '46px',
    [tokens.themeOvalBackground]: ovalGradient,
    [tokens.themeOvalVerticalOpacity]: '1',
    [tokens.themeOvalHorizontalOpacity]: '0.82',
    [tokens.themeOvalVerticalBlur]: '37px',
    [tokens.themeOvalHorizontalBlur]: '86px',
    [tokens.themeShapeOpacity]: '0.84',
    [tokens.themeShapeStart]: '#6e87db',
    [tokens.themeShapeMiddle]: '#00e0ff',
    [tokens.themeShapeEnd]: '#56ff88',
  },
} satisfies Record<'light' | 'dark', CSSObject>;
