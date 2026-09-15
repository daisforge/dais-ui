import { getExpandAllTooltipOffsetX } from '../../feature-tree/tree-disclosure-icons';
import type { RowSize } from '../../renders/rowIconConfig';
import type { CanvasPortalHoverDetail } from '../../TableGlideInstance';
import {
  HEADER_TOOLTIP_COLUMN_IS_PINNED_ID,
  HEADER_TOOLTIP_COLUMN_UNPIN_ID,
  HEADER_TOOLTIP_DRAG_ID,
  HEADER_TOOLTIP_EXPAND_ALL_ROWS_ID,
  HEADER_TOOLTIP_FILTER_ID,
  HEADER_TOOLTIP_HIDDEN_COLS_ID,
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
  [HEADER_TOOLTIP_HIDDEN_COLS_ID]: 'Дважды нажмите, чтобы развернуть',
};

/**
 * Сдвиг тултипа по X для нод, у которых глиф иконки смещён внутри кнопки.
 * Двойной шеврон «раскрыть/скрыть все» прижат к левому краю, поэтому тултип
 * по центру кнопки оказался бы правее иконки.
 */
const TOOLTIP_OFFSET_X_BY_NODE_ID: Record<string, (size: RowSize) => number> = {
  [HEADER_TOOLTIP_EXPAND_ALL_ROWS_ID]: getExpandAllTooltipOffsetX,
  [HEADER_TOOLTIP_HIDE_ALL_ROWS_ID]: getExpandAllTooltipOffsetX,
};

const getRowSize = (detail: CanvasPortalHoverDetail): RowSize =>
  (detail.tooltipContext?.theme as { rowSize?: RowSize } | undefined)
    ?.rowSize ?? 'big';

/** Данные тултипа по nodeId из внутреннего маппинга TOOLTIP_TEXTS. */
export function getTooltipDataByNodeId(
  detail: CanvasPortalHoverDetail,
): TooltipData | null {
  const { nodeId } = detail;
  if (!nodeId) return null;
  const text = TOOLTIP_TEXTS[nodeId];
  if (text == null) return null;

  const getOffsetX = TOOLTIP_OFFSET_X_BY_NODE_ID[nodeId];

  return {
    tooltipText: text,
    tooltipProps: getOffsetX ? { offsetX: getOffsetX(getRowSize(detail)) } : {},
  };
}
