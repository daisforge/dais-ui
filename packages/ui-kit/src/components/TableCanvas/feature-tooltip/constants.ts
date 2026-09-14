/** Id узла канваса для тултипа иконки «перетащить колонку» в заголовке */
export const HEADER_TOOLTIP_DRAG_ID = 'header-tooltip-drag';
/** Id узла канваса для тултипа иконки «фильтровать по колонке» в заголовке */
export const HEADER_TOOLTIP_FILTER_ID = 'header-tooltip-filter';
/** Id узла канваса для тултипа иконки «сортировать по колонке» в заголовке */
export const HEADER_TOOLTIP_SORTING_ID = 'header-tooltip-sorting';
/** Id узла канваса для тултипа иконки «раскрыть все строки» */
export const HEADER_TOOLTIP_EXPAND_ALL_ROWS_ID =
  'header-tooltip-expand-all-rows';
/** Id узла канваса для тултипа иконки «скрыть все строки» */
export const HEADER_TOOLTIP_HIDE_ALL_ROWS_ID = 'header-tooltip-hide-all-rows';
/** Id узла канваса для тултипа иконки «колонка закреплена» (индикатор, открепить нельзя) */
export const HEADER_TOOLTIP_COLUMN_IS_PINNED_ID =
  'header-tooltip-column-is-pinned';
/** Id узла канваса для тултипа кнопки «открепить колонку» в заголовке */
export const HEADER_TOOLTIP_COLUMN_UNPIN_ID = 'header-tooltip-column-unpin';
/** Id узла канваса для тултипа индикатора скрытых столбцов (полосатая линия на границе
 * в шапке). Живёт в общем слое TableCanvasSharedConstants: его шлёт TableGlide и
 * резолвит feature-tooltip, поэтому берём из нейтрального места. */
export { HEADER_TOOLTIP_HIDDEN_COLS_ID } from '@ui-kit/components/TableCanvasSharedConstants';

export const DEFAULT_MOUSE_ENTER_DELAY = 500;
