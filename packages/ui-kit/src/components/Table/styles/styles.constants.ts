import {
  bodyL,
  bodyM,
  bodyS,
  outlineNegative,
  outlineSolidPrimary,
  surfaceSolidCard,
  surfaceSolidPrimary,
  textAccent,
  textPrimary,
  textSecondary
} from '@ui-kit/tokens';

import { getCustomColors } from './customColors';

export const SIZES = {
  small: {
    rowHeight: 41,
    cell: {
      'padding-block': '8px',
      'padding-inline': '16px'
    },
    editorCell: {
      'padding-block': '0px',
      'padding-inline': '0px'
    },
    input: 'xs',
    icon: 'xs',
    combobox: 'xs',
    checkboxOfCombobox: 's',
    switch: 's',
    font: () => bodyS
  },
  medium: {
    rowHeight: 49,
    cell: {
      'padding-block': '12px',
      'padding-inline': '16px'
    },

    editorCell: {
      'padding-block': '0px',
      'padding-inline': '0px'
    },
    input: 's',
    icon: 's',
    combobox: 's',
    checkboxOfCombobox: 'm',
    switch: 's',
    font: () => bodyM
  },
  big: {
    rowHeight: 57,
    cell: {
      'padding-block': '16px',
      'padding-inline': '16px'
    },

    editorCell: {
      'padding-block': '0px',
      'padding-inline': '0px'
    },
    input: 's',
    icon: 'm',
    combobox: 's',
    checkboxOfCombobox: 'l',
    switch: 'l',
    font: () => bodyL
  }
} as const;
export type SIZE = keyof typeof SIZES;

export const {
  customColorTokensKeys,
  customColorTokens,
  customColorGlobalVars
} = getCustomColors();

export const CUSTOM_TOKENS_KEYS = {
  ...customColorTokensKeys,
  zIndexCell: '--zIndexCell'
} as const;
export const CUSTOM_TOKENS = {
  ...customColorTokens,
  zIndexCell: `var(${CUSTOM_TOKENS_KEYS.zIndexCell})`
} as const;

export const COLORS = {
  headerColor: CUSTOM_TOKENS.headerColor,
  rowHoverColor: surfaceSolidPrimary,

  textColor: textPrimary,
  headerTextColor: textSecondary,
  selectCellColor: textAccent,

  editableCellColor: CUSTOM_TOKENS.editableCellColor,
  editableCellHoverColor: CUSTOM_TOKENS.editableCellHoverColor,
  editedSuccessfullyCellColor: CUSTOM_TOKENS.editedSuccessfullyCellColor,
  editedSuccessfullyCellHoverColor:
    CUSTOM_TOKENS.editedSuccessfullyCellHoverColor,
  white: surfaceSolidCard,
  border: outlineSolidPrimary,
  red: outlineNegative
} as const;

export const TABLE_BORDER_RADIUS = 8;
export const DURATION = 0.5;
export const LVL_1_ROW_CLASS = 'lvl-1-row';
export const DETAIL_PANEL_ROW_CLASS = 'detail-panel-row';
export const ROW_IDX_START_CLASS = 'row-idx-';
export const FIRST_ROW = `${ROW_IDX_START_CLASS}0`;

export const LIST_WIDTH: Record<keyof typeof SIZES, string> = {
  small: '200px',
  medium: '240px',
  big: '320px'
};

// отнимаем везде 8px, так как это padding
export const FILTER_POPOVER_WIDTH: Record<keyof typeof SIZES, string> = {
  small: '192px',
  medium: '232px',
  big: '232px'
};

export const DEFAULT_TABLE_TRANSITION_DELAY = '0.3s';
export const DEFAULT_TABLE_TRANSITION = `all ${DEFAULT_TABLE_TRANSITION_DELAY} ease-out`;
