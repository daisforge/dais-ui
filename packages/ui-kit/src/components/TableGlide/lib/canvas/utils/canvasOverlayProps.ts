import type { CanvasNodeDropdownConfig } from './dropdownConfig';
import type { CanvasNodePopoverConfig } from './portalClickEvents';
import type { CanvasNodeTooltipConfig } from './portalHoverEvents';

/**
 * Окна, которые canvas-элемент открывает через портал таблицы: подсказка,
 * Popover и Dropdown. Popover и Dropdown на одном элементе не задают: если
 * заданы оба, откроется Popover, а в консоли один раз появится предупреждение.
 */
export interface CanvasOverlayProps {
  /** Подсказка при наведении: строка или объект с текстом и пропсами Tooltip. */
  tooltip?: CanvasNodeTooltipConfig;
  /** Popover по клику или наведению на элемент. */
  popover?: CanvasNodePopoverConfig;
  /** Dropdown по клику или наведению на элемент. */
  dropdown?: CanvasNodeDropdownConfig;
}
