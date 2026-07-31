import { DEFAULT_ROW_HEIGHT } from '../../TableGlide';

export type RowSize = keyof typeof DEFAULT_ROW_HEIGHT;

export const ROW_HEIGHT_BY_SIZE = DEFAULT_ROW_HEIGHT;

export const ROW_ICON_BUTTON_CONFIG: Record<
  RowSize,
  {
    overrideSquareSize: number;
    overrideIconSize: number;
  }
> = {
  big: {
    overrideSquareSize: 24,
    overrideIconSize: 24,
  },
  medium: {
    overrideSquareSize: 24,
    overrideIconSize: 16,
  },
  small: {
    overrideSquareSize: 20,
    overrideIconSize: 12,
  },
};
