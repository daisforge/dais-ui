import {
  borderRadiusL,
  borderRadiusM,
  borderRadiusS,
  borderRadiusXl,
  borderRadiusXs,
  borderRadiusXxl,
  borderRadiusXxs,
  spacing0x,
  spacing1x,
  spacing2x,
  spacing3x,
  spacing4x,
  spacing6x,
  spacing8x,
  spacing10x,
  spacing12x,
  spacing16x,
  spacing20x,
  spacing24x,
  spacing32x,
  spacing40x,
  spacing60x,
} from '@ui-kit/tokens';

export const borderRadius = {
  none: 'none',
  xxs: borderRadiusXxs, // 4px
  xs: borderRadiusXs, // 8px
  s: borderRadiusS, // 12px
  m: borderRadiusM, // 16px
  l: borderRadiusL, // 20px
  xl: borderRadiusXl, // 24px
  xxl: borderRadiusXxl, // 32px
} as const;
/**
 * br = borderRadiusSize
 */
export const br = borderRadius;

export const spacing = {
  x0: spacing0x,
  x1: spacing1x,
  x2: spacing2x,
  x3: spacing3x,
  x4: spacing4x,
  x6: spacing6x,
  x8: spacing8x,
  x10: spacing10x,
  x12: spacing12x,
  x16: spacing16x,
  x20: spacing20x,
  x24: spacing24x,
  x32: spacing32x,
  x40: spacing40x,
  x60: spacing60x,
} as const;
/**
 * s = spacing
 */
export const s = spacing;
