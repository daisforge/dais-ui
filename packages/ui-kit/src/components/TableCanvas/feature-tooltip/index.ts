// Компоненты
export { CanvasTooltipOverlay } from './components/CanvasTooltipOverlay';

// Хуки
export type {
  PortalHoverState,
  UsePortalHoverOptions,
} from './hooks/usePortalHover';
export { usePortalHover } from './hooks/usePortalHover';

// Типы
export type {
  CanvasTooltipOverlayProps,
  TooltipConfigResult,
  TooltipData,
} from './types';

// Константы
export { HEADER_TOOLTIP_DRAG_ID } from './constants';

// Утилиты (только публичные)
export { TOOLTIP_TEXTS } from './utils/tooltipByNodeId';
