import React, { type CSSProperties } from 'react';

import type { BottomSheetConfig } from '../../types';
import { DEFAULT_BOTTOM_SHEET_HEIGHT, toCssSize } from '../constants';
import {
  BOTTOM_SHEET_AVAILABLE_HEIGHT,
  BottomSheetContainer,
} from './BottomSheet.styled';

export const BottomSheet = ({
  height = DEFAULT_BOTTOM_SHEET_HEIGHT,
  minHeight = DEFAULT_BOTTOM_SHEET_HEIGHT,
  maxHeight,
  content,
  roundLeft = false,
  roundRight = false,
}: BottomSheetConfig & { roundLeft?: boolean; roundRight?: boolean }) => {
  const maximumHeight =
    maxHeight === undefined
      ? BOTTOM_SHEET_AVAILABLE_HEIGHT
      : `min(${toCssSize(maxHeight)}, ${BOTTOM_SHEET_AVAILABLE_HEIGHT})`;
  const minimumHeight = `min(${toCssSize(minHeight)}, ${maximumHeight})`;
  const autoHeight = height === 'auto';
  return (
    <BottomSheetContainer
      $roundLeft={roundLeft}
      $roundRight={roundRight}
      $autoHeight={autoHeight}
      className="rdg-table-bottom-sheet"
      style={
        {
          '--rdg-bottom-sheet-height': autoHeight
            ? 'auto'
            : `clamp(${minimumHeight}, ${toCssSize(height)}, ${maximumHeight})`,
          '--rdg-bottom-sheet-min-height': minimumHeight,
          '--rdg-bottom-sheet-max-height': maximumHeight,
        } as CSSProperties
      }
    >
      {content}
    </BottomSheetContainer>
  );
};
