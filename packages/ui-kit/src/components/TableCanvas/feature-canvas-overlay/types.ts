import type { ResolvedCanvasDropdownConfig } from '../feature-canvas-dropdown';
import type { ResolvedCanvasPopoverConfig } from '../feature-canvas-popover';
import type {
  TableConfigDropdown,
  TableConfigPopover,
} from '../types/table-config.type';

/**
 * Что открывается на canvas-элементе: Popover (проп `popover`) или Dropdown
 * (проп `dropdown`). Открытие, привязка к элементу и закрытие у них общие,
 * отличается только компонент, который рисует содержимое.
 */
export type ResolvedCanvasOverlay =
  | { kind: 'popover'; config: ResolvedCanvasPopoverConfig }
  | { kind: 'dropdown'; config: ResolvedCanvasDropdownConfig };

/** Значения по умолчанию из tableConfig для Popover и Dropdown. */
export interface CanvasOverlayDefaults {
  popover?: TableConfigPopover;
  dropdown?: TableConfigDropdown;
}

export const CANVAS_OVERLAY_CONTENT_KIND = 'canvas-overlay' as const;

/** Данные открытого Popover или Dropdown в TablePopoverState.contentData. */
export interface CanvasOverlayContentData {
  kind: typeof CANVAS_OVERLAY_CONTENT_KIND;
  overlay: ResolvedCanvasOverlay;
  /**
   * Строка, на которой открыли. Если на её месте окажется другая строка
   * (сортировка, новые данные), содержимое устарело и Popover закрывается.
   */
  anchorRow?: { rowInd: number; row: unknown };
}

export function isCanvasOverlayContentData(
  value: unknown,
): value is CanvasOverlayContentData {
  return (
    typeof value === 'object' &&
    value !== null &&
    (value as { kind?: unknown }).kind === CANVAS_OVERLAY_CONTENT_KIND
  );
}

export function getOpenCanvasOverlay(state: {
  isOpen: boolean;
  contentType: string | null;
  contentData?: unknown;
}): CanvasOverlayContentData | null {
  if (!state.isOpen || state.contentType !== 'custom') return null;
  return isCanvasOverlayContentData(state.contentData)
    ? state.contentData
    : null;
}

export function getOpenHoverOverlay(
  state: Parameters<typeof getOpenCanvasOverlay>[0],
): CanvasOverlayContentData | null {
  const open = getOpenCanvasOverlay(state);
  return open?.overlay.config.trigger === 'hover' ? open : null;
}
