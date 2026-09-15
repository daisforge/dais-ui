import { DEFAULT_ROW_HEIGHT } from '../../TableGlide';

export type RowSize = keyof typeof DEFAULT_ROW_HEIGHT;

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

/** Зазор между шевроном раскрытия строки и текстом ячейки */
export const TREE_BUTTON_GAP: Record<RowSize, number> = {
  big: 8,
  medium: 2,
  small: 0,
};

/** Иконки слева в шапке: раскрыть все строки, drag, пин */
export const HEADER_LEFT_ICONS_CONFIG: Record<
  RowSize,
  { squareSize: number; iconSize: number; gapToText: number }
> = {
  big: { squareSize: 24, iconSize: 16, gapToText: 8 },
  medium: { squareSize: 24, iconSize: 16, gapToText: 2 },
  small: { squareSize: 20, iconSize: 12, gapToText: 0 },
};
