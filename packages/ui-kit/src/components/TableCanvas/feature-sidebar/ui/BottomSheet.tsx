import React from 'react';

import type { BottomSheetConfig } from '../../types';
import { DEFAULT_BOTTOM_SHEET_HEIGHT, toCssSize } from '../constants';
import {
  BOTTOM_SHEET_AVAILABLE_HEIGHT,
  BottomSheetContainer,
} from './BottomSheet.styled';

export const BottomSheet = ({
  height = DEFAULT_BOTTOM_SHEET_HEIGHT,
  minHeight = DEFAULT_BOTTOM_SHEET_HEIGHT,
  content,
  roundLeft = false,
  roundRight = false,
}: BottomSheetConfig & { roundLeft?: boolean; roundRight?: boolean }) => {
  const minimumHeight = `min(${toCssSize(
    minHeight,
  )}, ${BOTTOM_SHEET_AVAILABLE_HEIGHT})`;
  return (
    <BottomSheetContainer
      $roundLeft={roundLeft}
      $roundRight={roundRight}
      className="rdg-table-bottom-sheet"
      style={{
        // Анимируем ограниченную высоту, чтобы большой размер не задерживал сворачивание.
        height: `clamp(${minimumHeight}, ${toCssSize(
          height,
        )}, ${BOTTOM_SHEET_AVAILABLE_HEIGHT})`,
        minHeight: minimumHeight,
      }}
    >
      {content}
    </BottomSheetContainer>
  );
};
