export const ROW_SIZE_TOKENS = {
  small: {
    rowHeight: 20,
    cellVerticalPadding: 4,
    cellHorizontalPadding: 4,
    textfieldSize: 'xs',
  },
  medium: {
    rowHeight: 32,
    cellVerticalPadding: 7,
    cellHorizontalPadding: 8,
    textfieldSize: 's',
  },
  big: {
    rowHeight: 48,
    cellVerticalPadding: 12,
    cellHorizontalPadding: 16,
    textfieldSize: 's',
  },
} as const;

export type RowSizeTokens = typeof ROW_SIZE_TOKENS;
type RowSizeName = keyof RowSizeTokens;
export type RowSizeToken = RowSizeTokens[RowSizeName];

// Возвращает базовую высоту строки для выбранного размера.
export const getRowHeightBySize = (size: RowSizeName) =>
  ROW_SIZE_TOKENS[size].rowHeight;

// Возвращает размер textfield для выбранного размера строки.
export const getTextfieldSizeByRowSize = (size: RowSizeName) =>
  ROW_SIZE_TOKENS[size].textfieldSize;
