import type { CanvasPortalHoverDetail } from '../../TableGlideInstance';
import type { TooltipData } from '../types';
import { normalizeTooltipConfig } from './normalizeTooltipConfig';
import { getTooltipDataByNodeId } from './tooltipByNodeId';
import { isTooltipConfigFromNode } from './typeGuards';

/**
 * Извлекает tooltip-конфиг из колонки, полученной через EventBus.
 * Все as-касты EventBus-границы сосредоточены здесь.
 */
function resolveColumnTooltipConfig(
  detail: CanvasPortalHoverDetail
): TooltipData | null {
  const column = detail.tooltipContext?.column;
  if (!column || typeof column !== 'object') return null;

  const configKey =
    detail.source === 'header' ? 'headerCellTooltip' : 'cellTooltip';

  if (!(configKey in column)) return null;

  const colTooltip = (column as Record<string, unknown>)[configKey];
  if (typeof colTooltip === 'function') {
    const ctx = detail.tooltipContext;
    const result = colTooltip({
      row: ctx?.row,
      column,
      ctxs: ctx?.ctxs,
      refTable: ctx?.refTable,
      colInd: ctx?.colInd as number | undefined,
      rowInd: ctx?.rowInd as number | undefined,
      theme: ctx?.theme as unknown
    });
    if (result) {
      return normalizeTooltipConfig(result);
    }
  } else if (colTooltip) {
    return normalizeTooltipConfig(colTooltip as string | { text: string });
  }

  return null;
}

/**
 * Резолвит TooltipData из CanvasPortalHoverDetail.
 *
 * Инкапсулирует приведения типов на границе EventBus:
 * tooltipContext приходит как TooltipContextShape<unknown>,
 * потому что CustomEvent стирает дженерики при dispatch.
 *
 * @param detail — данные hover-события из EventBus
 * @param customEnabled — включены ли колоночные/кастомные тултипы
 *   (cellTooltip, headerCellTooltip). Если false, работают только
 *   внутренние тултипы (маппинг по nodeId и проп tooltip на Canvas-элементе).
 *
 * Приоритет:
 * 1. Маппинг nodeId → текст из TOOLTIP_TEXTS (всегда) — внутренние тултипы UI таблицы
 * 2. tooltipFromNode — проп tooltip на Canvas-элементе (всегда)
 * 3. Колоночный cellTooltip / headerCellTooltip (только при customEnabled)
 */
export function resolveTooltipData(
  detail: CanvasPortalHoverDetail,
  customEnabled: boolean
): TooltipData | null {
  // Приоритет 1: внутренний маппинг по nodeId (работает всегда)
  // Внутренние тултипы UI таблицы (drag-иконка и т.д.) имеют наивысший приоритет,
  // чтобы колоночный конфиг не мог их перебить.
  const byNodeId = getTooltipDataByNodeId(detail);
  if (byNodeId) return byNodeId;

  // Приоритет 2: проп tooltip прямо на canvas-ноде (работает всегда)
  if (isTooltipConfigFromNode(detail.tooltipFromNode)) {
    const normalized = normalizeTooltipConfig(detail.tooltipFromNode);
    if (normalized) return normalized;
  }

  // Приоритет 3: колоночный cellTooltip / headerCellTooltip (только при customEnabled)
  if (customEnabled) {
    const columnResult = resolveColumnTooltipConfig(detail);
    if (columnResult) return columnResult;
  }

  return null;
}
