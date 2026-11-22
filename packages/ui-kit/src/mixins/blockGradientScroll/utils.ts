import { getActiveTheme } from '@ui-kit/utils';

import { BlockGradientScrollColorMap } from './constants';
import {
  BlockGradientScrollPadding,
  BlockGradientScrollResolvedPadding,
  BlockGradientScrollVariant,
} from './types';

export const getGradientColor = (variant: BlockGradientScrollVariant) => {
  const activeTheme = getActiveTheme();
  // В карте градиента только light / dark / highContrastLight — остальные темы
  // деградируем до ближайшей базы.
  const degradeMap = {
    light: 'light',
    dark: 'dark',
    highContrastLight: 'highContrastLight',
    highContrastDark: 'dark',
    betaCoreLight: 'light',
    betaCoreDark: 'dark',
  } as const;

  return BlockGradientScrollColorMap[degradeMap[activeTheme]][variant];
};

export const getResolvedPadding = (
  padding?: BlockGradientScrollPadding,
): BlockGradientScrollResolvedPadding => {
  if (padding === undefined) {
    return { top: 0, left: 0, right: 0, bottom: 0 };
  }

  if (typeof padding === 'number') {
    return { top: padding, left: padding, right: padding, bottom: padding };
  }

  const { top, left, right, bottom, inline } = padding;

  return {
    top: top ?? 0,
    left: left ?? inline ?? 0,
    right: right ?? inline ?? 0,
    bottom: bottom ?? 0,
  };
};
