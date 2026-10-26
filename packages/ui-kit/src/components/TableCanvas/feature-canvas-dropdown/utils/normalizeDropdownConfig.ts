import type { CanvasNodeDropdownConfig } from '../../TableGlideInstance';
import type { TableConfigDropdown } from '../../types/table-config.type';
import { DROPDOWN_DEFAULTS } from '../constants';
import type { ResolvedCanvasDropdownConfig } from '../types';

/**
 * Накладывает дефолты на конфиг дропдауна: сначала значение с элемента, потом
 * tableConfig.dropdown, потом встроенные дефолты.
 */
export function normalizeDropdownConfig(
  config: CanvasNodeDropdownConfig,
  defaults?: TableConfigDropdown,
): ResolvedCanvasDropdownConfig {
  return {
    items: config.items,
    getItems: config.getItems,
    // trigger только с элемента: canvas-нода решает, участвовать ли в
    // наведении, ещё при построении дерева и про tableConfig не знает.
    trigger: config.trigger ?? DROPDOWN_DEFAULTS.trigger,
    mouseEnterDelay:
      config.mouseEnterDelay ??
      defaults?.mouseEnterDelay ??
      DROPDOWN_DEFAULTS.mouseEnterDelay,
    mouseLeaveDelay:
      config.mouseLeaveDelay ??
      defaults?.mouseLeaveDelay ??
      DROPDOWN_DEFAULTS.mouseLeaveDelay,
    placement:
      config.placement ?? defaults?.placement ?? DROPDOWN_DEFAULTS.placement,
    offset: config.offset ?? defaults?.offset ?? DROPDOWN_DEFAULTS.offset,
    listWidth: config.listWidth ?? defaults?.listWidth,
    listMaxHeight: config.listMaxHeight ?? defaults?.listMaxHeight,
    variant: config.variant ?? defaults?.variant ?? DROPDOWN_DEFAULTS.variant,
    size: config.size ?? defaults?.size,
    zIndex: config.zIndex ?? defaults?.zIndex ?? DROPDOWN_DEFAULTS.zIndex,
    closeOnSelect:
      config.closeOnSelect ??
      defaults?.closeOnSelect ??
      DROPDOWN_DEFAULTS.closeOnSelect,
    closeOnScroll:
      config.closeOnScroll ??
      defaults?.closeOnScroll ??
      DROPDOWN_DEFAULTS.closeOnScroll,
    closeOnOutsideClick:
      config.closeOnOutsideClick ??
      defaults?.closeOnOutsideClick ??
      DROPDOWN_DEFAULTS.closeOnOutsideClick,
    closeOnEsc:
      config.closeOnEsc ?? defaults?.closeOnEsc ?? DROPDOWN_DEFAULTS.closeOnEsc,
    loadingItems:
      config.loadingItems ??
      defaults?.loadingItems ??
      DROPDOWN_DEFAULTS.loadingItems,
    renderError: config.renderError ?? defaults?.renderError,
    renderItem: config.renderItem,
    beforeList: config.beforeList,
    afterList: config.afterList,
    onItemSelect: config.onItemSelect,
    ariaLabel: config.ariaLabel,
    onOpen: config.onOpen,
    onClose: config.onClose,
  };
}
