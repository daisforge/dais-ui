import { getActiveTheme } from '@ui-kit/utils';

import { BlockGradientScrollColorMap } from './constants';
import {
  BlockGradientScrollPadding,
  BlockGradientScrollResolvedPadding,
  BlockGradientScrollVariant,
} from './types';

export const getGradientColor = (variant: BlockGradientScrollVariant) => {
  const activeTheme = getActiveTheme();
  // betaCoreLight в карте градиента нет — деградируем до light
  const theme = activeTheme === 'betaCoreLight' ? 'light' : activeTheme;

  return BlockGradientScrollColorMap[theme][variant];
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
