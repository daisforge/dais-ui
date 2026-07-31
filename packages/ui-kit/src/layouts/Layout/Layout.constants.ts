import { spacing8x, spacing12x, spacing16x } from '@ui-kit/tokens';

export const LAYOUT_VARIANTS = {
  V1_1: 'V1_1',
  V2_1: 'V2_1',
  V2_2: 'V2_2',
  V3_1: 'V3_1',
  V3_2: 'V3_2',
  V3_3: 'V3_3',
  V4_1: 'V4_1',
  V4_2: 'V4_2',
  V5_1: 'V5_1',
} as const;

export const LAYOUT_SPACING = {
  XL: {
    horizontal: 'auto',
    vertical: {
      top: spacing8x,
      bottom: spacing16x,
    },
    gutter: spacing12x,
    headerHeight: 'auto', // Ранее был фиксированной высотой 143px
  },
  L: {
    horizontal: spacing16x,
    vertical: {
      top: spacing8x,
      bottom: spacing12x,
    },
    gutter: spacing8x,
    headerHeight: 'auto', // Ранее был фиксированной высотой 143px
  },
  /* TODO: Добавить другие breakpoints (L, M, S) когда понадобится */
} as const;
