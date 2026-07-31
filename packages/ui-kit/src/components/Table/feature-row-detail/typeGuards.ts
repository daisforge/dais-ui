import { ObjectForExtending, Prettify } from '../types';
import { DETAIL_PANEL_KEYS, ROW_WITH_DETAIL_DETAIL_KEYS } from './constants';
import { RowDetailConfig } from './types';

export type DetailPanelRow<TRow extends ObjectForExtending> = {
  [DETAIL_PANEL_KEYS.IS_DETAIL_PANEL_ROW]: boolean;
  [DETAIL_PANEL_KEYS.ROW_DATA]: TRow;
  [DETAIL_PANEL_KEYS.ROW_DETAIL_RENDER]: RowDetailConfig<TRow>;
};
export const isDetailPanelRow = <TRow extends ObjectForExtending>(
  r: TRow | DetailPanelRow<TRow>,
): r is Prettify<DetailPanelRow<TRow>> =>
  !!r?.[DETAIL_PANEL_KEYS.IS_DETAIL_PANEL_ROW];

export type RowWithDetailPanel<TRow extends ObjectForExtending> = {
  [ROW_WITH_DETAIL_DETAIL_KEYS.IS_HAVE]: boolean;
  [ROW_WITH_DETAIL_DETAIL_KEYS.IS_HAVE_EXPANDED]: boolean;
  [ROW_WITH_DETAIL_DETAIL_KEYS.EXPAND_ICON_BUTTON_PROPS]: unknown;
} & TRow;

export const isRowWithDetailPanelRow = <TRow extends ObjectForExtending>(
  r: TRow | RowWithDetailPanel<TRow>,
): r is Prettify<RowWithDetailPanel<TRow>> =>
  !!r?.[ROW_WITH_DETAIL_DETAIL_KEYS.IS_HAVE];
