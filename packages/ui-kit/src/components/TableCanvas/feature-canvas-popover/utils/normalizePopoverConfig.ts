import type { CanvasNodePopoverConfig } from '../../TableGlideInstance';
import type { TableConfigPopover } from '../../types/table-config.type';
import { POPOVER_DEFAULTS } from '../constants';
import type { ResolvedCanvasPopoverConfig } from '../types';

/**
 * Накладывает дефолты на конфиг поповера: сначала значение с элемента или
 * колонки, потом tableConfig.popover, потом встроенные дефолты.
 */
export function normalizePopoverConfig(
  config: CanvasNodePopoverConfig,
  defaults?: TableConfigPopover,
): ResolvedCanvasPopoverConfig {
  return {
    content: config.content,
    renderContent: config.renderContent,
    placement:
      config.placement ?? defaults?.placement ?? POPOVER_DEFAULTS.placement,
    offset: config.offset ?? defaults?.offset ?? POPOVER_DEFAULTS.offset,
    hasTail: config.hasTail ?? defaults?.hasTail ?? POPOVER_DEFAULTS.hasTail,
    flip: config.flip ?? defaults?.flip ?? POPOVER_DEFAULTS.flip,
    shift: config.shift ?? defaults?.shift ?? POPOVER_DEFAULTS.shift,
    zIndex: config.zIndex ?? defaults?.zIndex ?? POPOVER_DEFAULTS.zIndex,
    closeOnScroll:
      config.closeOnScroll ??
      defaults?.closeOnScroll ??
      POPOVER_DEFAULTS.closeOnScroll,
    closeOnOutsideClick:
      config.closeOnOutsideClick ??
      defaults?.closeOnOutsideClick ??
      POPOVER_DEFAULTS.closeOnOutsideClick,
    closeOnEsc:
      config.closeOnEsc ?? defaults?.closeOnEsc ?? POPOVER_DEFAULTS.closeOnEsc,
    // trigger только с элемента или колонки: canvas-нода решает, участвовать ли
    // в наведении, ещё при построении дерева и про tableConfig не знает.
    trigger: config.trigger ?? POPOVER_DEFAULTS.trigger,
    mouseEnterDelay:
      config.mouseEnterDelay ??
      defaults?.mouseEnterDelay ??
      POPOVER_DEFAULTS.mouseEnterDelay,
    mouseLeaveDelay:
      config.mouseLeaveDelay ??
      defaults?.mouseLeaveDelay ??
      POPOVER_DEFAULTS.mouseLeaveDelay,
    resizable: config.resizable,
    ariaLabel: config.ariaLabel,
    onOpen: config.onOpen,
    onClose: config.onClose,
  };
}
