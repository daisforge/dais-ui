import {
  outlineNegative,
  outlineSolidPrimary,
  surfaceSolidCard,
  surfaceSolidPrimary,
  textAccent,
  textPrimary,
  textSecondary
} from '@ui-kit/tokens';

import { TABLE_GLIDE_SIZES } from '../TableGlideInstance';
import type {
  SIZE_GLIDE_INSTANCE as SIZE,
  TableGlideSizeConfig
} from '../TableGlideInstance/type';
import { getCustomColors } from './customColors';

export const SIZES: Record<SIZE, TableGlideSizeConfig> = TABLE_GLIDE_SIZES;

export type { SIZE, TableGlideSizeConfig as TableCanvasSizeConfig };
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

export {
  COLLAPSE_DECOR_DELAY,
  COLLAPSE_DECOR_FADE,
  COLLAPSE_DURATION,
  DURATION
} from '@ui-kit/components/TableCanvasSharedConstants';
export const LVL_1_ROW_CLASS = 'lvl-1-row';
export const DETAIL_PANEL_ROW_CLASS = 'detail-panel-row';
export const ROW_IDX_START_CLASS = 'row-idx-';
export const FIRST_ROW = `${ROW_IDX_START_CLASS}0`;

export const LIST_WIDTH: Record<SIZE, string> = {
  small: '200px',
  medium: '240px',
  big: '320px'
};

export const DEFAULT_TABLE_TRANSITION_DELAY = '0.3s';
export const DEFAULT_TABLE_TRANSITION = `all ${DEFAULT_TABLE_TRANSITION_DELAY} ease-out`;
