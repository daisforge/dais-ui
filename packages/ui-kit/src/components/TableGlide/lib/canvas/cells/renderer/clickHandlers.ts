import {
  CellCanvasRoot,
  type CellCanvasPointerDispatchResult,
} from '../CellCanvasRoot';
import { isPointInArea, toRelativePoint } from '../helpers';
import { retrieveRenderData } from '../state';
import type { CanvasCell, RectBounds } from '../types';

type RenderData = ReturnType<typeof retrieveRenderData>;
type RelativePoint = ReturnType<typeof toRelativePoint>;

/**
 * Handle click on CellCanvasRoot elements.
 * Dispatches pointer event to the canvas root for internal handling.
 */
export function handleCanvasRootClick(
  renderData: RenderData,
  relativePoint: RelativePoint,
  event: MouseEvent | React.MouseEvent | undefined
): CellCanvasPointerDispatchResult {
  if (renderData?.canvasRoot instanceof CellCanvasRoot) {
    // Normalize React.MouseEvent to native MouseEvent if available
    // eslint-disable-next-line no-nested-ternary
    const nativeEvent = event
      ? 'nativeEvent' in event
        ? event.nativeEvent
        : event
      : undefined;
    return renderData.canvasRoot.dispatchPointerEvent(
      'click',
      relativePoint.x,
      relativePoint.y,
      nativeEvent
    );
  }
  return {
    propagationStopped: false,
    suppressGridDefault: false,
  };
}

/**
 * Handle clicks on registered click handler areas.
 * Iterates through click handlers and invokes the first matching one.
 */
export function handleClickHandlers(
  renderData: RenderData,
  relativePoint: RelativePoint
): boolean {
  if (renderData?.clickHandlers && Array.isArray(renderData.clickHandlers)) {
    // eslint-disable-next-line no-restricted-syntax
    for (const { area, handler } of renderData.clickHandlers) {
      if (isPointInArea(relativePoint.x, relativePoint.y, area)) {
        handler();
        return true;
      }
    }
  }
  return false;
}

/**
 * Handle cell-level onClick callback.
 * Invokes the cell's onClick handler if defined.
 */
export function handleCellClick(
  cell: CanvasCell,
  relativePoint: RelativePoint,
  rect: RectBounds,
  row: Record<string, unknown> | undefined,
  rowIndex: number,
  renderData: RenderData
): boolean {
  const { onClick } = cell.data;
  if (!onClick) {
    return false;
  }

  if (
    onClick(
      relativePoint.x,
      relativePoint.y,
      rect,
      row,
      rowIndex,
      renderData ?? undefined
    )
  ) {
    return true;
  }
  return false;
}
