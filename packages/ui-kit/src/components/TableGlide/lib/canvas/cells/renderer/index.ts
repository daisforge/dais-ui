// Re-export types
export type {
  CanvasCellRendererConfig,
  CursorType,
  PointerKeyPair,
  PointerKeyX,
  PointerKeyY,
  RendererSelectArgs,
  RelativePoint,
  RendererClickArgs,
  RendererDrawArgs,
} from './types';
export type { CanvasClickDispatchResult } from './performCanvasClick';
export type { CanvasPointerIntentResult } from './performCanvasPointerDownIntent';

// Re-export constants
export {
  DEFAULT_CURSOR,
  LEGACY_HOVER_CURSOR,
  POINTER_CANDIDATE_KEYS,
  RELATIVE_COORD_TOLERANCE,
} from './constants';

// Re-export pointer utilities
export {
  getRelativePointerPosition,
  isAbsoluteCoords,
  isRelativeCoords,
} from './pointerUtils';

// Re-export click handlers
export {
  handleCanvasRootClick,
  handleCellClick,
  handleClickHandlers,
} from './clickHandlers';

// Re-export hover handlers
export {
  handleCanvasRootHover,
  updateHoverStateIfNeeded,
} from './hoverHandlers';

// Re-export shared click pipeline helpers
export { performCanvasClick } from './performCanvasClick';
export { performCanvasPointerDownIntent } from './performCanvasPointerDownIntent';

// Re-export main renderer
export {
  canvasCellRenderer,
  createCanvasCellRenderer,
} from './canvasCellRenderer';
