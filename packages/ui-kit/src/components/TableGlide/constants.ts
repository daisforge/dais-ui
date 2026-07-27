import { GridCellKind, type TextCell } from '@glideappsfinal/glide-data-grid';
import { bodyM, bodyS, bodyXXS } from '@ui-kit/tokens';

import {
  ROW_SIZE_TOKENS,
  getRowHeightBySize,
  getTextfieldSizeByRowSize,
  type RowSizeToken,
} from './theming/size-tokens';

export const DEFAULT_ROW_HEIGHT = {
  small: ROW_SIZE_TOKENS.small.rowHeight,
  medium: ROW_SIZE_TOKENS.medium.rowHeight,
  big: ROW_SIZE_TOKENS.big.rowHeight,
} as const;
export const EMPTY_CELL_OBJ: TextCell = {
  kind: GridCellKind.Text,
  data: '',
  displayData: '',
  allowOverlay: true,
  readonly: true,
};

export const SIZES = {
  big: {
    cellVerticalPadding: ROW_SIZE_TOKENS.big.cellVerticalPadding,
    cellHorizontalPadding: ROW_SIZE_TOKENS.big.cellHorizontalPadding,
    textfieldSize: ROW_SIZE_TOKENS.big.textfieldSize,
  },
  medium: {
    cellVerticalPadding: ROW_SIZE_TOKENS.medium.cellVerticalPadding,
    cellHorizontalPadding: ROW_SIZE_TOKENS.medium.cellHorizontalPadding,
    textfieldSize: ROW_SIZE_TOKENS.medium.textfieldSize,
  },
  small: {
    cellVerticalPadding: ROW_SIZE_TOKENS.small.cellVerticalPadding,
    cellHorizontalPadding: ROW_SIZE_TOKENS.small.cellHorizontalPadding,
    textfieldSize: ROW_SIZE_TOKENS.small.textfieldSize,
  },
} as const;

export type GlideSizes = typeof SIZES;
export type SIZES = GlideSizes;
export type SIZE = keyof GlideSizes;
export type GlideSizeConfig = GlideSizes[SIZE];

const EDITOR_CELL_PADDING = {
  'padding-block': '0px',
  'padding-inline': '0px',
} as const;

export type TableGlideSizeConfig = {
  rowHeight: number;
  cell: {
    'padding-block': `${number}px`;
    'padding-inline': `${number}px`;
  };
  editorCell: typeof EDITOR_CELL_PADDING;
  input: RowSizeToken['textfieldSize'];
  icon: 'xs' | 's' | 'm';
  combobox: 's' | 'm' | 'l';
  checkboxOfCombobox: 's' | 'm' | 'l';
  switch: 's' | 'l';
  font: () => typeof bodyXXS;
};

const toPx = (value: number): `${number}px` => `${value}px`;

export const TABLE_GLIDE_SIZES = {
  small: {
    rowHeight: getRowHeightBySize('small'),
    cell: {
      'padding-block': toPx(ROW_SIZE_TOKENS.small.cellVerticalPadding),
      'padding-inline': toPx(ROW_SIZE_TOKENS.small.cellHorizontalPadding),
    },
    editorCell: EDITOR_CELL_PADDING,
    input: getTextfieldSizeByRowSize('small'),
    icon: 'xs',
    combobox: 's',
    checkboxOfCombobox: 's',
    switch: 's',
    font: () => bodyXXS,
  },
  medium: {
    rowHeight: getRowHeightBySize('medium'),
    cell: {
      'padding-block': toPx(ROW_SIZE_TOKENS.medium.cellVerticalPadding),
      'padding-inline': toPx(ROW_SIZE_TOKENS.medium.cellHorizontalPadding),
    },
    editorCell: EDITOR_CELL_PADDING,
    input: getTextfieldSizeByRowSize('medium'),
    icon: 's',
    combobox: 'm',
    checkboxOfCombobox: 'm',
    switch: 's',
    font: () => bodyS,
  },
  big: {
    rowHeight: getRowHeightBySize('big'),
    cell: {
      'padding-block': toPx(ROW_SIZE_TOKENS.big.cellVerticalPadding),
      'padding-inline': toPx(ROW_SIZE_TOKENS.big.cellHorizontalPadding),
    },
    editorCell: EDITOR_CELL_PADDING,
    input: getTextfieldSizeByRowSize('big'),
    icon: 'm',
    combobox: 'l',
    checkboxOfCombobox: 'l',
    switch: 'l',
    font: () => bodyM,
  },
} as const satisfies Record<SIZE, TableGlideSizeConfig>;

export const COLUMN_MIN_WIDTH = 80;
export const DEFAULT_HEADER_HEIGHT = 33;
