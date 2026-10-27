import type { CanvasNodeDropdownConfig } from './dropdownConfig';
import type { CanvasNodePopoverConfig } from './portalClickEvents';
import type { CanvasNodeTooltipConfig } from './portalHoverEvents';

/**
 * Окна, которые canvas-элемент открывает через портал таблицы: подсказка,
 * Popover и Dropdown. Popover и Dropdown на одном элементе задать нельзя.
 */
export type CanvasOverlayProps = {
  /** Подсказка при наведении: строка или объект с текстом и пропсами Tooltip. */
  tooltip?: CanvasNodeTooltipConfig;
} & (
  | {
      /** Popover по клику или наведению на элемент. */
      popover?: CanvasNodePopoverConfig;
      dropdown?: never;
    }
  | {
      /** Dropdown по клику или наведению на элемент. */
      dropdown?: CanvasNodeDropdownConfig;
      popover?: never;
    }
);
