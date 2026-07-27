import {
  outlineSolidPrimary,
  textAccent,
  textInfo,
  textNegative,
  textParagraph,
  textPositive,
  textPrimary,
  textSecondary,
  textTertiary,
  textWarning
} from '@ui-kit/tokens';

import type { TViewColors } from '../types';

export const viewColors: TViewColors = {
  primary: textPrimary,
  secondary: textSecondary,
  info: textInfo,
  negative: textNegative,
  warning: textWarning,
  positive: textPositive,
  tertiary: textTertiary,
  accent: textAccent,
  paragraph: textParagraph,
  outlinesSolidPrimary: outlineSolidPrimary
};
