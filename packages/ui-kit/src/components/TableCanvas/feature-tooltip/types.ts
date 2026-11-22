import type { RefObject } from 'react';

import type {
  CanvasNodeTooltipConfig,
  CanvasNodeTooltipProps,
} from '../TableGlideInstance';

/** Строка или объект с полем text, или null. */
export type TooltipConfigResult = CanvasNodeTooltipConfig | null;

export interface CanvasTooltipOverlayProps {
  containerRef?: RefObject<EventTarget | null>;
  /**
   * Включены ли колоночные/кастомные тултипы (cellTooltip, headerCellTooltip).
   * Внутренние тултипы по nodeId работают всегда.
   * @default false
   */
  customEnabled?: boolean;
  /** Глобальная задержка перед показом тултипа (мс). Per-node переопределяет. */
  mouseEnterDelay?: number;
  /** Глобальная задержка перед скрытием тултипа (мс). Per-node переопределяет. */
  mouseLeaveDelay?: number;
  /** Глобальная минимальная ширина тултипа (число = px). Per-node переопределяет. */
  minWidth?: number | string;
  /** Глобальная максимальная ширина тултипа (число = px). Per-node переопределяет. */
  maxWidth?: number | string;
}

export interface TooltipData {
  tooltipText: string;
  tooltipProps?: CanvasNodeTooltipProps;
  mouseEnterDelay?: number;
  mouseLeaveDelay?: number;
}
