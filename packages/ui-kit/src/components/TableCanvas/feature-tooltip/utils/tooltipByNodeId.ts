import type { CanvasPortalHoverDetail } from '../../TableGlideInstance';
import {
  HEADER_TOOLTIP_COLUMN_IS_PINNED_ID,
  HEADER_TOOLTIP_COLUMN_UNPIN_ID,
  HEADER_TOOLTIP_DRAG_ID,
  HEADER_TOOLTIP_EXPAND_ALL_ROWS_ID,
  HEADER_TOOLTIP_FILTER_ID,
  HEADER_TOOLTIP_HIDE_ALL_ROWS_ID,
  HEADER_TOOLTIP_SORTING_ID,
} from '../constants';
import type { TooltipData } from '../types';

export const TOOLTIP_TEXTS: Record<string, string> = {
  [HEADER_TOOLTIP_DRAG_ID]: 'Перетащить колонку',
  [HEADER_TOOLTIP_FILTER_ID]: 'Отфильтровать по данной колонке',
  [HEADER_TOOLTIP_SORTING_ID]: 'Отсортировать по данной колонке',
  [HEADER_TOOLTIP_EXPAND_ALL_ROWS_ID]: 'Раскрыть все дочерние строки',
  [HEADER_TOOLTIP_HIDE_ALL_ROWS_ID]: 'Скрыть все дочерние строки',
  [HEADER_TOOLTIP_COLUMN_IS_PINNED_ID]: 'Колонка закреплена',
  [HEADER_TOOLTIP_COLUMN_UNPIN_ID]: 'Открепить колонку',
};

/** Данные тултипа по nodeId из внутреннего маппинга TOOLTIP_TEXTS. */
export function getTooltipDataByNodeId(
  detail: CanvasPortalHoverDetail,
): TooltipData | null {
  const { nodeId } = detail;
  if (!nodeId) return null;
  const text = TOOLTIP_TEXTS[nodeId];
  return text != null ? { tooltipText: text, tooltipProps: {} } : null;
}
