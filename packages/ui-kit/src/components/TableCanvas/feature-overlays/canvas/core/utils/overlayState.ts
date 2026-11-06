import type { CanvasOverlayContentData } from '../types';

/** Метка данных Popover или Dropdown в TablePopoverState.contentData. */
export const CANVAS_OVERLAY_CONTENT_KIND: CanvasOverlayContentData['kind'] =
  'canvas-overlay';

export function isCanvasOverlayContentData(
  value: unknown,
): value is CanvasOverlayContentData {
  return (
    typeof value === 'object' &&
    value !== null &&
    (value as { kind?: unknown }).kind === CANVAS_OVERLAY_CONTENT_KIND
  );
}

/** Открытый Popover или Dropdown canvas-элемента, если он есть в состоянии. */
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

/** Открытое окно, если оно открыто по наведению. */
export function getOpenHoverOverlay(
  state: Parameters<typeof getOpenCanvasOverlay>[0],
): CanvasOverlayContentData | null {
  const open = getOpenCanvasOverlay(state);
  return open?.overlay.config.trigger === 'hover' ? open : null;
}
