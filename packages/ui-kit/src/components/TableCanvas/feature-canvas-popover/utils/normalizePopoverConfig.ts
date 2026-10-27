import type { CanvasNodePopoverConfig } from '../../TableGlideInstance';
import type { TableConfigPopover } from '../../types/table-config.type';
import { POPOVER_DEFAULTS } from '../constants';
import type { ResolvedCanvasPopoverConfig } from '../types';

/**
 * Дополняет настройки Popover: берём значение с элемента или колонки, затем
 * из tableConfig.popover, затем значение по умолчанию.
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
    // trigger берём только с элемента: элемент решает, ловить ли наведение,
    // ещё до того, как известен tableConfig.
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
