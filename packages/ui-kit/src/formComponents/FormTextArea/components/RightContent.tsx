import { Flow } from '@ui-kit/components/Flow';
import { BodyXS } from '@ui-kit/components/Typography';
import { textNegative, textSecondary } from '@ui-kit/tokens';
import React from 'react';

import { ButtonStyled } from '../ui';
import type { TRightContentProps } from './types';

export const RightContent = ({
  onClear,
  currentCount,
  maxCount,
  showClearButton = true
}: TRightContentProps) => {
  let colorCurrentCount;
  if (maxCount) {
    colorCurrentCount = currentCount > maxCount ? textNegative : textSecondary;
  }

  return (
    <Flow mainAxisGap="8px" crossAxisGap="8px">
      {currentCount > 0 && showClearButton && (
        <ButtonStyled view="clear" onClick={onClear}>
          <BodyXS>Очистить</BodyXS>
        </ButtonStyled>
      )}
      {maxCount && (
        <Flow>
          <BodyXS color={colorCurrentCount}>{currentCount}</BodyXS>
          <BodyXS color={textSecondary}>/</BodyXS>
          <BodyXS color={textSecondary}>{maxCount}</BodyXS>
        </Flow>
      )}
    </Flow>
  );
};
