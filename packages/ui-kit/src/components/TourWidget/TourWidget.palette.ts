import {
  onDarkSurfaceSolidCardBrightness,
  onLightSurfaceSolidPrimary,
} from '@ui-kit/tokens';
import type { CSSObject } from 'styled-components';

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
    '--tour-widget-theme-background': onLightSurfaceSolidPrimary,
    '--tour-widget-theme-gradient-vertical': lightGradient,
    '--tour-widget-theme-gradient-horizontal': lightGradient,
    '--tour-widget-theme-gradient-opacity': '0.53',
    '--tour-widget-theme-gradient-vertical-blur': '45px',
    '--tour-widget-theme-gradient-horizontal-blur': '45px',
    '--tour-widget-theme-oval-background': ovalGradient,
    '--tour-widget-theme-oval-vertical-opacity': '0.42',
    '--tour-widget-theme-oval-horizontal-opacity': '0.42',
    '--tour-widget-theme-oval-vertical-blur': '48px',
    '--tour-widget-theme-oval-horizontal-blur': '48px',
    '--tour-widget-theme-shape-opacity': '0.32',
    '--tour-widget-theme-shape-start': '#bbb0fc',
    '--tour-widget-theme-shape-middle': '#00dfff',
    '--tour-widget-theme-shape-end': '#56ff71',
  },
  dark: {
    '--tour-widget-theme-background': onDarkSurfaceSolidCardBrightness,
    '--tour-widget-theme-gradient-vertical': `linear-gradient(
      -45.68deg,
      rgb(56 255 62) 16.982%,
      rgb(0 224 255) 16.982%,
      rgb(16 194 219) 44.903%,
      rgb(110 135 219) 69.826%
    )`,
    '--tour-widget-theme-gradient-horizontal': `linear-gradient(
      -45.68deg,
      rgb(56 255 136) 16.982%,
      rgb(0 224 255) 16.982%,
      rgb(16 138 219) 44.903%,
      rgb(90 117 207) 69.826%
    )`,
    '--tour-widget-theme-gradient-opacity': '1',
    '--tour-widget-theme-gradient-vertical-blur': '34px',
    '--tour-widget-theme-gradient-horizontal-blur': '46px',
    '--tour-widget-theme-oval-background': ovalGradient,
    '--tour-widget-theme-oval-vertical-opacity': '1',
    '--tour-widget-theme-oval-horizontal-opacity': '0.82',
    '--tour-widget-theme-oval-vertical-blur': '37px',
    '--tour-widget-theme-oval-horizontal-blur': '86px',
    '--tour-widget-theme-shape-opacity': '0.84',
    '--tour-widget-theme-shape-start': '#6e87db',
    '--tour-widget-theme-shape-middle': '#00e0ff',
    '--tour-widget-theme-shape-end': '#56ff88',
  },
} satisfies Record<'light' | 'dark', CSSObject>;
